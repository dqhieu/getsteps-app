import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { CalorieDeficitCalculatorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Calorie Deficit Calculator - How Much to Eat to Lose Weight",
  description:
    "Calculate your daily calorie deficit to reach your weight loss goal safely. Get your TDEE, target daily calories, and recommended daily steps to boost results.",
  keywords: [
    "calorie deficit calculator",
    "how many calories to lose weight",
    "calorie deficit for weight loss",
    "daily calorie goal calculator",
    "TDEE for weight loss",
    "how big should my calorie deficit be",
  ],
  openGraph: {
    title: "Calorie Deficit Calculator - How Much to Eat to Lose Weight",
    description:
      "Calculate your daily calorie deficit to reach your weight loss goal safely. Get your TDEE, target daily calories, and recommended daily steps to boost results.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/calorie-deficit-calculator`,
    images: [
      {
        url: "/og/calorie-deficit-calculator.png",
        width: 1200,
        height: 630,
        alt: "Calorie Deficit Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/calorie-deficit-calculator`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Calorie Deficit Calculator - How Much to Eat to Lose Weight",
    description: "Calculate your daily calorie deficit to reach your weight loss goal safely. Get your TDEE, target daily calories, and recommended daily steps.",
    images: ["/og/calorie-deficit-calculator.png"],
  },
};

export default function CalorieDeficitCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Calorie Deficit Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Find out exactly how many calories to eat per day to reach your goal
            weight safely and sustainably.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            Enter your current stats, goal weight, and timeframe to calculate your daily calorie target, required deficit, and how many extra steps per day will help you reach your goal faster.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <CalorieDeficitCalculatorClient />
        </div>
      </section>

      {/* Info / FAQ Section */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              What Is a Calorie Deficit?
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                A calorie deficit occurs when you consume fewer calories than
                your body burns. Over time, this forces your body to use stored
                fat for energy, leading to weight loss. The key is finding the
                right deficit — large enough to see results, but not so large
                that it&apos;s unsustainable or unhealthy.
              </p>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-3">
                  Common Questions
                </h3>

                <div className="space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How big should my calorie deficit be?
                    </summary>
                    <p className="mt-2 text-sm">
                      A deficit of 500–750 calories per day is generally
                      sustainable and leads to about 0.5–0.75 kg of fat loss per
                      week. Deficits above 1,000 cal/day are not recommended —
                      they can cause muscle loss, nutrient deficiencies, and are
                      hard to maintain long-term.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How long does it take to lose 1 kg?
                    </summary>
                    <p className="mt-2 text-sm">
                      Since 1 kg of fat contains approximately 7,700 calories,
                      at a 500 cal/day deficit it takes about 15 days to lose
                      1 kg. At a 1,000 cal/day deficit, roughly 8 days. Actual
                      results vary based on water retention, muscle gain, and
                      metabolic adaptation.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      What is TDEE?
                    </summary>
                    <p className="mt-2 text-sm">
                      TDEE stands for Total Daily Energy Expenditure — the total
                      number of calories your body burns per day, including your
                      basal metabolic rate (BMR) plus all physical activity. It
                      is your &quot;maintenance&quot; calorie level: eating at TDEE means
                      no weight change.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Can I lose weight just by walking?
                    </summary>
                    <p className="mt-2 text-sm">
                      Yes! Adding 10,000 extra steps per day burns approximately
                      400 extra calories, which alone creates a meaningful
                      deficit over time. Walking is low-impact, sustainable, and
                      can be combined with a modest dietary reduction for
                      excellent results.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Is it safe to eat below 1,200 calories?
                    </summary>
                    <p className="mt-2 text-sm">
                      Generally no. Very low calorie intakes (below 1,200 for
                      women, below 1,500 for men) can lead to muscle loss,
                      nutrient deficiencies, hormonal disruption, and metabolic
                      slowdown. If your calculated target falls below these
                      thresholds, extend your timeline or consult a healthcare
                      professional.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
            <div className="flex flex-wrap gap-2">
              <a href="/tools/weight-loss-walking-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Weight Loss Walking Calculator</a>
              <a href="/tools/body-fat-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Body Fat % Calculator</a>
              <a href="/tools/bmi-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">BMI Calculator</a>
              <a href="/tools/steps-to-calories-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Steps to Calories Calculator</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Track Your Health Journey
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Add more daily steps to boost your calorie deficit naturally with
            the Steps app.
          </p>

          <a
            href={SITE_CONFIG.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95 inline-block"
            aria-label="Download on the App Store"
          >
            <Image
              src="/badge_light_mode.svg"
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-12 w-auto dark:hidden"
            />
            <Image
              src="/badge_dark_mode.svg"
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-12 w-auto hidden dark:block"
            />
          </a>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">
            Free on the App Store
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How big should my calorie deficit be?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A safe and sustainable calorie deficit is 300–750 calories per day, which leads to 0.3–0.7 kg of fat loss per week. A deficit above 1,000 calories per day is not recommended as it can cause muscle loss, nutrient deficiencies, and metabolic adaptation. Combine a moderate deficit with increased physical activity for best results."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to lose 1 kg of fat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "One kilogram of body fat contains approximately 7,700 calories. At a 500 calorie/day deficit, you lose 1 kg in about 15 days. At a 250 calorie/day deficit, it takes about 31 days. Initial weight loss is often faster due to water weight changes, and the rate typically slows as you approach your goal weight."
                }
              },
              {
                "@type": "Question",
                "name": "What is TDEE and how is it calculated?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TDEE (Total Daily Energy Expenditure) is the total calories your body burns per day, including your basal metabolic rate (BMR) plus activity. It's calculated by multiplying your BMR (using the Mifflin-St Jeor equation) by an activity multiplier ranging from 1.2 (sedentary) to 1.9 (very active)."
                }
              },
              {
                "@type": "Question",
                "name": "Can I lose weight just by walking more steps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Walking 10,000 steps burns approximately 300–400 extra calories for most people, depending on body weight and pace. Adding 5,000–10,000 extra steps per day can create a meaningful calorie deficit without changing your diet. Walking is one of the most sustainable forms of exercise for long-term weight loss."
                }
              },
              {
                "@type": "Question",
                "name": "Is it safe to eat below 1,200 calories per day?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Generally, eating below 1,200 calories/day for women or 1,500 calories/day for men is not recommended without medical supervision. Very low calorie intakes can cause muscle loss, nutrient deficiencies, fatigue, and metabolic slowdown. A sustainable deficit above these minimums produces better long-term results."
                }
              }
            ]
          })
        }}
      />

      <LandingFooter />
    </div>
  );
}
