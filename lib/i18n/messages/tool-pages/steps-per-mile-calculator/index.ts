import { defineMessages } from "../../../load";
import type { StepsPerMileCalculatorMessages } from "./en";

export type { StepsPerMileCalculatorMessages };

export const loadStepsPerMileCalculatorMessages = defineMessages<StepsPerMileCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
