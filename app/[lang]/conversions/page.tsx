import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { formatNumber, interpolate, plural } from "@/lib/i18n/format";
import { localizePath } from "@/lib/i18n/href";
import { formatMeasure, loadConversionHubsMessages } from "@/lib/i18n/messages/conversion-hubs";
import { buildPageMetadata, getLocale, type LangPageProps } from "@/lib/i18n/page";
import {
  CONVERSION_CATEGORIES,
  MILES_TO_STEPS_VALUES,
  STEPS_TO_CALORIES_VALUES,
  STEPS_TO_MILES_VALUES,
  milesToStepsDefault,
  stepsToCaloriesDefault,
  stepsToMilesDefault,
} from "@/lib/conversions";

const PATH = "/conversions";
const FEATURED_STEPS_TO_MILES = [5000, 7000, 10000, 12000, 15000, 20000];
const FEATURED_STEPS_TO_CAL = [5000, 7000, 10000, 15000, 20000];

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = await loadConversionHubsMessages(locale);
  return buildPageMetadata({
    locale,
    path: PATH,
    meta: t.hub.meta,
  });
}

export default async function ConversionsHubPage({ params }: LangPageProps) {
  const locale = await getLocale(params);
  const t = await loadConversionHubsMessages(locale);
  const num = (value: number) => formatNumber(value, locale);

  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar locale={locale} />
      <main className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <header className="mb-10 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
              {t.hub.title}
            </h1>
            <p className="text-lg text-muted max-w-2xl">
              {t.hub.subtitle}
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {CONVERSION_CATEGORIES.map((cat) => {
              const copy = t.hub.categories[cat.slug];
              return (
                <Link
                  key={cat.slug}
                  href={localizePath(locale, `/conversions/${cat.slug}`)}
                  className="group p-6 rounded-2xl bg-surface border border-border hover:border-accent transition-colors"
                >
                  <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {copy.title} →
                  </h2>
                  <p className="text-sm text-muted">{copy.description}</p>
                </Link>
              );
            })}
          </section>

          <section className="mb-10">
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {t.hub.stepsToMilesTitle}
              </h2>
              <Link
                href={localizePath(locale, "/conversions/steps-to-miles")}
                className="text-sm text-accent hover:underline"
              >
                {interpolate(t.hub.seeAll, { count: num(STEPS_TO_MILES_VALUES.length) })}
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {FEATURED_STEPS_TO_MILES.map((steps) => (
                <Link
                  key={steps}
                  href={localizePath(locale, `/conversions/steps-to-miles/${steps}`)}
                  className="p-3 rounded-xl bg-surface border border-border hover:border-accent transition-colors"
                >
                  <div className="text-sm text-muted mb-1">
                    {interpolate(t.units.steps, { count: num(steps) })}
                  </div>
                  <div className="text-base font-semibold text-foreground">
                    {interpolate(t.units.miles, {
                      count: formatMeasure(stepsToMilesDefault(steps), locale),
                    })}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {t.hub.milesToStepsTitle}
              </h2>
              <Link
                href={localizePath(locale, "/conversions/miles-to-steps")}
                className="text-sm text-accent hover:underline"
              >
                {interpolate(t.hub.seeAll, { count: num(MILES_TO_STEPS_VALUES.length) })}
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {MILES_TO_STEPS_VALUES.slice(0, 6).map((miles) => (
                <Link
                  key={miles}
                  href={localizePath(locale, `/conversions/miles-to-steps/${miles}`)}
                  className="p-3 rounded-xl bg-surface border border-border hover:border-accent transition-colors"
                >
                  <div className="text-sm text-muted mb-1">
                    {plural(locale, miles, t.mile)}
                  </div>
                  <div className="text-base font-semibold text-foreground">
                    {interpolate(t.units.steps, { count: num(milesToStepsDefault(miles)) })}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="text-2xl font-semibold text-foreground">
                {t.hub.stepsToCaloriesTitle}
              </h2>
              <Link
                href={localizePath(locale, "/conversions/steps-to-calories")}
                className="text-sm text-accent hover:underline"
              >
                {interpolate(t.hub.seeAll, { count: num(STEPS_TO_CALORIES_VALUES.length) })}
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {FEATURED_STEPS_TO_CAL.map((steps) => (
                <Link
                  key={steps}
                  href={localizePath(locale, `/conversions/steps-to-calories/${steps}`)}
                  className="p-3 rounded-xl bg-surface border border-border hover:border-accent transition-colors"
                >
                  <div className="text-sm text-muted mb-1">
                    {interpolate(t.units.steps, { count: num(steps) })}
                  </div>
                  <div className="text-base font-semibold text-foreground">
                    {interpolate(t.units.cal, { count: num(stepsToCaloriesDefault(steps)) })}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-[20px] bg-surface p-6 md:p-8 shadow-[var(--shadow-border)]">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              {t.hub.personalTitle}
            </h2>
            <p className="text-muted mb-4">{t.hub.personalBody}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={localizePath(locale, "/tools/step-distance-calculator")}
                className="inline-flex h-10 items-center gap-2 rounded-[10px] bg-[image:var(--gradient-button-primary),var(--gradient-button-primary-rim)] bg-origin-border px-5 text-sm font-semibold text-[var(--button-primary-text)] shadow-[var(--shadow-button-primary)] [background-clip:padding-box,border-box] transition-[transform,box-shadow] duration-[var(--duration-1)] hover:-translate-y-px hover:shadow-[var(--shadow-button-primary-hover)]"
              >
                {t.hub.distanceCta}
              </Link>
              <Link
                href={localizePath(locale, "/tools/steps-to-calories-calculator")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface text-foreground font-medium border border-border hover:border-accent transition-colors"
              >
                {t.hub.calorieCta}
              </Link>
            </div>
          </section>
        </div>
      </main>
      <LandingFooter locale={locale} />
    </div>
  );
}
