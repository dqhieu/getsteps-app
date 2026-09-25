import { defineMessages } from "../../../load";
import type { PaceToSpeedConverterMessages } from "./en";

export type { PaceToSpeedConverterMessages };

export const loadPaceToSpeedConverterMessages = defineMessages<PaceToSpeedConverterMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
