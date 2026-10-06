import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { PersonaLinks } from "@/components/persona-links";
import { RelatedTools } from "@/components/related-tools";
import { ToolHowToBlock } from "@/components/tool-how-to-block";
import { AppDownloadSection } from "@/components/app-store-badge";
import { ToolStickyCta } from "@/components/tool-app-cta";
import { StepDistanceCalculatorClient } from "./client";
import { TOOL_RELATED_BLOGS, TOOL_RELATED_PERSONAS } from "@/lib/internal-links";
import { buildFaqPage } from "@/lib/schema/faq";
import { localizePath } from "@/lib/i18n/href";
import { rich } from "@/lib/i18n/rich";
import { loadStepDistanceCalculatorMessages } from "@/lib/i18n/messages/tool-pages/step-distance-calculator";
import { buildPageMetadata, getLocale, type LangPageProps } from "@/lib/i18n/page";

const SLUG = "step-distance-calculator";
const PATH = `/tools/${SLUG}`;
const KM_HIGHLIGHT = 9;
const STEPS_HIGHLIGHT = 4;

const CONVERSION_HREFS = [
  "/conversions/steps-to-miles/10000",
  "/conversions/steps-to-miles/5000",
  "/conversions/miles-to-steps",
  "/conversions/km-to-steps",
  "/conversions/steps-to-km",
  "/conversions/steps-to-miles",
  "/conversions/steps-to-calories",
];

const chipClass =
  "text-sm px-3 py-1.5 rounded-lg bg-surface text-muted-soft hover:text-accent transition-colors";

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = await loadStepDistanceCalculatorMessages(locale);
  return buildPageMetadata({
    locale,
    path: PATH,
    meta: t.meta,
    ogImage: "/og/step-distance-calculator.png",
  });
}

export default async function StepDistanceCalculatorPage({ params }: LangPageProps) {
  const locale = await getLocale(params);
  const t = await loadStepDistanceCalculatorMessages(locale);

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
          <StepDistanceCalculatorClient
            t={{ calculator: t.calculator, resultCta: t.resultCta }}
            locale={locale}
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
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>{t.info.maleLabel}</strong> {t.info.maleFormula}
                  </li>
                  <li>
                    <strong>{t.info.femaleLabel}</strong> {t.info.femaleFormula}
                  </li>
                  <li>
                    <strong>{t.info.ageLabel}</strong> {t.info.ageFormula}
                  </li>
                </ul>
              </div>

              <p>{t.info.average}</p>

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

            <div className="mt-6">
              <p className="text-sm font-medium text-muted-soft mb-3">
                {t.conversionsTitle}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.conversions.map((label, index) => (
                  <Link
                    key={CONVERSION_HREFS[index]}
                    href={localizePath(locale, CONVERSION_HREFS[index])}
                    className={chipClass}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href={localizePath(locale, "/conversions")}
                  className="text-sm px-3 py-1.5 rounded-lg bg-chip text-accent hover:bg-accent/20 transition-colors font-medium"
                >
                  {t.allConversions}
                </Link>
              </div>
            </div>

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
              {t.stepsToKm.title}
            </h2>

            <div className="space-y-4 text-muted">
              <p>
                {rich(t.stepsToKm.intro, {
                  phrase: (
                    <strong className="text-foreground">{t.stepsToKm.phrase}</strong>
                  ),
                  ruleA: (
                    <strong className="text-foreground">{t.stepsToKm.ruleA}</strong>
                  ),
                  ruleB: (
                    <strong className="text-foreground">{t.stepsToKm.ruleB}</strong>
                  ),
                })}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {t.stepsToKm.cards.map((card) => (
                  <div
                    key={card.label}
                    className="bg-surface rounded-lg p-3 text-center"
                  >
                    <p className="text-lg font-bold text-accent">{card.value}</p>
                    <p className="text-xs text-muted">{card.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm">
                {rich(t.stepsToKm.guide, {
                  link: (
                    <a
                      href="/blog/how-many-steps-in-a-kilometer"
                      className="text-accent hover:underline"
                    >
                      {t.stepsToKm.guideLink}
                    </a>
                  ),
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              {t.kmTable.title}
            </h2>
            <p className="text-sm text-muted mb-6">{t.kmTable.intro}</p>

            <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
              <table className="w-full min-w-[400px]">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-2 text-sm font-semibold text-foreground">
                      {t.kmTable.colDistance}
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-foreground">
                      {t.kmTable.colSteps}
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-foreground">
                      {t.kmTable.colTime}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.kmTable.rows.map((row, index) => (
                    <tr
                      key={row.distance}
                      className={`border-b border-border  ${
                        index === KM_HIGHLIGHT ? "bg-accent/5 dark:bg-chip" : ""
                      }`}
                    >
                      <td className="py-3 px-2 text-sm font-medium text-foreground">
                        {row.distance}
                      </td>
                      <td className="py-3 px-2 text-sm text-center font-semibold text-accent">
                        {row.steps}
                      </td>
                      <td className="py-3 px-2 text-sm text-center text-muted-soft">
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-muted mt-4">{t.kmTable.footnote}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              {t.stepsTable.title}
            </h2>
            <p className="text-sm text-muted mb-6">{t.stepsTable.intro}</p>

            <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
              <table className="w-full min-w-[400px]">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-2 text-sm font-semibold text-foreground">
                      {t.stepsTable.colSteps}
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-foreground">
                      {t.stepsTable.colKm}
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-foreground">
                      {t.stepsTable.colMiles}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.stepsTable.rows.map((row, index) => (
                    <tr
                      key={row.steps}
                      className={`border-b border-border  ${
                        index === STEPS_HIGHLIGHT ? "bg-accent/5 dark:bg-chip" : ""
                      }`}
                    >
                      <td className="py-3 px-2 text-sm font-medium text-foreground">
                        {row.steps}
                      </td>
                      <td className="py-3 px-2 text-sm text-center font-semibold text-accent">
                        {row.km}
                      </td>
                      <td className="py-3 px-2 text-sm text-center text-muted-soft">
                        {row.miles}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-muted mt-4">{t.stepsTable.footnote}</p>
          </div>
        </div>
      </section>

      <AppDownloadSection locale={locale} title={t.cta.title} description={t.cta.description} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqPage(t.faq)) }}
      />

      <LandingFooter locale={locale} />

      <div aria-hidden className="h-20 md:hidden" />
      <ToolStickyCta locale={locale} label={t.stickyCta} />
    </div>
  );
}
