import Link from 'next/link';

import { Icon } from '@/components/icon';

type Linkable = {
  href: string;
  external?: boolean;
};

export function FeatureCard({
  icon,
  title,
  description,
  href,
  external
}: { icon: string; title: string; description: string } & Linkable) {
  const content = (
    <article className="feature-card">
      <span className="card-icon">
        <Icon name={icon} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="card-link">Ver detalhes</span>
    </article>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}

export function CategoryCard({
  icon,
  title,
  description,
  href
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="category-card">
      <span className="category-icon">
        <Icon name={icon} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="card-link">Acessar categoria</span>
    </Link>
  );
}

export function ComparisonCard({
  title,
  description,
  items,
  ctaLabel,
  href
}: {
  title: string;
  description: string;
  items: Array<{ name: string; detail: string; signal: string }>;
  ctaLabel: string;
  href: string;
}) {
  return (
    <article className="comparison-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="comparison-list">
        {items.map((item) => (
          <li key={`${title}-${item.name}`}>
            <div>
              <strong>{item.name}</strong>
              <span>{item.detail}</span>
            </div>
            <em>{item.signal}</em>
          </li>
        ))}
      </ul>
      <Link className="card-link" href={href}>
        {ctaLabel}
      </Link>
    </article>
  );
}

export function ToolCard({
  title,
  description,
  category,
  href
}: {
  title: string;
  description: string;
  category: string;
  href: string;
}) {
  return (
    <article className="tool-card">
      <span className="tool-chip">{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className="card-link" href={href}>
        Usar ferramenta
      </Link>
    </article>
  );
}

export function EditorialCard({
  category,
  title,
  excerpt,
  readTime,
  href
}: {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  href: string;
}) {
  return (
    <Link className="editorial-card" href={href}>
      <span className="editorial-tag">{category}</span>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <strong>{readTime}</strong>
    </Link>
  );
}
