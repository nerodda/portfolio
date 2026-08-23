export interface Talk {
  title: string;
  abstract: string;
  draws_on: string[];
}

export const talks: Talk[] = [
  {
    title: 'How to Build the Second Brain for the Revenue Department',
    abstract:
      "A sales team's knowledge is scattered across calls, emails, pipeline, and Drive, and a general AI assistant will answer confidently whether or not it actually knows. This talk walks through building a cited, read-only knowledge layer that sellers trust: navigation over search, citations on every claim, a backend that owns all writes, and a research loop that gets more valuable the more the team uses it.",
    draws_on: ['Sales Second Brain', 'Model Context Protocol', 'Cited retrieval design'],
  },
  {
    title: 'Ship the MVP Yourself, Then Throw the Shortcuts Away',
    abstract:
      "A concrete before/after from building a free, public AI resume builder: coding a working product solo in two months to prove the traffic case would hold, then defining what 'production-grade' actually means for that specific product, real rate limiting, real PDF rendering, prompts as editable data, and handing that spec to an engineering partner for the rebuild.",
    draws_on: ['AI Resume Builder', 'Prompt architecture', 'Product-to-engineering handoff'],
  },
  {
    title: 'When the No-Code Tool Becomes the Bottleneck',
    abstract:
      "A real migration story: standing up a multi-tenant AI content platform fast inside an AI app builder to prove the idea, then hitting the ceiling on iteration speed once the system needed real versioning and evaluation. How the same data model and edge functions moved into a real codebase without a rewrite, and how to know when a no-code tool has stopped being a shortcut.",
    draws_on: ['ContentOps', 'Multi-tenant architecture', 'Build vs. no-code tradeoffs'],
  },
];

export const topics: string[] = [
  'AI agent architecture',
  'Prompt & system design',
  'MarTech systems',
  'Product-to-engineering handoff',
  'Build vs. no-code tradeoffs',
  'Zero-touch automation pipelines',
  'Multi-agent vs. single-workflow design',
  'Trust & guardrails in AI products',
  'SEO content automation',
  'Revenue & sales enablement tooling',
  'Full-funnel growth strategy',
];
