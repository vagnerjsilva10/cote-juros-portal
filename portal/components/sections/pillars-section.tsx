import { Icon } from '@/components/icon';
import { pillars } from '@/data/homepage';

export function PillarsSection() {
  return (
    <section className="section-spaced section-muted">
      <div className="container pillars-grid">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="pillar-card">
            <div className="pillar-icon">
              <Icon name={pillar.icon} />
            </div>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
