import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConversionValuePage } from "@/components/conversion-value-page";
import { SITE_CONFIG } from "@/lib/constants";
import { formatNumber } from "@/lib/step-calculator";
import {
  MILES_TO_TIME_VALUES,
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
  return MILES_TO_TIME_VALUES.map((miles) => ({ miles: String(miles) }));
}

function parseMiles(raw: string): number | null {
  const n = Number(raw);
  if (!Number.isInteger(n)) return null;
  if (!MILES_TO_TIME_VALUES.includes(n as (typeof MILES_TO_TIME_VALUES)[number])) {
    return null;
  }
  return n;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { miles: raw } = await params;
  const miles = parseMiles(raw);
  if (miles === null) return {};

  const km = miles * KM_PER_MILE;
  const minutes = walkingTimeMinutesDefault(km, "normal");
  const milesLabel = miles === 1 ? "1 mile" : `${miles} miles`;

  const title = `How Long Does It Take to Walk ${milesLabel}?`;
  const description = `Walking ${milesLabel} takes about ${formatMinutes(minutes)} at a normal 3 mph pace. See walking time at three paces, plus step count and calories.`;

  return {
    title,
    description,
    keywords: [
      `how long does it take to walk ${miles} mile${miles === 1 ? "" : "s"}`,
      `how long to walk ${miles} mile${miles === 1 ? "" : "s"}`,
      `walking time ${miles} mile${miles === 1 ? "" : "s"}`,
      `${miles} mile${miles === 1 ? "" : "s"} walking time`,
    ],
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE_CONFIG.baseUrl}/conversions/miles-to-time/${miles}`,
      images: [{ url: "/meta.png", width: 1200, height: 630, alt: `${milesLabel} walking time` }],
    },
    alternates: { canonical: `${SITE_CONFIG.baseUrl}/conversions/miles-to-time/${miles}` },
  };
}

export default async function Page({ params }: Params) {
  const { miles: raw } = await params;
  const miles = parseMiles(raw);
  if (miles === null) notFound();

  const km = miles * KM_PER_MILE;
  const minutes = walkingTimeMinutesDefault(km, "normal");
  const briskMin = walkingTimeMinutesDefault(km, "brisk");
  const slowMin = walkingTimeMinutesDefault(km, "slow");
  const steps = milesToStepsDefault(miles);
  const calories = Math.round(calculateCaloriesFromDistance(70, km, "normal"));

  const stepsStr = formatNumber(steps);
  const milesLabel = miles === 1 ? "1 mile" : `${miles} miles`;
  const milesArticle = miles === 1 ? "a mile" : `${miles} miles`;

  const intro =
    `Walking ${milesLabel} takes about ${formatMinutes(minutes)} at a normal pace of 3 mph (5 km/h). ` +
    `Cut to ${formatMinutes(briskMin)} at a brisk 4 mph pace, or stretched to ${formatMinutes(slowMin)} at a leisurely 2 mph. ` +
    `You'll take about ${stepsStr} steps and burn roughly ${formatNumber(calories)} calories.`;

  const distanceByHeight = buildDistanceByHeightTable(km);
  const caloriesByWeight = buildCaloriesByWeightTableForDistance(km);
  const walkingTime = buildWalkingTimeTable(km);

  const related = [...MILES_TO_TIME_VALUES]
    .filter((m) => m !== miles)
    .sort((a, b) => Math.abs(a - miles) - Math.abs(b - miles))
    .slice(0, 6)
    .sort((a, b) => a - b);

  const relatedLinks = [
    ...related.map((m) => ({
      label: `Walk ${m} mile${m === 1 ? "" : "s"} — time`,
      href: `/conversions/miles-to-time/${m}`,
    })),
    { label: `${miles} ${miles === 1 ? "mile" : "miles"} in steps`, href: `/conversions/miles-to-steps/${miles}` },
    { label: "Walking time calculator", href: "/tools/walking-time-calculator" },
  ];

  const faq = [
    {
      question: `How long does it take to walk ${milesArticle}?`,
      answer: `About ${formatMinutes(minutes)} at a normal 3 mph pace. Brisk 4 mph: ${formatMinutes(briskMin)}. Slow 2 mph: ${formatMinutes(slowMin)}.`,
    },
    {
      question: `How many steps is ${milesLabel}?`,
      answer: `${milesLabel} is about ${stepsStr} steps for an average adult with a 76 cm stride. Shorter walkers take more steps — see the height table on this page.`,
    },
    {
      question: `How many calories will I burn walking ${milesLabel}?`,
      answer: `Roughly ${formatNumber(calories)} calories for a 70 kg (155 lb) person at a normal pace. Heavier walkers burn more — see the weight table.`,
    },
    {
      question: `Is walking ${milesLabel} a day enough exercise?`,
      answer:
        miles >= 3
          ? `Yes — walking ${milesLabel} a day easily meets the CDC's 150-minutes-per-week recommendation for moderate aerobic activity if done at a normal-to-brisk pace.`
          : miles >= 1
            ? `Walking ${milesLabel} a day is a solid start. Combined with normal daily activity it puts you in the active range, but adding another walk would get to a stronger health benefit.`
            : `Less than ${milesLabel} a day is below the CDC's minimum recommendation. Build up gradually — even an extra 0.5 mile/day improves cardiovascular health.`,
    },
    {
      question: `How is walking time calculated?`,
      answer: `Time = distance ÷ pace. ${milesLabel} = ${km.toFixed(2)} km. At 5 km/h that's ${formatMinutes(minutes)}. We use the same three paces the CDC and ACSM publish for moderate physical activity.`,
    },
  ];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Conversions", href: "/conversions" },
    { label: "Walking Time", href: "/conversions/miles-to-time" },
    { label: milesLabel },
  ];

  return (
    <ConversionValuePage
      h1={`How long does it take to walk ${milesArticle}?`}
      subheading={`Walking time, steps, and calories for ${milesLabel}.`}
      primaryAnswer={`≈ ${formatMinutes(minutes)}`}
      secondaryAnswer={`At a normal 3 mph pace · ${stepsStr} steps · ${formatNumber(calories)} calories for a 70 kg walker`}
      intro={intro}
      breadcrumbs={breadcrumbs}
      walkingTimeTable={walkingTime}
      distanceByHeightTable={distanceByHeight}
      caloriesByWeightTable={caloriesByWeight}
      relatedLinks={relatedLinks}
      faq={faq}
      canonicalUrl={`${SITE_CONFIG.baseUrl}/conversions/miles-to-time/${miles}`}
    />
  );
}

export const dynamicParams = false;
