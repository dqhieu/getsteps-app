import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { WalkingCaloriesCalculatorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Walking Calories Calculator - Calories Burned Walking",
  description:
    "Calculate calories burned from walking based on distance, time, and speed. Find out how many calories you burn walking 1 mile, 30 minutes, or any distance.",
  keywords: [
    "walking calories calculator",
    "calories burned walking",
    "how many calories walking 1 mile",
    "calories burned walking 30 minutes",
    "walking calorie burn",
    "calories per mile walking",
    "walk calorie calculator",
    "MET walking",
  ],
  openGraph: {
    title: "Walking Calories Calculator",
    description:
      "Calculate calories burned from walking based on distance, time, and speed.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/walking-calories-calculator`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/walking-calories-calculator`,
  },
};

export default function WalkingCaloriesCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Walking Calories Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Calculate how many calories you burn walking based on distance, time,
            and walking speed. Get accurate estimates using MET values.
          </p>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <WalkingCaloriesCalculatorClient />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              How We Calculate Walking Calories
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                We use the MET (Metabolic Equivalent of Task) method to calculate
                calories burned. This scientifically-backed approach accounts for
                your body weight, walking duration, and intensity level.
              </p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
                  The Formula
                </h3>
                <p className="text-sm mb-2">
                  <strong>Calories = MET × Weight (kg) × Duration (hours)</strong>
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>MET:</strong> Metabolic Equivalent of Task - represents
                    energy expenditure relative to rest
                  </li>
                  <li>
                    <strong>Example:</strong> A 70kg person walking at normal pace
                    (MET 3.5) for 1 hour burns: 3.5 × 70 × 1 = 245 calories
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
                      How many calories does walking 1 mile burn?
                    </summary>
                    <p className="mt-2 text-sm">
                      Walking 1 mile burns approximately 80-100 calories for most
                      people. The exact amount depends on your weight and walking
                      speed. Heavier individuals burn more calories per mile.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How many calories does 30 minutes of walking burn?
                    </summary>
                    <p className="mt-2 text-sm">
                      A 30-minute walk at normal pace burns roughly 100-150
                      calories for most adults. Walking briskly can increase this
                      to 150-200 calories. Use the calculator above for a
                      personalized estimate.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Does walking speed affect calorie burn?
                    </summary>
                    <p className="mt-2 text-sm">
                      Yes, significantly. Walking faster increases your MET value
                      and burns more calories per minute. Brisk walking (6.4 km/h)
                      burns about 30% more calories than a leisurely stroll (3.2
                      km/h).
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      What is MET and why does it matter?
                    </summary>
                    <p className="mt-2 text-sm">
                      MET (Metabolic Equivalent of Task) is a scientific measure of
                      energy expenditure. A MET of 1 represents your resting
                      metabolic rate. Walking at normal pace has a MET of 3.5,
                      meaning you burn 3.5 times more calories than at rest.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How much fat can I burn from walking?
                    </summary>
                    <p className="mt-2 text-sm">
                      One kilogram of body fat contains approximately 7,700
                      calories. Walking 10,000 steps daily (about 400 calories)
                      would burn roughly 1 kg of fat every 19 days, assuming no
                      change in diet. Combine walking with a healthy diet for best
                      results.
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
            Track Your Walking Workouts
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download the Steps app to automatically track your walks, calories
            burned, and progress over time.
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
