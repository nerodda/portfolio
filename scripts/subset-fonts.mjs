// One-off generator: pulls the latin + latin-ext faces out of each
// @fontsource-variable package, copies the woff2 files into public/fonts/,
// and writes src/styles/fonts.css referencing them. Re-run after bumping
// a font package version. Not part of the build — output is committed.
import { readFileSync, writeFileSync, copyFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('..', import.meta.url));

const fonts = [{ pkg: '@fontsource-variable/inter', src: 'wght.css', dir: 'inter' }];

let out = '';

for (const font of fonts) {
  const pkgDir = path.join(root, 'node_modules', font.pkg);
  const cssPath = path.join(pkgDir, font.src);
  const css = readFileSync(cssPath, 'utf8');

  const blocks = css.split(/(?=\/\*)/).filter(Boolean);
  const keep = blocks.filter((b) => /^\/\* [\w-]+-latin(-ext)?-/.test(b));

  const destDir = path.join(root, 'public', 'fonts', font.dir);
  mkdirSync(destDir, { recursive: true });

  for (const block of keep) {
    const match = block.match(/url\(\.\/files\/([\w.-]+\.woff2)\)/);
    if (!match) continue;
    const filename = match[1];
    copyFileSync(path.join(pkgDir, 'files', filename), path.join(destDir, filename));
  }

  const rewritten = keep
    .map((b) => b.replace(/url\(\.\/files\/([\w.-]+\.woff2)\)/, `url(/fonts/${font.dir}/$1)`))
    .join('\n');

  out += rewritten + '\n';
}

writeFileSync(path.join(root, 'src', 'styles', 'fonts.css'), out);
console.log('Wrote src/styles/fonts.css');
