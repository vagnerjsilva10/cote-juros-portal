import type { Metadata } from 'next';

import { GuiasPage } from '@/components/guias-page';
import { JsonLd } from '@/components/json-ld';
import { blogPostingSchema, breadcrumbSchema, buildPageMetadata, organizationSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Guias Financeiros: Score, Empréstimos e Cartões | Cote Juros',
  description:
    'Aprenda a reduzir juros e organizar sua vida financeira com guias técnicos sobre score, crédito e financiamento.',
  path: '/guias',
  keywords: [
    'guias financeiros',
    'score de crédito',
    'empréstimo pessoal',
    'cartão de crédito',
    'financiamento'
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
            { name: 'Guias', path: '/guias' }
          ]),
          blogPostingSchema({
            headline: 'Guia prático para melhorar score e reduzir custo de crédito',
            description:
              'Conteúdo técnico do Cote Juros com passos para organizar dívidas, melhorar score e negociar taxas.',
            path: '/guias',
            datePublished: '2026-04-07',
            dateModified: '2026-04-07'
          })
        ]}
      />
      <GuiasPage />
    </>
  );
}
