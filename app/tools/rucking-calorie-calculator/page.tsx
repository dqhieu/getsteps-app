import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { RuckingCalorieCalculatorClient } from "./client";
import { ToolAppCta, ToolStickyCta } from "@/components/tool-app-cta";
import { TOOL_RELATED_TOOLS, TOOL_RELATED_BLOGS } from "@/lib/internal-links";
import { SITE_CONFIG } from "@/lib/constants";

const SLUG = "rucking-calorie-calculator";

export const metadata: Metadata = {
  title: "Rucking Calorie Calculator: Pack Weight, Terrain & Grade",
  description:
    "Calculate rucking calories from pack weight, pace, grade and terrain using the Pandolf equation. A 70 kg rucker carrying 15 kg for an hour burns ~350 calories. Free calculator.",
  keywords: [
    "rucking calorie calculator",
    "ruck march calorie calculator",
    "rucking calories burned",
    "weighted vest calorie calculator",
    "backpacking calorie calculator",
    "Pandolf equation",
    "load carriage energy cost",
    "hiking with pack calories",
  ],
  openGraph: {
    title: "Rucking Calorie Calculator: Pack Weight, Terrain & Grade",
    description:
      "Calculate calories burned rucking from pack weight, pace, grade and terrain. Free calculator using the Pandolf load-carriage equation.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/${SLUG}`,
    images: [
      {
        url: `/og/${SLUG}.png`,
        width: 1200,
        height: 630,
        alt: "Rucking Calorie Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/${SLUG}`,
  },
};

const FAQS = [
  {
    q: "How many calories does rucking burn?",
    a: "A 70 kg (155 lb) person rucking 5 km/h on pavement with a 15 kg (33 lb) pack burns roughly 310 calories an hour. The same hour walking unloaded is about 265, so the pack accounts for around 45 of them. Pack weight, grade and terrain all move that figure substantially, which is why a single calories-per-hour number is misleading.",
  },
  {
    q: "Does rucking burn more calories than walking?",
    a: "Yes, and more than the added weight alone suggests. Carrying a load costs energy twice over: you move the extra mass, and you pay a separate penalty for the load being carried rather than being part of your body. In the Pandolf equation that penalty scales with the square of the load-to-bodyweight ratio, so each additional kilogram costs more than the one before it.",
  },
  {
    q: "How much weight should I ruck with?",
    a: "Most guidance starts beginners at 10 percent of body weight and builds toward a third at most. Above roughly a third of body weight, injury risk to the knees, lower back and feet climbs sharply, and the Pandolf model itself becomes less reliable because it was validated mostly below that ratio. Add weight slowly and before you add distance.",
  },
  {
    q: "Does terrain change how many calories rucking burns?",
    a: "Considerably. The Pandolf equation applies a terrain factor to the movement cost: paved road is the 1.0 reference, dirt road and trail are about 1.2, heavy brush 1.5, swampy ground 1.8, and loose sand 2.1. Rucking on dry beach sand costs roughly twice the movement energy of the same ruck on blacktop.",
  },
  {
    q: "What is the Pandolf equation?",
    a: "It is the standard model for the metabolic cost of carrying a load, published by Pandolf, Givoni and Goldman in 1977 for the US Army. It predicts metabolic rate in watts from body mass, load mass, walking speed, grade and terrain. Unlike MET tables and the ACSM equations, it treats the load as a real input rather than ignoring it.",
  },
  {
    q: "Why does this calculator not accept downhill grades?",
    a: "Because the Pandolf equation was validated for level and uphill walking only. Fed a negative grade it returns implausibly low costs, since descending is cheaper than level walking in the formula but not indefinitely so in reality. Modelling downhill correctly needs the separate Santee correction, so this calculator treats descents as level ground rather than reporting a number it cannot stand behind.",
  },
  {
    q: "Is rucking better than running for fat loss?",
    a: "It is easier to sustain, which usually matters more than the per-minute rate. Rucking sits around 6 to 8 METs depending on load and grade, below most running, but the low impact means people tolerate far more weekly volume without the joint stress that ends running blocks. Total weekly energy expenditure, not the intensity of any single session, is what drives fat loss.",
  },
];

export default function RuckingCalorieCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Rucking Calorie Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Calculate calories burned rucking from your pack weight, pace, grade
            and terrain. Uses the Pandolf load-carriage equation, so the weight
            on your back actually counts.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <RuckingCalorieCalculatorClient
            resultCta={
              <ToolAppCta
                headline="Track every ruck automatically"
                description="Steps counts your distance and steps in the background, so your rucks log themselves alongside the rest of your walking."
              />
            }
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              How We Calculate Rucking Calories
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                MET tables and the ACSM equations have no load term at all: they
                return the same burn whether your pack is empty or holds 30
                kilograms. We use the Pandolf equation instead, which was built
                specifically to price load carriage.
              </p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
                  The Formula
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>M</strong> = 1.5W + 2.0(W+L)(L/W)² + η(W+L)(1.5V² +
                    0.35VG)
                  </li>
                  <li>
                    M is metabolic rate in watts, W body mass in kg, L load in
                    kg, V speed in m/s, G grade as a percentage, and η the
                    terrain factor.
                  </li>
                  <li>
                    <strong>kcal/min</strong> = watts × 60 ÷ 4184
                  </li>
                  <li>
                    The middle term is the load penalty, and it scales with
                    (L/W)². Doubling your pack more than doubles that term.
                  </li>
                  <li>
                    <strong>Example:</strong> 70 kg carrying 20 kg at 4.8 km/h
                    on blacktop is 360 watts, about 5.2 kcal per minute.
                  </li>
                </ul>
              </div>

              <p className="text-sm">
                Pandolf covers level and uphill walking. Downhill needs the
                separate Santee correction, so descents are treated as level
                ground here rather than returning a figure the model cannot
                support.
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
            Track Your Rucks
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
