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
          <p className="text-lg text-muted mb-10 max-w-2xl">{page.intro}</p>

          <section className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {page.formulaTitle}
            </h2>
            <p className="text-muted-soft mb-2">
              <code className="px-2 py-1 rounded bg-surface font-mono text-sm">
                {interpolate(page.formula, { minutes: num(20) })}
              </code>
            </p>
            <p className="text-sm text-muted">
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
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {page.tableTitle}
            </h2>
            <div className="overflow-x-auto rounded-[20px] bg-card shadow-[var(--shadow-border)]">
              <table className="w-full text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th className="text-left p-3 font-medium text-muted-soft">
                      {page.columns.distance}
                    </th>
                    <th className="text-right p-3 font-medium text-muted-soft">
                      {t.paces.slow}
                    </th>
                    <th className="text-right p-3 font-medium text-muted-soft">
                      {t.paces.normal}
                    </th>
                    <th className="text-right p-3 font-medium text-muted-soft">
                      {t.paces.brisk}
                    </th>
                    <th className="text-right p-3 font-medium text-muted-soft">
                      {page.columns.detail}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr
                      key={row.miles}
                      className="border-t border-border hover:bg-surface"
                    >
                      <td className="p-3 text-foreground font-medium tabular-nums">
                        {plural(locale, row.miles, t.mile)}
                      </td>
                      <td className="p-3 text-right text-muted-soft tabular-nums">
                        {formatDuration(row.slow, locale, t.duration)}
                      </td>
                      <td className="p-3 text-right text-foreground tabular-nums font-medium">
                        {formatDuration(row.normal, locale, t.duration)}
                      </td>
                      <td className="p-3 text-right text-muted-soft tabular-nums">
                        {formatDuration(row.brisk, locale, t.duration)}
                      </td>
                      <td className="p-3 text-right">
                        <Link
                          href={localizePath(locale, `/conversions/miles-to-time/${row.miles}`)}
                          className="text-accent hover:underline"
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
