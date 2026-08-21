---
name: AI Resume Builder
context: production
status: live
year: March 2026
tier: featured
summary: Builds a tailored CV from a job post, a LinkedIn profile, or an existing resume.
outcome: Live and public, free to any job seeker, no account or login required.
stack: [Next.js, OpenAI API, Apify]
flow: [Job post, LinkedIn, or CV, AI tailoring, ATS-ready draft, Download]
feedback: false
order: 7
lede:
  - The first version was a solo build. I vibe-coded an MVP end to end to prove the idea would actually pull traffic. Once it did, it was handed to a development partner and rebuilt as a proper product, with real infrastructure in place of the shortcuts that got the proof of concept out the door.
  - "It still does the same job: turn a job post, a LinkedIn profile, or an existing resume into a tailored, ATS-ready CV, free and without an account."
---

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">01</span><h2>At a glance</h2></div>
<div class="body">
<dl class="facts">
<div><dt>Hypothesis</dt><dd>Content pages were losing traffic to AI-generated answers that skip the click-through entirely. The bet was a lead magnet: a tool people actually have to visit and use, not an article an AI answer can summarize away.</dd></div>
<div><dt>Role</dt><dd>AI Martech Manager. Wrote the product brief, built the MVP myself, then owned the architecture and prompt design for the rebuild with an external development partner.</dd></div>
<div><dt>Timeframe</dt><dd>MVP built solo, October to December 2025. Rebuilt and relaunched March 2026.</dd></div>
<div><dt>Users</dt><dd>Job seekers at every stage: a first resume, a career change, or a first English-language CV after moving countries.</dd></div>
<div><dt>Built on</dt><dd>Next.js, the OpenAI API for tailoring and enhancement, and Apify for LinkedIn import.</dd></div>
<div><dt>Surface</dt><dd>Embedded in an iframe, no account or login required.</dd></div>
</dl>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">02</span><h2>The problem</h2></div>
<div class="body">
<p class="big">A resume builder had to earn its own traffic before it could prove anything else.</p>
<ol class="stack">
<li><div>
<h3>The business case was SEO, not just a tool</h3>
<p>Semrush says monthly searches for &ldquo;resume builder&rdquo; and related keywords run roughly 368,000. The product had to be good enough to rank and convert.</p>
</div></li>
<li><div>
<h3>Not everyone starts from the same place</h3>
<p>A recent graduate has no experience to tailor. A career changer needs existing experience reframed, not rewritten. Someone who just moved countries needs help with conventions they don't know exist yet.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">03</span><h2>From MVP to platform</h2></div>
<div class="body">
<p class="big">The first version was built to answer one question: would anyone use this?</p>
<p>I built it myself in about two months, a working product, not a prototype: OpenAI-based tailoring, a guided step-by-step form with autosave, LinkedIn import, and client-side PDF and DOCX export. It shipped, it got traffic, and it proved the case in the brief. It also shipped with the shortcuts a solo build takes to move fast.</p>
<ol class="stack">
<li><div>
<h3>Rate limiting</h3>
<p>The MVP counted requests in memory, per server process &mdash; a comment in the code says as much: &ldquo;for production, consider Redis.&rdquo; The rebuild moved limits to Upstash Redis, enforced per action, so they hold up across serverless instances instead of resetting on every cold start.</p>
</div></li>
<li><div>
<h3>Export</h3>
<p>The MVP generated the PDF with jsPDF and the DOCX with the <code>docx</code> package, both running in the visitor's own browser. The rebuild renders server-side with a headless Chromium instance, so the download doesn't depend on whatever fonts a visitor's browser happens to have, and matches the live preview exactly.</p>
</div></li>
<li><div>
<h3>Prompts</h3>
<p>The MVP's entire resume prompt was one hardcoded file. The rebuild split it into five versioned strategies stored in Postgres, editable through an authenticated admin API, without a redeploy.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">04</span><h2>Architecture</h2></div>
<div class="body">
<figure>
<p class="scroll-hint">Scroll to see the full diagram</p>
<div class="diagram">
<svg viewBox="0 -16 1000 560" role="img" aria-label="Architecture: three entry paths, a job description, a LinkedIn URL, or an uploaded resume, each resolve asynchronously to one canonical resume schema. A five-strategy enhancement engine runs against that schema, with prompts loaded from Postgres. A headless Chromium instance renders the final PDF.">
<defs>
<marker id="ah4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M0,0 L10,5 L0,10 z" fill="var(--line-strong)"></path>
</marker>
</defs>
<rect class="box" x="40" y="8" width="280" height="112" rx="2"></rect>
<text class="t-tiny" x="64" y="32">PATH 1 &middot; JOB POST</text>
<text class="t-title" x="64" y="56">Tailor to a job description</text>
<text class="t-sub" x="64" y="78">OpenAI rewrites against the posting</text>
<rect class="box" x="360" y="8" width="280" height="112" rx="2"></rect>
<text class="t-tiny" x="384" y="32">PATH 2 &middot; LINKEDIN</text>
<text class="t-title" x="384" y="56">Import a LinkedIn URL</text>
<text class="t-sub" x="384" y="78">Apify scrape + OpenAI structuring</text>
<rect class="box" x="680" y="8" width="280" height="112" rx="2"></rect>
<text class="t-tiny" x="704" y="32">PATH 3 &middot; UPLOAD</text>
<text class="t-title" x="704" y="56">Upload PDF / DOC / DOCX</text>
<text class="t-sub" x="704" y="78">Format parser + OpenAI structuring</text>
<path class="flow" d="M180,120 L180,148"></path>
<path class="flow" d="M500,120 L500,148"></path>
<path class="flow" d="M820,120 L820,148"></path>
<path class="flow" d="M180,148 L820,148"></path>
<path class="flow" d="M500,148 L500,176" marker-end="url(#ah4)"></path>
<rect class="box" x="200" y="176" width="600" height="90" rx="2"></rect>
<text class="t-tiny" x="224" y="200">lib/schemas/resume.ts</text>
<text class="t-title" x="224" y="224">One bidirectional schema, front end to back end</text>
<text class="t-sub" x="224" y="244">4 roles kept &middot; 20 skills &middot; 1000-char fields &middot; uploads capped at 3&nbsp;MB</text>
<path class="flow" d="M500,266 L500,294" marker-end="url(#ah4)"></path>
<rect class="box" x="200" y="296" width="600" height="130" rx="2"></rect>
<text class="t-tiny" x="224" y="320">ENHANCEMENT ENGINE &middot; 5 STRATEGIES, IN SEQUENCE</text>
<g class="t-pill" text-anchor="middle">
<rect class="pill" x="218" y="334" width="108" height="26" rx="2"></rect><text x="272" y="352">Personal info</text>
<rect class="pill" x="332" y="334" width="108" height="26" rx="2"></rect><text x="386" y="352">Experience</text>
<rect class="pill" x="446" y="334" width="108" height="26" rx="2"></rect><text x="500" y="352">Skills</text>
<rect class="pill" x="560" y="334" width="108" height="26" rx="2"></rect><text x="614" y="352">Grammar</text>
<rect class="pill" x="674" y="334" width="108" height="26" rx="2"></rect><text x="728" y="352">Tone</text>
</g>
<text class="t-sub" x="224" y="384">Each strategy's prompt is a versioned row in Postgres, editable through an admin API</text>
<text class="t-sub" x="224" y="402">Progress is persisted per strategy, so the UI can show which one is running</text>
<path class="flow" d="M500,426 L500,454" marker-end="url(#ah4)"></path>
<rect class="box" x="200" y="456" width="600" height="72" rx="2"></rect>
<text class="t-tiny" x="224" y="480">PUPPETEER + HEADLESS CHROMIUM</text>
<text class="t-title" x="224" y="504">Renders the live preview 1:1 into the PDF download</text>
</svg>
</div>
<figcaption>The load-bearing detail is the shared schema: three very different intake paths resolve to one contract, so the enhancement engine and the PDF renderer never need to know which door the resume came through.</figcaption>
</figure>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">05</span><h2>Design decisions</h2></div>
<div class="body">
<ol class="stack">
<li><div>
<h3>Never invent a number</h3>
<p>The tailoring and enhancement prompts are explicit: rewrite and reorder, never invent or change a user-provided number. A resume is the one document where a plausible-sounding fabrication is worse than an awkward truth.</p>
</div></li>
<li><div>
<h3>Async by default</h3>
<p>Every AI or scraping call returns a session ID immediately instead of holding the connection open. The client polls for the result. LinkedIn scrapes and a five-strategy enhancement run can take longer than a serverless function wants to hold a request, so nothing blocks on them.</p>
</div></li>
<li><div>
<h3>One schema, three doors</h3>
<p>A job post, a LinkedIn URL, and an uploaded file are three very different inputs, but all three resolve to the same canonical resume schema before anything downstream touches them.</p>
</div></li>
<li><div>
<h3>Nothing is kept</h3>
<p>There's no database for resume content. A session-scoped payload expires after 24 hours &mdash; nothing about what a job seeker wrote sticks around after they're done.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">06</span><h2>Where it stands</h2></div>
<div class="body">
<div class="metrics">
<div class="metric"><span class="fig">5</span><span class="cap">enhancement strategies run per resume: personal info, experience, skills, grammar, tone</span></div>
<div class="metric"><span class="fig">3</span><span class="cap">ways in: a job post, a LinkedIn profile, or an uploaded resume</span></div>
<div class="metric"><span class="fig"><mark class="todo">[X]</mark></span><span class="cap">monthly organic sessions</span></div>
<div class="metric"><span class="fig"><mark class="todo">[X]%</mark></span><span class="cap">completion rate, form start to download</span></div>
<div class="metric"><span class="fig"><mark class="todo">[X]</mark></span><span class="cap"><mark class="todo">[strongest downstream outcome]</mark></span></div>
</div>
<p><strong>On the placeholders.</strong> The traffic and conversion numbers are real and tracked &mdash; I just don't have them in front of me while writing this. I'd rather leave the gap visible than guess.</p>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">07</span><h2>What I did</h2></div>
<div class="body">
<p class="big">I wrote the brief, built the first version myself, then owned the product for the rebuild.</p>
<ol class="stack">
<li><div>
<h3>Wrote the product brief</h3>
<p>Defined the business case, the user personas, and the feature set &mdash; including where AI should structure input versus where it should stay hands off a user's own numbers.</p>
</div></li>
<li><div>
<h3>Built and shipped the MVP solo</h3>
<p>Coded the whole first version myself: the guided form, the OpenAI integration, LinkedIn import, and the export flow. It was the fastest way to find out whether the traffic case actually held.</p>
</div></li>
<li><div>
<h3>Specified the rebuild</h3>
<p>Once the MVP proved the concept, I defined what &ldquo;production-grade&rdquo; meant for this product specifically &mdash; real rate limiting, real PDF rendering, prompts as editable data &mdash; and worked with an external development partner to build it.</p>
</div></li>
</ol>
</div>
</div>
</section>
