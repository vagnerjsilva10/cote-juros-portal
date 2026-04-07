import type { Metadata } from 'next';

import { CartoesPage } from '@/components/cartoes-page';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, webPageSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Cartoes de Credito para Comparar | Cote Juros',
  description:
    'Compare cartoes com tracking interno, disclosure editorial e base pronta para afiliados e parceiros.',
  path: '/cartoes',
  keywords: ['cartoes de credito', 'comparador de cartoes', 'cashback', 'anuidade', 'afiliados']
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
            { name: 'Cartoes', path: '/cartoes' }
          ]),
          webPageSchema({
            name: 'Comparador de cartoes Cote Juros',
            description: 'Pagina de comparacao de cartoes conectada ao offer engine.',
            path: '/cartoes'
          })
        ]}
      />
      <CartoesPage />
    </>
  );
}