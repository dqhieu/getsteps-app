import { defineMessages } from "../../../load";
import type { RestingHeartRateCalculatorMessages } from "./en";

export type { RestingHeartRateCalculatorMessages };

export const loadRestingHeartRateCalculatorMessages = defineMessages<RestingHeartRateCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
