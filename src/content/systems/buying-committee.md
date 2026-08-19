---
name: Buying-committee enrichment
context: production
status: live
year: 2026
tier: featured
summary: A Slack request returns a scored, sourced buying committee, pushed to CRM.
outcome: 20+ sellers researching from one Slack channel
stack: [Relevance AI, Slack, Zapier, Apollo, Apify, Salesforce, Google Sheets]
flow: [Slack request, Route, Research ladder, Rank & score, Shared sheet, Salesforce]
feedback: false
order: 5
lede:
  - Finding the right people inside a target company is the slowest part of outbound. A seller would spend an hour on LinkedIn to end up with three names and no phone numbers.
  - So the research moved into a Slack channel. A seller types the request the way they would ask a colleague, and gets back a scored, sourced buying committee that can be pushed into the CRM in one reply.
---

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">01</span><h2>At a glance</h2></div>
<div class="body">
<dl class="facts">
<div><dt>Role</dt><dd><mark class="todo">[Your role title]</mark>. I built it end to end with engineering support: I designed the workflows, wrote the agent instructions and the scoring rules, and an engineer built the tools underneath them.</dd></div>
<div><dt>Surface</dt><dd>A single Slack channel. No application, no login, no training.</dd></div>
<div><dt>Users</dt><dd>The US sales team. Account executives, account managers, and business development across Texas, Illinois, Georgia and the wider US.</dd></div>
<div><dt>Built on</dt><dd>A Relevance AI agent with 17 tools and four workflows, running on a small model at temperature zero.</dd></div>
<div><dt>Sources</dt><dd>Apollo and Apify for discovery, web search to fill gaps, Salesforce for account context.</dd></div>
<div><dt>Writes to</dt><dd>A shared Google Sheet on every run, and Salesforce on an explicit reply.</dd></div>
</dl>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">02</span><h2>The problem</h2></div>
<div class="body">
<p class="big">Prospecting research is expensive, repetitive, and the output evaporates.</p>
<ol class="stack">
<li><div>
<h3>An hour of research for three names</h3>
<p>To open a conversation with a warehouse or a retail chain, a seller needs the operations lead, the HR lead, and whoever controls the contingent labor budget. Finding those three people means cross referencing LinkedIn, a data provider, and the company site, then guessing at an email format.</p>
</div></li>
<li><div>
<h3>Names are not the same as a buying committee</h3>
<p>A list of titles does not tell a seller who to call first. Twelve contacts with no ranking is a worse starting point than three with a reason attached, because the seller still has to do the thinking.</p>
</div></li>
<li><div>
<h3>The output never reached the CRM</h3>
<p>Research landed in a personal spreadsheet, or a notebook, or nowhere. The next person to work the account started again, and the company never accumulated anything from the effort.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">03</span><h2>What it does</h2></div>
<div class="body">
<p class="big">Two requests, typed in plain English, in a channel the team already had open.</p>
<p><strong>Find the buying committee.</strong> &ldquo;Find the decision makers at Acme&rdquo; returns contacts grouped by Operations, HR, and Procurement, each with a title, location, email, phone, LinkedIn, a persona, and a score with a written reason.</p>
<p><strong>Enrich one person.</strong> &ldquo;Enrich Jane Doe at Acme&rdquo; or a bare LinkedIn URL returns the missing email and direct phone for a contact the seller already has.</p>
<p>Both write to the same shared sheet. Replying in the thread pushes the contacts into Salesforce under the requester&rsquo;s ownership.</p>
<figure>
<p class="scroll-hint">Scroll to see the full interface</p>
<div class="shot">
<div class="win">
<div class="win-bar">
<div class="dots"><i></i><i></i><i></i></div>
<span class="win-name">Slack</span>
</div>
<div class="win-cols">
<div class="pane-side">
<p class="side-top">Indeed Flex</p>
<p class="side-lbl">Channels</p>
<p class="side-it">sales-us</p>
<p class="side-it on">the-ai-sales-assistant-usa</p>
<p class="side-it">enterprise-deals</p>
<p class="side-it">rfp-support</p>
<p class="side-lbl">Apps</p>
<p class="side-it pin">Decision Makers Researcher</p>
</div>
<div>
<p class="ch-head">the-ai-sales-assistant-usa <span>24 members</span></p>
<div class="msg">
<div class="av">JA</div>
<div>
<div class="msg-h"><b>James A.</b><span class="t">9:14 AM</span></div>
<p>Find the decision makers at Acme Logistics in Fort Worth, TX</p>
</div>
</div>
<div class="msg">
<div class="av bot">AI</div>
<div>
<div class="msg-h"><b>Decision Makers Researcher</b><span class="app">App</span><span class="t">9:16 AM</span></div>
<p class="co-line">Acme Logistics</p>
<p class="co-sub">Enterprise &nbsp;|&nbsp; 12,000 employees &nbsp;|&nbsp; $4.1B revenue &nbsp;|&nbsp; 4 contacts found</p>
<p class="grp">Operations</p>
<div class="row">
<span class="nm">B. Okafor</span> <span class="ti">SVP, Store Experience and Business Operations</span>
<span class="mini on">Decision maker</span><span class="mini">Score 4</span><span class="mini">Apollo</span>
<span class="cd">San Francisco, CA &nbsp;|&nbsp; b.okafor@acmelogistics.com &nbsp;|&nbsp; +1 415 555 0186</span>
</div>
<p class="grp">Human resources</p>
<div class="row">
<span class="nm">A. Rivera</span> <span class="ti">VP, Human Resources and Talent Acquisition</span>
<span class="mini on">Decision maker</span><span class="mini on">Score 5</span><span class="mini">Apollo</span>
<span class="cd">Nashville, TN &nbsp;|&nbsp; a.rivera@acmelogistics.com &nbsp;|&nbsp; +1 615 555 0142</span>
</div>
<div class="row">
<span class="nm">C. Lindqvist</span> <span class="ti">Regional Human Resources Manager</span>
<span class="mini">Influencer</span><span class="mini">Score 4</span><span class="mini">Apify</span>
<span class="cd">Fort Worth, TX &nbsp;|&nbsp; no email returned &nbsp;|&nbsp; no phone returned</span>
</div>
<p class="grp">Procurement</p>
<div class="row">
<span class="nm">D. Mensah</span> <span class="ti">Director, Strategic Sourcing</span>
<span class="mini on">Budget holder</span><span class="mini">Score 4</span><span class="mini">Apollo</span>
<span class="cd">United States &nbsp;|&nbsp; d.mensah@acmelogistics.com &nbsp;|&nbsp; +1 469 555 0113</span>
</div>
<p class="saved-line">Saved to the shared sheet. Reply here to push any of these to Salesforce.</p>
</div>
</div>
<div class="msg">
<div class="av">JA</div>
<div>
<div class="msg-h"><b>James A.</b><span class="t">9:18 AM</span></div>
<p>push the ops and procurement contacts to salesforce</p>
</div>
</div>
<div class="msg">
<div class="av bot">AI</div>
<div>
<div class="msg-h"><b>Decision Makers Researcher</b><span class="app">App</span><span class="t">9:18 AM</span></div>
<p>Created 2 net-new contacts on the Acme Logistics account, owner james.a@indeedflex.com.</p>
<p>Skipped 1: C. Lindqvist has no email, so there is nothing to deduplicate against. Add an email and ask again.</p>
</div>
</div>
<p class="composer">Message #the-ai-sales-assistant-usa</p>
</div>
</div>
</div>
</div>
<figcaption>The whole product is this thread. A seller asks in the words they would use with a colleague, the answer arrives ranked and sourced, and the CRM write is a separate sentence they have to type. Names, figures, and contact details here are fabricated.</figcaption>
</figure>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">04</span><h2>How it works</h2></div>
<div class="body">
<figure>
<p class="scroll-hint">Scroll to see the full diagram</p>
<div class="diagram">
<svg viewBox="0 0 1000 852" role="img" aria-label="Pipeline: a Slack request is carried to a Relevance AI agent, which sets flags, routes to one of four workflows, runs an escalating research ladder, applies identity and ranking rules, then answers in the thread and appends to a shared sheet. Salesforce is written only on an explicit reply.">
<defs>
<marker id="ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M0,0 L10,5 L0,10 z" fill="var(--line-strong)"/>
</marker>
</defs>
<rect class="box" x="100" y="8" width="800" height="64" rx="2"/>
<text class="t-tiny" x="124" y="32">Interface</text>
<text class="t-title" x="124" y="56">A seller types a request in one Slack channel</text>
<path class="flow" d="M500,72 L500,100" marker-end="url(#ah2)"/>
<rect class="box" x="100" y="102" width="800" height="44" rx="2"/>
<text class="t-sub" x="124" y="130">Zapier carries the message to the agent, and the answer back into the thread.</text>
<path class="flow" d="M500,146 L500,174" marker-end="url(#ah2)"/>
<rect class="box" x="100" y="176" width="800" height="92" rx="2"/>
<text class="t-tiny" x="124" y="200">Relevance AI agent, step one</text>
<text class="t-title" x="124" y="224">A tool sets the flags before any reasoning is allowed to start</text>
<g class="t-pill" text-anchor="middle">
<rect class="pill" x="124" y="236" width="180" height="26" rx="2"/><text x="214" y="253">REQUEST_TYPE</text>
<rect class="pill" x="314" y="236" width="180" height="26" rx="2"/><text x="404" y="253">CONTAINS_LOCATION</text>
<rect class="pill" x="504" y="236" width="180" height="26" rx="2"/><text x="594" y="253">FROM_SLACK</text>
<rect class="pill" x="694" y="236" width="180" height="26" rx="2"/><text x="784" y="253">FIND_ALL</text>
</g>
<path class="flow" d="M500,268 L500,296" marker-end="url(#ah2)"/>
<rect class="box" x="100" y="298" width="800" height="86" rx="2"/>
<text class="t-tiny" x="124" y="322">Step two</text>
<text class="t-title" x="124" y="342">The flags select one of four workflows. No clarifying questions</text>
<g class="t-pill" text-anchor="middle">
<rect class="pill" x="124" y="350" width="180" height="26" rx="2"/><text x="214" y="367">Named person</text>
<rect class="pill" x="314" y="350" width="180" height="26" rx="2"/><text x="404" y="367">Company</text>
<rect class="pill" x="504" y="350" width="180" height="26" rx="2"/><text x="594" y="367">Company and location</text>
<rect class="pill" x="694" y="350" width="180" height="26" rx="2"/><text x="784" y="367">Industry and location</text>
</g>
<path class="flow" d="M500,384 L500,412" marker-end="url(#ah2)"/>
<rect class="box" x="100" y="414" width="800" height="92" rx="2"/>
<text class="t-tiny" x="124" y="438">Step three</text>
<text class="t-title" x="124" y="458">An escalating ladder. Each rung runs only if the quota is still short</text>
<g class="t-pill" text-anchor="middle">
<rect class="pill" x="124" y="468" width="180" height="26" rx="2"/><text x="214" y="485">Apollo, 1 call</text>
<rect class="pill" x="314" y="468" width="180" height="26" rx="2"/><text x="404" y="485">Apify, 1 call</text>
<rect class="pill" x="504" y="468" width="180" height="26" rx="2"/><text x="594" y="485">Web search, max 5</text>
<rect class="pill" x="694" y="468" width="180" height="26" rx="2"/><text x="784" y="485">Salesforce context</text>
</g>
<path class="flow" d="M500,506 L500,534" marker-end="url(#ah2)"/>
<rect class="box" x="100" y="536" width="800" height="92" rx="2"/>
<text class="t-tiny" x="124" y="560">Step four</text>
<text class="t-title" x="124" y="580">Filter, then classify, then rank. Only survivors get enriched</text>
<g class="t-pill" text-anchor="middle">
<rect class="pill" x="124" y="590" width="180" height="26" rx="2"/><text x="214" y="607">Identity guard</text>
<rect class="pill" x="314" y="590" width="180" height="26" rx="2"/><text x="404" y="607">Department caps</text>
<rect class="pill" x="504" y="590" width="180" height="26" rx="2"/><text x="594" y="607">Mid market or enterprise</text>
<rect class="pill" x="694" y="590" width="180" height="26" rx="2"/><text x="784" y="607">Score plus reason</text>
</g>
<path class="flow" d="M500,628 L500,652"/>
<path class="flow" d="M285,652 L715,652"/>
<path class="flow" d="M285,652 L285,682" marker-end="url(#ah2)"/>
<path class="flow" d="M715,652 L715,682" marker-end="url(#ah2)"/>
<rect class="box" x="100" y="684" width="370" height="72" rx="2"/>
<text class="t-tiny" x="124" y="708">Output 1</text>
<text class="t-title" x="124" y="730">Answer in the Slack thread</text>
<text class="t-sub" x="124" y="748">Formatted for Slack, not Markdown.</text>
<rect class="box" x="530" y="684" width="370" height="72" rx="2"/>
<text class="t-tiny" x="554" y="708">Output 2</text>
<text class="t-title" x="554" y="730">One shared Google Sheet</text>
<text class="t-sub" x="554" y="748">Every run, same sheet. No one-off files.</text>
<path class="flow dash" d="M285,756 L285,790" marker-end="url(#ah2)"/>
<text class="t-tiny" x="298" y="778">only on an explicit reply</text>
<rect class="box" x="100" y="792" width="800" height="52" rx="2"/>
<text class="t-title" x="124" y="816">Salesforce</text>
<text class="t-sub" x="124" y="834">Net-new records only, owned by the requester. Reports what it skipped and why.</text>
</svg>
</div>
<figcaption>Two things in this diagram are load bearing. The flags are set by a tool before the model is allowed to reason, so routing is deterministic rather than a judgment call. And the gate at the bottom is deliberate: research is free to run and costs nothing if it is wrong, but writing to the CRM is a decision, so it takes a human sentence.</figcaption>
</figure>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">05</span><h2>Inside the agent</h2></div>
<div class="body">
<p class="big">The interesting work is not the model. It is the constraints written around it.</p>
<p>The agent runs on a small, cheap model at temperature zero, with memory off and extended thinking off. That is a deliberate choice rather than a budget one: almost none of the difficulty in this problem is reasoning difficulty. It is knowing which of four procedures to run, which sources to try in what order, and when to throw a result away. All of that is better expressed as an explicit rule than left to a model&rsquo;s discretion, and once it is explicit, a cheap model executes it as well as an expensive one and does it the same way twice.</p>
<figure>
<p class="scroll-hint">Scroll to see the full interface</p>
<div class="shot">
<div class="win">
<div class="win-bar">
<div class="dots"><i></i><i></i><i></i></div>
<span class="win-name">Relevance AI</span>
</div>
<div class="win-cols">
<div class="pane-side">
<p class="side-top">Decision Makers Researcher</p>
<p class="side-lbl">Build</p>
<p class="side-it on">Instructions</p>
<p class="side-it">Tools</p>
<p class="side-it">Knowledge</p>
<p class="side-it">Triggers</p>
<p class="side-lbl">Quality</p>
<p class="side-it">Evals</p>
<p class="side-it">Run history</p>
</div>
<div>
<div class="pane-main">
<p class="b-lbl">Instructions</p>
<p class="code"><b>1.</b> Set internal flags. Do not reason or select a
   workflow until the result is received.&#10;
