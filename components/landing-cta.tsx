import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getLandingMessages } from "@/lib/i18n/messages/landing";
import { AppStoreBadge } from "./app-store-badge";
import { Reveal } from "./landing-reveal";

export function LandingCTA({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const t = getLandingMessages(locale).cta;

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-balance mb-7 text-neutral-900 dark:text-white">
              {t.title}
            </h2>
            <AppStoreBadge
              locale={locale}
              className="inline-block mb-5 transition-transform duration-150 hover:scale-[1.04] active:scale-[0.97]"
              imageClassName="h-14 w-auto"
              width={150}
              height={50}
            />
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {t.footnote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
