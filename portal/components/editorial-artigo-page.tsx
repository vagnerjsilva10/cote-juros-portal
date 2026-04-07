import Image from 'next/image';
import Link from 'next/link';

import { Icon } from '@/components/icon';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { articleFaq, articleToc, popularArticles } from '@/data/editorial-article';
import { coteFinanceAppUrl } from '@/data/homepage';

export function EditorialArtigoPage() {
  return (
    <>
      <SiteHeader activeLabel="Editorial" />
      <main className="article-page">
        <section className="container article-banner">Espaço editorial premium</section>
        <section className="container article-layout">
          <article className="article-main">
            <span className="article-kicker">Crédito privado premium</span>
            <h1>O guia definitivo para curadoria de crédito privado em 2026</h1>
            <div className="article-meta">
              <span>Por Marcos Valente</span>
              <span>12 min de leitura</span>
            </div>
            <p>
              Em um cenário de volatilidade, escolher emissor e prazo corretos transforma risco em
              retorno consistente. Este guia organiza critérios técnicos com linguagem clara.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=1400&q=80"
              alt="Painel corporativo com atmosfera editorial"
              width={1400}
              height={820}
            />

            <h2>1. A anatomia do risco seletivo</h2>
            <p>
              O risco é precificado por qualidade da emissão, liquidez e ciclo de juros. Ler apenas
              o rendimento nominal mascara o custo real da decisão.
            </p>

            <div className="article-inline-table">
              <div>
                <span>Comparativo de emissão A x B</span>
                <strong>Yield 14,2% vs 12,8%</strong>
              </div>
              <div>
                <span>Volatilidade média</span>
                <strong>1,9% vs 1,2%</strong>
              </div>
              <div>
                <span>Liquidez estimada</span>
                <strong>Alta vs média</strong>
              </div>
            </div>

            <blockquote>
              &quot;O verdadeiro luxo financeiro não é rentabilidade máxima. É consistência com clareza
              de risco.&quot;
            </blockquote>

            <h2>2. Estatísticas que definem a década</h2>
            <p>
              Os dados mostram compressão de spread em emissões AAA e prêmio crescente para duração
              curta em ciclos de incerteza.
            </p>

            <div className="article-data-cards">
              <article>
                <small>Spread médio</small>
                <strong>+4,2%</strong>
              </article>
              <article>
                <small>Juros reais projetados</small>
                <strong>8,1%</strong>
              </article>
            </div>

            <div className="article-tip">
              <Icon name="lightbulb" />
              <p>
                Em cenários incertos, priorize duração curta. Em estabilidade, alongue posição com
                controle de liquidez.
              </p>
            </div>

            <h3>Perguntas frequentes</h3>
            <div className="article-faq">
              {articleFaq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>

            <section className="article-final-cta">
              <h3>Sua carteira está preparada para o próximo ciclo?</h3>
              <p>Receba um diagnóstico prático com foco em risco, liquidez e retorno real.</p>
              <div>
                <Link className="btn btn-light" href="/diagnostico-financeiro">
                  Iniciar diagnóstico
                </Link>
                <Link className="btn btn-secondary" href="/comparador-interativo">
                  Ver caso comparativo
                </Link>
              </div>
            </section>
          </article>

          <aside className="article-side">
            <article className="side-widget">
              <h4>Simulação rápida de yield</h4>
              <p>R$ 50.000</p>
              <div className="bar">
                <span style={{ width: '58%' }} />
              </div>
              <strong>R$ 4.236,20</strong>
            </article>

            <article className="side-widget dark">
              <h4>Cote Finance AI</h4>
              <p>Ative análise automática de risco com alertas por emissor em tempo real.</p>
              <a className="btn btn-primary" href={coteFinanceAppUrl} target="_blank" rel="noreferrer">
                Ativar agora
              </a>
            </article>

            <article className="side-widget">
              <h4>Popular no momento</h4>
              <ul>
                {popularArticles.map((post) => (
                  <li key={post}>
                    <Link href="/editorial-artigo">{post}</Link>
                  </li>
                ))}
              </ul>
            </article>

            <article className="side-widget">
              <h4>Neste artigo</h4>
              <ol>
                {articleToc.map((section) => (
                  <li key={section}>{section}</li>
                ))}
              </ol>
            </article>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
