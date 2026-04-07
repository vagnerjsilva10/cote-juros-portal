import Image from 'next/image';
import Link from 'next/link';

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
                A arte de escolher o seu <span>próximo cartão.</span>
              </h1>
              <p>
                Nossa curadoria decompõe taxas e benefícios para encontrar o cartão ideal para sua
                estratégia de patrimônio.
              </p>
            </div>
            <div className="cc-hero-media">
              <Image
                src="https://images.unsplash.com/photo-1548427721-7f8d7f7a9d18?auto=format&fit=crop&w=1200&q=80"
                alt="Cartões de crédito premium sobre mesa escura"
                width={1280}
                height={960}
              />
            </div>
          </div>
        </section>

        <section className="cc-filters">
          <div className="container cc-filter-wrap">
            {creditFilters.map((filter) => (
              <Link
                key={filter.label}
                href="/cartoes-de-credito"
                className={filter.active ? 'cc-filter active' : 'cc-filter'}
              >
                {filter.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="cc-ranking section-spaced">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>O Ranking de Elite</h2>
                <p>Baseado em custo-benefício, recompensas e aceitação.</p>
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
                    <Link
                      className={card.ctaStyle === 'outline' ? 'btn btn-outline' : 'btn btn-primary'}
                      href="/comparador-interativo"
                    >
                      {card.ctaLabel}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cc-table section-spaced section-muted">
          <div className="container">
            <h2>Comparativo Técnico</h2>
            <div className="cc-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Cartão</th>
                    <th>Juros rotativo</th>
                    <th>Taxa de saque</th>
                    <th>Benefício-chave</th>
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
                Pagar o mínimo da fatura parece simples, mas acelera o crescimento da dívida no
                rotativo. Entenda como reduzir esse risco antes que ele comprometa seu fluxo.
              </p>
              <Link href="/editorial-artigo">Ler guia completo</Link>
            </article>

            <article className="cc-checklist">
              <Icon name="verified" className="cc-check-icon" />
              <h3>Checklist da aprovação</h3>
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
              <h2>Não sabe qual escolher?</h2>
              <p>
                Responda 5 perguntas e nosso algoritmo sugere o cartão mais aderente ao seu estilo
                de vida e metas financeiras.
              </p>
              <Link className="btn btn-light" href="/diagnostico-financeiro">
                Iniciar diagnóstico gratuito
              </Link>
              <small>Leva menos de 2 minutos</small>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
