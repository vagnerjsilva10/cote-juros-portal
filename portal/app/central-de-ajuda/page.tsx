import type { Metadata } from 'next';

import { CentralAjudaPage } from '@/components/central-ajuda-page';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, webPageSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Central de Ajuda Financeira: Suporte e Dúvidas | Cote Juros',
  description:
    'Acesse respostas sobre comparadores, análise de dívidas e suporte técnico para usar o portal com segurança.',
  path: '/central-de-ajuda',
  keywords: [
    'central de ajuda financeira',
    'suporte financeiro',
    'dúvidas sobre crédito',
    'comparador de juros ajuda',
    'atendimento Cote Juros'
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
            { name: 'Central de ajuda', path: '/central-de-ajuda' }
          ]),
          webPageSchema({
            name: 'Central de ajuda Cote Juros',
            description: 'Suporte para uso do portal e entendimento dos serviços financeiros.',
            path: '/central-de-ajuda'
          })
        ]}
      />
      <CentralAjudaPage />
    </>
  );
}
