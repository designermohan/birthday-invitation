# Sasa's 30th Itinerary — Project Handoff

Paste this into a new chat to continue where we left off.

---

## PROJECT OVERVIEW

I'm building a personal HTML invitation page for **Sasa's 30th birthday weekend** in **July 16-20, 2026**, somewhere in California. It's a single-file HTML page with embedded base64 images, hosted via Netlify Drop. There are TWO versions — one with an RSVP form, one without.

**Active files (always work from these):**
- `/Users/samantha/Desktop/Personal/Activities & Travel/2026/30th/HTML/sasa-30th.html` — version with RSVP form (this is the main share file)
- `/Users/samantha/Desktop/Personal/Activities & Travel/2026/30th/HTML/sasa-30th-overview.html` — version without form (for sharing as a teaser)
- `/Users/samantha/Desktop/Personal/Activities & Travel/2026/30th/HTML/` — all working HTML files live here now
- `/Users/samantha/Desktop/Personal/Activities & Travel/2026/30th/preview-image.jpg` — OG/iMessage preview image
- `/Users/samantha/Desktop/Personal/Activities & Travel/2026/30th/imessage-preview-mockup.html` — workshop tool for the iMessage preview
- `/Users/samantha/Desktop/Personal/Activities & Travel/2026/30th/mobile-preview.html` — workshop tool for mobile rendering (iPhone iframe mockup)
- `/Users/samantha/Desktop/Personal/Activities & Travel/2026/30th/Moodboard/` — folder containing all source images (Dropbox-synced)

**Versioned snapshots saved:**
- `sasa-30th-mobile-v1.html`, `sasa-30th-mobile-v2.html` and -overview equivalents — saved before major mobile changes for rollback

**Naming rule going forward:** Save versioned snapshots whenever making big changes (mobile-v3, mobile-v4, etc.). NEVER use "final" in filenames.

---

## STRUCTURE — FIVE-DAY WEEKEND

**Thursday July 16** — Optional Early Arrival
- Day-tag: "come help me and my family set up and settle in"
- Event: **Settling In** (daytime) — body: *"Join the fam to set up the villa, settle in, and get the lay of the land."*
- Images: girl in vintage convertible, Tuscan villa interior

**Friday July 17** — pool party 💦, asado 🔥, game night 🎲
- Event: **Pool Party** (daytime) — body: *"No alarm clocks. Cornhole and backgammon tournaments on the lawn, music up, drinks by the pool all afternoon."*
  - Images: tangerines → pool party scene → lemons → backgammon
