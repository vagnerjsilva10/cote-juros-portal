import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const posts = [
  { category: 'Cartões', title: 'Como reduzir juros do rotativo em 30 dias' },
  { category: 'Empréstimos', title: 'Quando trocar custo alto por crédito com garantia' },
  { category: 'Planejamento', title: 'Estratégia mensal para organizar fluxo de caixa pessoal' },
  { category: 'Mercado', title: 'O que muda no crédito quando a Selic oscila' }
] as const;

export function BlogPage() {
  return (
    <>
      <SiteHeader activeLabel="Editorial" />
      <main>
        <section className="section-spaced">
          <div className="container">
            <h1>Blog Cote Juros</h1>
            <p>Artigos e publicações com curadoria para decisões financeiras mais claras.</p>
          </div>
        </section>

        <section className="section-spaced section-muted">
          <div className="container grid">
            {posts.map((post) => (
              <article key={post.title} className="editorial-card">
                <span>{post.category}</span>
                <h2>{post.title}</h2>
                <p>Leitura prática com foco em impacto real no seu orçamento.</p>
                <Link href="/editorial-artigo">Ler artigo</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section-spaced">
          <div className="container">
            <Link className="btn btn-primary" href="/editorial">
              Ver todo o editorial
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

