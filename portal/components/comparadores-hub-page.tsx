import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const comparadorCards = [
  {
    title: 'Comparador interativo',
    description: 'Refine filtros, compare benefícios e veja score recomendado por perfil.',
    href: '/comparador-interativo'
  },
  {
    title: 'Cartões de crédito',
    description: 'Ranking atualizado com juros, anuidade, recompensas e benefícios.',
    href: '/cartoes-de-credito'
  },
  {
    title: 'Empréstimos',
    description: 'Taxas, prazo e chance de aprovação organizados em visão técnica.',
    href: '/emprestimos'
  },
  {
    title: 'Financiamento',
    description: 'Simulações e comparação de condições para crédito imobiliário.',
    href: '/financiamento'
  }
] as const;

export function ComparadoresHubPage() {
  return (
    <>
      <SiteHeader activeLabel="Comparadores" />
      <main>
        <section className="section-spaced">
          <div className="container">
            <h1>Hub de comparadores do Cote Juros</h1>
            <p>
              Escolha o comparador ideal para seu momento e avance com uma decisão financeira mais
              embasada.
            </p>
          </div>
        </section>

        <section className="section-spaced section-muted">
          <div className="container grid">
            {comparadorCards.map((card) => (
              <article key={card.title} className="comparison-card">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <Link href={card.href}>Acessar</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

