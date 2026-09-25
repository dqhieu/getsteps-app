import { defineMessages } from "../../../load";
import type { RunningPaceCalculatorMessages } from "./en";

export type { RunningPaceCalculatorMessages };

export const loadRunningPaceCalculatorMessages = defineMessages<RunningPaceCalculatorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
