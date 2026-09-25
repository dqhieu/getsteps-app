import { defineMessages } from "../../../load";
import type { RuckingCalorieCalculatorMessages } from "./en";

export type { RuckingCalorieCalculatorMessages };

export const loadRuckingCalorieCalculatorMessages =
  defineMessages<RuckingCalorieCalculatorMessages>({
    en: () => import("./en"),
    zh: () => import("./zh"),
    fr: () => import("./fr"),
    de: () => import("./de"),
    it: () => import("./it"),
    "pt-BR": () => import("./pt-BR"),
    es: () => import("./es"),
  });
