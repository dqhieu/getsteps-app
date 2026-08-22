import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { BMRCalculatorClient } from "./client";
import { ToolAppCta, ToolStickyCta } from "@/components/tool-app-cta";
import { TOOL_RELATED_TOOLS, TOOL_RELATED_BLOGS } from "@/lib/internal-links";
import { SITE_CONFIG } from "@/lib/constants";

const SLUG = "bmr-calculator";

export const metadata: Metadata = {
  title: "BMR Calculator: Basal Metabolic Rate in 3 Formulas",
  description:
    "Calculate your BMR with Mifflin-St Jeor, Harris-Benedict and Katch-McArdle side by side. A 30-year-old 75 kg man burns ~1,699 calories a day at rest. Free calculator.",
  keywords: [
    "BMR calculator",
    "basal metabolic rate calculator",
    "resting metabolic rate",
    "Mifflin-St Jeor equation",
    "Harris-Benedict equation",
    "Katch-McArdle formula",
    "how many calories do I burn at rest",
    "BMR vs TDEE",
    "metabolism calculator",
  ],
  openGraph: {
    title: "BMR Calculator: Basal Metabolic Rate in 3 Formulas",
    description:
      "Calculate your basal metabolic rate with three clinical formulas side by side, plus daily calorie needs at every activity level.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/${SLUG}`,
    images: [{ url: `/og/${SLUG}.png`, width: 1200, height: 630, alt: "BMR Calculator" }],
  },
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/tools/${SLUG}` },
  twitter: {
    card: "summary_large_image",
    title: "BMR Calculator: Basal Metabolic Rate in 3 Formulas",
    description:
      "Calculate your basal metabolic rate with three clinical formulas side by side, plus daily calorie needs at every activity level.",
    images: [`/og/${SLUG}.png`],
  },
};

const FAQS = [
  {
    q: "What is BMR?",
    a: "BMR, or basal metabolic rate, is the energy your body spends doing nothing at all: breathing, circulating blood, maintaining body temperature, repairing cells. It is measured lying still, awake, after a 12-hour fast. For most adults BMR accounts for 60 to 75% of total daily calories, which makes it the single largest component of what you burn.",
  },
  {
    q: "What is the difference between BMR and RMR?",
    a: "BMR is measured under strict laboratory conditions: complete rest, fasted, in a thermally neutral room. RMR (resting metabolic rate) is measured under looser conditions and comes out roughly 10% higher because it includes some digestion and minor movement. The terms are used interchangeably in everyday contexts, and every calculator you will find online, including this one, actually estimates something closer to RMR.",
  },
  {
    q: "Which BMR formula is most accurate?",
    a: "Mifflin-St Jeor for most people. It was validated against indirect calorimetry on a modern population and predicts within about 10% for roughly 80% of adults. Harris-Benedict, even in its 1984 revision, runs about 5% high because its 1919 study group was leaner and more active. Katch-McArdle beats both if you know your body fat percentage, because it works from lean body mass, the tissue that actually drives resting expenditure.",
  },
  {
    q: "What is the difference between BMR and TDEE?",
    a: "BMR is what you burn at complete rest. TDEE (total daily energy expenditure) is BMR multiplied by an activity factor, so it adds movement, exercise and the energy cost of digesting food. TDEE is always higher: even a fully sedentary day comes to about 1.2 times BMR. Set calorie goals against TDEE, not BMR.",
  },
  {
    q: "Should I eat at my BMR to lose weight?",
    a: "No. Eating at your BMR means eating as though you spent the entire day motionless, which creates a deficit of several hundred to a thousand calories before you have moved. That is aggressive enough to cost you muscle and, for many people, drops below the 1,200 (women) or 1,500 (men) calorie floor. Subtract 250 to 500 calories from TDEE instead.",
  },
  {
    q: "Why is my BMR lower than I expected?",
    a: "Body size is the dominant input, so smaller and lighter people get lower numbers, and every formula subtracts for age. Body composition matters too: muscle burns roughly three times more at rest than fat per kilogram, so two people at the same weight can differ by 200 calories or more. If you have been in a long calorie deficit, adaptive thermogenesis can suppress actual BMR by 10 to 15% below the predicted figure.",
  },
  {
    q: "Can I increase my BMR?",
    a: "Somewhat, and slowly. Adding muscle is the only durable lever: each kilogram of muscle adds roughly 13 calories a day at rest, so a serious year of resistance training might buy you 50 to 100 calories. That is real but modest. Increasing daily movement changes your TDEE far more than anything you can do to BMR, which is why step count moves the needle faster than metabolism hacking.",
  },
];

export default function BMRCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            BMR Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Find the calories your body burns at complete rest. Three clinical
            formulas run side by side, so you see the spread instead of one
            number pretending to be certain.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <BMRCalculatorClient
            resultCta={
              <ToolAppCta
                headline="BMR is the floor. Steps are the lever."
                description="You can barely move your resting burn, but you can move everything above it. Steps tracks your daily activity automatically and shows what it adds to the number you just calculated."
              />
            }
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              How We Calculate BMR
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                Three equations are in common clinical use, and they disagree by
                enough to matter. Rather than pick one and hide the spread, this
                calculator runs all three.
              </p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
                  The Formulas
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <strong>Mifflin-St Jeor (1990)</strong>
                    <br />
                    Men: (10 × weight kg) + (6.25 × height cm) − (5 × age) + 5
                    <br />
                    Women: (10 × weight kg) + (6.25 × height cm) − (5 × age) − 161
                  </li>
                  <li>
                    <strong>Revised Harris-Benedict (1984)</strong>
                    <br />
                    Men: 88.362 + (13.397 × weight) + (4.799 × height) − (5.677 × age)
                    <br />
                    Women: 447.593 + (9.247 × weight) + (3.098 × height) − (4.330 × age)
                  </li>
                  <li>
                    <strong>Katch-McArdle</strong>
                    <br />
                    370 + (21.6 × lean body mass kg), where lean mass = weight ×
                    (1 − body fat %)
                  </li>
                  <li>
                    <strong>Example:</strong> a 30-year-old man, 75 kg, 175 cm
                    gives 1,699 by Mifflin-St Jeor and 1,763 by Harris-Benedict.
                    At 20% body fat, Katch-McArdle returns 1,666.
                  </li>
                </ul>
              </div>

              <p className="text-sm">
                Mifflin-St Jeor is the headline number unless you supply a body
                fat percentage, in which case Katch-McArdle takes over. It is the
                only one of the three that measures the tissue actually
                responsible for resting expenditure rather than inferring it from
                height and sex.
              </p>

              <p className="text-sm">
                Multiply BMR by an activity factor to get TDEE: 1.2 sedentary,
                1.375 lightly active, 1.55 moderately active, 1.725 active, 1.9
                very active. The calculator shows all five.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
              <h3 className="font-medium text-neutral-900 dark:text-white mb-3">
                Related Calculators
              </h3>
              <div className="flex flex-wrap gap-2">
                {TOOL_RELATED_TOOLS[SLUG]?.map((tool) => (
                  <a key={tool.href} href={tool.href}
                    className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
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
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Track What You Burn Above Resting
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download the Steps app to count every step automatically and see your
            daily calorie burn build on top of your BMR.
          </p>
          <a href={SITE_CONFIG.appStoreUrl} data-fast-goal="open-app-store"
            target="_blank" rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95 inline-block"
            aria-label="Download on the App Store">
            <Image src="/badge_light_mode.svg" alt="Download on the App Store" width={120} height={40} className="h-12 w-auto dark:hidden" />
            <Image src="/badge_dark_mode.svg" alt="Download on the App Store" width={120} height={40} className="h-12 w-auto hidden dark:block" />
          </a>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">Free on the App Store</p>
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
      <div aria-hidden className="h-20 md:hidden" />
      <ToolStickyCta label="Track your steps with Steps" />
    </div>
  );
}
