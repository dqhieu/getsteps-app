import type { PersonaFAQ } from "@/lib/personas";

interface PersonaFaqProps {
  faqs: PersonaFAQ[];
}

export function PersonaFaq({ faqs }: PersonaFaqProps) {
  if (faqs.length === 0) return null;

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Frequently Asked Questions
        </h2>
        <div className="rounded-2xl bg-surface  border border-border divide-y divide-border/50">
          {faqs.map((faq, index) => (
            <details key={index} className="group px-6 py-5">
              <summary className="cursor-pointer font-medium text-foreground hover:text-accent transition-colors list-none flex items-center justify-between gap-4">
                <span>{faq.question}</span>
                <span className="text-muted shrink-0 text-lg leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
