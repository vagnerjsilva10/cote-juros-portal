import { getFeaturedOffers, getOffersByType } from '@/lib/offers';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ComparatorPageTemplate } from '@/components/offers/comparator-page-template';

export async function CartoesPage() {
  const offers = await getOffersByType('credit_card', { featured: true });
  const recommendedOffers = await getFeaturedOffers('credit_card');

  return (
    <>
      <SiteHeader activePath="/comparadores" />
      <main>
        <ComparatorPageTemplate
          eyebrow="Comparador de cartoes"
          title="Cartoes de credito com base pronta para afiliados, tracking e comparacao real."
          subtitle="Compare anuidade, cashback, pontos, rating e perfil de aprovacao em uma estrutura pensada para monetizacao profissional."
          sourcePage="cartoes"
          offers={offers}
          filters={[
            { label: 'Melhores cartoes', href: '/melhores-cartoes', active: true },
            { label: 'Sem anuidade', href: '/cartoes-sem-anuidade' },
            { label: 'Com cashback', href: '/cartoes-com-cashback' },
            { label: 'Para score baixo', href: '/cartoes-para-score-baixo' }
          ]}
          explanation={{
            title: 'Como escolher um cartao sem cair em promessa comercial',
            points: [
              'Compare retorno liquido com custo total e exigencia de renda.',
              'Entenda o valor real de cashback, pontos e beneficios secundarios.',
              'Use diagnostico e regras para priorizar oferta aderente ao seu momento.'
            ]
          }}
          recommendationTitle="Cartoes recomendados para comecar"
          recommendationRationale="Priorizamos cartoes com melhor equilibrio entre aprovacao, custo recorrente e beneficios uteis no dia a dia."
          recommendationOffers={recommendedOffers.slice(0, 3)}
        />
      </main>
      <SiteFooter />
    </>
  );
}