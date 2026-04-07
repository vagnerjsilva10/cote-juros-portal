import { getFeaturedOffers, getOffersByType } from '@/lib/offers';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ComparatorPageTemplate } from '@/components/offers/comparator-page-template';

export async function EmprestimosPage() {
  const offers = await getOffersByType('loan', { featured: true });
  const recommendedOffers = await getFeaturedOffers('loan');

  return (
    <>
      <SiteHeader activePath="/comparadores" />
      <main>
        <ComparatorPageTemplate
          eyebrow="Comparador de emprestimos"
          title="Emprestimos preparados para operacao com tracking, recomendacao e paginas SEO."
          subtitle="Use comparacao por taxa, prazo e elegibilidade para transformar trafego em lead, clique rastreado e recomendacao contextual."
          sourcePage="emprestimos"
          offers={offers}
          filters={[
            { label: 'Melhores emprestimos', href: '/melhores-emprestimos', active: true },
            { label: 'Para negativado', href: '/emprestimo-para-negativado' },
            { label: 'Diagnostico financeiro', href: '/diagnostico-financeiro' }
          ]}
          explanation={{
            title: 'O que avaliar antes de clicar em uma oferta de credito',
            points: [
              'Taxa nominal so faz sentido junto com CET, prazo e probabilidade de aprovacao.',
              'A pagina de origem do clique fica registrada para analisar performance por SEO e comparador.',
              'Regras de recomendacao ajudam a priorizar ofertas para reorganizacao ou liquidez.'
            ]
          }}
          recommendationTitle="Emprestimos indicados para reorganizacao"
          recommendationRationale="Estas ofertas foram priorizadas por velocidade de contratacao, custo e aderencia a perfis que buscam reorganizacao financeira."
          recommendationOffers={recommendedOffers.slice(0, 3)}
        />
      </main>
      <SiteFooter />
    </>
  );
}