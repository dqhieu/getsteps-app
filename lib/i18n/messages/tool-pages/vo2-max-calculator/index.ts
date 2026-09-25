import { defineMessages } from "../../../load";
import type { Vo2MaxCalculatorMessages } from "./en";

export type { Vo2MaxCalculatorMessages };

export const loadVo2MaxCalculatorMessages = defineMessages<Vo2MaxCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
