---
name: og-image-generator
description: Generate branded OG images (1200x630) with emoji badge, Bricolage Grotesque text, and accent color via Python/Pillow script.
---

# OG Image Generator

Generate branded Open Graph images (1200x630px) for social media sharing. Design: dark background with radial gradient, orange rounded-rect emoji badge, bold title, separator line, description, and branding text.

## Quick Start

### Single image

```bash
python3 ~/.claude/skills/og-image-generator/scripts/generate_og_image.py \
  --title "BMI Calculator" \
  --emoji "📊" \
  --desc "Calculate your Body Mass Index with health insights" \
  --filename bmi-calculator.png \
  --output-dir public/og
```

### Batch via JSON config

Create a config JSON file, then run:

```bash
python3 ~/.claude/skills/og-image-generator/scripts/generate_og_image.py \
  --config og-config.json \
  --output-dir public/og
```

Config JSON format:

```json
{
  "brand_text": "Steps · getsteps.app",
  "font_dir": "~/Downloads/Bricolage_Grotesque/static",
  "accent_color": "#ED772F",
  "bg_color": "#1A1A1A",
  "items": [
    {"filename": "tool.png", "title": "Tool Name", "emoji": "🔥", "description": "Short desc"}
  ]
}
```

## Configuration

Override defaults via environment variables or `.env` file:

| Variable | Default | Description |
|---|---|---|
| `OG_FONT_DIR` | `~/Downloads/Bricolage_Grotesque/static` | Bricolage Grotesque static fonts dir |
| `OG_BRAND_TEXT` | `Steps · getsteps.app` | Bottom branding text |
| `OG_ACCENT_COLOR` | `#ED772F` | Accent color (badge, separator, bottom bar) |
| `OG_BG_COLOR` | `#1A1A1A` | Background color |

## Design Layout (Sketch B)

```
┌──────────────────────────────────┐
│                                  │
│         ┌──────────┐             │
│         │  emoji   │  ← orange rounded-rect badge
│         └──────────┘             │
│                                  │
│       Bold Title Text            │  ← white, Bricolage Grotesque Bold 52pt
│          ────────                │  ← orange separator line
│     Description text here        │  ← gray #AAA, Regular 22pt
│                                  │
│                                  │
│     Steps · getsteps.app         │  ← gray #666, Regular 16pt
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │  ← 4px orange accent bar
└──────────────────────────────────┘
```

## Dependencies

- Python 3.8+
- Pillow (`pip install Pillow`)
- Bricolage Grotesque font (static TTF files)
- macOS Apple Color Emoji font (for emoji rendering)

## Scripts

- `scripts/generate_og_image.py` - Main generator script (single or batch mode)
- `scripts/test_generate_og_image.py` - Unit tests (run with `pytest`)
