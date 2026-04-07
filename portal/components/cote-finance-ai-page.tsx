import Image from "next/image";

import { Icon } from "@/components/icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { aiBentoCards, aiPricingPlans } from "@/data/cote-finance-ai";

export function CoteFinanceAiPage() {
  return (
    <>
      <SiteHeader activeLabel="Cote Finance AI" />
      <main className="ai-page">
        <section className="container ai-hero">
          <span>Plataforma proprietaria</span>
          <h1>
            Sua vida financeira, finalmente com <span>clareza.</span>
          </h1>
          <p>
            O Cote Finance AI conecta dados, comportamento e custo de credito para sugerir decisoes
            tecnicas em tempo real.
          </p>
          <div>
            <button className="btn btn-primary" type="button">
              Comecar agora
            </button>
            <button className="btn btn-secondary" type="button">
              Ver demonstracao
            </button>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1300&q=80"
            alt="Dashboard financeiro com graficos e indicadores"
            width={1300}
            height={760}
          />
        </section>

        <section className="container ai-bento">
          <h2>Tecnologia que cuida do seu patrimonio</h2>
          <div className="ai-bento-grid">
            {aiBentoCards.map((card) => (
              <article key={card.title} className={card.dark ? "dark" : undefined}>
                <Icon name={card.icon} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container ai-how">
          <div>
            <h2>Simples, tecnico e transparente.</h2>
            <ol>
              <li>
                <strong>Conecte seus dados</strong>
                <p>Integre contas e consolidamos seu mapa financeiro.</p>
              </li>
              <li>
                <strong>Motor de curadoria</strong>
                <p>A IA calcula cenarios de credito, liquidez e oportunidade.</p>
              </li>
              <li>
                <strong>Evolucao guiada</strong>
                <p>Receba plano acionavel com prioridades por impacto financeiro.</p>
              </li>
            </ol>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80"
            alt="Interface 3D simbolizando analise financeira inteligente"
            width={1000}
            height={900}
          />
        </section>

        <section className="container ai-pricing">
          <h2>Planos para sua evolucao</h2>
          <div className="ai-pricing-grid">
            {aiPricingPlans.map((plan) => (
              <article key={plan.name} className={plan.featured ? "featured" : undefined}>
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
                <ul>
                  {plan.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <button className={plan.featured ? "btn btn-primary" : "btn btn-secondary"} type="button">
                  Escolher plano
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="container ai-final-cta">
          <h2>Pronto para a clareza?</h2>
          <p>Ative sua conta e veja seu dinheiro com contexto tecnico e decisao consciente.</p>
          <button className="btn btn-light" type="button">
            Criar conta gratuita
          </button>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
