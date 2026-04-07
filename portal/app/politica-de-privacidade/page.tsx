import type { Metadata } from 'next';

import { JsonLd } from '@/components/json-ld';
import { PoliticaPrivacidadePage } from '@/components/politica-privacidade-page';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, webPageSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Política de Privacidade do Portal Financeiro | Cote Juros',
  description:
    'Entenda como o Cote Juros coleta, utiliza e protege dados para manter transparência e segurança na experiência financeira.',
  path: '/politica-de-privacidade',
  keywords: [
    'política de privacidade',
    'proteção de dados',
    'segurança da informação',
    'portal financeiro confiável',
    'LGPD'
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
            { name: 'Política de privacidade', path: '/politica-de-privacidade' }
          ]),
          webPageSchema({
            name: 'Política de privacidade Cote Juros',
            description: 'Diretrizes de privacidade, uso de dados e direitos do usuário.',
            path: '/politica-de-privacidade'
          })
        ]}
      />
      <PoliticaPrivacidadePage />
    </>
  );
}
