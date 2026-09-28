import { defineMessages } from "../../../load";
import type { MacroCalculatorMessages } from "./en";

export type { MacroCalculatorMessages };

export const loadMacroCalculatorMessages = defineMessages<MacroCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
  ru: () => import("./ru"),
  ja: () => import("./ja"),
  ko: () => import("./ko"),
});
