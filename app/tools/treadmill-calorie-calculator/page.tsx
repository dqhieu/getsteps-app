import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { TreadmillCalorieCalculatorClient } from "./client";
import { ToolAppCta, ToolStickyCta } from "@/components/tool-app-cta";
import { TOOL_RELATED_TOOLS, TOOL_RELATED_BLOGS } from "@/lib/internal-links";
import { SITE_CONFIG } from "@/lib/constants";

const SLUG = "treadmill-calorie-calculator";

export const metadata: Metadata = {
  title: "Treadmill Calorie Calculator: Free Calculator with Incline",
  description:
    "Treadmill calories by speed, incline and weight. A 155 lb adult burns ~120 cal in 30 min at 3 mph flat, ~200 cal at 5% incline. Free ACSM-based calculator.",
  keywords: [
    "treadmill calorie calculator",
    "treadmill calories burned",
    "treadmill incline calorie calculator",
    "calories burned on treadmill",
    "treadmill walking calories",
    "incline treadmill calories",
    "12-3-30 calories burned",
    "ACSM metabolic equation",
    "treadmill MET values",
  ],
  openGraph: {
    title: "Treadmill Calorie Calculator: Free Calculator with Incline",
    description:
      "Calculate treadmill calories by speed, incline, weight and time. Free calculator using the ACSM metabolic equations.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/${SLUG}`,
    images: [
      {
        url: `/og/${SLUG}.png`,
        width: 1200,
        height: 630,
        alt: "Treadmill Calorie Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/${SLUG}`,
  },
};

const FAQS = [
  {
    q: "How many calories does 30 minutes on the treadmill burn?",
    a: "A 70 kg (155 lb) adult walking 30 minutes at 5 km/h (3.1 mph) on a flat belt burns roughly 125 calories. Raise the incline to 5% and the same session burns about 205 calories. At 10% it is closer to 285. Incline matters more than any other setting you can change.",
  },
  {
    q: "Does incline really burn more calories?",
    a: "Substantially. Every 1% of grade adds vertical work on top of horizontal movement. At walking speeds a 5% incline raises energy cost by roughly 60% versus flat ground, and a 10% incline can more than double it, all at the same speed and duration.",
  },
  {
    q: "How many calories does the 12-3-30 workout burn?",
    a: "12-3-30 means 12% incline, 3 mph, 30 minutes. For a 70 kg adult that is approximately 300 calories, versus about 120 calories for the same 30 minutes at 3 mph on the flat. The incline is doing most of the work: it accounts for roughly 60% of the total burn.",
  },
  {
    q: "Is the treadmill's own calorie readout accurate?",
    a: "Usually not. Most machines assume a default body weight and ignore the weight you enter for the console display, which typically overstates burn by 15 to 25%. A calculation based on your actual weight, speed and grade is more reliable.",
  },
  {
    q: "Do I burn more calories walking on an incline or running flat?",
    a: "They can match, but you need a steep grade. Walking at 5 km/h on a 12% incline is about 8.5 METs, which is essentially the same as jogging at 8 km/h on the flat (8.6 METs). At a gentler 10% grade the incline walk is 7.7 METs, so slightly less. The advantage of the incline walk is comparable energy cost at much lower joint impact.",
  },
  {
    q: "Should I hold the handrails?",
    a: "No, if calorie burn is the goal. Holding the rails transfers part of your body weight to your arms and can cut actual energy expenditure by 20 to 25%, especially at steep inclines, while the console keeps reporting the unsupported figure.",
  },
];

export default function TreadmillCalorieCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Treadmill Calorie Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Calculate calories burned on a treadmill from your speed, incline,
            weight and time. Uses the ACSM metabolic equations, so the incline
            is factored properly instead of ignored.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <TreadmillCalorieCalculatorClient
            resultCta={
              <ToolAppCta
                headline="Track the calories you actually burn"
                description="Steps counts every step in the background and turns it into real calories burned each day, no manual logging needed."
              />
            }
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              How We Calculate Treadmill Calories
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                A single MET value cannot describe treadmill work, because grade
                changes the energy cost at every speed. We use the ACSM
                metabolic equations, which estimate oxygen uptake from speed and
                grade separately, then convert that to calories.
              </p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
                  The Formulas
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Walking VO₂</strong> = (0.1 × S) + (1.8 × S × G) +
                    3.5
                  </li>
                  <li>
                    <strong>Running VO₂</strong> = (0.2 × S) + (0.9 × S × G) +
                    3.5
                  </li>
                  <li>
                    S is speed in metres per minute, G is grade as a fraction
                    (5% = 0.05). VO₂ is in ml/kg/min.
                  </li>
                  <li>
                    <strong>METs</strong> = VO₂ ÷ 3.5, and{" "}
                    <strong>kcal/min</strong> = METs × 3.5 × weight(kg) ÷ 200
                  </li>
                  <li>
                    <strong>Example:</strong> 70 kg at 5 km/h and 5% grade gives
                    VO₂ 19.3, about 5.5 METs, roughly 405 kcal per hour.
                  </li>
                </ul>
              </div>

              <p className="text-sm">
                The walking equation applies below 6.5 km/h and the running
                equation at or above it, which is where most people transition
                from a fast walk to a jog. Estimates assume you are not holding
                the handrails.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
              <h3 className="font-medium text-neutral-900 dark:text-white mb-3">
                Related Calculators
              </h3>
              <div className="flex flex-wrap gap-2">
                {TOOL_RELATED_TOOLS[SLUG]?.map((tool) => (
                  <a
                    key={tool.href}
                    href={tool.href}
                    className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors"
                  >
                    {tool.title}
                  </a>
                ))}
              </div>
            </div>

            <RelatedBlogPosts items={TOOL_RELATED_BLOGS[SLUG] || []} />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details key={faq.q} className="group">
                  <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                    {faq.q}
                  </summary>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Track Your Treadmill Workouts
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download the Steps app to automatically track your walks, calories
            burned, and progress over time.
          </p>

          <a
            href={SITE_CONFIG.appStoreUrl}
            data-fast-goal="open-app-store"
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
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <LandingFooter />

      {/* Mobile spacer so the sticky bar never covers footer content */}
      <div aria-hidden className="h-20 md:hidden" />
      <ToolStickyCta label="Track your steps with Steps" />
    </div>
  );
}
