import type { Metadata } from 'next';

import { DiagnosticoFinanceiroPage } from '@/components/diagnostico-financeiro-page';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, webPageSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Diagnostico Financeiro | Cote Juros',
  description:
    'Entenda renda, gastos, dividas e oportunidades com um diagnostico financeiro claro e acionavel.',
  path: '/diagnostico-financeiro',
  keywords: ['diagnostico financeiro', 'planejamento financeiro', 'analise de dividas', 'organizacao financeira', 'saude financeira']
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
            { name: 'Diagnostico financeiro', path: '/diagnostico-financeiro' }
          ]),
          webPageSchema({
            name: 'Diagnostico financeiro Cote Juros',
            description: 'Fluxo de diagnostico para mapear prioridades financeiras.',
            path: '/diagnostico-financeiro'
          })
        ]}
      />
      <DiagnosticoFinanceiroPage />
    </>
  );
}
