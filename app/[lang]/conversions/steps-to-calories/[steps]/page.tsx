import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConversionValuePage } from "@/components/conversion-value-page";
import {
  STEPS_TO_CALORIES_VALUES,
  buildCaloriesByWeightTable,
  buildStepsByHeightTable,
  buildWalkingTimeTable,
  formatFixed,
  formatKm,
  formatMiles,
  formatMinutes,
  formatSteps,
  stepsToCaloriesDefault,
  stepsToKmDefault,
  stepsToMilesDefault,
  walkingTimeMinutesDefault,
} from "@/lib/conversions";
import type { Locale } from "@/lib/i18n/config";
import { formatNumber, interpolate } from "@/lib/i18n/format";
import { absoluteUrl } from "@/lib/i18n/href";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import {
  loadConversionValuesMessages,
  type ConversionValuesMessages,
} from "@/lib/i18n/messages/conversion-values";
import { buildPageMetadata, getLocale } from "@/lib/i18n/page";

const FOODS = [
  { key: "banana", cal: 105 },
  { key: "apple", cal: 95 },
  { key: "bread", cal: 80 },
  { key: "coffee", cal: 50 },
  { key: "cookie", cal: 160 },
  { key: "juice", cal: 110 },
] as const;

interface PageProps {
  params: Promise<{ lang: string; steps: string }>;
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

function pagePath(steps: number) {
  return `/conversions/steps-to-calories/${steps}`;
}

function values(locale: Locale, steps: number, t: ConversionValuesMessages) {
  const calories = stepsToCaloriesDefault(steps);
  const km = stepsToKmDefault(steps);
  const miles = stepsToMilesDefault(steps);
  const minutes = walkingTimeMinutesDefault(km, "normal");
  const byWeight = buildCaloriesByWeightTable(steps);
  return {
    kmDistance: km,
    byWeight,
    calorieCount: calories,
    text: {
      steps: formatSteps(steps, locale),
      calories: formatNumber(calories, locale),
      miles: formatMiles(miles, locale),
      km: formatKm(km, locale),
      time: formatMinutes(minutes, locale, t.ui.duration),
      brisk: formatMinutes(walkingTimeMinutesDefault(km, "brisk"), locale, t.ui.duration),
      slow: formatMinutes(walkingTimeMinutesDefault(km, "slow"), locale, t.ui.duration),
      slowCal: formatNumber(byWeight[1].calories[0], locale),
      briskCal: formatNumber(byWeight[1].calories[2], locale),
    },
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const { steps: raw } = await params;
  const steps = parseSteps(raw);
  if (steps === null) return {};

  const t = await loadConversionValuesMessages(locale);
  const { text } = values(locale, steps, t);
  const meta = t.stepsToCalories.meta;

  return buildPageMetadata({
    locale,
    path: pagePath(steps),
    meta: {
      title: interpolate(meta.title, text),
      description: interpolate(meta.description, text),
      keywords: meta.keywords.map((keyword) => interpolate(keyword, text)),
      ogImageAlt: interpolate(meta.ogImageAlt, text),
    },
  });
}

export default async function Page({ params }: PageProps) {
  const locale = await getLocale(params);
  const { steps: raw } = await params;
  const steps = parseSteps(raw);
  if (steps === null) notFound();

  const t = await loadConversionValuesMessages(locale);
  const common = getCommonMessages(locale);
  const copy = t.stepsToCalories;
  const vars = values(locale, steps, t);
  const fill = (template: string) => interpolate(template, vars.text);

  let bestFood: (typeof FOODS)[number] = FOODS[0];
  let bestRatio = Infinity;
  for (const food of FOODS) {
    const ratio = Math.max(vars.calorieCount, food.cal) / Math.min(vars.calorieCount, food.cal);
    if (ratio < bestRatio) {
      bestRatio = ratio;
      bestFood = food;
    }
  }
  const foodFactor = vars.calorieCount / bestFood.cal;
  const name = t.foods[bestFood.key];
  const realWorld =
    foodFactor >= 0.9 && foodFactor <= 1.1
      ? interpolate(copy.realWorld.roughly, { calories: vars.text.calories, name })
      : foodFactor > 1
        ? interpolate(copy.realWorld.times, {
            calories: vars.text.calories,
            factor: formatFixed(foodFactor, 1, locale),
            name,
          })
        : interpolate(copy.realWorld.less, {
            calories: vars.text.calories,
            factor: formatFixed(1 / foodFactor, 1, locale),
            name,
          });

  const loss = vars.calorieCount >= 500 ? copy.loss.yes : copy.loss.no;

  const related = [...STEPS_TO_CALORIES_VALUES]
    .filter((s) => s !== steps)
    .sort((a, b) => Math.abs(a - steps) - Math.abs(b - steps))
    .slice(0, 6)
    .sort((a, b) => a - b);

  const relatedLinks = [
    ...related.map((s) => ({
      label: interpolate(copy.related, { steps: formatSteps(s, locale) }),
      href: `/conversions/steps-to-calories/${s}`,
    })),
    { label: fill(copy.relatedMiles), href: `/conversions/steps-to-miles/${steps}` },
    { label: copy.relatedTool, href: "/tools/walking-calories-calculator" },
  ];

  const faq = [
    ...copy.faq.slice(0, 2).map((item) => ({
      question: fill(item.question),
      answer: fill(item.answer),
    })),
    { question: fill(copy.loss.question), answer: fill(loss) },
    ...copy.faq.slice(2).map((item) => ({
      question: fill(item.question),
      answer: fill(item.answer),
    })),
  ];

  return (
    <ConversionValuePage
      locale={locale}
      copy={t.ui}
      h1={fill(copy.h1)}
      subheading={fill(copy.subheading)}
      primaryAnswer={fill(copy.primary)}
      secondaryAnswer={fill(copy.secondary)}
      intro={fill(copy.intro)}
      realWorldEquivalent={realWorld}
      breadcrumbs={[
        { label: common.breadcrumbs.home, href: "/" },
        { label: common.breadcrumbs.conversions, href: "/conversions" },
        { label: copy.crumb, href: "/conversions/steps-to-calories" },
        { label: fill(copy.crumbValue) },
      ]}
      caloriesByWeightTable={vars.byWeight}
      walkingTimeTable={buildWalkingTimeTable(vars.kmDistance)}
      stepsByHeightTable={buildStepsByHeightTable(steps)}
      relatedLinks={relatedLinks}
      faq={faq}
      canonicalUrl={absoluteUrl(locale, pagePath(steps))}
    />
  );
}

export const dynamicParams = false;
