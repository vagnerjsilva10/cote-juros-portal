import type { Metadata } from 'next';

import { FinanciamentoPage } from '@/components/financiamento-page';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, webPageSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Comparador de Financiamento | Cote Juros',
  description:
    'Analise financiamento por taxa, prazo e amortizacao para reduzir custo no longo prazo.',
  path: '/financiamento',
  keywords: ['comparador de financiamento', 'SAC', 'PRICE', 'financiamento imobiliario', 'taxa de juros']
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          webSiteSchema(),
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Comparadores', path: '/comparadores' },
            { name: 'Financiamento', path: '/financiamento' }
          ]),
          webPageSchema({
            name: 'Comparador de financiamento Cote Juros',
            description: 'Comparacao de financiamento com foco em custo total e previsibilidade.',
            path: '/financiamento'
          })
        ]}
      />
      <FinanciamentoPage />
    </>
  );
}
