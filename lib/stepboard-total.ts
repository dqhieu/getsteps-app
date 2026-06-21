export function normalizeStepboardTotal(value: unknown): string | null {
  if (typeof value === "bigint") {
    return value >= BigInt(0) ? value.toString() : null;
  }

  if (typeof value === "number") {
    return Number.isSafeInteger(value) && value >= 0 ? value.toString() : null;
  }

  if (typeof value !== "string" || !/^\d+$/.test(value)) {
    return null;
  }

  return value.replace(/^0+(?=\d)/, "");
}

export function formatStepboardTotal(total: string): string {
  return total.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
