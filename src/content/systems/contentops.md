---
name: ContentOps
context: production
status: prototype
year: May 2026
tier: featured
summary: Brand-aware content generation, a channel pipeline, and a feedback loop from performance.
outcome: 500+ pages shipped, 20+ skills versioned, rebuilt in Cursor after Lovable stopped scaling.
stack: [Cursor, Supabase, TypeScript, Payload, OpenAI, Meta, Google Ads, TikTok, LinkedIn]
flow: [Brand DNA, Skills, Campaign, Publish, Performance]
feedback: true
order: 9
lede:
  - A brand's voice was only as consistent as whoever wrote that day's post, and a campaign's results never made it back into how the next one got written. ContentOps is the system that closes both gaps — a workspace where voice is structured once, content is generated against it per channel, and performance data trains the next draft.
  - It also has a version-one story. The first build stood the whole thing up fast inside Lovable, an AI app builder, and Lovable is exactly where it stopped being able to grow.
---

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">01</span><h2>At a glance</h2></div>
<div class="body">
<dl class="facts">
<div><dt>Role</dt><dd>I designed the architecture and own the skills/prompt system, and I build and evolve the app directly, in Cursor, rather than through a no-code builder.</dd></div>
<div><dt>Built on</dt><dd>React and TypeScript on Supabase (Postgres, Auth, Storage), Payload CMS for owned pages, and functions for generation, evaluation, and publishing.</dd></div>
<div><dt>Publishes to</dt><dd>Payload-backed website pages, plus Meta, Google Ads, TikTok, and LinkedIn through native publish and discovery functions.</dd></div>
<div><dt>Quality gate</dt><dd>A new skill version is scored against a frozen set of golden briefs before it can become the version generation actually uses.</dd></div>
<div><dt>Status</dt><dd>In progress. The generation-to-publish loop is live; team review and a cross-campaign content view are still being built.</dd></div>
</dl>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">02</span><h2>The problem</h2></div>
<div class="body">
<p class="big">A brand's voice was only as consistent as whoever wrote that day's post.</p>
<ol class="stack">
<li><div>
<h3>Every channel needed its own copy, written by hand</h3>
<p>A Google RSA, a Meta ad, a LinkedIn post, and an email each carry their own character limits and structure. Each one got rewritten from scratch by whoever was free, and consistency depended on how closely that person happened to follow guidelines nobody was checking against.</p>
</div></li>
<li><div>
<h3>Brand voice lived in a document, not in the tool</h3>
<p>Voice, audience, and product guidelines existed as a reference doc. Whether a given piece of copy actually reflected them was a matter of who wrote it and how recently they'd reread it, which means it was not reliable.</p>
</div></li>
<li><div>
<h3>Performance never fed back into production</h3>
<p>A campaign's results sat in an ads dashboard. The next brief got written the same way regardless of what the last one proved, so nothing about the system improved with volume — it just got more expensive to run at volume.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">03</span><h2>Where it stands</h2></div>
<div class="body">
<div class="metrics">
<div class="metric"><span class="fig">500+</span><span class="cap">website pages generated and published through the pipeline</span></div>
<div class="metric"><span class="fig">20+</span><span class="cap">per-content-type skills authored and versioned</span></div>
<div class="metric"><span class="fig">34</span><span class="cap">edge functions running generation, evaluation, and publishing</span></div>
<div class="metric"><span class="fig">5</span><span class="cap">channels wired for one-click publish: Payload, Meta, Google Ads, TikTok, LinkedIn</span></div>
</div>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">04</span><h2>How it works</h2></div>
<div class="body">
<figure>
<p class="scroll-hint">Scroll to see the full diagram</p>
<div class="diagram pastel-c">
<svg viewBox="0 0 1080 620" role="img" aria-label="Loop: a workspace defines Brand DNA once, skills are authored and versioned against a golden-brief quality gate, a campaign generates and reviews drafts against the champion skill version, drafts publish to Payload and four ad platforms, and daily performance data feeds a weekly digest that proposes an improved skill version, gated by golden briefs and a human approval, back into the skills stage.">
<defs>
<marker id="ahco" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M0,0 L10,5 L0,10 z" fill="var(--line-strong)"/>
</marker>
</defs>
<rect class="box" x="100" y="8" width="800" height="64" rx="2"/>
<text class="t-tiny" x="124" y="30">Input, once per workspace</text>
<text class="t-title" x="124" y="54">A team defines Brand DNA — voice, audiences, products, competitors, goals</text>
<path class="flow" d="M500,72 L500,100" marker-end="url(#ahco)"/>
<rect class="box" x="100" y="102" width="800" height="108" rx="2"/>
<text class="t-tiny" x="124" y="124">Configuration</text>
<text class="t-title" x="124" y="146">Per-content-type skills: a system prompt plus guidelines and limits</text>
<g class="t-pill" text-anchor="middle">
<rect class="pill" x="124" y="156" width="180" height="26" rx="2"/><text x="214" y="173">Author or import</text>
<rect class="pill" x="314" y="156" width="180" height="26" rx="2"/><text x="404" y="173">skill_versions</text>
<rect class="pill" x="504" y="156" width="180" height="26" rx="2"/><text x="594" y="173">Golden briefs</text>
<rect class="pill" x="694" y="156" width="180" height="26" rx="2"/><text x="784" y="173">Judge score</text>
</g>
<text class="t-sub" x="124" y="200">Every save snapshots a version. A judge scores each candidate against frozen briefs before it can go live.</text>
<path class="flow" d="M500,210 L500,238" marker-end="url(#ahco)"/>
<rect class="box" x="100" y="240" width="800" height="106" rx="2"/>
<text class="t-tiny" x="124" y="262">Production</text>
<text class="t-title" x="124" y="284">A brief becomes reviewed, on-brand drafts inside one campaign workspace</text>
<g class="t-pill" text-anchor="middle">
<rect class="pill" x="124" y="294" width="180" height="26" rx="2"/><text x="214" y="311">Brief</text>
<rect class="pill" x="314" y="294" width="180" height="26" rx="2"/><text x="404" y="311">Generate</text>
<rect class="pill" x="504" y="294" width="180" height="26" rx="2"/><text x="594" y="311">Variations</text>
<rect class="pill" x="694" y="294" width="180" height="26" rx="2"/><text x="784" y="311">Human review</text>
</g>
<text class="t-sub" x="124" y="338">Generation calls the champion skill version and records exactly which version produced each draft.</text>
<path class="flow" d="M500,346 L500,374" marker-end="url(#ahco)"/>
<rect class="box" x="100" y="376" width="800" height="138" rx="2"/>
<text class="t-tiny" x="124" y="398">Output, one click</text>
<text class="t-title" x="124" y="420">Payload for owned pages, four ad platforms through native publish functions</text>
<g class="t-pill" text-anchor="middle">
<rect class="pill" x="124" y="430" width="180" height="26" rx="2"/><text x="214" y="447">Payload CMS</text>
<rect class="pill" x="314" y="430" width="180" height="26" rx="2"/><text x="404" y="447">Meta</text>
<rect class="pill" x="504" y="430" width="180" height="26" rx="2"/><text x="594" y="447">Google Ads</text>
<rect class="pill" x="694" y="430" width="180" height="26" rx="2"/><text x="784" y="447">TikTok</text>
<rect class="pill" x="124" y="464" width="180" height="26" rx="2"/><text x="214" y="481">LinkedIn</text>
</g>
<text class="t-sub" x="124" y="506">Each platform gets its own discovery step to pick an account or campaign, and UTM parameters are generated automatically on publish.</text>
<path class="flow" d="M500,514 L500,542" marker-end="url(#ahco)"/>
<rect class="box" x="100" y="544" width="800" height="64" rx="2"/>
<text class="t-tiny" x="124" y="566">Feedback</text>
<text class="t-title" x="124" y="590">Daily metrics sync back from every platform into one performance table</text>
<path class="flow dash" d="M900,576 C1030,576 1030,156 900,156" marker-end="url(#ahco)"/>
<text class="t-tiny" x="916" y="360">Weekly digest,</text>
<text class="t-tiny" x="916" y="372">human-approved</text>
</svg>
</div>
<figcaption>The dashed line is the part that makes this a loop rather than a pipeline. A weekly job drafts an improved skill version from what actually performed, but it only ever files a proposal — a person approves the promotion, and the golden-brief judge has to agree it's better first.</figcaption>
</figure>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">05</span><h2>Version one, and why it changed</h2></div>
<div class="body">
<p class="big">The first version was fast to stand up and expensive to keep.</p>
<ol class="stack">
<li><div>
<h3>Lovable proved the shape, then became the constraint</h3>
<p>The initial build was assembled in Lovable, an AI app builder, which is a fast way to get a real multi-tenant app — auth, a database, dozens of edge functions — in front of a team. It got the architecture right early: Brand DNA, skills, campaigns, and the Supabase schema underneath all trace back to that first pass. What didn't hold up was iterating on it at the pace a skills-versioning and evaluation system needs. Lovable bills by usage, and every prompt-driven change to a backend this size is a paid generation, not a local edit.</p>
</div></li>
<li><div>
<h3>Moving into Cursor made the codebase mine again</h3>
<p>The app moved from being generated through Lovable's chat interface to being developed directly, in Cursor, against the same Supabase project. Nothing about the data model or the edge functions had to be thrown away — changing tools changed how the code got written, not what it was.</p>
</div></li>
<li><div>
<h3>A headless CMS replaced a dashboard as the output</h3>
<p>The heaviest use case — generating and publishing website pages at volume — didn't need a bespoke content dashboard as its final home. Payload, a headless CMS, became the publish target for owned pages, which is where most of the 500+ pages this system has produced actually live.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">06</span><h2>Design decisions</h2></div>
<div class="body">
<p class="big">Most of these exist to make the feedback loop trustworthy, not just fast.</p>
<ol class="stack">
<li><div>
<h3>A skill is a version, not a live prompt</h3>
<p>Every edit snapshots an immutable row in <code>skill_versions</code> rather than overwriting what's currently running. Generation records exactly which version produced a given draft, so a performance number always traces back to a specific, inspectable configuration — not "the current prompt," which by the time anyone asks has usually already changed.</p>
</div></li>
<li><div>
<h3>Champion and shadow, not one live version</h3>
<p>Each skill carries a champion version, the one generation actually uses, and a shadow version, a candidate being evaluated. A new version has to clear the golden-brief judge before it's promoted, so an improvement is a comparison against a frozen benchmark rather than a feeling that the new copy reads better.</p>
</div></li>
<li><div>
<h3>Golden briefs are frozen on purpose</h3>
<p>The benchmark inputs used to grade a skill version are curated once and then locked. If the test set could drift alongside every skill change, a version could look improved simply because the bar it was measured against moved with it.</p>
</div></li>
<li><div>
<h3>Secrets never reach the browser</h3>
<p>Platform credentials for Meta, Google Ads, and the rest are written and read only inside edge functions, using the service role. The client reads a credential-stripped view of the same table. A compromised browser session can't leak an ad account's access token, because it was never sent one.</p>
</div></li>
<li><div>
<h3>The loop proposes. A person approves</h3>
<p>The weekly digest job drafts an improved skill version and files it as a proposal — it doesn't self-promote. Every version currently live got there because someone read the golden-brief scores and the real traffic and decided it was actually better, not because a cron job decided for them.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">07</span><h2>What I did</h2></div>
<div class="body">
<p class="big">I designed the architecture and the skills system, and I'm the one building it — in Cursor, not a no-code tool.</p>
<ol class="stack">
<li><div>
<h3>Designed the multi-tenant data model</h3>
<p>Projects as the tenant boundary, Brand DNA and skills scoped underneath it, row-level security on every table keyed to project membership. That structure is what lets campaigns, skills, and performance data all live in one place without one team's content ever being queryable by another's.</p>
</div></li>
<li><div>
<h3>Built the skills and evaluation system</h3>
<p>The <code>skill_versions</code> / <code>skill_runs</code> / <code>golden_briefs</code> / <code>skill_evals</code> / <code>skill_proposals</code> chain — the part of the system that turns "the AI wrote something" into "the AI wrote something, we know which version, and we know if it's actually good." This is what makes the loop a loop instead of a one-way pipe.</p>
</div></li>
<li><div>
<h3>Moved development off Lovable and into Cursor</h3>
<p>Kept the Supabase schema and the edge functions, changed how they get written. What used to be a paid, chat-driven generation against the whole app became ordinary version-controlled development against the same backend.</p>
</div></li>
<li><div>
<h3>Introduced Payload as the publish target for owned pages</h3>
<p>Wired page generation to a headless CMS instead of a bespoke dashboard, which accounts for most of the 500+ pages this system has shipped — Payload structures and serves them, ContentOps just has to produce a draft worth publishing.</p>
</div></li>
<li><div>
<h3>Wired the ad-platform integrations</h3>
<p>Discovery and publish functions for Meta, Google Ads, TikTok, and LinkedIn, each with its own account or campaign picker and its own publish shape, sharing one UTM-generation utility so attribution stays consistent across all four.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">08</span><h2>What's next</h2></div>
<div class="body">
<ol class="stack">
<li><div>
<h3>Team and approval workflow</h3>
<p>Today the app is built for a solo marketer's loop: draft, review, publish. Making it a team's system means invite and role management, a reviewer assigned per piece, threaded comments, and an audit trail of who approved what — the single biggest blocker to using this beyond one person.</p>
</div></li>
<li><div>
<h3>One view across every campaign</h3>
<p>Content currently lives inside whichever campaign created it. Past a handful of campaigns, "show me everything we shipped to LinkedIn last month" means clicking through each one by hand. A searchable, filterable content index is the fix, and it's next.</p>
</div></li>
</ol>
</div>
</div>
</section>
