import { type NextRequest, NextResponse } from 'next/server';

import { hashPageViewIp, trackPageView } from '@/lib/analytics';

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as {
    path?: string;
    utm_source?: string | null;
    utm_medium?: string | null;
    utm_campaign?: string | null;
  };

  const forwardedFor = request.headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0]?.trim() ?? null : null;

  try {
    await trackPageView({
      path: payload.path ?? '/',
      referrer: request.headers.get('referer'),
      user_agent: request.headers.get('user-agent'),
      ip_hash: hashPageViewIp(ip),
      utm_source: payload.utm_source ?? null,
      utm_medium: payload.utm_medium ?? null,
      utm_campaign: payload.utm_campaign ?? null
    });
  } catch {
    // tracking de page view e best effort
  }

  return NextResponse.json({ ok: true });
}