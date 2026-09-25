import { defineMessages } from "../../../load";
import type { CaloriesBurnedMessages } from "./en";

export type { CaloriesBurnedMessages };

export const loadCaloriesBurnedMessages = defineMessages<CaloriesBurnedMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
