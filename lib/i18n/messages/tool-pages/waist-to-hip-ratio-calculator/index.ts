import { defineMessages } from "../../../load";
import type { WaistToHipRatioCalculatorMessages } from "./en";

export type { WaistToHipRatioCalculatorMessages };

export const loadWaistToHipRatioCalculatorMessages = defineMessages<WaistToHipRatioCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
