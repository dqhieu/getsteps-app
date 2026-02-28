import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { StepsToCaloriesCalculatorClient } from "./client";
import { TOOL_RELATED_TOOLS, TOOL_RELATED_BLOGS } from "@/lib/internal-links";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Steps to Calories Calculator: Convert Steps to Calories Burned",
  description:
    "Free steps to calories calculator. 10,000 steps burns ~400 cal (70 kg) or ~350 cal (60 kg). Enter your steps, weight, and age for a personalized calorie estimate.",
  keywords: [
    "steps to calories",
    "steps to calories calculator",
    "calories burned walking",
    "how many calories in 10000 steps",
    "calories burned 10000 steps 70 kg",
    "calories burned per 1000 steps",
    "calories per step",
    "step calorie calculator",
    "walking calorie burn",
    "steps calorie converter",
  ],
  openGraph: {
    title: "Steps to Calories Calculator: Convert Steps to Calories Burned",
    description:
      "Free steps to calories calculator. 10,000 steps burns ~400 cal (70 kg). Enter your steps and weight for a personalized estimate.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/steps-to-calories-calculator`,
    images: [
      {
        url: "/og/steps-to-calories-calculator.png",
        width: 1200,
        height: 630,
        alt: "Steps to Calories Calculator",
      },
    ],
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
            Convert your daily steps to calories burned. Enter your steps,
            weight, and age for a personalized estimate — or use our reference
            tables below for quick lookups by body weight.
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

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How many calories does 10,000 steps burn at 70 kg?
                    </summary>
                    <p className="mt-2 text-sm">
                      A 70 kg (154 lbs) person burns approximately 400 calories
                      walking 10,000 steps at a normal pace. This is based on
                      roughly 0.04 calories per step, scaled by body weight.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How many calories do 1,000 steps burn?
                    </summary>
                    <p className="mt-2 text-sm">
                      For a 70 kg person, 1,000 steps burns about 40 calories.
                      For a 60 kg person it&apos;s ~34 cal, and for an 80 kg person
                      it&apos;s ~46 cal. The heavier you are, the more calories each
                      step burns.
                    </p>
                  </details>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
              <div className="flex flex-wrap gap-2">
                {TOOL_RELATED_TOOLS["steps-to-calories-calculator"]?.map((tool) => (
                  <a key={tool.href} href={tool.href} className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">{tool.title}</a>
                ))}
              </div>
            </div>

            <RelatedBlogPosts items={TOOL_RELATED_BLOGS["steps-to-calories-calculator"] || []} />
          </div>
        </div>
      </section>

      {/* Multi-Weight Reference Table */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Steps to Calories by Body Weight
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              Quick reference table showing calories burned at different step
              counts for common body weights. Based on average walking pace.
            </p>

            <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b-2 border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-3 px-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      Steps
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      55 kg
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      70 kg
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      85 kg
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      100 kg
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { steps: "1,000", w55: "31", w70: "40", w85: "49", w100: "57" },
                    { steps: "3,000", w55: "94", w70: "120", w85: "146", w100: "171" },
                    { steps: "5,000", w55: "157", w70: "200", w85: "243", w100: "286" },
                    { steps: "7,500", w55: "236", w70: "300", w85: "364", w100: "429" },
                    { steps: "10,000", w55: "314", w70: "400", w85: "486", w100: "571", highlight: true },
                    { steps: "12,500", w55: "393", w70: "500", w85: "607", w100: "714" },
                    { steps: "15,000", w55: "471", w70: "600", w85: "729", w100: "857" },
                    { steps: "20,000", w55: "629", w70: "800", w85: "971", w100: "1,143" },
                  ].map((row) => (
                    <tr
                      key={row.steps}
                      className={`border-b border-neutral-100 dark:border-neutral-700/50 ${
                        row.highlight
                          ? "bg-[#ED772F]/5 dark:bg-[#ED772F]/10"
                          : ""
                      }`}
                    >
                      <td className="py-3 px-2 text-sm font-medium text-neutral-900 dark:text-white">
                        {row.steps}
                      </td>
                      <td className="py-3 px-2 text-sm text-center text-neutral-700 dark:text-neutral-300">
                        {row.w55} cal
                      </td>
                      <td className="py-3 px-2 text-sm text-center font-semibold text-[#ED772F]">
                        {row.w70} cal
                      </td>
                      <td className="py-3 px-2 text-sm text-center text-neutral-700 dark:text-neutral-300">
                        {row.w85} cal
                      </td>
                      <td className="py-3 px-2 text-sm text-center text-neutral-700 dark:text-neutral-300">
                        {row.w100} cal
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-4">
              Calorie values based on average walking pace (~5 km/h). Actual burn
              varies with walking speed, terrain, and individual metabolism. Use
              the calculator above for a personalized estimate.
            </p>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How many calories does 10,000 steps burn?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For an average adult weighing 70kg (154 lbs), 10,000 steps burns approximately 400-500 calories. This varies based on your weight, walking speed, and terrain."
                }
              },
              {
                "@type": "Question",
                "name": "How many steps do I need to burn 500 calories?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For a 70kg person, you'd need approximately 12,500 steps to burn 500 calories. Use the calculator above with your specific weight for a more accurate estimate."
                }
              },
              {
                "@type": "Question",
                "name": "Does walking speed affect calories burned?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, walking faster burns more calories per minute. However, for the same number of steps, the difference is minimal. Brisk walking (about 6 km/h) can burn 10-20% more calories than a leisurely stroll."
                }
              },
              {
                "@type": "Question",
                "name": "Is counting calories from steps accurate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Step-based calorie calculations provide a reasonable estimate but aren't perfectly accurate. Factors like terrain, incline, and individual metabolism can affect actual calorie burn. Use these numbers as a general guide."
                }
              },
              {
                "@type": "Question",
                "name": "How many calories does 10,000 steps burn at 70 kg?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A 70 kg (154 lbs) person burns approximately 400 calories walking 10,000 steps at a normal pace. This is based on roughly 0.04 calories per step, scaled by body weight."
                }
              },
              {
                "@type": "Question",
                "name": "How many calories do 1,000 steps burn?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For a 70 kg person, 1,000 steps burns about 40 calories. For a 60 kg person it's ~34 cal, and for an 80 kg person it's ~46 cal. The heavier you are, the more calories each step burns."
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
