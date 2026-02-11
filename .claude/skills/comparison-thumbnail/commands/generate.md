---
allowed-tools: Bash, Read, Glob
argument-hint: "<competitor-name>" "<icon-path>"
description: Generate a Steps vs Competitor comparison thumbnail
---

# Generate Comparison Thumbnail

Generate a branded "Steps vs [Competitor]" thumbnail for a blog comparison page.

**Usage:** `$ARGUMENTS`

The arguments should be: `"<Competitor Name>" "<path/to/competitor-icon>"`

**Examples:**
```bash
/comparison-thumbnail:generate "Strava" "public/blog/icons/Strava.webp"
/comparison-thumbnail:generate "Apple Fitness" "public/blog/icons/Apple Fitness.webp"
/comparison-thumbnail:generate "Pedometer++" "public/blog/icons/Pedometer++.webp"
/comparison-thumbnail:generate "Nike Run Club" "public/blog/icons/Nike Run Club.webp"
```

## Workflow

### 1. Parse Arguments

Extract from `$ARGUMENTS`:
- **Competitor name** — display label (e.g. "Apple Fitness")
- **Icon path** — relative path to competitor icon file

If only a name is given, search for the icon:
```bash
ls public/blog/icons/
```

### 2. Derive Output Slug

Convert competitor name to kebab-case slug:
- "Apple Fitness" → `apple-fitness`
- "Pedometer++" → `pedometer-plus-plus`
- "Nike Run Club" → `nike-run-club`

Output path: `public/blog/steps-vs-{slug}.jpg`

### 3. Verify Prerequisites

```bash
magick -version
ls public/app_icon.png
ls "<icon-path>"
```

If ImageMagick is not installed, tell the user to run `brew install imagemagick`.

### 4. Generate Thumbnail

Run this ImageMagick command (substitute variables):

```bash
magick \
  \( -size 1200x630 gradient:"#1F1F1F"-"#2A1A10" \) \
  \( "public/app_icon.png" -resize 180x180 \
     \( -size 180x180 xc:none -draw "roundrectangle 0,0,179,179,36,36" \) \
     -compose DstIn -composite \) \
  -geometry +220+175 -compose Over -composite \
  \( "<ICON_PATH>" -resize 180x180 \
     \( -size 180x180 xc:none -draw "roundrectangle 0,0,179,179,36,36" \) \
     -compose DstIn -composite \) \
  -geometry +800+175 -compose Over -composite \
  -font "Helvetica-Bold" -pointsize 60 -fill "#ED772F" \
  -gravity Center -annotate +0-30 "VS" \
  -font "Helvetica" -pointsize 24 -fill "white" \
  -annotate -290+100 "Steps" \
  -annotate +290+100 "<COMPETITOR_NAME>" \
  -quality 90 "public/blog/steps-vs-<SLUG>.jpg"
```

Replace:
- `<ICON_PATH>` with the competitor icon path
- `<COMPETITOR_NAME>` with the display name
- `<SLUG>` with the kebab-case slug

### 5. Verify Output

```bash
file public/blog/steps-vs-<SLUG>.jpg
```

Confirm it's a JPEG image at 1200x630. Show the image to the user for review.

## Batch Mode

To generate all thumbnails at once, loop over icons in `public/blog/icons/`:

```bash
for icon in public/blog/icons/*; do
  name=$(basename "$icon" | sed 's/\.[^.]*$//')
  # Generate thumbnail for each
done
```

## Customization

| Parameter | Default | Notes |
|-----------|---------|-------|
| Canvas size | 1200x630 | OG image standard |
| Icon size | 180x180 | Rounded corners 36px |
| Background | `#1F1F1F` → `#2A1A10` | Dark gradient |
| VS color | `#ED772F` | Steps brand orange |
| Label color | `white` | Below each icon |
| Quality | 90 | JPEG output |
