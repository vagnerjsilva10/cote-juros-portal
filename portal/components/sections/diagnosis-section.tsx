import { Icon } from '@/components/icon';

const diagnosisPoints = [
  {
    icon: 'payments',
    title: 'Renda e gastos',
    description: 'Identificacao de desperdicios e potencial de poupanca.'
  },
  {
    icon: 'receipt_long',
    title: 'Dividas',
    description: 'Analise de juros e oportunidades de refinanciamento.'
  },
  {
    icon: 'trending_up',
    title: 'Investimentos',
    description: 'Eficiencia da carteira versus inflacao e metas.'
  },
  {
    icon: 'verified',
    title: 'Oportunidades',
    description: 'Novas fontes de credito e ganhos fiscais possiveis.'
  }
];

export function DiagnosisSection() {
  return (
    <section className="section-dark section-spaced">
      <div className="container diagnosis-grid">
        <div>
          <span className="badge">Premium Service</span>
          <h2>Mapeamos seu futuro financeiro.</h2>
          <p>
            Nosso diagnostico proprietario analisa quatro pilares criticos para sugerir
            otimizacoes imediatas e sustentaveis.
          </p>
          <div className="diagnosis-points">
            {diagnosisPoints.map((point) => (
              <article key={point.title}>
                <Icon name={point.icon} />
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
          <button className="btn btn-accent" type="button">
            Iniciar diagnostico financeiro
          </button>
        </div>

        <aside className="diagnosis-card">
          <h3>Nivel: Moderado</h3>
          <div>
            <div>
              <span>Saude de credito</span>
              <strong>92%</strong>
            </div>
            <div className="bar">
              <span style={{ width: '92%' }} />
            </div>
          </div>
          <div>
            <div>
              <span>Otimizacao de gastos</span>
              <strong>64%</strong>
            </div>
            <div className="bar">
              <span style={{ width: '64%' }} />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
