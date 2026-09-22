import { apply, refreshAll } from './liquid-glass.js';

/* The sticky header is the only element on the site that page content passes
   behind, so it is the only place the refraction has anything to bend. It reads
   most clearly over the pastel diagram and interface panels on the system
   pages, and stays close to invisible over plain body copy, which is the
   intended behavior rather than a shortfall. */

// Reduced transparency is an accessibility request rather than a taste setting,
// so honor it by leaving the header on its opaque background.
const transparencyOK =
  typeof matchMedia !== 'function' || !matchMedia('(prefers-reduced-transparency: reduce)').matches;

/* Refraction needs something behind an element to bend, and the tile groups sit
   on the flat page background where glass would show nothing at all. So each
   group carries a wash of the site's own blob gradient behind it, added here
   rather than in the markup because it exists only to be refracted. The tiles
   then float on that wash. */
const WASHED = ['.metrics', '.rows.cards'];

function start() {
  if (!transparencyOK) return;

  const header = document.querySelector('.site-header');
  if (header) apply(header, { bezel: 18 });

  WASHED.forEach((groupSelector) => {
    document.querySelectorAll(groupSelector).forEach((group) => {
      group.classList.add('lg-wash');
      // The metric tiles are large enough for the rim distortion to register.
      // The card rows are not, and there are far more of them, so they take
      // frost only.
      const lite = !group.matches('.metrics');
      group.querySelectorAll(':scope > .metric, :scope > .row').forEach((tile) => {
        apply(tile, { bezel: 12, lite });
      });
    });
  });

  // Web fonts land after first paint and change the header's height with them.
  // The resize observer catches that, but only once the fonts have swapped in.
  document.fonts?.ready.then(refreshAll);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
