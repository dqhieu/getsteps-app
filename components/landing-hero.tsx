import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { interpolate } from "@/lib/i18n/format";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import { getLandingMessages } from "@/lib/i18n/messages/landing";
import { AppStoreBadge } from "./app-store-badge";
import { Reveal } from "./landing-reveal";

export function LandingHero({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const t = getLandingMessages(locale).hero;
  const common = getCommonMessages(locale);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <Reveal>
          <div className="relative w-20 h-20 md:w-24 md:h-24 mb-7 rounded-[22px] overflow-hidden shadow-sm ring-1 ring-border">
            <Image
              src="/app_icon.png"
              alt={t.iconAlt}
              fill
              sizes="96px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <p className="text-sm font-medium tracking-tight text-muted mb-4">
            {SITE_CONFIG.name}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-balance max-w-3xl text-foreground">
            {t.titleLead}{" "}
            <span className="text-accent">{t.titleAccent}</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-5 text-lg md:text-xl text-muted max-w-xl leading-relaxed text-pretty">
            {t.subtitle}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-col items-center gap-5">
            <AppStoreBadge
              locale={locale}
              className="inline-block transition-transform duration-150 hover:scale-[1.04] active:scale-[0.97]"
              width={150}
              height={50}
            />
            <div className="flex items-center gap-2 text-sm text-muted">
              <span className="text-amber-500" aria-hidden>
                ★★★★★
              </span>
              <span className="tabular-nums">
                {interpolate(common.appStore.ratingOnAppStore, {
                  rating: SITE_CONFIG.appStoreRating,
                })}
              </span>
              <span className="text-muted">·</span>
              <span>{t.freeDownload}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
