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
          <div className="max-w-2xl mx-auto text-center rounded-3xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-neutral-900 p-8">
            <ShieldCheck
              className="mx-auto h-7 w-7 text-neutral-700 dark:text-neutral-300"
              aria-hidden
            />
            <h3 className="mt-4 text-xl font-medium tracking-tight text-balance text-neutral-900 dark:text-white">
              {t.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-pretty text-neutral-600 dark:text-neutral-400">
              {t.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
