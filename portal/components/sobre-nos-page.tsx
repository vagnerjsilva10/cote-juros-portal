import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { aboutPillars, aboutStats } from "@/data/about-us";

export function SobreNosPage() {
  return (
    <>
      <SiteHeader activeLabel="Editorial" />
      <main className="about-page">
        <section className="container about-hero">
          <span className="about-kicker">Quem somos</span>
          <h1>
            Transparencia, tecnologia e <span>curadoria.</span>
          </h1>
          <p>
            Fundada para simplificar o mercado financeiro e devolver previsibilidade para decisoes
            de credito, investimento e patrimonio.
          </p>
          <div className="about-hero-gallery">
            <Image
              src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&w=1200&q=80"
              alt="Skyline corporativo com enquadramento editorial"
              width={1200}
              height={700}
            />
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              alt="Tecnologia e dados em ambiente de analise"
              width={1200}
              height={700}
            />
          </div>
          <div className="about-stats">
            {aboutStats.map((stat) => (
              <article key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="container about-mission">
          <div>
            <span>Nossa visao</span>
            <h2>Eliminando as sombras das letras miudas.</h2>
            <p>
              Nossos dados e modelos transformam burocracia em clareza. Ajudamos pessoas a tomar
              decisoes com impacto real no custo de vida.
            </p>
          </div>
          <div className="about-mission-images">
            <div />
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
              alt="Profissional analisando dados financeiros"
              width={1000}
              height={700}
            />
          </div>
        </section>

        <section className="about-dark">
          <div className="container">
            <span>Metodologia</span>
            <h2>O padrao E-E-A-T em financas.</h2>
            <p>
              Combinamos rigor tecnico, UX e transparencia para reduzir risco de interpretacao.
            </p>
            <div className="about-pillars">
              {aboutPillars.map((pillar) => (
                <article key={pillar.title}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container about-ai-cta">
          <div>
            <h2>A inteligencia que conecta seus objetivos.</h2>
            <p>
              Nossa IA complementa a curadoria com monitoramento continuo e recomendacoes
              acionaveis.
            </p>
            <div>
              <button className="btn btn-dark" type="button">
                Conhecer IA
              </button>
              <button className="btn btn-secondary" type="button">
                Nossa historia
              </button>
            </div>
          </div>
        </section>

        <section className="container about-quick-links">
          <p>Pronto para comecar?</p>
          <div>
            <Link href="/ferramentas">Hub de ferramentas</Link>
            <Link href="/comparador-interativo">Comparadores</Link>
            <Link href="/diagnostico-financeiro">Diagnostico</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
