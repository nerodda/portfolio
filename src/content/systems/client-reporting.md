---
name: Automated client reporting
context: production
status: live
year: May 2026
tier: featured
summary: A scheduled pipeline that pulls metrics, drafts commentary, and emails a report deck.
outcome: Replaces a manual weekly deck build with a zero-touch pipeline, delivered every Monday.
ogImage: /images/og/client-reporting.png
stack: [Vercel, Anthropic API, Model Context Protocol, Redash, Snowflake, Google Slides API, Gmail API]
flow: [Metrics pull, Analysis, Commentary, Report]
feedback: false
order: 8
lede:
  - Every Monday, a finished report deck lands in an inbox without anyone touching a keyboard. The pipeline pulls the week's metrics from a BI tool, runs three parallel Claude conversations to draft the commentary, validates every number before it is allowed near a slide, and sends the deck itself.
---

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">01</span><h2>At a glance</h2></div>
<div class="body">
<dl class="facts">
<div><dt>Role</dt><dd>I designed the pipeline architecture, decomposed the metric set into parallel task groups, wrote the task prompts, and defined every failure boundary.</dd></div>
<div><dt>Cadence</dt><dd>Every Monday at 08:00 UTC. No manual trigger, and no human step in the happy path.</dd></div>
<div><dt>Recipients</dt><dd>Account leadership and the client, by email, on a fixed distribution list.</dd></div>
<div><dt>Built on</dt><dd>The Anthropic API called directly.</dd></div>
<div><dt>Sources</dt><dd>A BI tool's saved queries and one ad-hoc SQL query, reached through a governed MCP proxy.</dd></div>
<div><dt>Writes to</dt><dd>A copied Google Slides deck, filled by API and emailed out. No document is touched by hand.</dd></div>
</dl>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">02</span><h2>The problem</h2></div>
<div class="body">
<p class="big">A weekly executive deck every Monday morning.</p>
<ol class="stack">
<li><div>
<h3>Nine numbers, every week, by hand</h3>
<p>Pulling main performance metrics out of Redash, writing commentary around them, and assembling a deck is the same sequence of steps every Monday. All of it takes a person's morning.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">03</span><h2>Architecture</h2></div>
<div class="body">
<figure>
<p class="scroll-hint">Scroll to see the full diagram</p>
<div class="diagram">
<svg viewBox="0 -16 1000 720" role="img" aria-label="Pipeline: a Cron trigger runs an orchestrator, which forks three parallel Claude tasks, each calling the Anthropic API and a Redash MCP proxy. A deterministic merge step validates the combined result before Google Slides and Gmail are called.">
<defs>
<marker id="ah3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M0,0 L10,5 L0,10 z" fill="var(--line-strong)"></path>
</marker>
</defs>
<rect class="box" x="300" y="8" width="400" height="50" rx="2"></rect>
<text class="t-title" x="500" y="38" text-anchor="middle">Cron &mdash; Monday 08:00 UTC</text>
<path class="flow" d="M500,58 L500,92" marker-end="url(#ah3)"></path>
<rect class="box" x="100" y="94" width="800" height="80" rx="2"></rect>
<text class="t-tiny" x="124" y="118">Orchestrator</text>
<text class="t-title" x="124" y="142">Builds three independent task prompts from the metric dependency graph</text>
<text class="t-sub" x="124" y="162">generate-report.ts &rarr; runParallelTasks()</text>
<path class="flow" d="M500,174 L500,200"></path>
<path class="flow" d="M180,200 L820,200"></path>
<path class="flow" d="M180,200 L180,228" marker-end="url(#ah3)"></path>
<path class="flow" d="M500,200 L500,228" marker-end="url(#ah3)"></path>
<path class="flow" d="M820,200 L820,228" marker-end="url(#ah3)"></path>
<rect class="box" x="40" y="230" width="280" height="118" rx="2"></rect>
<text class="t-tiny" x="64" y="254">Task A &middot; 180s timeout</text>
<text class="t-title" x="64" y="278">8 saved-query metrics</text>
<text class="t-sub" x="64" y="300">1-week window</text>
<text class="t-sub" x="64" y="318">Anthropic API +</text>
<text class="t-sub" x="64" y="334">Redash MCP tool-use</text>
<rect class="box" x="360" y="230" width="280" height="118" rx="2"></rect>
<text class="t-tiny" x="384" y="254">Task B &middot; 120s timeout</text>
<text class="t-title" x="384" y="278">1 metric, week-over-week</text>
<text class="t-sub" x="384" y="300">Same query, 2-week window</text>
<text class="t-sub" x="384" y="318">Anthropic API +</text>
<text class="t-sub" x="384" y="334">Redash MCP tool-use</text>
<rect class="box" x="680" y="230" width="280" height="118" rx="2"></rect>
<text class="t-tiny" x="704" y="254">Task C &middot; 120s timeout</text>
<text class="t-title" x="704" y="278">1 metric, ad-hoc SQL</text>
<text class="t-sub" x="704" y="300">Independent SLA calc</text>
<text class="t-sub" x="704" y="318">Anthropic API +</text>
<text class="t-sub" x="704" y="334">Redash MCP tool-use</text>
<path class="flow" d="M180,348 L180,376"></path>
<path class="flow" d="M500,348 L500,376"></path>
<path class="flow" d="M820,348 L820,376"></path>
<path class="flow" d="M180,376 L820,376"></path>
<path class="flow" d="M500,376 L500,404" marker-end="url(#ah3)"></path>
<rect class="box" x="200" y="406" width="600" height="100" rx="2"></rect>
<text class="t-tiny" x="224" y="430">mergeTaskResults()</text>
<text class="t-title" x="224" y="454">Deterministic validation &mdash; no model involved</text>
<text class="t-sub" x="224" y="474">Rejects missing, duplicate, or out-of-ownership metrics</text>
<text class="t-sub" x="224" y="492">Any failure here &rarr; cron returns 500. No deck, no email.</text>
<path class="flow" d="M500,506 L500,534" marker-end="url(#ah3)"></path>
<rect class="box" x="200" y="536" width="600" height="64" rx="2"></rect>
<rect class="pill" x="224" y="546" width="24" height="24" rx="2"></rect>
<image href="/logos/googleslides.svg" x="227" y="549" width="18" height="18"><title>Google Slides</title></image>
<text class="t-tiny" x="258" y="560">Google Slides API</text>
<text class="t-title" x="224" y="584">Copies the template deck, fills every placeholder</text>
<path class="flow" d="M500,600 L500,628" marker-end="url(#ah3)"></path>
<rect class="box" x="200" y="630" width="600" height="64" rx="2"></rect>
<rect class="pill" x="224" y="640" width="24" height="24" rx="2"></rect>
<image href="/logos/gmail.svg" x="227" y="643" width="18" height="18"><title>Gmail</title></image>
<text class="t-tiny" x="258" y="654">Gmail API</text>
<text class="t-title" x="224" y="678">Sends the deck link to the recipient list</text>
</svg>
</div>
<figcaption>The load-bearing detail is the merge step: nothing downstream runs on a partial result. Any task failure, timeout, or malformed response stops the run before a slide is touched.</figcaption>
</figure>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">04</span><h2>Design decisions</h2></div>
<div class="body">
<p class="big">Most of the engineering here is in what the system refuses to do.</p>
<ol class="stack">
<li><div>
<h3>Split the metric graph, not the code</h3>
<p>The nine metrics decompose into three independent groups: eight metrics sharing one saved query on a one-week window, one metric on the same query with a two-week window for week-over-week, and one metric from ad-hoc SQL. None depend on each other, so they run as three concurrent Claude conversations instead of one long one.</p>
</div></li>
<li><div>
<h3>No silent fallbacks, anywhere</h3>
<p>Every boundary in the pipeline throws with the specific failure identified, and the cron returns 500 rather than sending something incomplete.</p>
</div></li>
<li><div>
<h3>A proxy that never holds a credential</h3>
<p>The MCP server that executes queries carries no stored credentials. The caller passes them per request as headers, and the pipeline forwards only the two tools it is allowed to use &mdash; everything else the proxy offers is filtered out before Claude ever sees the tool list.</p>
</div></li>
<li><div>
<h3>Zero-touch auth</h3>
<p>Google access uses a refresh-token flow: the access token is exchanged automatically, cached for about an hour, and silently renewed. There is no interactive login anywhere in the runtime path &mdash; the only human dependency is granting the OAuth scopes once, up front.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">05</span><h2>Where it stands</h2></div>
<div class="body">
<div class="metrics">
<div class="metric"><span class="fig">9</span><span class="cap">metrics compiled into every deck, from three independent data pulls</span></div>
<div class="metric"><span class="fig">3</span><span class="cap">parallel Claude conversations per run, one per disjoint metric group</span></div>
<div class="metric"><span class="fig">6</span><span class="cap">named failure boundaries, each with a defined response &mdash; none of them &ldquo;send anyway&rdquo;</span></div>
<div class="metric"><span class="fig">Weekly</span><span class="cap">cadence, every Monday, with zero manual steps in the happy path</span></div>
<div class="metric"><span class="fig">0</span><span class="cap">partial-failure decks possible &mdash; the merge step vetoes an incomplete run before it reaches a slide</span></div>
</div>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">06</span><h2>What I did</h2></div>
<div class="body">
<p class="big">I designed and built this end to end.</p>
<ol class="stack">
<li><div>
<h3>Decomposed the metric set into a dependency graph</h3>
<p>Mapping which metrics share a query, a window, or a source is what made the parallel split possible.</p>
</div></li>
<li><div>
<h3>Wrote the merge contract</h3>
<p>Defined exactly what a valid combined result looks like &mdash; no missing metric, no duplicate, no metric claimed by the wrong task &mdash; and made that check deterministic code rather than another model call.</p>
</div></li>
<li><div>
<h3>Specified every failure boundary before the happy path</h3>
<p>Each row in &ldquo;Where it can fail&rdquo; was written before the corresponding feature, not discovered after an incident. The rule throughout: fail closed, name the boundary, never guess.</p>
</div></li>
<li><div>
<h3>Covered it with tests, not just a live run</h3>
<p>The test suite covers week-range math, the prompt builders, the merge contract, MCP client behaviour, environment-variable handling, cron auth, and the email builder &mdash; so the pipeline's failure modes are verifiable without waiting for next Monday.</p>
</div></li>
</ol>
</div>
</div>
</section>
