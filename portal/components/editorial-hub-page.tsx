import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const editorialLinks = [
  { title: 'Blog', href: '/blog', description: 'Publicações rápidas, objetivas e atuais.' },
  { title: 'Guias', href: '/guias', description: 'Conteúdos práticos para decisões mais seguras.' },
  {
    title: 'Análise de mercado',
    href: '/analise-de-mercado',
    description: 'Leituras de cenário com foco em impacto no bolso.'
  },
  {
    title: 'Artigo em destaque',
    href: '/editorial-artigo',
    description: 'Conteúdo aprofundado com abordagem premium.'
  }
] as const;

export function EditorialHubPage() {
  return (
    <>
      <SiteHeader activeLabel="Editorial" />
      <main>
        <section className="section-spaced">
          <div className="container">
            <h1>Editorial Cote Juros</h1>
            <p>
              Conteúdo financeiro com linguagem clara, rigor técnico e foco em decisões práticas para
              o seu dia a dia.
            </p>
          </div>
        </section>

        <section className="section-spaced section-muted">
          <div className="container grid">
            {editorialLinks.map((item) => (
              <article key={item.title} className="editorial-card">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Link href={item.href}>Acessar seção</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

