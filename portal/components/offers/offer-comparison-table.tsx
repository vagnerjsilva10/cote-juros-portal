import type { OfferWithPartner } from '@/lib/monetization/types';

import { OfferCTA } from '@/components/offers/offer-cta';

export function OfferComparisonTable({ offers, sourcePage }: { offers: OfferWithPartner[]; sourcePage: string }) {
  return (
    <div className="table-wrap offer-table-wrap">
      <table>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Oferta</th>
            <th>Banco</th>
            <th>Anuidade / Custo</th>
            <th>Taxa</th>
            <th>Rating</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {offers.map((offer, index) => (
            <tr key={offer.id}>
              <td>
                <span className="table-rank">#{index + 1}</span>
              </td>
              <td>
                <div className="table-offer-cell">
                  <strong>{offer.name}</strong>
                  <span>{offer.short_description}</span>
                </div>
              </td>
              <td>{offer.bank}</td>
              <td>{offer.annual_fee ?? 'Nao se aplica'}</td>
              <td>{offer.interest_rate ?? offer.apr ?? 'Sob consulta'}</td>
              <td>{offer.rating.toFixed(1)}</td>
              <td>
                <OfferCTA slug={offer.slug} sourcePage={sourcePage} label="Aplicar agora" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
