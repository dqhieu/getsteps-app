import type { Locale } from "../../config";
import { formatDecimal, formatNumber, interpolate } from "../../format";
import { defineMessages } from "../../load";
import type { PageMetaMessages } from "../../page";
import type { ConversionHubsMessages } from "./en";

export type { ConversionHubsMessages };

export const loadConversionHubsMessages = defineMessages<ConversionHubsMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});

export function withMetaVars(
  meta: PageMetaMessages,
  vars: Record<string, string | number>,
): PageMetaMessages {
  return {
    title: interpolate(meta.title, vars),
    description: interpolate(meta.description, vars),
    keywords: meta.keywords?.map((keyword) => interpolate(keyword, vars)),
    ogTitle: meta.ogTitle ? interpolate(meta.ogTitle, vars) : undefined,
    ogDescription: meta.ogDescription ? interpolate(meta.ogDescription, vars) : undefined,
    ogImageAlt: meta.ogImageAlt ? interpolate(meta.ogImageAlt, vars) : undefined,
  };
}

export function formatMeasure(value: number, locale: Locale): string {
  const digits = value < 0.1 ? 3 : value < 10 ? 2 : 1;
  return formatDecimal(value, locale, digits);
}

export interface DurationCopy {
  minutes: string;
  hours: string;
  hoursMinutes: string;
}

export function formatDuration(minutes: number, locale: Locale, copy: DurationCopy): string {
  if (minutes < 60) {
    return interpolate(copy.minutes, { minutes: formatNumber(Math.round(minutes), locale) });
  }
  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes - hours * 60);
  if (mins === 0) {
    return interpolate(copy.hours, { hours: formatNumber(hours, locale) });
  }
  return interpolate(copy.hoursMinutes, {
    hours: formatNumber(hours, locale),
    minutes: formatNumber(mins, locale),
  });
}
