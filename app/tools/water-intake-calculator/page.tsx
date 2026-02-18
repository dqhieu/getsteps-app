import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { WaterIntakeCalculatorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Water Intake Calculator - How Much Water Should I Drink Per Day?",
  description:
    "Calculate your daily water intake based on weight, activity level, and climate. Get personalized hydration recommendations.",
  keywords: [
    "water intake calculator",
    "how much water should I drink",
    "daily water intake",
    "hydration calculator",
    "water per day",
    "daily water recommendation",
  ],
  openGraph: {
    title: "Water Intake Calculator - How Much Water Should I Drink Per Day?",
    description:
      "Calculate your daily water intake based on weight, activity level, and climate. Get personalized hydration recommendations.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/water-intake-calculator`,
    images: [
      {
        url: "/og/water-intake-calculator.png",
        width: 1200,
        height: 630,
        alt: "Water Intake Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/water-intake-calculator`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Intake Calculator - How Much Water Should I Drink Per Day?",
    description: "Calculate your daily water intake based on weight, activity level, and climate. Get personalized hydration recommendations.",
    images: ["/og/water-intake-calculator.png"],
  },
};

export default function WaterIntakeCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Water Intake Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Find out exactly how much water you should drink daily based on your
            body weight and activity level.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            Use this free water intake calculator to find your personalized daily hydration goal. Enter your weight and activity level to get an instant recommendation in liters, ounces, and cups.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <WaterIntakeCalculatorClient />
        </div>
      </section>

      {/* Info / FAQ Section */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Why Hydration Matters
            </h2>

            <div className="space-y-4">
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  How much water should I drink per day?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  The commonly cited &quot;8 glasses a day&quot; guideline is a rough
                  approximation. A more accurate method is to base your intake on
                  body weight: roughly 33ml per kilogram of body weight. For a
                  70kg adult that is about 2.3 liters, but activity level and
                  climate can push that figure significantly higher. This
                  calculator applies those adjustments automatically.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  Does exercise affect how much water I need?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Yes, significantly. During exercise you lose water through
                  sweat and respiration. A moderate workout can add 500ml or
                  more to your needs, while an intense session or endurance
                  sport can require 1–2 extra liters. Always drink before you
                  feel thirsty — thirst is a late signal of dehydration. This
                  calculator boosts your target by 20–60% depending on your
                  chosen activity level.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  Can I count coffee and tea toward my water intake?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Partially. Coffee and tea do contribute to overall fluid
                  intake, but caffeine has a mild diuretic effect that offsets
                  some of the benefit. A good rule of thumb is to count
                  caffeinated drinks at about 50–75% of their volume toward
                  your daily target, and for every cup of coffee drink an extra
                  half cup of plain water to compensate.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  Does the climate affect my hydration needs?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Hot or humid weather increases sweat rate even at rest,
                  raising your baseline requirement by 500–1000ml per day.
                  High altitude also increases fluid loss through faster
                  breathing. Selecting &quot;Hot / Humid&quot; in the calculator adds
                  500ml to your daily total to reflect this. On particularly
                  hot days or after outdoor activity in the heat, consider
                  drinking even more.
                </p>
              </details>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
              <div className="flex flex-wrap gap-2">
                <a href="/tools/daily-step-goal-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Daily Step Goal Calculator</a>
                <a href="/tools/calorie-deficit-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Calorie Deficit Calculator</a>
                <a href="/tools/bmi-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">BMI Calculator</a>
              </div>
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
            Track your daily steps and stay active with the Steps app.
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
                "name": "How much water should I drink per day?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The general recommendation is 8 glasses (about 2 liters) per day, but actual needs depend on body weight, activity level, and climate. A more accurate formula is 0.033 liters per kilogram of body weight — so a 70 kg person needs about 2.3 liters daily at rest."
                }
              },
              {
                "@type": "Question",
                "name": "Does exercise affect how much water I need?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Physical activity significantly increases fluid loss through sweat. Add approximately 500 ml for every 30 minutes of moderate exercise. For intense activity or hot weather, increase this to 750–1000 ml per 30 minutes."
                }
              },
              {
                "@type": "Question",
                "name": "Can I count coffee and tea toward my water intake?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, partially. Coffee and tea contribute to daily fluid intake despite their mild diuretic effect. Moderate consumption (3–4 cups per day) still provides net hydration. Water, herbal teas, and low-sugar beverages are the best sources."
                }
              },
              {
                "@type": "Question",
                "name": "Does climate affect hydration needs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Hot or humid weather increases sweat rate, raising daily water requirements by 500–1000 ml or more. If you live in or are visiting a hot climate, increase your daily intake accordingly and drink before you feel thirsty."
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
