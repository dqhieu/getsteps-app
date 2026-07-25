/**
 * Getting a canvas out of the browser as a PNG.
 *
 * Both helpers exist because of browser-specific rules that are easy to trip
 * over; the comments on each spell out which rule is being satisfied.
 */

/**
 * Encode a canvas to a PNG File *synchronously*.
 *
 * The async `canvas.toBlob()` would be the natural choice, but awaiting it
 * first pushes the save into a later task, where browsers no longer see it as
 * something the user asked for and may block it as an automatic download.
 * The synchronous `toDataURL` keeps the whole save in the click's own task.
 */
export function canvasToPngFile(
  canvas: HTMLCanvasElement,
  fileName: string
): File {
  const base64 = canvas.toDataURL("image/png").split(",")[1];
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new File([bytes], fileName, { type: "image/png" });
}

/** How long the object URL is kept alive after the click. */
const REVOKE_DELAY_MS = 10_000;

/** Save a file via a synthetic anchor click. */
export function downloadFile(file: File) {
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = file.name;

  // Firefox ignores a synthetic click on an anchor that is not in the document,
  // and the object URL has to outlive the click for the download to complete —
  // revoking it in the same tick cancels the save.
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), REVOKE_DELAY_MS);
}
