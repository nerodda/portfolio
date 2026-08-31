/**
 * Shared SEO primitives.
 *
 * The Person node is the important part. Every page used to declare its own
 * `@type: Person` with a different `url`, which search engines read as several
 * distinct people rather than one. Giving every node the same `@id` merges them
 * into a single entity whose properties accumulate across the site.
 */

export const SITE_URL = 'https://olganeroda.com';

/** Stable identifier for the one Person this site is about. */
export const PERSON_ID = `${SITE_URL}/#person`;
/** Stable identifier for the site itself. */
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const PERSON_NAME = 'Olga Neroda';

export const SAME_AS = [
  'https://www.linkedin.com/in/olga-neroda/',
  'https://github.com/nerodda',
];

/**
 * The canonical Person node, declared in full on `/about/` and referenced by
 * `@id` everywhere else. `extra` lets a page add page-specific properties
 * (`knowsAbout`, `award`) without restating identity.
 */
export function personNode(extra: Record<string, unknown> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: PERSON_NAME,
    url: `${SITE_URL}/about/`,
    mainEntityOfPage: `${SITE_URL}/about/`,
    jobTitle: 'Marketing Technologist',
    worksFor: { '@type': 'Organization', name: 'Indeed Flex' },
    address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
    image: `${SITE_URL}/og-image.png`,
    sameAs: SAME_AS,
    ...extra,
  };
}

/** A bare `@id` reference to the Person node, for use as `author` / `creator`. */
export const personRef = { '@type': 'Person', '@id': PERSON_ID, name: PERSON_NAME };

export function webSiteNode() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: PERSON_NAME,
    inLanguage: 'en',
    publisher: personRef,
  };
}

/**
 * Breadcrumbs feed Google's breadcrumb rich result, which replaces the raw URL
 * under the title in search listings. `trail` excludes the home crumb.
 */
export function breadcrumbNode(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

/**
 * Meta descriptions want 120–160 characters of prose. Case-study `outcome`
 * values are headline fragments as short as 40 characters, so they get paired
 * with the summary rather than shipped alone.
 */
export function metaDescription(...parts: (string | undefined | null)[]): string {
  const text = parts
    .filter((p): p is string => !!p && p !== 'TODO')
    .map((p) => p.trim().replace(/\s+/g, ' '))
    .map((p) => (/[.!?]$/.test(p) ? p : `${p}.`))
    .join(' ');
  if (text.length <= 160) return text;
  const cut = text.slice(0, 157);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}
