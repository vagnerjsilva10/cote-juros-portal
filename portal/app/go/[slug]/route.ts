import { redirect } from 'next/navigation';
import { type NextRequest } from 'next/server';

import { getSiteUrl } from '@/lib/env';
import { getOfferBySlug } from '@/lib/offers';
import { hashIp, trackOfferClick } from '@/lib/tracking';

export async function GET(request: NextRequest, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;
  const offer = await getOfferBySlug(slug);

  if (!offer) {
    redirect(getSiteUrl());
  }

  const searchParams = request.nextUrl.searchParams;
  const sourcePage = searchParams.get('source_page');
  const forwardedFor = request.headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0]?.trim() ?? null : null;

  try {
    await trackOfferClick({
      offer_id: offer.id,
      source_page: sourcePage,
      referrer: request.headers.get('referer'),
      user_agent: request.headers.get('user-agent'),
      ip_hash: hashIp(ip),
      utm_source: searchParams.get('utm_source'),
      utm_medium: searchParams.get('utm_medium'),
      utm_campaign: searchParams.get('utm_campaign')
    });
  } catch {
    // nao bloqueia redirecionamento em caso de falha no tracking
  }

  redirect(offer.redirect_url);
}