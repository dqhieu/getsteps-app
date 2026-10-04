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
    <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
      <h2 className="text-lg font-semibold text-foreground mb-2">
        Quick Reference Table
      </h2>
      <p className="text-sm text-muted mb-6">
        Common step goals and their equivalent distances based on your profile
      </p>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                Steps
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                Distance
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                Calories
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr
                key={row.steps}
                className="border-b border-border  hover:bg-surface  transition-colors"
              >
                <td className="py-3 px-2">
                  <span className="font-semibold text-foreground">
                    {formatNumber(row.steps)}
                  </span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-foreground">
                    {formatDistance(row.distanceKm, "km")} km
                  </span>
                  <span className="text-muted text-sm ml-1">
                    ({formatDistance(row.distanceMiles, "miles")} mi)
                  </span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-foreground">
                    {formatNumber(row.caloriesBurned)} kcal
                  </span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-foreground">
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
