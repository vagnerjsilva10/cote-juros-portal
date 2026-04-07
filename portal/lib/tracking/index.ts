import { createHash } from 'crypto';

import type { OfferClick } from '@/lib/monetization/types';
import { isSupabaseConfigured } from '@/lib/env';
import { getServiceSupabaseClient } from '@/lib/supabase/clients';

export function hashIp(ip: string | null) {
  if (!ip) {
    return null;
  }

  return createHash('sha256').update(ip).digest('hex');
}

export async function trackOfferClick(payload: OfferClick) {
  if (!isSupabaseConfigured()) {
    return;
  }

  const client = getServiceSupabaseClient();
  const { error } = await client.from('offer_clicks').insert(payload);

  if (error) {
    throw new Error(error.message);
  }
}

export function buildTrackedOfferHref(slug: string, sourcePage: string, extra: Record<string, string | undefined> = {}) {
  const params = new URLSearchParams({ source_page: sourcePage });

  Object.entries(extra).forEach(([key, value]) => {
    if (value) {
      params.set(key, value);
    }
  });

  return `/go/${slug}?${params.toString()}`;
}
