import type { OfferWithPartner } from '@/lib/monetization/types';

import { OfferCard } from '@/components/offers/offer-card';

export function RecommendationBlock({
  heading,
  rationale,
  offers,
  sourcePage
}: {
  heading: string;
  rationale: string;
  offers: OfferWithPartner[];
  sourcePage: string;
}) {
  if (offers.length === 0) {
    return null;
  }

  return (
    <section className="section-space recommendation-block-wrap">
      <div className="container">
        <div className="recommendation-head">
          <p className="section-eyebrow">Recomendacoes</p>
          <h2>{heading}</h2>
          <p>{rationale}</p>
        </div>
        <div className="offer-grid">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} sourcePage={sourcePage} />
          ))}
        </div>
      </div>
    </section>
  );
}
