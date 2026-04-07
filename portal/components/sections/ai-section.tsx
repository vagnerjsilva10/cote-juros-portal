import Image from 'next/image';

import { coteFinanceAppUrl } from '@/data/homepage';

export function AiSection() {
  return (
    <section id="cote-finance-ai" className="section-spaced ai-section">
      <div className="container ai-grid">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
            alt="Painel moderno com gráfico financeiro e visual de inteligência artificial"
            width={960}
            height={720}
          />
        </div>
        <div>
          <h2>Veja sua vida financeira com inteligência artificial.</h2>
          <p>
            Nossa IA processa seus dados em segundos, identifica padrões e sugere o próximo
            movimento antes que os problemas cresçam.
          </p>
          <ul>
            <li>Predição de fluxo de caixa para os próximos meses.</li>
            <li>Chat consultivo para decisões de compra e crédito.</li>
          </ul>
          <a className="btn btn-dark" href={coteFinanceAppUrl} target="_blank" rel="noreferrer">
            Criar conta gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
