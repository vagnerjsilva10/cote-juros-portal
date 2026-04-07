import type { OfferWithPartner } from '@/lib/monetization/types';

import { OfferBadge } from '@/components/offers/offer-badge';
import { OfferCTA } from '@/components/offers/offer-cta';
import { OfferHighlights } from '@/components/offers/offer-highlights';

function badgesForOffer(offer: OfferWithPartner) {
  const metadata = offer.metadata_json as Record<string, unknown>;
  const values = Array.isArray(metadata.badges) ? (metadata.badges as string[]) : [];

  if (offer.featured) {
    return ['Destaque', ...values];
  }

  return values;
}

export function OfferCard({ offer, sourcePage }: { offer: OfferWithPartner; sourcePage: string }) {
  const badges = badgesForOffer(offer);
  const metadata = offer.metadata_json as Record<string, unknown>;
  const ctaLabel = typeof metadata.cta_label === 'string' ? metadata.cta_label : 'Ver oferta';

  return (
    <article className="offer-card">
      <div className="offer-card-brand">
        <p className="offer-eyebrow">{offer.bank}</p>
        <h3>{offer.name}</h3>
        <p className="offer-summary">{offer.short_description}</p>
      </div>

      <div className="offer-card-benefits">
        <div className="offer-badge-row">
          {badges.map((badge) => (
            <OfferBadge key={`${offer.slug}-${badge}`} label={badge} tone={badge === 'Destaque' ? 'primary' : 'neutral'} />
          ))}
        </div>
        <OfferHighlights offer={offer} />
      </div>

      <dl className="offer-metrics">
        <div>
          <dt>Anuidade</dt>
          <dd>{offer.annual_fee ?? 'Nao se aplica'}</dd>
        </div>
        <div>
          <dt>Taxa</dt>
          <dd>{offer.interest_rate ?? offer.apr ?? 'Sob consulta'}</dd>
        </div>
        <div>
          <dt>Perfil</dt>
          <dd>{offer.income_requirement ?? 'Analise variavel'}</dd>
        </div>
      </dl>

      <div className="offer-card-actions">
        <div className="offer-rating-block">
          <span className="offer-rating-value">{offer.rating.toFixed(1)}</span>
          <span className="offer-rating-label">avaliacao editorial</span>
        </div>
        <OfferCTA slug={offer.slug} sourcePage={sourcePage} label={ctaLabel} />
      </div>
    </article>
  );
}
