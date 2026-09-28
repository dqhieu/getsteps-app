import type { Locale } from "../../config";
import en, { type LandingMessages } from "./en";
import zh from "./zh";
import fr from "./fr";
import de from "./de";
import it from "./it";
import ptBR from "./pt-BR";
import es from "./es";
import ru from "./ru";
import ja from "./ja";
import ko from "./ko";

export type { LandingMessages };

const LANDING: Record<Locale, LandingMessages> = {
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

export function getLandingMessages(locale: Locale): LandingMessages {
  return LANDING[locale];
}
