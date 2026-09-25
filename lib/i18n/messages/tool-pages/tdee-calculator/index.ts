import { defineMessages } from "../../../load";
import type { TdeeCalculatorMessages } from "./en";

export type { TdeeCalculatorMessages };

export const loadTdeeCalculatorMessages = defineMessages<TdeeCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
