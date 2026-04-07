import { Icon } from "@/components/icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { loanIntents, loanInstitutions } from "@/data/loans";

export function EmprestimosPage() {
  return (
    <>
      <SiteHeader activeLabel="Comparadores" />
      <main className="loans-page">
        <section className="container loans-hero">
          <span className="loans-kicker">Curadoria de credito 2026</span>
          <h1>
            O credito que respeita sua <span>estabilidade.</span>
          </h1>
          <p>
            Simulacoes, comparativos e leitura de risco em uma experiencia editorial para escolher
            emprestimos com seguranca.
          </p>
          <div className="loans-hero-actions">
            <button className="btn btn-primary" type="button">
              Simular agora
            </button>
            <button className="btn btn-secondary" type="button">
              Ver comparativo
            </button>
          </div>
        </section>

        <section className="container loans-intents">
          {loanIntents.map((intent) => (
            <article key={intent.title}>
              <Icon name={intent.icon} />
              <h3>{intent.title}</h3>
              <p>{intent.description}</p>
              <button type="button">Saiba mais</button>
            </article>
          ))}
        </section>

        <section className="container loans-simulator">
          <div>
            <h2>Simulacao em tempo real</h2>
            <p>Ajuste valor e prazo para visualizar impacto no fluxo mensal.</p>
            <div className="loans-slider">
              <span>Quanto voce precisa</span>
              <strong>R$ 25.000</strong>
              <div className="bar">
                <span style={{ width: "46%" }} />
              </div>
            </div>
            <div className="loans-slider">
              <span>Em quantos meses</span>
              <strong>24x</strong>
              <div className="bar">
                <span style={{ width: "38%" }} />
              </div>
            </div>
          </div>
          <aside>
            <small>Parcela estimada</small>
            <strong>R$ 1.248,50</strong>
            <p>Taxa media 1,61% a.m. | CET estimado 2,08% a.m.</p>
            <button className="btn btn-primary" type="button">
              Solicitar analise de credito
            </button>
          </aside>
        </section>

        <section className="container loans-table">
          <div className="section-head">
            <div>
              <h2>Principais instituicoes</h2>
              <p>Taxas, prazo e chance de aprovacao em comparacao objetiva.</p>
            </div>
          </div>
          <div className="loans-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Instituicao</th>
                  <th>Taxa mensal</th>
                  <th>Prazo maximo</th>
                  <th>Aprovacao</th>
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
                      <button type="button">Ver detalhes</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="container loans-education">
          <article className="loans-guide">
            <span>Guia tecnico</span>
            <h3>Como escolher o emprestimo ideal sem comprometer seu futuro</h3>
            <p>
              Entenda risco, prazo e custo total para evitar armadilhas na renegociacao de credito.
            </p>
          </article>
          <article className="loans-steps">
            <h3>Guia rapido</h3>
            <ol>
              <li>Defina objetivo e limite mensal</li>
              <li>Compare CET e prazo efetivo</li>
              <li>Negocie garantias e revisoes</li>
            </ol>
          </article>
        </section>

        <section className="container loans-cta">
          <h2>Pronto para encontrar a melhor taxa?</h2>
          <p>
            Nosso motor de comparacao atualiza em minutos e destaca o credito mais aderente ao seu
            perfil.
          </p>
          <button className="btn btn-light" type="button">
            Buscar emprestimo
          </button>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
