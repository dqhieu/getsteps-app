import { defineMessages } from "../../../load";
import type { BodyFatCalculatorMessages } from "./en";

export type { BodyFatCalculatorMessages };

export const loadBodyFatCalculatorMessages = defineMessages<BodyFatCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
