import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { WeightLossCalculatorClient } from "./client";
import { ToolAppCta, ToolStickyCta } from "@/components/tool-app-cta";
import { TOOL_RELATED_TOOLS, TOOL_RELATED_BLOGS } from "@/lib/internal-links";
import { SITE_CONFIG } from "@/lib/constants";

const SLUG = "weight-loss-calculator";

export const metadata: Metadata = {
  title: "Weight Loss Calculator: Calories, Timeline & Goal Date",
  description:
    "Work out the daily calories and the timeline to hit your goal weight. Losing 10 kg at 0.5 kg a week takes 20 weeks on a 550 calorie deficit. Free calculator.",
  keywords: [
    "weight loss calculator",
    "calorie calculator for weight loss",
    "how many calories to lose weight",
    "goal weight calculator",
    "weight loss timeline calculator",
    "calorie deficit calculator",
    "how long will it take to lose weight",
    "weight loss planner",
  ],
  openGraph: {
    title: "Weight Loss Calculator: Calories, Timeline & Goal Date",
    description:
      "Enter your stats and goal weight to get a daily calorie target, a realistic timeline, and week-by-week milestones.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/${SLUG}`,
    images: [{ url: `/og/${SLUG}.png`, width: 1200, height: 630, alt: "Weight Loss Calculator" }],
  },
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/tools/${SLUG}` },
  twitter: {
    card: "summary_large_image",
    title: "Weight Loss Calculator: Calories, Timeline & Goal Date",
    description:
      "Enter your stats and goal weight to get a daily calorie target, a realistic timeline, and week-by-week milestones.",
    images: [`/og/${SLUG}.png`],
  },
};

const FAQS = [
  {
    q: "How many calories should I eat to lose weight?",
    a: "Take your TDEE and subtract 250 to 500 calories. That produces roughly 0.25 to 0.5 kg (0.5 to 1 lb) of loss per week, which is the range most clinical guidance considers sustainable. The calculator does this for you and refuses to drop below 1,200 calories for women or 1,500 for men, the floors below which meeting micronutrient needs becomes difficult.",
  },
  {
    q: "How long will it take me to lose 10 kg?",
    a: "At a moderate 0.5 kg per week, about 20 weeks, or roughly five months. At an aggressive 1 kg per week it would be 10 weeks, but sustaining a 1,100 calorie daily deficit that long is difficult and costs more lean mass. Most people do better treating the faster number as a best case and planning against the moderate one.",
  },
  {
    q: "Is 1 kg per week a safe rate of weight loss?",
    a: "Only for people carrying substantial excess weight. The usual guidance is to stay under 1% of body weight per week: at 100 kg that permits 1 kg, at 65 kg it means 0.65 kg. Above that threshold, a growing share of what you lose is muscle and water rather than fat, and the deficit required is large enough to be hard to hold.",
  },
  {
    q: "Why do these projections get less accurate over time?",
    a: "They assume 7,700 calories per kilogram of fat and a fixed metabolic rate, and the second assumption breaks down. As you get lighter, your BMR falls because there is less tissue to maintain, and your body burns fewer calories doing the same activities. Real loss curves flatten while a linear projection keeps its slope. Recalculate every four to six weeks with your current weight.",
  },
  {
    q: "Should I create the deficit by eating less or moving more?",
    a: "Both, weighted toward eating for the bulk of it. Diet changes generate a larger deficit for less effort: skipping a 400 calorie snack takes no time, while burning 400 calories takes about 90 minutes of brisk walking. But adding activity preserves lean mass during a deficit and stops your TDEE from falling as fast, so a deficit built entirely from food restriction tends to stall sooner.",
  },
  {
    q: "Why has my weight loss stalled?",
    a: "Most commonly your TDEE has fallen: you are lighter, so the same deficit no longer exists. It can also be water retention masking real fat loss, which is normal after a hard workout or a high-sodium day and can hide two weeks of progress. Recalculate at your current weight, and judge progress on a two-to-three week trend rather than day-to-day readings.",
  },
  {
    q: "How many steps a day do I need to lose weight?",
    a: "There is no fixed number, because it depends on the size of your deficit and your weight. As a rough guide, 10,000 steps burns roughly 300 to 500 calories for most adults, which is about half a typical daily deficit. Walking is the easiest activity to sustain at that volume, which is why it holds up better than more intense options over the months a real goal takes.",
  },
];

export default function WeightLossCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Weight Loss Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Enter your stats and your goal weight to get a daily calorie target,
            a realistic timeline, and the week-by-week milestones between here
            and there.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <WeightLossCalculatorClient
            resultCta={
              <ToolAppCta
                headline="The deficit is easier to hold when you can see it"
                description="Steps tracks your daily activity automatically, so the movement side of your deficit is measured rather than guessed."
              />
            }
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              How This Calculator Works
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                Three steps: estimate what you burn, subtract what you want to
                lose, and check the result against safety floors.
              </p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">The Method</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>1. BMR</strong> via Mifflin-St Jeor, the equation
                    with the best validation on modern populations.
                  </li>
                  <li>
                    <strong>2. TDEE</strong> = BMR × activity factor (1.2
                    sedentary through 1.9 very active).
                  </li>
                  <li>
                    <strong>3. Deficit</strong> = your chosen weekly rate ×
                    7,700 ÷ 7. A 0.5 kg per week goal needs 550 calories a day.
                  </li>
                  <li>
                    <strong>4. Timeline</strong> = weight to lose ÷ weekly rate,
                    recomputed if the safety floor raised your calorie target.
                  </li>
                  <li>
                    <strong>Example:</strong> 80 kg to 70 kg at 0.5 kg per week
                    is a 550 calorie daily deficit over about 20 weeks.
                  </li>
                </ul>
              </div>

              <p className="text-sm">
                The 7,700 calories per kilogram figure is the Wishnofsky rule.
                It is a linear approximation that holds reasonably for the first
                two to three months and then drifts optimistic, because your
                resting burn falls as you get lighter. The calculator flags this
                on any plan longer than 13 weeks.
              </p>

              <p className="text-sm">
                Calorie targets are floored at 1,200 for women and 1,500 for men.
                If your chosen rate would push below that, the target is raised
                and the timeline extended to match, rather than showing you a
                number you should not eat at.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
              <h3 className="font-medium text-neutral-900 dark:text-white mb-3">Related Calculators</h3>
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
            Make the Movement Side Automatic
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download the Steps app to track your daily steps and calories burned
            without logging a thing.
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
