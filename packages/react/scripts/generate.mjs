#!/usr/bin/env node

const STROKE_TAGS = ['path', 'polygon', 'polyline', 'line', 'circle', 'rect', 'ellipse'];
const TAG_RE = new RegExp(`<(${STROKE_TAGS.join('|')})\\b[^>]*?/?>`, 'g');

// `stroke-width` is kept per-path: Phosphor distinguishes thin/light/regular/bold
// purely by stroke-width (8/12/16/24).
const STRIP_ATTRS = new Set([
  'fill',
  'stroke',
  'stroke-linecap',
  'stroke-linejoin',
]);

function parseStyleString(styleStr) {
  const entries = styleStr
    .split(';')
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => {
      const idx = p.indexOf(':');
      if (idx < 0) return null;
      const prop = p.slice(0, idx).trim();
      const val = p.slice(idx + 1).trim();
      const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return [camel, val];
    })
    .filter(Boolean);
  return entries;
}

function formatStyleObject(styleStr) {
  const entries = parseStyleString(styleStr);
  if (!entries.length) return null;
  return `{{${entries.map(([k, v]) => `${k}:"${v}"`).join(',')}}}`;
}

function reactAttrName(name) {
  if (name === 'class') return 'className';
  if (name === 'pathLength') return 'pathLength';
  return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function rewriteElement(match) {
  const closing = match.endsWith('/>') ? '/>' : '>';
  const tagMatch = match.match(/^<([a-z]+)\b/);
  if (!tagMatch) return null;
  const tagName = tagMatch[1];
  // Skip the background rect that Phosphor puts at the top of every SVG.
  if (tagName === 'rect' && /width="256"/.test(match) && /height="256"/.test(match) && /fill="none"/.test(match)) {
    return null;
  }
  const attrsStr = match.slice(1 + tagName.length, -closing.length);
  const attrRe = /([a-zA-Z-]+)="([^"]*)"/g;
  const outAttrs = [];
  let m;
  while ((m = attrRe.exec(attrsStr)) !== null) {
    const [, name, value] = m;
    if (STRIP_ATTRS.has(name)) continue;
    if (name === 'style') {
      const formatted = formatStyleObject(value);
      if (formatted) outAttrs.push(`style=${formatted}`);
      continue;
    }
    if (name === 'pathLength') {
      outAttrs.push(`pathLength={${value}}`);
      continue;
    }
    const reactName = reactAttrName(name);
    outAttrs.push(`${reactName}="${value}"`);
  }
  // Fill-weight paths have no stroke and need fill="currentColor" to render.
  // Detect: no stroke attribute and no class="draw-line" (stroked animated paths).
  const hasStroke = /\bstroke="/.test(match);
  if (!hasStroke && !outAttrs.some((a) => a.startsWith('fill='))) {
    outAttrs.push('fill="currentColor"');
  }
  return `<${tagName} ${outAttrs.join(' ')}/>`;
}

export function extractAnimatedJsx(svgSource) {
  const matches = [];
  const re = new RegExp(TAG_RE.source, 'g');
  let m;
  while ((m = re.exec(svgSource)) !== null) {
    const rewritten = rewriteElement(m[0]);
    if (rewritten !== null) matches.push(rewritten);
  }
  return matches.join('');
}

export function extractAnimationParams(svgSource) {
  const m = svgSource.match(/animation:\s*phosphor-draw-in\s+(\S+)\s+(\S+)\s+(?:forwards|infinite)/);
  if (!m) throw new Error('Animation params not found in SVG source');
  return { duration: m[1], easing: m[2] };
}

export function buildIconModule(pascalName, weightsJsx) {
  const weightsEntries = Object.entries(weightsJsx)
    .map(([weight, jsx]) => `  ${weight}: <>${jsx}</>,`)
    .join('\n');
  return `import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
${weightsEntries}
};

export const ${pascalName}Icon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
`;
}

export function buildIndex(pascalNames) {
  const sorted = [...pascalNames].sort();
  const exports = sorted.map((n) => `export { ${n}Icon } from './icons/${n}Icon';`).join('\n');
  return `export { IconContext } from './IconContext';
export type { IconProps, IconWeight, IconContextValue } from './types';
${exports}
`;
}

export function buildStylesCss({ duration, easing }) {
  return `.phosphor-animated-icon .draw-line {
  stroke-dasharray: 2000;
  stroke-dashoffset: 0;
}
.phosphor-animated-icon:hover .draw-line {
  animation: phosphor-draw-in ${duration} ${easing} infinite alternate;
}
@keyframes phosphor-draw-in {
  0%   { stroke-dashoffset: 2000; }
  100% { stroke-dashoffset: 0; }
}
`;
}

import { readFile, writeFile, mkdir, readdir, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const WEIGHTS = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'];

function weightFileName(name, weight) {
  return weight === 'regular' ? `${name}.svg` : `${name}-${weight}.svg`;
}

async function loadManifest(manifestPath) {
  const src = await readFile(manifestPath, 'utf8');
  const entries = [];
  const itemRe = /name:\s*"([^"]+)",\s*pascal_name:\s*"([^"]+)"/g;
  let m;
  while ((m = itemRe.exec(src)) !== null) {
    entries.push({ name: m[1], pascalName: m[2] });
  }
  return entries;
}

async function main() {
  const here = dirname(fileURLToPath(import.meta.url));
  const rootDir = join(here, '..', '..', '..');
  const rawAnimatedDir = join(rootDir, 'core-main', 'raw-animated');
  const manifestPath = join(rootDir, 'core-main', 'src', 'icons.ts');
  const outIconsDir = join(here, '..', 'src', 'icons');
  const outIndexPath = join(here, '..', 'src', 'index.ts');
  const outStylesPath = join(here, '..', 'src', 'styles.css');

  const manifest = await loadManifest(manifestPath);
  if (!manifest.length) throw new Error('Manifest is empty — check path: ' + manifestPath);

  const sampleSvg = await readFile(join(rawAnimatedDir, 'regular', 'acorn.svg'), 'utf8');
  const params = extractAnimationParams(sampleSvg);

  await rm(outIconsDir, { recursive: true, force: true });
  await mkdir(outIconsDir, { recursive: true });

  let processed = 0;
  let skipped = 0;
  for (const { name, pascalName } of manifest) {
    const weightsJsx = {};
    let missing = false;
    for (const weight of WEIGHTS) {
      const svgPath = join(rawAnimatedDir, weight, weightFileName(name, weight));
      try {
        const svg = await readFile(svgPath, 'utf8');
        weightsJsx[weight] = extractAnimatedJsx(svg);
      } catch (err) {
        if (err.code === 'ENOENT') {
          console.warn(`✗ ${name}: missing ${weight} weight at ${svgPath}`);
          missing = true;
          break;
        }
        throw err;
      }
    }
    if (missing) { skipped++; continue; }
    await writeFile(join(outIconsDir, `${pascalName}Icon.tsx`), buildIconModule(pascalName, weightsJsx));
    processed++;
  }

  const files = await readdir(outIconsDir);
  const pascalNames = files
    .filter((f) => f.endsWith('Icon.tsx'))
    .map((f) => f.replace(/Icon\.tsx$/, ''));
  await writeFile(outIndexPath, buildIndex(pascalNames));
  await writeFile(outStylesPath, buildStylesCss(params));

  console.log(`✓ generated ${processed} icon components, skipped ${skipped}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
