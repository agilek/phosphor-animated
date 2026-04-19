# Phosphor Animated CLI Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a zero-dependency Node.js CLI that recursively converts a directory of static Phosphor SVG icons into self-contained animated SVGs with embedded line-draw animation.

**Architecture:** Single-file CLI (`animate.js`) that exports pure functions for testability and runs `main()` only when invoked directly. SVG transformation is regex-based (no XML parser dependency). Node's built-in test runner (`node:test`) is used for tests.

**Tech Stack:** Node.js (>=18, for `node:test` and `fs.cp`), no npm dependencies, `node:test` + `node:assert/strict` for tests.

**Spec:** `docs/superpowers/specs/2026-04-19-phosphor-animated-cli-design.md`

---

## File Structure

- `animate.js` — single-file CLI. Exports `parseDuration`, `parseArgs`, `transformSvg`, `walkSvgs`, `main`. When run directly (`node animate.js ...`), executes `main(process.argv.slice(2))`.
- `package.json` — `type: module`, `test` script, `bin` pointing at `animate.js`.
- `.gitignore` — node_modules, log files, .DS_Store.
- `test/parse-duration.test.js` — unit tests for `parseDuration`.
- `test/parse-args.test.js` — unit tests for `parseArgs`.
- `test/transform-svg.test.js` — unit tests for `transformSvg` (the bulk of the logic).
- `test/walk-svgs.test.js` — unit tests for recursive walker.
- `test/integration.test.js` — end-to-end test driving `main` against a temp directory tree.

Everything lives in `animate.js` to keep the shipped artifact a single file. Tests import named exports.

---

## Task 1: Project scaffold

**Files:**
- Create: `package.json`
- Create: `.gitignore`
- Create: `animate.js` (empty shim so imports don't break in Task 2)

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "phosphor-animated",
  "version": "0.1.0",
  "description": "Convert static Phosphor SVG icons to animated line-draw SVGs.",
  "type": "module",
  "bin": {
    "phosphor-animated": "./animate.js"
  },
  "scripts": {
    "test": "node --test test/"
  },
  "engines": {
    "node": ">=18"
  }
}
```

- [ ] **Step 2: Create `.gitignore`**

```
node_modules/
*.log
.DS_Store
out/
```

- [ ] **Step 3: Create `animate.js` with a shebang and empty export surface**

```js
#!/usr/bin/env node
// Exports are added in later tasks.
export {};
```

- [ ] **Step 4: Make `animate.js` executable**

Run: `chmod +x animate.js`

- [ ] **Step 5: Initialize git and commit**

```bash
git init
git add package.json .gitignore animate.js
git commit -m "chore: project scaffold"
```

---

## Task 2: `parseDuration` helper

Converts a duration string (`"1.5s"`, `"1500ms"`, `"1.5"`) into a seconds number. Used for both `--duration` and `--stagger` so arithmetic (multiplying by index) is possible.

**Files:**
- Create: `test/parse-duration.test.js`
- Modify: `animate.js`

- [ ] **Step 1: Write failing tests**

Create `test/parse-duration.test.js`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseDuration } from '../animate.js';

test('parseDuration: seconds suffix', () => {
  assert.equal(parseDuration('1.5s'), 1.5);
});

test('parseDuration: milliseconds suffix', () => {
  assert.equal(parseDuration('1500ms'), 1.5);
});

test('parseDuration: bare number treated as seconds', () => {
  assert.equal(parseDuration('2'), 2);
});

test('parseDuration: integer seconds', () => {
  assert.equal(parseDuration('1s'), 1);
});

test('parseDuration: whitespace tolerated', () => {
  assert.equal(parseDuration('  0.3s  '), 0.3);
});

test('parseDuration: invalid input throws', () => {
  assert.throws(() => parseDuration('abc'), /invalid duration/i);
});

test('parseDuration: empty string throws', () => {
  assert.throws(() => parseDuration(''), /invalid duration/i);
});
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm test`
Expected: failure (`parseDuration` not exported).

- [ ] **Step 3: Implement `parseDuration` in `animate.js`**

Add to `animate.js` (replacing the `export {};` line):

