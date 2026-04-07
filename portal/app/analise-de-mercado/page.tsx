import type { Metadata } from 'next';

import { AnaliseMercadoPage } from '@/components/analise-mercado-page';
import { JsonLd } from '@/components/json-ld';
import {
  breadcrumbSchema,
  buildPageMetadata,
  financialServiceSchema,
  organizationSchema,
  webSiteSchema
} from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Análise de Mercado Financeiro: Tendências de Juros e Crédito | Cote Juros',
  description:
    'Acompanhe análises de mercado com foco em taxa de juros, crédito e impacto financeiro para decisões mais inteligentes.',
  path: '/analise-de-mercado',
  keywords: [
    'análise de mercado financeiro',
    'tendência de juros',
    'mercado de crédito',
    'comparativo financeiro',
    'estratégia financeira'
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
            { name: 'Análise de mercado', path: '/analise-de-mercado' }
          ]),
          financialServiceSchema({
            name: 'Análise de mercado Cote Juros',
            description:
              'Serviço editorial de inteligência de mercado para leitura técnica de crédito, juros e risco.',
            path: '/analise-de-mercado'
          })
        ]}
      />
      <AnaliseMercadoPage />
    </>
  );
}
