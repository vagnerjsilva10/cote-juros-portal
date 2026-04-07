import type { Metadata } from 'next';

import { JsonLd } from '@/components/json-ld';
import { ProdutosPage } from '@/components/produtos-page';
import {
  breadcrumbSchema,
  buildPageMetadata,
  financialServiceSchema,
  organizationSchema,
  webSiteSchema
} from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Produtos Financeiros e Inteligência Financeira | Cote Juros',
  description:
    'Conheça os produtos do Cote Juros para análise de dívidas, comparação de juros e inteligência financeira com rigor técnico.',
  path: '/produtos',
  keywords: [
    'produtos financeiros',
    'análise de dívidas',
    'comparador de juros',
    'inteligência financeira',
    'planejamento financeiro'
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
            { name: 'Produtos', path: '/produtos' }
          ]),
          financialServiceSchema({
            name: 'Produtos financeiros Cote Juros',
            description:
              'Hub de comparadores, ferramentas e inteligência financeira para decisões de crédito com transparência.',
            path: '/produtos'
          })
        ]}
      />
      <ProdutosPage />
    </>
  );
}
