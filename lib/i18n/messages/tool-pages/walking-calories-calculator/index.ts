import { defineMessages } from "../../../load";
import type { WalkingCaloriesMessages } from "./en";

export type { WalkingCaloriesMessages };

export const loadWalkingCaloriesMessages = defineMessages<WalkingCaloriesMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
