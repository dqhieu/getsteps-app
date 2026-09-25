import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConversionValuePage } from "@/components/conversion-value-page";
import { SITE_CONFIG } from "@/lib/constants";
import { formatNumber } from "@/lib/step-calculator";
import {
  STEPS_TO_KM_VALUES,
  stepsToKmDefault,
  stepsToMilesDefault,
  stepsToCaloriesDefault,
  walkingTimeMinutesDefault,
  buildStepsByHeightTable,
  buildCaloriesByWeightTable,
  buildWalkingTimeTable,
  formatKm,
  formatMiles,
  formatMinutes,
} from "@/lib/conversions";

interface Params {
  params: Promise<{ steps: string }>;
}

export function generateStaticParams() {
  return STEPS_TO_KM_VALUES.map((steps) => ({ steps: String(steps) }));
}

function parseSteps(raw: string): number | null {
  const n = Number(raw);
  if (!Number.isInteger(n)) return null;
  if (!STEPS_TO_KM_VALUES.includes(n as (typeof STEPS_TO_KM_VALUES)[number])) {
    return null;
  }
  return n;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { steps: raw } = await params;
  const steps = parseSteps(raw);
  if (steps === null) return {};

  const km = stepsToKmDefault(steps);
  const miles = stepsToMilesDefault(steps);
  const stepsStr = formatNumber(steps);

  const title = `${stepsStr} Steps to KM — How Many Kilometers Is ${stepsStr} Steps?`;
  const description = `${stepsStr} steps ≈ ${formatKm(km)} km (${formatMiles(miles)} miles) for an average adult. See exact distance by your height, calories burned, and walking time.`;

  return {
    title,
    description,
    keywords: [
      `${stepsStr} steps to km`,
      `${stepsStr} steps in km`,
      `${stepsStr} steps to kilometers`,
      `how many km is ${stepsStr} steps`,
    ],
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE_CONFIG.baseUrl}/conversions/steps-to-km/${steps}`,
      images: [
        {
          url: "/meta.png",
          width: 1200,
          height: 630,
          alt: `${stepsStr} steps to km`,
        },
      ],
    },
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}/conversions/steps-to-km/${steps}`,
    },
  };
}

export default async function Page({ params }: Params) {
  const { steps: raw } = await params;
  const steps = parseSteps(raw);
  if (steps === null) notFound();

  const km = stepsToKmDefault(steps);
  const miles = stepsToMilesDefault(steps);
  const minutes = walkingTimeMinutesDefault(km, "normal");
  const calories = stepsToCaloriesDefault(steps);
  const stepsStr = formatNumber(steps);

  const intro =
    `Walking ${stepsStr} steps covers about ${formatKm(km)} km (${formatMiles(miles)} miles) for an average adult, ` +
    `using a typical 76 cm (2.5 ft) stride. At a normal walking pace of 5 km/h that takes about ${formatMinutes(
      minutes
    )}, and burns roughly ${formatNumber(calories)} calories for a 70 kg (155 lb) person. ` +
    `Your exact distance depends on your height — taller people cover more ground per step. See the table below.`;

  const stepsByHeight = buildStepsByHeightTable(steps);
  const caloriesByWeight = buildCaloriesByWeightTable(steps);
  const walkingTime = buildWalkingTimeTable(km);

  const related = [...STEPS_TO_KM_VALUES]
    .filter((s) => s !== steps)
    .sort((a, b) => Math.abs(a - steps) - Math.abs(b - steps))
    .slice(0, 6)
    .sort((a, b) => a - b);

  const relatedLinks = [
    ...related.map((s) => ({
      label: `${formatNumber(s)} steps to km`,
      href: `/conversions/steps-to-km/${s}`,
    })),
    {
      label: "How many steps in a km?",
      href: "/conversions/km-to-steps",
    },
    {
      label: `${stepsStr} steps to miles`,
      href: `/conversions/steps-to-miles/${steps}`,
    },
  ];

  const faq = [
    {
      question: `How many km is ${stepsStr} steps?`,
      answer: `${stepsStr} steps is about ${formatKm(km)} km (${formatMiles(miles)} miles) for an average adult with a 76 cm stride length. Shorter walkers cover slightly less distance, taller walkers more — see the height table on this page for your specific number.`,
    },
    {
      question: `How long does it take to walk ${stepsStr} steps?`,
      answer: `At a normal walking pace of 5 km/h, ${stepsStr} steps takes about ${formatMinutes(
        minutes
      )}. At a brisk 6.4 km/h pace it takes about ${formatMinutes(
        walkingTimeMinutesDefault(km, "brisk")
      )}. At a slower 3.2 km/h stroll it takes about ${formatMinutes(
        walkingTimeMinutesDefault(km, "slow")
      )}.`,
    },
    {
      question: `How many calories does ${stepsStr} steps burn?`,
      answer: `${stepsStr} steps burns roughly ${formatNumber(calories)} calories for a 70 kg (155 lb) person at a normal walking pace. Lighter people burn fewer calories per step; heavier people burn more. See the calorie table on this page for your weight.`,
    },
    {
      question: `How is the steps-to-km conversion calculated?`,
      answer: `We use an average adult stride length of 76 cm (2.5 ft). Steps × stride length (cm) ÷ 100,000 = distance in km. So ${stepsStr} steps × 76 cm ÷ 100,000 ≈ ${formatKm(km)} km. Your actual stride is roughly 0.41 × your height.`,
    },
  ];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Conversions", href: "/conversions" },
    { label: "Steps to KM", href: "/conversions/steps-to-km" },
    { label: `${stepsStr} steps` },
  ];

  return (
    <ConversionValuePage
      h1={`${stepsStr} steps to kilometers`}
      subheading={`How far do you walk when you hit ${stepsStr} steps?`}
      primaryAnswer={`${formatKm(km)} km`}
      secondaryAnswer={`${formatMiles(miles)} miles · about ${formatMinutes(minutes)} at a normal pace · ${formatNumber(calories)} calories for a 70 kg walker`}
      intro={intro}
      breadcrumbs={breadcrumbs}
      stepsByHeightTable={stepsByHeight}
      caloriesByWeightTable={caloriesByWeight}
      walkingTimeTable={walkingTime}
      relatedLinks={relatedLinks}
      faq={faq}
      canonicalUrl={`${SITE_CONFIG.baseUrl}/conversions/steps-to-km/${steps}`}
    />
  );
}

export const dynamicParams = false;
