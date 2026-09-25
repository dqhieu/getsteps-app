import { DEFAULT_LOCALE, INTL_LOCALE, type Locale } from "./config";

export function formatNumber(
  value: number,
  locale: Locale = DEFAULT_LOCALE,
  options?: Intl.NumberFormatOptions,
): string {
  return value.toLocaleString(INTL_LOCALE[locale], options);
}

/** Fixed number of decimals, e.g. `formatDecimal(4.7, "de", 2)` → "4,70". */
export function formatDecimal(
  value: number,
  locale: Locale = DEFAULT_LOCALE,
  digits = 1,
): string {
  return value.toLocaleString(INTL_LOCALE[locale], {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

/** Thousands separator for the locale: "," in en, "." in de, U+202F in fr. */
export function groupSeparator(locale: Locale = DEFAULT_LOCALE): string {
  return (
    new Intl.NumberFormat(INTL_LOCALE[locale])
      .formatToParts(1000)
      .find((part) => part.type === "group")?.value ?? ","
  );
}

export function decimalSeparator(locale: Locale = DEFAULT_LOCALE): string {
  return (
    new Intl.NumberFormat(INTL_LOCALE[locale])
      .formatToParts(1.5)
      .find((part) => part.type === "decimal")?.value ?? "."
  );
}

/**
 * Swaps the decimal point in pre-formatted numeric text such as
 * "18.5 - 24.9" or "≥ 40.0" for the locale's separator.
 */
export function localizeNumerals(text: string, locale: Locale = DEFAULT_LOCALE): string {
  const separator = decimalSeparator(locale);
  return separator === "." ? text : text.replace(/(\d)\.(\d)/g, `$1${separator}$2`);
}

type Vars = Record<string, string | number>;

/** Replaces `{name}` placeholders. Unknown placeholders are left as-is. */
export function interpolate(template: string, vars: Vars): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  );
}

export interface PluralForms {
  one: string;
  other: string;
  zero?: string;
  few?: string;
  many?: string;
}

/** Picks the CLDR plural form for `count` and interpolates `{count}`. */
export function plural(
  locale: Locale,
  count: number,
  forms: PluralForms,
  vars: Vars = {},
): string {
  const rule = new Intl.PluralRules(INTL_LOCALE[locale]).select(count);
  const template =
    (count === 0 && forms.zero) ||
    (forms as unknown as Record<string, string | undefined>)[rule] ||
    forms.other;
  return interpolate(template, { count: formatNumber(count, locale), ...vars });
}
