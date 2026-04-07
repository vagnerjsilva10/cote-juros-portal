import type { Metadata } from 'next';

import { JsonLd } from '@/components/json-ld';
import { ToolsHubPage } from '@/components/tools-hub-page';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, webPageSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Ferramentas Financeiras: Simuladores de Juros e Credito | Cote Juros',
  description:
    'Use simuladores de credito, financiamento e organizacao financeira para decidir com clareza e reduzir risco.',
  path: '/ferramentas',
  keywords: [
    'simulador de juros',
    'calculadora financeira',
    'simulador de financiamento',
    'simulador de emprestimo',
    'ferramentas financeiras'
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
            { name: 'Inicio', path: '/' },
            { name: 'Ferramentas', path: '/ferramentas' }
          ]),
          webPageSchema({
            name: 'Ferramentas Cote Juros',
            description: 'Hub de simuladores financeiros para credito, financiamento e consumo.',
            path: '/ferramentas'
          })
        ]}
      />
      <ToolsHubPage />
    </>
  );
}
