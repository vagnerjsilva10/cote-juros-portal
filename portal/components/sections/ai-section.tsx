import Image from 'next/image';

export function AiSection() {
  return (
    <section id="cote-finance-ai" className="section-spaced ai-section">
      <div className="container ai-grid">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
            alt="Painel moderno com grafico financeiro e visual de inteligencia artificial"
            width={960}
            height={720}
          />
        </div>
        <div>
          <h2>Veja sua vida financeira com inteligencia artificial.</h2>
          <p>
            Nossa IA processa seus dados em segundos, identifica padroes e sugere o proximo
            movimento antes que os problemas crescam.
          </p>
          <ul>
            <li>Predicao de fluxo de caixa para os proximos meses.</li>
            <li>Chat consultivo para decisoes de compra e credito.</li>
          </ul>
          <button className="btn btn-dark" type="button">
            Criar conta gratuita
          </button>
        </div>
      </div>
    </section>
  );
}

