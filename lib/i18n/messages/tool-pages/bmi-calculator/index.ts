import { defineMessages } from "../../../load";
import type { BmiCalculatorMessages } from "./en";

export type { BmiCalculatorMessages };

export const loadBmiCalculatorMessages = defineMessages<BmiCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
