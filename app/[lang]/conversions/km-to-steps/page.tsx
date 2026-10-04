import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { buildFaqPage } from "@/lib/schema/faq";
import { buildBreadcrumbList } from "@/lib/schema/breadcrumb";
import { calculateStepLength, distanceToSteps } from "@/lib/step-calculator";
import { formatDecimal, formatNumber, interpolate } from "@/lib/i18n/format";
import { absoluteUrl, localizePath } from "@/lib/i18n/href";
import { rich } from "@/lib/i18n/rich";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import { loadConversionHubsMessages, withMetaVars } from "@/lib/i18n/messages/conversion-hubs";
import { buildPageMetadata, getLocale, type LangPageProps } from "@/lib/i18n/page";
import { HEIGHT_RANGE, KM_TO_STEPS_VALUES, kmToStepsDefault } from "@/lib/conversions";

const PATH = "/conversions/km-to-steps";
const CALCULATOR = "/tools/step-distance-calculator";

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = await loadConversionHubsMessages(locale);
  const num = (value: number) => formatNumber(value, locale);
  return buildPageMetadata({
    locale,
    path: PATH,
    meta: withMetaVars(t.kmToSteps.meta, {
      one: num(1),
      steps: num(kmToStepsDefault(1)),
      from: num(1),
      to: num(15),
    }),
  });
}

export default async function KmToStepsCategoryPage({ params }: LangPageProps) {
  const locale = await getLocale(params);
  const t = await loadConversionHubsMessages(locale);
  const page = t.kmToSteps;
  const common = getCommonMessages(locale);
  const num = (value: number) => formatNumber(value, locale);
  const feet = formatDecimal(2.5, locale, 1);
  const stepsPerKm = kmToStepsDefault(1);
  const rows = KM_TO_STEPS_VALUES.map((km) => ({
    km,
    steps: kmToStepsDefault(km),
  }));
  const oneKmByHeight = HEIGHT_RANGE.map(({ cm, gender }, index) => {
    const stepLengthCm = calculateStepLength({ gender, age: 30, heightCm: cm });
    return {
      label: t.heights[index],
      stepLengthCm,
      steps: distanceToSteps(1, stepLengthCm),
    };
  });

  const faq = [
    {
      ...page.faq[0],
      answer: interpolate(page.faq[0].answer, {
        steps: num(stepsPerKm),
        stride: num(76),
        tall: num(1160),
        petite: num(1710),
      }),
    },
    {
      ...page.faq[1],
      answer: interpolate(page.faq[1].answer, { steps: num(kmToStepsDefault(5)) }),
    },
    {
      ...page.faq[2],
      answer: interpolate(page.faq[2].answer, {
        steps: num(kmToStepsDefault(10)),
        daily: num(10000),
      }),
    },
  ];

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqPage(faq)) }}
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
          <p className="text-lg text-muted mb-8 max-w-2xl">
            {rich(page.intro, {
              highlight: <strong>{interpolate(t.units.steps, { count: num(stepsPerKm) })}</strong>,
            })}
          </p>

          <section className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 p-6 md:p-10 mb-10">
            <p className="text-sm font-medium text-accent uppercase tracking-wide mb-2">
              {page.quickLabel}
            </p>
            <p className="text-4xl md:text-6xl font-bold text-foreground mb-2">
              {interpolate(page.heroFigure, {
                steps: interpolate(t.units.steps, { count: num(stepsPerKm) }),
              })}
            </p>
            <p className="text-base md:text-lg text-muted">
              {interpolate(page.heroNote, { stride: num(76), feet })}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              {page.heightTitle}
            </h2>
            <p className="text-sm text-muted mb-4">
              {interpolate(page.heightIntro, { ratio: formatDecimal(0.41, locale, 2) })}
            </p>
            <div className="overflow-x-auto rounded-[20px] bg-card shadow-[var(--shadow-border)]">
              <table className="w-full text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th className="text-left p-3 font-medium text-muted-soft">
                      {page.heightColumns.height}
                    </th>
                    <th className="text-right p-3 font-medium text-muted-soft">
                      {page.heightColumns.stride}
                    </th>
                    <th className="text-right p-3 font-medium text-muted-soft">
                      {page.heightColumns.steps}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {oneKmByHeight.map((row) => (
                    <tr key={row.label} className="border-t border-border">
                      <td className="p-3 text-foreground">{row.label}</td>
                      <td className="p-3 text-right text-muted tabular-nums">
                        {interpolate(t.units.strideCm, {
                          stride: formatDecimal(row.stepLengthCm, locale, 1),
                        })}
                      </td>
                      <td className="p-3 text-right text-foreground font-medium tabular-nums">
                        {num(row.steps)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[20px] bg-surface p-6 md:p-8 shadow-[var(--shadow-border)] mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {page.formulaTitle}
            </h2>
            <p className="text-muted-soft mb-2">
              <code className="px-2 py-1 rounded bg-surface font-mono text-sm">
                {interpolate(page.formula, { steps: num(stepsPerKm) })}
              </code>
            </p>
            <p className="text-sm text-muted">
              {interpolate(page.formulaNote, {
                one: num(1),
                cm: num(100000),
                stride: num(76),
                steps: num(stepsPerKm),
              })}
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
                      {page.columns.kilometers}
                    </th>
                    <th className="text-right p-3 font-medium text-muted-soft">
                      {page.columns.steps}
                    </th>
                    <th className="text-right p-3 font-medium text-muted-soft">
                      {page.columns.detail}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr
                      key={row.km}
                      className="border-t border-border hover:bg-surface"
                    >
                      <td className="p-3 text-foreground font-medium tabular-nums">
                        {interpolate(t.units.km, { count: num(row.km) })}
                      </td>
                      <td className="p-3 text-right text-foreground tabular-nums">
                        {num(row.steps)}
                      </td>
                      <td className="p-3 text-right">
                        <Link
                          href={localizePath(locale, `/conversions/km-to-steps/${row.km}`)}
                          className="text-accent hover:underline"
                        >
                          {interpolate(t.units.detailKm, { count: num(row.km) })}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[20px] bg-surface p-6 md:p-8 shadow-[var(--shadow-border)]">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              {page.exactTitle}
            </h2>
            <p className="text-muted mb-4">{page.exactBody}</p>
            <Link
              href={localizePath(locale, CALCULATOR)}
              className="inline-flex h-10 items-center gap-2 rounded-[10px] bg-[image:var(--gradient-button-primary),var(--gradient-button-primary-rim)] bg-origin-border px-5 text-sm font-semibold text-[var(--button-primary-text)] shadow-[var(--shadow-button-primary)] [background-clip:padding-box,border-box] transition-[transform,box-shadow] duration-[var(--duration-1)] hover:-translate-y-px hover:shadow-[var(--shadow-button-primary-hover)]"
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