<b>2.</b> Route on the flags:
   <b>IF</b> REQUEST_TYPE = named_person
      to Person Workflow
   <b>ELSE IF</b> REQUEST_TYPE = company AND CONTAINS_LOCATION = true
      to Location Company Workflow
   <b>ELSE IF</b> REQUEST_TYPE = company AND CONTAINS_LOCATION = false
      to General Company Workflow
   <b>ELSE IF</b> REQUEST_TYPE = industry_location
      to Location and Industry Workflow&#10;
<b>## Company identity guard</b>
Verify every candidate&rsquo;s current employer against the
canonical domain before enrichment, and again before
output. A similar company name is not sufficient.
Never enrich, rank, or output a candidate who fails.</p>
<p class="b-lbl">Tools</p>
<div class="chips">
<span class="chip on">Set internal flags</span>
<span class="chip">Find decision makers, Apollo</span>
<span class="chip">Find decision makers, Apify</span>
<span class="chip">Find by industry and location</span>
<span class="chip">Enrich known person</span>
<span class="chip">Enrich in bulk</span>
<span class="chip">Google search</span>
<span class="chip">Salesforce company search</span>
<span class="chip">Create and populate Google Sheet</span>
<span class="chip">Create or update Salesforce contact</span>
<span class="chip">Create or update Salesforce lead</span>
<span class="chip">+ 6 more</span>
</div>
</div>
<div class="win-foot">
<span>Temperature <b>0</b></span>
<span>Memory <b>off</b></span>
<span>Extended thinking <b>off</b></span>
<span><b>17</b> tools</span>
<span><b>4</b> workflows</span>
<span><b>20</b> eval cases</span>
</div>
</div>
</div>
</div>
</div>
<figcaption>The routing block and the identity guard are the two pieces that do the most work. The first makes the agent&rsquo;s behaviour predictable, the second is what stops a real person at the wrong company reaching a seller.</figcaption>
</figure>
<ol class="stack">
<li><div>
<h3>Classify with a tool, not with judgment</h3>
<p>The first thing the agent does on every request is call a tool that sets four flags: what kind of request this is, whether it names a location, whether it came from Slack, and whether the seller wants everything or only the strong matches. It is explicitly forbidden from reasoning or choosing a path until those flags come back. Routing is the decision that determines everything downstream, so it is the one decision that is not left to the model.</p>
</div></li>
<li><div>
<h3>Four procedures, not one prompt</h3>
<p>A named person, a company, a company at a specific site, and an industry across a region are four different research problems. They get four separate workflows with their own ordered steps. A named person is enriched directly from strong identifiers and never through a broad search. A company with a location starts with the source that handles geography well; a company without one starts somewhere else. The agent is also told not to ask clarifying questions on a standard request, because a question in a Slack thread costs more than a slightly imperfect first answer.</p>
</div></li>
<li><div>
<h3>Escalate only when the quota is short</h3>
<p>Each workflow is a ladder. Run the primary source, deduplicate, count what is missing against the quota, and only then reach for the next source. Every rung is capped: one call to each of the two contact databases, no more than three targeted web searches to fill a specific gap, five across the whole run. Most requests never reach the top of the ladder. The cap is what keeps a request that is going badly from quietly becoming an expensive one.</p>
</div></li>
<li><div>
<h3>The identity guard</h3>
<p>The most damaging failure in contact data is not a missing person, it is a real person at the wrong company. A similar name is treated as no evidence at all. The agent has to confirm each candidate&rsquo;s current employer against the target domain before enrichment and again before output, and if there is no domain evidence it needs two independent sources tying that person to that exact company. Anyone who fails is dropped before their details are ever looked up, so a bad match costs nothing and never reaches the seller.</p>
</div></li>
<li><div>
<h3>Quotas, and a blacklist</h3>
<p>The target is a small, balanced committee rather than the longest list available: a handful of Operations, a handful of HR, and up to two in Procurement. The quota governs when to stop searching, who gets enriched, and what appears in the answer. A short blacklist strips out the titles that keyword matching reliably gets wrong. Training directors and benefits administrators look like HR to a search index and are not people who buy contingent labor.</p>
</div></li>
<li><div>
<h3>Segment decides how much structure is worth it</h3>
<p>The agent sizes each company from headcount and revenue and then treats the two segments differently. A mid market company gets a simple departmental ordering, because a 400 person business does not have a buying committee worth mapping. An enterprise gets a persona assigned to each contact and the contacts split between global and site level, because that is the distinction that decides whether a seller is pitching one warehouse or a national agreement.</p>
</div></li>
<li><div>
<h3>The same agent behaves differently by surface</h3>
<p>One of the flags records whether the request came from Slack, and it changes both the filtering and the formatting. From Slack the geographic filter is loosened, because a seller in a thread would rather see a good contact one state over than nothing, and the answer is written in Slack&rsquo;s own markup rather than Markdown. Outside Slack the location filter is strict and the output is a table. Same agent, same rules, two surfaces.</p>
</div></li>
<li><div>
<h3>Grounded in what actually closed</h3>
<p>The agent carries a small set of reference material, including closed-won revenue and deal counts by industry from the company&rsquo;s own pipeline. Scoring leans on evidence about which industries have historically bought, rather than on a generic idea of a good prospect.</p>
</div></li>
<li><div>
<h3>Say what you did not find</h3>
<p>Several rules exist only to stop the agent hedging. It may not tease data it is holding back or offer to share more later. If it found nothing beyond what the seller already supplied, it has to say so plainly and ask for a stronger identifier. When it pushes to the CRM, it has to report which contacts were skipped and why. An answer a seller can trust has to include the parts that did not work.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">06</span><h2>Anatomy of an answer</h2></div>
<div class="body">
<p>The format is the product. A list of contacts is data. A list of contacts that says who to call first, and why, is a decision a seller can act on or argue with.</p>
<div class="sample">
<div class="sample-co">
<span class="co">Acme Logistics</span>
<span class="seg">Enterprise</span>
<span class="firmo">12,000 employees &nbsp;|&nbsp; $4.1B revenue</span>
</div>
<p class="dept">Human Resources</p>
<div class="person">
<p class="who">A. Rivera &nbsp;<em>Vice President, Human Resources &amp; Talent Acquisition &nbsp;|&nbsp; Nashville, TN</em></p>
<div class="tags">
<span class="tag on">Decision maker</span>
<span class="tag">Score 5</span>
<span class="tag">Email found</span>
<span class="tag">Source: Apollo</span>
</div>
<p class="why"><b>Why:</b> VP of HR and Talent Acquisition is the ideal staffing buyer profile, with direct alignment to hiring, headcount, and budget influence.</p>
</div>
<p class="dept">Operations</p>
<div class="person">
<p class="who">B. Okafor &nbsp;<em>Senior Vice President, Store Experience and Business Operations &nbsp;|&nbsp; San Francisco, CA</em></p>
<div class="tags">
<span class="tag on">Decision maker</span>
<span class="tag">Score 4</span>
<span class="tag">Email found</span>
<span class="tag">Source: Apollo</span>
</div>
<p class="why"><b>Why:</b> Senior operations executive with strong influence over store operations and labor planning.</p>
</div>
<div class="person">
<p class="who">C. Lindqvist &nbsp;<em>Regional Human Resources Manager &nbsp;|&nbsp; Fort Worth, TX</em></p>
<div class="tags">
<span class="tag">Influencer</span>
<span class="tag">Score 4</span>
<span class="tag">No email returned</span>
<span class="tag">Source: Apify</span>
</div>
<p class="why"><b>Why:</b> Site-level HR leader with strong staffing relevance despite limited enrichment detail.</p>
</div>
<p class="dept">Procurement</p>
<div class="person">
<p class="who">D. Mensah &nbsp;<em>Director, Strategic Sourcing &nbsp;|&nbsp; United States</em></p>
<div class="tags">
<span class="tag on">Budget holder</span>
<span class="tag">Score 4</span>
<span class="tag">Email and phone found</span>
<span class="tag">Source: Apollo</span>
</div>
<p class="why"><b>Why:</b> Strategic sourcing leader with direct procurement relevance and likely influence over vendor selection.</p>
</div>
</div>
<div class="note">
<p><strong>Names and figures in this example are fabricated.</strong> The structure, the persona labels, the scoring, and the phrasing of the reasoning are the real output format. Real contact details are not reproduced on a public page.</p>
</div>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">07</span><h2>Design decisions</h2></div>
<div class="body">
<p class="big">Most of these are about restraint rather than capability.</p>
<ol class="stack">
<li><div>
<h3>The interface is a channel, not a product</h3>
<p>No login, no dashboard, no onboarding flow, no adoption curve. A seller types the sentence they would have sent a colleague, in a tool that is already open on their second monitor.</p>
<p>The side effect matters more than the convenience. Every request and every answer is public in the channel, so the team learned to prompt it by reading each other&rsquo;s messages. Nobody ran a training session.</p>
</div></li>
<li><div>
<h3>Rank the committee, do not just list it</h3>
<p>Each contact gets a department, a buying-committee persona, and a score with a sentence explaining the score. That sentence is the point. It gives the seller something to disagree with, which is what turns a data dump into a call list.</p>
</div></li>
<li><div>
<h3>One sheet, forever</h3>
<p>Every run appends to the same shared sheet rather than generating a new file. It sounds trivial. It was the difference between research that accumulated into an asset and research that scattered into a hundred abandoned spreadsheets.</p>
</div></li>
<li><div>
<h3>Writing to the CRM is a separate, human step</h3>
<p>The agent never writes to Salesforce on its own. The seller has to reply in the thread and ask. Only net-new records are created, ownership is assigned to the requester, and the agent reports back exactly which contacts it created and which it skipped, naming the reason for each skip.</p>
<p>Automatic CRM writes would have been one less click and a permanent data quality problem.</p>
</div></li>
<li><div>
<h3>Say when the answer is weak</h3>
<p>Missing fields stay visibly blank instead of being filled with a plausible guess. A contact who does not fit the buying profile comes back with a low score and a blunt reason, even when the seller clearly hoped for a better answer.</p>
<p>Contact data is the one place where a confident wrong answer is worse than no answer, because it goes straight into an email to a stranger.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">08</span><h2>What I did</h2></div>
<div class="body">
<p class="big">I created this end to end, with engineering support.</p>
<p>I owned the product: the workflows, the agent instructions, the scoring and persona rules, the quotas and the blacklist, the identity guard, the output format, and the decision about where a human has to intervene. An engineer built the tools those instructions call and wired up the connections to Slack, Salesforce, and the data providers. The domain judgment that makes the answers useful, and the constraints that keep them honest, are mine.</p>
<ol class="stack">
<li><div>
<h3>Turned a vague ask into four procedures</h3>
<p>&ldquo;Find me decision makers&rdquo; is not one job. Separating it into a named person, a company, a company at a site, and an industry across a region, then writing the ordered steps for each, is what took the agent from unpredictable to reliable. The same split is why routing could be pushed into a deterministic tool instead of left to the model.</p>
</div></li>
<li><div>
<h3>Wrote the rules that decide what counts as a good contact</h3>
<p>The departmental quotas, the title blacklist, the mid market and enterprise thresholds, the persona set, and the score with a written reason. These encode how Indeed Flex actually sells into warehousing and retail, which is the part no general-purpose prospecting tool knows.</p>
</div></li>
<li><div>
<h3>Specified the failure modes before the features</h3>
<p>The identity guard, the per-source call caps, the blank-not-guessed rule, and the ban on hedging all came from watching the thing fail in ways that would have cost a seller credibility with a prospect. Most of the instruction set is there to prevent a specific bad answer I had already seen.</p>
</div></li>
<li><div>
<h3>Made it self-serve</h3>
<p>Wrote the operating guide for the channel and set the channel purpose so a new seller can work out what to type without asking anyone. It covers the two request modes, worked examples, and the reply-to-push CRM step, which was the part people kept missing.</p>
</div></li>
<li><div>
<h3>Closed the loop into the CRM</h3>
<p>Pushed for contacts to land in Salesforce directly rather than through manual upload, so the research became company property instead of a personal sheet.</p>
</div></li>
<li><div>
<h3>Added the human verification layer</h3>
<p>Agent output is a starting point, not a finished list. On a large retail target I turned a raw run into a prioritized import: contacts ranked by relevance to the actual play, grouped into field, procurement, and HR, each with a note on why they matter, and every unverified email explicitly flagged as unverified before any bulk send.</p>
<p>Two contacts were kept in the list with no contact details at all rather than guessed at, and one was flagged because the returned email did not match the company&rsquo;s address pattern.</p>
</div></li>
<li><div>
<h3>Handed it over cleanly</h3>
<p>Removed the external development partner from the channel once the agent was stable, so a production tool used daily by the sales team was no longer sitting in a vendor&rsquo;s workspace.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">09</span><h2>Where it stands</h2></div>
<div class="body">
<div class="metrics">
<div class="metric"><span class="fig">20+</span><span class="cap">sellers using it directly, across the US team</span></div>
<div class="metric"><span class="fig">4</span><span class="cap">workflows behind a single plain-English request, selected without asking the seller anything</span></div>
<div class="metric"><span class="fig">17</span><span class="cap">tools available to the agent, from search and enrichment to CRM writes</span></div>
<div class="metric"><span class="fig">20</span><span class="cap">test cases in the eval suite the agent is checked against</span></div>
<div class="metric"><span class="fig"><mark class="todo">[X]</mark></span><span class="cap">contacts generated to date <mark class="todo">[row count from the shared sheet]</mark></span></div>
<div class="metric"><span class="fig"><mark class="todo">[X]</mark></span><span class="cap">contacts pushed into Salesforce</span></div>
<div class="metric"><span class="fig"><mark class="todo">[X]</mark></span><span class="cap"><mark class="todo">[meetings or pipeline sourced, if attributable]</mark></span></div>
</div>
<div class="note">
<p><strong>On the numbers.</strong> The seller count is people observed making requests in a four-month window, so it is a floor rather than a total. The dotted figures need the shared sheet and Salesforce to fill in, and I would rather leave them visible than estimate them.</p>
</div>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">10</span><h2>What is next</h2></div>
<div class="body">
<ol class="stack">
<li><div>
<h3>Score the live runs, not just the test set</h3>
<p>There is an eval suite the agent is checked against before changes ship, which catches regressions. Nothing yet grades the real traffic, so a slow drift in answer quality would go unnoticed between releases. Continuous scoring on live conversations is the gap.</p>
</div></li>
<li><div>
<h3>Verify the emails before they are sent, not after</h3>
<p>Most returned emails are pattern matched rather than confirmed. That is fine for a single call and risky for a bulk send. A verification step belongs in the pipeline rather than in a caveat a seller has to remember to read.</p>
</div></li>
<li><div>
<h3>Measure what converts</h3>
<p>The agent scores every contact from one to five, but nothing yet compares those scores against which contacts actually replied or booked. That feedback loop is the difference between a scoring model and a guess with a number on it.</p>
</div></li>
<li><div>
<h3>Let the research file itself away</h3>
<p>This agent is now one of two allowlisted behind the governed enrichment connector in the <a href="/systems/second-brain/">sales knowledge system</a>, so the same research the Slack channel produces can be reached from inside the assistant rather than only from a spreadsheet. The remaining gap is durability: a run should leave a cited account page behind it, so the second person to ask about a company reads the answer instead of paying to generate it again.</p>
</div></li>
</ol>
</div>
</div>
</section>
