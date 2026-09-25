/// <reference types="vite/client" />
import { describe, expect, it } from "vitest";
import { LOCALES } from "./config";

const modules = import.meta.glob<{ default: unknown }>("./messages/**/*.ts", { eager: true });

const namespaces = new Map<string, Map<string, unknown>>();
for (const [file, mod] of Object.entries(modules)) {
  const match = file.match(/^\.\/messages\/(.+)\/([^/]+)\.ts$/);
  if (!match || match[2] === "index" || match[2].endsWith(".test")) continue;
  const [, namespace, locale] = match;
  if (!namespaces.has(namespace)) namespaces.set(namespace, new Map());
  namespaces.get(namespace)!.set(locale, mod.default);
}

function placeholders(text: string): string[] {
  return [...text.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();
}

/** Returns a list of human-readable mismatches between `actual` and `expected`. */
function diffShape(expected: unknown, actual: unknown, path: string): string[] {
  if (typeof expected === "string") {
    if (typeof actual !== "string") return [`${path}: expected a string`];
    const want = placeholders(expected).join(",");
    const got = placeholders(actual).join(",");
    return want === got ? [] : [`${path}: placeholders {${got}} should be {${want}}`];
  }
  if (Array.isArray(expected)) {
    if (!Array.isArray(actual)) return [`${path}: expected an array`];
    if (actual.length !== expected.length) {
      return [`${path}: expected ${expected.length} items, got ${actual.length}`];
    }
    return expected.flatMap((item, i) => diffShape(item, actual[i], `${path}[${i}]`));
  }
  if (expected && typeof expected === "object") {
    if (!actual || typeof actual !== "object") return [`${path}: expected an object`];
    const want = Object.keys(expected);
    const got = Object.keys(actual as object);
    const missing = want.filter((key) => !got.includes(key)).map((key) => `${path}.${key}: missing`);
    const extra = got.filter((key) => !want.includes(key)).map((key) => `${path}.${key}: unexpected`);
    return [
      ...missing,
      ...extra,
      ...want
        .filter((key) => got.includes(key))
        .flatMap((key) =>
          diffShape(
            (expected as Record<string, unknown>)[key],
            (actual as Record<string, unknown>)[key],
            `${path}.${key}`,
          ),
        ),
    ];
  }
  return typeof actual === typeof expected ? [] : [`${path}: type mismatch`];
}

describe("message dictionaries", () => {
  it("found the dictionaries", () => {
    expect(namespaces.size).toBeGreaterThan(0);
  });

  for (const [namespace, locales] of namespaces) {
    describe(namespace, () => {
      it("has a dictionary for every locale", () => {
        expect([...locales.keys()].sort()).toEqual([...LOCALES].sort());
      });

      for (const locale of LOCALES.filter((l) => l !== "en")) {
        it(`${locale} matches the English shape and placeholders`, () => {
          expect(diffShape(locales.get("en"), locales.get(locale), namespace)).toEqual([]);
        });
      }
    });
  }
});
