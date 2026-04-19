import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { walkSvgs } from '../animate.js';

async function makeTree() {
  const root = await mkdtemp(join(tmpdir(), 'walk-svgs-'));
  await writeFile(join(root, 'a.svg'), '<svg/>');
  await writeFile(join(root, 'b.txt'), 'not an svg');
  await mkdir(join(root, 'sub', 'nested'), { recursive: true });
  await writeFile(join(root, 'sub', 'c.svg'), '<svg/>');
  await writeFile(join(root, 'sub', 'nested', 'd.svg'), '<svg/>');
  return root;
}

test('walkSvgs: recursively finds all .svg files', async () => {
  const root = await makeTree();
  const found = [];
  for await (const entry of walkSvgs(root)) {
    found.push(entry.relPath);
  }
  found.sort();
  assert.deepEqual(found, [
    'a.svg',
    join('sub', 'c.svg'),
    join('sub', 'nested', 'd.svg'),
  ]);
});

test('walkSvgs: ignores non-svg files', async () => {
  const root = await makeTree();
  for await (const entry of walkSvgs(root)) {
    assert.ok(entry.relPath.endsWith('.svg'));
  }
});
