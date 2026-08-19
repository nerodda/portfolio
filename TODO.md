# Portfolio — review & to-do

Review of the site as it stands. The architecture is in good shape: the content
collection, the schema guardrails, the flow-strip generation, and the design
system are all doing real work. What is missing is almost entirely **content**,
plus a short list of shipping gaps.

Build status: `astro build` passes, `astro check` reports 0 errors / 0 warnings.

---

## P0 — blocks a public launch

Everything here is currently visible to a visitor as the literal string `TODO`.

### 1. Fill in the placeholder frontmatter (11 systems)

| Field | Entries still `TODO` |
| --- | --- |
| `outcome` | **all 11** |
| `status` | blog-pipeline, buying-committee, client-reporting, contentops, programmatic-formats |
| `year` | buying-committee, contentops, programmatic-formats |
| `summary` | buying-committee, programmatic-formats |
| `stack` | buying-committee, contentops, programmatic-formats, where-and-when |

`outcome` is the single highest-value field on the site — it is what the
registry rows, the Selected-work cards, and `llms.txt` all lead with. Right now
every one of them falls back to a bare `→`.

### 2. Write the three empty case studies

`src/pages/systems/[slug].astro` only builds pages for `tier: featured`. Four
entries are featured; three of them are empty section skeletons:

- `blog-pipeline.md` — The problem / What I built / What broke / Result / What's reusable, all `TODO`
- `buying-committee.md` — same, plus every frontmatter field is `TODO`
- `where-and-when.md` — same

Each of these builds a live, linked, publicly reachable page that reads as five
headings over the word "TODO". Either write them or drop them to
`tier: registry` until they are ready.

### 3. Finish `second-brain.md`

The only real case study, and it is close. Remaining placeholders:

- L20 — `[Your role title]`
- L21 — `[Start date]`
- L206, 210, 214, 218 — four `[Date]` values in the timeline
- L238–240 — three metrics: `[X]` sellers onboarded, `[X hrs]` saved per seller,
  and `[X]` / `[strongest adoption or outcome number]`

The page's own "On the placeholders" note explains the missing metrics honestly
and is worth keeping — but the role, start date, and timeline dates are not
measurement gaps, they are just unfilled.

### 4. Write the About page

`src/pages/about.astro` is a shell: `credentials = ['TODO']`,
`languages = ['TODO']`, two `<p>TODO</p>` bio paragraphs, and
`description="TODO"` — which ships into the `<meta name="description">` and
`og:description` tags.

Also: `public/about-photo.svg` is a grey placeholder reading "TODO: PHOTO".
Needs a real portrait (and once it is a raster image, move it into `src/` so
Astro's image pipeline can optimise it).

### 5. Write the Speaking page

`src/pages/speaking.astro` has one `TODO` talk, one `TODO` topic, and one
`TODO` past session. The lede and the CFP invitation are written and fine.

If there are no past sessions yet, cut the section rather than shipping an
empty one — the page reads stronger as "here is what I'll talk about" than as
three empty containers.

---

## P1 — shipping gaps

### 6. `stack` and `links` are collected but never rendered

Both fields are defined in the schema, validated (there is even a `superRefine`
rule preventing production entries from carrying a repo link), and populated for
most entries — but **nothing in `src/` reads them**. Confirmed: no `.astro` or
`.ts` file references `system.data.stack` or `system.data.links`.

That means Aires.style, MurMur, and Where&When each have a working live URL and
a public repo in frontmatter that a visitor has no way to reach. The registry
rows for those entries are not even clickable, because linking is gated on
`tier === 'featured'`.

Decide: surface `links` on the registry row (a small "live / repo" pair), or
on the case-study pages, or both. Same call for `stack`.

### 7. Markdown case studies render unstyled and full-bleed

`System.astro` renders `<Content />` as a direct child of `<main>` with no
container. `second-brain.md` works around this by hand-authoring
`<section><div class="wrap grid">…` around every block. The three
markdown-authored case studies do not — so their `<h2>` and `<p>` sit flush
against the viewport edge with none of the `.sec-head` / `.body` / `.num`
treatment.

`global.css` already carries a full case-study vocabulary — `.facts`,
`.stack`, `.metrics`, `.big`, `.time`, `.note`, `.num`, `mark.todo` — used by
exactly one file. Either wrap `<Content />` in `.wrap` and style bare markdown
elements, or commit to the hand-authored HTML structure for every case study.
The current split means the pages will not look like each other.

### 8. Missing `404.astro`

No 404 page. GitHub Pages will serve its own default, which breaks out of the
design entirely.

### 9. No `robots.txt`, no sitemap

Neither is in `dist/`. Add `public/robots.txt` and the `@astrojs/sitemap`
integration — `site` is already configured in `astro.config.mjs`, so the
integration is a two-line change.

### 10. No social preview image

`Base.astro` sets `og:type`, `og:title`, `og:description`, and `og:url`, but no
`og:image` and no `twitter:card`. Every link shared to LinkedIn or Slack will
render as a bare text card. Given the site is aimed at speaking invitations and
hiring conversations, this is worth more than it looks.

### 11. Placeholder-handling is inconsistent

`isOutcomePending()` gives `outcome` a graceful `→` fallback. `summary`,
`year`, and `status` have no equivalent, so they print the raw string:

- `SystemCard` renders `TODO` where the year should be (buying-committee)
- `RegistryRow` renders `TODO` as the summary (buying-committee, programmatic-formats)
- `System.astro`'s eyebrow renders `TODO` as the status (blog-pipeline)
- `FlowStrip` already handles this correctly with its `status-unknown` class

Worth generalising the pending-value handling — or better, making the schema
reject `TODO` once the content is written, so it cannot regress.

---

## P2 — polish

### 12. Default Astro assets and README

- `public/favicon.svg` and `public/favicon.ico` are still the stock Astro logo
- `README.md` is the unmodified "Astro Starter Kit: Minimal" template

### 13. `z` import is deprecated

`src/content.config.ts:1` imports `z` from `astro:content`. Astro now exports it
from `astro:schema`. Currently a hint, not an error — 24 hints total from
`astro check`, most of them this.

### 14. Font preloading

`fonts.css` uses `font-display: swap` with two self-hosted subsets, but there is
no `<link rel="preload">` for the latin woff2 in `Base.astro`. One line, helps
LCP.

### 15. Verify the Where&When entry

`summary` calls it "An iOS game", but `links.live` points at a Vercel
deployment and `links.repo` at `My_first_git_rep`. Worth a second look — either
the description or the links look wrong.

### 16. Consider a skip link

`global.css` defines `.visually-hidden` and `:focus-visible` styles, and the
header carries a fair amount of navigation before `<main>`. A skip link is
cheap and the styling hooks already exist.

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
