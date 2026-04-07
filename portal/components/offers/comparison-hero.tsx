import { PageHero } from '@/components/ui/page-hero';

export function ComparisonHero({
  eyebrow,
  title,
  subtitle,
  actions
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  actions: Array<{ label: string; href: string; tone?: 'primary' | 'secondary' | 'ghost'; external?: boolean }>;
}) {
  return (
    <PageHero
      eyebrow={eyebrow}
      variant="comparison"
      title={title}
      subtitle={subtitle}
      actions={actions}
      panel={
        <div className="comparison-hero-panel">
          <div className="comparison-hero-stack" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <strong>Curadoria editorial e leitura tecnica de custo</strong>
            <p>Ofertas organizadas para leitura rapida, com transparencia comercial e foco em custo real.</p>
          </div>
        </div>
      }
    />
  );
}
