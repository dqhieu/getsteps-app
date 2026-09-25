import { defineMessages } from "../../../load";
import type { TreadmillCalorieCalculatorMessages } from "./en";

export type { TreadmillCalorieCalculatorMessages };

export const loadTreadmillCalorieCalculatorMessages =
  defineMessages<TreadmillCalorieCalculatorMessages>({
    en: () => import("./en"),
    zh: () => import("./zh"),
    fr: () => import("./fr"),
    de: () => import("./de"),
    it: () => import("./it"),
    "pt-BR": () => import("./pt-BR"),
    es: () => import("./es"),
  });
