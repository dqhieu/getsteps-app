import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { StepDistanceCalculatorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Step Distance Calculator - Convert Steps to Distance",
  description:
    "Calculate how far you can walk with a certain number of steps, or find out how many steps you need to reach your distance goal. Personalized calculations based on your height, gender, and age.",
  keywords: [
    "step calculator",
    "steps to distance",
    "distance to steps",
    "walking distance calculator",
    "step length calculator",
    "pedometer calculator",
    "how many steps per mile",
    "how many steps per km",
    "steps to km",
    "steps to miles",
  ],
  openGraph: {
    title: "Step Distance Calculator",
    description:
      "Calculate how far you can walk with a certain number of steps, or find out how many steps you need to reach your distance goal.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/step-distance-calculator`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/step-distance-calculator`,
  },
};

export default function StepDistanceCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Step Distance Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Calculate how far you can walk with a certain number of steps, or
            find out how many steps you need to reach your distance goal.
          </p>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <StepDistanceCalculatorClient />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              How We Calculate Your Step Length
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                Your step length is a key factor in determining how far you
                travel with each step. We estimate your step length using a
                research-based formula that considers your height, gender, and
                age.
              </p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
                  The Formula
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Male:</strong> Step Length = Height (cm) x 0.415
                  </li>
                  <li>
                    <strong>Female:</strong> Step Length = Height (cm) x 0.413
                  </li>
                  <li>
                    <strong>Age adjustment:</strong> Step length decreases by
                    approximately 1% per decade after age 40
                  </li>
                </ul>
              </div>

              <p>
                The average step length for adults ranges from 60 to 80 cm (24
                to 31 inches). Factors like walking speed, terrain, and fitness
                level can also affect your actual step length.
              </p>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-3">
                  Common Questions
                </h3>

                <div className="space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How many steps are in a mile?
                    </summary>
                    <p className="mt-2 text-sm">
                      On average, there are approximately 2,000 to 2,500 steps
                      in a mile, depending on your step length. A person with a
                      longer stride will take fewer steps to cover the same
                      distance.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How many steps are in a kilometer?
                    </summary>
                    <p className="mt-2 text-sm">
                      On average, there are approximately 1,250 to 1,550 steps
                      in a kilometer. Use the calculator above to get a
                      personalized estimate based on your profile.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Is 10,000 steps a day enough?
                    </summary>
                    <p className="mt-2 text-sm">
                      10,000 steps per day is a popular goal and equals roughly
                      5 miles (8 km) of walking. Research suggests that even
                      7,000-8,000 steps per day can provide significant health
                      benefits. The best goal is one that challenges you while
                      remaining achievable.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How accurate is this calculator?
                    </summary>
                    <p className="mt-2 text-sm">
                      This calculator provides a reasonable estimate based on
                      your physical characteristics. For the most accurate
                      results, you can measure your actual step length by
                      walking a known distance and counting your steps.
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
            Track Your Steps Automatically
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download the Steps app to track your daily steps, distance, and
            calories automatically on your iPhone and Apple Watch.
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
