// @ts-check
import { execFileSync } from 'node:child_process';
import { statSync } from 'node:fs';

/**
 * Commit dates for a source file, shared by the sitemap (`lastmod`) and the
 * case-study Article schema (`datePublished` / `dateModified`), so both report
 * the same dates. Requires full history in CI (`fetch-depth: 0`); the mtime
 * fallback keeps a shallow clone building rather than failing.
 */

/**
 * @param {string[]} args
 * @returns {string[]}
 */
function gitDates(args) {
  try {
    return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}

/** @param {string} file */
function mtime(file) {
  try {
    return statSync(file).mtime.toISOString();
  } catch {
    return undefined;
  }
}

/**
 * Last commit date for a file, falling back to its mtime.
 *
 * @param {string} file
 * @returns {string | undefined}
 */
export function lastModified(file) {
  const [iso] = gitDates(['log', '-1', '--format=%cI', '--', file]);
  return iso ? new Date(iso).toISOString() : mtime(file);
}

/**
 * Date the file was first committed, following renames.
 *
 * @param {string} file
 * @returns {string | undefined}
 */
export function firstCommitted(file) {
  const dates = gitDates(['log', '--follow', '--format=%cI', '--', file]);
  const iso = dates.at(-1);
  return iso ? new Date(iso).toISOString() : lastModified(file);
}
