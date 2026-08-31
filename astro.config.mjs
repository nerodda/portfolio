// @ts-check
import { execFileSync } from 'node:child_process';
import { statSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Maps a site URL path back to the source file that produces it, so each
 * sitemap entry can carry the date that page actually changed.
 *
 * @param {string} pathname
 * @returns {string}
 */
function sourceFileFor(pathname) {
  if (pathname === '/') return 'src/pages/index.astro';
  const system = pathname.match(/^\/systems\/([^/]+)\/$/);
  if (system) return `src/content/systems/${system[1]}.md`;
  return `src/pages/${pathname.replace(/^\/|\/$/g, '')}.astro`;
}

/**
 * Last commit date for a file, falling back to its mtime. Google ignores
 * `changefreq` and `priority` outright but does use `lastmod` — and only while
 * it looks accurate, so a uniform build timestamp would be worse than nothing.
 * Requires full history in CI (`fetch-depth: 0`); the mtime fallback keeps a
 * shallow clone building rather than failing.
 *
 * @param {string} file
 * @returns {string | undefined}
 */
function lastModified(file) {
  try {
    const iso = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (iso) return new Date(iso).toISOString();
  } catch {
    // no git history available — fall through to mtime
  }
  try {
    return statSync(file).mtime.toISOString();
  } catch {
    return undefined;
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://olganeroda.com',
  // The static build emits directory-style URLs (`/about/index.html`), so the
  // canonical form has a trailing slash. Enforcing it here keeps dev and
  // production agreeing, and keeps internal links off a redirect hop.
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        const lastmod = lastModified(sourceFileFor(new URL(item.url).pathname));
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
});
