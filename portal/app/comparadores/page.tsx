import type { Metadata } from 'next';

import { ComparadoresHubPage } from '@/components/comparadores-hub-page';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, webPageSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Comparador de Juros: Cartões, Empréstimos e Financiamento | Cote Juros',
  description:
    'Compare taxas de juros, CET e condições de crédito em um hub profissional para decisões financeiras mais seguras.',
  path: '/comparadores',
  keywords: [
    'comparador de juros',
    'comparador de empréstimos',
    'comparador de cartões',
    'financiamento imobiliário',
    'custo efetivo total'
  ]
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          webSiteSchema(),
          breadcrumbSchema([
            { name: 'Início', path: '/' },
            { name: 'Comparadores', path: '/comparadores' }
          ]),
          webPageSchema({
            name: 'Comparadores financeiros Cote Juros',
            description:
              'Central de comparadores para crédito, com foco em taxa real, risco e transparência de custo.',
            path: '/comparadores'
          })
        ]}
      />
      <ComparadoresHubPage />
    </>
  );
}
