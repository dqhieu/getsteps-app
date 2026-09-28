import { defineMessages } from "../../../load";
import type { CalorieDeficitMessages } from "./en";

export type { CalorieDeficitMessages };

export const loadCalorieDeficitMessages = defineMessages<CalorieDeficitMessages>({
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
