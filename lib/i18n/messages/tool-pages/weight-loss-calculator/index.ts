import { defineMessages } from "../../../load";
import type { WeightLossCalculatorMessages } from "./en";

export type { WeightLossCalculatorMessages };

export const loadWeightLossCalculatorMessages = defineMessages<WeightLossCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
