import { defineMessages } from "../../../load";
import type { WaterIntakeCalculatorMessages } from "./en";

export type { WaterIntakeCalculatorMessages };

export const loadWaterIntakeCalculatorMessages = defineMessages<WaterIntakeCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
