import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { CTASection } from '@/components/ui/cta-section';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';
import { coteFinanceAppUrl } from '@/data/homepage';

const toolCategories = [
  {
    id: 'credito',
    title: 'Credito',
    description: 'Ferramentas para ler custo total, simular parcelas e comparar alternativas.',
    cards: [
      {
        title: 'Calculadora de juros',
        description: 'Compare juros simples e compostos para entender o custo real da operacao.',
        href: '/ferramentas#credito'
      },
      {
        title: 'Simulador de emprestimo',
        description: 'Projete parcela, CET estimado e variacao por prazo antes de contratar.',
        href: '/emprestimos'
      }
    ]
  },
  {
    id: 'investimento',
    title: 'Investimento',
    description: 'Cenarios para projetar crescimento patrimonial e relacao risco-retorno.',
    cards: [
      {
        title: 'Projecao de patrimonio',
        description: 'Entenda o efeito do tempo, aporte mensal e taxa anual na acumulacao.',
        href: '/ferramentas#investimento'
      },
      {
        title: 'Reserva de emergencia',
        description: 'Calcule meta de seguranca financeira com base no seu custo de vida.',
        href: '/diagnostico-financeiro'
      }
    ]
  },
  {
    id: 'financiamento',
    title: 'Financiamento',
    description: 'Analise de entrada, amortizacao e impacto de taxa no longo prazo.',
    cards: [
      {
        title: 'Simulador SAC x PRICE',
        description: 'Compare estruturas de parcela e juros totais por horizonte de contrato.',
        href: '/financiamento'
      },
      {
        title: 'Planejamento de entrada',
        description: 'Defina a entrada ideal para reduzir custo sem comprometer liquidez.',
        href: '/financiamento#ranking'
      }
    ]
  },
  {
    id: 'consumo',
    title: 'Consumo',
    description: 'Recursos para decidir melhor entre compra a vista, parcelamento e credito.',
    cards: [
      {
        title: 'Simulador de parcelamento',
        description: 'Mostra quando o desconto a vista supera o parcelamento no cartao.',
        href: '/ferramentas#consumo'
      },
      {
        title: 'Planner de gastos recorrentes',
        description: 'Mapeie assinaturas e identifique despesas de baixo retorno percebido.',
        href: '/diagnostico-financeiro'
      }
    ]
  }
];

const microcopy = [
  'Todas as simulacoes sao educativas e nao representam oferta de credito.',
  'Sempre confirme taxa, CET e condicoes finais no canal oficial da instituicao.',
  'Use o diagnostico para priorizar a ferramenta mais relevante para seu momento.'
];

export function ToolsHubPage() {
  return (
    <>
      <SiteHeader activePath="/ferramentas" />
      <main>
        <PageHero
          eyebrow="Ferramentas"
          title="Ferramentas financeiras feitas para decidir, nao para confundir."
          subtitle="Organizamos simuladores por contexto de uso para voce enxergar custo, risco e impacto antes de contratar qualquer produto financeiro."
          actions={[
            { label: 'Fazer diagnostico financeiro', href: '/diagnostico-financeiro' },
            { label: 'Explorar editorial', href: '/editorial', tone: 'secondary' }
          ]}
        />

        {toolCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className={category.id === 'investimento' || category.id === 'consumo' ? 'section-space section-muted' : 'section-space'}
          >
            <div className="container">
              <SectionHeader title={category.title} description={category.description} />
              <div className="tool-grid">
                {category.cards.map((card) => (
                  <article key={card.title} className="tool-card">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <Link className="card-link" href={card.href}>
                      Abrir ferramenta
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="section-space">
          <div className="container two-col-grid">
            <article className="panel-card">
              <h2>Contexto para interpretar resultados</h2>
              <p>
                Ferramenta sem contexto gera falsa confianca. Por isso cada simulador tem apoio
                editorial para explicar como usar o resultado na pratica.
              </p>
              <Link className="btn btn-secondary" href="/editorial">
                Ler conteudos recomendados
              </Link>
            </article>
            <article className="panel-card">
              <h2>Boas praticas de uso</h2>
              <ul>
                {microcopy.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <CTASection
          title="Leve os dados das ferramentas para um plano real"
          description="Use o diagnostico para transformar simulacoes isoladas em uma estrategia financeira priorizada."
          primaryLabel="Iniciar diagnostico"
          primaryHref="/diagnostico-financeiro"
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
