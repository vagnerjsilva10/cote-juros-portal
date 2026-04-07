import type { Metadata } from 'next';

import { CreditCardsPage } from '@/components/credit-cards-page';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, webPageSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Comparador de Cartoes de Credito | Cote Juros',
  description:
    'Compare cartoes de credito por anuidade, beneficio e perfil de aprovacao com criterios tecnicos.',
  path: '/cartoes-de-credito',
  keywords: ['comparador de cartao', 'cartao sem anuidade', 'cashback', 'milhas', 'rotativo']
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
            { name: 'Cartoes de credito', path: '/cartoes-de-credito' }
          ]),
          webPageSchema({
            name: 'Comparador de cartoes Cote Juros',
            description: 'Pagina de comparacao de cartoes de credito por custo e beneficio.',
            path: '/cartoes-de-credito'
          })
        ]}
      />
      <CreditCardsPage />
    </>
  );
}
