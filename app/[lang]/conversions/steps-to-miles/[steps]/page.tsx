import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConversionValuePage } from "@/components/conversion-value-page";
import {
  STEPS_TO_MILES_VALUES,
  buildCaloriesByWeightTable,
  buildStepsByHeightTable,
  buildWalkingTimeTable,
  findClosestFamiliarDistance,
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

interface PageProps {
  params: Promise<{ lang: string; steps: string }>;
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

function pagePath(steps: number) {
  return `/conversions/steps-to-miles/${steps}`;
}

function values(locale: Locale, steps: number, t: ConversionValuesMessages) {
  const miles = stepsToMilesDefault(steps);
  const km = stepsToKmDefault(steps);
  const minutes = walkingTimeMinutesDefault(km, "normal");
  const calories = stepsToCaloriesDefault(steps);
  return {
    steps: formatSteps(steps, locale),
    miles: formatMiles(miles, locale),
    km: formatKm(km, locale),
    time: formatMinutes(minutes, locale, t.ui.duration),
    brisk: formatMinutes(walkingTimeMinutesDefault(km, "brisk"), locale, t.ui.duration),
    slow: formatMinutes(walkingTimeMinutesDefault(km, "slow"), locale, t.ui.duration),
    calories: formatNumber(calories, locale),
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const { steps: raw } = await params;
  const steps = parseSteps(raw);
  if (steps === null) return {};

  const t = await loadConversionValuesMessages(locale);
  const vars = values(locale, steps, t);
  const meta = t.stepsToMiles.meta;

  return buildPageMetadata({
    locale,
    path: pagePath(steps),
    meta: {
      title: interpolate(meta.title, vars),
      description: interpolate(meta.description, vars),
      keywords: meta.keywords.map((keyword) => interpolate(keyword, vars)),
      ogImageAlt: interpolate(meta.ogImageAlt, vars),
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
  const copy = t.stepsToMiles;
  const vars = values(locale, steps, t);
  const fill = (template: string) => interpolate(template, vars);
  const miles = stepsToMilesDefault(steps);
  const km = stepsToKmDefault(steps);
  const equivalent = findClosestFamiliarDistance(miles);
  const factor = formatFixed(equivalent.factor, 1, locale);
  const name = t.familiar[equivalent.key];
  const realWorld =
    equivalent.factor >= 0.9 && equivalent.factor <= 1.1
      ? interpolate(copy.realWorld.roughly, { miles: vars.miles, name })
      : equivalent.factor > 1
        ? interpolate(copy.realWorld.times, { factor, name })
        : interpolate(copy.realWorld.shorter, { factor: formatFixed(1 / equivalent.factor, 1, locale), name });

  const daily =
    steps < 5000 ? copy.daily.below : steps <= 10000 ? copy.daily.mid : copy.daily.above;

  const related = [...STEPS_TO_MILES_VALUES]
    .filter((s) => s !== steps)
    .sort((a, b) => Math.abs(a - steps) - Math.abs(b - steps))
    .slice(0, 6)
    .sort((a, b) => a - b);

  const relatedLinks = [
    ...related.map((s) => ({
      label: interpolate(copy.related, { steps: formatSteps(s, locale) }),
      href: `/conversions/steps-to-miles/${s}`,
    })),
    { label: copy.relatedHub, href: "/conversions/miles-to-steps" },
    { label: fill(copy.relatedCalories), href: `/conversions/steps-to-calories/${steps}` },
  ];

  const faq = [
    ...copy.faq.slice(0, 3).map((item) => ({
      question: fill(item.question),
      answer: fill(item.answer),
    })),
    { question: fill(copy.daily.question), answer: fill(daily) },
    {
      question: fill(copy.faq[3].question),
      answer: fill(copy.faq[3].answer),
    },
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
        { label: copy.crumb, href: "/conversions/steps-to-miles" },
        { label: fill(copy.crumbValue) },
      ]}
      stepsByHeightTable={buildStepsByHeightTable(steps)}
      caloriesByWeightTable={buildCaloriesByWeightTable(steps)}
      walkingTimeTable={buildWalkingTimeTable(km)}
      relatedLinks={relatedLinks}
      faq={faq}
      canonicalUrl={absoluteUrl(locale, pagePath(steps))}
    />
  );
}

export const dynamicParams = false;
