import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { MacroCalculatorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { PersonaLinks } from "@/components/persona-links";
import { ToolHowToBlock } from "@/components/tool-how-to-block";
import { TOOL_RELATED_BLOGS, TOOL_RELATED_PERSONAS } from "@/lib/internal-links";

export const metadata: Metadata = {
  title: "Macro Calculator - Daily Protein, Carbs & Fat for Your Goals",
  description:
    "Calculate your personalized daily macros (protein, carbs, fat) for weight loss, maintenance, or muscle gain. Based on your TDEE and fitness goals.",
  keywords: [
    "macro calculator",
    "macros calculator",
    "protein calculator for weight loss",
    "calculate macros",
    "how many grams of protein per day",
    "macronutrient calculator",
    "IIFYM calculator",
  ],
  openGraph: {
    title: "Macro Calculator - Daily Protein, Carbs & Fat for Your Goals",
    description:
      "Calculate your personalized daily macros (protein, carbs, fat) for weight loss, maintenance, or muscle gain.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/macro-calculator`,
    images: [{ url: "/og/macro-calculator.png", width: 1200, height: 630, alt: "Macro Calculator" }],
  },
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/tools/macro-calculator` },
  twitter: {
    card: "summary_large_image",
    title: "Macro Calculator - Daily Protein, Carbs & Fat for Your Goals",
    description: "Calculate your personalized daily macros for weight loss, maintenance, or muscle gain.",
    images: ["/og/macro-calculator.png"],
  },
};

export default function MacroCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Macro Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Get your personalized daily protein, carbs, and fat targets based on your body stats and fitness goal.
          </p>
        </div>
      </section>

      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            Enter your stats and select your goal to calculate your daily macronutrient targets. Whether you&apos;re cutting, maintaining, or building muscle, the right macro split makes the difference.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <MacroCalculatorClient />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Understanding Macros
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-3">Common Questions</h3>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      What are macros?
                    </summary>
                    <p className="mt-2 text-sm">
                      Macronutrients (protein, carbs, fat) are the three main calorie sources. Protein and carbs provide 4 calories per gram, while fat provides 9 calories per gram. Getting the right balance for your goal determines body composition results.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How much protein should I eat per day?
                    </summary>
                    <p className="mt-2 text-sm">
                      Active individuals should aim for 1.6–2.4g of protein per kg of body weight. The higher end (2.2–2.4g/kg) is recommended for muscle gain or during a calorie deficit to preserve muscle mass.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Should I count macros or just calories?
                    </summary>
                    <p className="mt-2 text-sm">
                      Tracking macros gives more control over body composition. Counting only calories during weight loss can lead to muscle loss if protein is too low — macros ensure you&apos;re losing fat while preserving lean tissue.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      What is a good macro split for weight loss?
                    </summary>
                    <p className="mt-2 text-sm">
                      A high-protein split works best for weight loss: roughly 35–40% protein to preserve muscle, 25% fat for hormonal health, and 30–35% carbs for energy. Prioritise hitting your protein target above all else.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How many grams of carbs per day?
                    </summary>
                    <p className="mt-2 text-sm">
                      Typically 150–300g for active adults. Aim for the lower end during weight loss and higher for endurance athletes or those focused on muscle gain. Carb needs scale with training volume.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
            <div className="flex flex-wrap gap-2">
              {[
                ["TDEE Calculator", "/tools/calorie-deficit-calculator"],
                ["Calorie Deficit Calculator", "/tools/calorie-deficit-calculator"],
                ["BMI Calculator", "/tools/bmi-calculator"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <RelatedBlogPosts items={TOOL_RELATED_BLOGS["macro-calculator"] || []} />
          <PersonaLinks items={TOOL_RELATED_PERSONAS["macro-calculator"] || []} />
          <ToolHowToBlock slug="macro-calculator" />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Pair Your Macro Goals With Daily Steps
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Pair your macro goals with a daily step target for maximum results.
          </p>
          <a
            href={SITE_CONFIG.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95 inline-block"
            aria-label="Download on the App Store"
          >
            <Image src="/badge_light_mode.svg" alt="Download on the App Store" width={120} height={40} className="h-12 w-auto dark:hidden" />
            <Image src="/badge_dark_mode.svg" alt="Download on the App Store" width={120} height={40} className="h-12 w-auto hidden dark:block" />
          </a>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">Free on the App Store</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "What are macros?", acceptedAnswer: { "@type": "Answer", text: "Macronutrients (protein, carbs, fat) are the three main calorie sources. Protein and carbs provide 4 calories per gram, while fat provides 9 calories per gram." } },
              { "@type": "Question", name: "How much protein should I eat per day?", acceptedAnswer: { "@type": "Answer", text: "Active individuals should aim for 1.6–2.4g of protein per kg of body weight. The higher end (2.2–2.4g/kg) is recommended for muscle gain or during a calorie deficit." } },
              { "@type": "Question", name: "Should I count macros or just calories?", acceptedAnswer: { "@type": "Answer", text: "Tracking macros gives more control over body composition. Counting only calories can lead to muscle loss if protein is too low during a weight loss phase." } },
              { "@type": "Question", name: "What is a good macro split for weight loss?", acceptedAnswer: { "@type": "Answer", text: "High protein (35–40%) to preserve muscle, moderate fat (25%), lower carbs (30–35%) works best for weight loss." } },
              { "@type": "Question", name: "How many grams of carbs per day?", acceptedAnswer: { "@type": "Answer", text: "Typically 150–300g for active adults. Aim for the lower end during weight loss and higher for endurance athletes or muscle gain." } },
            ],
          }),
        }}
      />

      <LandingFooter />
    </div>
  );
}
