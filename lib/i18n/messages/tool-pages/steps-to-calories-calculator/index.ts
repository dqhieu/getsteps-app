import { defineMessages } from "../../../load";
import type { StepsToCaloriesMessages } from "./en";

export type { StepsToCaloriesMessages };

export const loadStepsToCaloriesMessages = defineMessages<StepsToCaloriesMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
