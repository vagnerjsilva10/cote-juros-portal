import Link from 'next/link';

import { getFeaturedOffers } from '@/lib/offers';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { EditorialDisclosure } from '@/components/offers/editorial-disclosure';
import { OfferCard } from '@/components/offers/offer-card';
import { CTASection } from '@/components/ui/cta-section';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';
import { coteFinanceAppUrl } from '@/data/homepage';

const comparatorCards = [
  {
    title: 'Cartoes',
    description: 'Cashback, anuidade, perfil de aprovacao e tracking por clique.',
    href: '/cartoes'
  },
  {
    title: 'Emprestimos',
    description: 'Taxa, prazo, score e origem de clique por SEO ou comparador.',
    href: '/emprestimos'
  },
  {
    title: 'Financiamento',
    description: 'Comparacao de custo real para jornadas de longo prazo.',
    href: '/financiamento'
  },
  {
    title: 'Contas',
    description: 'Ofertas de entrada para captacao, organizacao financeira e cross-sell.',
    href: '/contas'
  }
];

export async function ComparadoresHubPage() {
  const featuredOffers = await getFeaturedOffers();

  return (
    <>
      <SiteHeader activePath="/comparadores" />
      <main>
        <PageHero
          eyebrow="Comparadores"
          title="Hub de comparadores monetizaveis com tracking, disclosure e estrutura escalavel."
          subtitle="Cada categoria foi preparada para operar com parceiros, ofertas, paginas SEO e recomendacao por diagnostico em um mesmo backbone de dados."
          actions={[
            { label: 'Fazer diagnostico financeiro', href: '/diagnostico-financeiro' },
            { label: 'Conhecer Cote Finance AI', href: coteFinanceAppUrl, external: true, tone: 'secondary' }
          ]}
        />

        <section className="section-space section-muted">
          <div className="container">
            <SectionHeader
              title="Categorias prontas para operacao"
              description="Cada rota possui estrutura para cards de oferta, tabela comparativa, paginas SEO e CTA rastreado."
            />
            <div className="comparison-hub-grid">
              {comparatorCards.map((card) => (
                <article key={card.title} className="comparison-hub-card">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <Link className="btn btn-secondary" href={card.href}>
                    Abrir categoria
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container">
            <SectionHeader
              title="Ofertas em destaque"
              description="Essas ofertas ja saem pelo redirect interno /go/[slug], evitando link de afiliado espalhado no frontend."
            />
            <div className="offer-grid">
              {featuredOffers.slice(0, 4).map((offer) => (
                <OfferCard key={offer.id} offer={offer} sourcePage="comparadores" />
              ))}
            </div>
            <EditorialDisclosure />
          </div>
        </section>

        <CTASection
          title="Quer transformar comparacao em recomendacao personalizada?"
          description="Use o diagnostico para classificar perfil, cruzar regras e priorizar ofertas adequadas antes do clique final."
          primaryLabel="Iniciar diagnostico"
          primaryHref="/diagnostico-financeiro"
          secondaryLabel="Abrir Cote Finance AI"
          secondaryHref={coteFinanceAppUrl}
          secondaryExternal
          dark
        />
      </main>
      <SiteFooter />
    </>
  );
}