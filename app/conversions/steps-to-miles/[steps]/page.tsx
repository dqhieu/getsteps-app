import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConversionValuePage } from "@/components/conversion-value-page";
import { SITE_CONFIG } from "@/lib/constants";
import { formatNumber } from "@/lib/step-calculator";
import {
  STEPS_TO_MILES_VALUES,
  stepsToMilesDefault,
  stepsToKmDefault,
  stepsToCaloriesDefault,
  walkingTimeMinutesDefault,
  buildStepsByHeightTable,
  buildCaloriesByWeightTable,
  buildWalkingTimeTable,
  findClosestFamiliarDistance,
  formatMiles,
  formatKm,
  formatMinutes,
} from "@/lib/conversions";

interface Params {
  params: Promise<{ steps: string }>;
}

export function generateStaticParams() {
  return STEPS_TO_MILES_VALUES.map((steps) => ({ steps: String(steps) }));
}

function parseSteps(raw: string): number | null {
  const n = Number(raw);
  if (!Number.isInteger(n)) return null;
  if (!STEPS_TO_MILES_VALUES.includes(n as (typeof STEPS_TO_MILES_VALUES)[number])) {
    return null;
  }
  return n;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { steps: raw } = await params;
  const steps = parseSteps(raw);
  if (steps === null) return {};

  const miles = stepsToMilesDefault(steps);
  const km = stepsToKmDefault(steps);
  const stepsStr = formatNumber(steps);
  const milesStr = formatMiles(miles);
  const kmStr = formatKm(km);

  const title = `${stepsStr} Steps to Miles — How Many Miles Is ${stepsStr} Steps?`;
  const description = `${stepsStr} steps ≈ ${milesStr} miles (${kmStr} km) for an average adult. See exact distance by your height, calories burned, and walking time.`;

  return {
    title,
    description,
    keywords: [
      `${stepsStr} steps to miles`,
      `${stepsStr} steps in miles`,
      `how many miles is ${stepsStr} steps`,
      `${stepsStr} steps`,
      `${stepsStr} steps distance`,
      `${stepsStr} steps calories`,
    ],
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE_CONFIG.baseUrl}/conversions/steps-to-miles/${steps}`,
      images: [
        {
          url: "/meta.png",
          width: 1200,
          height: 630,
          alt: `${stepsStr} steps to miles`,
        },
      ],
    },
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}/conversions/steps-to-miles/${steps}`,
    },
  };
}

