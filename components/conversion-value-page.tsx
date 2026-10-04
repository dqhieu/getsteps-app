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
    <div className="min-h-screen bg-background">
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
            className="text-sm text-muted mb-6 flex flex-wrap gap-x-2 gap-y-1"
          >
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.href ? (
                  <Link
                    href={localizePath(lang, b.href)}
                    className="hover:text-accent transition-colors"
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-muted-soft">
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
            <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
              {h1}
            </h1>
            {subheading && (
              <p className="text-lg text-muted">
                {subheading}
              </p>
            )}
          </header>

          <section className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 p-6 md:p-10 mb-8">
            <p className="text-sm font-medium text-accent uppercase tracking-wide mb-2">
              {copy.quickAnswer}
            </p>
            <p className="text-4xl md:text-6xl font-bold text-foreground mb-2">
              {primaryAnswer}
            </p>
            {secondaryAnswer && (
              <p className="text-base md:text-lg text-muted">
                {secondaryAnswer}
              </p>
            )}
          </section>

          <section className="prose dark:prose-invert max-w-none mb-10">
            <p className="text-muted-soft leading-relaxed">
              {intro}
            </p>
            {realWorldEquivalent && (
              <p className="text-muted-soft leading-relaxed">
                <strong>{copy.forContext}</strong> {realWorldEquivalent}
              </p>
            )}
          </section>

          {stepsByHeightTable && stepsByHeightTable.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                {copy.distanceByHeightTitle}
              </h2>
              <p className="text-sm text-muted mb-4">
                {copy.distanceByHeightBody}
              </p>
              <div className="overflow-x-auto rounded-[20px] bg-card shadow-[var(--shadow-border)]">
                <table className="w-full text-sm">
                  <thead className="bg-surface">
                    <tr>
                      <th className="text-left p-3 font-medium text-muted-soft">
                        {copy.heightColumn}
                      </th>
                      <th className="text-right p-3 font-medium text-muted-soft">
                        {copy.strideColumn}
                      </th>
                      <th className="text-right p-3 font-medium text-muted-soft">
                        {copy.milesColumn}
                      </th>
                      <th className="text-right p-3 font-medium text-muted-soft">
                        {copy.kilometersColumn}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {stepsByHeightTable.map((r, i) => (
                      <tr
                        key={r.height}
                        className="border-t border-border"
                      >
                        <td className="p-3 text-foreground">
                          {copy.heights[i] ?? r.height}
                        </td>
                        <td className="p-3 text-right text-muted tabular-nums">
                          {interpolate(copy.cm, { value: formatFixed(r.stepLengthCm, 1, lang) })}
                        </td>
                        <td className="p-3 text-right text-foreground tabular-nums font-medium">
                          {interpolate(copy.mi, { value: formatMiles(r.miles, lang) })}
                        </td>
                        <td className="p-3 text-right text-foreground tabular-nums font-medium">
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
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                {copy.stepsRequiredTitle}
              </h2>
              <p className="text-sm text-muted mb-4">
                {copy.stepsRequiredBody}
              </p>
              <div className="overflow-x-auto rounded-[20px] bg-card shadow-[var(--shadow-border)]">
                <table className="w-full text-sm">
                  <thead className="bg-surface">
                    <tr>
                      <th className="text-left p-3 font-medium text-muted-soft">
                        {copy.heightColumn}
                      </th>
                      <th className="text-right p-3 font-medium text-muted-soft">
                        {copy.strideColumn}
                      </th>
                      <th className="text-right p-3 font-medium text-muted-soft">
                        {copy.stepsColumn}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {distanceByHeightTable.map((r, i) => (
                      <tr
                        key={r.height}
                        className="border-t border-border"
                      >
                        <td className="p-3 text-foreground">
                          {copy.heights[i] ?? r.height}
                        </td>
                        <td className="p-3 text-right text-muted tabular-nums">
                          {interpolate(copy.cm, { value: formatFixed(r.stepLengthCm, 1, lang) })}
                        </td>
                        <td className="p-3 text-right text-foreground tabular-nums font-medium">
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
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                {copy.caloriesTitle}
              </h2>
              <p className="text-sm text-muted mb-4">
                {copy.caloriesBody}
              </p>
              <div className="overflow-x-auto rounded-[20px] bg-card shadow-[var(--shadow-border)]">
                <table className="w-full text-sm">
                  <thead className="bg-surface">
                    <tr>
                      <th className="text-left p-3 font-medium text-muted-soft">
                        {copy.weightColumn}
                      </th>
                      {copy.paces.map((label) => (
                        <th
                          key={label}
                          className="text-right p-3 font-medium text-muted-soft"
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
                        className="border-t border-border"
                      >
                        <td className="p-3 text-foreground">
                          {copy.weights[row] ?? r.weight}
                        </td>
                        {r.calories.map((c, i) => (
                          <td
                            key={i}
                            className="p-3 text-right text-foreground tabular-nums font-medium"
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
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                {copy.timeTitle}
              </h2>
              <p className="text-sm text-muted mb-4">
                {copy.timeBody}
              </p>
              <div className="overflow-x-auto rounded-[20px] bg-card shadow-[var(--shadow-border)]">
                <table className="w-full text-sm">
                  <thead className="bg-surface">
                    <tr>
                      <th className="text-left p-3 font-medium text-muted-soft">
                        {copy.paceColumn}
                      </th>
                      <th className="text-right p-3 font-medium text-muted-soft">
                        {copy.speedColumn}
                      </th>
                      <th className="text-right p-3 font-medium text-muted-soft">
                        {copy.timeColumn}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {walkingTimeTable.map((r, i) => (
                      <tr
                        key={r.pace}
                        className="border-t border-border"
                      >
                        <td className="p-3 text-foreground">
                          {copy.paces[i] ?? r.pace}
                        </td>
                        <td className="p-3 text-right text-muted tabular-nums">
                          {interpolate(copy.mph, { value: speedValue(r.mph, lang) })}
                        </td>
                        <td className="p-3 text-right text-foreground tabular-nums font-medium">
                          {formatMinutes(r.minutes, lang, copy.duration)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          <section className="rounded-3xl bg-surface border border-border p-6 md:p-10 mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
              {copy.ctaTitle}
            </h2>
            <p className="text-muted mb-6 max-w-2xl">
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
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                {copy.relatedTitle}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {relatedLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={localizePath(lang, l.href)}
                    className="p-3 rounded-xl bg-surface border border-border text-sm text-muted-soft hover:border-accent hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {faq.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                {copy.faqTitle}
              </h2>
              <div className="space-y-3">
                {faq.map((f) => (
                  <details
                    key={f.question}
                    className="rounded-[20px] bg-card shadow-[var(--shadow-border)] p-4 group"
                  >
                    <summary className="cursor-pointer font-medium text-foreground flex items-center justify-between gap-4">
                      <span>{f.question}</span>
                      <span className="text-accent transition-transform group-open:rotate-45 text-2xl leading-none">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-muted-soft leading-relaxed">
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
