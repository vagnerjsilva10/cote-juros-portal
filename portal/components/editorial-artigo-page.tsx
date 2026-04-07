import Image from "next/image";

import { Icon } from "@/components/icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { articleFaq, articleToc, popularArticles } from "@/data/editorial-article";

export function EditorialArtigoPage() {
  return (
    <>
      <SiteHeader activeLabel="Editorial" />
      <main className="article-page">
        <section className="container article-banner">Leaderboard Spot</section>
        <section className="container article-layout">
          <article className="article-main">
            <span className="article-kicker">Credito privado premium</span>
            <h1>O Guia Definitivo para Curadoria de Credito Privado em 2026</h1>
            <div className="article-meta">
              <span>Por Marcos Valente</span>
              <span>12 min leitura</span>
            </div>
            <p>
              No atual ambiente de volatilidade, escolher emissor e prazo certo transforma risco em
              retorno. Este guia organiza criterios para decisoes tecnicas com linguagem clara.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=1400&q=80"
              alt="Painel corporativo com luz noturna e atmosfera editorial"
              width={1400}
              height={820}
            />

            <h2>1. A anatomia do risco seletivo</h2>
            <p>
              O risco e precificado por qualidade de emissao, liquidez e ciclo de juros. A leitura
              isolada de rendimento mascara custo real de carregamento.
            </p>

            <div className="article-inline-table">
              <div>
                <span>Comparativo de emissao A x B</span>
                <strong>Yield 14,2% vs 12,8%</strong>
              </div>
              <div>
                <span>Volatilidade media</span>
                <strong>1,9% vs 1,2%</strong>
              </div>
              <div>
                <span>Liquidez estimada</span>
                <strong>Alta vs Media</strong>
              </div>
            </div>

            <blockquote>
              &quot;O verdadeiro luxo financeiro nao e rentabilidade maxima, mas consistencia com
              clareza de risco.&quot;
            </blockquote>

            <h2>2. Estatisticas que definem a decada</h2>
            <p>
              Dados de mercado mostram compressao de spread em emissoes AAA e premio crescente para
              duration curta em ciclos de incerteza.
            </p>

            <div className="article-data-cards">
              <article>
                <small>Spread medio</small>
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
                Use duration curta quando houver duvida de ciclo. Em estabilidade, alongue
                gradualmente com criterio de liquidez.
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
              <h3>Sua carteira esta preparada para o proximo ciclo?</h3>
              <p>Receba um diagnostico pratico com foco em risco, liquidez e retorno real.</p>
              <div>
                <button className="btn btn-light" type="button">
                  Iniciar diagnostico
                </button>
                <button className="btn btn-secondary" type="button">
                  Ver caso comparativo
                </button>
              </div>
            </section>
          </article>

          <aside className="article-side">
            <article className="side-widget">
              <h4>Quick Yield Check</h4>
              <p>R$ 50.000</p>
              <div className="bar">
                <span style={{ width: "58%" }} />
              </div>
              <strong>R$ 4.236,20</strong>
            </article>

            <article className="side-widget dark">
              <h4>Cote Finance AI</h4>
              <p>Ative analise automatica de risco com alertas por emissor.</p>
              <button className="btn btn-primary" type="button">
                Ativar agora
              </button>
            </article>

            <article className="side-widget">
              <h4>Popular no momento</h4>
              <ul>
                {popularArticles.map((post) => (
                  <li key={post}>{post}</li>
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
