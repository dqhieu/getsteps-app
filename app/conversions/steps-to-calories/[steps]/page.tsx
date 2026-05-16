import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConversionValuePage } from "@/components/conversion-value-page";
import { SITE_CONFIG } from "@/lib/constants";
import { formatNumber } from "@/lib/step-calculator";
import {
  STEPS_TO_CALORIES_VALUES,
  stepsToCaloriesDefault,
  stepsToKmDefault,
  walkingTimeMinutesDefault,
  buildCaloriesByWeightTable,
  buildWalkingTimeTable,
  buildStepsByHeightTable,
  formatMinutes,
  formatKm,
  formatMiles,
  stepsToMilesDefault,
} from "@/lib/conversions";

interface Params {
  params: Promise<{ steps: string }>;
}

export function generateStaticParams() {
  return STEPS_TO_CALORIES_VALUES.map((steps) => ({ steps: String(steps) }));
}

function parseSteps(raw: string): number | null {
  const n = Number(raw);
  if (!Number.isInteger(n)) return null;
  if (!STEPS_TO_CALORIES_VALUES.includes(n as (typeof STEPS_TO_CALORIES_VALUES)[number])) {
    return null;
  }
  return n;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { steps: raw } = await params;
  const steps = parseSteps(raw);
  if (steps === null) return {};

  const cal = stepsToCaloriesDefault(steps);
  const stepsStr = formatNumber(steps);

  const title = `${stepsStr} Steps Calories — How Many Calories Does ${stepsStr} Steps Burn?`;
  const description = `${stepsStr} steps burns roughly ${formatNumber(cal)} calories for an average adult. See the calorie burn by your weight, pace, and walking time.`;

  return {
    title,
    description,
    keywords: [
      `${stepsStr} steps calories`,
      `${stepsStr} steps how many calories`,
      `calories in ${stepsStr} steps`,
      `${stepsStr} steps burned calories`,
      `how many calories is ${stepsStr} steps`,
    ],
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE_CONFIG.baseUrl}/conversions/steps-to-calories/${steps}`,
      images: [
        {
          url: "/meta.png",
          width: 1200,
          height: 630,
          alt: `${stepsStr} steps calories`,
        },
      ],
    },
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}/conversions/steps-to-calories/${steps}`,
    },
  };
}

