import { defineMessages } from "../../../load";
import type { IdealWeightCalculatorMessages } from "./en";

export type { IdealWeightCalculatorMessages };

export const loadIdealWeightCalculatorMessages = defineMessages<IdealWeightCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
