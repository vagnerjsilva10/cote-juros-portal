'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname || pathname.startsWith('/admin')) {
      return;
    }

    void fetch('/api/events/page-view', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        path: `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`,
        utm_source: searchParams.get('utm_source'),
        utm_medium: searchParams.get('utm_medium'),
        utm_campaign: searchParams.get('utm_campaign')
      }),
      keepalive: true
    });
  }, [pathname, searchParams]);

  return null;
}
