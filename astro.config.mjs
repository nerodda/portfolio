// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { lastModified } from './src/lib/gitDates.mjs';

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

// https://astro.build/config
export default defineConfig({
  site: 'https://olganeroda.com',
  // The static build emits directory-style URLs (`/about/index.html`), so the
  // canonical form has a trailing slash. Enforcing it here keeps dev and
  // production agreeing, and keeps internal links off a redirect hop.
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Google ignores `changefreq` and `priority` but uses `lastmod` while it
      // looks accurate, so a uniform build timestamp would be worse than none.
      serialize(item) {
        const lastmod = lastModified(sourceFileFor(new URL(item.url).pathname));
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
});
