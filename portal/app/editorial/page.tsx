import type { Metadata } from 'next';

import { EditorialHubPage } from '@/components/editorial-hub-page';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, serviceSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Editorial Financeiro: Guias, Blog e Análises Técnicas | Cote Juros',
  description:
    'Acesse o editorial financeiro do Cote Juros com conteúdo confiável sobre crédito, dívidas e inteligência financeira aplicada.',
  path: '/editorial',
  keywords: [
    'editorial financeiro',
    'educação financeira',
    'análise de crédito',
    'dívidas e juros',
    'conteúdo financeiro confiável'
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
            { name: 'Editorial', path: '/editorial' }
          ]),
          serviceSchema({
            name: 'Editorial financeiro Cote Juros',
            description: 'Produção de conteúdo técnico e transparente sobre crédito e planejamento financeiro.',
            path: '/editorial'
          })
        ]}
      />
      <EditorialHubPage />
    </>
  );
}
