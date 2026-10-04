import type { Metadata } from "next";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { PersonaLinks } from "@/components/persona-links";
import { RelatedTools } from "@/components/related-tools";
import { ToolHowToBlock } from "@/components/tool-how-to-block";
import { AppDownloadSection } from "@/components/app-store-badge";
import { BodyFatCalculatorClient } from "./client";
import { TOOL_RELATED_BLOGS, TOOL_RELATED_PERSONAS } from "@/lib/internal-links";
import { buildFaqPage } from "@/lib/schema/faq";
import { loadBodyFatCalculatorMessages } from "@/lib/i18n/messages/tool-pages/body-fat-calculator";
import { buildPageMetadata, getLocale, type LangPageProps } from "@/lib/i18n/page";

const SLUG = "body-fat-calculator";
const PATH = `/tools/${SLUG}`;

const RELATED = [
  { title: "BMI Calculator", href: "/tools/bmi-calculator" },
  { title: "Calorie Deficit Calculator", href: "/tools/calorie-deficit-calculator" },
  { title: "Weight Loss Walking Calculator", href: "/tools/weight-loss-walking-calculator" },
];

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = await loadBodyFatCalculatorMessages(locale);
  return buildPageMetadata({
    locale,
    path: PATH,
    meta: t.meta,
    ogImage: "/og/body-fat-calculator.png",
  });
}

export default async function BodyFatCalculatorPage({ params }: LangPageProps) {
  const locale = await getLocale(params);
  const t = await loadBodyFatCalculatorMessages(locale);

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

      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-muted text-center">
            {t.intro}
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <BodyFatCalculatorClient t={t.calculator} locale={locale} />
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
          </div>

          <RelatedTools locale={locale} items={RELATED} className="mt-4" />
          <RelatedBlogPosts locale={locale} items={TOOL_RELATED_BLOGS[SLUG] || []} />
          <PersonaLinks locale={locale} items={TOOL_RELATED_PERSONAS[SLUG] || []} />
          <ToolHowToBlock data={t.howTo} />
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
