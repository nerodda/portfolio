---
name: Agent-run Meta campaigns
context: production
status: prototype
year: September 2026
tier: featured
summary: Meta ads automation with an AI agent, through Meta's official ads MCP server.
seoTitle: "Meta Ads Automation with an AI Agent and MCP | Olga Neroda"
seoDescription: "Meta ads automation with an AI agent through Meta's official ads MCP server, from account setup and creative building to analytics and A/B testing."
outcome: From Meta account setup and creative building to campaign analytics and A/B testing
ogImage: /images/og/meta-ads-agent.png
stack: [Model Context Protocol, Cursor, Meta Ads, Google Tag Manager, HubSpot, Apollo]
flow: [Brief in the Second Brain, Agent in Cursor, Meta ads MCP server, Tracked landing page, Cited performance, Learnings start the next brief]
topics:
  - Meta ads automation
  - Meta ads MCP server
  - Automated Meta campaigns
  - B2B Meta ads
  - AI agents for paid media
  - Model Context Protocol
  - AI agent guardrails
  - Conversion tracking
  - Marketing measurement
  - Closed-loop marketing
feedback: false
order: 10
lede:
  - "Meta now lets an AI agent work directly inside an ad account, through the Meta ads MCP server. We set one up to automate our B2B Meta ads. The agent works from Cursor and can read and change our campaigns. B2B campaigns get their own ad account, and visits and form fills on the landing page reach Meta intact."
  - "Most of the work was not the agent. It was the tracking underneath it. An agent optimizes on whatever the tracking reports. If the tracking is broken, it makes wrong decisions faster."
  - "Every campaign also gets its own folder in our [Second Brain](/systems/second-brain/), with one file per stage from brief to learnings. The next brief starts from the last campaign's learnings, so each run picks up where the previous one ended."
