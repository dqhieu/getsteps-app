import { Receipt, Ticket, Stamp } from "lucide-react";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getLandingMessages } from "@/lib/i18n/messages/landing";
import { Reveal } from "./landing-reveal";

const CARDS = [
  { Icon: Receipt, key: "receipt" },
  { Icon: Ticket, key: "tickets" },
  { Icon: Stamp, key: "stamps" },
] as const;

export function LandingYearlyInsights({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const t = getLandingMessages(locale).yearly;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* The single allowed accent wash on the page. */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.06] to-transparent dark:from-accent/[0.04]" />

      <div className="container mx-auto px-4 relative">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-block rounded-full border border-border border-border px-3 py-1 text-xs font-medium text-muted mb-4">
              {t.badge}
            </span>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-balance mb-3 text-foreground">
              {t.title}
            </h2>
            <p className="text-muted max-w-xl mx-auto text-pretty">
              {t.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {CARDS.map(({ Icon, key }, index) => (
            <Reveal key={key} delay={index * 60}>
              <div className="h-full rounded-2xl bg-card shadow-[var(--shadow-border)] p-6 text-center">
                <Icon
                  className="mx-auto h-6 w-6 text-muted-soft"
                  aria-hidden
                />
                <h3 className="mt-4 font-medium text-foreground">
                  {t.cards[key].title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {t.cards[key].description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
