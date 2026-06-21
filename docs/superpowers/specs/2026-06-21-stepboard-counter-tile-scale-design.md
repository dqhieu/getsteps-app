# Design Update: Unified and Larger Stepboard Counter Tiles

## Goal

Render commas inside the same retro split-flap tiles as digits and increase the
counter's tile size at every responsive breakpoint.

## Tile Rendering

Use one tile component for every character in the formatted total. Digits and
commas share the same background, seam, shadow, typography, dimensions, and
one-time staggered flip animation. Commas retain their punctuation glyph but no
longer render as unboxed separators.

Keep thousands groups together when wrapping. A comma belongs to the group that
precedes it, so wrapping may occur only after a comma tile.

## Responsive Scale

Increase tile dimensions by approximately 25 percent:

- default/mobile: from `32 × 44px` to `40 × 56px`, with `30px` type;
- small screens: from `40 × 56px` to `48 × 64px`, with `36px` type;
- medium and larger: from `48 × 64px` to `56 × 80px`, with `48px` type.

Keep compact horizontal gaps so mobile layouts wrap at group boundaries rather
than overflowing. Loading placeholders use the same enlarged dimensions and
render the expected number of blank character tiles.

## Accessibility and Behavior

Do not change the live RPC request, formatting, error collapse, reduced-motion
behavior, or accessible aggregate label. Decorative character tiles remain
hidden from assistive technology.

## Verification

Add a component test proving both commas are rendered by the shared tile element.
Run focused and full tests, TypeScript, and the production build. Visually verify
the larger counter at desktop and 320px mobile widths, including group-boundary
wrapping and absence of horizontal overflow.
