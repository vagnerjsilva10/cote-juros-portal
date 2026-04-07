import type { Metadata } from 'next';

import { ContasPage } from '@/components/contas-page';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, webPageSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contas Digitais para Comparar | Cote Juros',
  description:
    'Compare contas digitais com base pronta para tracking, parceiros e paginas SEO escalaveis.',
  path: '/contas',
  keywords: ['conta digital', 'melhores contas digitais', 'comparador de contas', 'tracking de afiliados']
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
            { name: 'Contas', path: '/contas' }
          ]),
          webPageSchema({
            name: 'Comparador de contas Cote Juros',
            description: 'Pagina de comparacao de contas digitais conectada ao offer engine.',
            path: '/contas'
          })
        ]}
      />
      <ContasPage />
    </>
  );
}