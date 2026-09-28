import type { Locale } from "../../config";
import en, { type CommonMessages } from "./en";
import zh from "./zh";
import fr from "./fr";
import de from "./de";
import it from "./it";
import ptBR from "./pt-BR";
import es from "./es";
import ru from "./ru";
import ja from "./ja";
import ko from "./ko";

export type { CommonMessages };

const COMMON: Record<Locale, CommonMessages> = {
  en,
  zh,
  fr,
  de,
  it,
  "pt-BR": ptBR,
  es,
  ru,
  ja,
  ko,
};

/** Shared chrome strings; loaded synchronously because every page needs them. */
export function getCommonMessages(locale: Locale): CommonMessages {
  return COMMON[locale];
}
