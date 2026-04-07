import Image from 'next/image';
import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { financingComparisonCards, financingFaq, financingRanking } from '@/data/financing';

export function FinanciamentoPage() {
  return (
    <>
      <SiteHeader activeLabel="Comparadores" />
      <main className="financing-page">
        <section className="container financing-hero">
          <div>
            <span>Editorial Especializado</span>
            <h1>
              O Guia da Alavancagem <span>Imobiliária</span>
            </h1>
            <p>
              Curadoria com ranking de taxas e simuladores para decidir financiamento com critério.
            </p>
            <div>
              <Link className="btn btn-primary" href="/comparador-interativo">
                Comparar taxas
              </Link>
              <Link className="btn btn-secondary" href="/financiamento#ranking">
                Ver comparativo
              </Link>
            </div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Casa moderna em destaque para contexto de financiamento"
            width={1200}
            height={760}
          />
        </section>

        <section className="container financing-summary">
          <h2>SAC vs PRICE</h2>
          <div>
            {financingComparisonCards.map((card) => (
              <article key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="ranking" className="container financing-ranking">
          <div className="section-head">
            <div>
              <h2>Ranking de taxas</h2>
              <p>As melhores condições com curadoria técnica.</p>
            </div>
          </div>
          <div className="financing-rows">
            {financingRanking.map((row) => (
              <article key={row.bank}>
                <div>
                  <h3>{row.bank}</h3>
                  <p>{row.rate}</p>
                </div>
                <div>
                  <span>Prazo</span>
                  <strong>{row.term}</strong>
                </div>
                <div>
                  <span>Aprovação</span>
                  <strong>{row.approval}</strong>
                </div>
                <Link className="btn btn-secondary" href="/comparador-interativo">
                  Simular
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="container financing-widget">
          <div>
            <h2>Métricas que geram clareza financeira.</h2>
            <p>
              Entenda impacto de entrada, taxa e prazo antes de assumir compromisso de longo ciclo.
            </p>
            <ul>
              <li>Análise de CET imobiliário</li>
              <li>Comparativo SAC x PRICE</li>
              <li>Sensibilidade por variação de juros</li>
            </ul>
          </div>
          <aside>
            <small>Valor do imóvel</small>
            <strong>R$ 450.000</strong>
            <div className="bar">
              <span style={{ width: '52%' }} />
            </div>
            <Link className="btn btn-primary" href="/comparador-interativo">
              Ver simulação detalhada
            </Link>
          </aside>
        </section>

        <section className="container financing-articles">
          <h2>Tudo o que você precisa saber</h2>
          <div>
            <article>
              <h3>Entrada de 20% reduz custo total?</h3>
              <p>Leitura em 6 min</p>
            </article>
            <article>
              <h3>SAC x PRICE no fluxo mensal</h3>
              <p>Leitura em 8 min</p>
            </article>
            <article>
              <h3>Portabilidade de crédito com estratégia</h3>
              <p>Leitura em 5 min</p>
            </article>
          </div>
        </section>

        <section className="container financing-content-block">
          <h3>Conteúdo detalhado</h3>
          <ol>
            <li>Taxa x disciplina de caixa</li>
            <li>Amortização extraordinária</li>
            <li>Quando alongar e quando reduzir prazo</li>
            <li>Checklist para primeira proposta</li>
          </ol>
        </section>

        <section className="container financing-faq">
          <h3>Dúvidas frequentes</h3>
          {financingFaq.map((question) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>Resposta orientada por simulações e curadoria técnica de risco.</p>
            </details>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
