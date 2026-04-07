export function OfferBadge({ label, tone = 'neutral' }: { label: string; tone?: 'neutral' | 'primary' | 'success' }) {
  return <span className={`offer-badge ${tone}`}>{label}</span>;
}
