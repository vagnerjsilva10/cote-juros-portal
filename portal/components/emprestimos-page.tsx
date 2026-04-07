import Link from 'next/link';

import { Icon } from '@/components/icon';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { loanIntents, loanInstitutions } from '@/data/loans';

export function EmprestimosPage() {
  return (
    <>
      <SiteHeader activeLabel="Comparadores" />
      <main className="loans-page">
        <section className="container loans-hero">
          <span className="loans-kicker">Curadoria de crédito 2026</span>
          <h1>
            O crédito que respeita sua <span>estabilidade.</span>
          </h1>
          <p>
            Simulações, comparativos e leitura de risco em uma experiência editorial para escolher
            empréstimos com segurança.
          </p>
          <div className="loans-hero-actions">
            <Link className="btn btn-primary" href="/comparador-interativo">
              Simular agora
            </Link>
            <Link className="btn btn-secondary" href="/emprestimos#ranking">
              Ver comparativo
            </Link>
          </div>
        </section>

        <section className="container loans-intents">
          {loanIntents.map((intent) => (
            <article key={intent.title}>
              <Icon name={intent.icon} />
              <h3>{intent.title}</h3>
              <p>{intent.description}</p>
              <Link href="/comparador-interativo">Saiba mais</Link>
            </article>
          ))}
        </section>

        <section className="container loans-simulator">
          <div>
            <h2>Simulação em tempo real</h2>
            <p>Ajuste valor e prazo para visualizar impacto no fluxo mensal.</p>
            <div className="loans-slider">
              <span>Quanto você precisa</span>
              <strong>R$ 25.000</strong>
              <div className="bar">
                <span style={{ width: '46%' }} />
              </div>
            </div>
            <div className="loans-slider">
              <span>Em quantos meses</span>
              <strong>24x</strong>
              <div className="bar">
                <span style={{ width: '38%' }} />
              </div>
            </div>
          </div>
          <aside>
            <small>Parcela estimada</small>
            <strong>R$ 1.248,50</strong>
            <p>Taxa média 1,61% a.m. | CET estimado 2,08% a.m.</p>
            <Link className="btn btn-primary" href="/diagnostico-financeiro">
              Solicitar análise de crédito
            </Link>
          </aside>
        </section>

        <section id="ranking" className="container loans-table">
          <div className="section-head">
            <div>
              <h2>Principais instituições</h2>
              <p>Taxas, prazo e chance de aprovação em comparação objetiva.</p>
            </div>
          </div>
          <div className="loans-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Instituição</th>
                  <th>Taxa mensal</th>
                  <th>Prazo máximo</th>
                  <th>Aprovação</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {loanInstitutions.map((institution) => (
                  <tr key={institution.name}>
                    <td>{institution.name}</td>
                    <td>{institution.rate}</td>
                    <td>{institution.term}</td>
                    <td>{institution.approval}</td>
                    <td>
                      <Link href="/comparador-interativo">Ver detalhes</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="container loans-education">
          <article className="loans-guide">
            <span>Guia técnico</span>
            <h3>Como escolher o empréstimo ideal sem comprometer seu futuro</h3>
            <p>
              Entenda risco, prazo e custo total para evitar armadilhas na renegociação de crédito.
            </p>
          </article>
          <article className="loans-steps">
            <h3>Guia rápido</h3>
            <ol>
              <li>Defina objetivo e limite mensal</li>
              <li>Compare CET e prazo efetivo</li>
              <li>Negocie garantias e revisões</li>
            </ol>
          </article>
        </section>

        <section className="container loans-cta">
          <h2>Pronto para encontrar a melhor taxa?</h2>
          <p>
            Nosso motor de comparação atualiza em minutos e destaca o crédito mais aderente ao seu
            perfil.
          </p>
          <Link className="btn btn-light" href="/comparador-interativo">
            Buscar empréstimo
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
