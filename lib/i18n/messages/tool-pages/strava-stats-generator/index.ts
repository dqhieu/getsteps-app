import { defineMessages } from "../../../load";
import type { StravaStatsGeneratorMessages } from "./en";

export type { StravaStatsGeneratorMessages };

export const loadStravaStatsGeneratorMessages = defineMessages<StravaStatsGeneratorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
