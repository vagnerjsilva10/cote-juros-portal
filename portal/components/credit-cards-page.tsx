import Image from 'next/image';

import { Icon } from '@/components/icon';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { approvalChecklist, cardComparisonRows, creditFilters, rankedCards } from '@/data/credit-cards';

function StarRating({ total }: { total: number }) {
  return (
    <div className="cc-stars" aria-label={`${total} estrelas`}>
      {Array.from({ length: total }, (_, index) => (
        <Icon key={index} name="star" className="filled" />
      ))}
    </div>
  );
}

export function CreditCardsPage() {
  return (
    <>
      <SiteHeader activeLabel="Comparadores" />
      <main className="cc-page">
        <section className="cc-hero section-spaced">
          <div className="container cc-hero-grid">
            <div>
              <span className="eyebrow">Editorial Selection 2026</span>
              <h1>
                A arte de escolher o seu <span>proximo cartao.</span>
              </h1>
              <p>
                Nossa curadoria decompoe taxas e beneficios para encontrar o cartao ideal para sua
                estrategia de patrimonio.
              </p>
            </div>
            <div className="cc-hero-media">
              <Image
                src="https://images.unsplash.com/photo-1548427721-7f8d7f7a9d18?auto=format&fit=crop&w=1200&q=80"
                alt="Cartoes de credito premium sobre mesa escura"
                width={1280}
                height={960}
              />
            </div>
          </div>
        </section>

        <section className="cc-filters">
          <div className="container cc-filter-wrap">
            {creditFilters.map((filter) => (
              <button
                key={filter.label}
                className={filter.active ? 'cc-filter active' : 'cc-filter'}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        <section className="cc-ranking section-spaced">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>O Ranking de Elite</h2>
                <p>Baseado em custo-beneficio, recompensas e aceitacao.</p>
              </div>
              <strong>Atualizado em 7 de abril de 2026</strong>
            </div>

            <div className="cc-ranking-list">
              {rankedCards.map((card) => (
                <article key={card.name} className="cc-ranking-card">
                  <div className="cc-card-image">
                    <Image src={card.image} alt={card.name} width={920} height={560} />
                  </div>

                  <div className="cc-card-content">
                    <div className="cc-card-head">
                      {card.badge ? (
                        <span className={card.badgeTone === 'violet' ? 'tag violet' : 'tag'}>{card.badge}</span>
                      ) : null}
                      {card.stars ? <StarRating total={card.stars} /> : null}
                    </div>

                    <h3>{card.name}</h3>
                    <p>{card.description}</p>

                    <div className="cc-metrics">
                      {card.metrics.map((metric) => (
                        <div key={`${card.name}-${metric.label}`}>
                          <small>{metric.label}</small>
                          <strong>{metric.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="cc-card-action">
                    <button
                      className={card.ctaStyle === 'outline' ? 'btn btn-outline' : 'btn btn-primary'}
                      type="button"
                    >
                      {card.ctaLabel}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cc-table section-spaced section-muted">
          <div className="container">
            <h2>Comparativo Tecnico</h2>
            <div className="cc-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Cartao</th>
                    <th>Juros rotativo</th>
                    <th>Taxa de saque</th>
                    <th>Beneficio-chave</th>
                    <th>Anuidade</th>
                  </tr>
                </thead>
                <tbody>
                  {cardComparisonRows.map((row) => (
                    <tr key={row.card}>
                      <td>{row.card}</td>
                      <td>{row.revolvingInterest}</td>
                      <td>{row.withdrawFee}</td>
                      <td className="highlight">{row.keyBenefit}</td>
                      <td>{row.yearlyFee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="cc-education section-spaced">
          <div className="container cc-education-grid">
            <article className="cc-education-main">
              <h3>O erro que 80% dos brasileiros cometem</h3>
              <p>
                Pagar o minimo da fatura parece simples, mas acelera o crescimento da divida no
                rotativo. Entenda como reduzir esse risco antes que ele comprometa seu fluxo.
              </p>
              <a href="#">Ler guia completo</a>
            </article>

            <article className="cc-checklist">
              <Icon name="verified" className="cc-check-icon" />
              <h3>Checklist da aprovacao</h3>
              <ul>
                {approvalChecklist.map((item) => (
                  <li key={item}>
                    <Icon name="check_circle" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="cc-cta section-spaced">
          <div className="container">
            <div className="cc-cta-box">
              <h2>Nao sabe qual escolher?</h2>
              <p>
                Responda 5 perguntas e nosso algoritmo sugere o cartao mais aderente ao seu estilo
                de vida e metas financeiras.
              </p>
              <button className="btn btn-light" type="button">
                Iniciar diagnostico gratuito
              </button>
              <small>Leva menos de 2 minutos</small>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

