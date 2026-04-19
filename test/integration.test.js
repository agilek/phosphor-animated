import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { main } from '../animate.js';

test('main: processes nested directory, mirrors structure, writes animated SVGs', async () => {
  const root = await mkdtemp(join(tmpdir(), 'animate-e2e-'));
  const inDir = join(root, 'in');
  const outDir = join(root, 'out');
  await mkdir(join(inDir, 'weather'), { recursive: true });
  await writeFile(
    join(inDir, 'star.svg'),
    `<svg viewBox="0 0 256 256"><path stroke="currentColor" d="M0,0"/></svg>`,
  );
  await writeFile(
    join(inDir, 'weather', 'sun.svg'),
    `<svg viewBox="0 0 256 256"><path stroke="currentColor" d="M1,1"/><path stroke="currentColor" d="M2,2"/></svg>`,
  );
  await writeFile(join(inDir, 'readme.txt'), 'ignored');

  const summary = await main([inDir, outDir]);
  assert.equal(summary.processed, 2);
  assert.equal(summary.skipped, 0);

  const star = await readFile(join(outDir, 'star.svg'), 'utf8');
  assert.match(star, /<style>/);
  assert.match(star, /class="draw-line"/);
  assert.match(star, /style="animation-delay: 0s"/);

  const sun = await readFile(join(outDir, 'weather', 'sun.svg'), 'utf8');
  assert.match(sun, /style="animation-delay: 0s"/);
  assert.match(sun, /style="animation-delay: 0.3s"/);
});

test('main: skips files with existing <style> block', async () => {
  const root = await mkdtemp(join(tmpdir(), 'animate-e2e-'));
  const inDir = join(root, 'in');
  const outDir = join(root, 'out');
  await mkdir(inDir, { recursive: true });
  await writeFile(
    join(inDir, 'good.svg'),
    `<svg viewBox="0 0 256 256"><path stroke="red" d="M0,0"/></svg>`,
  );
  await writeFile(
    join(inDir, 'bad.svg'),
    `<svg viewBox="0 0 256 256"><style>.x{}</style><path stroke="red" d="M0,0"/></svg>`,
  );

  const summary = await main([inDir, outDir]);
  assert.equal(summary.processed, 1);
  assert.equal(summary.skipped, 1);
});
