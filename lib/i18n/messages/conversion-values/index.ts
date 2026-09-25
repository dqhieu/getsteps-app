import { defineMessages } from "../../load";
import type { ConversionValuesMessages } from "./en";

export type { ConversionValuesMessages };

export const loadConversionValuesMessages = defineMessages<ConversionValuesMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