export default async function Page({ params }: Params) {
  const { steps: raw } = await params;
  const steps = parseSteps(raw);
  if (steps === null) notFound();

  const calories = stepsToCaloriesDefault(steps);
  const km = stepsToKmDefault(steps);
  const miles = stepsToMilesDefault(steps);
  const minutes = walkingTimeMinutesDefault(km, "normal");

  const stepsStr = formatNumber(steps);

  const intro =
    `Walking ${stepsStr} steps burns about ${formatNumber(calories)} calories for an average adult ` +
    `(155 lb / 70 kg) at a normal pace. That's the distance of ${formatMiles(miles)} miles ` +
    `(${formatKm(km)} km) and takes around ${formatMinutes(minutes)}. ` +
    `Calorie burn scales with body weight — lighter walkers burn less, heavier walkers burn more.`;

  const caloriesByWeight = buildCaloriesByWeightTable(steps);
  const walkingTime = buildWalkingTimeTable(km);
  const stepsByHeight = buildStepsByHeightTable(steps);

  const related = [...STEPS_TO_CALORIES_VALUES]
    .filter((s) => s !== steps)
    .sort((a, b) => Math.abs(a - steps) - Math.abs(b - steps))
    .slice(0, 6)
    .sort((a, b) => a - b);

  const relatedLinks = [
    ...related.map((s) => ({
      label: `${formatNumber(s)} steps calories`,
      href: `/conversions/steps-to-calories/${s}`,
    })),
    {
      label: `${stepsStr} steps to miles`,
      href: `/conversions/steps-to-miles/${steps}`,
    },
    {
      label: "Walking calorie calculator",
      href: "/tools/walking-calories-calculator",
    },
  ];

  const foodEquivalents = [
    { name: "a banana (105 cal)", cal: 105 },
    { name: "an apple (95 cal)", cal: 95 },
    { name: "a slice of bread (80 cal)", cal: 80 },
    { name: "a cup of coffee with cream (50 cal)", cal: 50 },
    { name: "a chocolate chip cookie (160 cal)", cal: 160 },
    { name: "a glass of orange juice (110 cal)", cal: 110 },
  ];
  let bestFood = foodEquivalents[0];
  let bestRatio = Infinity;
  for (const f of foodEquivalents) {
    const r = Math.max(calories, f.cal) / Math.min(calories, f.cal);
    if (r < bestRatio) {
      bestRatio = r;
      bestFood = f;
    }
  }
  const foodFactor = calories / bestFood.cal;
  const realWorld =
    foodFactor >= 0.9 && foodFactor <= 1.1
      ? `${formatNumber(calories)} calories is roughly ${bestFood.name}.`
      : foodFactor > 1
        ? `${formatNumber(calories)} calories is about ${foodFactor.toFixed(1)}× ${bestFood.name}.`
        : `${formatNumber(calories)} calories is about ${(1 / foodFactor).toFixed(1)}× less than ${bestFood.name}.`;

  const faq = [
    {
      question: `How many calories does ${stepsStr} steps burn?`,
      answer: `${stepsStr} steps burns about ${formatNumber(calories)} calories for a 155 lb (70 kg) person walking at a normal 3 mph pace. Heavier walkers burn more — see the weight table on this page.`,
    },
    {
      question: `Does walking pace change calorie burn?`,
      answer: `Slightly. Walking at 4 mph (brisk) burns about 30% more calories per minute than 2 mph (slow), but you also cover the distance faster, so the total calorie burn for a fixed step count is closer than you'd think. Total calories range from about ${formatNumber(
        caloriesByWeight[1].calories[0]
      )} (slow) to ${formatNumber(caloriesByWeight[1].calories[2])} (brisk) for a 150 lb person.`,
    },
    {
      question: `Does ${stepsStr} steps burn enough calories to lose weight?`,
      answer:
        calories >= 500
          ? `${formatNumber(calories)} calories is a meaningful chunk of a daily deficit — roughly 0.5 lb of weight loss over two weeks if you don't compensate by eating more. Combined with even modest dietary adjustments, it can drive steady weight loss.`
          : `${formatNumber(calories)} calories is a useful contribution but won't drive weight loss on its own. Aim for at least 7,500–10,000 steps a day combined with a modest calorie deficit from diet.`,
    },
    {
      question: `How long does it take to walk ${stepsStr} steps?`,
      answer: `About ${formatMinutes(minutes)} at a normal walking pace (3 mph). Faster pace at 4 mph: ${formatMinutes(
        walkingTimeMinutesDefault(km, "brisk")
      )}. Slower 2 mph stroll: ${formatMinutes(walkingTimeMinutesDefault(km, "slow"))}.`,
    },
    {
      question: `What's the formula behind these numbers?`,
      answer: `We use the standard MET-based calorie formula: Calories = MET × weight (kg) × time (hours). For a normal walking pace MET = 3.5. We assume an average stride of 76 cm to convert steps into distance, then distance into walking time.`,
    },
  ];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Conversions", href: "/conversions" },
    { label: "Steps to Calories", href: "/conversions/steps-to-calories" },
    { label: `${stepsStr} steps` },
  ];

  return (
    <ConversionValuePage
      h1={`${stepsStr} steps calories — how many calories do you burn?`}
      subheading={`Calorie burn from walking ${stepsStr} steps, by your body weight and pace.`}
      primaryAnswer={`≈ ${formatNumber(calories)} calories`}
      secondaryAnswer={`For a 155 lb (70 kg) walker at a normal pace · covers ${formatMiles(miles)} mi / ${formatKm(km)} km · about ${formatMinutes(minutes)}`}
      intro={intro}
      realWorldEquivalent={realWorld}
      breadcrumbs={breadcrumbs}
      caloriesByWeightTable={caloriesByWeight}
      walkingTimeTable={walkingTime}
      stepsByHeightTable={stepsByHeight}
      relatedLinks={relatedLinks}
      faq={faq}
      canonicalUrl={`${SITE_CONFIG.baseUrl}/conversions/steps-to-calories/${steps}`}
    />
  );
}

export const dynamicParams = false;
