import type { Metadata } from 'next';

import { ComparadorInterativoPage } from '@/components/comparador-interativo-page';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, webPageSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Comparador Interativo de Produtos Financeiros | Cote Juros',
  description:
    'Aplique filtros e compare cartoes, emprestimos e financiamento em uma experiencia interativa.',
  path: '/comparador-interativo',
  keywords: ['comparador interativo', 'filtro de credito', 'comparar financiamento', 'comparar emprestimo', 'cartoes']
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
            { name: 'Comparador interativo', path: '/comparador-interativo' }
          ]),
          webPageSchema({
            name: 'Comparador interativo Cote Juros',
            description: 'Comparacao com filtros por objetivo financeiro e perfil.',
            path: '/comparador-interativo'
          })
        ]}
      />
      <ComparadorInterativoPage />
    </>
  );
}
