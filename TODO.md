# Portfolio — review & to-do

Review of the site as it stands. The architecture is in good shape: the content
collection, the schema guardrails, the flow-strip generation, and the design
system are all doing real work. What is missing is almost entirely **content**,
plus a short list of shipping gaps.

Build status: `astro build` passes, `astro check` reports 0 errors / 0 warnings
(26 hints, see item 13).

_Last refreshed after the buying-committee case study landed._

---

## Done since the first pass

- **Buying-committee enrichment is written.** Ported from a standalone HTML
  page into the site's own markup, matching the `second-brain` structure —
  ten numbered sections, a pipeline diagram, two interface mockups, and a
  sample-answer card. Frontmatter fully populated.
- **`global.css` gained the interface-mockup and sample-output vocabulary**
  (`.shot` / `.win`, `.sample`), plus `--panel-a`, `--panel-b`, `--shadow`
  tokens across all three theme states. The `.diagram` vocabulary already
  existed and was reused unchanged.
- **Optional `lede` frontmatter** (1–3 paragraphs) added to the systems schema
  and rendered by `System.astro`, falling back to `summary`. The 90-character
  `summary` cap was too tight to serve as a hero lede.

---

## P0 — blocks a public launch

### 1. Fill in the placeholder frontmatter (10 of 11 systems)

| Field | Entries still `TODO` | Count |
| --- | --- | --- |
| `outcome` | ai-resume-builder, aires-style, blog-pipeline, client-reporting, contentops, murmur, pay-rate-intelligence, second-brain, where-and-when | 9 |
| `status` | blog-pipeline, client-reporting, contentops, pay-rate-intelligence | 4 |
| `stack` | contentops, where-and-when | 2 |
| `year` | contentops | 1 |

`outcome` is still the highest-value field on the site. It is what the registry
rows, the Selected-work cards, and `llms.txt` all lead with — and see item 2,
because it does more damage than it looks.

### 2. `outcome` is also the meta description

`System.astro` passes `description={outcome}` into `Base.astro`, which uses it
for both `<meta name="description">` and `og:description`. So every case study
whose outcome is unwritten currently ships:

```html
<meta name="description" content="TODO">
<meta property="og:description" content="TODO">
```

That affects **second-brain, blog-pipeline, and where-and-when** — including
`second-brain`, which is otherwise the most finished page on the site. This is
what Google and every link preview will read. Fixing item 1's `outcome` column
fixes this too.

### 3. Write the two remaining empty case studies

`src/pages/systems/[slug].astro` only builds pages for `tier: featured`. Four
entries are featured; two are now written (`second-brain`, `buying-committee`)
and two are still five headings over the word "TODO":

- `blog-pipeline.md` — 5 markdown headings, 5 `TODO` bodies
- `where-and-when.md` — same, plus `stack: [TODO]`

Both build live, linked, publicly reachable pages. Either write them or drop
them to `tier: registry` until they are ready.

### 4. Finish `second-brain.md`

Remaining placeholders:

- L20 — `[Your role title]`
- L21 — `[Start date]`
- L206, 210, 214, 218 — four `[Date]` values in the timeline
- L238–240 — three metrics: `[X]` sellers onboarded, `[X hrs]` saved per seller,
  and `[X]` / `[strongest adoption or outcome number]`

The page's own "On the placeholders" note explains the missing metrics honestly
and is worth keeping — but the role, start date, and timeline dates are not
measurement gaps, they are just unfilled. `buying-committee.md` carries the same
`[Your role title]` placeholder in its Role fact.

### 5. Write the About page

`src/pages/about.astro` is a shell: `credentials = ['TODO']`,
`languages = ['TODO']`, two `<p>TODO</p>` bio paragraphs, and
`description="TODO"` — which ships into the meta description and `og:description`.

