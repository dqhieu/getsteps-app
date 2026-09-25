import { defineMessages } from "../../../load";
import type { StepDistanceCalculatorMessages } from "./en";

export type { StepDistanceCalculatorMessages };

export const loadStepDistanceCalculatorMessages = defineMessages<StepDistanceCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
