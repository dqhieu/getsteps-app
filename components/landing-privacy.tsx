import { ShieldCheck } from "lucide-react";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getLandingMessages } from "@/lib/i18n/messages/landing";
import { Reveal } from "./landing-reveal";

export function LandingPrivacy({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const t = getLandingMessages(locale).privacy;

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center rounded-3xl bg-card shadow-[var(--shadow-border)] p-8">
            <ShieldCheck
              className="mx-auto h-7 w-7 text-muted-soft"
              aria-hidden
            />
            <h3 className="mt-4 text-xl font-medium tracking-tight text-balance text-foreground">
              {t.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-pretty text-muted">
              {t.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
