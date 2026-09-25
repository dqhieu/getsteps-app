import { defineMessages } from "../../../load";
import type { RaceTimePredictorMessages } from "./en";

export type { RaceTimePredictorMessages };

export const loadRaceTimePredictorMessages = defineMessages<RaceTimePredictorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
