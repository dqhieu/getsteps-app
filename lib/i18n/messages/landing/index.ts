import type { Locale } from "../../config";
import en, { type LandingMessages } from "./en";
import zh from "./zh";
import fr from "./fr";
import de from "./de";
import it from "./it";
import ptBR from "./pt-BR";
import es from "./es";

export type { LandingMessages };

const LANDING: Record<Locale, LandingMessages> = {
  en,
  zh,
  fr,
  de,
  it,
  "pt-BR": ptBR,
  es,
};

export function getLandingMessages(locale: Locale): LandingMessages {
  return LANDING[locale];
}
