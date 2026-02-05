import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { StepsToCaloriesCalculatorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Steps to Calories Calculator - How Many Calories in 10,000 Steps?",
  description:
    "Calculate how many calories you burn from walking steps. Find out how many calories 10,000 steps burns based on your weight, gender, and age.",
  keywords: [
    "steps to calories",
    "calories burned walking",
    "how many calories in 10000 steps",
    "calories per step",
    "step calorie calculator",
    "walking calorie burn",
    "steps calorie converter",
    "calories burned per step",
  ],
  openGraph: {
    title: "Steps to Calories Calculator",
    description:
      "Calculate how many calories you burn from walking steps. Find out how many calories 10,000 steps burns.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/steps-to-calories-calculator`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/steps-to-calories-calculator`,
  },
};

export default function StepsToCaloriesCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Steps to Calories Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Calculate how many calories you burn from your daily steps. Get
            personalized estimates based on your weight and activity level.
          </p>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <StepsToCaloriesCalculatorClient />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              How We Calculate Calories from Steps
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                The calories you burn while walking depend on several factors,
                including your body weight, walking speed, and distance covered.
                Our calculator uses a research-based formula to estimate your
                calorie burn.
              </p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
                  The Formula
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Base:</strong> Approximately 0.04 calories per step
                    for a 70kg (154 lbs) person
                  </li>
                  <li>
                    <strong>Weight adjustment:</strong> Calories scale
                    proportionally with body weight
                  </li>
                  <li>
                    <strong>Example:</strong> A 70kg person burns ~400 calories
                    walking 10,000 steps
                  </li>
                </ul>
              </div>

              <p>
                Heavier individuals burn more calories per step because it takes
                more energy to move a larger body. Walking faster also increases
                calorie burn, but our calculator uses an average walking pace
                for simplicity.
              </p>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-3">
                  Common Questions
                </h3>

                <div className="space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How many calories does 10,000 steps burn?
                    </summary>
                    <p className="mt-2 text-sm">
                      For an average adult weighing 70kg (154 lbs), 10,000 steps
                      burns approximately 400-500 calories. This varies based on
                      your weight, walking speed, and terrain.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How many steps do I need to burn 500 calories?
                    </summary>
                    <p className="mt-2 text-sm">
                      For a 70kg person, you&apos;d need approximately 12,500 steps
                      to burn 500 calories. Use the calculator above with your
                      specific weight for a more accurate estimate.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Does walking speed affect calories burned?
                    </summary>
                    <p className="mt-2 text-sm">
                      Yes, walking faster burns more calories per minute.
                      However, for the same number of steps, the difference is
                      minimal. Brisk walking (about 6 km/h) can burn 10-20% more
                      calories than a leisurely stroll.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Is counting calories from steps accurate?
                    </summary>
                    <p className="mt-2 text-sm">
                      Step-based calorie calculations provide a reasonable
                      estimate but aren&apos;t perfectly accurate. Factors like
                      terrain, incline, and individual metabolism can affect
                      actual calorie burn. Use these numbers as a general guide.
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
            Track Your Steps & Calories Automatically
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download the Steps app to track your daily steps and calories burned
            automatically on your iPhone and Apple Watch.
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
