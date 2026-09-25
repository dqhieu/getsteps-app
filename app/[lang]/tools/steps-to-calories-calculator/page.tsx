import type { Metadata } from "next";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { PersonaLinks } from "@/components/persona-links";
import { RelatedTools } from "@/components/related-tools";
import { ToolHowToBlock } from "@/components/tool-how-to-block";
import { AppDownloadSection } from "@/components/app-store-badge";
import { ToolAppCta, ToolStickyCta } from "@/components/tool-app-cta";
import { StepsToCaloriesCalculatorClient } from "./client";
import { TOOL_RELATED_BLOGS, TOOL_RELATED_PERSONAS } from "@/lib/internal-links";
import { buildFaqPage } from "@/lib/schema/faq";
import { loadStepsToCaloriesMessages } from "@/lib/i18n/messages/tool-pages/steps-to-calories-calculator";
import { buildPageMetadata, getLocale, type LangPageProps } from "@/lib/i18n/page";
import { formatNumber } from "@/lib/i18n/format";

const SLUG = "steps-to-calories-calculator";
const PATH = `/tools/${SLUG}`;

const STEP_ROWS: {
  steps: number;
  w55: number;
  w70: number;
  w85: number;
  w100: number;
  highlight?: boolean;
}[] = [
  { steps: 1000, w55: 31, w70: 40, w85: 49, w100: 57 },
  { steps: 2000, w55: 63, w70: 80, w85: 97, w100: 114 },
  { steps: 3000, w55: 94, w70: 120, w85: 146, w100: 171 },
  { steps: 4000, w55: 126, w70: 160, w85: 194, w100: 229 },
  { steps: 5000, w55: 157, w70: 200, w85: 243, w100: 286 },
  { steps: 6000, w55: 189, w70: 240, w85: 291, w100: 343 },
  { steps: 7000, w55: 220, w70: 280, w85: 340, w100: 400 },
  { steps: 7500, w55: 236, w70: 300, w85: 364, w100: 429 },
  { steps: 8000, w55: 251, w70: 320, w85: 389, w100: 457 },
  { steps: 9000, w55: 283, w70: 360, w85: 437, w100: 514 },
  { steps: 10000, w55: 314, w70: 400, w85: 486, w100: 571, highlight: true },
  { steps: 12000, w55: 377, w70: 480, w85: 583, w100: 686 },
  { steps: 12500, w55: 393, w70: 500, w85: 607, w100: 714 },
  { steps: 13000, w55: 409, w70: 520, w85: 631, w100: 743 },
  { steps: 15000, w55: 471, w70: 600, w85: 729, w100: 857 },
  { steps: 17500, w55: 550, w70: 700, w85: 850, w100: 1000 },
  { steps: 20000, w55: 629, w70: 800, w85: 971, w100: 1143 },
];

const EXTRA_BLOGS = [
  { title: "How Many Steps Burn 500 Calories?", href: "/blog/how-many-steps-burn-500-calories" },
  { title: "How Many Steps to Burn 100 Calories?", href: "/blog/how-many-steps-to-burn-100-calories" },
  { title: "How Many Calories Does 1,000 Steps Burn?", href: "/blog/how-many-calories-does-1000-steps-burn" },
  { title: "Calories Burned Per Step", href: "/blog/calories-burned-per-step" },
];

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = await loadStepsToCaloriesMessages(locale);
  return buildPageMetadata({
    locale,
    path: PATH,
    meta: t.meta,
    ogImage: "/og/steps-to-calories-calculator.png",
  });
}

export default async function StepsToCaloriesCalculatorPage({ params }: LangPageProps) {
  const locale = await getLocale(params);
  const t = await loadStepsToCaloriesMessages(locale);

  const calCell = (value: number) => `${formatNumber(value, locale)} ${t.table.cal}`;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar locale={locale} />

      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            {t.hero.title}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <StepsToCaloriesCalculatorClient
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

      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              {t.info.title}
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>{t.info.intro}</p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
                  {t.info.formulaTitle}
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>{t.info.baseLabel}</strong> {t.info.baseText}
                  </li>
                  <li>
                    <strong>{t.info.weightLabel}</strong> {t.info.weightText}
                  </li>
                  <li>
                    <strong>{t.info.exampleLabel}</strong> {t.info.exampleText}
                  </li>
                </ul>
              </div>

              <p>{t.info.heavier}</p>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-3">
                  {t.info.faqTitle}
                </h3>

                <div className="space-y-4">
                  {t.faq.map((item) => (
                    <details key={item.question} className="group">
                      <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                        {item.question}
                      </summary>
                      <p className="mt-2 text-sm">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            <RelatedTools locale={locale} slug={SLUG} />
            <RelatedBlogPosts
              locale={locale}
              items={[...(TOOL_RELATED_BLOGS[SLUG] || []), ...EXTRA_BLOGS]}
            />
            <PersonaLinks locale={locale} items={TOOL_RELATED_PERSONAS[SLUG] || []} />
            <ToolHowToBlock data={t.howTo} />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              {t.table.title}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              {t.table.intro}
            </p>

            <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b-2 border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-3 px-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      {t.table.steps}
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      55 kg
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      70 kg
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      85 kg
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      100 kg
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {STEP_ROWS.map((row) => (
                    <tr
                      key={row.steps}
                      className={`border-b border-neutral-100 dark:border-neutral-700/50 ${
                        row.highlight ? "bg-[#ED772F]/5 dark:bg-[#ED772F]/10" : ""
                      }`}
                    >
                      <td className="py-3 px-2 text-sm font-medium text-neutral-900 dark:text-white">
                        {formatNumber(row.steps, locale)}
                      </td>
                      <td className="py-3 px-2 text-sm text-center text-neutral-700 dark:text-neutral-300">
                        {calCell(row.w55)}
                      </td>
                      <td className="py-3 px-2 text-sm text-center font-semibold text-[#ED772F]">
                        {calCell(row.w70)}
                      </td>
                      <td className="py-3 px-2 text-sm text-center text-neutral-700 dark:text-neutral-300">
                        {calCell(row.w85)}
                      </td>
                      <td className="py-3 px-2 text-sm text-center text-neutral-700 dark:text-neutral-300">
                        {calCell(row.w100)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-4">
              {t.table.footnote}
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

      <div aria-hidden className="h-20 md:hidden" />
      <ToolStickyCta locale={locale} label={t.stickyCta} />
    </div>
  );
}
