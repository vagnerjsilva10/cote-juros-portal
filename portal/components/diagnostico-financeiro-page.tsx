import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { CTASection } from '@/components/ui/cta-section';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';
import { coteFinanceAppUrl } from '@/data/homepage';

const diagnosisScope = [
  'Renda e distribuicao de gastos.',
  'Dividas com maior impacto no custo mensal.',
  'Estrategia de investimento e liquidez.',
  'Oportunidades de economia e reorganizacao.'
];

const audience = [
  'Pessoas com renda estavel que querem tomar decisoes com menos risco.',
  'Familias buscando organizar despesas, dividas e metas de medio prazo.',
  'Usuarios em fase de renegociacao de credito ou troca de produto financeiro.'
];

const steps = [
  {
    step: '1. Responder perfil',
    description: 'Voce informa objetivos, tolerancia a risco e contexto atual.'
  },
  {
    step: '2. Mapear financas',
    description: 'Analisamos renda, gastos, dividas e estrutura de patrimonio.'
  },
  {
    step: '3. Receber direcao',
    description: 'Entregamos plano com prioridades e proximas acoes recomendadas.'
  }
];

export function DiagnosticoFinanceiroPage() {
  return (
    <>
      <SiteHeader activePath="/diagnostico-financeiro" />
      <main>
        <PageHero
          eyebrow="Diagnostico Financeiro"
          title="Seu ponto de partida para uma estrategia financeira consistente."
          subtitle="O diagnostico financeiro do Cote Juros combina analise tecnica e linguagem clara para transformar dados pessoais em direcao pratica."
          actions={[
            { label: 'Iniciar diagnostico', href: '/diagnostico-financeiro#iniciar' },
            { label: 'Conhecer Cote Finance AI', href: coteFinanceAppUrl, external: true, tone: 'secondary' }
          ]}
        />

        <section className="section-space section-muted">
          <div className="container two-col-grid">
            <article className="panel-card">
              <SectionHeader title="O que o diagnostico analisa" />
              <ul>
                {diagnosisScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="panel-card">
              <SectionHeader title="Para quem serve" />
              <ul>
                {audience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="iniciar" className="section-space">
          <div className="container">
            <SectionHeader
              title="Como funciona"
              description="Fluxo simples em tres etapas para gerar diagnostico rapido e acionavel."
            />
            <div className="steps-grid">
              {steps.map((step) => (
                <article key={step.step} className="step-card">
                  <h3>{step.step}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space section-muted">
          <div className="container">
            <article className="diagnosis-result-card">
              <h2>O que voce recebe ao final</h2>
              <div className="result-grid">
                <article>
                  <h3>Pontuacao de saude financeira</h3>
                  <p>Indicador para acompanhar evolucao da sua estrutura financeira no tempo.</p>
                </article>
                <article>
                  <h3>Prioridades de curto prazo</h3>
                  <p>Acoes com maior impacto para reduzir custo e organizar seu caixa rapidamente.</p>
                </article>
                <article>
                  <h3>Direcao de medio prazo</h3>
                  <p>Plano para consolidar ganhos e evitar retrocessos na rotina financeira.</p>
                </article>
              </div>
            </article>
          </div>
        </section>

        <CTASection
          title="Pronto para sair do improviso financeiro?"
          description="Avance para o Cote Finance AI para acompanhar seu plano de forma continua."
          primaryLabel="Explorar comparadores"
          primaryHref="/comparadores"
          secondaryLabel="Abrir Cote Finance AI"
          secondaryHref={coteFinanceAppUrl}
          secondaryExternal
          dark
        />

        <section className="section-space">
          <div className="container section-actions">
            <Link className="btn btn-secondary" href="/editorial">
              Ler conteudo antes de iniciar
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
