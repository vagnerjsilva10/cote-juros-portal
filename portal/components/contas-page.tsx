import { getFeaturedOffers, getOffersByType } from '@/lib/offers';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ComparatorPageTemplate } from '@/components/offers/comparator-page-template';

export async function ContasPage() {
  const offers = await getOffersByType('digital_account', { featured: true });
  const recommendedOffers = await getFeaturedOffers('digital_account');

  return (
    <>
      <SiteHeader activePath="/comparadores" />
      <main>
        <ComparatorPageTemplate
          eyebrow="Comparador de contas"
          title="Contas digitais para operacao diaria, captacao de lead e crescimento por SEO."
          subtitle="Compare contas por custo, liquidez, recursos e aderencia a quem esta estruturando a base financeira."
          sourcePage="contas"
          offers={offers}
          filters={[
            { label: 'Melhores contas digitais', href: '/melhores-contas-digitais', active: true },
            { label: 'Diagnostico financeiro', href: '/diagnostico-financeiro' },
            { label: 'Comparadores', href: '/comparadores' }
          ]}
          explanation={{
            title: 'Quando uma conta digital faz diferenca na jornada',
            points: [
              'Centraliza rotina, reduz atrito e pode melhorar visibilidade de caixa.',
              'Abre porta para relacionamento que depois sustenta recomendacoes de outros produtos.',
              'Funciona muito bem como oferta de entrada em funis de SEO e diagnostico.'
            ]
          }}
          recommendationTitle="Contas digitais recomendadas"
          recommendationRationale="Priorizamos contas com baixo custo de entrada e boa operacao para o dia a dia financeiro."
          recommendationOffers={recommendedOffers.slice(0, 3)}
        />
      </main>
      <SiteFooter />
    </>
  );
}