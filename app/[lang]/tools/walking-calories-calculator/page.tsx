import type { Metadata } from "next";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { PersonaLinks } from "@/components/persona-links";
import { RelatedTools } from "@/components/related-tools";
import { ToolHowToBlock } from "@/components/tool-how-to-block";
import { AppDownloadSection } from "@/components/app-store-badge";
import { ToolAppCta, ToolStickyCta } from "@/components/tool-app-cta";
import { WalkingCaloriesCalculatorClient } from "./client";
import { TOOL_RELATED_BLOGS, TOOL_RELATED_PERSONAS } from "@/lib/internal-links";
import { buildFaqPage } from "@/lib/schema/faq";
import { loadWalkingCaloriesMessages } from "@/lib/i18n/messages/tool-pages/walking-calories-calculator";
import { buildPageMetadata, getLocale, type LangPageProps } from "@/lib/i18n/page";
import { formatDecimal, formatNumber } from "@/lib/i18n/format";
import { rich } from "@/lib/i18n/rich";

const SLUG = "walking-calories-calculator";
const PATH = `/tools/${SLUG}`;
const CHART_HREF = "/blog/met-values-walking-chart";

const MET_HIGHLIGHTS = [3.3, 3.5, 5, 3.5];

const LEVELS = [
  { id: "light", min: 2, max: 3 },
  { id: "moderate", min: 3, max: 4.5 },
  { id: "vigorous", min: 5, max: 6.3 },
] as const;

const MET_ROWS: {
  id: keyof Awaited<ReturnType<typeof loadWalkingCaloriesMessages>>["metTable"]["activities"];
  kmh: number;
  mph: number;
  met: number;
  cal: number;
  highlight?: boolean;
}[] = [
  { id: "very-slow", kmh: 2, mph: 1.2, met: 2, cal: 140 },
  { id: "slow-stroll", kmh: 2.7, mph: 1.7, met: 2.3, cal: 161 },
  { id: "leisurely", kmh: 3.2, mph: 2, met: 2.5, cal: 175 },
  { id: "comfortable", kmh: 3.5, mph: 2.2, met: 2.8, cal: 196 },
  { id: "moderate", kmh: 4, mph: 2.5, met: 3, cal: 210 },
  { id: "steady", kmh: 4.5, mph: 2.8, met: 3.3, cal: 231 },
  { id: "normal", kmh: 5, mph: 3.1, met: 3.5, cal: 245, highlight: true },
  { id: "purposeful", kmh: 5.6, mph: 3.5, met: 4.3, cal: 301 },
  { id: "brisk", kmh: 6, mph: 3.7, met: 4.5, cal: 315, highlight: true },
  { id: "fast", kmh: 6.4, mph: 4, met: 5, cal: 350, highlight: true },
  { id: "very-fast", kmh: 7.2, mph: 4.5, met: 5, cal: 350 },
  { id: "race", kmh: 8, mph: 5, met: 6.3, cal: 441 },
  { id: "uphill-3", kmh: 5.6, mph: 3.5, met: 5.3, cal: 371 },
  { id: "uphill-6", kmh: 5.6, mph: 3.5, met: 8, cal: 560 },
];

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = await loadWalkingCaloriesMessages(locale);
  return buildPageMetadata({
    locale,
    path: PATH,
    meta: t.meta,
    ogImage: "/og/walking-calories-calculator.png",
  });
}

