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
        className="mb-5 text-2xl font-semibold text-neutral-900 dark:text-white"
      >
        {heading}
      </h2>
      <div className="space-y-3">
        {items.map((it, i) => (
          <details
            key={i}
            className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-4 open:shadow-sm transition-shadow"
          >
            <summary className="cursor-pointer list-none font-medium text-neutral-900 dark:text-white marker:hidden [&::-webkit-details-marker]:hidden flex items-start justify-between gap-3">
              <span>{it.q}</span>
              <span aria-hidden className="text-neutral-400 group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
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