---

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">01</span><h2>At a glance</h2></div>
<div class="body">
<dl class="facts">
<div><dt>Role</dt><dd>AI Martech Manager. I owned it end to end, from the Meta developer app to the tag changes and ad launching, with an AI agent in Cursor doing most of the job.</dd></div>
<div><dt>Timeframe</dt><dd>One week in September 2026. It took three days to connect the agent and fix the tracking. By the end of the week, the first campaign was staged, with audiences built and creative made. It has since launched.</dd></div>
<div><dt>Surface</dt><dd>Cursor, connected to Meta&rsquo;s official ads MCP server. No custom integration code.</dd></div>
<div><dt>Guardrails</dt><dd>Meta&rsquo;s own rules, set per ad account in Business Suite, design skills and campaign briefs.</dd></div>
<div><dt>Measured with</dt><dd>Google Tag Manager, the Meta pixel, and the HubSpot form on the landing page.</dd></div>
<div><dt>Recorded in</dt><dd>A campaign space of its own in the Second Brain. One folder per campaign, one file per stage, every figure cited to its source.</dd></div>
</dl>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">02</span><h2>What was built</h2></div>
<div class="body">
<p class="big">Three pieces, built in this order.</p>
<p><strong>Access.</strong> An agent in Cursor, connected directly to our Facebook and Instagram ads through the official Meta ads MCP server. It can list accounts and read campaigns, audiences and pixel data. It can also create and edit campaigns, ad sets and ads when a person asks it to.</p>
<p><strong>Measurement.</strong> The landing page launched on a company subdomain, and it started with no tracking at all. We installed every pixel and tag on the page from scratch. Meta receives four events, which roll up to two top-level numbers: page visits and form submissions.</p>
<p><strong>Memory.</strong> A campaign space in the Second Brain. We record every campaign there from brief to learnings, and the next brief starts from those learnings.</p>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">03</span><h2>How it works</h2></div>
<div class="body">
<figure>
<p class="scroll-hint">Scroll to see the full diagram</p>
<div class="diagram pastel-c">
<svg viewBox="0 0 1000 440" role="img" aria-label="Two paths into one ad account. On the control path, a marketer asks an agent in Cursor, the agent works through Meta's ads MCP server, and Business Suite rules plus skills act as its guardrails. On the signal path, a visitor lands on the page, Tag Manager picks the right IDs, and a listener reports the HubSpot form. Both meet at the B2B ad account and its pixel, and the agent reads results back through the same server.">
<defs>
<marker id="ahm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M0,0 L10,5 L0,10 z" fill="var(--line-strong)"/>
</marker>
</defs>
<rect class="box" x="60" y="8" width="420" height="76" rx="2"/>
<rect class="pill" x="84" y="32" width="28" height="28" rx="2"/>
<image class="logo-mono" href="/logos/cursor.svg" x="88" y="36" width="20" height="20"><title>Cursor</title></image>
<text class="t-tiny" x="128" y="32">Control</text>
<text class="t-title" x="128" y="54">A marketer asks in Cursor</text>
<text class="t-sub" x="128" y="72">Plain English, in the editor the team already uses.</text>
<rect class="box" x="520" y="8" width="420" height="76" rx="2"/>
<text class="t-tiny" x="544" y="32">Signal</text>
<text class="t-title" x="544" y="54">A visitor lands on the page</text>
<text class="t-sub" x="544" y="72">Consent first, then the tag library loads.</text>
<path class="flow" d="M270,84 L270,114" marker-end="url(#ahm)"/>
<path class="flow" d="M730,84 L730,114" marker-end="url(#ahm)"/>
<rect class="box" x="60" y="116" width="420" height="76" rx="2"/>
<rect class="pill" x="84" y="140" width="28" height="28" rx="2"/>
<image href="/logos/meta.svg" x="88" y="144" width="20" height="20"><title>Meta</title></image>
<text class="t-tiny" x="128" y="140">Agent access</text>
<text class="t-title" x="128" y="162">Meta&apos;s ads MCP server</text>
<text class="t-sub" x="128" y="180">Authorized through our own developer app.</text>
<rect class="box" x="520" y="116" width="420" height="76" rx="2"/>
<rect class="pill" x="544" y="140" width="28" height="28" rx="2"/>
<image href="/logos/googletagmanager.svg" x="548" y="144" width="20" height="20"><title>Google Tag Manager</title></image>
<text class="t-tiny" x="588" y="140">Tags</text>
<text class="t-title" x="588" y="162">Tag Manager picks the IDs</text>
<text class="t-sub" x="588" y="180">An exact-match lookup on the page hostname.</text>
<path class="flow" d="M270,192 L270,222" marker-end="url(#ahm)"/>
<path class="flow" d="M730,192 L730,222" marker-end="url(#ahm)"/>
<rect class="box" x="60" y="224" width="420" height="76" rx="2"/>
<text class="t-tiny" x="84" y="248">Guardrail</text>
<text class="t-title" x="84" y="270">Business Suite rules + Skills</text>
<text class="t-sub" x="84" y="288">Seven action types, allowed or blocked per account.</text>
<rect class="box" x="520" y="224" width="420" height="76" rx="2"/>
<rect class="pill" x="544" y="248" width="28" height="28" rx="2"/>
<image href="/logos/hubspot.svg" x="548" y="252" width="20" height="20"><title>HubSpot</title></image>
<text class="t-tiny" x="588" y="248">Form</text>
<text class="t-title" x="588" y="270">The form reports itself</text>
<text class="t-sub" x="588" y="288">A listener turns its success message into an event.</text>
<path class="flow" d="M270,300 L270,326"/>
<path class="flow" d="M730,300 L730,326"/>
<path class="flow" d="M270,326 L730,326"/>
<path class="flow" d="M500,326 L500,354" marker-end="url(#ahm)"/>
<rect class="box" x="60" y="356" width="880" height="76" rx="2"/>
<rect class="pill" x="84" y="380" width="28" height="28" rx="2"/>
<image href="/logos/meta.svg" x="88" y="384" width="20" height="20"><title>Meta</title></image>
<text class="t-tiny" x="128" y="380">One account</text>
<text class="t-title" x="128" y="402">The B2B ad account and its pixel</text>
<text class="t-sub" x="128" y="420">Changes arrive on the left path. Page views and form fills arrive on the right.</text>
<path class="flow dash" d="M60,394 L34,394 L34,154 L58,154" marker-end="url(#ahm)"/>
<text class="t-tiny" transform="translate(26,274) rotate(-90)" text-anchor="middle">reads results</text>
</svg>
</div>
<figcaption>Two paths meet at one account.</figcaption>
</figure>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">04</span><h2>Where the campaign lives</h2></div>
<div class="body">
<p class="big">Campaign work needed one place to live.</p>
<p>It used to sit in loose exports and slide decks. What one campaign learned never made it into the next. So we set up a space for campaigns in the <a href="/systems/second-brain/">Second Brain</a>, with its own rules.</p>
<figure>
<p class="scroll-hint">Scroll to see the full diagram</p>
<div class="diagram pastel-b">
<svg viewBox="0 0 1000 560" role="img" aria-label="Where campaign information lives in the Second Brain. The marketing folder holds a README with the folder's rules, a platforms folder with Meta's ad specs, and a campaigns folder with one folder per campaign, named by channel, theme and period. Each campaign folder holds one file per stage, every file named for its campaign: an overview, then brief, audience, creative, landing page, performance and learnings. The learnings of one campaign start the brief for the next.">
<defs>
<marker id="ahc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M0,0 L10,5 L0,10 z" fill="var(--text)"/>
</marker>
</defs>
<rect class="box" x="8" y="8" width="520" height="350" rx="2"/>
<text class="t-tiny" x="32" y="36">Top level</text>
<text class="t-title" x="32" y="66">context/marketing/</text>
<path class="flow" d="M44,76 L44,214"/>
<path class="flow" d="M44,100 L58,100"/>
<path class="flow" d="M44,138 L58,138"/>
<path class="flow" d="M44,214 L58,214"/>
<path class="flow" d="M70,148 L70,176 L82,176"/>
<path class="flow" d="M70,224 L70,252 L82,252"/>
<text class="t-title" x="64" y="104">README.md</text>
<text class="t-sub" x="344" y="104">the folder&apos;s rules</text>
<text class="t-title" x="64" y="142">platforms/</text>
<text class="t-sub" x="344" y="142">platform requirements</text>
<text class="t-title" x="88" y="180">meta-ad-specs.md</text>
<text class="t-sub" x="344" y="180">safe zones, ratios, text caps</text>
<text class="t-title" x="64" y="218">campaigns/</text>
<text class="t-sub" x="344" y="218">one folder per campaign</text>
<text class="t-title" x="88" y="256">&lt;channel&gt;-&lt;theme&gt;-&lt;period&gt;/</text>
<text class="t-sub" x="344" y="256">one run, dated in the name</text>
<rect class="box" x="548" y="8" width="444" height="350" rx="2"/>
<text class="t-tiny" x="572" y="36">A campaign folder, one file per stage</text>
<text class="t-title" x="572" y="66">campaigns/&lt;name&gt;/</text>
<text class="t-sub" x="790" y="66">every file starts with its name</text>
<path class="flow" d="M584,76 L584,328"/>
<path class="flow" d="M584,100 L596,100"/>
<path class="flow" d="M584,138 L596,138"/>
<path class="flow" d="M584,176 L596,176"/>
<path class="flow" d="M584,214 L596,214"/>
<path class="flow" d="M584,252 L596,252"/>
<path class="flow" d="M584,290 L596,290"/>
<path class="flow" d="M584,328 L596,328"/>
<text class="t-title" x="602" y="104">&lt;name&gt;.md</text>
<text class="t-sub" x="790" y="104">overview, links, open blockers</text>
<text class="t-title" x="602" y="142">&lt;name&gt;-brief.md</text>
<text class="t-sub" x="790" y="142">objective, phases, budget, rules</text>
<text class="t-title" x="602" y="180">&lt;name&gt;-audience.md</text>
<text class="t-sub" x="790" y="180">titles, ad sets, exclusions</text>
<text class="t-title" x="602" y="218">&lt;name&gt;-creative.md</text>
<text class="t-sub" x="790" y="218">angles, hooks, one ID per ad</text>
<text class="t-title" x="602" y="256">&lt;name&gt;-landing-page.md</text>
<text class="t-sub" x="790" y="256">form, tracking, fixes, owners</text>
<text class="t-title" x="602" y="294">&lt;name&gt;-performance.md</text>
<text class="t-sub" x="790" y="294">weekly readouts, figures cited</text>
<text class="t-title" x="602" y="332">&lt;name&gt;-learnings.md</text>
<text class="t-sub" x="790" y="332">what worked, feeds the next brief</text>
<rect class="box" x="8" y="378" width="984" height="174" rx="2"/>
<text class="t-tiny" x="32" y="404">The loop</text>
<rect class="box" x="32" y="420" width="160" height="64" rx="2"/>
<text class="t-tiny" x="48" y="444">01</text>
<text class="t-stage" x="48" y="470">Brief</text>
<rect class="box" x="222" y="420" width="160" height="64" rx="2"/>
<text class="t-tiny" x="238" y="444">02</text>
<text class="t-stage" x="238" y="470">Audience</text>
<rect class="box" x="412" y="420" width="160" height="64" rx="2"/>
<text class="t-tiny" x="428" y="444">03</text>
<text class="t-stage" x="428" y="470">Creative</text>
<rect class="box" x="602" y="420" width="160" height="64" rx="2"/>
<text class="t-tiny" x="618" y="444">04</text>
<text class="t-stage" x="618" y="470">Performance</text>
<rect class="box ink" x="792" y="420" width="160" height="64" rx="2"/>
<text class="t-tiny on-ink" x="808" y="444">05</text>
<text class="t-stage on-ink" x="808" y="470">Learnings</text>
<path class="flow strong" d="M192,452 L220,452" marker-end="url(#ahc)"/>
<path class="flow strong" d="M382,452 L410,452" marker-end="url(#ahc)"/>
<path class="flow strong" d="M572,452 L600,452" marker-end="url(#ahc)"/>
<path class="flow strong" d="M762,452 L790,452" marker-end="url(#ahc)"/>
<path class="flow strong dash" d="M872,484 L872,522 L112,522 L112,486" marker-end="url(#ahc)"/>
<rect class="knock" x="374" y="510" width="236" height="24"/>
<text class="t-title" x="492" y="527" text-anchor="middle">Learnings start the next brief</text>
</svg>
</div>
<figcaption>Two views of one space. On the left, where things live. On the right, what each campaign folder holds: one file per stage, each named for its campaign. Underneath, the loop those files make. The next brief starts by reading the last campaign&rsquo;s learnings.</figcaption>
</figure>
<ol class="stack">
<li><div>
<h3>The learnings start the next loop</h3>
<p>Every campaign folder holds the brief, audience, creative, performance and learnings. There&rsquo;s also an overview on top and a file for the landing page the ads send people to. The next brief starts by reading the learnings before it. The learnings that hold up feed back into positioning. So each campaign starts where the last one ended, not from a blank page.</p>
</div></li>
<li><div>
<h3>One folder per campaign, not a summary</h3>
<p>Each campaign keeps its own folder instead of being merged into one marketing overview. A campaign has a lifecycle. A summary would lose track of which run said what and what came back.</p>
<p>Every file starts with the campaign&rsquo;s name, because the index lists files by name only. A file called just &ldquo;brief&rdquo; would get lost among every other campaign&rsquo;s briefs.</p>
</div></li>
<li><div>
<h3>The period is part of the name</h3>
<p>We name folders by channel, theme and period. Campaigns come back under the same theme, and without the period the second run would overwrite the first.</p>
</div></li>
<li><div>
<h3>Every figure carries its source and its date</h3>
<p>Performance goes in as dated snapshots, newest last, and nothing gets overwritten. Every number cites the export it came from. A figure with no date or source can&rsquo;t be read a month later.</p>
</div></li>
<li><div>
<h3>The account sees the campaign too</h3>
<p>The audience file links every account the campaign targeted. Each of those accounts gets a dated entry on its own timeline. A seller opening the account sees the campaign there and doesn&rsquo;t have to ask marketing.</p>
</div></li>
<li><div>
<h3>Platform rules live in one place</h3>
<p>Meta&rsquo;s placement specs sit on one shared page: safe zones, ratios and text caps. We copied them from Meta&rsquo;s own guide and noted the date we read it. Meta changes them without notice, so the date tells you whether to trust the page. Brand rules stay in their own place. What a campaign actually shipped goes in its creative file.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">05</span><h2>The first campaign</h2></div>
<div class="body">
<p class="big">The first campaign has launched.</p>
<ol class="stack">
<li><div>
<h3>A brief that tests before it builds</h3>
<p>The test runs in two phases: low-cost statics first to find which angle lands, then full production on the winner.</p>
</div></li>
<li><div>
<h3>Four audiences, built by the agent</h3>
<p>A customer list of decision makers at the target companies, taken from the team&rsquo;s own sheets and filled out through Apollo. A 1% lookalike of that list. Visitors to the landing page in the last 30 days, for retargeting. And an exclusion of anyone who became a lead in the last 180 days, so no budget goes on people who have already asked.</p>
<p>Alongside them, we built a control audience to compare against, from the ideal customer profile (ICP) and the interest settings Meta makes available.</p>
</div></li>
<li><div>
<h3>Creative built by Cursor with design skills</h3>
<p>We built the creative in Cursor with brand skills created by our designer. They carry the fonts, colors, layouts and photo rules. The creative covers single image and carousel: six statics, two hooks for each of three angles, each in 4:5, 1:1 and 9:16. A six-card carousel and a storyboard for a 15-second video are ready for the second phase.</p>
</div></li>
<li><div>
<h3>A landing page ready for paid traffic</h3>
<p>An audit scored the page five out of ten as a paid landing page. We optimized the images, simplified the user journey and the form, and reviewed the content. That improved the score.</p>
</div></li>
<li><div>
<h3>The launch is a config file</h3>
<p>The campaign is defined in a launch config. It sets a leads objective that optimizes for the standard lead event, plus a location radius. Each hook gets its own ad set, with its own budget and its own readout. Every ad carries a tag naming the creative it came from.</p>
<p>The decisions that belong to people were left as placeholders: the legal category (whether Meta&rsquo;s employment ad rules apply), the Page the ads run from, the dates and the budget. Once people made those calls, the campaign launched.</p>
</div></li>
</ol>
</div>
</div>
</section>

