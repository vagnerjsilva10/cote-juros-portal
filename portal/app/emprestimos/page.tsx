import type { Metadata } from 'next';

import { EmprestimosPage } from '@/components/emprestimos-page';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, webPageSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Comparador de Emprestimos | Cote Juros',
  description:
    'Compare emprestimos por taxa, prazo e chance de aprovacao para reduzir custo total de credito.',
  path: '/emprestimos',
  keywords: ['comparador de emprestimo', 'taxa de emprestimo', 'CET', 'renegociacao', 'credito pessoal']
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
            { name: 'Emprestimos', path: '/emprestimos' }
          ]),
          webPageSchema({
            name: 'Comparador de emprestimos Cote Juros',
            description: 'Pagina para comparar emprestimos com foco em custo total.',
            path: '/emprestimos'
          })
        ]}
      />
      <EmprestimosPage />
    </>
  );
}
