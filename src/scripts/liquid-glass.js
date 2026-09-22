/* Liquid glass: refraction through the sticky header, via a displacement map.
 *
 * The map is generated from the signed distance field of the element's own
 * rounded rectangle. It is neutral (128,128) across the middle and ramps toward
 * the outward normal inside a band at the edge, so an SVG feDisplacementMap
 * bends the backdrop like a lens rim. The map feeds three displacement passes
 * at slightly different scales, one per color channel, which is where the
 * chromatic fringing at the edge comes from.
 *
 * The surface on top of the refraction, meaning tint, rim and sheen, is CSS in
 * liquid-glass.css. Nothing here touches the target's children, so the header
 * keeps full control of its own collapse behavior.
 */

const SVG_NS = 'http://www.w3.org/2000/svg';

export const settings = {
  strength: 26, // px of refraction at the rim
  bezel: 18, // px band the curvature occupies
  blur: 7, // backdrop frost, enough to keep nav text legible over the diagrams
  saturate: 1.4,
  brightness: 1.02,
  aberration: 1,
};

// No backdrop-filter means no glass at all: a translucent header without the
// frost would put nav text straight on top of the page text.
const SUPPORTED =
  typeof CSS !== 'undefined' &&
  (CSS.supports('backdrop-filter', 'blur(1px)') ||
    CSS.supports('-webkit-backdrop-filter', 'blur(1px)'));

const registry = [];
let uid = 0;
let defs = null;

function ensureDefs() {
  if (defs) return defs;
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('width', '0');
  svg.setAttribute('height', '0');
  svg.style.cssText = 'position:fixed;width:0;height:0;pointer-events:none;opacity:0';
  defs = document.createElementNS(SVG_NS, 'defs');
  svg.appendChild(defs);
  document.body.appendChild(svg);
  return defs;
}

/** Signed distance to a rounded rectangle centred on the origin. */
function sdRoundRect(px, py, hw, hh, r) {
  const qx = Math.abs(px) - (hw - r);
  const qy = Math.abs(py) - (hh - r);
  return Math.min(Math.max(qx, qy), 0) + Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) - r;
}

function buildDisplacementMap(w, h, radius, bezel) {
  const ss = 2; // supersample so the rim gradient stays smooth
  const cw = Math.max(1, Math.round(w * ss));
  const ch = Math.max(1, Math.round(h * ss));
  const canvas = document.createElement('canvas');
  canvas.width = cw;
  canvas.height = ch;
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(cw, ch);
  const data = image.data;

  const hw = w / 2;
  const hh = h / 2;
  const r = Math.max(0.01, Math.min(radius, hw, hh));
  const band = Math.max(1, Math.min(bezel, hw, hh));
  const eps = 0.75;

  for (let y = 0; y < ch; y++) {
    const py = (y + 0.5) / ss - hh;
    for (let x = 0; x < cw; x++) {
      const px = (x + 0.5) / ss - hw;
      const i = (y * cw + x) * 4;
      const d = sdRoundRect(px, py, hw, hh, r);
      data[i + 2] = 128;
      data[i + 3] = 255;

      // Outside the shape, or deeper than the band: leave the backdrop alone.
      if (d > 0 || d < -band) {
        data[i] = 128;
        data[i + 1] = 128;
        continue;
      }

      let nx = sdRoundRect(px + eps, py, hw, hh, r) - sdRoundRect(px - eps, py, hw, hh, r);
      let ny = sdRoundRect(px, py + eps, hw, hh, r) - sdRoundRect(px, py - eps, hw, hh, r);
      const len = Math.hypot(nx, ny) || 1;

      // 0 at the inner edge of the band, 1 at the rim. Raised to a power so the
      // curvature stays flat through the middle and turns hard at the rim.
      const lens = Math.pow(1 + d / band, 2.4);

      data[i] = Math.max(0, Math.min(255, 128 + (nx / len) * lens * 127));
      data[i + 1] = Math.max(0, Math.min(255, 128 + (ny / len) * lens * 127));
    }
  }

  ctx.putImageData(image, 0, 0);
  return canvas.toDataURL();
}

const CHANNEL_MATRIX = {
  r: '1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0',
  g: '0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0',
  b: '0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0',
};