- Event: **Argentine Asado** (evening) — body: *"Long outdoor table, candles, open fire. Papi's world-famous chimichurri, chorizos and choripan, tira de asado, and Papi's homemade flan with dulce de leche."* / Badge: ★ PAPI'S ASADO NIGHT
  - Images: family photo (Mama+Papi+baby Sasa '98) → kid with rib bone → group dinner mountains → grill (grain filtered)
- Event: **Game Night & Karaoke** (late) — body: *"Catan, Fishbowl, cards, more backgammon tournaments. Tarot readings, polaroids, karaoke. Whatever the night decides."*
  - Images: card chaos → tarot reading → polaroids → karaoke

**Saturday July 18** — wine tasting 🍇 & Cher the DJ bus 🪩
- Event: **Wine & Cheese Tasting** (daytime) — body: *"Good wine, great company, and the stinkiest and creamiest assortment of cheese you've ever had. A view with rolling hills if we find the right spot."*
  - Images: 4 cheese/wine shots
- Event: **Vineyard Exploration** (golden hour) — body: *"Wandering the vines at golden hour, wine in hand."*
  - Images: girl in vineyard → grape stomping → girl in scarf with wine → two girls cheers
- Event: **Private Set** (night) — body: *"Tara takes the decks inside Cher the DJ bus. Tequila towers. Dancing until it's late."* / Badge: ★ DJ TARA · CHER THE BUS
  - Images: bus → tequila tower → DJ booth → outdoor dancing (grain filtered)

**Sunday July 19 · Birthday 🎂**
- Day-tag: "stretching with Mama, Eggs Benedict by Tashi, paint & sip, birthday celebrations"
- Event: **AKA WHENEVER WE FEEL LIKE IT!!** (time: "morning" in quotes) — body: *"After dancing the absolute night away together, let's please sleep in <3 Then optional mat stretching outside with Bernadette 🧘"* / Badge: ★ STRETCHING WITH MAMA
  - Images: Mama dancing-with-pregnant-mom in green velvet → bed → stretching mats → coffee girl
- Event: **Brunch** (daytime) — body: *"Birthday Eggs Benedict by Natashia, passionfruit mimosas, champagne already on the table — and a cake of sorts to follow 🎂"* / Badge: ★ BDAY BENNY BY TASH
  - Images: martini (passionfruit) → eggs benedict (new aesthetic version with gold mirror & lavender) → ice cream lemons → sister+cake
- Event: **Paint & Sip ✨** (afternoon) — body: *"Oils, acrylics, watercolors. All types of paint, all levels of talent (none required)."*
  - Images: single painter → group painting (koi pond) → canvas+martini shadow → palette+wine
- Event: **Mezze Dinner** (evening) — body: *"Simon's world-famous hummus, roast leg of lamb, Mama's whipped feta — a full Mediterranean mezze spread, the works, drowning in as much olive oil as possible."* / Badge: ★ SIMON'S MEDITERRANEAN NIGHT
  - Images: Mediterranean spread (flatbread+hummus+feta) → figs+whipped feta → restaurant Simon → hummus+olives+falafel
- Event: **Outdoor Movie Night** (night) — body: *"Then the outdoor movie to close out the night. Gourmet savory girl movie snacks — prosciutto, truffle marcona almonds, chips in silver coupes."*
  - Images: outdoor cinema screen → silver coupes prosciutto → 1 placeholder

**Monday July 20** — last morning ☕
- Day-tag: "nobody actually wants to leave"
- Event: **Last Morning** (daytime) — body: *"One last coffee, jammy eggs, weekend recaps, hugs in the driveway."*
  - Images: 2 morning shots

**Moodboard (5x2 grid at the bottom)** — heading: *"can't wait! xoxo, sasa"* in italic Cormorant Garamond 32px
- Contains 10 cut images from W&C and Vineyard

**Footer:** "✦ DRAFT ✦ LOCATION REVEALED ONCE BOOKED ✦" + "✦ JULY 2026 ✦ SOMEWHERE IN CALIFORNIA ✦"

---

## DESIGN SYSTEM

**Color palette:**
- `--cream: #f2ead6`
- `--cream-deep: #e8dcc0`
- `--gold: #b89968`
- `--ink: #3c2810`
- `--sub: #7a6535`

**Font system (with strong Apple-system fallbacks for Dropbox/file:// previews):**
- Hero title: `'Italiana','Didot','Bodoni 72','Hoefler Text',Georgia,serif`
- Headers (Sasa's 30th, etc.): Italiana
- Body italic accents: `'Cormorant Garamond','Hoefler Text','Iowan Old Style',Georgia,serif` italic
- Sans-serif: `'Jost',-apple-system,BlinkMacSystemFont,'Avenir Next','Avenir',sans-serif`
- Subheadings: `'Fraunces','Iowan Old Style','Charter',Georgia,serif`

**Layout caps:** Each event row capped at 4 images max. Extras flow to moodboard.

---

## OPEN GRAPH (iMessage Preview)

- **Title**: "Sasa's 30th Draft Itinerary"
- **Description (with-form file)**: "somewhere in california ✦ july 2026"
- **Description (no-form file)**: same
- **Image**: pool party scene (vibrant social shot — 1200x630 cropped, embedded as base64 data URI)

---

## MOBILE CSS (current state)

Single `@media (max-width: 720px)` block with these rules:
- Hero: **left-aligned**, 56px title, 13.5px tagline, 11px dates (full bold preserved from desktop)
- Hero photo grid: 3 portrait images, aspect-ratio 3/4.4
- Day section: **centered** (not skewed right), single-column grid, day-num smaller and gold-tinted above day-dow
- Ev-row: stacked vertically, centered, 2x2 image grid
- Ev-body: italic Cormorant 14px, color rgba(60,40,16,0.62), tight gap to title
- Tagline mobile-only `<br class="m-br">` after "named Cher," to force line break there (uses `&nbsp;` between "named" and "Cher" so they stay together)
- Form: single column, 16px font on inputs (prevents iOS auto-zoom)
- Moodboard: 3 columns on phone, 2 columns on small phones <420px

**Breakpoint structure:**
- `@media (max-width: 720px)` — main mobile rules
- `@media (min-width: 721px)` — `.m-br { display: none; }` (hide mobile-only break)
- `@media (max-width: 420px)` — small phone tweaks

---

## RECENT CHANGES (latest first)

1. **Just now**: Reverted hero-dates mobile to keep full bold from desktop (was softened to weight 500, user wanted the bold back)
2. **Saved snapshots**: `-mobile-v1.html` (before centering experiments), `-mobile-v2.html` (before bold revert)
3. **Hero centered → reverted to LEFT-aligned**: user prefers top text left
4. **Day sections centered**: day-num + content stacked and centered (not skewed right)
5. **Cher line break fix**: non-breaking space + mobile-only `<br>` after "Cher,"
6. **Eggs benedict replaced** with new aesthetic shot (gold mirror + lavender + lemons)
7. **Mezze Dinner**: home-Simon B&W portrait removed, replaced with flatbread+hummus+feta food shot
8. **Brunch order**: martini → eggs → ice cream → sister+cake (eggs and martini swapped)
9. **Paint & Sip reorder**: single painter → group painting → canvas+martini → palette+wine
10. **Grain filter applied** to: grill (Asado), eggs benedict (Brunch), sister+cake (Brunch), restaurant Simon (Mezze), VW van + dancing (Private Set). Subtle warm tint + slight desaturation + light grain noise.
11. **File size reduced** from 25.7MB → 15.75MB via image optimization (max 1600px, JPG quality 85)
12. **Pilates → stretching** replaced everywhere (3 spots)
13. **OG meta tags** added (Sasa's 30th Draft Itinerary + somewhere in california ✦ july 2026 + pool party preview image)

---

## KNOWN ISSUES / OUTSTANDING

1. **Body text "Join the fam..."** — user keeps saying it looks too big, too dark, too much space from "SETTLING IN" title. Currently: italic Cormorant 14px, rgba(60,40,16,0.62), tight margins. May need further reduction (12-13px) and even lighter color (0.5 opacity).
2. **One Pinterest placeholder** still in Outdoor Movie Night row (3 real images + 1 placeholder).
3. **iMessage preview rendering** — only works when hosted at a real URL (Netlify), not from Dropbox preview or file:// (Google Fonts can't load in those contexts, so fallback Apple system fonts kick in).
4. **Netlify Drop** had upload issues at 25MB — now at 15.75MB which should work fine.

---

## USER'S PREFERENCES (important to remember)

- **Browser: Safari** (not Chrome — `open` commands and preview tools should target Safari, which handles local file iframes without a server)
- **File naming convention — ALWAYS follow this format:** `YYYY.MM.DD_Title_v#.ext` (e.g. `2026.05.02_Sasa30_v53.html`). Every artifact must be dated. No exceptions.
- **No emojis in code** unless explicitly requested
- **No "final" in filenames** — use v2, v3, etc., or descriptive names like `-mobile-v1`
- **No bullet points/headers in conversational responses** unless the format genuinely needs them
- **Keep mobile changes mobile-only** — don't break desktop
- **Save versioned snapshots** before big changes
- **The personal photos are the soul** — Mama dancing in green velvet, family at table '98, kid with rib bone, sister+cake. Don't replace these for "polish."
- **Honest answers preferred** — when unsure, ask. When something's overkill, say so.
- **The page is for friends** — friends will love the imperfection, don't over-optimize.

---

## NETLIFY DEPLOYMENT (when ready)

1. Open https://app.netlify.com/drop
2. Drag `sasa-30th.html` onto the page
3. Wait ~30 seconds for upload
4. Get URL like `https://random-name-abc123.netlify.app`
5. Test by sending the URL to yourself in iMessage
6. Optional: claim free account, rename to `sasa-30th.netlify.app`

The OG meta tags are baked in, so the preview card will render correctly the moment it's at a public URL.
