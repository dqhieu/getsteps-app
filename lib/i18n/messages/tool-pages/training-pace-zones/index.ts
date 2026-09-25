import { defineMessages } from "../../../load";
import type { TrainingPaceZonesMessages } from "./en";

export type { TrainingPaceZonesMessages };

export const loadTrainingPaceZonesMessages = defineMessages<TrainingPaceZonesMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
