import Link from 'next/link';

type FooterItem = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterColumnProps = {
  title: string;
  items: readonly FooterItem[];
};

export function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={`${title}-${item.label}`}>
            {item.external ? (
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
