import { defineMessages } from "../../../load";
import type { ActivityToStepsMessages } from "./en";

export type { ActivityToStepsMessages };

export const loadActivityToStepsMessages = defineMessages<ActivityToStepsMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
