import { defineMessages } from "../../../load";
import type { WeightLossWalkingMessages } from "./en";

export type { WeightLossWalkingMessages };

export const loadWeightLossWalkingMessages = defineMessages<WeightLossWalkingMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