<section>
<div class="wrap grid">
<div class="sec-head"><span class="num">06</span><h2>How it came together</h2></div>
<div class="body">
<p>The work, step by step.</p>
<ol class="stack">
<li><div>
<h3>Connected Cursor to the Meta ads MCP server</h3>
<p>First I checked that the business portfolio had the ads MCP integration at all. Meta was rolling it out account by account. It works out of the box with Claude and ChatGPT, but not Cursor. So I registered as a Meta developer, created the app, added the ads MCP use case and allowed Cursor&rsquo;s web callback.</p>
</div></li>
<li><div>
<h3>Stood up the B2B account</h3>
<p>I created the account in the business portfolio and confirmed the agent could see it. Meta allowed all seven action types by default. Anyone about to hand an agent a live budget should check this first.</p>
</div></li>
<li><div>
<h3>Audited the pixel</h3>
<p>I reviewed the pixel to make sure it fires all the events we need to track.</p>
</div></li>
<li><div>
<h3>Found why the page sent nothing</h3>
<p>The shared Google Tag Manager tag setup picks each platform&rsquo;s ID from a lookup table, keyed on the exact hostname. When nothing matches, it falls back to a placeholder. The new subdomain matched nothing. One new row in each of six lookups fixed Meta, GA4, Google Ads, Microsoft Ads, LinkedIn and Criteo at once.</p>
</div></li>
<li><div>
<h3>Wired the events</h3>
<p>I added a trigger that fires the B2B page view on the landing page. For the form, a small listener catches the HubSpot form&rsquo;s success message and passes it to Tag Manager.</p>
</div></li>
<li><div>
<h3>Gave campaigns a home</h3>
<p>We set up the campaign space in the Second Brain and wrote its rules down. One folder per campaign, with a file per stage. Every figure cited and dated. Every targeted account linked both ways. Meta&rsquo;s placement specs kept on one dated reference page.</p>
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
<div class="metric"><span class="fig">3 days</span><span class="cap">from no agent access to a B2B landing page tracked end to end</span></div>
<div class="metric"><span class="fig">5</span><span class="cap">stages in every campaign&rsquo;s loop, from brief to learnings</span></div>
<div class="metric"><span class="fig">18</span><span class="cap">static ads in the first campaign: six designs, three ratios each</span></div>
<div class="metric"><span class="fig">4</span><span class="cap">audiences built by the agent, from customer list to exclusion</span></div>
<div class="metric"><span class="fig">1,000+</span><span class="cap">decision makers in the customer list, from 300+ target companies</span></div>
</div>
</div>
</div>
</section>
