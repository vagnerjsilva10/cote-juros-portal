import type { Metadata } from 'next';

import { EditorialArtigoPage } from '@/components/editorial-artigo-page';
import { JsonLd } from '@/components/json-ld';
import { blogPostingSchema, breadcrumbSchema, buildPageMetadata, organizationSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Artigo Editorial Financeiro | Cote Juros',
  description:
    'Analise aprofundada sobre reducao de custo financeiro, credito e planejamento em cenarios reais.',
  path: '/editorial-artigo',
  keywords: ['artigo financeiro', 'estrategia de credito', 'planejamento financeiro', 'juros', 'editorial']
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
            { name: 'Editorial', path: '/editorial' },
            { name: 'Artigo', path: '/editorial-artigo' }
          ]),
          blogPostingSchema({
            headline: 'Como reduzir custo financeiro em 90 dias',
            description: 'Guia editorial com foco em reducao de custo de credito e recuperacao de liquidez.',
            path: '/editorial-artigo',
            datePublished: '2026-04-07',
            dateModified: '2026-04-07'
          })
        ]}
      />
      <EditorialArtigoPage />
    </>
  );
}
