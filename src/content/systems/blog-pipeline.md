---
name: Automated blog production
context: production
status: live
year: February 2025
tier: featured
summary: Generates SEO-optimized blog articles from keywords and drafts them into WordPress.
outcome: SEO articles produced without a writer, SEO specialist, or publisher in the loop.
stack: [Relevance AI, OpenAI, Semrush, Notion, Zapier, WordPress, Grammarly]
flow: [Keyword research, Search intent, Outline, Draft, WordPress]
feedback: false
order: 2
lede:
  - The SEO strategy was working. Producing against it was not. One article moved through a writer, an SEO specialist, and a publisher, and every one of those handoffs was a queue.
  - This replaced the queue with a single workflow. A keyword goes into a database and a finished, SEO-checked article comes out the other end in WordPress. The part worth writing down is that the first version failed, and it failed because it was too clever.
---

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">01</span><h2>At a glance</h2></div>
<div class="body">
<dl class="facts">
<div><dt>Role</dt><dd>I designed the workflow, wrote the step instructions and the knowledgebase behind them, and rebuilt the whole thing after the first architecture failed.</dd></div>
<div><dt>Trigger</dt><dd>A keyword added to a Notion database. Nobody opens the AI tool to start a run.</dd></div>
<div><dt>Built on</dt><dd>One Relevance AI workflow, with a knowledgebase holding tone of voice and audience personas.</dd></div>
<div><dt>Sources</dt><dd>Semrush for volume and difficulty, Google for the pages already ranking on the term.</dd></div>
<div><dt>Publishes to</dt><dd>WordPress, through the REST API. The article lands in the CMS, not in a document someone then has to move.</dd></div>
<div><dt>Quality gate</dt><dd>An AI-detectability check on the draft before it goes out.</dd></div></dl>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">02</span><h2>The problem</h2></div>
<div class="body">
<p class="big">The strategy was not the bottleneck. The production line was.</p>
<ol class="stack">
<li><div>
<h3>Three roles for one article</h3>
<p>A writer drafted it, an SEO specialist checked it against the target keyword, a publisher cleaned it and put it live. None of that work is hard. All of it is sequential, and each step waits for a person with other priorities, so the cost of an article was set by coordination rather than by writing.</p>
</div></li>
<li><div>
<h3>Standards existed as a document, not as a constraint</h3>
<p>Tone of voice, article structure, and how a keyword should be treated were all written down. Whether any of it made it into a given article depended on who happened to pick the brief up. Consistency was a matter of individual diligence, which means it was not consistent.</p>
</div></li>
<li><div>
<h3>Scaling meant hiring</h3>
<p>The list of keywords worth ranking for was far longer than the team could ever work through. Any plan to publish more was a plan to add headcount, and the return on a single article does not justify that.</p>
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
<div class="metric"><span class="fig">8</span><span class="cap">steps from a keyword to a published article, all inside one workflow</span></div>
<div class="metric"><span class="fig">0</span><span class="cap">writers, SEO specialists, or publishers in the default path</span></div>
<div class="metric"><span class="fig">7+</span><span class="cap">the target SEO score, which automated articles already beat some manual ones on</span></div>
<div class="metric"><span class="fig">~80%</span><span class="cap">AI-detectability on the current output, against a target of 20% or below</span></div>
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
<div class="diagram pastel-b">
<svg viewBox="0 0 1000 545" role="img" aria-label="Pipeline: a keyword added to a Notion database is picked up by Zapier and handed to a single Relevance AI workflow that runs eight ordered steps, from keyword research through to the conclusion. The draft is checked for AI detectability and published to WordPress through the REST API.">
<defs>
<marker id="ahbp" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M0,0 L10,5 L0,10 z" fill="var(--line-strong)"/>
</marker>
</defs>
<rect class="box" x="100" y="8" width="800" height="64" rx="2"/>
<rect class="pill" x="124" y="16" width="28" height="28" rx="2"/>
<image href="/logos/notion.svg" x="128" y="20" width="20" height="20"><title>Notion</title></image>
<text class="t-tiny" x="168" y="32">Trigger</text>
<text class="t-title" x="168" y="56">A target keyword is added to a Notion database</text>
<path class="flow" d="M500,72 L500,100" marker-end="url(#ahbp)"/>
<rect class="box" x="100" y="102" width="800" height="44" rx="2"/>
<rect class="pill" x="124" y="110" width="28" height="28" rx="2"/>
<image href="/logos/zapier.png" x="127" y="113" width="22" height="22"><title>Zapier</title></image>
<text class="t-sub" x="168" y="130">Zapier watches the database and hands the row to the workflow.</text>
<path class="flow" d="M500,146 L500,174" marker-end="url(#ahbp)"/>
<rect class="box" x="100" y="176" width="800" height="170" rx="2"/>
<rect class="pill" x="124" y="186" width="28" height="28" rx="2"/>
<image href="/logos/relevanceai.png" x="127" y="189" width="22" height="22"><title>Relevance AI</title></image>
<text class="t-tiny" x="168" y="196">Relevance AI</text>
<text class="t-title" x="168" y="214">One workflow, eight steps, always in the same order</text>
<g class="t-pill" text-anchor="middle">
<rect class="pill" x="124" y="232" width="180" height="26" rx="2"/><text x="214" y="249">1. Keyword research</text>
<rect class="pill" x="314" y="232" width="180" height="26" rx="2"/><text x="404" y="249">2. Competitor scan</text>
<rect class="pill" x="504" y="232" width="180" height="26" rx="2"/><text x="594" y="249">3. Search intent</text>
<rect class="pill" x="694" y="232" width="180" height="26" rx="2"/><text x="784" y="249">4. Link analysis</text>
<rect class="pill" x="124" y="266" width="180" height="26" rx="2"/><text x="214" y="283">5. Outline and title</text>
<rect class="pill" x="314" y="266" width="180" height="26" rx="2"/><text x="404" y="283">6. Introduction</text>
<rect class="pill" x="504" y="266" width="180" height="26" rx="2"/><text x="594" y="283">7. Body</text>
<rect class="pill" x="694" y="266" width="180" height="26" rx="2"/><text x="784" y="283">8. Conclusion and CTA</text>
</g>
<text class="t-sub" x="124" y="322">Semrush and Google feed the four research steps. OpenAI writes the four drafting steps, against a knowledgebase of tone and persona.</text>
<path class="flow" d="M500,346 L500,374" marker-end="url(#ahbp)"/>
<rect class="box" x="100" y="376" width="800" height="64" rx="2"/>
<text class="t-tiny" x="124" y="398">Quality gate</text>
<text class="t-title" x="124" y="418">The draft is scored for how detectable it is as AI writing</text>
<text class="t-sub" x="124" y="434">The number is recorded whether it is good or not.</text>
<path class="flow" d="M500,440 L500,468" marker-end="url(#ahbp)"/>
<rect class="box" x="100" y="470" width="800" height="72" rx="2"/>
<rect class="pill" x="124" y="478" width="28" height="28" rx="2"/>
<image href="/logos/wordpress.svg" x="128" y="482" width="20" height="20"><title>WordPress</title></image>
<text class="t-tiny" x="168" y="494">Output</text>
<text class="t-title" x="168" y="514">WordPress, through the REST API</text>
<text class="t-sub" x="168" y="532">The article arrives in the CMS. Nothing is copied out of a document by hand.</text>
</svg>
</div>
<figcaption>The shape of this diagram is the whole point. It is one column. An earlier version of this system had branches and specialists in it, and that is exactly what had to be taken out.</figcaption>
</figure>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">05</span><h2>Version one, and why it failed</h2></div>
<div class="body">
<p class="big">The first build was a team of agents. It was worse than one.</p>
<p>The obvious way to model a content team in software is to copy the content team. So the first version had specialists: an agent that researched, an agent that outlined, an agent that wrote, an agent that formatted and published. Each one had a clear job and each one, tested on its own, did that job well.</p>
<ol class="stack">
<li><div>
<h3>The handoffs were where it broke</h3>
<p>Every boundary between agents was a point where context had to be restated, and something was lost each time. The research agent knew why a particular competitor page mattered; by the time the writing agent had it, that had flattened into a list of headings.</p>
</div></li>
<li><div>
<h3>The same keyword produced different articles</h3>
<p>Not different in wording, which is fine, but different in structure and depth. Output was unpredictable run to run, and unpredictable output is unusable in a publishing process, because someone has to read every article closely to find out what they got.</p>
</div></li>
<li><div>
<h3>Writing an article is not parallel work</h3>
<p>The case for multiple agents is independent work that can happen at once, or genuinely different reasoning problems. Producing one blog post is neither. It is a single job with an order to it, where each step depends on the full context of the last. The architecture was solving a problem the task did not have.</p>
</div></li>
</ol>
<p>Version two collapsed all of it into one workflow that runs the same steps linearly, holding the whole brief the entire way through. The inconsistency went away. It is a less impressive diagram and a much better system.</p>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">06</span><h2>Design decisions</h2></div>
<div class="body">
<p class="big">Most of what makes it work is restraint about where the automation stops.</p>
<ol class="stack">
<li><div>
<h3>One workflow, not a team of agents</h3>
<p>The rule that came out of version one: use multiple agents when the work is genuinely independent, and a single ordered workflow when it is one job with steps. Copying an org chart into an architecture is not a design principle.</p>
</div></li>
<li><div>
<h3>Brand standards live in a knowledgebase, not in a prompt</h3>
<p>Tone of voice and audience personas sit in one place the workflow reads on every run. Changing how the blog sounds is an edit in one file, not a rewrite of eight step instructions, and consistency stops depending on who picked up the brief.</p>
</div></li>
<li><div>
<h3>Research before writing, always in that order</h3>
<p>Keyword data, the pages already ranking, the search intent behind the term, and the internal and external links available are all resolved before a single sentence is drafted. The writing steps are not allowed to invent their own angle, because that is where an article stops being about the keyword it was commissioned for.</p>
</div></li>
<li><div>
<h3>The trigger is a row in a tool people already use</h3>
<p>A keyword goes into Notion, which the team was already using to plan content. There is no new interface to learn and no adoption problem, because from the outside the automation looks like the planning step they were doing anyway.</p>
</div></li>
<li><div>
<h3>Measure the thing you are worried about</h3>
<p>The fear with automated content is that it reads like automated content. Rather than argue about that, every draft gets an AI-detectability score and the number gets recorded. It currently sits around 80 percent, against a target of 20 percent or below. Naming the number is what makes it something to fix instead of something to defend.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">07</span><h2>What I did</h2></div>
<div class="body">
<p class="big">I owned this end to end, including the version of it that did not work.</p>
<ol class="stack">
<li><div>
<h3>Set the objectives before choosing the tools</h3>
<p>Four of them: cut the manual effort out of SEO content, enforce brand and SEO standards rather than document them, scale output without adding headcount, and improve visibility on target keywords. Each one is testable, which is what made it possible to say later that version one had failed.</p>
</div></li>
<li><div>
<h3>Wrote the step sequence</h3>
<p>The eight steps, their order, and what each one is allowed to assume from the step before it. This is most of the actual product. The model is doing ordinary work at each step; the sequence is what makes the output an article rather than eight pieces of text.</p>
</div></li>
<li><div>
<h3>Built the knowledgebase</h3>
<p>Tone of voice and audience personas, written as something a workflow can apply on every run rather than as brand guidelines a person is meant to have internalised.</p>
</div></li>
<li><div>
<h3>Threw the first architecture away</h3>
<p>Diagnosed the inconsistency as a handoff problem rather than a prompt problem, and rebuilt as a single linear workflow instead of trying to patch the seams between specialists. That was the decision that made the system usable.</p>
</div></li>
<li><div>
<h3>Connected it to the tools either side</h3>
<p>Notion as the trigger, Zapier carrying the request, and the WordPress REST API at the far end, so the pipeline runs from planning to published without a manual copy-paste anywhere in it.</p>
</div></li>
</ol>
</div>
</div>
</section>
