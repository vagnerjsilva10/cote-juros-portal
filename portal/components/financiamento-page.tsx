import { getFeaturedOffers, getOffersByType } from '@/lib/offers';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ComparatorPageTemplate } from '@/components/offers/comparator-page-template';

export async function FinanciamentoPage() {
  const offers = await getOffersByType('financing', { featured: true });
  const recommendedOffers = await getFeaturedOffers('financing');

  return (
    <>
      <SiteHeader activePath="/comparadores" />
      <main>
        <ComparatorPageTemplate
          eyebrow="Comparador de financiamento"
          title="Financiamento com estrutura para comparacao tecnica e conversao rastreada."
          subtitle="Compare propostas de longo prazo com uma camada editorial que separa taxa promocional de custo real do contrato."
          sourcePage="financiamento"
          offers={offers}
          filters={[
            { label: 'Melhores opcoes de financiamento', href: '/melhores-opcoes-de-financiamento', active: true },
            { label: 'Comparadores', href: '/comparadores' },
            { label: 'Diagnostico financeiro', href: '/diagnostico-financeiro' }
          ]}
          explanation={{
            title: 'Como tornar financiamento uma operacao calculada',
            points: [
              'Avalie CET, amortizacao e efeito da entrada no caixa de medio prazo.',
              'Use a tabela comparativa para visualizar spread entre instituicoes e estrutura de contrato.',
              'Integre a decisao ao diagnostico para saber se o timing da contratacao faz sentido.'
            ]
          }}
          recommendationTitle="Financiamentos priorizados pelo portal"
          recommendationRationale="As ofertas abaixo priorizam previsibilidade de fluxo, atendimento especializado e clareza contratual."
          recommendationOffers={recommendedOffers.slice(0, 3)}
        />
      </main>
      <SiteFooter />
    </>
  );
}