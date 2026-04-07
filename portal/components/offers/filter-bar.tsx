import Link from 'next/link';

export function FilterBar({
  title,
  filters
}: {
  title: string;
  filters: Array<{ label: string; href: string; active?: boolean }>;
}) {
  return (
    <section className="section-space section-muted filter-section">
      <div className="container">
        <h2>{title}</h2>
        <div className="filter-chip-row">
          {filters.map((filter) => (
            <Link key={filter.href} href={filter.href} className={filter.active ? 'filter-chip active' : 'filter-chip'}>
              {filter.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
