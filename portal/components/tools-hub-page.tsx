import Image from 'next/image';
import Link from 'next/link';

import { Icon } from '@/components/icon';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { recommendedToolArticles, toolCards } from '@/data/tools-hub';

function toneClass(tone: 'primary' | 'tertiary' | 'secondary' | 'neutral') {
  if (tone === 'primary') return 'tone-primary';
  if (tone === 'tertiary') return 'tone-tertiary';
  if (tone === 'secondary') return 'tone-secondary';
  return 'tone-neutral';
}

export function ToolsHubPage() {
  return (
    <>
      <SiteHeader activeLabel="Ferramentas" />
      <main className="tools-hub-page">
        <header className="container tools-hub-hero">
          <div className="tools-hub-badge">
            <Icon name="verified" />
            <span>Curadoria especializada</span>
          </div>
          <h1>
            Ferramentas que <span>simplificam</span> o complexo.
          </h1>
          <p>
            Decisões financeiras exigem clareza. Use nossos simuladores para visualizar seu futuro
            financeiro com mais confiança.
          </p>
          <div className="tools-hub-proof">
            <div className="avatars" aria-hidden="true">
              <span>M</span>
              <span>A</span>
              <span>R</span>
            </div>
            <small>Mais de 120 mil brasileiros já simplificaram suas finanças.</small>
          </div>
        </header>

        <section className="container tools-hub-grid-section">
          <div className="tools-hub-grid">
            {toolCards.map((card) => (
              <article
                key={card.title}
                className={card.variant === 'wide' ? 'tool-card tool-card-wide' : 'tool-card'}
              >
                <div className="tool-card-head">
                  <div className={`tool-icon ${toneClass(card.categoryTone)}`}>
                    <Icon name={card.icon} />
                  </div>
                  <span className={`tool-chip ${toneClass(card.categoryTone)}`}>{card.category}</span>
                </div>

                <h3>{card.title}</h3>
                <p>{card.description}</p>

                {card.variant === 'wide' && card.metrics ? (
                  <div className="tool-finance-box">
                    {card.metrics.map((metric) => (
                      <div key={`${card.title}-${metric.label}`}>
                        <span>{metric.label}</span>
                        <strong className={metric.highlight ? 'highlight' : undefined}>{metric.value}</strong>
                      </div>
                    ))}
                  </div>
                ) : null}

                {card.bullets ? (
                  <div className="tool-bullets">
                    {card.bullets.map((bullet) => (
                      <div key={bullet}>{bullet}</div>
                    ))}
                  </div>
                ) : null}

                <Link className="btn btn-secondary" href="/comparador-interativo">
                  Usar ferramenta
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="tools-hub-articles section-muted">
          <div className="container">
            <div className="tools-hub-articles-head">
              <div>
                <h2>Artigos recomendados</h2>
                <p>Aprofunde seu conhecimento com nossa curadoria editorial.</p>
              </div>
              <Link href="/editorial-artigo">Ver todo editorial</Link>
            </div>
            <div className="tools-hub-articles-grid">
              {recommendedToolArticles.map((article) => (
                <Link key={article.title} href="/editorial-artigo" className="tools-hub-article-card">
                  <Image src={article.image} alt={article.title} width={960} height={560} />
                  <span>{article.category}</span>
                  <h3>{article.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container tools-hub-cta-wrap">
          <div className="tools-hub-cta">
            <h2>Pronto para transformar sua realidade financeira?</h2>
            <p>
              Obtenha uma análise personalizada do seu perfil para descobrir onde economizar e
              investir melhor hoje.
            </p>
            <Link className="btn btn-primary" href="/diagnostico-financeiro">
              Iniciar diagnóstico financeiro
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
