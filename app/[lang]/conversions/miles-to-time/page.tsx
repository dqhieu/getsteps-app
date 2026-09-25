import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { buildFaqPage } from "@/lib/schema/faq";
import { buildBreadcrumbList } from "@/lib/schema/breadcrumb";
import { formatNumber, interpolate, plural } from "@/lib/i18n/format";
import { absoluteUrl, localizePath } from "@/lib/i18n/href";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import {
  formatDuration,
  loadConversionHubsMessages,
  withMetaVars,
} from "@/lib/i18n/messages/conversion-hubs";
import { buildPageMetadata, getLocale, type LangPageProps } from "@/lib/i18n/page";
import { KM_PER_MILE, MILES_TO_TIME_VALUES, walkingTimeMinutesDefault } from "@/lib/conversions";

const PATH = "/conversions/miles-to-time";
const CALCULATOR = "/tools/walking-time-calculator";

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = await loadConversionHubsMessages(locale);
  const num = (value: number) => formatNumber(value, locale);
  return buildPageMetadata({
    locale,
    path: PATH,
    meta: withMetaVars(t.milesToTime.meta, {
      one: num(1),
      oneMin: num(20),
      three: num(3),
      threeHours: num(1),
      five: num(5),
      fiveHours: num(1),
      fiveMins: num(40),
    }),
  });
}

export default async function MilesToTimeCategoryPage({ params }: LangPageProps) {
  const locale = await getLocale(params);
  const t = await loadConversionHubsMessages(locale);
  const page = t.milesToTime;
  const common = getCommonMessages(locale);
  const num = (value: number) => formatNumber(value, locale);
  const rows = MILES_TO_TIME_VALUES.map((miles) => {
    const km = miles * KM_PER_MILE;
    return {
      miles,
      slow: walkingTimeMinutesDefault(km, "slow"),
      normal: walkingTimeMinutesDefault(km, "normal"),
      brisk: walkingTimeMinutesDefault(km, "brisk"),
    };
  });

  const faq = [
    {
      ...page.faq[0],
      answer: interpolate(page.faq[0].answer, {
        normalMin: num(20),
        normalMph: num(3),
        briskMph: num(4),
        briskMin: num(15),
        slowMph: num(2),
        slowMin: num(30),
      }),
    },
    {
      ...page.faq[1],
      answer: interpolate(page.faq[1].answer, {
        hours: num(1),
        briskMin: num(45),
        slowHours: num(1),
        slowMins: num(30),
      }),
    },
    {
      ...page.faq[2],
      answer: interpolate(page.faq[2].answer, {
        hours: num(1),
        mins: num(40),
        briskHours: num(1),
        briskMins: num(15),
        slowHours: num(2),
        slowMins: num(30),
      }),
    },
  ];

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqPage(faq)) }}
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
                {interpolate(page.formula, { minutes: num(20) })}
              </code>
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {interpolate(page.formulaNote, {
                normal: num(3),
                brisk: num(4),
                briskCut: num(25),
                slow: num(2),
                slowAdd: num(50),
              })}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
              {page.tableTitle}
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                  <tr>
                    <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      {page.columns.distance}
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      {t.paces.slow}
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      {t.paces.normal}
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      {t.paces.brisk}
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      {page.columns.detail}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr
                      key={row.miles}
                      className="border-t border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/30"
                    >
                      <td className="p-3 text-neutral-900 dark:text-white font-medium tabular-nums">
                        {plural(locale, row.miles, t.mile)}
                      </td>
                      <td className="p-3 text-right text-neutral-700 dark:text-neutral-300 tabular-nums">
                        {formatDuration(row.slow, locale, t.duration)}
                      </td>
                      <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums font-medium">
                        {formatDuration(row.normal, locale, t.duration)}
                      </td>
                      <td className="p-3 text-right text-neutral-700 dark:text-neutral-300 tabular-nums">
                        {formatDuration(row.brisk, locale, t.duration)}
                      </td>
                      <td className="p-3 text-right">
                        <Link
                          href={localizePath(locale, `/conversions/miles-to-time/${row.miles}`)}
                          className="text-[#ED772F] hover:underline"
                        >
                          {interpolate(t.units.detailMi, { count: num(row.miles) })}
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
