import Link from 'next/link';

import { Icon } from '@/components/icon';

const toolFeatures = [
  'Cálculo real de CET (Custo Efetivo Total)',
  'Comparativo de juros compostos vs simples',
  'Simulador de amortização de parcelas'
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
          <h3>Simulador de empréstimo</h3>
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
          <Link className="btn btn-dark" href="/emprestimos">
            Comparar taxas agora
          </Link>
        </article>
      </div>
    </section>
  );
}
