import type { Metadata } from 'next';

import { JsonLd } from '@/components/json-ld';
import { TermosDeUsoPage } from '@/components/termos-de-uso-page';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, webPageSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Termos de Uso da Plataforma Financeira | Cote Juros',
  description:
    'Consulte as condições de uso do Cote Juros com linguagem clara, responsabilidade técnica e foco em transparência.',
  path: '/termos-de-uso',
  keywords: [
    'termos de uso',
    'plataforma financeira',
    'responsabilidades do usuário',
    'condições de uso',
    'transparência financeira'
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
            { name: 'Termos de uso', path: '/termos-de-uso' }
          ]),
          webPageSchema({
            name: 'Termos de uso Cote Juros',
            description: 'Condições de acesso e responsabilidades no uso do portal financeiro.',
            path: '/termos-de-uso'
          })
        ]}
      />
      <TermosDeUsoPage />
    </>
  );
}
