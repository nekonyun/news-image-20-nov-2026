# news-image-20-nov-2026 — entry v9

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/nekonyun/news-image-20-nov-2026/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/nekonyun/news-image-20-nov-2026/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

The World in One Day — Friday 20 November 2026. Entry for the make.fun bounty
[news-image-20261120](https://make.fun/bounty/news-image-20261120):
one image summing up the world's news of Friday 20 November 2026.

## The image

A newspaper front page, drawn programmatically and rendered to
`entry.png` (1024×1024, PNG):

- **Top 10 most viral stories, numbered 1–10:** Russia hits three Kyiv
  bridges; Houthi missiles intercepted over Riyadh; the International Youth
  Strike sweeps 25+ European countries; Cyclone Akvan hits Odisha; India vs
  New Zealand, 1st Test, Day 2; Harris meets Macron in Paris; Asia stocks
  plunge; COP31 ends with no deal; Australia's defence bill passes; a Sydney
  man is charged with terrorism. Each card carries its date (with the year)
  and its source in parentheses.
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
- **World map:** a pixel-dot map with numbered pins for the Top 10 stories.
- **DATE CHECK footer:** the big 19 November stories deliberately left out
  (GTA VI launch, the Trump–Xi–Putin trilateral summit, the Epstein Files
  Transparency Act signing, the Anthropic IPO, and more), so nothing from
  yesterday is shown as Friday's news.
- **Sources line:** the five most-cited outlets (Reuters, Wisevoter,
  Bangkok Post, SimpleLife.news, TrueNorth News), plus the honesty footer:
  every story happened, or was first reported, on Friday 20 November 2026
  in at least one time zone, and claims are attributed, not stated as fact.

## The design

A classic broadsheet, modelled on the leaderboard's top entry:

- **Cream newsprint paper** (#F1ECE0) with black text and red (#B3261E)
  accents — no purple, no navy bands.
- **Playfair Display masthead** (900) and headlines (800); Liberation Serif
  (Times-style) body and briefs; Libre Franklin kickers, labels and the
  DATE lines.
- **Uniform card template:** all ten Top 10 cards share one height (130 px)
  with the illustration panel on top and identical text offsets, so every
  kicker, headline, description and DATE line sits on the same line across
  all ten cards.
- **Flat vector illustrations:** each Top 10 panel is a flat, full-bleed
  illustration composed for its wide-short slot — Kyiv's bridges and fire,
  Houthi missile trails, the youth march, Akvan's spiral, the cricket
  player whole head-to-toe, the Harris–Macron handshake, the plunging stock
  chart, the COP31 hall, Parliament House, and the Sydney street with its
  police tape.
- **Flags aligned with their titles:** every brief's flag is 16×12 px and
  vertically centred on its bold first word; the Top 10 cards' flags sit
  level with their headlines.

## Facts

Every story was verified against its source before drawing: the casualty
figure for Kyiv stays attributed ("Al Arabiya: 3 killed"); the ANC meeting's
outcome is not claimed (it was not yet known); the Australia defence bill's
contents are not detailed (unverified); no X metrics are used (the fxtwitter
API was down on 20 November). Research cut off at ~14:10 WIB on 20 November
2026 — stories after that are not in the paper.

## How it is built

`entry.png` is rendered deterministically by a Python/Pillow builder
(`build_entry.py` in the workspace, with vendored fonts). The entry program
in this repository (`main.ts`, Node 22, standard library only) copies the
shipped `entry.png` into the grader's output directory and verifies the copy
byte for byte (PNG magic bytes + SHA-256), so a partial or corrupt copy
fails loudly instead of silently grading a bad image.
