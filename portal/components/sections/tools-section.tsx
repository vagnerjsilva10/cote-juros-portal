import { Icon } from '@/components/icon';

const toolFeatures = [
  'Calculo real de CET (Custo Efetivo Total)',
  'Comparativo de juros compostos vs simples',
  'Simulador de amortizacao de parcelas'
];

export function ToolsSection() {
  return (
    <section id="ferramentas" className="section-spaced tools">
      <div className="container tools-grid">
        <div>
          <h2>Ferramentas que simplificam o complexo.</h2>
          <p>
            Pare de depender de planilhas confusas. Nossas calculadoras foram desenhadas para
            respostas objetivas em segundos.
          </p>
          <ul>
            {toolFeatures.map((feature) => (
              <li key={feature}>
                <Icon name="check" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <article className="simulator-card">
          <h3>Simulador de emprestimo</h3>
          <div className="slider-item">
            <div>
              <span>Valor desejado</span>
              <strong>R$ 25.000</strong>
            </div>
            <div className="bar">
              <span style={{ width: '45%' }} />
            </div>
          </div>
          <div className="slider-item">
            <div>
              <span>Prazo</span>
              <strong>24 meses</strong>
            </div>
            <div className="bar">
              <span style={{ width: '30%' }} />
            </div>
          </div>
          <div className="estimate">
            <small>Parcela estimada</small>
            <strong>R$ 1.245,50</strong>
          </div>
          <button className="btn btn-dark" type="button">
            Comparar taxas agora
          </button>
        </article>
      </div>
    </section>
  );
}

