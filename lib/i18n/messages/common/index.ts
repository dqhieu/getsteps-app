import type { Locale } from "../../config";
import en, { type CommonMessages } from "./en";
import zh from "./zh";
import fr from "./fr";
import de from "./de";
import it from "./it";
import ptBR from "./pt-BR";
import es from "./es";

export type { CommonMessages };

const COMMON: Record<Locale, CommonMessages> = {
  en,
  zh,
  fr,
  de,
  it,
  "pt-BR": ptBR,
  es,
};

/** Shared chrome strings; loaded synchronously because every page needs them. */
export function getCommonMessages(locale: Locale): CommonMessages {
  return COMMON[locale];
}