Also: `public/about-photo.svg` is a grey placeholder reading "TODO: PHOTO".
Needs a real portrait (and once it is a raster image, move it into `src/` so
Astro's image pipeline can optimise it).

### 6. Write the Speaking page

`src/pages/speaking.astro` has one `TODO` talk, one `TODO` topic, and one
`TODO` past session. The lede and the CFP invitation are written and fine.

If there are no past sessions yet, cut the section rather than shipping an
empty one — the page reads stronger as "here is what I'll talk about" than as
three empty containers.

---

## P1 — shipping gaps

### 7. `stack` and `links` are collected but never rendered

Both are defined in the schema, validated (there is even a `superRefine` rule
preventing production entries from carrying a repo link), and populated for most
entries — but **nothing in `src/` reads them**. Re-confirmed: no `.astro` or
`.ts` file references `system.data.stack` or `system.data.links`.

Aires.style, MurMur, and Where&When each have a working live URL and a public
repo in frontmatter that a visitor has no way to reach. The registry rows for
those entries are not even clickable, because linking is gated on
`tier === 'featured'`.

Decide: surface `links` on the registry row (a small "live / repo" pair), or on
the case-study pages, or both. Same call for `stack`.

### 8. The two case-study formats have not converged

`System.astro` renders `<Content />` as a direct child of `<main>` with no
container. There are now **two** case studies that hand-author
`<section><div class="wrap grid">…` around every block (`second-brain`,
`buying-committee`) and **two** that use bare markdown `##` headings
(`blog-pipeline`, `where-and-when`) — so those two will render flush against the
viewport edge with none of the `.sec-head` / `.body` / `.num` treatment.

The hand-authored structure is now the de facto standard and looks right. Either
commit to it for the remaining two, or wrap `<Content />` in `.wrap` and style
bare markdown elements as a fallback. Writing item 3 in the established
structure resolves this without any layout change.

### 9. Missing `404.astro`

No 404 page. GitHub Pages will serve its own default, which breaks out of the
design entirely.

### 10. No `robots.txt`, no sitemap

Neither is in `dist/`. Add `public/robots.txt` and the `@astrojs/sitemap`
integration — `site` is already configured in `astro.config.mjs`, so the
integration is a two-line change.

### 11. No social preview image

`Base.astro` sets `og:type`, `og:title`, `og:description`, and `og:url`, but no
`og:image` and no `twitter:card` — 0 occurrences of either in the built output.
Every link shared to LinkedIn or Slack renders as a bare text card. Given the
site is aimed at speaking invitations and hiring conversations, this is worth
more than it looks.

### 12. Placeholder-handling is inconsistent

`isOutcomePending()` gives `outcome` a graceful `→` fallback. `summary`, `year`,
and `status` have no equivalent, so they print the raw string. Currently live:

- `System.astro`'s eyebrow renders `TODO` as the status — **blog-pipeline**
- `SystemCard`'s year is clean right now, but only because no featured entry has
  a `TODO` year. Promoting contentops to featured would reintroduce it.
- `FlowStrip` already handles this correctly with its `status-unknown` class

Worth generalising the pending-value handling — or better, making the schema
reject `TODO` once the content is written, so it cannot regress.

---

## P2 — polish

### 13. Default Astro assets and README

- `public/favicon.svg` and `public/favicon.ico` are still the stock Astro logo
- `README.md` is the unmodified "Astro Starter Kit: Minimal" template

### 14. `z` import is deprecated

`src/content.config.ts:1` imports `z` from `astro:content`. Astro now exports it
from `astro:schema`. Currently a hint, not an error — 26 hints total from
`astro check`, most of them this.

### 15. Font preloading

`fonts.css` uses `font-display: swap` with two self-hosted subsets, but there is
no `<link rel="preload">` for the latin woff2 in `Base.astro`. One line, helps
LCP.

### 16. Verify the Where&When entry

`summary` calls it "An iOS game", but `links.live` points at a Vercel deployment
and `links.repo` at `My_first_git_rep`. Worth a second look — either the
description or the links look wrong.

### 17. Consider a skip link

`global.css` defines `.visually-hidden` and `:focus-visible` styles, and the
header carries a fair amount of navigation before `<main>`. A skip link is cheap
and the styling hooks already exist.

### 18. Confirm the buying-committee frontmatter

Two values were inferred rather than sourced when the case study was ported:

- `year: 2026` — the source page had this bracketed as unconfirmed
- `outcome: "20+ sellers researching from one Slack channel"` — drawn from the
  page's own metrics, where the seller count is described as a floor observed
  over a four-month window

---

## Not a problem

Noting these so they do not get "fixed" later:

- Registry rows being non-clickable for `tier: registry` is a deliberate,
  consistent rule, not an oversight.
- The `superRefine` blocking `links.repo` on production entries is a good
  guardrail — keep it.
- `FlowStrip` being generated from frontmatter rather than hand-drawn is the
  right call and the comment explaining why is worth keeping.
- The `prefers-reduced-motion` handling in `FlowStrip` and the three-state theme
  handling in `global.css` are both done correctly.
- The `mark.todo` dotted placeholders in `second-brain` and `buying-committee`
  are deliberate and explained in an adjacent note. They are honest gaps in
  measurement, not unfinished copy — unlike the frontmatter `TODO`s above.
