---
name: Sales Second Brain
context: production
status: live
year: June 2026
tier: featured
summary: Compiles scattered source docs into a cited wiki that AI coding tools read from directly.
outcome: 50 sellers across two regions, 10 hours of research saved each week.
ogImage: /images/og/second-brain.png
stack: [Model Context Protocol, Cursor, Claude Code, OpenAI, Relevance AI, Google Drive, Outreach, Salesforce, Slack, Obsidian]
flow: [Drive corpus, Ingestion, Index, Answer & generate]
feedback: false
order: 6
lede:
  - Digital system used to store, organize, and retrieve sales team related information, notes, and learnings.
---

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">01</span><h2>At a glance</h2></div>
<div class="body">
<dl class="facts">
<div><dt>Role</dt><dd>AI Martech Manager. I owned the product, the roadmap, the architecture decisions, and teams onboarding.</dd></div>
<div><dt>Timeframe</dt><dd>June 2026 to present. Shipped and in daily use by the US and UK sales team.</dd></div>
<div><dt>Team</dt><dd>An engineer from an external development partner and a brand designer. I was the only product and domain owner.</dd></div><div><dt>Built with</dt><dd>Model Context Protocol, Cursor or Claude plugin architecture, Relevance AI, Google Drive, Outreach, Salesforce.</dd></div>
</dl>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">02</span><h2>The problem</h2></div>
<div class="body">
<p class="big">Four problems, and the third one made the first two worse.</p>
<ol class="stack">
<li><div>
<h3>The same research, over and over</h3>
<p>Every seller rebuilt the same picture of an account before every call. That work was thrown away the moment the call ended, so the next person started from nothing.</p>
</div></li>
<li><div>
<h3>Knowledge with no home</h3>
<p>Calls sat in a recording tool, emails in Outreach, pipeline in Salesforce, positioning in Drive, and the rest in whoever happened to run the account. No single place answered the question &ldquo;what is going on with this client.&rdquo;</p>
</div></li>
<li><div>
<h3>An assistant nobody could trust</h3>
<p>A general AI assistant answers confidently whether or not it knows anything. In sales that is not a small flaw. One invented number in front of a client costs more than the tool saves, so sellers stop using it, and adoption dies quietly.</p>
</div></li>
<li><div>
<h3>Every deck and one-pager built by hand</h3>
<p>A sales deck took hours in Figma or PowerPoint, a one-pager took most of an afternoon, and fonts, colours and spacing drifted off-brand from asset to asset. One team was the bottleneck for every request, and every new asset re-solved problems already solved before.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">03</span><h2>What was built</h2></div>
<div class="body">
<p class="big">One plugin, 15+ skills, built on one knowledge layer.</p>
<p>It runs as a plugin inside the tools sellers already have open, so there is no new application to log into. 15+ skills sit on top of the same knowledge layer: cited question and answer, live enrichment, a value selling methodology engine, and a branded asset generator that produces editable client decks and one pagers.</p>
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
<svg viewBox="0 -16 1000 768" role="img" aria-label="System architecture: seller queries a plugin, which reads through a read-only wiki MCP and a governed connectors MCP. The ingest backend owns all writes to the knowledge base.">
<defs>
<marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M0,0 L10,5 L0,10 z" fill="var(--line-strong)"></path>
</marker>
</defs>
<rect class="box" x="350" y="8" width="300" height="50" rx="2"></rect>
<text class="t-title" x="500" y="38" text-anchor="middle">Seller asks a question</text>
<path class="flow" d="M500,58 L500,96" marker-end="url(#ah)"></path>
<rect class="box" x="100" y="98" width="800" height="118" rx="2"></rect>
<text class="t-tiny" x="124" y="122">Interface</text>
<text class="t-title" x="124" y="146">Second Brain plugin, running inside Cursor or Claude</text>
<g class="t-pill" text-anchor="middle">
<rect class="pill" x="124" y="162" width="116" height="30" rx="2"></rect><text x="182" y="181">ask-wiki</text>
<rect class="pill" x="248" y="162" width="108" height="30" rx="2"></rect><text x="302" y="181">enrich</text>
<rect class="pill" x="364" y="162" width="136" height="30" rx="2"></rect><text x="432" y="181">value-selling</text>
<rect class="pill" x="508" y="162" width="124" height="30" rx="2"></rect><text x="570" y="181">brand-deck</text>
<rect class="pill" x="640" y="162" width="132" height="30" rx="2"></rect><text x="706" y="181">brand-assets</text>
<rect class="pill" x="780" y="162" width="96" height="30" rx="2"></rect><text x="828" y="181">help</text>
</g>
<path class="flow" d="M500,216 L500,242"></path>
<path class="flow" d="M270,242 L730,242"></path>
<path class="flow" d="M270,242 L270,274" marker-end="url(#ah)"></path>
<path class="flow" d="M730,242 L730,274" marker-end="url(#ah)"></path>
<rect class="box" x="100" y="276" width="340" height="106" rx="2"></rect>
<text class="t-tiny" x="124" y="300">MCP server 1</text>
<text class="t-title" x="124" y="324">wiki</text>
<text class="t-sub" x="124" y="346">Read only. No write tool exists</text>
<text class="t-sub" x="124" y="362">in the assistant&apos;s scope.</text>
<rect class="box" x="560" y="276" width="340" height="106" rx="2"></rect>
<text class="t-tiny" x="584" y="300">MCP server 2</text>
<text class="t-title" x="584" y="324">connectors</text>
<text class="t-sub" x="584" y="346">Governed proxy.</text>
<text class="t-sub" x="584" y="362">Allowlisted agents only.</text>
<path class="flow" d="M270,382 L270,436" marker-end="url(#ah)"></path>
<text class="t-tiny" x="282" y="414">reads</text>
<path class="flow" d="M730,382 L730,436" marker-end="url(#ah)"></path>
<text class="t-tiny" x="742" y="414">runs</text>
<rect class="box" x="100" y="438" width="340" height="122" rx="2"></rect>
<text class="t-tiny" x="124" y="462">Knowledge base</text>
<text class="t-title" x="124" y="486">Catalog, then folder per entity</text>
<text class="t-sub" x="124" y="508">index.md, accounts/&lt;company&gt;/,</text>
<text class="t-sub" x="124" y="524">branches/&lt;site&gt;/, context/</text>
<text class="t-sub" x="124" y="540">Every page carries its source.</text>
<rect class="box" x="560" y="438" width="340" height="122" rx="2"></rect>
<text class="t-tiny" x="584" y="462">Enrichment</text>
<text class="t-title" x="584" y="486">Connects tools to pull context</text>
<text class="t-sub" x="584" y="508">Outreach, Salesforce, Drive and more.</text>
<text class="t-sub" x="584" y="524">Rate limited and spend logged.</text>
<path class="flow dash" d="M730,560 L730,618" marker-end="url(#ah)"></path>
<text class="t-tiny" x="742" y="594">queues result</text>
<rect class="box" x="100" y="620" width="800" height="108" rx="2"></rect>
<text class="t-tiny" x="124" y="644">Ingest backend</text>
<text class="t-title" x="124" y="668">Owns every write to the knowledge base</text>
<text class="t-sub" x="124" y="692">Nightly sync from Google Drive, Outreach, Salesforce and others. Only records changed since</text>
<text class="t-sub" x="124" y="708">the last run are reprocessed. Deduplication runs before any new company folder is created.</text>
<path class="flow" d="M270,620 L270,562" marker-end="url(#ah)"></path>
<text class="t-tiny" x="282" y="594">writes</text>
</svg>
</div>
<figcaption>The load bearing detail is the direction of the arrows. The assistant reads. Only the backend writes.</figcaption>
</figure>
<figure>
<div class="diagram pastel-b">
<img src="/images/second-brain-cursor-hub.png" alt="Diagram from the internal rollout deck showing Cursor at the center, connected to Slack, Snowflake, Tableau, Salesforce, Outreach, Headless CMS and Kaia." loading="lazy" />
</div>
<figcaption>From the internal rollout deck: Cursor as the brain interface. Every connected system feeds it, and every team self-serves from it in one place.</figcaption>
</figure>
<figure>
<div class="diagram pastel-c">
<img src="/images/second-brain-context-structure.png" alt="The context/ knowledge architecture from the internal rollout deck, showing folders for brand, personas, market, product, proof, competition, selling, sops, and the registry trust spine." loading="lazy" />
</div>
<figcaption>The context/ folder structure the assistant navigates instead of searching: brand, personas, market and product on one side, proof, competition, selling and sops on the other, all anchored by a registry that tracks claims, conflicts, gaps and sources.</figcaption>
</figure>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">05</span><h2>Design decisions</h2></div>
<div class="body">
<p class="big">Four calls that decide whether a system like this gets used or quietly abandoned.</p>
<ol class="stack">
<li><div>
<h3>Navigate, do not search</h3>
<p>The obvious build is full text search over everything. We did the opposite. The knowledge base is a catalog plus one folder per company, and the assistant browses it the way you would browse a well organized wiki: find the company in the index, open its folder, read the page whole.</p>
<p>Search returns fragments that look relevant and often are not. Navigation returns the actual page. It is more precise, it costs a fraction of the tokens, and it fails visibly instead of silently.</p>
</div></li>
<li><div>
<h3>Cite every claim, or do not make it</h3>
<p>Every fact in an answer carries the path of the page it came from, so a seller can check it in one click before it reaches a client. If the knowledge base does not cover something, the assistant says so and names the source that would need to be added. It is not allowed to fill the gap from general knowledge.</p>
<p>This is the decision that bought trust. Sellers do not need an assistant that is right most of the time. They need one that is honest about which of the two it is being.</p>
</div></li>
<li><div>
<h3>The assistant cannot write</h3>
<p>There is no write tool in the assistant&rsquo;s scope at all. Not a restricted one, not a permissioned one. The backend owns every write to the knowledge base.</p>
<p>The cost is real: users cannot tell the system to remember something, and that surprises people. The benefit is that a shared source of truth used by a whole sales team cannot be corrupted by one confused chat session. For a system whose only asset is trust, that trade is worth making.</p>
</div></li>
<li><div>
<h3>Research once, then reuse</h3>
<p>A live research run does two things. It answers the person waiting, clearly labeled as fresh and not yet filed. It also queues the result for ingestion, so the same question next month is a cited page instead of another paid research run.</p>
<p>Every filed result carries a date stamp, so a seller can see at a glance how stale it is and rerun the research themselves if the account has moved on.</p>
<p>This is what turns the tool from an expensive lookup into an asset that gets more valuable the more the team uses it.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">06</span><h2>How I delivered it</h2></div>
<div class="body">
<p>I ran this as the product owner with a two person external engineering team on a fixed hour contract and an internal brand designer. I set the roadmap, made the data and architecture calls, and ran the rollout. Three decisions were mine and worth showing.</p>
<ol class="stack">
<li><div>
<h3>Two connections to one system, because neither was enough</h3>
<p>Pulling sales activity out of Outreach looked like a one connector job. It was not. The HTTP API returned full account and email data but truncated call transcripts. The MCP interface returned full transcripts through GraphQL but lacked the application level access points. Each alone produced a knowledge base with a hole in it.</p>
<p>We reviewed 38 endpoints and built against both, handled server side so the plugin never had to know.</p>
</div></li>
<li><div>
<h3>One server, two scoped roots, for the UK expansion</h3>
<p>The US rollout worked, UK leadership saw a demo, and the UK team asked for their own. The default answer is a second deployment. That would have duplicated a multi gigabyte shared asset library and doubled the maintenance surface for a team of one engineer.</p>
<p>Instead: one server, two top level content roots, and access scoped by token. A UK token has no awareness of US data and the reverse holds. Shared material lives once at the top level and compiles into both regions. Region specific material sits in its own root.</p>
</div></li>
<li><div>
<h3>Designing the running cost down</h3>
<p>A system that reprocesses everything nightly with a language model has a bill that grows with the knowledge base. So the sync filters on last updated time and only touches records that actually changed. Pipeline data is written deterministically with no model call at all. A cheap cache check runs before a new company folder is created, so the same account does not get filed twice under two spellings.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">07</span><h2>Where it stands</h2></div>
<div class="body">
<div class="metrics">
<div class="metric"><span class="fig">2</span><span class="cap">regions running from one server, with content access scoped by token</span></div>
<div class="metric"><span class="fig">15+</span><span class="cap">skills on one knowledge layer, from cited answers to editable client decks</span></div>
<div class="metric"><span class="fig">50</span><span class="cap">sellers onboarded</span></div>
<div class="metric"><span class="fig">10 hrs</span><span class="cap">of research time saved per seller each week</span></div>
<div class="metric"><span class="fig">40 hrs</span><span class="cap">of designer time saved per week</span></div>
</div>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">08</span><h2>Rollout</h2></div>
<div class="body">
<ul class="time">
<li>
<span class="when">June 2026</span>
<span class="what">Knowledge base and plugin built<span>Wiki structure, citation model, and the read only access layer. Shipped to a small internal group first.</span></span>
</li>
<li>
<span class="when">August 2026</span>
<span class="what">Demo to the sales team and CEO<span>Around 25 people. Deliberately not a technical walkthrough. Two workflows shown end to end, with feedback collected through a form rather than a channel thread.</span></span>
</li>
<li>
<span class="when">August 2026</span>
<span class="what">Sales activity connector<span>Calls, emails, and pipeline compiled per company, with parent accounts and their individual sites handled separately. Full transcripts stored alongside summaries, with citations on every claim.</span></span>
</li>
<li>
<span class="when">September 2026</span>
<span class="what">UK expansion<span>Requested by UK leadership after a demo. Delivered as token scoped regional roots on the existing server.</span></span>
</li>
<li>
<span class="when">In progress</span>
<span class="what">Internal AI marketplace listing<span>Moves distribution from a manual install to a governed internal listing. Currently working through how authentication should be handled for a wider audience.</span></span>
</li>
</ul>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">09</span><h2>Inside the knowledge graph</h2></div>
<div class="body">
<figure>
<div class="diagram pastel-b">
<video autoplay muted loop playsinline preload="auto" poster="/images/second-brain-graph.jpg">
<source src="/images/second-brain-graph.webm" type="video/webm" />
<source src="/images/second-brain-graph.mp4" type="video/mp4" />
</video>
</div>
<figcaption>The knowledge base rendered as a graph: every account, page and source, and the citations linking them together.</figcaption>
</figure>
</div>
</div>
</section>
