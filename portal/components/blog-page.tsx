import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { EditorialCard } from '@/components/ui/cards';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';

const categories = ['Cartoes', 'Emprestimos', 'Mercado', 'Planejamento'];

const posts = [
  {
    category: 'Cartoes',
    title: 'Como reduzir juros do rotativo em 30 dias',
    excerpt: 'Plano pratico para sair do rotativo sem comprometer despesas essenciais.',
    readTime: '7 min',
    href: '/editorial-artigo'
  },
  {
    category: 'Emprestimos',
    title: 'Renegociacao inteligente: quando trocar divida cara por garantia',
    excerpt: 'Checklist tecnico para decidir sem trocar um problema por outro.',
    readTime: '8 min',
    href: '/blog'
  },
  {
    category: 'Mercado',
    title: 'Spread bancario: o indicador que muda sua taxa final',
    excerpt: 'Entenda onde o spread aparece e como usar essa leitura em negociacao.',
    readTime: '6 min',
    href: '/analise-de-mercado'
  },
  {
    category: 'Planejamento',
    title: 'Metodo de caixa mensal para quem quer construir reserva',
    excerpt: 'Uma estrutura simples para manter liquidez e evoluir patrimonio.',
    readTime: '9 min',
    href: '/guias'
  },
  {
    category: 'Cartoes',
    title: 'Cashback ou milhas: como escolher sem viés de marketing',
    excerpt: 'Comparacao objetiva para decidir pelo retorno que faz sentido no seu uso.',
    readTime: '5 min',
    href: '/cartoes-de-credito'
  },
  {
    category: 'Planejamento',
    title: 'Como sair do modo sobrevivencia e voltar a planejar',
    excerpt: 'Prioridades financeiras para recuperar previsibilidade em ate 90 dias.',
    readTime: '10 min',
    href: '/diagnostico-financeiro'
  }
];

export function BlogPage() {
  return (
    <>
      <SiteHeader activePath="/editorial" />
      <main>
        <PageHero
          eyebrow="Blog"
          title="Analises praticas para decisoes financeiras melhores no dia a dia."
          subtitle="Conteudo editorial com metodo, contexto de mercado e recomendacoes aplicaveis para pessoas e familias."
          actions={[
            { label: 'Explorar guias', href: '/guias' },
            { label: 'Ver analise de mercado', href: '/analise-de-mercado', tone: 'secondary' }
          ]}
        />

        <section className="section-space section-muted">
          <div className="container">
            <SectionHeader title="Categorias do blog" />
            <div className="filter-chip-row" role="list" aria-label="Categorias editoriais">
              {categories.map((category, index) => (
                <span key={category} role="listitem" className={index === 0 ? 'filter-chip active' : 'filter-chip'}>
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container">
            <SectionHeader
              title="Conteudos mais lidos"
              description="Selecao com foco em impacto no bolso, clareza de custo e tomada de decisao."
            />
            <div className="editorial-grid">
              {posts.map((post) => (
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
          <div className="container section-actions">
            <Link className="btn btn-primary" href="/editorial">
              Voltar para hub editorial
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
