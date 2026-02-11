---
name: comparison-thumbnail
description: Generate "Steps vs Competitor" comparison thumbnails using ImageMagick. Places app icons side-by-side with VS badge on a branded gradient background at 1200x630 (OG image standard).
license: MIT
allowed-tools:
  - Bash
  - Read
  - Glob
---

# Comparison Thumbnail Generator

Generate branded "Steps vs [Competitor]" thumbnails for blog comparison pages using ImageMagick.

## When to Use

- Creating new comparison blog posts (Steps vs another app)
- Regenerating existing comparison thumbnails
- Batch-generating thumbnails for multiple competitors

## Quick Start

```
/comparison-thumbnail:generate "Strava" "public/blog/icons/Strava.webp"
```

## Requirements

- **ImageMagick 7+** (`brew install imagemagick`)
- Steps app icon at `public/app_icon.png`
- Competitor app icon (any format: PNG, JPG, WebP)

## Output

- Format: JPEG, 1200x630, quality 90
- Location: `public/blog/steps-vs-{slug}.jpg`

## Design Spec

```
┌─────────────────────────────────────────────────────┐
│         Dark gradient (#1F1F1F → #2A1A10)           │
│                                                     │
│     ┌────────┐                    ┌────────┐        │
│     │ Steps  │       VS           │ Rival  │        │
│     │  Icon  │    (#ED772F)       │  Icon  │        │
│     │ 180x180│                    │ 180x180│        │
│     └────────┘                    └────────┘        │
│      "Steps"                    "Rival Name"        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

- Icons: 180x180 with 36px rounded corners
- VS text: Helvetica Bold 60pt, Steps orange `#ED772F`
- Labels: Helvetica 24pt, white
- Icons offset 250px from center, labels 100px below center
