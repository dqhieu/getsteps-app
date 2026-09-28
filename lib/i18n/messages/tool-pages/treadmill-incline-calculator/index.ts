import { defineMessages } from "../../../load";
import type { TreadmillInclineCalculatorMessages } from "./en";

export type { TreadmillInclineCalculatorMessages };

export const loadTreadmillInclineCalculatorMessages =
  defineMessages<TreadmillInclineCalculatorMessages>({
    en: () => import("./en"),
    zh: () => import("./zh"),
    fr: () => import("./fr"),
    de: () => import("./de"),
    it: () => import("./it"),
    "pt-BR": () => import("./pt-BR"),
    es: () => import("./es"),
    ru: () => import("./ru"),
    ja: () => import("./ja"),
    ko: () => import("./ko"),
  });
