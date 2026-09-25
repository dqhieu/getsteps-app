import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { AppStoreBadge } from "@/components/app-store-badge";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber, interpolate } from "@/lib/i18n/format";
import { absoluteUrl, localizePath } from "@/lib/i18n/href";
import { rich } from "@/lib/i18n/rich";
import enMessages, {
  type ConversionValuesMessages,
} from "@/lib/i18n/messages/conversion-values/en";
import { buildBreadcrumbList } from "@/lib/schema/breadcrumb";
import { buildFaqPage } from "@/lib/schema/faq";
import {
  formatFixed,
  formatKm,
  formatMiles,
  formatMinutes,
  formatSteps,
  type CaloriesByWeightRow,
  type DistanceByHeightRow,
  type StepsByHeightRow,
  type WalkingTimeRow,
} from "@/lib/conversions";

export interface ConversionFAQItem {
  question: string;
  answer: string;
}

export interface ConversionBreadcrumb {
  label: string;
  href?: string;
}

export interface ConversionValuePageProps {
  h1: string;
  subheading?: string;
  primaryAnswer: string;
  secondaryAnswer?: string;
  intro: string;
  breadcrumbs: ConversionBreadcrumb[];
  stepsByHeightTable?: StepsByHeightRow[];
  distanceByHeightTable?: DistanceByHeightRow[];
  caloriesByWeightTable?: CaloriesByWeightRow[];
  walkingTimeTable?: WalkingTimeRow[];
  realWorldEquivalent?: string;
  relatedLinks: Array<{ label: string; href: string }>;
  faq: ConversionFAQItem[];
  canonicalUrl: string;
  locale?: Locale;
  copy?: ConversionValuesMessages["ui"];
}

function speedValue(mph: number, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return String(mph);
  return Number.isInteger(mph) ? formatNumber(mph, locale) : formatDecimal(mph, locale, 1);
}

