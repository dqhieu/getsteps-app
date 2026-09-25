import type { Locale } from "./config";

export type MessageLoaders<M> = Record<Locale, () => Promise<{ default: M }>>;

/**
 * Wraps per-locale dynamic imports so a page only evaluates the dictionary
 * for the locale it renders.
 */
export function defineMessages<M>(loaders: MessageLoaders<M>) {
  return async (locale: Locale): Promise<M> => (await loaders[locale]()).default;
}
