import type { Metadata } from 'next';

import { BlogPage } from '@/components/blog-page';
import { JsonLd } from '@/components/json-ld';
import { blogPostingSchema, breadcrumbSchema, buildPageMetadata, organizationSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Blog Financeiro: Juros, Dívidas e Estratégia de Crédito | Cote Juros',
  description:
    'Leia análises e artigos sobre juros, renegociação de dívidas e gestão financeira com linguagem clara e rigor técnico.',
  path: '/blog',
  keywords: [
    'blog financeiro',
    'juros do cartão',
    'renegociação de dívidas',
    'educação financeira',
    'estratégia de crédito'
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
            { name: 'Editorial', path: '/editorial' },
            { name: 'Blog', path: '/blog' }
          ]),
          blogPostingSchema({
            headline: 'Como analisar juros e reduzir dívidas com método técnico',
            description:
              'Guia editorial do Cote Juros para interpretar custos financeiros e tomar decisões de crédito com segurança.',
            path: '/blog',
            datePublished: '2026-04-07',
            dateModified: '2026-04-07'
          })
        ]}
      />
      <BlogPage />
    </>
  );
}
