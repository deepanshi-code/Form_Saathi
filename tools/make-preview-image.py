# Makes img/preview.png, the picture shown when a Form Saathi link is shared
# (WhatsApp, Facebook, LinkedIn). 1200 x 630 is the size those apps expect.
#   python tools/make-preview-image.py
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONTS = Path("C:/Windows/Fonts")
W, H = 1200, 630
NAVY, BLUE, AMBER, WHITE, SOFT = "#0b1f3a", "#2563eb", "#f59e0b", "#ffffff", "#c7d6ee"

def font(name, size):
    return ImageFont.truetype(str(FONTS / name), size)

img = Image.new("RGB", (W, H), NAVY)
d = ImageDraw.Draw(img)

# Soft blue glow in the corner
glow = Image.new("RGB", (W, H), NAVY)
gd = ImageDraw.Draw(glow)
for r in range(520, 0, -8):
    t = r / 520
    c = tuple(int(a * t + b * (1 - t)) for a, b in zip((11, 31, 58), (37, 99, 235)))
    gd.ellipse((W - 260 - r, -200 - r, W - 260 + r, -200 + r), fill=c)
img = Image.blend(img, glow, 0.55)
d = ImageDraw.Draw(img)

# Logo: rounded square with the letter "स"
d.rounded_rectangle((80, 80, 180, 180), radius=26, fill=BLUE)
d.text((130, 128), "स", font=font("Nirmala.ttc", 64), fill=WHITE, anchor="mm")
d.text((210, 130), "Form Saathi", font=font("segoeuib.ttf", 52), fill=WHITE, anchor="lm")

d.text((80, 270), "Fill any form", font=font("segoeuib.ttf", 82), fill=WHITE)
d.text((80, 365), "the right way", font=font("segoeuib.ttf", 82), fill=WHITE)
d.text((84, 480), "Bank, government, college and international forms,", font=font("segoeui.ttf", 34), fill=SOFT)
d.text((84, 525), "box by box, in English and Hindi. Free.", font=font("segoeui.ttf", 34), fill=SOFT)
d.rectangle((80, 590, 300, 598), fill=AMBER)

out = ROOT / "img" / "preview.png"
out.parent.mkdir(exist_ok=True)
img.save(out, optimize=True)
print("wrote", out)
