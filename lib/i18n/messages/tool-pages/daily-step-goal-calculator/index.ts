import { defineMessages } from "../../../load";
import type { DailyStepGoalCalculatorMessages } from "./en";

export type { DailyStepGoalCalculatorMessages };

export const loadDailyStepGoalCalculatorMessages = defineMessages<DailyStepGoalCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
