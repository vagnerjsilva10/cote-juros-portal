import Link from 'next/link';

import { buildTrackedOfferHref } from '@/lib/tracking';

export function OfferCTA({
  slug,
  sourcePage,
  label,
  extraParams
}: {
  slug: string;
  sourcePage: string;
  label?: string;
  extraParams?: Record<string, string | undefined>;
}) {
  return (
    <Link className="btn btn-primary" href={buildTrackedOfferHref(slug, sourcePage, extraParams)}>
      {label ?? 'Ver oferta'}
    </Link>
  );
}
