#!/usr/bin/env python3
"""Tests for generate_og_image.py"""

import json
import os
import tempfile
import unittest

from generate_og_image import generate_og_image, get_config, hex_to_rgb


class TestHexToRgb(unittest.TestCase):
    def test_standard_hex(self):
        self.assertEqual(hex_to_rgb("#ED772F"), (237, 119, 47))

    def test_without_hash(self):
        self.assertEqual(hex_to_rgb("1A1A1A"), (26, 26, 26))

    def test_black(self):
        self.assertEqual(hex_to_rgb("#000000"), (0, 0, 0))

    def test_white(self):
        self.assertEqual(hex_to_rgb("#FFFFFF"), (255, 255, 255))


class TestGetConfig(unittest.TestCase):
    def test_returns_dict_with_required_keys(self):
        config = get_config()
        self.assertIn("font_dir", config)
        self.assertIn("brand_text", config)
        self.assertIn("accent", config)
        self.assertIn("bg", config)

    def test_accent_is_rgb_tuple(self):
        config = get_config()
        self.assertEqual(len(config["accent"]), 3)
        self.assertTrue(all(0 <= c <= 255 for c in config["accent"]))


class TestGenerateOgImage(unittest.TestCase):
    def setUp(self):
        self.config = get_config()
        self.tmpdir = tempfile.mkdtemp()

    def test_generates_png_file(self):
        path = generate_og_image(
            filename="test.png",
            title="Test Title",
            emoji="🔥",
            description="Test description",
            output_dir=self.tmpdir,
            config=self.config,
        )
        self.assertTrue(os.path.exists(path))
        self.assertTrue(path.endswith(".png"))
        self.assertGreater(os.path.getsize(path), 0)

    def test_image_dimensions(self):
        from PIL import Image

        path = generate_og_image(
            filename="dim_test.png",
            title="Dimensions",
            emoji="📏",
            description="Check dimensions",
            output_dir=self.tmpdir,
            config=self.config,
        )
        img = Image.open(path)
        self.assertEqual(img.size, (1200, 630))

    def test_image_is_rgb(self):
        from PIL import Image

        path = generate_og_image(
            filename="mode_test.png",
            title="Mode Test",
            emoji="🎯",
            description="Check mode",
            output_dir=self.tmpdir,
            config=self.config,
        )
        img = Image.open(path)
        self.assertEqual(img.mode, "RGB")

    def tearDown(self):
        import shutil
        shutil.rmtree(self.tmpdir, ignore_errors=True)


if __name__ == "__main__":
    unittest.main()
