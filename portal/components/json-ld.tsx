type JsonLdValue = Record<string, unknown> | Array<Record<string, unknown>>;

type JsonLdProps = {
  data: JsonLdValue;
};

function serializeJsonLd(data: JsonLdValue): string {
  if (Array.isArray(data)) {
    const graph = data.map((item) => {
      const copy = { ...item };
      delete copy['@context'];
      return copy;
    });

    return JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph
    }).replace(/</g, '\\u003c');
  }

  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd(data)
      }}
    />
  );
}