export default async function Page({ params }: Params) {
  const { steps: raw } = await params;
  const steps = parseSteps(raw);
  if (steps === null) notFound();

  const miles = stepsToMilesDefault(steps);
  const km = stepsToKmDefault(steps);
  const minutes = walkingTimeMinutesDefault(km, "normal");
  const calories = stepsToCaloriesDefault(steps);
  const stepsStr = formatNumber(steps);
  const milesStr = formatMiles(miles);
  const kmStr = formatKm(km);

  const equivalent = findClosestFamiliarDistance(miles);
  const realWorldEquivalent =
    equivalent.factor >= 0.9 && equivalent.factor <= 1.1
      ? `${milesStr} miles is roughly the distance of ${equivalent.name}.`
      : equivalent.factor > 1
        ? `That's about ${equivalent.factor.toFixed(1)}× the distance of ${equivalent.name}.`
        : `That's about ${(1 / equivalent.factor).toFixed(1)}× shorter than ${equivalent.name}.`;

  const intro =
    `Walking ${stepsStr} steps covers about ${milesStr} miles (${kmStr} km) for an average adult, ` +
    `using a typical 76 cm (2.5 ft) stride. At a normal walking pace of 3 mph that takes about ${formatMinutes(
      minutes
    )}, and burns roughly ${formatNumber(calories)} calories for a 155 lb (70 kg) person. ` +
    `Your exact distance depends on your height — taller people cover more ground per step. See the table below.`;

  const stepsByHeight = buildStepsByHeightTable(steps);
  const caloriesByWeight = buildCaloriesByWeightTable(steps);
  const walkingTime = buildWalkingTimeTable(km);

  // Pick 6 related step values closest to this one (excluding self).
  const related = [...STEPS_TO_MILES_VALUES]
    .filter((s) => s !== steps)
    .sort((a, b) => Math.abs(a - steps) - Math.abs(b - steps))
    .slice(0, 6)
    .sort((a, b) => a - b);

  const relatedLinks = [
    ...related.map((s) => ({
      label: `${formatNumber(s)} steps to miles`,
      href: `/conversions/steps-to-miles/${s}`,
    })),
    {
      label: `How many steps in a mile?`,
      href: `/conversions/miles-to-steps`,
    },
    {
      label: `${stepsStr} steps to calories`,
      href: `/conversions/steps-to-calories/${steps}`,
    },
  ];

  const faq = [
    {
      question: `How many miles is ${stepsStr} steps?`,
      answer: `${stepsStr} steps is about ${milesStr} miles (${kmStr} km) for an average adult with a 76 cm stride length. Shorter walkers cover slightly less distance, taller walkers more — see the height table on this page for your specific number.`,
    },
    {
      question: `How long does it take to walk ${stepsStr} steps?`,
      answer: `At a normal walking pace of 3 mph, ${stepsStr} steps takes about ${formatMinutes(
        minutes
      )}. At a brisk 4 mph pace it takes about ${formatMinutes(
        walkingTimeMinutesDefault(km, "brisk")
      )}. At a slower 2 mph stroll it takes about ${formatMinutes(
        walkingTimeMinutesDefault(km, "slow")
      )}.`,
    },
    {
      question: `How many calories does ${stepsStr} steps burn?`,
      answer: `${stepsStr} steps burns roughly ${formatNumber(calories)} calories for a 155 lb (70 kg) person at a normal walking pace. Lighter people burn fewer calories per step; heavier people burn more. See the calorie table on this page for your weight.`,
    },
    {
      question: `Is ${stepsStr} steps a good daily target?`,
      answer:
        steps < 5000
          ? `${stepsStr} steps is below the 7,000–10,000 step daily target most health authorities recommend for adults. Use it as a starting point and build up gradually — even 1,000 extra steps per day improves cardiovascular health.`
          : steps <= 10000
            ? `Yes — ${stepsStr} steps lands in the sweet spot most research and the CDC suggest for adults. Hitting this consistently is linked to lower risk of cardiovascular disease and improved long-term health.`
            : `${stepsStr} steps is above the standard 10,000 daily target. It's an excellent volume associated with strong cardiovascular fitness and weight management — but recovery days at lower volumes are also healthy.`,
    },
    {
      question: `How is the conversion calculated?`,
      answer: `We use an average adult stride length of 76 cm (2.5 ft), which is the figure most commonly cited by the CDC and Mayo Clinic. Steps × stride length = distance walked. Your real stride is roughly 0.41 × your height — the height table on this page shows the math for five common heights.`,
    },
  ];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Conversions", href: "/conversions" },
    { label: "Steps to Miles", href: "/conversions/steps-to-miles" },
    { label: `${stepsStr} steps` },
  ];

  return (
    <ConversionValuePage
      h1={`${stepsStr} steps to miles`}
      subheading={`How far do you walk when you hit ${stepsStr} steps?`}
      primaryAnswer={`${milesStr} miles`}
      secondaryAnswer={`${kmStr} km · about ${formatMinutes(minutes)} at a normal pace · ${formatNumber(calories)} calories for a 155 lb (70 kg) walker`}
      intro={intro}
      realWorldEquivalent={realWorldEquivalent}
      breadcrumbs={breadcrumbs}
      stepsByHeightTable={stepsByHeight}
      caloriesByWeightTable={caloriesByWeight}
      walkingTimeTable={walkingTime}
      relatedLinks={relatedLinks}
      faq={faq}
      canonicalUrl={`${SITE_CONFIG.baseUrl}/conversions/steps-to-miles/${steps}`}
    />
  );
}

export const dynamicParams = false;
