/**
 * Workout Stats overlay renderer
 *
 * Draws a WorkoutCardData onto a 2D canvas at export resolution as a
 * TRANSPARENT PNG — the background is deliberately never filled, so the export
 * can be layered over the user's own photo in Instagram Stories.
 *
 * The same canvas is shown on the page scaled down by CSS, so the preview and
 * the downloaded PNG are the same pixels — there is no second render path.
 *
 * Content is limited to the three stats. No title, date, or wordmark: anything
 * extra competes with the photo underneath.
 */

import type { WorkoutCardData } from "./workout-card";

/** Square canvas — works as a feed post or a resizable Stories sticker. */
export const CARD_WIDTH = 1080;
export const CARD_HEIGHT = 1080;

const CENTER_X = CARD_WIDTH / 2;
const TEXT = "#FFFFFF";
const MUTED = "rgba(255, 255, 255, 0.72)";

/** Baseline of the first caption; each block repeats every BLOCK_PITCH below it.
 *  Chosen so the three blocks sit centred in the square canvas. */
const FIRST_LABEL_Y = 220;
const BLOCK_PITCH = 260;
/** Drop from a caption's baseline to its figure's baseline. */
const VALUE_OFFSET = 140;
/** Shared by a figure and its unit — they are set as one continuous run. */
const VALUE_SIZE = 160;

export const FALLBACK_FONT = "system-ui, -apple-system, sans-serif";

function font(weight: number, size: number, family: string): string {
  return `${weight} ${size}px ${family}`;
}

/**
 * Overlays land on unpredictable photos, so every mark gets a soft drop shadow
 * — without it white text vanishes against a bright sky or snow.
 */
function withShadow(ctx: CanvasRenderingContext2D, draw: () => void) {
  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.55)";
  ctx.shadowBlur = 28;
  ctx.shadowOffsetY = 4;
  draw();
  ctx.restore();
}

/** Small uppercase caption above each figure. */
function drawLabel(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  family: string
) {
  ctx.save();
  ctx.font = font(600, 30, family);
  ctx.fillStyle = MUTED;
  ctx.letterSpacing = "5px";
  // Trailing letter-spacing is included in the advance width, so nudge back by
  // half of it to keep the caption optically centred over its figure.
  ctx.fillText(text.toUpperCase(), x - 2.5, y);
  ctx.restore();
}

/**
 * One stat block: a small caption with its figure beneath it.
 *
 * Value and unit share one face, size and colour, so they are drawn as a single
 * centred run — "10.00 km" — with no width maths of their own.
 */
function drawStat(
  ctx: CanvasRenderingContext2D,
  labelY: number,
  label: string,
  value: string,
  unit: string,
  family: string
) {
  ctx.textAlign = "center";
  drawLabel(ctx, label, CENTER_X, labelY, family);

  ctx.font = font(700, VALUE_SIZE, family);
  ctx.fillStyle = TEXT;
  ctx.fillText(
    unit ? `${value} ${unit}` : value,
    CENTER_X,
    labelY + VALUE_OFFSET
  );
}

export function drawWorkoutCard(
  ctx: CanvasRenderingContext2D,
  data: WorkoutCardData,
  fontFamily: string = FALLBACK_FONT
) {
  const family = fontFamily || FALLBACK_FONT;

  // Cleared, never filled — transparency is the whole point of this export.
  ctx.clearRect(0, 0, CARD_WIDTH, CARD_HEIGHT);
  ctx.textBaseline = "alphabetic";

  withShadow(ctx, () => {
    drawStat(
      ctx,
      FIRST_LABEL_Y,
      "Distance",
      data.distanceValue,
      data.distanceUnit,
      family
    );
    drawStat(
      ctx,
      FIRST_LABEL_Y + BLOCK_PITCH,
      "Pace",
      data.paceValue,
      data.paceUnit,
      family
    );
    drawStat(
      ctx,
      FIRST_LABEL_Y + BLOCK_PITCH * 2,
      "Time",
      data.durationValue,
      "",
      family
    );
  });

  ctx.textAlign = "left";
}
