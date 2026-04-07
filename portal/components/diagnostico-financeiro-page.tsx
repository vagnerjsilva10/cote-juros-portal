import Link from 'next/link';

import { Icon } from '@/components/icon';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { diagnosisGoals, diagnosisScoreHighlights } from '@/data/financial-diagnosis';
import { coteFinanceAppUrl } from '@/data/homepage';

export function DiagnosticoFinanceiroPage() {
  return (
    <>
      <SiteHeader activeLabel="Cote Finance AI" />
      <main className="diagnosis-page">
        <section className="container diagnosis-onboarding">
          <div className="diagnosis-progress">
            <span>Etapa 03 de 05</span>
            <strong>Objetivos Financeiros</strong>
            <em>Tempo estimado: 2 min</em>
          </div>

          <div className="diagnosis-goals-grid">
            {diagnosisGoals.map((goal) => (
              <article key={goal.title} className={goal.active ? 'active' : undefined}>
                <Icon name={goal.icon} />
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </article>
            ))}
          </div>

          <div className="diagnosis-nav">
            <Link href="/">Anterior</Link>
            <Link className="btn btn-primary" href="/diagnostico-financeiro">
              Continuar
            </Link>
          </div>
        </section>

        <section className="container diagnosis-preview">
          <div className="diagnosis-preview-copy">
            <span>Insight em tempo real</span>
            <h2>Seu Índice de Saúde Financeira</h2>
            <p>
              Com base no seu perfil atual, identificamos uma oportunidade de reduzir o custo de
              crédito em até 4,2%.
            </p>
            <div className="diagnosis-next-step">
              <Icon name="bolt" />
              <p>Próximo passo: consolidar dívidas caras com taxa menor nas próximas 72 horas.</p>
            </div>
          </div>
          <div className="diagnosis-preview-board">
            {diagnosisScoreHighlights.map((item) => (
              <article key={item.label} className={item.tone === 'primary' ? 'primary' : undefined}>
                <small>{item.label}</small>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="container diagnosis-final-cta">
          <Icon name="auto_awesome" />
          <h2>Pronto para uma análise mais profunda?</h2>
          <p>
            Conecte suas contas para visão em tempo real, redução inteligente de juros e uma rota
            financeira personalizada.
          </p>
          <div>
            <a className="btn btn-dark" href={coteFinanceAppUrl} target="_blank" rel="noreferrer">
              Conectar ao Cote Finance AI
            </a>
            <Link className="btn btn-secondary" href="/comparador-interativo">
              Explorar painel
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
