# news-image-20-nov-2026 — entry v10

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/nekonyun/news-image-20-nov-2026/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/nekonyun/news-image-20-nov-2026/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

The World in One Day — Friday 20 November 2026. Entry for the make.fun bounty
[news-image-20261120](https://make.fun/bounty/news-image-20261120):
one image summing up the world's news of Friday 20 November 2026.

This is the v10 redesign of the v9 entry (same 20 stories, same facts,
rebuilt page layout). v9 was submitted 20 November 2026 and ranked 1541 of
9,544 (score 975,354); v10 is a second entry for the same bounty.

## The image

A newspaper front page, drawn programmatically and rendered to
`entry.png` (1024×1024, PNG):

- **Top 10 most viral stories, numbered 1–10:** Russia hits three Kyiv
  bridges; Houthi missiles intercepted over Riyadh; the International Youth
  Strike sweeps 25+ European countries; Cyclone Akvan hits Odisha; India vs
  New Zealand, 1st Test, Day 2; Harris meets Macron in Paris; Asia stocks
  plunge; COP31 ends with no deal; Australia's defence bill passes; a Sydney
  man is charged with terrorism. Each card carries its date (with the year)
  and its source in parentheses. Descriptions and briefs are written in
  natural English (full sentences, simple words).
- **10 briefs, numbered 11.–20.:** Nigeria's digital trade deal; the ANC
  NEC meeting in Gauteng; the M5.6 quake in the Loyalty Islands; Category 4
  Cyclone Xavier; Samsung names Won-Joon Choi; the US court limits on
  Rollins' religious emails; Mark Speakman resigns; the CGIL general strike
  in Italy; Spain's Franco-death anniversary demonstrations; the Osun mob
  killing. Every brief carries a flag and its source.
- **Coverage:** 20 stories across 7 regions (Asia 4, Europe 5, Americas 1,
  Middle East 1, Africa 3, Oceania 5, Global 1) and 7 fields (Politics 7,
  Economy 3, Sci-Tech 1, Justice 3, War 2, Disasters 3, Sports 1).
- **Stat strip:** six verified numbers — 25+ countries in the youth strike,
  3 lakh+ evacuated for Cyclone Akvan, 423 rescue teams in Odisha, 368 NZ
  first-innings total, 175* Nicholls not out, 1.5°C the COP31 limit.
- **Weather strip:** 10 cities from the Top 10 stories, with temperature,
  condition, and wind direction + speed.
- **World map:** a pixel-dot map with numbered pins for the Top 10 stories.
- **DATE CHECK footer:** the big 19 November stories deliberately left out
  (GTA VI launch, the Trump–Xi–Putin trilateral summit, the Epstein Files
  Transparency Act signing, the Anthropic IPO, and more), so nothing from
  yesterday is shown as Friday's news.
- **Sources line:** the five most-cited outlets (Reuters, Wisevoter,
  Bangkok Post, SimpleLife.news, TrueNorth News), plus the honesty footer:
  every story happened, or was first reported, on Friday 20 November 2026
  in at least one time zone, and claims are attributed, not stated as fact.

## The design (v10)

A classic broadsheet, modelled on the leaderboard's top entries:

- **Cream newsprint paper** (#F1ECE0) with black text and red (#B3261E)
  accents.
- **Playfair Display masthead** (900, 78 px) and headlines (800, 20 px);
  Liberation Serif (Times-style) body, descriptions (13 px) and briefs;
  Libre Franklin kickers, labels and the DATE lines (13 px).
- **Two card sizes, one template each:** cards 1–3 are big features
  (160 px tall, 324×66 px illustration) and cards 4–10 are short
  (105 px tall). All ten cards are invisible — no border, no background —
  with only the illustration panel framed (1 px ink outline).
- **Big overlay words on the feature illustrations:** one coloured box per
  feature card, two lines of large bold text (28 px / 20 px), the box
  sized to the text with thin padding. Box and text colours are taken
  from each illustration itself: Kyiv orange #FE6715 on dark navy
  #0E2553, Houthi yellow #FFA50A on navy #20255A, Youth Strike dark
  maroon #3F202E with orange #FE8745 text.
- **Gold** (#9C7C00) for the kicker numbers and continent words, the
  upright 21 px sub-headline, and the region strip text (14 px, navy
  band, no border). Measured contrast 3.36:1 on cream / 3.65:1 on navy —
  below the 4.5:1 standard, but the best any single gold reaches on both
  backgrounds at once.
- **Flat vector illustrations:** each Top 10 panel is a flat, full-bleed
  illustration composed for its slot.
- **Flags aligned with their titles:** every brief's flag is 16×12 px and
  vertically centred on its bold first word; the Top 10 cards' flags sit
  level with their headlines.

## Facts

Every story was verified against its source before drawing: the casualty
figure for Kyiv stays attributed ("Al Arabiya: 3 killed"); the ANC meeting's
outcome is not claimed (it was not yet known); the Australia defence bill's
contents are not detailed (unverified); no X metrics are used (the fxtwitter
API was down on 20 November). Research cut off at ~14:10 WIB on 20 November
2026 — stories after that are not in the paper. Temperatures and conditions
in the weather strip are the 13:30 WIB snapshot of 20 November; wind
direction and speed are the current values fetched that night.

## How it is built

`entry.png` is rendered deterministically by a Python/Pillow builder
(`build_entry.py` in the workspace, with vendored fonts). The entry program
in this repository (`main.ts`, Node 22, standard library only) copies the
shipped `entry.png` into the grader's output directory and verifies the copy
byte for byte (PNG magic bytes + SHA-256), so a partial or corrupt copy
fails loudly instead of silently grading a bad image. It also checks the
source against the expected SHA-256 of the v10 image before copying, so a
stale or wrong entry file is caught immediately.
