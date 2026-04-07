import Link from 'next/link';

import { navItems } from '@/data/homepage';

type SiteHeaderProps = {
  activePath?: string;
};

function isActive(activePath: string | undefined, href: string) {
  if (!activePath) return false;
  if (href === '/') return activePath === '/';
  return activePath === href || activePath.startsWith(`${href}/`);
}

function NavigationLinks({
  items,
  activePath,
  mobile
}: {
  items: typeof navItems;
  activePath?: string;
  mobile?: boolean;
}) {
  return (
    <>
      {items.map((item) => {
        const active = isActive(activePath, item.href);
        const className = [
          'nav-link',
          active ? 'active' : '',
          item.highlight ? 'nav-link-highlight' : '',
          mobile ? 'mobile' : ''
        ]
          .filter(Boolean)
          .join(' ');

        if (item.external) {
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={className}
              aria-current={active ? 'page' : undefined}
            >
              {item.label}
            </a>
          );
        }

        return (
          <Link key={item.label} href={item.href} className={className} aria-current={active ? 'page' : undefined}>
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

export function SiteHeader({ activePath = '/' }: SiteHeaderProps) {
  const primaryItems = navItems.filter((item) => !item.highlight);
  const highlightedItem = navItems.find((item) => item.highlight);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Ir para a home Cote Juros">
          Cote Juros
        </Link>

        <nav className="desktop-nav" aria-label="Navegacao principal">
          <NavigationLinks items={primaryItems} activePath={activePath} />
        </nav>

        <div className="header-actions">
          {highlightedItem ? (
            <a
              href={highlightedItem.href}
              target="_blank"
              rel="noreferrer"
              className="nav-link nav-link-highlight nav-link-action"
            >
              {highlightedItem.label}
            </a>
          ) : null}

          <details className="mobile-nav-wrap">
            <summary aria-label="Abrir menu principal">
              <span />
              <span />
              <span />
            </summary>
            <nav className="mobile-nav" aria-label="Navegacao principal mobile">
              <NavigationLinks items={navItems} activePath={activePath} mobile />
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
