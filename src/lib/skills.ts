export interface Skill {
  name: string;
  description: string;
  /** Link to the skill's file in the public repo, once it's been written. */
  url?: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

/** Set once the library has a public home. Until then the page shows a "coming soon" state instead of a dead link. */
export const GITHUB_REPO_URL: string | null = 'https://github.com/nerodda/skills';

const REPO_BASE = 'https://github.com/nerodda/skills/blob/main/skills';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Ideation & strategy',
    skills: [
      {
        name: 'idea-review',
        description: "Scores a raw content idea against a fit and impact bar before it gets a brief.",
        url: `${REPO_BASE}/idea-review/SKILL.md`,
      },
      {
        name: 'idea-tournament',
        description: 'Runs competing ideas head-to-head to surface the strongest concept.',
        url: `${REPO_BASE}/idea-tournament/SKILL.md`,
      },
      {
        name: 'proposal-creator',
        description: 'Turns a scoped opportunity into a structured proposal document.',
        url: `${REPO_BASE}/proposal-creator/SKILL.md`,
      },
      {
        name: 'researcher',
        description: 'Pulls sourced, cited research on a topic before a draft starts.',
        url: `${REPO_BASE}/researcher/SKILL.md`,
      },
      {
        name: 'results-scan',
        description: 'Pulls performance data on published content back into the pipeline.',
        url: `${REPO_BASE}/results-scan/SKILL.md`,
      },
      {
        name: 'ship-scan',
        description: 'Final pre-publish check for gaps, broken links, and missing assets.',
        url: `${REPO_BASE}/ship-scan/SKILL.md`,
      },
      {
        name: 'taste-filter',
        description: "Screens a draft against a house style bar and rejects the generic ones.",
        url: `${REPO_BASE}/taste-filter/SKILL.md`,
      },
    ],
  },
  {
    category: 'LinkedIn',
    skills: [
      {
        name: 'linkedin-copywriter',
        description: "Drafts a LinkedIn post from a brief, in the account's voice.",
        url: `${REPO_BASE}/linkedin-copywriter/SKILL.md`,
      },
      {
        name: 'linkedin-hook-writer',
        description: 'Generates opening-line variants built to stop the scroll.',
        url: `${REPO_BASE}/linkedin-hook-writer/SKILL.md`,
      },
      {
        name: 'linkedin-trend-scan',
        description: 'Surfaces what is currently performing in-niche on LinkedIn.',
        url: `${REPO_BASE}/linkedin-trend-scan/SKILL.md`,
      },
    ],
  },
  {
    category: 'X',
    skills: [
      {
        name: 'x-copywriter',
        description: 'Drafts a post or thread for X from a brief.',
        url: `${REPO_BASE}/x-copywriter/SKILL.md`,
      },
      {
        name: 'x-trend-scan',
        description: 'Surfaces what is currently performing in-niche on X.',
        url: `${REPO_BASE}/x-trend-scan/SKILL.md`,
      },
    ],
  },
  {
    category: 'YouTube',
    skills: [
      {
        name: 'launch-video',
        description: 'Plans and scripts a video built around a launch moment.',
        url: `${REPO_BASE}/launch-video/SKILL.md`,
      },
      {
        name: 'youtube-description',
        description: 'Writes the description, chapters, and links block.',
        url: `${REPO_BASE}/youtube-description/SKILL.md`,
      },
      {
        name: 'youtube-publisher',
        description: 'Packages a finished video with its metadata for upload.',
        url: `${REPO_BASE}/youtube-publisher/SKILL.md`,
      },
      {
        name: 'youtube-script',
        description: 'Turns an outline into a full shot-by-shot script.',
        url: `${REPO_BASE}/youtube-script/SKILL.md`,
      },
      {
        name: 'youtube-thumbnail',
        description: 'Drafts thumbnail concepts and text treatments.',
        url: `${REPO_BASE}/youtube-thumbnail/SKILL.md`,
      },
      {
        name: 'youtube-title',
        description: 'Generates and ranks title variants for click-through.',
        url: `${REPO_BASE}/youtube-title/SKILL.md`,
      },
    ],
  },
  {
    category: 'Long-form & SEO',
    skills: [
      {
        name: 'long-form',
        description: 'Drafts a full-length article from a brief and outline.',
        url: `${REPO_BASE}/long-form/SKILL.md`,
      },
      {
        name: 'newsletter-writer',
        description: 'Turns source material into a send-ready newsletter issue.',
        url: `${REPO_BASE}/newsletter-writer/SKILL.md`,
      },
      {
        name: 'angela-voice',
        description: 'Rewrites a draft in a named reference voice.',
        url: `${REPO_BASE}/angela-voice/SKILL.md`,
      },
      {
        name: 'repurpose',
        description: 'Breaks one long-form piece into channel-specific derivatives.',
        url: `${REPO_BASE}/repurpose/SKILL.md`,
      },
      {
        name: 'seo-audit',
        description: 'Checks a draft or live page against on-page SEO fundamentals.',
        url: `${REPO_BASE}/seo-audit/SKILL.md`,
      },
    ],
  },
  {
    category: 'Outbound & lead gen',
    skills: [
      {
        name: 'lead-magnet-creator',
        description: 'Turns an idea into a structured lead magnet asset.',
        url: `${REPO_BASE}/lead-magnet-creator/SKILL.md`,
      },
      {
        name: 'lead-magnet-engager',
        description: 'Drafts the nurture sequence that follows a lead magnet download.',
        url: `${REPO_BASE}/lead-magnet-engager/SKILL.md`,
      },
      {
        name: 'outbound-copywriter',
        description: 'Drafts outbound sequences from an offer and an ICP.',
        url: `${REPO_BASE}/outbound-copywriter/SKILL.md`,
      },
      {
        name: 'webinar-kit',
        description: 'Builds the promo, script, and follow-up assets for a webinar.',
        url: `${REPO_BASE}/webinar-kit/SKILL.md`,
      },
    ],
  },
  {
    category: 'Ops & testing',
    skills: [
      {
        name: 'process-flowchart',
        description: 'Turns a described process into a visual flowchart.',
        url: `${REPO_BASE}/process-flowchart/SKILL.md`,
      },
      {
        name: 'spin-tags',
        description: 'Generates spintax variants of a piece of copy.',
        url: `${REPO_BASE}/spin-tags/SKILL.md`,
      },
      {
        name: 'split-test-designer',
        description: 'Designs a split test with a clear variant and success metric.',
        url: `${REPO_BASE}/split-test-designer/SKILL.md`,
      },
      {
        name: 'web-search-scan',
        description: 'Runs a structured web search and returns sourced findings.',
        url: `${REPO_BASE}/web-search-scan/SKILL.md`,
      },
    ],
  },
];

export const skillCount = skillGroups.reduce((n, g) => n + g.skills.length, 0);
