import type { Metadata } from "next";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { PersonaLinks } from "@/components/persona-links";
import { RelatedTools } from "@/components/related-tools";
import { ToolHowToBlock } from "@/components/tool-how-to-block";
import { AppDownloadSection } from "@/components/app-store-badge";
import { WaterIntakeCalculatorClient } from "./client";
import { TOOL_RELATED_BLOGS, TOOL_RELATED_PERSONAS } from "@/lib/internal-links";
import { buildFaqPage } from "@/lib/schema/faq";
import { loadWaterIntakeCalculatorMessages } from "@/lib/i18n/messages/tool-pages/water-intake-calculator";
import { buildPageMetadata, getLocale, type LangPageProps } from "@/lib/i18n/page";

const SLUG = "water-intake-calculator";
const PATH = `/tools/${SLUG}`;

const RELATED = [
  { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
  { title: "Calorie Deficit Calculator", href: "/tools/calorie-deficit-calculator" },
  { title: "BMI Calculator", href: "/tools/bmi-calculator" },
];

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = await loadWaterIntakeCalculatorMessages(locale);
  return buildPageMetadata({
    locale,
    path: PATH,
    meta: t.meta,
    ogImage: "/og/water-intake-calculator.png",
  });
}

export default async function WaterIntakeCalculatorPage({ params }: LangPageProps) {
  const locale = await getLocale(params);
  const t = await loadWaterIntakeCalculatorMessages(locale);

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

      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">{t.intro}</p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <WaterIntakeCalculatorClient t={t.calculator} locale={locale} />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              {t.info.title}
            </h2>

            <div className="space-y-4">
              {t.faq.map((item) => (
                <details key={item.question} className="group">
                  <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>

            <RelatedTools locale={locale} items={RELATED} />
            <RelatedBlogPosts locale={locale} items={TOOL_RELATED_BLOGS[SLUG] || []} />
            <PersonaLinks locale={locale} items={TOOL_RELATED_PERSONAS[SLUG] || []} />
            <ToolHowToBlock data={t.howTo} />
          </div>
        </div>
      </section>

      <AppDownloadSection locale={locale} title={t.cta.title} description={t.cta.description} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqPage(t.faq)) }}
      />

      <LandingFooter locale={locale} />
    </div>
  );
}