export default async function WalkingCaloriesCalculatorPage({ params }: LangPageProps) {
  const locale = await getLocale(params);
  const t = await loadWalkingCaloriesMessages(locale);
  const oneDecimal = (value: number) => formatDecimal(value, locale, 1);

  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar locale={locale} />

      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t.hero.title}
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <WalkingCaloriesCalculatorClient
            t={t.calculator}
            locale={locale}
            resultCta={
              <ToolAppCta
                locale={locale}
                headline={t.appCta.headline}
                description={t.appCta.description}
              />
            }
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-surface">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              {t.info.title}
            </h2>

            <div className="space-y-6 text-muted">
              <p>{t.info.intro}</p>

              <div className="bg-surface rounded-xl p-4">
                <h3 className="font-medium text-foreground mb-2">
                  {t.info.formulaTitle}
                </h3>
                <p className="text-sm mb-2">
                  <strong>{t.info.formula}</strong>
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>{t.info.metLabel}</strong> {t.info.metText}
                  </li>
                  <li>
                    <strong>{t.info.exampleLabel}</strong> {t.info.example}
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-medium text-foreground mb-3">
                  {t.info.faqTitle}
                </h3>

                <div className="space-y-4">
                  {t.faq.map((item) => (
                    <details key={item.question} className="group">
                      <summary className="cursor-pointer font-medium text-foreground hover:text-accent transition-colors">
                        {item.question}
                      </summary>
                      <p className="mt-2 text-sm">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            <RelatedTools locale={locale} slug={SLUG} />
            <RelatedBlogPosts locale={locale} items={TOOL_RELATED_BLOGS[SLUG] || []} />
            <PersonaLinks locale={locale} items={TOOL_RELATED_PERSONAS[SLUG] || []} />
            <ToolHowToBlock data={t.howTo} />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {t.formula.title}
            </h2>

            <div className="space-y-4 text-muted mb-8">
              <p>
                {rich(t.formula.intro, {
                  name: (
                    <strong className="text-foreground">{t.formula.name}</strong>
                  ),
                  source: <em>{t.formula.source}</em>,
                })}
              </p>

              <div className="bg-surface rounded-xl p-4 text-center">
                <p className="text-lg font-semibold text-foreground">
                  {t.formula.equation}
                </p>
              </div>

              <p>{t.formula.glance}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.formula.highlights.map((item, index) => (
                  <div key={item.phrase} className="bg-surface rounded-lg p-3">
                    <p className="text-sm">
                      <strong className="text-foreground">{item.phrase}</strong>{" "}
                      {item.detail}{" "}
                      <span className="text-accent font-bold">
                        {oneDecimal(MET_HIGHLIGHTS[index])}
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm">
                {rich(t.formula.chartNote, {
                  chart: (
                    <a href={CHART_HREF} className="text-accent hover:underline">
                      {t.formula.chartLabel}
                    </a>
                  ),
                })}
              </p>
            </div>

            <h2 className="text-xl font-semibold text-foreground mb-4">
              {t.understanding.title}
            </h2>

            <div className="space-y-4 text-muted">
              <p>
                {rich(t.understanding.body, {
                  term: (
                    <strong className="text-foreground">{t.understanding.term}</strong>
                  ),
                })}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {LEVELS.map((level) => (
                  <div key={level.id} className="bg-surface rounded-xl p-4">
                    <p className="text-2xl font-bold text-accent mb-1">
                      {oneDecimal(level.min)}–{oneDecimal(level.max)}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {t.understanding.levels[level.id].title}
                    </p>
                    <p className="text-xs mt-1">{t.understanding.levels[level.id].detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm">{t.understanding.footnote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              {t.metTable.title}
            </h2>
            <p className="text-sm text-muted mb-6">
              {t.metTable.intro}
            </p>

            <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-2 text-sm font-semibold text-foreground">
                      {t.metTable.columns.activity}
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-foreground">
                      {t.metTable.columns.kmh}
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-foreground">
                      {t.metTable.columns.mph}
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-foreground">
                      {t.metTable.columns.met}
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-foreground">
                      {t.metTable.columns.cal}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {MET_ROWS.map((row) => (
                    <tr
                      key={row.id}
                      className={`border-b border-border  ${
                        row.highlight ? "bg-accent/5 dark:bg-chip" : ""
                      }`}
                    >
                      <td className="py-3 px-2 text-sm font-medium text-foreground">
                        {t.metTable.activities[row.id]}
                      </td>
                      <td className="py-3 px-2 text-sm text-center text-muted-soft">
                        {oneDecimal(row.kmh)}
                      </td>
                      <td className="py-3 px-2 text-sm text-center text-muted-soft">
                        {oneDecimal(row.mph)}
                      </td>
                      <td className="py-3 px-2 text-sm text-center font-semibold text-accent">
                        {oneDecimal(row.met)}
                      </td>
                      <td className="py-3 px-2 text-sm text-center text-muted-soft">
                        {formatNumber(row.cal, locale)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-muted mt-4">
              {t.metTable.footnote}
            </p>
          </div>
        </div>
      </section>

      <AppDownloadSection locale={locale} title={t.cta.title} description={t.cta.description} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqPage(t.faq)) }}
      />

      <LandingFooter locale={locale} />

      <ToolStickyCta locale={locale} label={t.stickyCta} />
    </div>
  );
}
