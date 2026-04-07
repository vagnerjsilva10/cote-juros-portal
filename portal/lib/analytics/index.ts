import { createHash } from 'crypto';

import { isSupabaseConfigured } from '@/lib/env';
import { getServiceSupabaseClient } from '@/lib/supabase/clients';

type ClickRow = {
  offer_id: string;
  source_page: string | null;
};

type PageViewRow = {
  path: string | null;
};

type OfferRow = {
  id: string;
  category: string;
  product_type: string;
  name: string;
};

export type PageViewPayload = {
  path: string;
  referrer: string | null;
  user_agent: string | null;
  ip_hash: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
};

export function hashPageViewIp(ip: string | null) {
  if (!ip) {
    return null;
  }

  return createHash('sha256').update(ip).digest('hex');
}

export async function trackPageView(payload: PageViewPayload) {
  if (!isSupabaseConfigured()) {
    return;
  }

  const client = getServiceSupabaseClient();
  const { error } = await client.from('page_views').insert(payload);

  if (error) {
    throw new Error(error.message);
  }
}

function aggregateCounts<T extends string>(values: T[]) {
  const map = new Map<T, number>();

  values.forEach((value) => {
    map.set(value, (map.get(value) ?? 0) + 1);
  });

  return [...map.entries()]
    .map(([key, count]) => ({ key, count }))
    .sort((left, right) => right.count - left.count);
}

function normalizePath(value: string | null) {
  if (!value) {
    return 'desconhecida';
  }

  const pathOnly = value.split('?')[0] ?? value;
  const normalized = pathOnly.replace(/^\//, '').trim();
  return normalized || 'home';
}

export async function getAnalyticsOverview() {
  if (!isSupabaseConfigured()) {
    return {
      totalClicks: 0,
      totalPageViews: 0,
      topOffers: [] as Array<{ offer_id: string; clicks: number }>,
      sourcePages: [] as Array<{ source_page: string; clicks: number; page_views: number; ctr: number }>,
      topCategories: [] as Array<{ category: string; clicks: number }>
    };
  }

  const client = getServiceSupabaseClient();
  const [{ count: totalClicks }, { count: totalPageViews }, { data: clickRows }, { data: pageRows }, { data: offerRows }] = await Promise.all([
    client.from('offer_clicks').select('*', { count: 'exact', head: true }),
    client.from('page_views').select('*', { count: 'exact', head: true }),
    client.from('offer_clicks').select('offer_id, source_page').limit(2000),
    client.from('page_views').select('path').limit(2000),
    client.from('offers').select('id, category, product_type, name').limit(1000)
  ]);

  const clicks = (clickRows ?? []) as ClickRow[];
  const pageViews = (pageRows ?? []) as PageViewRow[];
  const offers = (offerRows ?? []) as OfferRow[];
  const pageViewCounts = new Map(aggregateCounts(pageViews.map((row) => normalizePath(row.path))).map((item) => [item.key, item.count]));
  const offerMap = new Map(offers.map((offer) => [offer.id, offer]));

  const topCategories = aggregateCounts(
    clicks
      .map((row) => offerMap.get(row.offer_id)?.category ?? offerMap.get(row.offer_id)?.product_type ?? 'desconhecida')
      .filter(Boolean)
  )
    .slice(0, 5)
    .map((item) => ({
      category: item.key,
      clicks: item.count
    }));

  return {
    totalClicks: totalClicks ?? 0,
    totalPageViews: totalPageViews ?? 0,
    topOffers: aggregateCounts(clicks.map((row) => row.offer_id)).slice(0, 5).map((item) => ({
      offer_id: item.key,
      clicks: item.count
    })),
    sourcePages: aggregateCounts(clicks.map((row) => normalizePath(row.source_page)))
      .slice(0, 8)
      .map((item) => {
        const pageViewsForSource = pageViewCounts.get(item.key) ?? 0;
        return {
          source_page: item.key,
          clicks: item.count,
          page_views: pageViewsForSource,
          ctr: pageViewsForSource > 0 ? Number(((item.count / pageViewsForSource) * 100).toFixed(2)) : 0
        };
      }),
    topCategories
  };
}
