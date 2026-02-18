import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Fitness Calculators - Steps, Calories, BMI & More",
  description:
    "Free online fitness calculators for steps, calories, BMI, walking time, and weight loss. Get personalized results based on your profile.",
  keywords: [
    "fitness calculator",
    "step calculator",
    "calorie calculator",
    "BMI calculator",
    "walking calculator",
    "weight loss calculator",
    "steps to calories",
    "walking time calculator",
  ],
  openGraph: {
    title: "Free Fitness Calculators",
    description:
      "Free online fitness calculators for steps, calories, BMI, walking time, and weight loss.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools`,
    images: [
      {
        url: "/og/tools.png",
        width: 1200,
        height: 630,
        alt: "Free Fitness Calculators",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools`,
  },
};

const TOOLS = [
  {
    title: "Step Distance Calculator",
    description: "Convert steps to distance or distance to steps based on your height",
    href: "/tools/step-distance-calculator",
    icon: "📏",
    popular: true,
  },
  {
    title: "Steps to Calories Calculator",
    description: "Calculate how many calories you burn from your daily steps",
    href: "/tools/steps-to-calories-calculator",
    icon: "🔥",
    popular: true,
  },
  {
    title: "Walking Calories Calculator",
    description: "Calculate calories burned based on walking distance or time",
    href: "/tools/walking-calories-calculator",
    icon: "🚶",
    popular: true,
  },
  {
    title: "Steps Per Mile Calculator",
    description: "Find out how many steps are in a mile or kilometer",
    href: "/tools/steps-per-mile-calculator",
    icon: "👟",
    popular: false,
  },
  {
    title: "Walking Time Calculator",
    description: "Estimate how long it takes to walk any distance",
    href: "/tools/walking-time-calculator",
    icon: "⏱️",
    popular: false,
  },
  {
    title: "Daily Step Goal Calculator",
    description: "Get a personalized daily step goal recommendation",
    href: "/tools/daily-step-goal-calculator",
    icon: "🎯",
    popular: false,
  },
  {
    title: "Weight Loss Walking Calculator",
    description: "Calculate walking requirements for your weight loss goals",
    href: "/tools/weight-loss-walking-calculator",
    icon: "⚖️",
    popular: false,
  },
  {
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index with health insights",
    href: "/tools/bmi-calculator",
    icon: "📊",
    popular: false,
  },
  {
    title: "Heart Rate Zones Calculator",
    description: "Find your 5 training zones to optimize fat burn and endurance",
    href: "/tools/heart-rate-zones-calculator",
    icon: "❤️",
    popular: true,
  },
  {
    title: "Running Pace Calculator",
    description: "Convert pace, speed, and predict race finish times for any distance",
    href: "/tools/running-pace-calculator",
    icon: "⏱️",
    popular: true,
  },
  {
    title: "Body Fat Percentage Calculator",
    description: "Calculate body fat % using the accurate U.S. Navy method",
    href: "/tools/body-fat-calculator",
    icon: "📐",
    popular: true,
  },
  {
    title: "Water Intake Calculator",
    description: "Find out how much water you should drink daily based on weight and activity",
    href: "/tools/water-intake-calculator",
    icon: "💧",
    popular: false,
  },
  {
    title: "Activity to Steps Converter",
    description: "Convert cycling, swimming, yoga, and more into equivalent steps",
    href: "/tools/activity-to-steps-converter",
    icon: "🚴",
    popular: false,
  },
  {
    title: "Calorie Deficit Calculator",
    description: "Calculate how many calories to eat per day to reach your goal weight",
    href: "/tools/calorie-deficit-calculator",
    icon: "🥗",
    popular: false,
  },
  {
    title: "Resting Heart Rate Calculator",
    description: "Check your cardiovascular fitness level and Karvonen heart rate zones",
    href: "/tools/resting-heart-rate-calculator",
    icon: "💓",
    popular: false,
  },
  {
    title: "TDEE Calculator",
    description: "Calculate your Total Daily Energy Expenditure and daily calorie needs",
    href: "/tools/tdee-calculator",
    icon: "⚡",
    popular: true,
  },
  {
    title: "Macro Calculator",
    description: "Calculate your daily protein, carbs, and fat targets for your fitness goal",
    href: "/tools/macro-calculator",
    icon: "🥩",
    popular: true,
  },
  {
    title: "Marathon Race Predictor",
    description: "Predict your marathon, half marathon, 10K, and 5K finish times",
    href: "/tools/marathon-pace-predictor",
    icon: "🏅",
    popular: false,
  },
  {
    title: "VO2 Max Calculator",
    description: "Estimate your aerobic fitness level using heart rate or Cooper test",
    href: "/tools/vo2-max-calculator",
    icon: "🫁",
    popular: false,
  },
  {
    title: "Training Pace Zones",
    description: "Get your 5 personalized running training pace zones from any race result",
    href: "/tools/training-pace-zones",
    icon: "🎯",
    popular: false,
  },
  {
    title: "Pace to Speed Converter",
    description: "Convert min/km, min/mile, km/h, and mph instantly",
    href: "/tools/pace-to-speed-converter",
    icon: "↔️",
    popular: false,
  },
  {
    title: "Race Time Predictor",
    description: "Calculate finish time from pace or find the pace needed for your goal time",
    href: "/tools/race-time-predictor",
    icon: "⏱️",
    popular: false,
  },
  {
    title: "Distance Equivalent Calculator",
    description: "Convert km, miles, meters, yards — with steps, time, and calories",
    href: "/tools/distance-equivalent-calculator",
    icon: "📏",
    popular: false,
  },
];

const popularTools = TOOLS.filter((tool) => tool.popular);

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Free Fitness Calculators
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Personalized calculators for steps, calories, distance, and more.
            All free, no signup required.
          </p>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
            Most Popular
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {popularTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-2xl p-6 border border-[#ED772F]/20 hover:border-[#ED772F]/40 transition-all hover:shadow-lg"
              >
                <span className="text-3xl mb-4 block">{tool.icon}</span>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-[#ED772F] transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Tools */}
      <section className="py-8 md:py-12 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
            All Calculators
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50 hover:border-[#ED772F]/40 dark:hover:border-[#ED772F]/40 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{tool.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1 group-hover:text-[#ED772F] transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use Our Calculators */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 text-center">
            Why Use Our Calculators?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#ED772F]/10 dark:bg-[#ED772F]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#ED772F] text-xl">✓</span>
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                Personalized Results
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Calculations based on your height, weight, age, and gender for
                accurate estimates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#ED772F]/10 dark:bg-[#ED772F]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#ED772F] text-xl">✓</span>
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                Science-Based
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Using research-backed formulas and MET values for reliable
                calculations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#ED772F]/10 dark:bg-[#ED772F]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#ED772F] text-xl">✓</span>
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                100% Free
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                No signup required. No ads. Just helpful fitness calculators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Track Your Fitness Automatically
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download the Steps app to automatically track your steps, calories,
            distance, and more on your iPhone and Apple Watch.
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
