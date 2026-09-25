import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { buildBreadcrumbList } from "@/lib/schema/breadcrumb";
import { formatDecimal, formatNumber, interpolate } from "@/lib/i18n/format";
import { absoluteUrl, localizePath } from "@/lib/i18n/href";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import { loadConversionHubsMessages, withMetaVars } from "@/lib/i18n/messages/conversion-hubs";
import { buildPageMetadata, getLocale, type LangPageProps } from "@/lib/i18n/page";
import { STEPS_TO_CALORIES_VALUES, stepsToCaloriesDefault } from "@/lib/conversions";

const PATH = "/conversions/steps-to-calories";
const CALCULATOR = "/tools/steps-to-calories-calculator";

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = await loadConversionHubsMessages(locale);
  const num = (value: number) => formatNumber(value, locale);
  return buildPageMetadata({
    locale,
    path: PATH,
    meta: withMetaVars(t.stepsToCalories.meta, {
      steps: num(10000),
      calories: num(stepsToCaloriesDefault(10000)),
      from: num(1000),
      to: num(30000),
    }),
  });
}

export default async function StepsToCaloriesCategoryPage({ params }: LangPageProps) {
  const locale = await getLocale(params);
  const t = await loadConversionHubsMessages(locale);
  const page = t.stepsToCalories;
  const common = getCommonMessages(locale);
  const num = (value: number) => formatNumber(value, locale);
  const rows = STEPS_TO_CALORIES_VALUES.map((steps) => ({
    steps,
    calories: stepsToCaloriesDefault(steps),
  }));

  const breadcrumbSchema = buildBreadcrumbList([
    { name: common.breadcrumbs.home, path: absoluteUrl(locale, "/") },
    { name: common.breadcrumbs.conversions, path: absoluteUrl(locale, "/conversions") },
    { name: page.crumb, path: absoluteUrl(locale, PATH) },
  ]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LandingNavbar locale={locale} />
      <main className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav
            aria-label={t.breadcrumbLabel}
            className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 flex flex-wrap gap-x-2"
          >
            <Link href={localizePath(locale, "/")} className="hover:text-[#ED772F]">
              {common.breadcrumbs.home}
            </Link>
            <span aria-hidden>/</span>
            <Link href={localizePath(locale, "/conversions")} className="hover:text-[#ED772F]">
              {common.breadcrumbs.conversions}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-neutral-700 dark:text-neutral-300">{page.crumb}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
            {page.title}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl">{page.intro}</p>

          <section className="rounded-3xl bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 border border-[#ED772F]/20 p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
              {page.formulaTitle}
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-2">
              <code className="px-2 py-1 rounded bg-white/60 dark:bg-black/30 font-mono text-sm">
                {interpolate(page.formula, {
                  factor: formatDecimal(0.04, locale, 2),
                  weight: num(70),
                })}
              </code>
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {interpolate(page.formulaNote, { one: num(1), per: num(25) })}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
              {interpolate(page.tableTitle, { lb: num(155), kg: num(70) })}
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                  <tr>
                    <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      {page.columns.steps}
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      {page.columns.calories}
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      {page.columns.detail}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr
                      key={row.steps}
                      className="border-t border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/30"
                    >
                      <td className="p-3 text-neutral-900 dark:text-white font-medium tabular-nums">
                        {num(row.steps)}
                      </td>
                      <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums">
                        {interpolate(t.units.cal, { count: num(row.calories) })}
                      </td>
                      <td className="p-3 text-right">
                        <Link
                          href={localizePath(locale, `/conversions/steps-to-calories/${row.steps}`)}
                          className="text-[#ED772F] hover:underline"
                        >
                          {interpolate(t.units.detailArrow, { count: num(row.steps) })}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              {page.exactTitle}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">{page.exactBody}</p>
            <Link
              href={localizePath(locale, CALCULATOR)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ED772F] text-white font-medium hover:bg-[#d8651f] transition-colors"
            >
              {t.openCalculator}
            </Link>
          </section>
        </div>
      </main>
      <LandingFooter locale={locale} />
    </div>
  );
}
