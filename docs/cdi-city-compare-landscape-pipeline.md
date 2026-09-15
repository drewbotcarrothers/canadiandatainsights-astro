# CDI City Compare — Landscape YouTube Pipeline (16:9)

Operator recipe for **City A vs City B** long-form YouTube videos on [Canadian Data Insights](https://canadiandatainsights.com/), produced with OpenMontage **animated-explainer** + Remotion compose (1920×1080).

Companion docs:

- Linking / UTM: [`youtube-to-site-linking-playbook.md`](./youtube-to-site-linking-playbook.md)
- Shorts batch template: [`youtube-shorts-batch1.md`](./youtube-shorts-batch1.md)
- Cross-platform: [`one-shoot-three-platforms-checklist.md`](./one-shoot-three-platforms-checklist.md)

First pair (scaffold): **Toronto vs Vancouver** → OpenMontage project `cdi-toronto-vs-vancouver-landscape`.

---

## 1. Inputs (per episode)

| Field | Example (Toronto vs Vancouver) |
| --- | --- |
| City A name + slug | Toronto → `/location/toronto/` |
| City B name + slug | Vancouver → `/location/vancouver/` |
| Stats (Census 2021) | From `Data/locations.csv` + existing compare blog |
| Population A / B | 2,794,356 / 662,248 |
| Growth A / B | +2.3% / +4.9% |
| Median HH income A / B | $84,000 / $82,000 |
| Compare blog URL | `https://canadiandatainsights.com/blog/toronto-vs-vancouver-2021-census/` |
| Blog slug | `toronto-vs-vancouver-2021-census` |
| Video title pattern | `{City A} vs {City B}: Population & Income Compared` |
| Duration target | **60–90 seconds** |
| Format | **1920×1080 landscape (16:9)**, 30 fps |
| OpenMontage project id | `cdi-{a}-vs-{b}-landscape` (kebab) |

Pull numbers from:

1. `canadiandatainsights-astro/Data/locations.csv` (Census subdivision rows)
2. Existing compare blog post on the site
3. Optional: live location pages for CTA copy

Do **not** invent stats. Round display currency to whole dollars as published on CDI.

---

## 2. Locked providers & runtimes

| Role | Preferred | Fallback |
| --- | --- | --- |
| Hero stills | `grok_image` (`grok-imagine-image`, 16:9) | Pexels / Pixabay stills |
| Motion beat (one only) | `grok_video` (`grok-imagine-video`, ~5s, 16:9, **720p**) | Skip beat; use stock + Remotion wipe |
| B-roll | Pexels + Pixabay video (`PEXELS_API_KEY` / `PIXABAY_API_KEY` in OpenMontage `.env`) | Still Ken Burns |
| TTS | Whatever is configured in OpenMontage (Piper / Google / etc.) | Piper local |
| Compose | `render_runtime: remotion` | — |
| Composition mode | **`templated`** (batch city-compare series) | `atelier` optional for a one-off hero piece only |
| Style playbook | `flat-motion-graphics` (default) | `clean-professional` |

**Cost discipline:** exactly **2** Grok stills + **1** Grok video clip per episode. No extra Grok regenerations without approval.

---

## 3. Stage flow (animated-explainer)

Follow OpenMontage `pipeline_defs/animated-explainer.yaml`:

```
research → proposal → script → scene_plan → assets → edit → compose → publish
```

| Stage | Artifact | CDI-specific notes |
| --- | --- | --- |
| research | `artifacts/brief.json` (or `research_brief.json`) | Cite CSV + blog; lock A/B stats |
| proposal | `proposal_packet` + `decision_log` | Lock remotion + templated; budget ≤ $1.00 |
| script | `script.json` | 60–90s; hook → cards → compares → CTA |
| scene_plan | `scene_plan.json` | Remotion cards + stock + one Grok motion |
| assets | `asset_manifest.json` | Generate in order: stock → Grok stills → Grok video → TTS |
| edit | `edit_decisions.json` | `output_profile: youtube_landscape` |
| compose | `render_report` + `final_review` | Remotion 1920×1080 |
| publish | `publish_log` + YouTube Studio | Tracked deep links + pin comment |

Human approval defaults match the explainer pipeline (proposal / script / scene_plan / assets gated).

---

## 4. Asset recipe

### 4.1 Remotion cards (templated)

Use stock Remotion scene types (e.g. `text_card`, `stat_card`, split compare, end CTA):

1. Cold-open hook card  
2. City A intro card  
3. City B intro card  
4. Population compare  
5. Growth compare  
6. Income compare  
7. CTA end card (blog + both location URLs)

Brand: clean data-viz, Canada-neutral palette, large numerals, CDI wordmark or “Canadian Data Insights · Census 2021” footer.

### 4.2 Stock B-roll queries

See project `artifacts/stock_queries.md`. Per city: skyline, street life, transit, waterfront/landmarks — commercial-safe Pexels/Pixabay only.

### 4.3 Grok stills (2)

- `hero_city_a_16x9` — iconic City A establishing still, 16:9  
- `hero_city_b_16x9` — iconic City B establishing still, 16:9  

Prompts live in `artifacts/grok_prompts.md`. Prefer photoreal editorial look; no logos, no readable faces if avoidable, no fake “census documents.”

### 4.4 Grok motion beat (1)

One ~5s clip: **“vs” collision / split-screen energy** (text-to-video or image-to-video from a composite).  
Params: `aspect_ratio=16:9`, `resolution=720p`, `duration=5`.

### 4.5 Audio

- Narration: one voice, ~140–160 wpm, clear Canadian English  
- Music: library bed or free stock; duck under VO  
- Captions: burn word-level if Remotion pipeline supports; else YouTube auto + SRTs

---

## 5. Cost budget (target ~$0.50–1.00)

| Line item | Est. |
| --- | --- |
| `grok_image` ×2 @ $0.02 | $0.04 |
| `grok_video` 5s × $0.07/s (720p) | $0.35 |
| Optional I2V input image | ~$0.002 |
| Pexels / Pixabay | $0 |
| Remotion local render | $0 |
| TTS (Piper / Google free tier) | ~$0 |
| **First-render target** | **~$0.39–0.50** |
| Contingency (1 regen still or trim) | up to **~$1.00** hard cap |

If over budget: drop Grok video beat first (keep Remotion wipe), keep two stills or fall back one still to stock.

---

## 6. Naming conventions

| Thing | Pattern |
| --- | --- |
| Project dir | `projects/cdi-{city-a}-vs-{city-b}-landscape/` |
| Hero stills | `assets/images/hero_{city}_16x9.png` |
| Grok vs beat | `assets/video/vs_beat_5s_16x9.mp4` |
| Stock clips | `assets/video/stock_{city}_{n}.mp4` |
| Narration | `assets/audio/narration_full.mp3` (+ per-scene if split) |
| Final render | `renders/final_landscape_v{N}.mp4` |
| Thumbnail | `artifacts/thumb_landscape_v{N}.png` |
| YouTube publish notes | `artifacts/youtube_publish.md` |

---

## 7. YouTube description / UTM template

### Primary CTA (compare blog)

```
https://canadiandatainsights.com/blog/{blog-slug}/?utm_source=youtube&utm_medium=video&utm_campaign=city-compare&utm_content={city-a}-vs-{city-b}
```

### Secondary (location pages)

```
https://canadiandatainsights.com/location/{slug}/?utm_source=youtube&utm_medium=video&utm_campaign=city-compare&utm_content={city-a}-vs-{city-b}
```

### Description stub

```
{City A} vs {City B} — population, growth, and median household income (2021 Census).

Full comparison:
{TRACKED_BLOG_URL}

City profiles:
{TRACKED_URL_A}
{TRACKED_URL_B}

Data: Statistics Canada, Census of Population 2021
#{CityA} #{CityB} #Canada #Census2021 #Demographics #CanadianDataInsights
```

### Pinned comment

```
📊 Full {City A} vs {City B} 2021 census breakdown:
{TRACKED_BLOG_URL}
```

Always: trailing slashes, UTM on every link, primary URL in the first two description lines.

---

## 8. Scene skeleton (~8–12 scenes, 60–90s)

1. Cold open hook (surprise contrast)  
2. Title card — A vs B  
3. City A card + hero still / B-roll  
4. City B card + hero still / B-roll  
5. Population compare  
6. Growth compare  
7. Income compare  
8. Grok motion “vs” beat  
9. Quick takeaway line  
10. CTA end card  

Adjust timing so Remotion cards carry data; stock + Grok carry emotion.

---

## 9. QA checklist (before publish)

- [ ] Stats match CSV / blog (pop, growth %, median HH income)  
- [ ] Duration 60–90s (±5% after compose)  
- [ ] 1920×1080, 16:9, audible VO, music ducked  
- [ ] Exactly ≤2 Grok stills + ≤1 Grok video in cost log  
- [ ] No API keys in artifacts, logs, or commits  
- [ ] Description has tracked blog URL in first 2 lines  
- [ ] Location URLs present; trailing slashes  
- [ ] UTM: `utm_source=youtube&utm_medium=video&utm_campaign=city-compare`  
- [ ] Captions / on-screen numbers readable on TV  
- [ ] Thumbnail: both city names + one big contrast number  
- [ ] Pin comment posted with same primary URL  
- [ ] Source line: Statistics Canada, Census of Population 2021  

---

## 10. Batching the next pairs

1. Copy project layout from `cdi-toronto-vs-vancouver-landscape`  
2. Swap A/B in `brief.json`, prompts, stock queries, publish notes  
3. Reuse Remotion templated composition; only data + assets change  
4. Keep Grok budget identical (2 stills + 1×5s video)

Suggested follow-ons: Calgary vs Edmonton, Ottawa vs Montreal, Mississauga vs Brampton (verify blog exists or write blog first).

---

## 11. Do / don’t

**Do**

- Start from census CSV + existing compare blog  
- Lock remotion + templated for series consistency  
- Dry-run cost estimates before paid Grok calls  

**Don’t**

- Call paid Grok/xAI APIs without an approved brief + budget  
- Commit OpenMontage `.env` or any secrets  
- Ship untagged YouTube links (they collapse into Direct in GA)  
- Switch to atelier mid-batch without a logged `composition_mode` decision  
