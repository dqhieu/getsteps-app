export interface FAQItem {
  q: string;
  a: string;
}

interface Props {
  items: FAQItem[];
  heading?: string;
}

export function FAQ({ items, heading = "Frequently Asked Questions" }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };

  return (
    <section className="not-prose my-10" aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="mb-5 text-2xl font-semibold text-foreground"
      >
        {heading}
      </h2>
      <div className="space-y-3">
        {items.map((it, i) => (
          <details
            key={i}
            className="group rounded-xl bg-card shadow-[var(--shadow-border)] p-4 open:shadow-sm transition-shadow"
          >
            <summary className="cursor-pointer list-none font-medium text-foreground marker:hidden [&::-webkit-details-marker]:hidden flex items-start justify-between gap-3">
              <span>{it.q}</span>
              <span aria-hidden className="text-muted group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-soft">
              {it.a}
            </p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
