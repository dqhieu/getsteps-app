import { defineMessages } from "../../../load";
import type { WalkingTimeCalculatorMessages } from "./en";

export type { WalkingTimeCalculatorMessages };

export const loadWalkingTimeCalculatorMessages = defineMessages<WalkingTimeCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
