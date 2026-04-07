import type { Metadata } from 'next';

import { DiagnosticoFinanceiroPage } from '@/components/diagnostico-financeiro-page';
import { JsonLd } from '@/components/json-ld';
import type { DiagnosisInput } from '@/lib/monetization/types';
import { getRecommendedOffers } from '@/lib/recommendations';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, webPageSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Diagnostico Financeiro com Recomendacoes | Cote Juros',
  description:
    'Classifique perfil, renda, score e necessidade financeira para receber recomendacoes orientadas por regra.',
  path: '/diagnostico-financeiro',
  keywords: ['diagnostico financeiro', 'recomendacao de produtos', 'planejamento financeiro', 'ofertas', 'score']
});

function parseInput(searchParams: Record<string, string | string[] | undefined>): DiagnosisInput {
  const getValue = (key: string, fallback: string) => {
    const value = searchParams[key];
    if (Array.isArray(value)) {
      return value[0] ?? fallback;
    }

    return value ?? fallback;
  };

  return {
    primaryGoal: getValue('primaryGoal', 'save') as DiagnosisInput['primaryGoal'],
    creditScoreBand: getValue('creditScoreBand', 'mid') as DiagnosisInput['creditScoreBand'],
    incomeBand: getValue('incomeBand', 'mid') as DiagnosisInput['incomeBand'],
    debtLevel: getValue('debtLevel', 'mid') as DiagnosisInput['debtLevel'],
    wantsNoAnnualFee: getValue('wantsNoAnnualFee', '') === 'true'
  };
}

export default async function Page({
  searchParams
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedSearchParams = await searchParams;
  const hasSearchParams = Object.keys(resolvedSearchParams).length > 0;
  const input = parseInput(resolvedSearchParams);
  const recommendation = hasSearchParams ? await getRecommendedOffers(input) : null;

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
            description: 'Fluxo de diagnostico com recomendacoes de ofertas por regra de negocio.',
            path: '/diagnostico-financeiro'
          })
        ]}
      />
      <DiagnosticoFinanceiroPage recommendation={recommendation} input={input} />
    </>
  );
}