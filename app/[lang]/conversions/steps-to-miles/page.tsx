import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { buildBreadcrumbList } from "@/lib/schema/breadcrumb";
import { formatDecimal, formatNumber, interpolate } from "@/lib/i18n/format";
import { absoluteUrl, localizePath } from "@/lib/i18n/href";
import { rich } from "@/lib/i18n/rich";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import {
  formatMeasure,
  loadConversionHubsMessages,
  withMetaVars,
} from "@/lib/i18n/messages/conversion-hubs";
import { buildPageMetadata, getLocale, type LangPageProps } from "@/lib/i18n/page";
import {
  STEPS_TO_MILES_VALUES,
  stepsToKmDefault,
  stepsToMilesDefault,
} from "@/lib/conversions";

const PATH = "/conversions/steps-to-miles";
const CALCULATOR = "/tools/step-distance-calculator";

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = await loadConversionHubsMessages(locale);
  const num = (value: number) => formatNumber(value, locale);
  return buildPageMetadata({
    locale,
    path: PATH,
    meta: withMetaVars(t.stepsToMiles.meta, {
      ten: num(10000),
      tenMiles: formatDecimal(stepsToMilesDefault(10000), locale, 2),
      five: num(5000),
      fiveMiles: formatDecimal(stepsToMilesDefault(5000), locale, 2),
      from: num(1000),
      to: num(30000),
    }),
  });
}

export default async function StepsToMilesCategoryPage({ params }: LangPageProps) {
  const locale = await getLocale(params);
  const t = await loadConversionHubsMessages(locale);
  const page = t.stepsToMiles;
  const common = getCommonMessages(locale);
  const num = (value: number) => formatNumber(value, locale);
  const feet = formatDecimal(2.5, locale, 1);
  const rows = STEPS_TO_MILES_VALUES.map((steps) => ({
    steps,
    miles: stepsToMilesDefault(steps),
    km: stepsToKmDefault(steps),
  }));

  const breadcrumbSchema = buildBreadcrumbList([
    { name: common.breadcrumbs.home, path: absoluteUrl(locale, "/") },
    { name: common.breadcrumbs.conversions, path: absoluteUrl(locale, "/conversions") },
    { name: page.crumb, path: absoluteUrl(locale, PATH) },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LandingNavbar locale={locale} />

      <main className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav
            aria-label={t.breadcrumbLabel}
            className="text-sm text-muted mb-6 flex flex-wrap gap-x-2"
          >
            <Link href={localizePath(locale, "/")} className="hover:text-accent">
              {common.breadcrumbs.home}
            </Link>
            <span aria-hidden>/</span>
            <Link href={localizePath(locale, "/conversions")} className="hover:text-accent">
              {common.breadcrumbs.conversions}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-muted-soft">{page.crumb}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            {page.title}
          </h1>
          <p className="text-lg text-muted mb-10 max-w-2xl">{page.intro}</p>

          <section className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {page.formulaTitle}
            </h2>
            <p className="text-muted-soft mb-2">
              <code className="px-2 py-1 rounded bg-surface font-mono text-sm">
                {interpolate(page.formula, { factor: formatDecimal(0.000473, locale, 6) })}
              </code>
            </p>
            <p className="text-sm text-muted">
              {interpolate(page.formulaNote, { stride: num(76), feet })}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {page.tableTitle}
            </h2>
            <div className="overflow-x-auto rounded-[20px] bg-card shadow-[var(--shadow-border)]">
              <table className="w-full text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th className="text-left p-3 font-medium text-muted-soft">
                      {page.columns.steps}
                    </th>
                    <th className="text-right p-3 font-medium text-muted-soft">
                      {page.columns.miles}
                    </th>
                    <th className="text-right p-3 font-medium text-muted-soft">
                      {page.columns.kilometers}
                    </th>
                    <th className="text-right p-3 font-medium text-muted-soft">
                      {page.columns.detail}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr
                      key={row.steps}
                      className="border-t border-border hover:bg-surface"
                    >
                      <td className="p-3 text-foreground font-medium tabular-nums">
                        {num(row.steps)}
                      </td>
                      <td className="p-3 text-right text-foreground tabular-nums">
                        {interpolate(t.units.mi, { count: formatMeasure(row.miles, locale) })}
                      </td>
                      <td className="p-3 text-right text-muted-soft tabular-nums">
                        {interpolate(t.units.km, { count: formatMeasure(row.km, locale) })}
                      </td>
                      <td className="p-3 text-right">
                        <Link
                          href={localizePath(locale, `/conversions/steps-to-miles/${row.steps}`)}
                          className="text-accent hover:underline"
                        >
                          {interpolate(t.units.detailSteps, { count: num(row.steps) })}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[20px] bg-surface p-6 md:p-8 shadow-[var(--shadow-border)] mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              {page.exactTitle}
            </h2>
            <p className="text-muted mb-4">
              {rich(page.exactBody, { your: <em>{page.your}</em> })}
            </p>
            <Link
              href={localizePath(locale, CALCULATOR)}
              className="inline-flex h-10 items-center gap-2 rounded-[10px] bg-[image:var(--gradient-button-primary),var(--gradient-button-primary-rim)] bg-origin-border px-5 text-sm font-semibold text-[var(--button-primary-text)] shadow-[var(--shadow-button-primary)] [background-clip:padding-box,border-box] transition-[transform,box-shadow] duration-[var(--duration-1)] hover:-translate-y-px hover:shadow-[var(--shadow-button-primary-hover)]"
            >
              {t.openCalculator}
            </Link>
          </section>

          <section className="prose dark:prose-invert max-w-none">
            <h2>{page.accuracyTitle}</h2>
            <p>
              {interpolate(page.accuracyBody, {
                stride: num(76),
                feet,
                short: num(60),
                tall: num(86),
                low: num(10),
                high: num(15),
              })}
            </p>
            <p>{page.accuracyApp}</p>
          </section>
        </div>
      </main>

      <LandingFooter locale={locale} />
    </div>
  );
}