function buildFilter(id, href, w, h) {
  const s = settings.strength;
  const spread = settings.aberration * 0.09;
  const scales = { r: s * (1 + spread), g: s, b: s * (1 - spread) };

  const passes = ['r', 'g', 'b']
    .map(
      (c) => `
      <feDisplacementMap in="SourceGraphic" in2="map" scale="${scales[c].toFixed(2)}"
        xChannelSelector="R" yChannelSelector="G" result="d_${c}"/>
      <feColorMatrix in="d_${c}" type="matrix" values="${CHANNEL_MATRIX[c]}" result="c_${c}"/>`,
    )
    .join('');

  return `
    <filter id="${id}" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse"
      x="0" y="0" width="${w}" height="${h}" color-interpolation-filters="sRGB">
      <feImage href="${href}" x="0" y="0" width="${w}" height="${h}"
        preserveAspectRatio="none" result="map"/>
      ${passes}
      <feBlend in="c_r" in2="c_g" mode="screen" result="rg"/>
      <feBlend in="rg" in2="c_b" mode="screen" result="rgb"/>
      <feGaussianBlur in="rgb" stdDeviation="0.35"/>
    </filter>`;
}

function readRadius(el, w, h) {
  const raw = parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0;
  // A 999px pill radius resolves to half the short side.
  return Math.min(raw, w / 2, h / 2);
}

function refresh(entry) {
  const el = entry.el;
  const rect = el.getBoundingClientRect();
  const w = Math.round(rect.width);
  const h = Math.round(rect.height);
  if (!w || !h) return;

  const frost = `blur(${settings.blur}px) saturate(${settings.saturate}) brightness(${settings.brightness})`;

  // Frost without the displacement pass. Each refraction forces its own render
  // surface, so spending one on every card in a grid costs smooth scrolling for
  // a rim distortion nobody reads at that size. Reserve the real thing for the
  // few large surfaces where it is the point.
  if (entry.lite) {
    el.style.backdropFilter = frost;
    el.style.webkitBackdropFilter = frost;
    return;
  }

  const bezel = Math.min(entry.bezel ?? settings.bezel, w / 2, h / 2);
  const key = [w, h, Math.round(readRadius(el, w, h)), Math.round(bezel * 10)].join(':');

  if (key !== entry.key) {
    entry.key = key;
    entry.href = buildDisplacementMap(w, h, readRadius(el, w, h), bezel);
  }

  const container = ensureDefs();
  container.querySelector('#' + entry.id)?.remove();
  const holder = document.createElementNS(SVG_NS, 'g');
  holder.innerHTML = buildFilter(entry.id, entry.href, w, h);
  container.appendChild(holder.querySelector('filter'));

  // Safari drops url() inside backdrop-filter, and so does any engine that has
  // not shipped it. Assigning an unsupported value leaves the property empty,
  // which is the test: fall back to plain frost rather than to no filter at
  // all, because a translucent header with nothing behind it is unreadable.
  el.style.backdropFilter = `url(#${entry.id}) ${frost}`;
  if (!el.style.backdropFilter) el.style.backdropFilter = frost;
  el.style.webkitBackdropFilter = frost;
}

const pending = new Set();
let frame = null;

function schedule(entry) {
  pending.add(entry);
  if (frame) return;
  frame = requestAnimationFrame(() => {
    frame = null;
    const list = Array.from(pending);
    pending.clear();
    // One bad element must not take the rest of the batch down with it.
    list.forEach((e) => {
      try {
        refresh(e);
      } catch {
        e.el.style.backdropFilter = '';
        e.el.classList.remove('lg-glass');
      }
    });
  });
}

// A resize means a new displacement map, and the map costs a full-width canvas
// pass to build. The header animates its height every time the secondary row
// collapses, so rebuilding per frame would stutter the animation for a rim
// effect nobody can see mid-transition. Hold the previous map until the size
// stops changing, then rebuild once against the height it settled on.
const settleTimers = new WeakMap();

function scheduleOnSettle(entry) {
  clearTimeout(settleTimers.get(entry));
  settleTimers.set(
    entry,
    setTimeout(() => schedule(entry), 160),
  );
}

const observer =
  typeof ResizeObserver !== 'undefined'
    ? new ResizeObserver((entries) => {
        entries.forEach((e) => {
          const entry = registry.find((r) => r.el === e.target);
          if (entry) scheduleOnSettle(entry);
        });
      })
    : null;

export function apply(el, opts = {}) {
  if (!SUPPORTED || !el || registry.some((r) => r.el === el)) return;
  const entry = {
    el,
    id: 'lg-' + ++uid,
    bezel: opts.bezel,
    lite: !!opts.lite,
    key: null,
    href: null,
  };
  registry.push(entry);
  el.classList.add('lg-glass');
  observer?.observe(el);
  schedule(entry);
}

export function refreshAll() {
  registry.forEach(schedule);
}
