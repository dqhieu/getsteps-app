import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { DailyStepGoalCalculatorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Daily Step Goal Calculator - Personalized Step Recommendations",
  description:
    "Get a personalized daily step goal based on your age, activity level, and health goals. Find out how many steps you should walk each day.",
  keywords: [
    "daily step goal",
    "how many steps should I walk",
    "step goal by age",
    "recommended steps per day",
    "personalized step goal",
    "step goal calculator",
    "daily walking goal",
    "steps for weight loss",
  ],
  openGraph: {
    title: "Daily Step Goal Calculator",
    description:
      "Get a personalized daily step goal based on your age, activity level, and health goals.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/daily-step-goal-calculator`,
    images: [
      {
        url: "/og/daily-step-goal-calculator.png",
        width: 1200,
        height: 630,
        alt: "Daily Step Goal Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/daily-step-goal-calculator`,
  },
};

export default function DailyStepGoalCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Daily Step Goal Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Get a personalized daily step goal recommendation based on your age,
            current activity level, and health objectives.
          </p>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <DailyStepGoalCalculatorClient />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Understanding Step Goals
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                The right step goal depends on your individual circumstances. While
                10,000 steps is a popular target, research shows that health
                benefits can be achieved with different amounts depending on your
                age and fitness level.
              </p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
                  Recommended Steps by Age
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Children & Teens (under 18):</strong> 12,000-15,000
                    steps/day
                  </li>
                  <li>
                    <strong>Adults (18-64):</strong> 10,000-12,000 steps/day
                  </li>
                  <li>
                    <strong>Seniors (65+):</strong> 7,000-10,000 steps/day
                  </li>
                </ul>
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-3">
                  Common Questions
                </h3>

                <div className="space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Is 10,000 steps a day necessary?
                    </summary>
                    <p className="mt-2 text-sm">
                      No, 10,000 steps isn&apos;t a magic number. Recent studies show
                      significant health benefits start at around 7,000-8,000 steps
                      per day. The key is to be more active than you currently are.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How many steps for weight loss?
                    </summary>
                    <p className="mt-2 text-sm">
                      For weight loss, aim for 12,000+ steps daily combined with a
                      balanced diet. This can burn an extra 400-600 calories per
                      day. Remember, consistency matters more than hitting a perfect
                      number every day.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How do I increase my daily steps?
                    </summary>
                    <p className="mt-2 text-sm">
                      Start by adding 1,000 steps per week to your current average.
                      Take walking meetings, park farther away, use stairs instead
                      of elevators, and schedule short walking breaks throughout the
                      day.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      What if I can&apos;t reach my goal?
                    </summary>
                    <p className="mt-2 text-sm">
                      Any increase in activity is beneficial. If your goal feels too
                      ambitious, adjust it to something more achievable. The best
                      goal is one you can maintain consistently. Focus on progress,
                      not perfection.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Track Your Step Goals
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download the Steps app to set daily goals, track your progress, and
            build healthy walking habits.
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

      <LandingFooter />
    </div>
  );
}
