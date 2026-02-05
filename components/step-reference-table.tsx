"use client";

import { useMemo } from "react";
import {
  type UserProfile,
  generateReferenceTable,
  formatNumber,
  formatDistance,
} from "@/lib/step-calculator";

interface StepReferenceTableProps {
  profile: UserProfile;
}

export function StepReferenceTable({ profile }: StepReferenceTableProps) {
  const tableData = useMemo(() => generateReferenceTable(profile), [profile]);

  return (
    <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
        Quick Reference Table
      </h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
        Common step goals and their equivalent distances based on your profile
      </p>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-neutral-700">
              <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                Steps
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                Distance
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                Calories
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr
                key={row.steps}
                className="border-b border-neutral-100 dark:border-neutral-700/50 hover:bg-neutral-50 dark:hover:bg-neutral-700/30 transition-colors"
              >
                <td className="py-3 px-2">
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    {formatNumber(row.steps)}
                  </span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-neutral-900 dark:text-white">
                    {formatDistance(row.distanceKm, "km")} km
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-500 text-sm ml-1">
                    ({formatDistance(row.distanceMiles, "miles")} mi)
                  </span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-neutral-900 dark:text-white">
                    {formatNumber(row.caloriesBurned)} kcal
                  </span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-neutral-900 dark:text-white">
                    {row.walkingTimeMinutes >= 60
                      ? `${Math.floor(row.walkingTimeMinutes / 60)}h ${row.walkingTimeMinutes % 60}m`
                      : `${row.walkingTimeMinutes} min`}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
