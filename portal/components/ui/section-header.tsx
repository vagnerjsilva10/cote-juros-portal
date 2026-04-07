import Link from 'next/link';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  actionExternal?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
  actionExternal
}: SectionHeaderProps) {
  return (
    <header className="section-header">
      <div>
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
      {actionLabel && actionHref ? (
        actionExternal ? (
          <a className="section-action" href={actionHref} target="_blank" rel="noreferrer">
            {actionLabel}
          </a>
        ) : (
          <Link className="section-action" href={actionHref}>
            {actionLabel}
          </Link>
        )
      ) : null}
    </header>
  );
}
