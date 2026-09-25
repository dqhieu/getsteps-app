import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConversionValuePage } from "@/components/conversion-value-page";
import { calculateCaloriesFromDistance } from "@/lib/calorie-calculator";
import {
  KM_TO_STEPS_VALUES,
  buildCaloriesByWeightTableForDistance,
  buildDistanceByHeightTable,
  buildWalkingTimeTable,
  formatFixed,
  formatMinutes,
  formatSteps,
  kmToStepsDefault,
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
  params: Promise<{ lang: string; km: string }>;
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

function pagePath(km: number) {
  return `/conversions/km-to-steps/${km}`;
}

function values(locale: Locale, km: number, t: ConversionValuesMessages) {
  const steps = kmToStepsDefault(km);
  const minutes = walkingTimeMinutesDefault(km, "normal");
  const calories = Math.round(calculateCaloriesFromDistance(70, km, "normal"));
  return {
    km: formatNumber(km, locale),
    steps: formatSteps(steps, locale),
    time: formatMinutes(minutes, locale, t.ui.duration),
    brisk: formatMinutes(walkingTimeMinutesDefault(km, "brisk"), locale, t.ui.duration),
    slow: formatMinutes(walkingTimeMinutesDefault(km, "slow"), locale, t.ui.duration),
    calories: formatNumber(calories, locale),
    cm: formatFixed(km * 100000, 0, locale),
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const { km: raw } = await params;
  const km = parseKm(raw);
  if (km === null) return {};

  const t = await loadConversionValuesMessages(locale);
  const vars = values(locale, km, t);
  const meta = t.kmToSteps.meta;

  return buildPageMetadata({
    locale,
    path: pagePath(km),
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
  const { km: raw } = await params;
  const km = parseKm(raw);
  if (km === null) notFound();

  const t = await loadConversionValuesMessages(locale);
  const common = getCommonMessages(locale);
  const copy = t.kmToSteps;
  const vars = values(locale, km, t);
  const fill = (template: string) => interpolate(template, vars);

  const related = [...KM_TO_STEPS_VALUES]
    .filter((k) => k !== km)
    .sort((a, b) => Math.abs(a - km) - Math.abs(b - km))
    .slice(0, 6)
    .sort((a, b) => a - b);

  const relatedLinks = [
    ...related.map((k) => ({
      label: interpolate(copy.related, { km: formatNumber(k, locale) }),
      href: `/conversions/km-to-steps/${k}`,
    })),
    { label: copy.relatedHub, href: "/conversions/steps-to-km" },
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
        { label: copy.crumb, href: "/conversions/km-to-steps" },
        { label: fill(copy.crumbValue) },
      ]}
      distanceByHeightTable={buildDistanceByHeightTable(km)}
      caloriesByWeightTable={buildCaloriesByWeightTableForDistance(km)}
      walkingTimeTable={buildWalkingTimeTable(km)}
      relatedLinks={relatedLinks}
      faq={copy.faq.map((item) => ({
        question: fill(item.question),
        answer: fill(item.answer),
      }))}
      canonicalUrl={absoluteUrl(locale, pagePath(km))}
    />
  );
}

export const dynamicParams = false;
