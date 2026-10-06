import type { Metadata } from "next";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { RelatedTools } from "@/components/related-tools";
import { ToolHowToBlock } from "@/components/tool-how-to-block";
import { BMRCalculatorClient } from "./client";
import { ToolStickyCta } from "@/components/tool-app-cta";
import { AppDownloadSection } from "@/components/app-store-badge";
import { TOOL_RELATED_BLOGS } from "@/lib/internal-links";
import { buildFaqPage } from "@/lib/schema/faq";
import { loadBmrCalculatorMessages } from "@/lib/i18n/messages/tool-pages/bmr-calculator";
import { buildPageMetadata, getLocale, type LangPageProps } from "@/lib/i18n/page";

const SLUG = "bmr-calculator";
const PATH = `/tools/${SLUG}`;

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = await loadBmrCalculatorMessages(locale);
  return buildPageMetadata({
    locale,
    path: PATH,
    meta: t.meta,
    ogImage: `/og/${SLUG}.png`,
  });
}

export default async function BMRCalculatorPage({ params }: LangPageProps) {
  const locale = await getLocale(params);
  const t = await loadBmrCalculatorMessages(locale);

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
          <BMRCalculatorClient t={t.calculator} locale={locale} />
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
                <ul className="space-y-3 text-sm">
                  {t.info.formulas.map((formula) => (
                    <li key={formula.title}>
                      <strong>{formula.title}</strong>
                      {formula.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </li>
                  ))}
                  <li>
                    <strong>{t.info.exampleLabel}</strong> {t.info.example}
                  </li>
                </ul>
              </div>

              <p className="text-sm">{t.info.primary}</p>
              <p className="text-sm">{t.info.activityFactors}</p>
            </div>

            <RelatedTools
              locale={locale}
              slug={SLUG}
              className="mt-8 pt-6 border-t border-border"
            />
            <RelatedBlogPosts locale={locale} items={TOOL_RELATED_BLOGS[SLUG] || []} />
            <ToolHowToBlock data={t.howTo} />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              {t.faqTitle}
            </h2>
            <div className="space-y-4">
              {t.faq.map((item) => (
                <details key={item.question} className="group">
                  <summary className="cursor-pointer font-medium text-foreground hover:text-accent transition-colors">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
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
      <ToolStickyCta locale={locale} label={t.sticky} />
    </div>
  );
}
