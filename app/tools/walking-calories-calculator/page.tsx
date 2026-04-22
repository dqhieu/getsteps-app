import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { PersonaLinks } from "@/components/persona-links";
import { ToolHowToBlock } from "@/components/tool-how-to-block";
import { WalkingCaloriesCalculatorClient } from "./client";
import { TOOL_RELATED_TOOLS, TOOL_RELATED_BLOGS, TOOL_RELATED_PERSONAS } from "@/lib/internal-links";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Walking Calories Burned Calculator [Free] — By Weight, Speed & Time",
  description:
    "How many calories does walking burn? A 155 lb person burns ~300 cal/hour at 3.5 mph. Enter your weight, speed, and time for an instant personalized estimate. Works for any pace from casual stroll to power walk.",
  keywords: [
    "walking calorie calculator",
    "walking calories calculator",
    "MET value walking",
    "MET walking 5 km/h",
    "MET value for walking 3.1 mph",
    "MET value brisk walking",
    "MET value walking average pace",
    "MET value walking moderate pace",
    "calories burned walking",
    "calories burned walking per km",
    "MET value walking 4 km/h",
    "MET value walking 4.5 km/h",
    "MET value walking 6 km/h",
    "calories burned walking calculator formula met",
  ],
  openGraph: {
    title: "Walking Calories Burned Calculator [Free] — Instant Results",
    description:
      "A 155 lb person burns ~300 cal/hour walking at 3.5 mph. Enter your weight, speed, and time for a personalized calorie estimate.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/walking-calories-calculator`,
    images: [
      {
        url: "/og/walking-calories-calculator.png",
        width: 1200,
        height: 630,
        alt: "Walking Calories Calculator",
      },
    ],
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
            Walking Calorie Calculator &amp; MET Values
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Calculate calories burned walking using MET (Metabolic Equivalent)
            values for every walking speed — from slow strolls at 2 km/h to power
            walking at 7+ km/h. Includes a complete MET reference table.
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
                      What is the MET value for walking at average pace?
                    </summary>
                    <p className="mt-2 text-sm">
                      The MET value for walking at an average pace (about 5 km/h or
                      3.1 mph) is 3.5. This is the most common walking speed for
                      adults and the baseline used in most calorie calculators. A
                      70 kg person burns approximately 245 calories per hour at this
                      pace.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      What is the MET value for walking at moderate pace?
                    </summary>
                    <p className="mt-2 text-sm">
                      A moderate walking pace (4.0-4.5 km/h or 2.5-2.8 mph) has a
                      MET value between 3.0 and 3.3. This is a comfortable,
                      conversational pace ideal for daily walking. A 70 kg person
                      burns 210-231 calories per hour at moderate pace.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      What is the MET value for walking at 5 km/h (3.1 mph)?
                    </summary>
                    <p className="mt-2 text-sm">
                      The MET value for walking at 5 km/h (3.1 mph) is 3.5. This
                      is considered a normal walking pace. A 70 kg person walking at
                      this speed burns approximately 245 calories per hour (3.5 ×
                      70 = 245 kcal/hr).
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      What is the MET value for walking at 4.5 km/h (2.8 mph)?
                    </summary>
                    <p className="mt-2 text-sm">
                      The MET value for walking at 4.5 km/h (2.8 mph) is 3.3. This
                      is a steady, comfortable walking pace. For a 70 kg person,
                      this burns about 231 calories per hour (3.3 × 70 = 231
                      kcal/hr).
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      What is the MET value for brisk walking at 6 km/h?
                    </summary>
                    <p className="mt-2 text-sm">
                      Brisk walking at 6.0 km/h (3.7 mph) has a MET value of 4.5.
                      This is about 30% more energy-intensive than normal walking
                      (MET 3.5). A 70 kg person burns roughly 315 calories per hour
                      at this pace.
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

            <div className="mt-6">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
              <div className="flex flex-wrap gap-2">
                {TOOL_RELATED_TOOLS["walking-calories-calculator"]?.map((tool) => (
                  <a key={tool.href} href={tool.href} className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">{tool.title}</a>
                ))}
              </div>
            </div>

            <RelatedBlogPosts items={TOOL_RELATED_BLOGS["walking-calories-calculator"] || []} />
            <PersonaLinks items={TOOL_RELATED_PERSONAS["walking-calories-calculator"] || []} />
            <ToolHowToBlock slug="walking-calories-calculator" />
          </div>
        </div>
      </section>

      {/* Walking Calories Formula Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              How the Walking Calories Formula Works
            </h2>

            <div className="space-y-4 text-neutral-600 dark:text-neutral-400 mb-8">
              <p>
                The <strong className="text-neutral-900 dark:text-white">calories burned walking calculator formula</strong> uses
                MET (Metabolic Equivalent of Task) values from the <em>Compendium of Physical Activities</em> — the same
                reference used by exercise physiologists worldwide. The formula is:
              </p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4 text-center">
                <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                  Calories = MET &times; Weight (kg) &times; Duration (hours)
                </p>
              </div>

              <p>
                Each walking speed has a specific MET value. Here are the most searched MET values at a glance:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-lg p-3">
                  <p className="text-sm"><strong className="text-neutral-900 dark:text-white">MET value walking 3 mph</strong> (4.8 km/h) = <span className="text-[#ED772F] font-bold">3.3</span></p>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-lg p-3">
                  <p className="text-sm"><strong className="text-neutral-900 dark:text-white">MET value moderate pace</strong> (3.1 mph) = <span className="text-[#ED772F] font-bold">3.5</span></p>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-lg p-3">
                  <p className="text-sm"><strong className="text-neutral-900 dark:text-white">MET value brisk walking</strong> (4 mph) = <span className="text-[#ED772F] font-bold">5.0</span></p>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-lg p-3">
                  <p className="text-sm"><strong className="text-neutral-900 dark:text-white">MET value walking 5 km/h</strong> (3.1 mph) = <span className="text-[#ED772F] font-bold">3.5</span></p>
                </div>
              </div>

              <p className="text-sm">
                For a complete breakdown, see our <a href="/blog/met-values-walking-chart" className="text-[#ED772F] hover:underline">MET Values for Walking Chart</a> with
                every speed from slow strolls to race walking, plus incline and terrain adjustments.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              Understanding MET Values for Walking
            </h2>

            <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
              <p>
                <strong className="text-neutral-900 dark:text-white">MET (Metabolic Equivalent of Task)</strong> is the
                standard scientific measure of exercise intensity. One MET equals your body&apos;s energy expenditure at
                complete rest — about 1 calorie per kilogram of body weight per hour. When an activity has a MET value of
                3.5, it means you&apos;re burning 3.5 times more energy than sitting still.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                  <p className="text-2xl font-bold text-[#ED772F] mb-1">2.0–3.0</p>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">Light Walking</p>
                  <p className="text-xs mt-1">Slow stroll, window shopping pace (2–4 km/h)</p>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                  <p className="text-2xl font-bold text-[#ED772F] mb-1">3.0–4.5</p>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">Moderate Walking</p>
                  <p className="text-xs mt-1">Normal to brisk pace, most common (4–6 km/h)</p>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                  <p className="text-2xl font-bold text-[#ED772F] mb-1">5.0–6.3</p>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">Vigorous Walking</p>
                  <p className="text-xs mt-1">Power walking, race walking, or uphill (6+ km/h)</p>
                </div>
              </div>

              <p className="text-sm">
                The MET values in our calculator come from the <em>Compendium of Physical Activities</em>, the
                gold-standard reference used by exercise scientists worldwide. Walking at 5 km/h (3.1 mph) — the most
                commonly searched speed — has a MET value of 3.5, meaning a 70 kg person burns 245 calories per hour at
                that pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive MET Values Reference Table */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Complete MET Values for Walking Speeds
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              MET (Metabolic Equivalent of Task) measures energy expenditure. A
              MET of 1.0 equals your resting metabolic rate. Use the table below
              to find the exact MET value for your walking speed. Values are
              based on the Compendium of Physical Activities.
            </p>

            <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b-2 border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-3 px-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      Walking Activity
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      Speed (km/h)
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      Speed (mph)
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      MET Value
                    </th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      Cal/hr (70 kg)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { activity: "Very slow walk", kmh: "2.0", mph: "1.2", met: "2.0", cal: "140" },
                    { activity: "Slow stroll", kmh: "2.7", mph: "1.7", met: "2.3", cal: "161" },
                    { activity: "Leisurely walk", kmh: "3.2", mph: "2.0", met: "2.5", cal: "175" },
                    { activity: "Comfortable pace", kmh: "3.5", mph: "2.2", met: "2.8", cal: "196" },
                    { activity: "Moderate walk", kmh: "4.0", mph: "2.5", met: "3.0", cal: "210" },
                    { activity: "Steady pace", kmh: "4.5", mph: "2.8", met: "3.3", cal: "231" },
                    { activity: "Normal walking", kmh: "5.0", mph: "3.1", met: "3.5", cal: "245", highlight: true },
                    { activity: "Purposeful walk", kmh: "5.6", mph: "3.5", met: "4.3", cal: "301" },
                    { activity: "Brisk walking", kmh: "6.0", mph: "3.7", met: "4.5", cal: "315", highlight: true },
                    { activity: "Fast walking", kmh: "6.4", mph: "4.0", met: "5.0", cal: "350", highlight: true },
                    { activity: "Very fast walk", kmh: "7.2", mph: "4.5", met: "5.0", cal: "350" },
                    { activity: "Race walking", kmh: "8.0", mph: "5.0", met: "6.3", cal: "441" },
                    { activity: "Walking uphill (3% grade)", kmh: "5.6", mph: "3.5", met: "5.3", cal: "371" },
                    { activity: "Walking uphill (6% grade)", kmh: "5.6", mph: "3.5", met: "8.0", cal: "560" },
                  ].map((row) => (
                    <tr
                      key={row.activity}
                      className={`border-b border-neutral-100 dark:border-neutral-700/50 ${
                        row.highlight
                          ? "bg-[#ED772F]/5 dark:bg-[#ED772F]/10"
                          : ""
                      }`}
                    >
                      <td className="py-3 px-2 text-sm font-medium text-neutral-900 dark:text-white">
                        {row.activity}
                      </td>
                      <td className="py-3 px-2 text-sm text-center text-neutral-700 dark:text-neutral-300">
                        {row.kmh}
                      </td>
                      <td className="py-3 px-2 text-sm text-center text-neutral-700 dark:text-neutral-300">
                        {row.mph}
                      </td>
                      <td className="py-3 px-2 text-sm text-center font-semibold text-[#ED772F]">
                        {row.met}
                      </td>
                      <td className="py-3 px-2 text-sm text-center text-neutral-700 dark:text-neutral-300">
                        {row.cal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-4">
              Calories per hour calculated for a 70 kg (154 lbs) person. Your
              actual calorie burn depends on your weight — use the calculator
              above for a personalized estimate. Highlighted rows show the most
              common walking paces. Source: Compendium of Physical Activities.
            </p>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How many calories does walking 1 mile burn?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Walking 1 mile burns approximately 80-100 calories for most people. The exact amount depends on your weight and walking speed. Heavier individuals burn more calories per mile."
                }
              },
              {
                "@type": "Question",
                "name": "How many calories does 30 minutes of walking burn?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A 30-minute walk at normal pace burns roughly 100-150 calories for most adults. Walking briskly can increase this to 150-200 calories. Use the calculator above for a personalized estimate."
                }
              },
              {
                "@type": "Question",
                "name": "Does walking speed affect calorie burn?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, significantly. Walking faster increases your MET value and burns more calories per minute. Brisk walking (6.4 km/h) burns about 30% more calories than a leisurely stroll (3.2 km/h)."
                }
              },
              {
                "@type": "Question",
                "name": "What is MET and why does it matter?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "MET (Metabolic Equivalent of Task) is a scientific measure of energy expenditure. A MET of 1 represents your resting metabolic rate. Walking at normal pace has a MET of 3.5, meaning you burn 3.5 times more calories than at rest."
                }
              },
              {
                "@type": "Question",
                "name": "What is the MET value for walking at average pace?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The MET value for walking at an average pace (about 5 km/h or 3.1 mph) is 3.5. This is the most common walking speed for adults and the baseline used in most calorie calculators. A 70 kg person burns approximately 245 calories per hour at this pace."
                }
              },
              {
                "@type": "Question",
                "name": "What is the MET value for walking at moderate pace?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A moderate walking pace (4.0-4.5 km/h or 2.5-2.8 mph) has a MET value between 3.0 and 3.3. This is a comfortable, conversational pace ideal for daily walking. A 70 kg person burns 210-231 calories per hour at moderate pace."
                }
              },
              {
                "@type": "Question",
                "name": "What is the MET value for walking at 5 km/h (3.1 mph)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The MET value for walking at 5 km/h (3.1 mph) is 3.5. This is considered a normal walking pace. A 70 kg person walking at this speed burns approximately 245 calories per hour (3.5 × 70 = 245 kcal/hr)."
                }
              },
              {
                "@type": "Question",
                "name": "What is the MET value for walking at 4.5 km/h (2.8 mph)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The MET value for walking at 4.5 km/h (2.8 mph) is 3.3. This is a steady, comfortable walking pace. For a 70 kg person, this burns about 231 calories per hour (3.3 × 70 = 231 kcal/hr)."
                }
              },
              {
                "@type": "Question",
                "name": "What is the MET value for brisk walking at 6 km/h?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Brisk walking at 6.0 km/h (3.7 mph) has a MET value of 4.5. This is about 30% more energy-intensive than normal walking (MET 3.5). A 70 kg person burns roughly 315 calories per hour at this pace."
                }
              },
              {
                "@type": "Question",
                "name": "How much fat can I burn from walking?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "One kilogram of body fat contains approximately 7,700 calories. Walking 10,000 steps daily (about 400 calories) would burn roughly 1 kg of fat every 19 days, assuming no change in diet. Combine walking with a healthy diet for best results."
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
