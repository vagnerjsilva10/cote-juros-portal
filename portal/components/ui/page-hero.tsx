import Link from 'next/link';

type HeroAction = {
  label: string;
  href: string;
  external?: boolean;
  tone?: 'primary' | 'secondary' | 'ghost';
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  actions?: HeroAction[];
  align?: 'left' | 'center';
};

function actionClass(tone: HeroAction['tone']) {
  if (tone === 'secondary') return 'btn btn-secondary';
  if (tone === 'ghost') return 'btn btn-ghost';
  return 'btn btn-primary';
}

export function PageHero({ eyebrow, title, subtitle, actions, align = 'left' }: PageHeroProps) {
  return (
    <section className={`page-hero ${align === 'center' ? 'centered' : ''}`}>
      <div className="container">
        {eyebrow ? <p className="hero-eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {actions?.length ? (
          <div className="hero-actions">
            {actions.map((action) =>
              action.external ? (
                <a
                  key={`${action.href}-${action.label}`}
                  className={actionClass(action.tone)}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {action.label}
                </a>
              ) : (
                <Link key={`${action.href}-${action.label}`} className={actionClass(action.tone)} href={action.href}>
                  {action.label}
                </Link>
              )
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
