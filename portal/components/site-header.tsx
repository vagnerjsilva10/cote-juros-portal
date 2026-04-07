import Link from 'next/link';

import { navItems } from '@/data/homepage';

type SiteHeaderProps = {
  activeLabel?: string;
};

export function SiteHeader({ activeLabel }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/">
          Cote Juros
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            item.href.startsWith('http') ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={activeLabel === item.label ? 'active' : undefined}
                aria-current={activeLabel === item.label ? 'page' : undefined}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={activeLabel === item.label ? 'active' : undefined}
                aria-current={activeLabel === item.label ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>
        <Link className="btn btn-primary btn-small" href="/diagnostico-financeiro">
          Diagnóstico
        </Link>
      </div>
    </header>
  );
}
