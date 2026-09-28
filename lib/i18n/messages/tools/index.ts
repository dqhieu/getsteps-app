import type { Locale } from "../../config";
import en, { type ToolsMessages, type ToolSlug } from "./en";
import zh from "./zh";
import fr from "./fr";
import de from "./de";
import it from "./it";
import ptBR from "./pt-BR";
import es from "./es";
import ru from "./ru";
import ja from "./ja";
import ko from "./ko";

export type { ToolsMessages, ToolSlug };

const TOOLS_MESSAGES: Record<Locale, ToolsMessages> = {
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

/**
 * Tool titles and descriptions are read by the footer, the /tools directory
 * and every "Related Calculators" block, so they load synchronously.
 */
export function getToolsMessages(locale: Locale): ToolsMessages {
  return TOOLS_MESSAGES[locale];
}

/** Localized label for an internal `/tools/...` or `/conversions/...` href. */
export function toolLinkTitle(locale: Locale, href: string, fallback: string): string {
  const t = TOOLS_MESSAGES[locale];
  const tool = href.match(/^\/tools\/([^/?#]+)/)?.[1];
  if (tool && tool in t.tools) return t.tools[tool as ToolSlug].title;
  const table = href.match(/^\/conversions\/([^/?#]+)$/)?.[1];
  if (table && table in t.conversionTables) {
    return t.conversionTables[table as keyof ToolsMessages["conversionTables"]];
  }
  return fallback;
}
