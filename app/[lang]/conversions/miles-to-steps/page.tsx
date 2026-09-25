import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { buildFaqPage } from "@/lib/schema/faq";
import { buildBreadcrumbList } from "@/lib/schema/breadcrumb";
import { calculateStepLength, distanceToSteps } from "@/lib/step-calculator";
import { formatDecimal, formatNumber, interpolate, plural } from "@/lib/i18n/format";
import { absoluteUrl, localizePath } from "@/lib/i18n/href";
import { rich } from "@/lib/i18n/rich";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import { loadConversionHubsMessages, withMetaVars } from "@/lib/i18n/messages/conversion-hubs";
import { buildPageMetadata, getLocale, type LangPageProps } from "@/lib/i18n/page";
import {
  HEIGHT_RANGE,
  KM_PER_MILE,
  MILES_TO_STEPS_VALUES,
  milesToStepsDefault,
  stepsToKmDefault,
  stepsToMilesDefault,
} from "@/lib/conversions";

const PATH = "/conversions/miles-to-steps";
const CALCULATOR = "/tools/step-distance-calculator";
const PUBLISHED_STEPS_PER_MILE = 2117;

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = await loadConversionHubsMessages(locale);
  const num = (value: number) => formatNumber(value, locale);
  return buildPageMetadata({
    locale,
    path: PATH,
    meta: withMetaVars(t.milesToSteps.meta, {
      one: num(1),
      steps: num(PUBLISHED_STEPS_PER_MILE),
    }),
  });
}

export default async function MilesToStepsCategoryPage({ params }: LangPageProps) {
  const locale = await getLocale(params);
  const t = await loadConversionHubsMessages(locale);
  const page = t.milesToSteps;
  const common = getCommonMessages(locale);
  const num = (value: number) => formatNumber(value, locale);
  const feet = formatDecimal(2.5, locale, 1);
  const rows = MILES_TO_STEPS_VALUES.map((miles) => ({
    miles,
    steps: milesToStepsDefault(miles),
  }));
  const oneMileByHeight = HEIGHT_RANGE.map(({ cm, gender }, index) => {
    const stepLengthCm = calculateStepLength({ gender, age: 30, heightCm: cm });
    return {
      label: t.heights[index],
      stepLengthCm,
      steps: distanceToSteps(KM_PER_MILE, stepLengthCm),
    };
  });

  const faq = [
    {
      ...page.faq[0],
      answer: interpolate(page.faq[0].answer, {
        steps: num(PUBLISHED_STEPS_PER_MILE),
        stride: num(76),
        feet,
        tallSteps: num(1870),
        tallHeight: t.heightShort.tall,
        petiteSteps: num(2750),
        petiteHeight: t.heightShort.petite,
      }),
    },
    {
      ...page.faq[1],
      answer: interpolate(page.faq[1].answer, { steps: num(4234) }),
    },
    {
      ...page.faq[2],
      answer: interpolate(page.faq[2].answer, { steps: num(10584), daily: num(10000) }),
    },
    {
      ...page.faq[3],
      answer: interpolate(page.faq[3].answer, {
        ratio: formatDecimal(0.41, locale, 2),
        petiteHeight: t.heightShort.petite,
        petiteSteps: num(2750),
        tallHeight: t.heightShort.tall,
        tallSteps: num(1870),
        percent: num(47),
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
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
            {rich(page.intro, {
              highlight: (
                <strong>{interpolate(t.units.steps, { count: num(PUBLISHED_STEPS_PER_MILE) })}</strong>
              ),
            })}
          </p>

          <section className="rounded-3xl bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 border border-[#ED772F]/20 p-6 md:p-10 mb-10">
            <p className="text-sm font-medium text-[#ED772F] uppercase tracking-wide mb-2">
              {page.quickLabel}
            </p>
            <p className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-2">
              {interpolate(page.heroFigure, {
                steps: interpolate(t.units.steps, { count: num(PUBLISHED_STEPS_PER_MILE) }),
              })}
            </p>
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400">
              {interpolate(page.heroNote, { stride: num(76), feet })}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-3">
              {page.heightTitle}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              {interpolate(page.heightIntro, { ratio: formatDecimal(0.41, locale, 2) })}
            </p>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                  <tr>
                    <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      {page.heightColumns.height}
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      {page.heightColumns.stride}
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      {page.heightColumns.steps}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {oneMileByHeight.map((row) => (
                    <tr key={row.label} className="border-t border-neutral-200 dark:border-neutral-800">
                      <td className="p-3 text-neutral-900 dark:text-white">{row.label}</td>
                      <td className="p-3 text-right text-neutral-600 dark:text-neutral-400 tabular-nums">
                        {interpolate(t.units.strideCm, {
                          stride: formatDecimal(row.stepLengthCm, locale, 1),
                        })}
                      </td>
                      <td className="p-3 text-right text-neutral-900 dark:text-white font-medium tabular-nums">
                        {num(row.steps)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
              {page.formulaTitle}
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-2">
              <code className="px-2 py-1 rounded bg-white/60 dark:bg-black/30 font-mono text-sm">
                {interpolate(page.formula, { steps: num(PUBLISHED_STEPS_PER_MILE) })}
              </code>
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {interpolate(page.formulaNote, {
                one: num(1),
                meters: formatDecimal(1609.34, locale, 2),
                cm: num(100),
                stride: num(76),
                steps: num(PUBLISHED_STEPS_PER_MILE),
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
                      {page.columns.miles}
                    </th>
                    <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                      {page.columns.steps}
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
                      <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums">
                        {num(row.steps)}
                      </td>
                      <td className="p-3 text-right">
                        <Link
                          href={localizePath(locale, `/conversions/miles-to-steps/${row.miles}`)}
                          className="text-[#ED772F] hover:underline"
                        >
                          {plural(locale, row.miles, t.mileArrow)}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 md:p-8 mb-10">
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

          <section className="prose dark:prose-invert max-w-none">
            <h2>{interpolate(page.whyTitle, { rule: num(2000) })}</h2>
            <p>
              {rich(page.whyBody, {
                rule: num(2000),
                stride: num(76),
                daily: num(10000),
                perMile: <strong>{interpolate(page.perMile, { steps: num(PUBLISHED_STEPS_PER_MILE) })}</strong>,
              })}
            </p>
            <h2>{interpolate(page.connectionTitle, { daily: num(10000) })}</h2>
            <p>
              {rich(page.connectionBody, {
                daily: num(10000),
                minutes: num(90),
                distance: (
                  <strong>
                    {interpolate(page.distance, {
                      miles: formatDecimal(stepsToMilesDefault(10000), locale, 2),
                      km: formatDecimal(stepsToKmDefault(10000), locale, 1),
                    })}
                  </strong>
                ),
              })}
            </p>
          </section>
        </div>
      </main>

      <LandingFooter locale={locale} />
    </div>
  );
}
