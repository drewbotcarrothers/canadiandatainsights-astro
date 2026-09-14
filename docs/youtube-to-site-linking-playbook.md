# Canadian Data Insights — YouTube → Site Linking Playbook

Goal: turn every YouTube video/Short into engaged sessions on [canadiandatainsights.com](https://canadiandatainsights.com/), especially `/location/{slug}/` profiles. Organic search already engages well in GA; YouTube is almost invisible in acquisition today — this playbook fixes that.

Channel: https://www.youtube.com/channel/UCkKDB5U853YVBnfAPIlPHTw  
Site: https://canadiandatainsights.com/  
Contact: hello@canadiandatainsights.com

---

## 1. Link rules (non-negotiable)

1. **Always deep-link** — prefer a specific location page over the homepage.
2. **Always use trailing slashes** — e.g. `https://canadiandatainsights.com/location/calgary/`
3. **Always tag with UTM** so GA shows YouTube separately from Direct.
4. **One primary CTA per video** — one city/compare URL to push; optional second link only in the pinned comment.
5. **Match the video topic** — if the Short is about Winnipeg population, link Winnipeg, not Home.

### UTM template

```
https://canadiandatainsights.com/location/{slug}/?utm_source=youtube&utm_medium={medium}&utm_campaign={campaign}&utm_content={video_id_or_slug}
```

| Param | Values |
| --- | --- |
| `utm_source` | always `youtube` |
| `utm_medium` | `short` · `video` · `live` · `community` |
| `utm_campaign` | `census2021` · `city-pop` · `compare` · `blog` |
| `utm_content` | YouTube video ID, or short kebab title |

**Examples**

- Short about Calgary population:  
  `https://canadiandatainsights.com/location/calgary/?utm_source=youtube&utm_medium=short&utm_campaign=city-pop&utm_content=calgary-pop-2021`
- Longer video comparing Toronto vs Vancouver:  
  `https://canadiandatainsights.com/compare/?utm_source=youtube&utm_medium=video&utm_campaign=compare&utm_content=toronto-vs-vancouver`  
  (Mention both city pages in the description too.)

In GA4, expect sessions under source/medium `youtube / short` or `youtube / video` once tagged. Untagged links collapse into Direct (your current noisy Direct bucket).

---

## 2. Where the link goes on every upload

| Placement | Required? | Notes |
| --- | --- | --- |
| **Description — first 2 lines** | Yes | Hook + primary URL (mobile truncates; put link early) |
| **Pinned comment** | Yes | Same primary URL + soft CTA (“Full 2021 census profile →”) |
| **Video end screen / cards** | Yes for long-form | Card to site; end screen “Visit site” if available |
| **Community post** | When promoting | Same UTM campaign, `utm_medium=community` |
| **Channel About links** | Once | Add website: `https://canadiandatainsights.com/?utm_source=youtube&utm_medium=channel&utm_campaign=profile` |

---

## 3. Description templates

### A) City population Short (15–60s)

```
{City} population in 2021: {POP} ({growth}% since 2016).

Full census profile (income, age, languages, jobs):
{TRACKED_LOCATION_URL}

Data: Statistics Canada, Census of Population 2021
#{City} #Canada #Census2021 #Demographics #Population
```

### B) “Did you know?” demographic Short

```
{One striking stat about City}.

See households, income & languages for {City}:
{TRACKED_LOCATION_URL}

Source: Statistics Canada 2021 Census
#CanadianData #StatsCan #{City}
```

### C) Comparison video / Short

```
{City A} vs {City B} — population, income, and growth (2021 Census).

Compare them yourself:
{TRACKED_COMPARE_URL}

Profiles:
{TRACKED_URL_A}
{TRACKED_URL_B}
```

### D) Blog / story video

```
{Hook from blog title}.

Read the full breakdown:
https://canadiandatainsights.com/blog/{slug}/?utm_source=youtube&utm_medium=video&utm_campaign=blog&utm_content={slug}

Explore any Canadian city: https://canadiandatainsights.com/?utm_source=youtube&utm_medium=video&utm_campaign=blog&utm_content={slug}-home
```

### Pinned comment (reuse)

```
📊 Full {City} 2021 census profile (maps, income, languages):
{TRACKED_LOCATION_URL}
```

---

## 4. Slug cheat sheet (common cities)

Use these exact paths (trailing slash):

| City | Path |
| --- | --- |
| Toronto | `/location/toronto/` |
| Montréal | `/location/montr-al/` |
| Calgary | `/location/calgary/` |
| Ottawa | `/location/ottawa/` |
| Edmonton | `/location/edmonton/` |
| Winnipeg | `/location/winnipeg/` |
| Mississauga | `/location/mississauga/` |
| Vancouver | `/location/vancouver/` |
| Brampton | `/location/brampton/` |
| Hamilton | `/location/hamilton/` |
| Québec | `/location/qu-bec/` |
| Surrey | `/location/surrey/` |
| Halifax | `/location/halifax/` |
| London | `/location/london/` |
| Markham | `/location/markham/` |
| Oakville | `/location/oakville-town-t/` |
| Whitby | `/location/whitby-town-t/` |
| Lévis | `/location/l-vis/` |
| Trois-Rivières | `/location/trois-rivi-res/` |

Province examples: `/location/ontario/`, `/location/british-columbia/`, `/location/alberta/`

If unsure of a slug: open the city from the site search/homepage cards and copy the URL.

---

## 5. Content → URL matching workflow

For each Short/video before upload:

1. Pick **one primary location** (or Compare).
2. Confirm the live URL returns **200** (not a 404 alias).
3. Build the tracked URL with UTMs (section 1).
4. Paste into description (top) + pinned comment.
5. After publish: open the link once in an incognito window; confirm GA Realtime (filter `utm_source=youtube`) within a few minutes.

**Cadence suggestion (sustainable)**  
- 3–5 Shorts/week, each tied to a different mid/large city  
- 1 longer video/month (compare or blog story)  
- Batch film 10 city “Population in 15 seconds” Shorts using the same template

Priority cities for SEO + YT synergy (impressions or brand value): Toronto, Montréal, Calgary, Vancouver, Edmonton, Winnipeg, Mississauga, Ottawa, Hamilton, Kitchener, plus mid-size cities that already get GSC impressions.

---

## 6. Channel-level setup (do once)

1. **Custom channel URL / name** clear: Canadian Data Insights  
2. **Banner**: use the 2560×1440 map banner already in Downloads  
3. **About → Links**: website with tracked homepage URL  
4. **Default upload settings**: description footer block:

```
——
Explore Canadian census data: https://canadiandatainsights.com/?utm_source=youtube&utm_medium=video&utm_campaign=default-footer
Data adapted from Statistics Canada, Census of Population 2021 (Open Government Licence - Canada).
```

5. **Playlists**: “City Population 2021”, “Province Profiles”, “City Comparisons” — each playlist description gets a relevant hub link (`/`, `/compare/`, or a province page).

---

## 7. How we’ll know it’s working (GA4)

Watch these for 28 days after you start tagging:

| Signal | Healthy direction |
| --- | --- |
| Session source/medium `youtube / short` or `youtube / video` | Appears and grows |
| Engaged sessions from YouTube | Aim for engagement rate closer to Organic (~50%+), not Direct (~17%) |
| Landing pages `/location/...` from YouTube | Rise vs homepage-only landings |
| Average engagement time from YouTube | > 20–30s (users opening real profiles) |

Optional next step: GA4 key events `video_cta_click` is hard from YT; instead mark **session_engaged** from youtube source, or create an exploration filtered to `sessionSource = youtube`.

---

## 8. Attribution & compliance (keep clean)

- Say **Statistics Canada, Census of Population 2021** on screen or in description when showing numbers.
- Do **not** imply StatsCan endorsement.
- Prefer official figures from the site/CSV; don’t invent stats on camera.

---

## 9. First week checklist

- [ ] Add tracked site link on channel About  
- [ ] Add default description footer  
- [ ] Publish 5 city Shorts with tracked `/location/{slug}/` links + pinned comments  
- [ ] Publish 1 compare or blog video with tracked URLs  
- [ ] After 7 days: check GA Acquisition for `youtube` source/medium  

---

*Playbook for Canadian Data Insights · Astro site + YouTube channel · Sep 2026*
