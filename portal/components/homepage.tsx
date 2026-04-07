import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { CategoryCard, ComparisonCard, EditorialCard, FeatureCard, ToolCard } from '@/components/ui/cards';
import { CTASection } from '@/components/ui/cta-section';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';
import {
  comparatorGroups,
  coteFinanceAppUrl,
  editorialPosts,
  homepageCategories,
  productPillars,
  toolHighlights
} from '@/data/homepage';

const diagnosisItems = [
  {
    title: 'Renda e gastos',
    description: 'Mapeamos entradas, despesas fixas e variaveis para identificar folga real de caixa.'
  },
  {
    title: 'Dividas',
    description: 'Apontamos onde o custo financeiro esta acima do ideal e quais trocas geram maior economia.'
  },
  {
    title: 'Investimentos',
    description: 'Analisamos aderencia da carteira aos seus objetivos, horizonte e liquidez necessaria.'
  },
  {
    title: 'Oportunidades',
    description: 'Mostramos prioridades praticas para reduzir risco e melhorar resultado nos proximos meses.'
  }
];

export function HomePage() {
  return (
    <>
      <SiteHeader activePath="/" />
      <main>
        <PageHero
          eyebrow="Portal financeiro premium"
          title="Clareza financeira para decidir melhor em cada etapa da sua jornada."
          subtitle="O Cote Juros combina comparadores, ferramentas, diagnostico e inteligencia aplicada para transformar dados financeiros em decisoes praticas."
          actions={[
            { label: 'Fazer diagnostico financeiro', href: '/diagnostico-financeiro', tone: 'primary' },
            {
              label: 'Conhecer Cote Finance AI',
              href: coteFinanceAppUrl,
              external: true,
              tone: 'secondary'
            },
            { label: 'Explorar comparadores', href: '/comparadores', tone: 'ghost' }
          ]}
        />

        <section className="section-space section-muted">
          <div className="container">
            <SectionHeader
              eyebrow="Visao de produto"
              title="Uma plataforma financeira para reduzir incerteza e aumentar qualidade de decisao."
              description="Cada modulo foi desenhado para resolver uma etapa do problema: entender, comparar, simular e agir."
            />
            <div className="feature-grid four-cols">
              {productPillars.map((pillar) => (
                <FeatureCard
                  key={pillar.title}
                  icon={pillar.icon}
                  title={pillar.title}
                  description={pillar.description}
                  href="/produtos"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container">
            <SectionHeader
              title="Categorias principais"
              description="Encontre rapidamente o tipo de decisao financeira que voce precisa tomar agora."
            />
            <div className="category-grid">
              {homepageCategories.map((category) => (
                <CategoryCard
                  key={category.title}
                  icon={category.icon}
                  title={category.title}
                  description={category.description}
                  href={category.href}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-space section-muted">
          <div className="container">
            <SectionHeader
              title="Comparadores em destaque"
              description="Curadoria semanal com foco em custo total, elegibilidade e relacao risco-retorno."
              actionHref="/comparadores"
              actionLabel="Ver comparadores completos"
            />
            <div className="comparison-grid">
              {comparatorGroups.map((group) => (
                <ComparisonCard
                  key={group.title}
                  title={group.title}
                  description={group.description}
                  items={group.items}
                  href={group.href}
                  ctaLabel={group.cta}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container">
            <SectionHeader
              title="Ferramentas que simplificam o complexo"
              description="Simuladores para entender juros, prazo e impacto no seu caixa antes de contratar."
              actionHref="/ferramentas"
              actionLabel="Ver todas as ferramentas"
            />
            <div className="tool-grid">
              {toolHighlights.map((tool) => (
                <ToolCard
                  key={tool.title}
                  title={tool.title}
                  description={tool.description}
                  href={tool.href}
                  category={tool.category}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-space section-dark">
          <div className="container">
            <SectionHeader
              eyebrow="Diagnostico Financeiro"
              title="Um raio-x completo da sua estrutura financeira."
              description="Entenda onde voce perde dinheiro hoje e quais acoes trazem maior impacto em 30, 90 e 180 dias."
            />
            <div className="diagnosis-grid">
              {diagnosisItems.map((item) => (
                <article key={item.title} className="diagnosis-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <div className="section-actions">
              <Link className="btn btn-primary" href="/diagnostico-financeiro">
                Iniciar diagnostico
              </Link>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container ai-block">
            <div>
              <p className="section-eyebrow">Cote Finance AI</p>
              <h2>O produto premium do ecossistema para acompanhamento financeiro continuo.</h2>
              <p>
                O Cote Finance AI conecta analise de comportamento, custo de credito e prioridades
                de patrimonio para orientar sua proxima decisao com velocidade.
              </p>
              <ul>
                <li>Leitura automatica de risco e oportunidade.</li>
                <li>Recomendacoes acionaveis com prioridade por impacto.</li>
                <li>Monitoramento de evolucao financeira em tempo real.</li>
              </ul>
              <a className="btn btn-primary" href={coteFinanceAppUrl} target="_blank" rel="noreferrer">
                Acessar Cote Finance AI
              </a>
            </div>
            <div className="ai-panel">
              <h3>Painel de desempenho financeiro</h3>
              <p>Score de saude: 82/100</p>
              <div className="bar">
                <span style={{ width: '82%' }} />
              </div>
              <p>Economia potencial no trimestre: R$ 3.420</p>
              <div className="bar">
                <span style={{ width: '67%' }} />
              </div>
              <small>Dados ilustrativos para representacao do produto.</small>
            </div>
          </div>
        </section>

        <section className="section-space section-muted">
          <div className="container">
            <SectionHeader
              title="Editorial Cote Juros"
              description="Conteudo orientado a decisao para cartoes, emprestimos, mercado e planejamento."
              actionHref="/editorial"
              actionLabel="Explorar editorial"
            />
            <div className="editorial-grid">
              {editorialPosts.map((post) => (
                <EditorialCard
                  key={post.title}
                  category={post.category}
                  title={post.title}
                  excerpt={post.excerpt}
                  readTime={post.readTime}
                  href={post.slug}
                />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Pronto para organizar seu proximo movimento financeiro?"
          description="Comece pelo diagnostico e avance para comparadores e ferramentas com uma estrategia unica."
          primaryLabel="Fazer diagnostico financeiro"
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
