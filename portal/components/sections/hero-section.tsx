import Link from 'next/link';

import { coteFinanceAppUrl } from '@/data/homepage';

export function HeroSection() {
  return (
    <section className="hero section-spaced">
      <div className="container hero-grid">
        <div>
          <h1>
            Pare de tomar decisões financeiras <span>no escuro.</span>
          </h1>
          <p>
            Compare soluções financeiras, entenda seu dinheiro e descubra o próximo passo mais
            inteligente para a sua vida financeira.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/diagnostico-financeiro">
              Fazer diagnóstico financeiro
            </Link>
            <a className="btn btn-secondary" href={coteFinanceAppUrl} target="_blank" rel="noreferrer">
              Conhecer o Cote Finance AI
            </a>
          </div>
        </div>

        <div className="preview-card">
          <div className="preview-top">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <small>Análise em tempo real</small>
          </div>
          <div className="preview-kpis">
            <article>
              <p>Patrimônio líquido</p>
              <strong>R$ 142.500</strong>
              <small>+12% este mês</small>
            </article>
            <article>
              <p>Score de crédito</p>
              <strong>842</strong>
              <small>Excelente</small>
            </article>
          </div>
          <div className="preview-chart" aria-hidden="true">
            <span style={{ height: '42%' }} />
            <span style={{ height: '64%' }} />
            <span style={{ height: '48%' }} />
            <span style={{ height: '80%' }} />
            <span style={{ height: '96%' }} className="active" />
            <span style={{ height: '72%' }} />
          </div>
          <aside>Insight IA: você pode economizar R$ 450/mês ao refinanciar seu cartão.</aside>
        </div>
      </div>
    </section>
  );
}
