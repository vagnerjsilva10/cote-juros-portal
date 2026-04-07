import type { DiagnosisInput, RecommendationResult } from '@/lib/monetization/types';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { RecommendationBlock } from '@/components/offers/recommendation-block';
import { CTASection } from '@/components/ui/cta-section';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';
import { coteFinanceAppUrl } from '@/data/homepage';

const defaultInput: DiagnosisInput = {
  primaryGoal: 'save',
  creditScoreBand: 'mid',
  incomeBand: 'mid',
  debtLevel: 'mid',
  wantsNoAnnualFee: true
};

export function DiagnosticoFinanceiroPage({
  recommendation,
  input = defaultInput
}: {
  recommendation?: RecommendationResult | null;
  input?: DiagnosisInput;
}) {
  return (
    <>
      <SiteHeader activePath="/diagnostico-financeiro" />
      <main>
        <PageHero
          eyebrow="Diagnostico Financeiro"
          title="Diagnostico com recomendacao de ofertas por regra de negocio."
          subtitle="A jornada agora classifica perfil, cruza regras e devolve produtos sugeridos com CTA rastreado para a camada comercial do portal."
          actions={[
            { label: 'Ver comparadores', href: '/comparadores' },
            { label: 'Conhecer Cote Finance AI', href: coteFinanceAppUrl, external: true, tone: 'secondary' }
          ]}
        />

        <section className="section-space section-muted">
          <div className="container two-col-grid">
            <article className="panel-card">
              <SectionHeader title="Como funciona a recomendacao" />
              <ol>
                <li>Coletamos objetivo, score, renda e nivel de pressao financeira.</li>
                <li>As regras ativas priorizam tipo de produto e filtros mais aderentes.</li>
                <li>O clique final segue para /go/[slug], registrando origem e campanha.</li>
              </ol>
            </article>
            <article className="panel-card">
              <SectionHeader title="Gerar recomendacoes agora" />
              <form className="diagnosis-form" method="get">
                <label htmlFor="primaryGoal">Objetivo principal</label>
                <select id="primaryGoal" name="primaryGoal" defaultValue={input.primaryGoal}>
                  <option value="save">Reduzir custo</option>
                  <option value="cashback">Buscar cashback</option>
                  <option value="credit">Reorganizar credito</option>
                  <option value="account">Abrir conta digital</option>
                  <option value="financing">Planejar financiamento</option>
                </select>

                <label htmlFor="creditScoreBand">Faixa de score</label>
                <select id="creditScoreBand" name="creditScoreBand" defaultValue={input.creditScoreBand}>
                  <option value="low">Baixo</option>
                  <option value="mid">Medio</option>
                  <option value="high">Alto</option>
                </select>

                <label htmlFor="incomeBand">Faixa de renda</label>
                <select id="incomeBand" name="incomeBand" defaultValue={input.incomeBand}>
                  <option value="low">Ate R$ 3 mil</option>
                  <option value="mid">R$ 3 mil a R$ 10 mil</option>
                  <option value="high">Acima de R$ 10 mil</option>
                </select>

                <label htmlFor="debtLevel">Pressao de dividas</label>
                <select id="debtLevel" name="debtLevel" defaultValue={input.debtLevel}>
                  <option value="low">Baixa</option>
                  <option value="mid">Media</option>
                  <option value="high">Alta</option>
                </select>

                <label className="checkbox-row" htmlFor="wantsNoAnnualFee">
                  <input id="wantsNoAnnualFee" name="wantsNoAnnualFee" type="checkbox" defaultChecked={input.wantsNoAnnualFee} value="true" />
                  <span>Priorizar opcoes sem anuidade quando aplicavel</span>
                </label>

                <button className="btn btn-primary" type="submit">
                  Gerar recomendacoes
                </button>
              </form>
            </article>
          </div>
        </section>

        <RecommendationBlock
          heading={recommendation?.title ?? 'Recomendacoes aparecem aqui ao final do diagnostico'}
          rationale={
            recommendation?.rationale ??
            'Preencha o formulario para gerar sugestoes baseadas em regras ativas, perfil e categoria de necessidade.'
          }
          offers={recommendation?.offers ?? []}
          sourcePage="diagnostico-financeiro"
        />

        <CTASection
          title="Quer aprofundar a leitura antes do clique final?"
          description="Valide as sugestoes no comparador e avance para o Cote Finance AI quando quiser uma camada premium de contexto financeiro."
          primaryLabel="Explorar comparadores"
          primaryHref="/comparadores"
          secondaryLabel="Abrir Cote Finance AI"
          secondaryHref={coteFinanceAppUrl}
          secondaryExternal
          dark
        />
      </main>
      <SiteFooter />
    </>
  );
}