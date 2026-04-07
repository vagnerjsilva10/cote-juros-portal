import type { Metadata } from 'next';

import { HomePage } from '@/components/homepage';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, webPageSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Cote Juros | Comparadores, Ferramentas e Diagnostico Financeiro',
  description:
    'Portal financeiro premium com comparadores, simuladores, editorial e diagnostico para decisoes de credito e patrimonio.',
  path: '/',
  keywords: [
    'comparador financeiro',
    'diagnostico financeiro',
    'simulador de emprestimo',
    'curadoria financeira',
    'portal de juros'
  ]
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          webSiteSchema(),
          breadcrumbSchema([{ name: 'Inicio', path: '/' }]),
          webPageSchema({
            name: 'Home Cote Juros',
            description:
              'Portal institucional e editorial do Cote Juros com comparadores, ferramentas e diagnostico financeiro.',
            path: '/'
          })
        ]}
      />
      <HomePage />
    </>
  );
}
