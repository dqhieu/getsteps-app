import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { BMICalculatorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "BMI Calculator - Calculate Your Body Mass Index",
  description:
    "Calculate your Body Mass Index (BMI) and find out if you're in a healthy weight range. Get personalized health insights and step recommendations.",
  keywords: [
    "BMI calculator",
    "body mass index",
    "calculate BMI",
    "healthy weight calculator",
    "BMI chart",
    "weight for height",
    "BMI categories",
    "healthy BMI range",
  ],
  openGraph: {
    title: "BMI Calculator",
    description:
      "Calculate your Body Mass Index (BMI) and find out if you're in a healthy weight range.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/bmi-calculator`,
    images: [
      {
        url: "/og/bmi-calculator.png",
        width: 1200,
        height: 630,
        alt: "BMI Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/bmi-calculator`,
  },
};

export default function BMICalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            BMI Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Calculate your Body Mass Index to understand your weight category and
            get personalized health recommendations.
          </p>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <BMICalculatorClient />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Understanding BMI
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                Body Mass Index (BMI) is a simple calculation using your height
                and weight to estimate body fat and assess whether you&apos;re at a
                healthy weight. It&apos;s widely used as a screening tool for weight
                categories.
              </p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
                  The Formula
                </h3>
                <p className="text-sm mb-2">
                  <strong>BMI = Weight (kg) ÷ Height (m)²</strong>
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Example:</strong> A person weighing 70 kg with height
                    1.75 m has BMI = 70 ÷ (1.75 × 1.75) = 22.9
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
                      What is a healthy BMI?
                    </summary>
                    <p className="mt-2 text-sm">
                      A BMI between 18.5 and 24.9 is considered healthy for most
                      adults. However, BMI doesn&apos;t account for muscle mass, bone
                      density, or fat distribution, so it&apos;s just one factor in
                      assessing overall health.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Is BMI accurate for everyone?
                    </summary>
                    <p className="mt-2 text-sm">
                      BMI may not be accurate for athletes with high muscle mass,
                      elderly individuals, or people with certain body types. It&apos;s
                      a useful screening tool but should be considered alongside
                      other health indicators.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How can I improve my BMI?
                    </summary>
                    <p className="mt-2 text-sm">
                      If your BMI is outside the healthy range, focus on
                      sustainable lifestyle changes: regular physical activity
                      (like daily walking), balanced nutrition, and adequate sleep.
                      Consult a healthcare professional for personalized advice.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How many steps should I walk based on my BMI?
                    </summary>
                    <p className="mt-2 text-sm">
                      For maintaining a healthy BMI, aim for 10,000 steps daily. If
                      you&apos;re looking to lose weight, consider 12,000+ steps. Start
                      with your current level and gradually increase by 1,000 steps
                      per week.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Is BMI different for children?
                    </summary>
                    <p className="mt-2 text-sm">
                      Yes, BMI for children and teens is calculated differently and
                      compared to age and sex-specific percentiles. This calculator
                      is designed for adults 18 and older. For children, consult a
                      pediatrician.
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
            Track Your Health Journey
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download the Steps app to track your daily activity and work towards
            a healthier weight.
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
