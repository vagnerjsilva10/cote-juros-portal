import type { OfferWithPartner } from '@/lib/monetization/types';

import { EditorialDisclosure } from '@/components/offers/editorial-disclosure';
import { FilterBar } from '@/components/offers/filter-bar';
import { OfferCard } from '@/components/offers/offer-card';
import { OfferComparisonTable } from '@/components/offers/offer-comparison-table';
import { RecommendationBlock } from '@/components/offers/recommendation-block';
import { ComparisonHero } from '@/components/offers/comparison-hero';
import { CTASection } from '@/components/ui/cta-section';
import { SectionHeader } from '@/components/ui/section-header';
import { coteFinanceAppUrl } from '@/data/homepage';

export function ComparatorPageTemplate({
  eyebrow,
  title,
  subtitle,
  sourcePage,
  offers,
  filters,
  explanation,
  recommendationTitle,
  recommendationRationale,
  recommendationOffers
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  sourcePage: string;
  offers: OfferWithPartner[];
  filters: Array<{ label: string; href: string; active?: boolean }>;
  explanation: { title: string; points: string[] };
  recommendationTitle: string;
  recommendationRationale: string;
  recommendationOffers: OfferWithPartner[];
}) {
  return (
    <>
      <ComparisonHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        actions={[
          { label: 'Fazer diagnostico financeiro', href: '/diagnostico-financeiro' },
          { label: 'Conhecer Cote Finance AI', href: coteFinanceAppUrl, external: true, tone: 'secondary' }
        ]}
      />
      <FilterBar title="Explorar por intencao" filters={filters} />
      <section className="section-space">
        <div className="container">
          <SectionHeader
            title="Ofertas em destaque"
            description="Cards rastreados com base pronta para afiliados, parceiros diretos e campanhas por categoria."
          />
          <div className="offer-grid">
            {offers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} sourcePage={sourcePage} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-space section-muted">
        <div className="container">
          <SectionHeader title="Tabela comparativa" description="Visao consolidada para comparar custo, taxa, rating e elegibilidade." />
          <OfferComparisonTable offers={offers} sourcePage={sourcePage} />
          <EditorialDisclosure />
        </div>
      </section>
      <section className="section-space">
        <div className="container two-col-grid">
          <article className="panel-card">
            <h2>{explanation.title}</h2>
            <ul>
              {explanation.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
          <article className="panel-card">
            <h2>Criterios de comparacao</h2>
            <ul>
              <li>Custo total, nao apenas taxa promocional.</li>
              <li>Aderencia ao perfil de renda, score e objetivo financeiro.</li>
              <li>Qualidade da operacao e clareza comercial do parceiro.</li>
            </ul>
          </article>
        </div>
      </section>
      <RecommendationBlock
        heading={recommendationTitle}
        rationale={recommendationRationale}
        offers={recommendationOffers}
        sourcePage={sourcePage}
      />
      <CTASection
        title="Quer uma recomendacao por diagnostico?"
        description="Responda poucas perguntas e conecte a comparacao a uma recomendacao orientada por regra de negocio."
        primaryLabel="Iniciar diagnostico"
        primaryHref="/diagnostico-financeiro"
        secondaryLabel="Abrir Cote Finance AI"
        secondaryHref={coteFinanceAppUrl}
        secondaryExternal
        dark
      />
    </>
  );
}
