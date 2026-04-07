type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalContentLayoutProps = {
  title: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalContentLayout({ title, updatedAt, intro, sections }: LegalContentLayoutProps) {
  return (
    <main>
      <section className="section-space legal-head">
        <div className="container legal-container">
          <p className="section-eyebrow">Documento Legal</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <small>Atualizado em {updatedAt}</small>
        </div>
      </section>
      <section className="section-space section-muted">
        <div className="container legal-container legal-content">
          {sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={`${section.title}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
