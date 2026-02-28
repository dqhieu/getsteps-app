import type { PersonaFAQ } from "@/lib/personas";

interface PersonaFaqProps {
  faqs: PersonaFAQ[];
}

export function PersonaFaq({ faqs }: PersonaFaqProps) {
  if (faqs.length === 0) return null;

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 divide-y divide-neutral-200 dark:divide-neutral-700/50">
          {faqs.map((faq, index) => (
            <details key={index} className="group px-6 py-5">
              <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors list-none flex items-center justify-between gap-4">
                <span>{faq.question}</span>
                <span className="text-neutral-400 dark:text-neutral-500 shrink-0 text-lg leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
