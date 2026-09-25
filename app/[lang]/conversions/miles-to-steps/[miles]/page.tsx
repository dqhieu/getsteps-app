import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConversionValuePage } from "@/components/conversion-value-page";
import { SITE_CONFIG } from "@/lib/constants";
import { formatNumber } from "@/lib/step-calculator";
import {
  MILES_TO_STEPS_VALUES,
  milesToStepsDefault,
  walkingTimeMinutesDefault,
  buildDistanceByHeightTable,
  buildCaloriesByWeightTableForDistance,
  buildWalkingTimeTable,
  formatMinutes,
  KM_PER_MILE,
} from "@/lib/conversions";
import { calculateCaloriesFromDistance } from "@/lib/calorie-calculator";

interface Params {
  params: Promise<{ miles: string }>;
}

export function generateStaticParams() {
  return MILES_TO_STEPS_VALUES.map((miles) => ({ miles: String(miles) }));
}

function parseMiles(raw: string): number | null {
  const n = Number(raw);
  if (!Number.isInteger(n)) return null;
  if (!MILES_TO_STEPS_VALUES.includes(n as (typeof MILES_TO_STEPS_VALUES)[number])) {
    return null;
  }
  return n;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { miles: raw } = await params;
  const miles = parseMiles(raw);
  if (miles === null) return {};

  const steps = milesToStepsDefault(miles);
  const stepsStr = formatNumber(steps);
  const milesLabel = miles === 1 ? "1 mile" : `${miles} miles`;

  const title = `How Many Steps in ${milesLabel}? — ${stepsStr} Steps`;
  const description = `${milesLabel} ≈ ${stepsStr} steps for an average adult. See exact step count by your height, calories burned, and walking time.`;

  return {
    title,
    description,
    keywords: [
      `${miles} mile${miles === 1 ? "" : "s"} in steps`,
      `${miles} mile${miles === 1 ? "" : "s"} to steps`,
      `how many steps in ${miles} mile${miles === 1 ? "" : "s"}`,
      `how many steps is ${miles} mile${miles === 1 ? "" : "s"}`,
      `${miles} mile walk steps`,
    ],
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE_CONFIG.baseUrl}/conversions/miles-to-steps/${miles}`,
      images: [
        {
          url: "/meta.png",
          width: 1200,
          height: 630,
          alt: `${milesLabel} in steps`,
        },
      ],
    },
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}/conversions/miles-to-steps/${miles}`,
    },
  };
}

export default async function Page({ params }: Params) {
  const { miles: raw } = await params;
  const miles = parseMiles(raw);
  if (miles === null) notFound();

  const steps = milesToStepsDefault(miles);
  const km = miles * KM_PER_MILE;
  const minutes = walkingTimeMinutesDefault(km, "normal");
  const calories = Math.round(calculateCaloriesFromDistance(70, km, "normal"));

  const stepsStr = formatNumber(steps);
  const milesLabel = miles === 1 ? "1 mile" : `${miles} miles`;
  const milesArticle = miles === 1 ? "a mile" : `${miles} miles`;

  const intro =
    `Walking ${milesLabel} takes about ${stepsStr} steps for an average adult, ` +
    `using a typical 76 cm (2.5 ft) stride. At a normal walking pace of 3 mph that takes about ${formatMinutes(
      minutes
    )}, and burns roughly ${formatNumber(
      calories
    )} calories for a 155 lb (70 kg) person. ` +
    `Your exact step count depends on your height — shorter walkers take more steps for the same distance. See the table below.`;

  const distanceByHeight = buildDistanceByHeightTable(km);
  const caloriesByWeight = buildCaloriesByWeightTableForDistance(km);
  const walkingTime = buildWalkingTimeTable(km);

  const related = [...MILES_TO_STEPS_VALUES]
    .filter((m) => m !== miles)
    .sort((a, b) => Math.abs(a - miles) - Math.abs(b - miles))
    .slice(0, 6)
    .sort((a, b) => a - b);

  const relatedLinks = [
    ...related.map((m) => ({
      label: `${m} mile${m === 1 ? "" : "s"} in steps`,
      href: `/conversions/miles-to-steps/${m}`,
    })),
    {
      label: "Steps to miles converter",
      href: "/conversions/steps-to-miles",
    },
    {
      label: `${stepsStr} steps to calories`,
      href: `/conversions/steps-to-calories/${Math.round(steps / 1000) * 1000}`,
    },
  ];

  const faq = [
    {
      question: `How many steps is ${milesLabel}?`,
      answer: `${milesLabel} is about ${stepsStr} steps for an average adult with a 76 cm stride length. Shorter walkers take more steps to cover the same distance — see the height table on this page for your specific number.`,
    },
    {
      question: `How long does it take to walk ${milesLabel}?`,
      answer: `At a normal walking pace of 3 mph, ${milesLabel} takes about ${formatMinutes(
        minutes
      )}. At a brisk 4 mph pace it takes about ${formatMinutes(
        walkingTimeMinutesDefault(km, "brisk")
      )}. At a slower 2 mph stroll it takes about ${formatMinutes(
        walkingTimeMinutesDefault(km, "slow")
      )}.`,
    },
    {
      question: `How many calories does ${milesArticle} burn?`,
      answer: `Walking ${milesLabel} burns roughly ${formatNumber(calories)} calories for a 155 lb (70 kg) person at a normal walking pace. Lighter people burn less; heavier people burn more — see the calorie table on this page.`,
    },
    {
      question: `Is walking ${milesLabel} a day enough exercise?`,
      answer:
        miles >= 3
          ? `Yes — walking ${milesLabel} a day (${stepsStr} steps) easily meets the CDC's recommended 150 minutes of moderate aerobic activity per week if done at a normal-to-brisk pace.`
          : miles >= 1
            ? `Walking ${milesLabel} a day is a solid start. It puts you in the active range and contributes to the CDC's recommended 150 minutes of weekly aerobic activity, but adding a second daily walk would get you to a stronger health benefit.`
            : `Walking less than ${milesLabel} a day is below the CDC's minimum recommendation. Build up gradually — even an extra 1,000 steps per day improves cardiovascular health.`,
    },
    {
      question: `How is the miles-to-steps conversion calculated?`,
      answer: `We multiply the distance in meters by 100 (cm/m) and divide by an average stride length of 76 cm. So ${milesLabel} = ${(miles * 1609.34).toFixed(0)} m × 100 ÷ 76 ≈ ${stepsStr} steps. Your actual stride length is roughly 0.41 × your height.`,
    },
  ];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Conversions", href: "/conversions" },
    { label: "Miles to Steps", href: "/conversions/miles-to-steps" },
    { label: milesLabel },
  ];

  return (
    <ConversionValuePage
      h1={`How many steps in ${milesArticle}?`}
      subheading={`The answer — for an average adult — and how it changes with your height.`}
      primaryAnswer={`${stepsStr} steps`}
      secondaryAnswer={`${milesLabel} · ${km.toFixed(2)} km · about ${formatMinutes(
        minutes
      )} at a normal pace · ${formatNumber(calories)} calories for a 155 lb (70 kg) walker`}
      intro={intro}
      breadcrumbs={breadcrumbs}
      distanceByHeightTable={distanceByHeight}
      caloriesByWeightTable={caloriesByWeight}
      walkingTimeTable={walkingTime}
      relatedLinks={relatedLinks}
      faq={faq}
      canonicalUrl={`${SITE_CONFIG.baseUrl}/conversions/miles-to-steps/${miles}`}
    />
  );
}

export const dynamicParams = false;
