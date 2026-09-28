export const LOCALES = ["en", "zh", "fr", "de", "it", "pt-BR", "es", "ru", "ja", "ko"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const PREFIXED_LOCALES = LOCALES.filter(
  (locale) => locale !== DEFAULT_LOCALE,
) as Exclude<Locale, "en">[];

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** Value used in `<html lang>` and hreflang alternates. */
export const HREFLANG: Record<Locale, string> = {
  en: "en",
  zh: "zh-Hans",
  fr: "fr",
  de: "de",
  it: "it",
  "pt-BR": "pt-BR",
  es: "es",
  ru: "ru",
  ja: "ja",
  ko: "ko",
};

/** BCP 47 tag passed to `Intl` formatters. */
export const INTL_LOCALE: Record<Locale, string> = {
  en: "en-US",
  zh: "zh-CN",
  fr: "fr-FR",
  de: "de-DE",
  it: "it-IT",
  "pt-BR": "pt-BR",
  es: "es-ES",
  ru: "ru-RU",
  ja: "ja-JP",
  ko: "ko-KR",
};

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_CN",
  fr: "fr_FR",
  de: "de_DE",
  it: "it_IT",
  "pt-BR": "pt_BR",
  es: "es_ES",
  ru: "ru_RU",
  ja: "ja_JP",
  ko: "ko_KR",
};

/** Each language's name written in that language, for the switcher. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  zh: "简体中文",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  "pt-BR": "Português (Brasil)",
  es: "Español",
  ru: "Русский",
  ja: "日本語",
  ko: "한국어",
};
