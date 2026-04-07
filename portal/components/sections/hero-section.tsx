export function HeroSection() {
  return (
    <section className="hero section-spaced">
      <div className="container hero-grid">
        <div>
          <h1>
            Pare de tomar decisoes financeiras <span>no escuro.</span>
          </h1>
          <p>
            Compare solucoes financeiras, entenda seu dinheiro e descubra o proximo passo mais
            inteligente para sua vida financeira.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" type="button">
              Fazer diagnostico financeiro
            </button>
            <button className="btn btn-secondary" type="button">
              Conhecer o Cote Finance AI
            </button>
          </div>
        </div>

        <div className="preview-card">
          <div className="preview-top">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <small>Analise em tempo real</small>
          </div>
          <div className="preview-kpis">
            <article>
              <p>Patrimonio Liquido</p>
              <strong>R$ 142.500</strong>
              <small>+12% este mes</small>
            </article>
            <article>
              <p>Score de Credito</p>
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
          <aside>
            AI Insight: voce pode economizar R$ 450/mes refinanciando seu cartao.
          </aside>
        </div>
      </div>
    </section>
  );
}
