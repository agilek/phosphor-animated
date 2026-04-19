#!/usr/bin/env node

const STROKE_TAGS = ['path', 'polygon', 'polyline', 'line', 'circle', 'rect', 'ellipse'];
const TAG_RE = new RegExp(`<(${STROKE_TAGS.join('|')})\\b[^>]*?/?>`, 'g');

const STRIP_ATTRS = new Set([
  'fill',
  'stroke',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-width',
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
  if (!/class="draw-line"/.test(match)) return null;
  const closing = match.endsWith('/>') ? '/>' : '>';
  const tagMatch = match.match(/^<([a-z]+)\b/);
  if (!tagMatch) return null;
  const tagName = tagMatch[1];
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
  const m = svgSource.match(/animation:\s*phosphor-draw-in\s+(\S+)\s+(\S+)\s+forwards/);
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
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
}
.phosphor-animated-icon:hover .draw-line {
  animation: phosphor-draw-in ${duration} ${easing} forwards;
}
@keyframes phosphor-draw-in {
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
}
`;
}
