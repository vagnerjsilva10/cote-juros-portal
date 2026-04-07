import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { EditorialCard } from '@/components/ui/cards';
import { CTASection } from '@/components/ui/cta-section';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';
import { coteFinanceAppUrl } from '@/data/homepage';

const categories = [
  { title: 'Cartoes', href: '/cartoes', description: 'Uso inteligente de limite, beneficios e custo.' },
  { title: 'Emprestimos', href: '/emprestimos', description: 'Renegociacao e estruturacao de credito.' },
  { title: 'Mercado', href: '/analise-de-mercado', description: 'Leitura de Selic, spread e oferta de credito.' },
  { title: 'Planejamento', href: '/guias', description: 'Metodo para organizar caixa, dividas e patrimonio.' }
];

const featured = [
  {
    category: 'Cartoes',
    title: 'Rotativo do cartao: como sair sem destruir o fluxo de caixa',
    excerpt: 'Um plano pratico em tres etapas para reduzir juros sem comprometer liquidez.',
    readTime: '9 min',
    href: '/editorial-artigo'
  },
  {
    category: 'Emprestimos',
    title: 'Quando portabilidade de credito realmente compensa',
    excerpt: 'Checklist tecnico para comparar propostas alem da taxa promocional.',
    readTime: '7 min',
    href: '/blog'
  },
  {
    category: 'Mercado',
    title: 'Selic e concessao de credito: o que muda para o consumidor',
    excerpt: 'Entenda como o ciclo economico afeta aprovacao, custo e disponibilidade.',
    readTime: '6 min',
    href: '/analise-de-mercado'
  }
];

export function EditorialHubPage() {
  return (
    <>
      <SiteHeader activePath="/editorial" />
      <main>
        <PageHero
          eyebrow="Editorial"
          title="Hub editorial para decidir melhor sobre credito, juros e patrimonio."
          subtitle="Conteudo produzido para apoiar decisoes reais com linguagem clara, metodo tecnico e responsabilidade editorial."
          actions={[
            { label: 'Acessar blog', href: '/blog' },
            { label: 'Explorar guias', href: '/guias', tone: 'secondary' }
          ]}
        />

        <section className="section-space section-muted">
          <div className="container">
            <SectionHeader title="Categorias editoriais" description="Navegue por tema para encontrar conteudo alinhado ao seu momento financeiro." />
            <div className="feature-grid">
              {categories.map((category) => (
                <Link key={category.title} href={category.href} className="feature-card">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <span className="card-link">Abrir categoria</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container">
            <SectionHeader title="Artigos em destaque" description="Conteudos priorizados pela equipe editorial nesta semana." actionLabel="Ver biblioteca completa" actionHref="/blog" />
            <div className="editorial-grid">
              {featured.map((post) => (
                <EditorialCard
                  key={post.title}
                  category={post.category}
                  title={post.title}
                  excerpt={post.excerpt}
                  readTime={post.readTime}
                  href={post.href}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-space section-muted">
          <div className="container">
            <SectionHeader
              title="Biblioteca por tema"
              description="Blocos dedicados para cartoes, emprestimos, mercado e planejamento financeiro."
            />
            <div className="editorial-theme-grid">
              <article className="panel-card">
                <h3>Cartoes</h3>
                <p>Limite, rotativo, cashback, pontos e estrategia de uso recorrente.</p>
                <Link className="card-link" href="/cartoes">
                  Ver conteudos de cartoes
                </Link>
              </article>
              <article className="panel-card">
                <h3>Emprestimos</h3>
                <p>Comparacao tecnica de linhas, prazo, CET e renegociacao de passivos.</p>
                <Link className="card-link" href="/emprestimos">
                  Ver conteudos de emprestimos
                </Link>
              </article>
              <article className="panel-card">
                <h3>Mercado</h3>
                <p>Impacto de variacoes macroeconomicas nas decisoes do consumidor final.</p>
                <Link className="card-link" href="/analise-de-mercado">
                  Ver analises de mercado
                </Link>
              </article>
              <article className="panel-card">
                <h3>Planejamento</h3>
                <p>Organizacao financeira, reserva, prioridades e disciplina de medio prazo.</p>
                <Link className="card-link" href="/guias">
                  Ver guias praticos
                </Link>
              </article>
            </div>
          </div>
        </section>

        <CTASection
          title="Quer transformar conteudo em plano de acao?"
          description="Comece pelo diagnostico e receba direcoes praticas para aplicar os aprendizados no seu caso."
          primaryLabel="Iniciar diagnostico"
          primaryHref="/diagnostico-financeiro"
          secondaryLabel="Acessar Cote Finance AI"
          secondaryHref={coteFinanceAppUrl}
          secondaryExternal
          dark
        />
      </main>
      <SiteFooter />
    </>
  );
}
