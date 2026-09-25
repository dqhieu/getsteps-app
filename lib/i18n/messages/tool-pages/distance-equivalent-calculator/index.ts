import { defineMessages } from "../../../load";
import type { DistanceEquivalentCalculatorMessages } from "./en";

export type { DistanceEquivalentCalculatorMessages };

export const loadDistanceEquivalentCalculatorMessages = defineMessages<DistanceEquivalentCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
