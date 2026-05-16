import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConversionValuePage } from "@/components/conversion-value-page";
import { SITE_CONFIG } from "@/lib/constants";
import { formatNumber } from "@/lib/step-calculator";
import {
  STEPS_TO_TIME_VALUES,
  stepsToKmDefault,
  stepsToMilesDefault,
  stepsToCaloriesDefault,
  walkingTimeMinutesDefault,
  buildStepsByHeightTable,
  buildWalkingTimeTable,
  buildCaloriesByWeightTable,
  formatMinutes,
  formatMiles,
  formatKm,
} from "@/lib/conversions";

interface Params {
  params: Promise<{ steps: string }>;
}

export function generateStaticParams() {
  return STEPS_TO_TIME_VALUES.map((steps) => ({ steps: String(steps) }));
}

function parseSteps(raw: string): number | null {
  const n = Number(raw);
  if (!Number.isInteger(n)) return null;
  if (!STEPS_TO_TIME_VALUES.includes(n as (typeof STEPS_TO_TIME_VALUES)[number])) {
    return null;
  }
  return n;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { steps: raw } = await params;
  const steps = parseSteps(raw);
  if (steps === null) return {};

  const km = stepsToKmDefault(steps);
  const minutes = walkingTimeMinutesDefault(km, "normal");
  const stepsStr = formatNumber(steps);

  const title = `How Long Does It Take to Walk ${stepsStr} Steps?`;
  const description = `${stepsStr} steps takes about ${formatMinutes(minutes)} at a normal pace. See walking time at 5 paces, distance, and calorie burn.`;

  return {
    title,
    description,
    keywords: [
      `how long does it take to walk ${stepsStr} steps`,
      `how long to walk ${stepsStr} steps`,
      `${stepsStr} steps in minutes`,
      `${stepsStr} steps walking time`,
      `${stepsStr} steps how long`,
    ],
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE_CONFIG.baseUrl}/conversions/steps-to-time/${steps}`,
      images: [{ url: "/meta.png", width: 1200, height: 630, alt: `Walking time for ${stepsStr} steps` }],
    },
    alternates: { canonical: `${SITE_CONFIG.baseUrl}/conversions/steps-to-time/${steps}` },
  };
}

export default async function Page({ params }: Params) {
  const { steps: raw } = await params;
  const steps = parseSteps(raw);
  if (steps === null) notFound();

  const km = stepsToKmDefault(steps);
  const miles = stepsToMilesDefault(steps);
  const minutes = walkingTimeMinutesDefault(km, "normal");
  const briskMin = walkingTimeMinutesDefault(km, "brisk");
  const slowMin = walkingTimeMinutesDefault(km, "slow");
  const calories = stepsToCaloriesDefault(steps);
  const stepsStr = formatNumber(steps);

  const intro =
    `Walking ${stepsStr} steps takes about ${formatMinutes(minutes)} at a normal pace of 3 mph (5 km/h). ` +
    `A brisk 4 mph pace cuts that to ${formatMinutes(briskMin)}; a slow 2 mph stroll stretches it to ${formatMinutes(slowMin)}. ` +
    `You'll cover ${formatMiles(miles)} miles (${formatKm(km)} km) and burn about ${formatNumber(calories)} calories.`;

  const stepsByHeight = buildStepsByHeightTable(steps);
  const walkingTime = buildWalkingTimeTable(km);
  const caloriesByWeight = buildCaloriesByWeightTable(steps);

  const related = [...STEPS_TO_TIME_VALUES]
    .filter((s) => s !== steps)
    .sort((a, b) => Math.abs(a - steps) - Math.abs(b - steps))
    .slice(0, 6)
    .sort((a, b) => a - b);

  const relatedLinks = [
    ...related.map((s) => ({
      label: `${formatNumber(s)} steps — walking time`,
      href: `/conversions/steps-to-time/${s}`,
    })),
    { label: `${stepsStr} steps to miles`, href: `/conversions/steps-to-miles/${steps}` },
    { label: "Walking time calculator", href: "/tools/walking-time-calculator" },
  ];

  const faq = [
    {
      question: `How long does it take to walk ${stepsStr} steps?`,
      answer: `About ${formatMinutes(minutes)} at a normal walking pace of 3 mph. Faster brisk pace (4 mph): ${formatMinutes(briskMin)}. Slow stroll (2 mph): ${formatMinutes(slowMin)}.`,
    },
    {
      question: `Does walking time change with my height?`,
      answer: `Time stays roughly the same — what changes is how many steps you take. Taller walkers take fewer steps to cover the same distance, but most people walk at a similar cadence (about 100 steps per minute). So time depends mostly on your pace, not your height.`,
    },
    {
      question: `How far is ${stepsStr} steps?`,
      answer: `${stepsStr} steps covers about ${formatMiles(miles)} miles (${formatKm(km)} km) for an average adult.`,
    },
    {
      question: `Can I spread ${stepsStr} steps throughout the day?`,
      answer:
        steps >= 10000
          ? `Absolutely — most people who hit ${stepsStr} steps a day accumulate them across walks, errands, and incidental movement. Three 15-minute walks plus normal daily activity typically gets there.`
          : `Yes — even a single 20-30 minute walk + normal daily activity (walking to your car, around the office, etc.) will usually get you to ${stepsStr} steps without a dedicated long walk.`,
    },
    {
      question: `How is walking time calculated?`,
      answer: `Time = distance ÷ pace. We compute distance from your step count using a 76 cm average stride, then divide by your walking speed. Normal pace (3 mph / 5 km/h) is the default — the table on this page shows all three paces.`,
    },
  ];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Conversions", href: "/conversions" },
    { label: "Walking Time", href: "/conversions/steps-to-time" },
    { label: `${stepsStr} steps` },
  ];

  return (
    <ConversionValuePage
      h1={`How long does it take to walk ${stepsStr} steps?`}
      subheading={`Walking time, distance, and calories for ${stepsStr} steps.`}
      primaryAnswer={`≈ ${formatMinutes(minutes)}`}
      secondaryAnswer={`At a normal 3 mph pace · covers ${formatMiles(miles)} mi / ${formatKm(km)} km · ${formatNumber(calories)} calories`}
      intro={intro}
      breadcrumbs={breadcrumbs}
      walkingTimeTable={walkingTime}
      stepsByHeightTable={stepsByHeight}
      caloriesByWeightTable={caloriesByWeight}
      relatedLinks={relatedLinks}
      faq={faq}
      canonicalUrl={`${SITE_CONFIG.baseUrl}/conversions/steps-to-time/${steps}`}
    />
  );
}

export const dynamicParams = false;
