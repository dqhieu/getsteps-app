import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { TDEECalculatorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { TOOL_RELATED_BLOGS } from "@/lib/internal-links";

export const metadata: Metadata = {
  title: "TDEE Calculator - Total Daily Energy Expenditure & Calorie Needs",
  description:
    "Calculate your Total Daily Energy Expenditure (TDEE) and Basal Metabolic Rate (BMR). Find your daily calorie needs for weight loss, maintenance, or muscle gain.",
  keywords: [
    "TDEE calculator",
    "total daily energy expenditure calculator",
    "calorie calculator",
    "BMR calculator",
    "how many calories should I eat",
    "maintenance calories calculator",
    "daily calorie needs",
  ],
  openGraph: {
    title: "TDEE Calculator - Total Daily Energy Expenditure & Calorie Needs",
    description:
      "Calculate your Total Daily Energy Expenditure (TDEE) and Basal Metabolic Rate (BMR). Find your daily calorie needs for weight loss, maintenance, or muscle gain.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/tdee-calculator`,
    images: [
      {
        url: "/og/tdee-calculator.png",
        width: 1200,
        height: 630,
        alt: "TDEE Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/tdee-calculator`,
  },
  twitter: {
    card: "summary_large_image",
    title: "TDEE Calculator - Total Daily Energy Expenditure & Calorie Needs",
    description:
      "Calculate your Total Daily Energy Expenditure (TDEE) and Basal Metabolic Rate (BMR). Find your daily calorie needs for weight loss, maintenance, or muscle gain.",
    images: ["/og/tdee-calculator.png"],
  },
};

export default function TDEECalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            TDEE Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Calculate how many calories you burn per day based on your body stats and activity level.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            Enter your gender, age, weight, height, and activity level to calculate your Total Daily Energy Expenditure (TDEE) — the number of calories your body burns per day. Use it to set the right calorie target for your goals.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <TDEECalculatorClient />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              TDEE & Calorie FAQ
            </h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What is TDEE?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  TDEE stands for Total Daily Energy Expenditure — the total number of calories your body burns in a day. It includes your Basal Metabolic Rate (calories burned at rest), the energy used during physical activity, and the thermic effect of food (calories burned digesting meals). TDEE is the most important number for setting calorie targets for weight loss, maintenance, or muscle gain.
                </p>
              </details>
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  How accurate is TDEE?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  TDEE calculators using the Mifflin-St Jeor equation are generally accurate within 10–15% for most people. Individual variation due to genetics, muscle mass, hormonal factors, and metabolic adaptation can shift the true value. Use the result as a starting point, track your weight for 2–3 weeks, and adjust your intake up or down by 100–200 calories based on actual progress.
                </p>
              </details>
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What is the difference between BMR and TDEE?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest — the minimum energy needed to keep basic functions like breathing, circulation, and cell repair running. TDEE adds all other energy expenditure on top of BMR: physical activity, exercise, and digestion. TDEE is always higher than BMR and is the number you should use for setting calorie goals.
                </p>
              </details>
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  How many calories below TDEE to lose weight?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  A daily deficit of 250–500 calories below TDEE is recommended for sustainable weight loss of 0.25–0.5 kg per week. Larger deficits can cause muscle loss, nutrient deficiencies, and metabolic adaptation. Women should generally not eat below 1,200 calories/day and men below 1,500 calories/day without medical supervision. Combining a moderate deficit with increased daily steps is often more effective than restriction alone.
                </p>
              </details>
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  Does TDEE change with age?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Yes. TDEE typically decreases by approximately 1–2% per decade after age 20, primarily due to loss of muscle mass (sarcopenia). Muscle tissue is metabolically active and burns more calories at rest than fat tissue. Resistance training and maintaining an active lifestyle can significantly slow this decline. Hormonal changes, particularly during menopause, can also reduce TDEE for women.
                </p>
              </details>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
              <div className="flex flex-wrap gap-2">
                <a href="/tools/calorie-deficit-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Calorie Deficit Calculator</a>
                <a href="/tools/bmi-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">BMI Calculator</a>
                <a href="/tools/body-fat-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Body Fat Calculator</a>
              </div>
            </div>
          </div>
          <RelatedBlogPosts items={TOOL_RELATED_BLOGS["tdee-calculator"] || []} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Increase Your TDEE Naturally
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Increase your TDEE naturally by adding more daily steps. Track them in the Steps app.
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
              {
                "@type": "Question",
                name: "What is TDEE?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TDEE (Total Daily Energy Expenditure) is the total calories your body burns per day, including BMR, physical activity, and the thermic effect of food. It is the key number for setting calorie targets for weight loss, maintenance, or muscle gain.",
                },
              },
              {
                "@type": "Question",
                name: "How accurate is TDEE?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TDEE calculators using the Mifflin-St Jeor equation are accurate within 10–15% for most people. Track your weight for 2–3 weeks and adjust intake based on actual results.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between BMR and TDEE?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BMR is calories burned at complete rest. TDEE adds physical activity and digestion on top of BMR. TDEE is always higher and is the number used for calorie goal setting.",
                },
              },
              {
                "@type": "Question",
                name: "How many calories below TDEE to lose weight?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A daily deficit of 250–500 calories below TDEE leads to sustainable weight loss of 0.25–0.5 kg per week. Women should not go below 1,200 cal/day and men below 1,500 cal/day without medical supervision.",
                },
              },
              {
                "@type": "Question",
                name: "Does TDEE change with age?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. TDEE decreases approximately 1–2% per decade after age 20 due to loss of muscle mass. Resistance training and staying active can slow this decline significantly.",
                },
              },
            ],
          }),
        }}
      />
      <LandingFooter />
    </div>
  );
}
