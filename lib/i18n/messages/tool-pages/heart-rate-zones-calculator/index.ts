import { defineMessages } from "../../../load";
import type { HeartRateZonesCalculatorMessages } from "./en";

export type { HeartRateZonesCalculatorMessages };

export const loadHeartRateZonesCalculatorMessages = defineMessages<HeartRateZonesCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
