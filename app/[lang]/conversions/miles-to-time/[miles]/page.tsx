import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConversionValuePage } from "@/components/conversion-value-page";
import { calculateCaloriesFromDistance } from "@/lib/calorie-calculator";
import {
  KM_PER_MILE,
  MILES_TO_TIME_VALUES,
  buildCaloriesByWeightTableForDistance,
  buildDistanceByHeightTable,
  buildWalkingTimeTable,
  formatFixed,
  formatMinutes,
  formatSteps,
  milesToStepsDefault,
  walkingTimeMinutesDefault,
} from "@/lib/conversions";
import type { Locale } from "@/lib/i18n/config";
import { formatNumber, interpolate, plural } from "@/lib/i18n/format";
import { absoluteUrl } from "@/lib/i18n/href";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import {
  loadConversionValuesMessages,
  type ConversionValuesMessages,
} from "@/lib/i18n/messages/conversion-values";
import { buildPageMetadata, getLocale } from "@/lib/i18n/page";

interface PageProps {
  params: Promise<{ lang: string; miles: string }>;
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

function pagePath(miles: number) {
  return `/conversions/miles-to-time/${miles}`;
}

function values(locale: Locale, miles: number, t: ConversionValuesMessages) {
  const km = miles * KM_PER_MILE;
  const minutes = walkingTimeMinutesDefault(km, "normal");
  const steps = milesToStepsDefault(miles);
  const calories = Math.round(calculateCaloriesFromDistance(70, km, "normal"));
  return {
    kmDistance: km,
    miles: plural(locale, miles, t.plurals.mile),
    milesArticle: plural(locale, miles, t.plurals.mileArticle),
    steps: formatSteps(steps, locale),
    km: formatFixed(km, 2, locale),
    time: formatMinutes(minutes, locale, t.ui.duration),
    brisk: formatMinutes(walkingTimeMinutesDefault(km, "brisk"), locale, t.ui.duration),
    slow: formatMinutes(walkingTimeMinutesDefault(km, "slow"), locale, t.ui.duration),
    calories: formatNumber(calories, locale),
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const { miles: raw } = await params;
  const miles = parseMiles(raw);
  if (miles === null) return {};

  const t = await loadConversionValuesMessages(locale);
  const vars = values(locale, miles, t);
  const meta = t.milesToTime.meta;

  return buildPageMetadata({
    locale,
    path: pagePath(miles),
    meta: {
      title: interpolate(meta.title, vars),
      description: interpolate(meta.description, vars),
      keywords: [
        plural(locale, miles, t.plurals.howLongDoesMile),
        plural(locale, miles, t.plurals.howLongToMile),
        plural(locale, miles, t.plurals.walkingTimeMile),
        plural(locale, miles, t.plurals.mileWalkingTime),
      ],
      ogImageAlt: interpolate(meta.ogImageAlt, vars),
    },
  });
}

export default async function Page({ params }: PageProps) {
  const locale = await getLocale(params);
  const { miles: raw } = await params;
  const miles = parseMiles(raw);
  if (miles === null) notFound();

  const t = await loadConversionValuesMessages(locale);
  const common = getCommonMessages(locale);
  const copy = t.milesToTime;
  const vars = values(locale, miles, t);
  const fill = (template: string) => interpolate(template, vars);
  const exercise =
    miles >= 3 ? copy.exercise.yes : miles >= 1 ? copy.exercise.start : copy.exercise.below;

  const related = [...MILES_TO_TIME_VALUES]
    .filter((m) => m !== miles)
    .sort((a, b) => Math.abs(a - miles) - Math.abs(b - miles))
    .slice(0, 6)
    .sort((a, b) => a - b);

  const relatedLinks = [
    ...related.map((m) => ({
      label: plural(locale, m, t.plurals.walkMileTime),
      href: `/conversions/miles-to-time/${m}`,
    })),
    {
      label: plural(locale, miles, t.plurals.mileInSteps),
      href: `/conversions/miles-to-steps/${miles}`,
    },
    { label: copy.relatedTool, href: "/tools/walking-time-calculator" },
  ];

  const faq = [
    ...copy.faq.slice(0, 3).map((item) => ({
      question: fill(item.question),
      answer: fill(item.answer),
    })),
    { question: fill(copy.exercise.question), answer: fill(exercise) },
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
      breadcrumbs={[
        { label: common.breadcrumbs.home, href: "/" },
        { label: common.breadcrumbs.conversions, href: "/conversions" },
        { label: copy.crumb, href: "/conversions/miles-to-time" },
        { label: vars.miles },
      ]}
      walkingTimeTable={buildWalkingTimeTable(vars.kmDistance)}
      distanceByHeightTable={buildDistanceByHeightTable(vars.kmDistance)}
      caloriesByWeightTable={buildCaloriesByWeightTableForDistance(vars.kmDistance)}
      relatedLinks={relatedLinks}
      faq={faq}
      canonicalUrl={absoluteUrl(locale, pagePath(miles))}
    />
  );
}

export const dynamicParams = false;