```js
#!/usr/bin/env node

export function parseDuration(str) {
  const m = String(str).trim().match(/^(\d+(?:\.\d+)?)(ms|s)?$/);
  if (!m) throw new Error(`Invalid duration: ${JSON.stringify(str)}`);
  const n = parseFloat(m[1]);
  return m[2] === 'ms' ? n / 1000 : n;
}
```

- [ ] **Step 4: Run tests — expect pass**

Run: `npm test`
Expected: all `parseDuration` tests pass.

- [ ] **Step 5: Commit**

```bash
git add test/parse-duration.test.js animate.js
git commit -m "feat: parseDuration helper"
```

---

## Task 3: `parseArgs` helper

Parses the CLI argv into `{ inputDir, outputDir, duration, stagger, easing }`. Positional args are input then output; flags are `--duration`, `--stagger`, `--easing`.

**Files:**
- Create: `test/parse-args.test.js`
- Modify: `animate.js`

- [ ] **Step 1: Write failing tests**

Create `test/parse-args.test.js`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseArgs } from '../animate.js';

test('parseArgs: positionals and defaults', () => {
  const a = parseArgs(['in', 'out']);
  assert.equal(a.inputDir, 'in');
  assert.equal(a.outputDir, 'out');
  assert.equal(a.duration, 1.5);
  assert.equal(a.stagger, 0.3);
  assert.equal(a.easing, 'ease-in-out');
});

test('parseArgs: --duration overrides default', () => {
  const a = parseArgs(['in', 'out', '--duration', '2s']);
  assert.equal(a.duration, 2);
});

test('parseArgs: --stagger overrides default', () => {
  const a = parseArgs(['in', 'out', '--stagger', '500ms']);
  assert.equal(a.stagger, 0.5);
});

test('parseArgs: --easing overrides default', () => {
  const a = parseArgs(['in', 'out', '--easing', 'linear']);
  assert.equal(a.easing, 'linear');
});

test('parseArgs: flags can precede positionals', () => {
  const a = parseArgs(['--duration', '3s', 'in', 'out']);
  assert.equal(a.inputDir, 'in');
  assert.equal(a.outputDir, 'out');
  assert.equal(a.duration, 3);
});

test('parseArgs: missing inputDir throws', () => {
  assert.throws(() => parseArgs([]), /inputDir/);
});

test('parseArgs: missing outputDir throws', () => {
  assert.throws(() => parseArgs(['in']), /outputDir/);
});

test('parseArgs: unknown flag throws', () => {
  assert.throws(() => parseArgs(['in', 'out', '--bogus', 'x']), /unknown flag/i);
});
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm test`
Expected: failure (`parseArgs` not exported).

- [ ] **Step 3: Implement `parseArgs`**

Append to `animate.js`:

```js
export function parseArgs(argv) {
  const positional = [];
  const opts = { duration: 1.5, stagger: 0.3, easing: 'ease-in-out' };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--duration') {
      opts.duration = parseDuration(argv[++i]);
    } else if (a === '--stagger') {
      opts.stagger = parseDuration(argv[++i]);
    } else if (a === '--easing') {
      opts.easing = argv[++i];
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
```

- [ ] **Step 4: Run tests — expect pass**

Run: `npm test`
Expected: all `parseArgs` tests pass.

- [ ] **Step 5: Commit**

```bash
git add test/parse-args.test.js animate.js
git commit -m "feat: parseArgs CLI option parser"
```

---

## Task 4: `transformSvg` — minimal happy path

Transforms a single stroke-bearing `<path>` SVG: injects `<style>`, adds `class="draw-line"`, adds `pathLength="1"`, adds `style="animation-delay: 0s"`. Returns `{ output, count }`.

**Files:**
- Create: `test/transform-svg.test.js`
- Modify: `animate.js`

- [ ] **Step 1: Write failing test**

Create `test/transform-svg.test.js`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { transformSvg } from '../animate.js';

const CFG = { duration: 1.5, stagger: 0.3, easing: 'ease-in-out' };

test('transformSvg: single stroke path gets class, pathLength, style', () => {
  const input = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M0,0" fill="none" stroke="currentColor" stroke-width="16"/></svg>`;
  const { output, count } = transformSvg(input, CFG);
  assert.equal(count, 1);
  assert.match(output, /<style>[\s\S]*\.draw-line[\s\S]*@keyframes draw-in[\s\S]*<\/style>/);
  assert.match(output, /class="draw-line"/);
  assert.match(output, /pathLength="1"/);
  assert.match(output, /style="animation-delay: 0s"/);
});

