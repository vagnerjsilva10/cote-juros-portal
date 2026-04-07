import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { CTASection } from '@/components/ui/cta-section';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';
import { coteFinanceAppUrl } from '@/data/homepage';

const comparatorCards = [
  {
    title: 'Cartoes de credito',
    description: 'Compare anuidade, cashback, pontos e elegibilidade por faixa de renda.',
    href: '/cartoes-de-credito',
    rows: ['Anuidade e isencao', 'Recompensas por perfil', 'Custo real do rotativo']
  },
  {
    title: 'Emprestimos',
    description: 'Leitura comparativa de taxa mensal, CET, prazo e probabilidade de aprovacao.',
    href: '/emprestimos',
    rows: ['Taxa nominal vs CET', 'Prazos de 12 a 72 meses', 'Aprovacao por perfil']
  },
  {
    title: 'Financiamento',
    description: 'Analise detalhada para imovel, veiculo e estruturacao de entrada.',
    href: '/financiamento',
    rows: ['SAC vs PRICE', 'Impacto da entrada', 'Sensibilidade a variacao de juros']
  },
  {
    title: 'Comparador interativo',
    description: 'Aplique filtros por perfil de credito, preferencia de beneficio e risco.',
    href: '/comparador-interativo',
    rows: ['Filtros por objetivo', 'Ranking dinamico', 'Tabela de comparacao']
  }
];

const criteria = [
  {
    title: 'Custo total',
    description: 'Consideramos taxa, CET, tarifas e custos indiretos para comparar de forma justa.'
  },
  {
    title: 'Aderencia ao perfil',
    description: 'Pontuamos produtos por faixa de renda, historico de credito e objetivo financeiro.'
  },
  {
    title: 'Qualidade da instituicao',
    description: 'Avaliamos confiabilidade operacional, transparencia e experiencia do consumidor.'
  },
  {
    title: 'Atualizacao editorial',
    description: 'Rankings sao revisados de forma recorrente com metodologia publicada no portal.'
  }
];

export function ComparadoresHubPage() {
  return (
    <>
      <SiteHeader activePath="/comparadores" />
      <main>
        <PageHero
          eyebrow="Comparadores"
          title="Comparacao financeira com criterio tecnico e clareza editorial."
          subtitle="Avalie cartoes, emprestimos e financiamento em uma estrutura unica de analise, com filtros objetivos e leitura de custo real."
          actions={[
            { label: 'Abrir comparador interativo', href: '/comparador-interativo' },
            { label: 'Fazer diagnostico financeiro', href: '/diagnostico-financeiro', tone: 'secondary' }
          ]}
        />

        <section className="section-space section-muted">
          <div className="container">
            <SectionHeader
              title="Filtrar por objetivo"
              description="Selecione o foco da decisao para acelerar a comparacao."
            />
            <div className="filter-chip-row" role="list" aria-label="Filtros visuais por objetivo">
              <span role="listitem" className="filter-chip active">
                Menor custo total
              </span>
              <span role="listitem" className="filter-chip">
                Maior aprovacao
              </span>
              <span role="listitem" className="filter-chip">
                Melhor beneficio recorrente
              </span>
              <span role="listitem" className="filter-chip">
                Solucao para reorganizar dividas
              </span>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container">
            <SectionHeader
              title="Comparadores por categoria"
              description="Cada card leva para uma pagina com detalhe tecnico, ranking e orientacao pratica."
            />
            <div className="comparison-hub-grid">
              {comparatorCards.map((card) => (
                <article key={card.title} className="comparison-hub-card">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <ul>
                    {card.rows.map((row) => (
                      <li key={`${card.title}-${row}`}>{row}</li>
                    ))}
                  </ul>
                  <Link className="btn btn-secondary" href={card.href}>
                    Acessar comparador
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space section-muted">
          <div className="container two-col-grid">
            <article className="panel-card">
              <h2>Como escolher com seguranca</h2>
              <ol>
                <li>Defina o objetivo financeiro da operacao e seu limite mensal real.</li>
                <li>Compare custo efetivo total em vez de olhar apenas a taxa anunciada.</li>
                <li>Valide o impacto no seu fluxo de caixa para evitar descasamento de prazo.</li>
              </ol>
            </article>
            <article className="panel-card">
              <h2>Criterios de avaliacao e transparencia</h2>
              <div className="criteria-grid">
                {criteria.map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
              <p className="fine-print">
                Transparencia editorial: o portal pode receber remuneracao comercial de parceiros.
                Isso nao altera nossos criterios de ranqueamento tecnico.
              </p>
            </article>
          </div>
        </section>

        <CTASection
          title="Quer uma recomendacao orientada ao seu perfil?"
          description="Inicie o diagnostico para cruzar renda, dividas e objetivos, depois valide no comparador ideal."
          primaryLabel="Iniciar diagnostico"
          primaryHref="/diagnostico-financeiro"
          secondaryLabel="Conhecer Cote Finance AI"
          secondaryHref={coteFinanceAppUrl}
          secondaryExternal
          dark
        />
      </main>
      <SiteFooter />
    </>
  );
}
