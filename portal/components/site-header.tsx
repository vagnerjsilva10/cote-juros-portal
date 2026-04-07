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
        <nav className="desktop-nav" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={activeLabel === item.label ? 'active' : undefined}
              aria-current={activeLabel === item.label ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button className="btn btn-primary btn-small" type="button">
          Diagnostico
        </button>
      </div>
    </header>
  );
}
