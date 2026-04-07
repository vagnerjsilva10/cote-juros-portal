import { Icon } from "@/components/icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { diagnosisGoals, diagnosisScoreHighlights } from "@/data/financial-diagnosis";

export function DiagnosticoFinanceiroPage() {
  return (
    <>
      <SiteHeader activeLabel="Cote Finance AI" />
      <main className="diagnosis-page">
        <section className="container diagnosis-onboarding">
          <div className="diagnosis-progress">
            <span>Step 03 of 05</span>
            <strong>Financial Goals</strong>
            <em>Est. completion: 2 min</em>
          </div>

          <div className="diagnosis-goals-grid">
            {diagnosisGoals.map((goal) => (
              <article key={goal.title} className={goal.active ? "active" : undefined}>
                <Icon name={goal.icon} />
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </article>
            ))}
          </div>

          <div className="diagnosis-nav">
            <button type="button">Previous</button>
            <button className="btn btn-primary" type="button">
              Continue
            </button>
          </div>
        </section>

        <section className="container diagnosis-preview">
          <div className="diagnosis-preview-copy">
            <span>Live insight</span>
            <h2>Your Financial Health Score</h2>
            <p>
              Com base no seu perfil atual, identificamos uma oportunidade de melhorar custo de
              credito em ate 4,2%.
            </p>
            <div className="diagnosis-next-step">
              <Icon name="bolt" />
              <p>Acionavel: consolidacao de divida com taxa menor nas proximas 72h.</p>
            </div>
          </div>
          <div className="diagnosis-preview-board">
            {diagnosisScoreHighlights.map((item) => (
              <article key={item.label} className={item.tone === "primary" ? "primary" : undefined}>
                <small>{item.label}</small>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="container diagnosis-final-cta">
          <Icon name="auto_awesome" />
          <h2>Ready for a deeper dive?</h2>
          <p>
            Conecte suas contas para uma visao em tempo real com plano de reducao de juros e
            curadoria de rota financeira.
          </p>
          <div>
            <button className="btn btn-dark" type="button">
              Conectar ao Cote Finance AI
            </button>
            <button className="btn btn-secondary" type="button">
              Explorar dashboard
            </button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
