/**
 * Unit Conversion Utilities
 *
 * Centralized unit conversion functions for weight, height, and distance.
 */

// Weight conversions
export const KG_TO_LBS = 2.20462;
export const LBS_TO_KG = 0.453592;

// Height conversions
export const CM_TO_INCHES = 0.393701;
export const INCHES_TO_CM = 2.54;
export const FEET_TO_CM = 30.48;

// Distance conversions
export const KM_TO_MILES = 0.621371;
export const MILES_TO_KM = 1.60934;
export const CM_TO_KM = 100000;
export const METERS_TO_KM = 1000;

/**
 * Convert kilograms to pounds
 */
export function kgToLbs(kg: number): number {
  return kg * KG_TO_LBS;
}

/**
 * Convert pounds to kilograms
 */
export function lbsToKg(lbs: number): number {
  return lbs * LBS_TO_KG;
}

/**
 * Convert centimeters to inches
 */
export function cmToInches(cm: number): number {
  return cm * CM_TO_INCHES;
}

/**
 * Convert inches to centimeters
 */
export function inchesToCm(inches: number): number {
  return inches * INCHES_TO_CM;
}

/**
 * Convert feet and inches to centimeters
 */
export function feetInchesToCm(feet: number, inches: number): number {
  const totalInches = feet * 12 + inches;
  return totalInches * INCHES_TO_CM;
}

/**
 * Convert centimeters to feet and inches
 */
export function cmToFeetInches(cm: number): { feet: number; inches: number } {
  const totalInches = cm / INCHES_TO_CM;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return { feet, inches };
}

/**
 * Convert kilometers to miles
 */
export function kmToMiles(km: number): number {
  return km * KM_TO_MILES;
}

/**
 * Convert miles to kilometers
 */
export function milesToKm(miles: number): number {
  return miles * MILES_TO_KM;
}

/**
 * Convert meters to kilometers
 */
export function metersToKm(meters: number): number {
  return meters / METERS_TO_KM;
}

/**
 * Convert kilometers to meters
 */
export function kmToMeters(km: number): number {
  return km * METERS_TO_KM;
}

/**
 * Format number with thousands separator
 */
export function formatNumber(num: number): string {
  return num.toLocaleString("en-US");
}

/**
 * Format distance with appropriate precision
 */
export function formatDistance(distance: number, unit: "km" | "miles" | "m"): string {
  if (unit === "m") {
    return Math.round(distance).toString();
  }
  if (distance < 1) {
    return distance.toFixed(2);
  } else if (distance < 10) {
    return distance.toFixed(1);
  }
  return distance.toFixed(1);
}

/**
 * Format weight with appropriate precision
 */
export function formatWeight(weight: number, unit: "kg" | "lbs"): string {
  return weight.toFixed(1);
}

/**
 * Format time in minutes to hours and minutes
 */
export function formatTime(minutes: number): string {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  }
  return `${Math.round(minutes)} min`;
}

/**
 * Format calories
 */
export function formatCalories(calories: number): string {
  return Math.round(calories).toLocaleString("en-US");
}
