#!/usr/bin/env python3
"""Generate branded OG images (1200x630px) with emoji icon badge, title, and description.

Usage:
    python3 generate_og_image.py --config config.json [--output-dir ./public/og]
    python3 generate_og_image.py --title "My Tool" --emoji "🔥" --desc "Tool description" --filename my-tool.png

Config JSON format:
{
  "brand_text": "Steps · getsteps.app",
  "font_dir": "/path/to/BricolageGrotesque/static",
  "items": [
    {"filename": "tool.png", "title": "Tool Name", "emoji": "🔥", "description": "Short desc"}
  ]
}

Environment variables (optional overrides):
  OG_FONT_DIR       - Path to Bricolage Grotesque static font directory
  OG_BRAND_TEXT     - Branding text (default: "Steps · getsteps.app")
  OG_ACCENT_COLOR   - Hex accent color (default: "#ED772F")
  OG_BG_COLOR       - Hex background color (default: "#1A1A1A")
"""

import argparse
import json
import math
import os
import sys

from PIL import Image, ImageDraw, ImageFont


def hex_to_rgb(hex_color: str) -> tuple:
    h = hex_color.lstrip("#")
    return tuple(int(h[i : i + 2], 16) for i in (0, 2, 4))


def load_env():
    """Load .env files in priority order."""
    from pathlib import Path

    env_paths = [
        Path(__file__).parent.parent / ".env",
        Path.home() / ".claude" / "skills" / ".env",
        Path.home() / ".claude" / ".env",
    ]
    for env_path in reversed(env_paths):
        if env_path.exists():
            for line in env_path.read_text().splitlines():
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, val = line.split("=", 1)
                    os.environ.setdefault(key.strip(), val.strip().strip("\"'"))


def get_config():
    load_env()
    return {
        "font_dir": os.environ.get(
            "OG_FONT_DIR",
            os.path.expanduser(
                "~/Downloads/Bricolage_Grotesque/static"
            ),
        ),
        "brand_text": os.environ.get("OG_BRAND_TEXT", "Steps · getsteps.app"),
        "accent": hex_to_rgb(os.environ.get("OG_ACCENT_COLOR", "#ED772F")),
        "bg": hex_to_rgb(os.environ.get("OG_BG_COLOR", "#1A1A1A")),
    }


def render_emoji(emoji_char: str, size: int = 64) -> Image.Image:
    font = ImageFont.truetype("/System/Library/Fonts/Apple Color Emoji.ttc", size)
    canvas = Image.new("RGBA", (250, 200), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    draw.text((40, 15), emoji_char, font=font, embedded_color=True)
    bbox = canvas.getbbox()
    return canvas.crop(bbox) if bbox else canvas


def center_text(draw: ImageDraw.Draw, y: int, text: str, font, fill, width: int):
    bb = draw.textbbox((0, 0), text, font=font)
    x = (width - (bb[2] - bb[0])) // 2
    draw.text((x, y), text, fill=fill, font=font)


def generate_og_image(
    filename: str,
    title: str,
    emoji: str,
    description: str,
    output_dir: str,
    config: dict,
) -> str:
    W, H = 1200, 630
    BG = config["bg"]
    ACCENT = config["accent"]
    WHITE = (255, 255, 255)
    GRAY = (170, 170, 170)
    DARK_GRAY = (100, 100, 100)

    font_dir = config["font_dir"]
    title_bold = ImageFont.truetype(f"{font_dir}/BricolageGrotesque-Bold.ttf", 52)
    desc_font = ImageFont.truetype(f"{font_dir}/BricolageGrotesque-Regular.ttf", 22)
    brand_font = ImageFont.truetype(f"{font_dir}/BricolageGrotesque-Regular.ttf", 16)

    img = Image.new("RGBA", (W, H), BG)

    # Subtle radial gradient
    for y_pos in range(H):
        for x_pos in range(W):
            dist = math.sqrt((x_pos - W // 2) ** 2 + (y_pos - H // 2) ** 2) / 500
            light = max(0, int(12 * (1 - dist)))
            r, g, b, a = img.getpixel((x_pos, y_pos))
            img.putpixel(
                (x_pos, y_pos),
                (min(r + light, 255), min(g + light, 255), min(b + light, 255), a),
            )

    draw = ImageDraw.Draw(img)

    # Orange rounded-rect badge for emoji
    badge_w, badge_h = 120, 120
    badge_x = (W - badge_w) // 2
    badge_y = 115
    draw.rounded_rectangle(
        [badge_x, badge_y, badge_x + badge_w, badge_y + badge_h],
        radius=24,
        fill=ACCENT,
    )

    # Emoji centered on badge
    em = render_emoji(emoji, 64)
    em_x = badge_x + (badge_w - em.width) // 2
    em_y = badge_y + (badge_h - em.height) // 2
    img.paste(em, (em_x, em_y), em)

    # Title
    center_text(draw, 270, title, title_bold, WHITE, W)

    # Orange separator line
    line_w = 60
    draw.rectangle([(W - line_w) // 2, 340, (W + line_w) // 2, 344], fill=ACCENT)

    # Description
    center_text(draw, 370, description, desc_font, GRAY, W)

    # Branding
    brand = config["brand_text"]
    bb = draw.textbbox((0, 0), brand, font=brand_font)
    bx = (W - (bb[2] - bb[0])) // 2
    draw.text((bx, H - 60), brand, fill=DARK_GRAY, font=brand_font)

    # Bottom accent bar
    draw.rectangle([0, H - 4, W, H], fill=ACCENT)

    # Save as RGB PNG
    os.makedirs(output_dir, exist_ok=True)
    out = Image.new("RGB", (W, H), BG)
    out.paste(img, (0, 0), img)
    output_path = os.path.join(output_dir, filename)
    out.save(output_path, "PNG", optimize=True)
    return output_path


def main():
    parser = argparse.ArgumentParser(description="Generate branded OG images")
    parser.add_argument("--config", help="Path to JSON config file")
    parser.add_argument("--output-dir", default="public/og", help="Output directory")
    parser.add_argument("--title", help="Image title (single image mode)")
    parser.add_argument("--emoji", help="Emoji icon (single image mode)")
    parser.add_argument("--desc", help="Description text (single image mode)")
    parser.add_argument("--filename", help="Output filename (single image mode)")
    args = parser.parse_args()

    config = get_config()

    if args.config:
        with open(args.config) as f:
            file_config = json.load(f)
        if "font_dir" in file_config:
            config["font_dir"] = file_config["font_dir"]
        if "brand_text" in file_config:
            config["brand_text"] = file_config["brand_text"]
        if "accent_color" in file_config:
            config["accent"] = hex_to_rgb(file_config["accent_color"])
        if "bg_color" in file_config:
            config["bg"] = hex_to_rgb(file_config["bg_color"])
        items = file_config.get("items", [])
    elif args.title and args.emoji and args.desc and args.filename:
        items = [
            {
                "filename": args.filename,
                "title": args.title,
                "emoji": args.emoji,
                "description": args.desc,
            }
        ]
    else:
        parser.error("Provide either --config or all of --title/--emoji/--desc/--filename")
        return

    output_dir = args.output_dir
    for item in items:
        path = generate_og_image(
            filename=item["filename"],
            title=item["title"],
            emoji=item["emoji"],
            description=item["description"],
            output_dir=output_dir,
            config=config,
        )
        size_kb = os.path.getsize(path) / 1024
        print(f"Generated: {path} ({size_kb:.0f} KB)")

    print(f"\nDone! {len(items)} image(s) generated.")


if __name__ == "__main__":
    main()