test('transformSvg: style block is inserted right after <svg> opening tag', () => {
  const input = `<svg viewBox="0 0 256 256"><path stroke="red" d="M0,0"/></svg>`;
  const { output } = transformSvg(input, CFG);
  assert.match(output, /<svg viewBox="0 0 256 256">\s*<style>/);
});

test('transformSvg: uses configured duration and easing in style block', () => {
  const input = `<svg viewBox="0 0 256 256"><path stroke="red" d="M0,0"/></svg>`;
  const { output } = transformSvg(input, { duration: 2, stagger: 0.5, easing: 'linear' });
  assert.match(output, /animation: draw-in 2s linear forwards/);
});
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm test`
Expected: failure (`transformSvg` not exported).

- [ ] **Step 3: Implement minimal `transformSvg`**

Append to `animate.js`:

```js
const STROKE_TAGS = ['path', 'polygon', 'polyline', 'line', 'circle', 'rect', 'ellipse'];
const TAG_RE = new RegExp(`<(${STROKE_TAGS.join('|')})\\b[^>]*?/?>`, 'g');

function buildStyleBlock({ duration, easing }) {
  return `
  <style>
    .draw-line {
      stroke-dasharray: 1;
      stroke-dashoffset: 1;
      animation: draw-in ${duration}s ${easing} forwards;
    }
    @keyframes draw-in { to { stroke-dashoffset: 0; } }
  </style>`;
}

function rewriteTag(match, delay) {
  // Split tag into inner attrs + closing (`/>` or `>`)
  const closing = match.endsWith('/>') ? '/>' : '>';
  let inner = match.slice(1, -closing.length); // strip leading '<' and trailing closing
  // inner looks like: `path d="..." stroke="..."`
  const addAttr = (attrs, name, value) => `${attrs} ${name}="${value}"`;
  inner = addAttr(inner, 'class', 'draw-line');
  inner = addAttr(inner, 'pathLength', '1');
  inner = addAttr(inner, 'style', `animation-delay: ${delay}s`);
  return `<${inner}${closing}`;
}

