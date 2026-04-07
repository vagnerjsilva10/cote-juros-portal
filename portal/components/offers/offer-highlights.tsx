import type { OfferWithPartner } from '@/lib/monetization/types';

function extractHighlights(offer: OfferWithPartner) {
  const metadata = offer.metadata_json as Record<string, unknown>;
  const values = Array.isArray(metadata.highlights) ? (metadata.highlights as string[]) : [];

  if (values.length > 0) {
    return values;
  }

  return [offer.short_description, offer.rewards, offer.cashback ? `Cashback ${offer.cashback}` : null].filter(Boolean) as string[];
}

export function OfferHighlights({ offer }: { offer: OfferWithPartner }) {
  const highlights = extractHighlights(offer);

  return (
    <ul className="offer-highlights">
      {highlights.map((highlight) => (
        <li key={`${offer.slug}-${highlight}`}>{highlight}</li>
      ))}
    </ul>
  );
}
