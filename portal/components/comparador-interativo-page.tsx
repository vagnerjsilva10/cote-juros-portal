import Image from 'next/image';
import Link from 'next/link';

import { Icon } from '@/components/icon';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { coteFinanceAppUrl } from '@/data/homepage';
import {
  comparatorCards,
  comparatorDetailRows,
  comparatorFilterGroups
} from '@/data/comparador-interativo';

export function ComparadorInterativoPage() {
  return (
    <>
      <SiteHeader activeLabel="Comparadores" />
      <main className="cmp-page">
        <section className="cmp-header container">
          <div className="cmp-badge">
            <Icon name="verified_user" />
            <span>Mais de 50 mil cartões comparados este mês</span>
          </div>
          <h1>
            Escolha seu próximo <span>Cartão de Crédito</span>
          </h1>
          <p>
            Analise taxas, milhas e benefícios lado a lado com nossa curadoria financeira de alta
            precisão.
          </p>
        </section>

        <section className="cmp-body container">
          <aside className="cmp-sidebar">
            <div className="cmp-sidebar-head">
              <h2>Filtros Avançados</h2>
              <Icon name="tune" />
            </div>

            <div className="cmp-filter-groups">
              {comparatorFilterGroups.map((group) => (
                <div key={group.title} className="cmp-filter-group">
                  <h3>{group.title}</h3>

                  {group.type === 'checkbox' ? (
                    <div className="cmp-checks">
                      {group.options?.map((option) => (
                        <label key={option}>
                          <input type="checkbox" />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  ) : null}

                  {group.type === 'range' ? (
                    <div className="cmp-range">
                      <input
                        type="range"
                        min={group.range?.min}
                        max={group.range?.max}
                        defaultValue={group.range?.value}
                      />
                      <div>
                        {group.range?.ticks.map((tick) => (
                          <span key={tick}>{tick}</span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {group.type === 'select' ? (
                    <select defaultValue={group.selectOptions?.[0]}>
                      {group.selectOptions?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : null}
                </div>
              ))}
            </div>

            <Link className="btn btn-dark cmp-filter-cta" href="/comparador-interativo">
              Aplicar filtros
            </Link>
          </aside>

          <div className="cmp-content">
            <div className="cmp-cards-grid">
              {comparatorCards.map((card) => (
                <article key={card.name} className="cmp-card">
                  <div className="cmp-card-image">
                    <Image src={card.image} alt={card.name} width={1000} height={600} />
                    {card.badge ? <span>{card.badge}</span> : null}
                  </div>

                  <h3>{card.name}</h3>
                  <p>{card.subtitle}</p>

                  <div className="cmp-stats">
                    {card.stats.map((stat) => (
                      <div key={`${card.name}-${stat.label}`}>
                        <small>{stat.label}</small>
                        <strong>{stat.value}</strong>
                      </div>
                    ))}
                  </div>

                  <ul>
                    {card.highlights.map((highlight) => (
                      <li key={highlight}>
                        <Icon name="check_circle" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <Link className="btn btn-primary" href="/cartoes-de-credito">
                    {card.cta}
                  </Link>
                  <small>
                    Ao clicar, você será redirecionado ao site oficial do parceiro. Podemos receber
                    comissão por indicação.
                  </small>
                </article>
              ))}

              <article className="cmp-side-cta">
                <div>
                  <div className="cmp-side-kicker">
                    <Icon name="neurology" />
                    <span>Cote Finance AI</span>
                  </div>
                  <h3>Não sabe qual escolher?</h3>
                  <p>
                    Nossa IA analisa seu perfil e recomenda o cartão ideal em cerca de 15 segundos.
                  </p>
                </div>
                <a className="btn" href={coteFinanceAppUrl} target="_blank" rel="noreferrer">
                  Iniciar diagnóstico
                  <Icon name="arrow_forward" />
                </a>
              </article>
            </div>

            <section className="cmp-table-section">
              <header>
                <h2>Visão detalhada</h2>
              </header>
              <div className="cmp-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th>Banco</th>
                      <th>Milhas / R$</th>
                      <th>Score recom.</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparatorDetailRows.map((row) => (
                      <tr key={row.product}>
                        <td>{row.product}</td>
                        <td>{row.bank}</td>
                        <td>{row.miles}</td>
                        <td>
                          <div className="cmp-score">
                            <div className="cmp-score-bar">
                              <span style={{ width: `${row.scoreFill}%` }} />
                            </div>
                            <strong>{row.scoreLabel}</strong>
                          </div>
                        </td>
                        <td>
                          <span className={row.status === 'ativo' ? 'pill active' : 'pill'}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
