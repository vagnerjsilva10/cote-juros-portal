import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const analyses = [
  'Tendência de juros para crédito pessoal no próximo trimestre',
  'Spread bancário: como interpretar variações nas principais instituições',
  'Cartões premium: evolução de benefícios e custo efetivo',
  'Financiamento imobiliário: cenário de taxas e poder de compra'
] as const;

export function AnaliseMercadoPage() {
  return (
    <>
      <SiteHeader activeLabel="Editorial" />
      <main>
        <section className="section-dark section-spaced">
          <div className="container">
            <h1>Análise de mercado</h1>
            <p>
              Leituras de tendência, comparativos setoriais e contexto econômico para orientar suas
              decisões financeiras.
            </p>
          </div>
        </section>

        <section className="section-spaced">
          <div className="container grid">
            {analyses.map((title) => (
              <article key={title} className="editorial-card">
                <h2>{title}</h2>
                <p>Atualização semanal com linguagem objetiva e visão prática de impacto.</p>
                <Link href="/editorial-artigo">Ler análise</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

