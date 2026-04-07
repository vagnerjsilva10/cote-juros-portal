import Link from 'next/link';

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryExternal?: boolean;
  dark?: boolean;
};

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  secondaryExternal,
  dark
}: CTASectionProps) {
  return (
    <section className="section-space">
      <div className="container">
        <div className={dark ? 'cta-section cta-dark' : 'cta-section'}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="cta-actions">
            <Link className={dark ? 'btn btn-light' : 'btn btn-primary'} href={primaryHref}>
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref ? (
              secondaryExternal ? (
                <a className={dark ? 'btn btn-outline-light' : 'btn btn-secondary'} href={secondaryHref} target="_blank" rel="noreferrer">
                  {secondaryLabel}
                </a>
              ) : (
                <Link className={dark ? 'btn btn-outline-light' : 'btn btn-secondary'} href={secondaryHref}>
                  {secondaryLabel}
                </Link>
              )
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
