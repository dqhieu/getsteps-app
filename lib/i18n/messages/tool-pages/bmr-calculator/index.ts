import { defineMessages } from "../../../load";
import type { BmrCalculatorMessages } from "./en";

export type { BmrCalculatorMessages };

export const loadBmrCalculatorMessages = defineMessages<BmrCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
