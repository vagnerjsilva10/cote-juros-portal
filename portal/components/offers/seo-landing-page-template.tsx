import type { OfferWithPartner, SeoPage } from '@/lib/monetization/types';

import { EditorialDisclosure } from '@/components/offers/editorial-disclosure';
import { OfferCard } from '@/components/offers/offer-card';
import { OfferComparisonTable } from '@/components/offers/offer-comparison-table';
import { RecommendationBlock } from '@/components/offers/recommendation-block';
import { ComparisonHero } from '@/components/offers/comparison-hero';
import { CTASection } from '@/components/ui/cta-section';
import { SectionHeader } from '@/components/ui/section-header';
import { coteFinanceAppUrl } from '@/data/homepage';

export function SeoLandingPageTemplate({
  page,
  offers,
  sourcePage,
  recommendationOffers
}: {
  page: SeoPage;
  offers: OfferWithPartner[];
  sourcePage: string;
  recommendationOffers: OfferWithPartner[];
}) {
  return (
    <>
      <ComparisonHero
        eyebrow="SEO monetizavel"
        title={page.h1}
        subtitle={page.intro}
        actions={[
          { label: 'Fazer diagnostico financeiro', href: '/diagnostico-financeiro' },
          { label: 'Conhecer Cote Finance AI', href: coteFinanceAppUrl, external: true, tone: 'secondary' }
        ]}
      />
      <section className="section-space">
        <div className="container">
          <SectionHeader
            title="Ofertas filtradas por criterio"
            description="A pagina utiliza filtros de banco de dados para puxar ofertas alinhadas ao tema da busca."
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
          <SectionHeader
            title="Comparativo rapido"
            description="Estrutura pronta para crescer com mais ofertas, feeds e parceiros."
          />
          <OfferComparisonTable offers={offers} sourcePage={sourcePage} />
          <EditorialDisclosure />
        </div>
      </section>
      <RecommendationBlock
        heading="Quer afinar a recomendacao para o seu perfil?"
        rationale="O diagnostico financeiro usa regras de recomendacao para priorizar ofertas compativeis com seu contexto."
        offers={recommendationOffers}
        sourcePage={sourcePage}
      />
      <CTASection
        title="Pronto para aprofundar a decisao?"
        description="Combine esta pagina SEO com diagnostico, comparadores e o Cote Finance AI para uma jornada mais completa."
        primaryLabel="Ver comparadores"
        primaryHref="/comparadores"
        secondaryLabel="Abrir Cote Finance AI"
        secondaryHref={coteFinanceAppUrl}
        secondaryExternal
        dark
      />
    </>
  );
}
