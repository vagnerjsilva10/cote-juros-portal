import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { coteFinanceAppUrl } from '@/data/homepage';

type ProductCard = {
  title: string;
  description: string;
  href: string;
  cta: string;
  external?: boolean;
};

const productCards: ProductCard[] = [
  {
    title: 'Comparadores',
    description: 'Compare cartões, empréstimos e financiamento com leitura clara de taxas.',
    href: '/comparadores',
    cta: 'Explorar comparadores'
  },
  {
    title: 'Ferramentas',
    description: 'Use simuladores de crédito, custos e cenários para decisões rápidas.',
    href: '/ferramentas',
    cta: 'Ver ferramentas'
  },
  {
    title: 'Cote Finance AI',
    description: 'Aplicativo de inteligência financeira com recomendações personalizadas em tempo real.',
    href: coteFinanceAppUrl,
    cta: 'Conhecer aplicativo',
    external: true
  }
];

export function ProdutosPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-spaced">
          <div className="container">
            <span className="badge">Ecossistema Cote Juros</span>
            <h1>Produtos para cada etapa da sua jornada financeira</h1>
            <p>
              Centralizamos comparadores, ferramentas e inteligência aplicada para transformar análise
              em decisão com segurança.
            </p>
          </div>
        </section>

        <section className="section-spaced section-muted">
          <div className="container grid">
            {productCards.map((card) => (
              <article key={card.title} className="comparison-card">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                {card.external ? (
                  <a href={card.href} target="_blank" rel="noreferrer">
                    {card.cta}
                  </a>
                ) : (
                  <Link href={card.href}>{card.cta}</Link>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section-spaced">
          <div className="container">
            <div className="cc-cta-box">
              <h2>Quer levar sua gestão para o próximo nível?</h2>
              <p>Ative o Cote Finance AI e receba recomendações com contexto técnico e foco prático.</p>
              <a className="btn btn-light" href={coteFinanceAppUrl} target="_blank" rel="noreferrer">
                Acessar Cote Finance AI
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