export function transformSvg(input, cfg) {
  const svgOpenMatch = input.match(/<svg\b[^>]*>/);
  if (!svgOpenMatch) throw new Error('No <svg> root');
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
```

Note on delay formatting: `(index * cfg.stagger).toFixed(3).replace(/\.?0+$/, '')` produces clean values like `0`, `0.3`, `0.6`, `1.5` instead of `0.300` or `1.5000000000000002`.

- [ ] **Step 4: Run tests — expect pass**

Run: `npm test`
Expected: new `transformSvg` tests pass.

- [ ] **Step 5: Commit**

```bash
git add test/transform-svg.test.js animate.js
git commit -m "feat: transformSvg minimal happy path"
```

---

## Task 5: `transformSvg` — stagger across multiple elements

Verify `animation-delay` increments by `stagger` seconds per element index, and that non-stroke elements (the background rect) are skipped and don't consume an index.

**Files:**
- Modify: `test/transform-svg.test.js`

- [ ] **Step 1: Add failing tests**

Append to `test/transform-svg.test.js`:

```js
test('transformSvg: multiple stroke elements get staggered delays', () => {
  const input = `<svg viewBox="0 0 256 256">
<path stroke="red" d="M0,0"/>
<path stroke="red" d="M1,1"/>
<polygon stroke="red" points="0,0 1,1 2,2"/>
</svg>`;
  const { output, count } = transformSvg(input, CFG);
  assert.equal(count, 3);
  assert.match(output, /style="animation-delay: 0s"/);
  assert.match(output, /style="animation-delay: 0.3s"/);
  assert.match(output, /style="animation-delay: 0.6s"/);
});

test('transformSvg: background rect without stroke is left alone and does not consume an index', () => {
  const input = `<svg viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path stroke="red" d="M0,0"/></svg>`;
  const { output, count } = transformSvg(input, CFG);
  assert.equal(count, 1);
  // The rect should remain unchanged (no class, no pathLength, no animation-delay)
  assert.match(output, /<rect width="256" height="256" fill="none"\/>/);
  // The path should get delay 0 (not 0.3)
  assert.match(output, /<path class="draw-line" pathLength="1" style="animation-delay: 0s" stroke="red" d="M0,0"\/>/);
});

test('transformSvg: returns count = 0 when no stroke elements present', () => {
  const input = `<svg viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/></svg>`;
  const { output, count } = transformSvg(input, CFG);
  assert.equal(count, 0);
  // Style block still inserted
  assert.match(output, /<style>/);
});
```

- [ ] **Step 2: Run tests**

Run: `npm test`
Expected: all new assertions pass (the core logic already covers these cases — this task is about locking them down with tests).

- [ ] **Step 3: Commit**

```bash
git add test/transform-svg.test.js
git commit -m "test: transformSvg stagger + skip non-stroke elements"
```

---

## Task 6: `transformSvg` — merge existing attributes

When the input element already has `class`, `style`, or `pathLength` attributes, merge rather than overwrite.

**Files:**
- Modify: `test/transform-svg.test.js`
- Modify: `animate.js` (`rewriteTag` function)

- [ ] **Step 1: Add failing tests**

Append to `test/transform-svg.test.js`:

```js
test('transformSvg: existing class attribute gets draw-line appended', () => {
  const input = `<svg viewBox="0 0 256 256"><path class="existing" stroke="red" d="M0,0"/></svg>`;
  const { output } = transformSvg(input, CFG);
  assert.match(output, /class="existing draw-line"/);
  assert.doesNotMatch(output, /class="draw-line"/);
});

test('transformSvg: existing style attribute gets animation-delay appended', () => {
  const input = `<svg viewBox="0 0 256 256"><path style="opacity:0.5" stroke="red" d="M0,0"/></svg>`;
  const { output } = transformSvg(input, CFG);
  assert.match(output, /style="opacity:0\.5; animation-delay: 0s"/);
});

test('transformSvg: existing pathLength is preserved', () => {
  const input = `<svg viewBox="0 0 256 256"><path pathLength="100" stroke="red" d="M0,0"/></svg>`;
  const { output } = transformSvg(input, CFG);
  assert.match(output, /pathLength="100"/);
  assert.doesNotMatch(output, /pathLength="1"/);
});
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm test`
Expected: the three new tests fail (current `rewriteTag` blindly appends regardless of existing attrs).

- [ ] **Step 3: Rewrite `rewriteTag` with attribute-aware merging**

Replace the existing `rewriteTag` function in `animate.js` with:

```js
function mergeAttr(inner, name, value, separator = ' ') {
  const re = new RegExp(`\\b${name}="([^"]*)"`);
  const existing = inner.match(re);
  if (existing) {
    return inner.replace(re, `${name}="${existing[1]}${separator}${value}"`);
  }
  return `${inner} ${name}="${value}"`;
}

function setAttrIfMissing(inner, name, value) {
  const re = new RegExp(`\\b${name}="[^"]*"`);
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
```

- [ ] **Step 4: Run tests — expect pass**

Run: `npm test`
Expected: all `transformSvg` tests pass, including the three new ones.

- [ ] **Step 5: Commit**

```bash
git add test/transform-svg.test.js animate.js
git commit -m "feat: transformSvg merges existing class/style/pathLength attrs"
```

---

## Task 7: `transformSvg` — rejection paths

Throw a specific error when the input already has a `<style>` block, and when there is no `<svg>` root.

**Files:**
- Modify: `test/transform-svg.test.js`
- Modify: `animate.js`

- [ ] **Step 1: Add failing tests**

Append to `test/transform-svg.test.js`:

```js
test('transformSvg: throws when input already has a <style> block', () => {
  const input = `<svg viewBox="0 0 256 256"><style>.x{}</style><path stroke="red" d="M0,0"/></svg>`;
  assert.throws(() => transformSvg(input, CFG), /existing <style>/i);
});

test('transformSvg: throws when input has no <svg> root', () => {
  const input = `<div>not an svg</div>`;
  assert.throws(() => transformSvg(input, CFG), /no <svg> root/i);
});
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm test`
Expected: `<style>` test fails (currently no guard); no-root test already passes.

- [ ] **Step 3: Add `<style>` guard to `transformSvg`**

In `animate.js`, modify `transformSvg` to check for an existing `<style>` element. Replace the function body with:

```js
export function transformSvg(input, cfg) {
  const svgOpenMatch = input.match(/<svg\b[^>]*>/);
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
```

- [ ] **Step 4: Run tests — expect pass**

Run: `npm test`
Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add test/transform-svg.test.js animate.js
git commit -m "feat: transformSvg rejects inputs with existing <style> or no <svg> root"
```

---

## Task 8: `walkSvgs` recursive iterator

Async generator yielding `{ absPath, relPath }` for every `*.svg` file under a root directory, recursively.

**Files:**
- Create: `test/walk-svgs.test.js`
- Modify: `animate.js`

- [ ] **Step 1: Write failing test**

Create `test/walk-svgs.test.js`:

```js
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
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm test`
Expected: failure (`walkSvgs` not exported).

- [ ] **Step 3: Implement `walkSvgs`**

Add imports at the top of `animate.js` (just after the shebang):

```js
import { readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
```

Append `walkSvgs` to `animate.js`:

```js
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
```

- [ ] **Step 4: Run tests — expect pass**

Run: `npm test`
Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add test/walk-svgs.test.js animate.js
git commit -m "feat: walkSvgs recursive async generator"
```

---

## Task 9: `main` + end-to-end integration test

Wire everything together: parse argv, walk input dir, transform each SVG, write to mirrored output path. End-to-end test using a temp directory.

**Files:**
- Create: `test/integration.test.js`
- Modify: `animate.js`

- [ ] **Step 1: Write failing integration test**

Create `test/integration.test.js`:

```js
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
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm test`
Expected: failure (`main` not exported).

- [ ] **Step 3: Implement `main` and the direct-invocation guard**

Add imports at the top of `animate.js` (alongside the existing imports):

```js
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
```

(Consolidate with the existing `node:fs/promises` import — end up with: `import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises';` and `import { join, relative, dirname } from 'node:path';`.)

Append to `animate.js`:

```js
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
```

- [ ] **Step 4: Run tests — expect pass**

Run: `npm test`
Expected: all tests pass (unit + integration).

- [ ] **Step 5: Smoke test the real CLI**

Create a fixture and run the CLI directly:

```bash
mkdir -p /tmp/pa-smoke/in/weather
cat > /tmp/pa-smoke/in/weather/sun.svg <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,40V16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
EOF
node animate.js /tmp/pa-smoke/in /tmp/pa-smoke/out
cat /tmp/pa-smoke/out/weather/sun.svg
```

Expected output contains `<style>`, `class="draw-line"`, `pathLength="1"`, and `style="animation-delay: 0s"`.

- [ ] **Step 6: Commit**

```bash
git add test/integration.test.js animate.js
git commit -m "feat: main() orchestration + end-to-end integration test"
```

---

## Self-review (completed before saving)

**Spec coverage:**
- Recursive walk with mirrored output → Task 8 + Task 9 ✓
- Inject `<style>` block with configurable duration/easing → Task 4 ✓
- Add class, pathLength, animation-delay with index * stagger → Tasks 4–6 ✓
- Skip background rect / any element without `stroke=` → Task 5 ✓
- Merge existing class/style, preserve existing pathLength → Task 6 ✓
- Reject existing `<style>` block → Task 7 ✓
- Reject missing `<svg>` root → Task 7 ✓
- CLI flags `--duration`, `--stagger`, `--easing` with stated defaults → Task 3 ✓
- Ignore non-`.svg` files → Task 8 test + Task 9 test ✓
- Per-file console line `✓`/`✗` → Task 9 ✓
- Single-file shipped artifact + `node:test` only → File structure section ✓

**Placeholder scan:** No TBDs, every step shows real test/implementation code, commands include expected outputs.

**Type consistency:** `parseDuration` returns seconds (number) consistently; `transformSvg` returns `{ output, count }` everywhere; `walkSvgs` yields `{ absPath, relPath }` consistently; `main` returns `{ processed, skipped }` consistently.