export function ConversionValuePage(props: ConversionValuePageProps) {
  const {
    h1,
    subheading,
    primaryAnswer,
    secondaryAnswer,
    intro,
    breadcrumbs,
    stepsByHeightTable,
    distanceByHeightTable,
    caloriesByWeightTable,
    walkingTimeTable,
    realWorldEquivalent,
    relatedLinks,
    faq,
    canonicalUrl,
    locale,
    copy = enMessages.ui,
  } = props;
  const lang = locale ?? DEFAULT_LOCALE;

  const breadcrumbSchema = buildBreadcrumbList(
    breadcrumbs.map((b) => ({
      name: b.label,
      path: b.href ? absoluteUrl(lang, b.href) : canonicalUrl,
    })),
  );

  const faqSchema = faq.length > 0 ? buildFaqPage(faq) : null;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {locale ? <LandingNavbar locale={locale} /> : <LandingNavbar />}

      <main className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav
            aria-label={copy.breadcrumb}
            className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 flex flex-wrap gap-x-2 gap-y-1"
          >
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.href ? (
                  <Link
                    href={localizePath(lang, b.href)}
                    className="hover:text-[#ED772F] transition-colors"
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {b.label}
                  </span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span aria-hidden="true">/</span>
                )}
              </span>
            ))}
          </nav>

          <header className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-3">
              {h1}
            </h1>
            {subheading && (
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                {subheading}
              </p>
            )}
          </header>

          <section className="rounded-3xl bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 border border-[#ED772F]/20 p-6 md:p-10 mb-8">
            <p className="text-sm font-medium text-[#ED772F] uppercase tracking-wide mb-2">
              {copy.quickAnswer}
            </p>
            <p className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-2">
              {primaryAnswer}
            </p>
            {secondaryAnswer && (
              <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400">
                {secondaryAnswer}
              </p>
            )}
          </section>

          <section className="prose dark:prose-invert max-w-none mb-10">
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {intro}
            </p>
            {realWorldEquivalent && (
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <strong>{copy.forContext}</strong> {realWorldEquivalent}
              </p>
            )}
          </section>

          {stepsByHeightTable && stepsByHeightTable.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
                {copy.distanceByHeightTitle}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {copy.distanceByHeightBody}
              </p>
              <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                    <tr>
                      <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        {copy.heightColumn}
                      </th>
                      <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        {copy.strideColumn}
                      </th>
                      <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        {copy.milesColumn}
                      </th>
                      <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        {copy.kilometersColumn}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {stepsByHeightTable.map((r, i) => (
                      <tr
                        key={r.height}
                        className="border-t border-neutral-200 dark:border-neutral-800"
                      >
                        <td className="p-3 text-neutral-900 dark:text-white">
                          {copy.heights[i] ?? r.height}
                        </td>
                        <td className="p-3 text-right text-neutral-600 dark:text-neutral-400 tabular-nums">
                          {interpolate(copy.cm, { value: formatFixed(r.stepLengthCm, 1, lang) })}
                        </td>
                        <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums font-medium">
                          {interpolate(copy.mi, { value: formatMiles(r.miles, lang) })}
                        </td>
                        <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums font-medium">
                          {interpolate(copy.km, { value: formatKm(r.km, lang) })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {distanceByHeightTable && distanceByHeightTable.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
                {copy.stepsRequiredTitle}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {copy.stepsRequiredBody}
              </p>
              <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                    <tr>
                      <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        {copy.heightColumn}
                      </th>
                      <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        {copy.strideColumn}
                      </th>
                      <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        {copy.stepsColumn}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {distanceByHeightTable.map((r, i) => (
                      <tr
                        key={r.height}
                        className="border-t border-neutral-200 dark:border-neutral-800"
                      >
                        <td className="p-3 text-neutral-900 dark:text-white">
                          {copy.heights[i] ?? r.height}
                        </td>
                        <td className="p-3 text-right text-neutral-600 dark:text-neutral-400 tabular-nums">
                          {interpolate(copy.cm, { value: formatFixed(r.stepLengthCm, 1, lang) })}
                        </td>
                        <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums font-medium">
                          {formatSteps(r.steps, lang)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {caloriesByWeightTable && caloriesByWeightTable.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
                {copy.caloriesTitle}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {copy.caloriesBody}
              </p>
              <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                    <tr>
                      <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        {copy.weightColumn}
                      </th>
                      {copy.paces.map((label) => (
                        <th
                          key={label}
                          className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300"
                        >
                          {label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {caloriesByWeightTable.map((r, row) => (
                      <tr
                        key={r.weight}
                        className="border-t border-neutral-200 dark:border-neutral-800"
                      >
                        <td className="p-3 text-neutral-900 dark:text-white">
                          {copy.weights[row] ?? r.weight}
                        </td>
                        {r.calories.map((c, i) => (
                          <td
                            key={i}
                            className="p-3 text-right text-neutral-900 dark:text-white tabular-nums font-medium"
                          >
                            {interpolate(copy.cal, { value: formatNumber(c, lang) })}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {walkingTimeTable && walkingTimeTable.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
                {copy.timeTitle}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {copy.timeBody}
              </p>
              <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                    <tr>
                      <th className="text-left p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        {copy.paceColumn}
                      </th>
                      <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        {copy.speedColumn}
                      </th>
                      <th className="text-right p-3 font-medium text-neutral-700 dark:text-neutral-300">
                        {copy.timeColumn}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {walkingTimeTable.map((r, i) => (
                      <tr
                        key={r.pace}
                        className="border-t border-neutral-200 dark:border-neutral-800"
                      >
                        <td className="p-3 text-neutral-900 dark:text-white">
                          {copy.paces[i] ?? r.pace}
                        </td>
                        <td className="p-3 text-right text-neutral-600 dark:text-neutral-400 tabular-nums">
                          {interpolate(copy.mph, { value: speedValue(r.mph, lang) })}
                        </td>
                        <td className="p-3 text-right text-neutral-900 dark:text-white tabular-nums font-medium">
                          {formatMinutes(r.minutes, lang, copy.duration)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          <section className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 md:p-10 mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
              {copy.ctaTitle}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl">
              {rich(copy.ctaBody, { actual: <em>{copy.ctaActual}</em> })}
            </p>
            <AppStoreBadge
              locale={lang}
              width={140}
              height={47}
              imageClassName="h-12 w-auto"
            />
          </section>

          {relatedLinks.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                {copy.relatedTitle}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {relatedLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={localizePath(lang, l.href)}
                    className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-700 dark:text-neutral-300 hover:border-[#ED772F] hover:text-[#ED772F] transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {faq.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                {copy.faqTitle}
              </h2>
              <div className="space-y-3">
                {faq.map((f) => (
                  <details
                    key={f.question}
                    className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30 p-4 group"
                  >
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white flex items-center justify-between gap-4">
                      <span>{f.question}</span>
                      <span className="text-[#ED772F] transition-transform group-open:rotate-45 text-2xl leading-none">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {f.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <LandingFooter locale={lang} />
    </div>
  );
}
