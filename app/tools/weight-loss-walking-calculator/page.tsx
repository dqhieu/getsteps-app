import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { WeightLossWalkingCalculatorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Weight Loss Walking Calculator - Steps to Lose Weight",
  description:
    "Calculate how much walking you need to do to reach your weight loss goals. Get a personalized daily step goal for weight loss.",
  keywords: [
    "walking for weight loss",
    "how much walking to lose weight",
    "steps to lose weight",
    "walking weight loss calculator",
    "weight loss step goal",
    "walking calorie deficit",
    "lose weight walking",
    "walking plan for weight loss",
  ],
  openGraph: {
    title: "Weight Loss Walking Calculator",
    description:
      "Calculate how much walking you need to do to reach your weight loss goals.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/weight-loss-walking-calculator`,
    images: [
      {
        url: "/og/weight-loss-walking-calculator.png",
        width: 1200,
        height: 630,
        alt: "Weight Loss Walking Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/weight-loss-walking-calculator`,
  },
};

export default function WeightLossWalkingCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Weight Loss Walking Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Calculate exactly how much walking you need to reach your weight loss
            goal. Get a personalized daily step target and timeline.
          </p>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <WeightLossWalkingCalculatorClient />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Walking for Weight Loss
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                Walking is one of the most accessible and effective forms of
                exercise for weight loss. It&apos;s low-impact, requires no equipment,
                and can be done almost anywhere.
              </p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
                  The Science
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>1 kg of fat = ~7,700 calories</strong> - This is the
                    energy stored in body fat
                  </li>
                  <li>
                    <strong>Walking burns ~60-80 kcal/km</strong> - Varies based on
                    body weight
                  </li>
                  <li>
                    <strong>Safe loss: 0.5-1 kg/week</strong> - Sustainable rate for
                    long-term success
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
                      How many steps do I need to lose weight?
                    </summary>
                    <p className="mt-2 text-sm">
                      For weight loss, most people need 12,000-15,000 steps daily,
                      combined with a healthy diet. The exact number depends on your
                      current weight, goal, and timeframe. Use our calculator for a
                      personalized recommendation.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Can I lose weight by walking alone?
                    </summary>
                    <p className="mt-2 text-sm">
                      Yes, but it&apos;s most effective when combined with a balanced
                      diet. Walking creates a calorie deficit, but managing food
                      intake accelerates results. Walking 10,000 steps burns about
                      400-500 calories.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How long does it take to see results?
                    </summary>
                    <p className="mt-2 text-sm">
                      With consistent walking and proper diet, you may notice
                      changes in 2-3 weeks. Significant weight loss typically
                      becomes visible after 4-6 weeks. Remember, sustainable weight
                      loss is gradual.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Should I walk every day?
                    </summary>
                    <p className="mt-2 text-sm">
                      Walking 5-6 days per week with 1-2 rest days is ideal for most
                      people. Rest days help prevent burnout and allow your body to
                      recover. You can still do light activity on rest days.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Is brisk walking better for weight loss?
                    </summary>
                    <p className="mt-2 text-sm">
                      Yes, brisk walking (about 6 km/h) burns more calories per
                      minute than leisurely walking. However, the total distance
                      matters more than speed. Walk at a pace you can maintain
                      consistently.
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
            Track Your Weight Loss Journey
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download the Steps app to track your daily steps, monitor progress,
            and stay motivated on your weight loss journey.
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
