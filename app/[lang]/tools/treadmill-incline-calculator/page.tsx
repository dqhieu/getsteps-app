import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { TreadmillInclineCalculatorClient } from "./client";
import { ToolAppCta, ToolStickyCta } from "@/components/tool-app-cta";
import { TOOL_RELATED_TOOLS, TOOL_RELATED_BLOGS } from "@/lib/internal-links";
import { SITE_CONFIG } from "@/lib/constants";

const SLUG = "treadmill-incline-calculator";

export const metadata: Metadata = {
  title: "Treadmill Incline Calculator: Pace & Elevation Equivalents",
  description:
    "Convert treadmill incline to a flat-pace equivalent, and see the elevation you climbed. 3 mph at 12% incline equals jogging 4.7 mph on the flat. Free ACSM-based calculator.",
  keywords: [
    "treadmill incline calculator",
    "treadmill pace calculator",
    "treadmill elevation calculator",
    "incline walking calorie calculator",
    "treadmill incline conversion chart",
    "12-3-30 pace equivalent",
    "treadmill grade to flat pace",
    "treadmill elevation gain",
  ],
  openGraph: {
    title: "Treadmill Incline Calculator: Pace & Elevation Equivalents",
    description:
      "Turn any treadmill incline into the flat pace it is worth, and see how much elevation you climbed. Free calculator using the ACSM metabolic equations.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/${SLUG}`,
    images: [
      {
        url: `/og/${SLUG}.png`,
        width: 1200,
        height: 630,
        alt: "Treadmill Incline Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/${SLUG}`,
  },
};

const FAQS = [
  {
    q: "What flat pace is equal to walking at 3 mph on a 12% incline?",
    a: "Roughly a 4.7 mph jog. Walking at 3 mph on a 12% grade costs about 29 ml/kg/min of oxygen, which is around 8.3 METs. No sustainable walking pace on level ground reaches that, so the honest comparison is to a slow run rather than a fast walk. This is why the 12-3-30 workout feels far harder than its speed suggests.",
  },
  {
    q: "How do I convert treadmill incline to a flat pace?",
    a: "The effort scales almost linearly: a grade multiplies the energy cost of walking by (1 + 18 x the grade as a decimal), so a 5% incline is 1.9 times as hard as the same speed on the flat. Turning that multiplier into a flat speed only works while the answer stays inside walking range, which at typical paces means grades under about 2 to 3.5%. Beyond that the effort passes what any sustainable walk produces without yet reaching the slowest jog, and no single level pace matches it.",
  },
  {
    q: "How much elevation do I gain on a treadmill?",
    a: "Vertical gain is the belt distance multiplied by the grade. Thirty minutes at 5 km/h covers 2.5 km, and at a 10% incline that is 250 vertical metres, about 820 feet, or roughly 83 storeys of a building. The treadmill reports grade as rise over belt distance, which is exactly what this calculation assumes.",
  },
  {
    q: "Does 1% incline really simulate outdoor running?",
    a: "It is a reasonable convention rather than a precise law. The 1% adjustment comes from a 1996 study by Jones and Doust, which found that a 1% grade matched the energy cost of outdoor running at speeds above about 8 mph. At the slower speeds most people walk or jog, air resistance is negligible and a 0% belt is already close to outdoor effort.",
  },
  {
    q: "Is walking on an incline better than running on the flat?",
    a: "For a comparable energy cost at much lower impact, yes. Walking 5 km/h at a 12% grade is around 8.5 METs, essentially matching an 8 km/h flat jog at 8.6 METs, but the ground reaction forces are far lower because both feet never leave the belt at once. The trade-off is that incline walking loads the calves and Achilles considerably more.",
  },
  {
    q: "Why does a small incline change the effort so much?",
    a: "Because lifting your body vertically is expensive relative to moving it horizontally. In the ACSM walking equation the vertical term carries a coefficient of 1.8 against 0.1 for the horizontal term, so each 1% of grade adds about 18% to the energy cost of walking at the same speed. Five percent nearly doubles it, and twelve percent roughly triples it.",
  },
  {
    q: "Should I trust my treadmill's incline reading?",
    a: "Treat it as approximate. Belt calibration drifts, and many consumer machines report the motor's commanded grade rather than a measured one. Deck flex under load also reduces the effective grade slightly. The relationships here hold regardless, but the absolute numbers inherit whatever error the machine carries.",
  },
];

export default function TreadmillInclineCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Treadmill Incline Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Turn any incline into the flat pace it is actually worth, and see
            how much elevation you climbed. Uses the ACSM metabolic equations,
            so the grade is priced properly instead of guessed at.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <TreadmillInclineCalculatorClient
            resultCta={
              <ToolAppCta
                headline="Know what your walks are really worth"
                description="Steps tracks every walk in the background and turns it into real distance, elevation and calories, no manual logging needed."
              />
            }
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              How We Calculate Incline Equivalents
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                Two treadmill settings are equivalent when they cost the same
                oxygen. We estimate oxygen uptake from speed and grade with the
                ACSM metabolic equations, then solve the level-ground equation
                backwards to find the flat pace with the same cost.
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
                    <strong>Effort multiplier</strong> = 1 + 18G, which falls
                    straight out of setting two walking equations equal. It is
                    valid at any grade.
                  </li>
                  <li>
                    <strong>Elevation gain</strong> = belt distance × G
                  </li>
                  <li>
                    <strong>Example:</strong> 4.8 km/h at 5% grade is 5.3 METs,
                    a 1.9× effort multiplier, and climbs 120 vertical metres in
                    30 minutes.
                  </li>
                </ul>
              </div>

              <p className="text-sm">
                The two ACSM equations do not meet: flat walking tops out around
                14.3 ml/kg/min and flat running starts near 25.2. Moderate
                incline walks land between those, where no level pace matches
                the effort. The calculator says so rather than extrapolating an
                equation past the range it was validated on, and the effort
                multiplier stays meaningful either way.
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
