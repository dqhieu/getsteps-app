import { defineMessages } from "../../../load";
import type { GpxViewerMessages } from "./en";

export type { GpxViewerMessages };

export const loadGpxViewerMessages = defineMessages<GpxViewerMessages>({
  en: () => import("./en"),
  zh: () => import("./zh"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  it: () => import("./it"),
  "pt-BR": () => import("./pt-BR"),
  es: () => import("./es"),
});
