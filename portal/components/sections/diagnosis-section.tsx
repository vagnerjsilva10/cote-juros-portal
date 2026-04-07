import Link from 'next/link';

import { Icon } from '@/components/icon';

const diagnosisPoints = [
  {
    icon: 'payments',
    title: 'Renda e gastos',
    description: 'Identificação de desperdícios e potencial de poupança.'
  },
  {
    icon: 'receipt_long',
    title: 'Dívidas',
    description: 'Análise de juros e oportunidades de refinanciamento.'
  },
  {
    icon: 'trending_up',
    title: 'Investimentos',
    description: 'Eficiência da carteira versus inflação e metas.'
  },
  {
    icon: 'verified',
    title: 'Oportunidades',
    description: 'Novas fontes de crédito e ganhos fiscais possíveis.'
  }
];

export function DiagnosisSection() {
  return (
    <section className="section-dark section-spaced">
      <div className="container diagnosis-grid">
        <div>
          <span className="badge">Serviço Premium</span>
          <h2>Mapeamos seu futuro financeiro.</h2>
          <p>
            Nosso diagnóstico proprietário analisa quatro pilares críticos para sugerir otimizações
            imediatas e sustentáveis.
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
          <Link className="btn btn-accent" href="/diagnostico-financeiro">
            Iniciar diagnóstico financeiro
          </Link>
        </div>

        <aside className="diagnosis-card">
          <h3>Nível: Moderado</h3>
          <div>
            <div>
              <span>Saúde de crédito</span>
              <strong>92%</strong>
            </div>
            <div className="bar">
              <span style={{ width: '92%' }} />
            </div>
          </div>
          <div>
            <div>
              <span>Otimização de gastos</span>
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
