import { defineMessages } from "../../../load";
import type { MarathonPacePredictorMessages } from "./en";

export type { MarathonPacePredictorMessages };

export const loadMarathonPacePredictorMessages = defineMessages<MarathonPacePredictorMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
