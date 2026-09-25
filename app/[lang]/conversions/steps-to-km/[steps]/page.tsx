import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConversionValuePage } from "@/components/conversion-value-page";
import {
  STEPS_TO_KM_VALUES,
  buildCaloriesByWeightTable,
  buildStepsByHeightTable,
  buildWalkingTimeTable,
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
import { loadConversionValuesMessages } from "@/lib/i18n/messages/conversion-values";
import type { ConversionValuesMessages } from "@/lib/i18n/messages/conversion-values";
import { buildPageMetadata, getLocale } from "@/lib/i18n/page";

interface PageProps {
  params: Promise<{ lang: string; steps: string }>;
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

function pagePath(steps: number) {
  return `/conversions/steps-to-km/${steps}`;
}

function values(locale: Locale, steps: number, t: ConversionValuesMessages) {
  const km = stepsToKmDefault(steps);
  const miles = stepsToMilesDefault(steps);
  const minutes = walkingTimeMinutesDefault(km, "normal");
  const calories = stepsToCaloriesDefault(steps);
  return {
    steps: formatSteps(steps, locale),
    km: formatKm(km, locale),
    miles: formatMiles(miles, locale),
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
  const meta = t.stepsToKm.meta;

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
  const copy = t.stepsToKm;
  const vars = values(locale, steps, t);
  const fill = (template: string) => interpolate(template, vars);
  const km = stepsToKmDefault(steps);

  const related = [...STEPS_TO_KM_VALUES]
    .filter((s) => s !== steps)
    .sort((a, b) => Math.abs(a - steps) - Math.abs(b - steps))
    .slice(0, 6)
    .sort((a, b) => a - b);

  const relatedLinks = [
    ...related.map((s) => ({
      label: interpolate(copy.related, { steps: formatSteps(s, locale) }),
      href: `/conversions/steps-to-km/${s}`,
    })),
    { label: copy.relatedHub, href: "/conversions/km-to-steps" },
    { label: fill(copy.relatedMiles), href: `/conversions/steps-to-miles/${steps}` },
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
        { label: copy.crumb, href: "/conversions/steps-to-km" },
        { label: fill(copy.crumbValue) },
      ]}
      stepsByHeightTable={buildStepsByHeightTable(steps)}
      caloriesByWeightTable={buildCaloriesByWeightTable(steps)}
      walkingTimeTable={buildWalkingTimeTable(km)}
      relatedLinks={relatedLinks}
      faq={copy.faq.map((item) => ({
        question: fill(item.question),
        answer: fill(item.answer),
      }))}
      canonicalUrl={absoluteUrl(locale, pagePath(steps))}
    />
  );
}

export const dynamicParams = false;
