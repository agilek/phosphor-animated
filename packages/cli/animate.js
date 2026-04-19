#!/usr/bin/env node

import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';

export function parseDuration(str) {
  const m = String(str).trim().match(/^(\d+(?:\.\d+)?)(ms|s)?$/);
  if (!m) throw new Error(`Invalid duration: ${JSON.stringify(str)}`);
  const n = parseFloat(m[1]);
  return m[2] === 'ms' ? n / 1000 : n;
}

export function parseArgs(argv) {
  const positional = [];
  const opts = { duration: 1.5, stagger: 0.3, easing: 'ease-in-out' };
  for (let i = 0; i < argv.length; i++) {
    const takeValue = (flag) => {
      if (i + 1 >= argv.length) throw new Error(`Missing value for ${flag}`);
      return argv[++i];
    };
    const a = argv[i];
    if (a === '--duration') {
      opts.duration = parseDuration(takeValue(a));
    } else if (a === '--stagger') {
      opts.stagger = parseDuration(takeValue(a));
    } else if (a === '--easing') {
      opts.easing = takeValue(a);
    } else if (a.startsWith('--')) {
      throw new Error(`Unknown flag: ${a}`);
    } else {
      positional.push(a);
    }
  }
  if (positional.length < 1) throw new Error('Missing inputDir');
  if (positional.length < 2) throw new Error('Missing outputDir');
  return {
    inputDir: positional[0],
    outputDir: positional[1],
    ...opts,
  };
}

const STROKE_TAGS = ['path', 'polygon', 'polyline', 'line', 'circle', 'rect', 'ellipse'];
const TAG_RE = new RegExp(`<(${STROKE_TAGS.join('|')})\\b[^>]*?/?>`, 'g');

function buildStyleBlock({ duration, easing }) {
  return `
  <style>
    .draw-line {
      stroke-dasharray: 2000;
      stroke-dashoffset: 0;
    }
    svg:hover .draw-line {
      animation: phosphor-draw-in ${duration}s ${easing} infinite;
    }
    @keyframes phosphor-draw-in {
      0%   { stroke-dashoffset: 2000; }
      100% { stroke-dashoffset: 0; }
    }
  </style>`;
}

function mergeAttr(inner, name, value, separator = ' ') {
  const re = new RegExp(`(?<![\\w-])${name}="([^"]*)"`);
  const existing = inner.match(re);
  if (existing) {
    return inner.replace(re, `${name}="${existing[1]}${separator}${value}"`);
  }
  return `${inner} ${name}="${value}"`;
}

function setAttrIfMissing(inner, name, value) {
  const re = new RegExp(`(?<![\\w-])${name}="[^"]*"`);
  if (re.test(inner)) return inner;
  return `${inner} ${name}="${value}"`;
}

function rewriteTag(match, delay) {
  const closing = match.endsWith('/>') ? '/>' : '>';
  let inner = match.slice(1, -closing.length);
  inner = mergeAttr(inner, 'class', 'draw-line', ' ');
  inner = setAttrIfMissing(inner, 'pathLength', '1');
  inner = mergeAttr(inner, 'style', `animation-delay: ${delay}s`, '; ');
  return `<${inner}${closing}`;
}

export function transformSvg(input, cfg) {
  const svgOpenMatch = input.match(/<svg\b[^>]*(?<!\/)>/);
  if (!svgOpenMatch) throw new Error('No <svg> root');
  if (/<style\b/i.test(input)) throw new Error('Existing <style> block — refusing to clobber');
  let index = 0;
  const rewritten = input.replace(TAG_RE, (match) => {
    if (!/\bstroke=/.test(match)) return match;
    const out = rewriteTag(match, (index * cfg.stagger).toFixed(3).replace(/\.?0+$/, ''));
    index++;
    return out;
  });
  const insertAt = svgOpenMatch.index + svgOpenMatch[0].length;
  const output =
    rewritten.slice(0, insertAt) + buildStyleBlock(cfg) + rewritten.slice(insertAt);
  return { output, count: index };
}

export async function* walkSvgs(root, current = root) {
  const entries = await readdir(current, { withFileTypes: true });
  for (const entry of entries) {
    const absPath = join(current, entry.name);
    if (entry.isDirectory()) {
      yield* walkSvgs(root, absPath);
    } else if (entry.isFile() && entry.name.endsWith('.svg')) {
      yield { absPath, relPath: relative(root, absPath) };
    }
  }
}

export async function main(argv) {
  const cfg = parseArgs(argv);
  try {
    const s = await stat(cfg.inputDir);
    if (!s.isDirectory()) throw new Error(`Not a directory: ${cfg.inputDir}`);
  } catch (err) {
    if (err.code === 'ENOENT') throw new Error(`Input directory not found: ${cfg.inputDir}`);
    throw err;
  }
  await mkdir(cfg.outputDir, { recursive: true });

  let processed = 0;
  let skipped = 0;
  for await (const { absPath, relPath } of walkSvgs(cfg.inputDir)) {
    const outPath = join(cfg.outputDir, relPath);
    try {
      const input = await readFile(absPath, 'utf8');
      const { output, count } = transformSvg(input, cfg);
      await mkdir(dirname(outPath), { recursive: true });
      await writeFile(outPath, output);
      console.log(`✓ ${relPath} (${count} elements animated)`);
      processed++;
    } catch (err) {
      console.log(`✗ ${relPath} (${err.message})`);
      skipped++;
    }
  }
  return { processed, skipped };
}

// Run main() only when this file is invoked directly (not when imported by tests).
if (import.meta.url === `file://${process.argv[1]}`) {
  main(process.argv.slice(2)).catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
