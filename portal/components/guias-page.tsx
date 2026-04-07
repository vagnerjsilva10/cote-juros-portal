import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const guides = [
  { title: 'Controle financeiro', href: '/ferramentas' },
  { title: 'Score de crédito', href: '/diagnostico-financeiro' },
  { title: 'Empréstimos', href: '/emprestimos' },
  { title: 'Cartões', href: '/cartoes-de-credito' },
  { title: 'Financiamento', href: '/financiamento' }
] as const;

export function GuiasPage() {
  return (
    <>
      <SiteHeader activeLabel="Editorial" />
      <main>
        <section className="section-spaced">
          <div className="container">
            <h1>Guias financeiros</h1>
            <p>Conteúdos estruturados para você dominar conceitos e aplicar com segurança.</p>
          </div>
        </section>

        <section className="section-spaced section-muted">
          <div className="container grid">
            {guides.map((guide) => (
              <article key={guide.title} className="comparison-card">
                <h2>{guide.title}</h2>
                <p>Guia objetivo com passos práticos e leitura clara.</p>
                <Link href={guide.href}>Acessar guia</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

