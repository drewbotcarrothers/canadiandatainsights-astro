# CDI — One shoot → three platforms checklist

**Rule:** Film once for vertical (9:16). YouTube Short is primary. TikTok + Instagram Reels are mirrors — same clip, same hook, same site link. Do **not** invent three separate strategies.

Use after YouTube cadence is already working (3–5 Shorts/week for a few weeks). Until then, YouTube-only is fine.

---

## Before you film (5 min)

- [ ] Pick **one city** (or one A vs B compare)
- [ ] Confirm live URL returns 200: `https://canadiandatainsights.com/location/{slug}/`
- [ ] Build tracked link (copy/paste):

```
https://canadiandatainsights.com/location/{slug}/?utm_source={platform}&utm_medium=short&utm_campaign=city-pop&utm_content={slug}-pop-2021
```

| Platform | `utm_source` |
| --- | --- |
| YouTube | `youtube` |
| TikTok | `tiktok` |
| Instagram Reels | `instagram` |

- [ ] Write the **one-line hook** (on-screen + spoken), e.g. “Calgary passed 1.3 million in 2021.”
- [ ] Pull 2–3 stats from the location page (pop, growth %, median income)

---

## Shoot once (10–20 min)

- [ ] Vertical 9:16, 15–45 seconds
- [ ] Hook in first 2 seconds (text on screen)
- [ ] 2–3 big numbers on screen
- [ ] End card / last frame: “Full profile → link in bio / description”
- [ ] Optional B-roll: map screenshot from the site (fair use of your own UI)
- [ ] Export **one master MP4** — this file goes to all three apps

---

## Posting order (same day)

### 1) YouTube Short (primary) — always first

- [ ] Title: `{City} Population 2021` (or `{A} vs {B}`)
- [ ] Description: hook + stats + **YouTube UTM link** in first 2 lines
- [ ] Hashtags: `#{City} #Canada #Demographics #Population #CanadianDataInsights`
- [ ] **Pin comment** with the same tracked URL
- [ ] Publish

### 2) TikTok (mirror)

- [ ] Upload same MP4
- [ ] Caption = hook + 1 stat + “Full profile 🔗”
- [ ] Put **TikTok UTM link** in bio *or* comment (TikTok link-in-bio / link sticker if available)
- [ ] Same hashtags (drop or trim if over limit)
- [ ] Publish

### 3) Instagram Reels (mirror)

- [ ] Upload same MP4
- [ ] Caption = hook + 1 stat + “Link in bio”
- [ ] Update bio link to **Instagram UTM** URL for that city (or Linktree row)
- [ ] Cover frame: clear city name + one number
- [ ] Publish + share to Stories with link sticker if you have it

**X (optional, skip by default):** one line + compare-blog or location URL with `utm_source=x`. No custom video required.

---

## Same-day QA (2 min)

- [ ] Open each tracked link once (phone) — lands on correct `/location/.../`
- [ ] GA4 Realtime (optional): filter `utm_medium=short` — sessions appear
- [ ] Save master MP4 + caption text in a folder: `CDI Shorts/{date}-{slug}/`

---

## Weekly rhythm

| Day | Action |
| --- | --- |
| Batch day | Film 5 cities in one session |
| Publish days | 1 Short/day (or 5 in one sitting) across YT → TT → Reels |
| Friday | Check GA: `youtube` / `tiktok` / `instagram` sources; note top landing pages |
| Monthly | Add 1 compare Short using a Comparisons blog post URL |

---

## Caption stub (reuse)

```
{HOOK}

{City} 2021: {POP} ({GROWTH} since 2016)
Median household income: {INCOME}

Full profile:
{TRACKED_URL}

#Canada #{City} #Demographics #Population
```

---

## Don’t

- Don’t send people only to the homepage
- Don’t post without UTMs (shows up as Direct and you can’t learn)
- Don’t remake the edit three times — mirrors only
- Don’t expand to TikTok/Reels until YouTube is a habit

---

*Canadian Data Insights · one-shoot workflow · Sep 2026*
