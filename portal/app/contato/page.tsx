import type { Metadata } from 'next';

import { ContatoPage } from '@/components/contato-page';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, buildPageMetadata, contactPageSchema, organizationSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contato Cote Juros: Atendimento e Suporte Financeiro',
  description:
    'Fale com especialistas do Cote Juros para dúvidas sobre comparadores, análise de dívidas e inteligência financeira.',
  path: '/contato',
  keywords: [
    'contato Cote Juros',
    'suporte financeiro',
    'atendimento crédito',
    'análise de dívidas suporte',
    'inteligência financeira'
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
            { name: 'Contato', path: '/contato' }
          ]),
          contactPageSchema()
        ]}
      />
      <ContatoPage />
    </>
  );
}
