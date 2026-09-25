import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConversionValuePage } from "@/components/conversion-value-page";
import { SITE_CONFIG } from "@/lib/constants";
import { formatNumber } from "@/lib/step-calculator";
import {
  KM_TO_STEPS_VALUES,
  kmToStepsDefault,
  walkingTimeMinutesDefault,
  buildDistanceByHeightTable,
  buildCaloriesByWeightTableForDistance,
  buildWalkingTimeTable,
  formatMinutes,
} from "@/lib/conversions";
import { calculateCaloriesFromDistance } from "@/lib/calorie-calculator";

interface Params {
  params: Promise<{ km: string }>;
}

export function generateStaticParams() {
  return KM_TO_STEPS_VALUES.map((km) => ({ km: String(km) }));
}

function parseKm(raw: string): number | null {
  const n = Number(raw);
  if (!Number.isInteger(n)) return null;
  if (!KM_TO_STEPS_VALUES.includes(n as (typeof KM_TO_STEPS_VALUES)[number])) {
    return null;
  }
  return n;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { km: raw } = await params;
  const km = parseKm(raw);
  if (km === null) return {};

  const steps = kmToStepsDefault(km);
  const stepsStr = formatNumber(steps);
  const kmLabel = `${km} km`;

  const title = `How Many Steps in ${kmLabel}? — ${stepsStr} Steps`;
  const description = `${kmLabel} ≈ ${stepsStr} steps for an average adult. See exact step count by your height, calories burned, and walking time.`;

  return {
    title,
    description,
    keywords: [
      `${km} km to steps`,
      `${km} km in steps`,
      `how many steps in ${km} km`,
      `${km} kilometers in steps`,
    ],
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE_CONFIG.baseUrl}/conversions/km-to-steps/${km}`,
      images: [
        {
          url: "/meta.png",
          width: 1200,
          height: 630,
          alt: `${kmLabel} in steps`,
        },
      ],
    },
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}/conversions/km-to-steps/${km}`,
    },
  };
}

export default async function Page({ params }: Params) {
  const { km: raw } = await params;
  const km = parseKm(raw);
  if (km === null) notFound();

  const steps = kmToStepsDefault(km);
  const minutes = walkingTimeMinutesDefault(km, "normal");
  const calories = Math.round(calculateCaloriesFromDistance(70, km, "normal"));

  const stepsStr = formatNumber(steps);
  const kmLabel = `${km} km`;

  const intro =
    `Walking ${kmLabel} takes about ${stepsStr} steps for an average adult, ` +
    `using a typical 76 cm (2.5 ft) stride. At a normal walking pace of 5 km/h that takes about ${formatMinutes(
      minutes
    )}, and burns roughly ${formatNumber(calories)} calories for a 70 kg (155 lb) person. ` +
    `Your exact step count depends on your height — shorter walkers take more steps for the same distance.`;

  const distanceByHeight = buildDistanceByHeightTable(km);
  const caloriesByWeight = buildCaloriesByWeightTableForDistance(km);
  const walkingTime = buildWalkingTimeTable(km);

  const related = [...KM_TO_STEPS_VALUES]
    .filter((k) => k !== km)
    .sort((a, b) => Math.abs(a - km) - Math.abs(b - km))
    .slice(0, 6)
    .sort((a, b) => a - b);

  const relatedLinks = [
    ...related.map((k) => ({
      label: `${k} km in steps`,
      href: `/conversions/km-to-steps/${k}`,
    })),
    { label: "Steps to km converter", href: "/conversions/steps-to-km" },
  ];

  const faq = [
    {
      question: `How many steps is ${kmLabel}?`,
      answer: `${kmLabel} is about ${stepsStr} steps for an average adult with a 76 cm stride length. Shorter walkers take more steps to cover the same distance — see the height table on this page for your specific number.`,
    },
    {
      question: `How long does it take to walk ${kmLabel}?`,
      answer: `At a normal walking pace of 5 km/h, ${kmLabel} takes about ${formatMinutes(
        minutes
      )}. At a brisk 6.4 km/h pace it takes about ${formatMinutes(
        walkingTimeMinutesDefault(km, "brisk")
      )}. At a slow 3.2 km/h pace it takes about ${formatMinutes(
        walkingTimeMinutesDefault(km, "slow")
      )}.`,
    },
    {
      question: `How many calories does walking ${kmLabel} burn?`,
      answer: `Walking ${kmLabel} burns roughly ${formatNumber(calories)} calories for a 70 kg (155 lb) person at a normal pace. See the calorie table on this page for your weight.`,
    },
    {
      question: `How is the km-to-steps conversion calculated?`,
      answer: `We multiply the distance by 100,000 (cm/km) and divide by an average stride length of 76 cm. So ${kmLabel} = ${(km * 100000).toFixed(0)} cm ÷ 76 cm ≈ ${stepsStr} steps. Your actual stride is roughly 0.41 × your height.`,
    },
  ];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Conversions", href: "/conversions" },
    { label: "KM to Steps", href: "/conversions/km-to-steps" },
    { label: kmLabel },
  ];

  return (
    <ConversionValuePage
      h1={`How many steps in ${kmLabel}?`}
      subheading={`The answer — for an average adult — and how it changes with your height.`}
      primaryAnswer={`${stepsStr} steps`}
      secondaryAnswer={`${kmLabel} · about ${formatMinutes(minutes)} at a normal pace · ${formatNumber(calories)} calories for a 70 kg walker`}
      intro={intro}
      breadcrumbs={breadcrumbs}
      distanceByHeightTable={distanceByHeight}
      caloriesByWeightTable={caloriesByWeight}
      walkingTimeTable={walkingTime}
      relatedLinks={relatedLinks}
      faq={faq}
      canonicalUrl={`${SITE_CONFIG.baseUrl}/conversions/km-to-steps/${km}`}
    />
  );
}

export const dynamicParams = false;
