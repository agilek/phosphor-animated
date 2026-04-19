# React Library, Demo, and Repo Restructure — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the existing CLI as a monorepo with a React component library (`@agilek/phosphor-animated`), CLI package (`@agilek/phosphor-animated-cli`), a Vite+React demo deployed to GitHub Pages, README, license, and CI.

**Architecture:** pnpm workspaces. `packages/cli` owns the existing `animate.js` (with a small update to emit hover-play CSS). `packages/react` has hand-written shared modules (`Icon.tsx`, `IconContext.tsx`, `types.ts`) plus a generator script that produces ~1500 per-icon `.tsx` files from `core-main/raw-animated/` + Phosphor's manifest. `apps/demo` is a Vite React app that consumes the library via workspace protocol. Top-level `pnpm generate` runs CLI and React generator with shared animation params so standalone SVGs and React components stay in sync.

**Tech Stack:** Node.js ≥20, pnpm workspaces, TypeScript, tsup (React library bundler), Vite + React 18 (demo), `@tanstack/react-virtual` (demo grid), `node:test` (generator tests), GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-04-19-react-library-and-demo-design.md`

---

## File Structure (locked in)

```
phosphor-animated/
├── package.json                              # workspace root, top-level scripts
├── pnpm-workspace.yaml
├── pnpm-lock.yaml                            # committed
├── .gitignore                                # updated to ignore node_modules/, dist/
├── LICENSE                                   # MIT
├── NOTICE                                    # Phosphor attribution
├── README.md                                 # user-facing docs
├── DEVLOG.md                                 # exists
├── .github/workflows/ci.yml                  # test + build on PR
├── .github/workflows/deploy-demo.yml         # deploy GH Pages on push to main
├── core-main/                                # vendored Phosphor (existing)
│   ├── raw/                                  # input (existing)
│   ├── raw-animated/                         # regenerated with hover CSS
│   └── src/icons.ts                          # manifest (reused)
├── docs/superpowers/                         # specs + plans (existing)
├── packages/
│   ├── cli/
│   │   ├── animate.js                        # moved from repo root
│   │   ├── package.json                      # name: @agilek/phosphor-animated-cli
│   │   ├── README.md                         # short, points to root
│   │   └── test/                             # moved from repo root
│   │       ├── parse-duration.test.js
│   │       ├── parse-args.test.js
│   │       ├── transform-svg.test.js
│   │       ├── walk-svgs.test.js
│   │       └── integration.test.js
│   └── react/
│       ├── src/
│       │   ├── Icon.tsx                      # internal wrapper (shared)
│       │   ├── IconContext.tsx               # React context
│       │   ├── types.ts                      # IconProps, IconWeight
│       │   ├── styles.css                    # GENERATED
│       │   ├── icons/                        # GENERATED — ~1500 .tsx files
│       │   │   ├── AcornIcon.tsx
│       │   │   └── ...
│       │   └── index.ts                      # GENERATED
│       ├── scripts/
│       │   ├── generate.mjs
│       │   └── test/
│       │       └── generate.test.mjs         # unit tests for generator helpers
│       ├── package.json                      # name: @agilek/phosphor-animated
│       ├── tsup.config.ts
│       └── tsconfig.json
└── apps/
    └── demo/
        ├── src/
        │   ├── main.tsx
        │   ├── App.tsx
        │   ├── IconGrid.tsx
        │   ├── Toolbar.tsx
        │   └── manifest.ts                   # re-exports from core-main/src/icons.ts
        ├── index.html
        ├── package.json                      # name: @agilek/phosphor-animated-demo (private)
        ├── vite.config.ts
        └── tsconfig.json
```

---

## Phase 1: Monorepo restructure

### Task 1: Create pnpm workspace + move CLI into packages/cli

**Files:**
- Create: `pnpm-workspace.yaml`
- Modify: `package.json` (rewrite as workspace root)
- Move: `animate.js` → `packages/cli/animate.js`
- Move: `test/` → `packages/cli/test/`
- Create: `packages/cli/package.json`
- Create: `packages/cli/README.md`
- Modify: `.gitignore`

- [ ] **Step 1: Confirm pnpm is installed**

Run: `pnpm --version`
Expected: a version number (≥8). If missing, install: `npm install -g pnpm`.

- [ ] **Step 2: Create `pnpm-workspace.yaml`**

```yaml
packages:
  - 'packages/*'
  - 'apps/*'
```

- [ ] **Step 3: Rewrite root `package.json`**

```json
{
  "name": "phosphor-animated-monorepo",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "description": "Animated Phosphor icons — CLI, React library, and demo.",
  "scripts": {
    "test": "pnpm -r --if-present test",
    "build": "pnpm --filter @agilek/phosphor-animated build && pnpm --filter @agilek/phosphor-animated-demo build",
    "generate": "node packages/cli/animate.js core-main/raw core-main/raw-animated && node packages/react/scripts/generate.mjs",
    "demo:dev": "pnpm --filter @agilek/phosphor-animated-demo dev"
  },
  "engines": {
    "node": ">=20",
    "pnpm": ">=8"
  }
}
```

- [ ] **Step 4: Move CLI files**

```bash
mkdir -p packages/cli
git mv animate.js packages/cli/animate.js
git mv test packages/cli/test
```

- [ ] **Step 5: Create `packages/cli/package.json`**

```json
{
  "name": "@agilek/phosphor-animated-cli",
  "version": "0.1.0",
  "description": "Convert static SVG icons to animated line-draw SVGs.",
  "type": "module",
  "bin": {
    "phosphor-animated": "./animate.js"
  },
  "scripts": {
    "test": "node --test 'test/**/*.test.js'"
  },
  "files": [
    "animate.js",
    "README.md"
  ],
  "keywords": ["svg", "animation", "line-draw", "phosphor", "icons"],
  "author": "Michał Acler",
  "license": "MIT",
  "engines": {
    "node": ">=20"
  }
}
```

- [ ] **Step 6: Create `packages/cli/README.md`**

```markdown
# @agilek/phosphor-animated-cli

CLI that converts static SVG icons into animated line-draw SVGs. Used to generate the assets shipped by [`@agilek/phosphor-animated`](../react).

## Usage

    npx @agilek/phosphor-animated-cli <inputDir> <outputDir> [--duration 1.5s] [--stagger 0.3s] [--easing ease-in-out]

See the [root README](../../README.md) for full documentation.
```

- [ ] **Step 7: Update root `.gitignore`**

Append these lines to `.gitignore`:

```
node_modules/
dist/
.turbo/
.DS_Store
```

(Keep the existing `core-main/` entry? No — `core-main/raw-animated/` must now be committed. Remove the old `core-main/` line from `.gitignore` if present, and ensure `core-main/raw-animated/` is tracked.)

Check current `.gitignore`: run `cat .gitignore`. The existing file ignores `core-main/` wholesale. Change the relevant block from:

```
core-main/
```

to:

```
core-main/node_modules/
core-main/dist/
```

(This keeps `core-main/raw/` and `core-main/raw-animated/` tracked while excluding their build artifacts if any.)

- [ ] **Step 8: Run `pnpm install`**

Run: `pnpm install`
Expected: creates `node_modules/` symlink tree, writes `pnpm-lock.yaml`. No errors.

- [ ] **Step 9: Verify CLI tests pass in new location**

Run: `pnpm --filter @agilek/phosphor-animated-cli test`
Expected: 35/35 tests pass (same as before).

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "refactor: move CLI into pnpm monorepo under packages/cli"
```

---

## Phase 2: Update CLI to emit hover-play CSS

### Task 2: Change `buildStyleBlock` to hover-triggered animation

**Files:**
- Modify: `packages/cli/animate.js` (function `buildStyleBlock`)
- Modify: `packages/cli/test/transform-svg.test.js` (test assertions)

- [ ] **Step 1: Update existing tests**

The Task 4 test `transformSvg: uses configured duration and easing in style block` currently asserts:

```js
assert.match(output, /animation: draw-in 2s linear forwards/);
```

Update it and add coverage for hover scoping. Replace the test body with:

```js
test('transformSvg: style block uses hover-scoped animation with configured duration and easing', () => {
  const input = `<svg viewBox="0 0 256 256"><path stroke="red" d="M0,0"/></svg>`;
  const { output } = transformSvg(input, { duration: 2, stagger: 0.5, easing: 'linear' });
  assert.match(output, /svg:hover \.draw-line/);
  assert.match(output, /animation: phosphor-draw-in 2s linear forwards/);
  assert.match(output, /@keyframes phosphor-draw-in/);
  assert.match(output, /from \{ stroke-dashoffset: 1; \}/);
  assert.match(output, /to\s*\{ stroke-dashoffset: 0; \}/);
});
```

Find the test at `transformSvg: single stroke path gets class, pathLength, style` and update its style-block assertion. Current:

```js
assert.match(output, /<style>[\s\S]*\.draw-line[\s\S]*@keyframes draw-in[\s\S]*<\/style>/);
```

Replace with:

```js
assert.match(output, /<style>[\s\S]*\.draw-line[\s\S]*svg:hover \.draw-line[\s\S]*@keyframes phosphor-draw-in[\s\S]*<\/style>/);
```

- [ ] **Step 2: Run tests — expect failure**

Run: `pnpm --filter @agilek/phosphor-animated-cli test`
Expected: the two updated tests fail (current CSS uses mount-play, not hover-play).

- [ ] **Step 3: Update `buildStyleBlock` in `packages/cli/animate.js`**

Replace the current `buildStyleBlock` function with:

```js
function buildStyleBlock({ duration, easing }) {
  return `
  <style>
    .draw-line {
      stroke-dasharray: 1;
      stroke-dashoffset: 0;
    }
    svg:hover .draw-line {
      animation: phosphor-draw-in ${duration}s ${easing} forwards;
    }
    @keyframes phosphor-draw-in {
      from { stroke-dashoffset: 1; }
      to { stroke-dashoffset: 0; }
    }
  </style>`;
}
```

- [ ] **Step 4: Run tests — expect pass**

Run: `pnpm --filter @agilek/phosphor-animated-cli test`
Expected: all 35 tests pass (updated assertions + originals).

- [ ] **Step 5: Commit**

```bash
git add packages/cli/animate.js packages/cli/test/transform-svg.test.js
git commit -m "feat(cli): emit hover-triggered animation CSS in style block"
```

### Task 3: Regenerate all 9072 animated SVGs with the new CLI

**Files:**
- Modify: `core-main/raw-animated/` (regenerate all contents)

- [ ] **Step 1: Clear existing raw-animated output**

```bash
rm -rf core-main/raw-animated
```

- [ ] **Step 2: Run the CLI on all icons**

Run: `node packages/cli/animate.js core-main/raw core-main/raw-animated 2>&1 | tail -5`
Expected: last lines show `✓` entries for `thin/` files. No `✗` errors. Total output lines should be 9072.

- [ ] **Step 3: Spot-check one regenerated SVG**

Run: `cat core-main/raw-animated/regular/acorn.svg`
Expected: contains `svg:hover .draw-line`, `animation: phosphor-draw-in 1.5s ease-in-out forwards`, `@keyframes phosphor-draw-in`, and at least one `<path class="draw-line" pathLength="1" ...>`.

- [ ] **Step 4: Verify count**

Run: `find core-main/raw-animated -name '*.svg' | wc -l`
Expected: 9072.

- [ ] **Step 5: Commit**

```bash
git add core-main/raw-animated
git commit -m "chore: regenerate all animated SVGs with hover-play CSS"
```

---

## Phase 3: React library scaffolding (hand-written modules)

### Task 4: Scaffold `packages/react` with tooling configs

**Files:**
- Create: `packages/react/package.json`
- Create: `packages/react/tsconfig.json`
- Create: `packages/react/tsup.config.ts`
- Create: `packages/react/src/index.ts` (placeholder)

- [ ] **Step 1: Create `packages/react/package.json`**

```json
{
  "name": "@agilek/phosphor-animated",
  "version": "0.1.0",
  "description": "Animated Phosphor icons as React components.",
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    },
    "./styles.css": "./dist/styles.css"
  },
  "files": [
    "dist",
    "src"
  ],
  "sideEffects": ["**/*.css"],
  "scripts": {
    "generate": "node scripts/generate.mjs",
    "test": "node --test 'scripts/test/**/*.test.mjs'",
    "build": "tsup",
    "clean": "rm -rf dist"
  },
  "keywords": ["react", "phosphor", "icons", "svg", "animation", "line-draw"],
  "author": "Michał Acler",
  "license": "MIT",
  "peerDependencies": {
    "react": ">=18"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "react": "^18.2.0",
    "tsup": "^8.0.0",
    "typescript": "^5.4.0"
  }
}
```

- [ ] **Step 2: Create `packages/react/tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "lib": ["ES2020", "DOM"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "declaration": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src/**/*"]
}
```

- [ ] **Step 3: Create `packages/react/tsup.config.ts`**

```ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  outExtension: ({ format }) => ({ js: format === 'esm' ? '.mjs' : '.cjs' }),
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react'],
  loader: { '.css': 'copy' },
  injectStyle: false,
});
```

- [ ] **Step 4: Create placeholder `packages/react/src/index.ts`**

```ts
// Generated content will replace this stub.
export {};
```

- [ ] **Step 5: Install workspace deps**

Run: `pnpm install`
Expected: installs `react`, `@types/react`, `tsup`, `typescript` into the workspace.

- [ ] **Step 6: Commit**

```bash
git add packages/react/package.json packages/react/tsconfig.json packages/react/tsup.config.ts packages/react/src/index.ts pnpm-lock.yaml
git commit -m "feat(react): scaffold package with tsup + typescript config"
```

### Task 5: `types.ts` — shared type definitions

**Files:**
- Create: `packages/react/src/types.ts`

- [ ] **Step 1: Create `packages/react/src/types.ts`**

```ts
import type { SVGAttributes } from 'react';

export type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'color'> {
  color?: string;
  size?: number | string;
  weight?: IconWeight;
  mirrored?: boolean;
  alt?: string;
}

export interface IconContextValue {
  color?: string;
  size?: number | string;
  weight?: IconWeight;
  mirrored?: boolean;
}

export const DEFAULT_ICON_PROPS: Required<Pick<IconProps, 'color' | 'size' | 'weight' | 'mirrored'>> = {
  color: 'currentColor',
  size: '1em',
  weight: 'regular',
  mirrored: false,
};
```

- [ ] **Step 2: Commit**

```bash
git add packages/react/src/types.ts
git commit -m "feat(react): IconProps, IconWeight, DEFAULT_ICON_PROPS types"
```

### Task 6: `IconContext.tsx` — React context

**Files:**
- Create: `packages/react/src/IconContext.tsx`

- [ ] **Step 1: Create `packages/react/src/IconContext.tsx`**

```tsx
import { createContext } from 'react';
import type { IconContextValue } from './types';

export const IconContext = createContext<IconContextValue>({});
```

- [ ] **Step 2: Commit**

```bash
git add packages/react/src/IconContext.tsx
git commit -m "feat(react): IconContext provider"
```

### Task 7: `Icon.tsx` — internal shared wrapper

**Files:**
- Create: `packages/react/src/Icon.tsx`

- [ ] **Step 1: Create `packages/react/src/Icon.tsx`**

```tsx
import { forwardRef, useContext, useState, type ReactNode, type MouseEvent } from 'react';
import { IconContext } from './IconContext';
import { DEFAULT_ICON_PROPS, type IconProps, type IconWeight } from './types';

export type IconWeights = Record<IconWeight, ReactNode>;

interface InternalIconProps extends IconProps {
  weights: IconWeights;
}

export const Icon = forwardRef<SVGSVGElement, InternalIconProps>(function Icon(
  { weights, color, size, weight, mirrored, alt, className, style, onMouseEnter, ...rest },
  ref,
) {
  const ctx = useContext(IconContext);
  const resolved = {
    color: color ?? ctx.color ?? DEFAULT_ICON_PROPS.color,
    size: size ?? ctx.size ?? DEFAULT_ICON_PROPS.size,
    weight: weight ?? ctx.weight ?? DEFAULT_ICON_PROPS.weight,
    mirrored: mirrored ?? ctx.mirrored ?? DEFAULT_ICON_PROPS.mirrored,
  };
  const [animKey, setAnimKey] = useState(0);

  const handleMouseEnter = (event: MouseEvent<SVGSVGElement>) => {
    setAnimKey((k) => k + 1);
    onMouseEnter?.(event);
  };

  const mergedClassName = ['phosphor-animated-icon', className].filter(Boolean).join(' ');
  const mergedStyle = {
    ...(resolved.mirrored ? { transform: 'scaleX(-1)' } : {}),
    ...style,
  };

  return (
    <svg
      ref={ref}
      key={animKey}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={resolved.size}
      height={resolved.size}
      fill="none"
      stroke={resolved.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      className={mergedClassName}
      style={mergedStyle}
      role={alt ? 'img' : undefined}
      aria-label={alt}
      onMouseEnter={handleMouseEnter}
      {...rest}
    >
      {weights[resolved.weight]}
    </svg>
  );
});
```

- [ ] **Step 2: Commit**

```bash
git add packages/react/src/Icon.tsx
git commit -m "feat(react): Icon wrapper with hover-remount trick and IconContext defaults"
```

---

## Phase 4: React generator

### Task 8: Generator helper — SVG-to-React element extraction

The generator reads one animated SVG file and converts its animatable elements into JSX-source strings. This task implements the pure helper function and tests it.

**Files:**
- Create: `packages/react/scripts/generate.mjs` (partial: helper + exports)
- Create: `packages/react/scripts/test/generate.test.mjs`

- [ ] **Step 1: Write failing tests**

Create `packages/react/scripts/test/generate.test.mjs`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractAnimatedJsx } from '../generate.mjs';

test('extractAnimatedJsx: extracts a single draw-line path as JSX', () => {
  const svg = `<svg viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path class="draw-line" pathLength="1" style="animation-delay: 0s" d="M0,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
  const jsx = extractAnimatedJsx(svg);
  assert.match(jsx, /<path\s/);
  assert.match(jsx, /className="draw-line"/);
  assert.match(jsx, /pathLength=\{1\}/);
  assert.match(jsx, /style=\{\{animationDelay:"0s"\}\}/);
  assert.match(jsx, /d="M0,0"/);
  // Stripped attrs — hoisted to <svg>:
  assert.doesNotMatch(jsx, /fill=/);
  assert.doesNotMatch(jsx, /stroke=/);
  assert.doesNotMatch(jsx, /stroke-linecap=/);
  assert.doesNotMatch(jsx, /stroke-width=/);
});

test('extractAnimatedJsx: skips elements without class="draw-line"', () => {
  const svg = `<svg viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path class="draw-line" pathLength="1" style="animation-delay: 0s" d="M0,0"/></svg>`;
  const jsx = extractAnimatedJsx(svg);
  assert.doesNotMatch(jsx, /<rect/);
  assert.match(jsx, /<path/);
});

test('extractAnimatedJsx: handles polygon with points attribute', () => {
  const svg = `<svg viewBox="0 0 256 256"><polygon class="draw-line" pathLength="1" style="animation-delay: 0.3s" points="0,0 1,1 2,2" stroke="red"/></svg>`;
  const jsx = extractAnimatedJsx(svg);
  assert.match(jsx, /<polygon\s/);
  assert.match(jsx, /points="0,0 1,1 2,2"/);
  assert.match(jsx, /style=\{\{animationDelay:"0.3s"\}\}/);
});

test('extractAnimatedJsx: returns empty string when no animatable elements', () => {
  const svg = `<svg viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/></svg>`;
  assert.equal(extractAnimatedJsx(svg), '');
});

test('extractAnimatedJsx: preserves multiple elements in source order', () => {
  const svg = `<svg viewBox="0 0 256 256"><path class="draw-line" pathLength="1" style="animation-delay: 0s" d="M0,0"/><path class="draw-line" pathLength="1" style="animation-delay: 0.3s" d="M1,1"/></svg>`;
  const jsx = extractAnimatedJsx(svg);
  const firstIdx = jsx.indexOf('animationDelay:"0s"');
  const secondIdx = jsx.indexOf('animationDelay:"0.3s"');
  assert.ok(firstIdx >= 0 && secondIdx > firstIdx, 'elements should appear in source order');
});
```

- [ ] **Step 2: Run tests — expect failure**

Run: `pnpm --filter @agilek/phosphor-animated test`
Expected: failure (module not found).

- [ ] **Step 3: Implement `extractAnimatedJsx`**

Create `packages/react/scripts/generate.mjs`:

```js
#!/usr/bin/env node

const STROKE_TAGS = ['path', 'polygon', 'polyline', 'line', 'circle', 'rect', 'ellipse'];
const TAG_RE = new RegExp(`<(${STROKE_TAGS.join('|')})\\b[^>]*?/?>`, 'g');

// Attributes to strip — hoisted to root <svg> by Icon.tsx
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
  // SVG attributes that are kebab-case → camelCase in React:
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
```

- [ ] **Step 4: Run tests — expect pass**

Run: `pnpm --filter @agilek/phosphor-animated test`
Expected: all 5 tests pass.

- [ ] **Step 5: Commit**

```bash
git add packages/react/scripts/generate.mjs packages/react/scripts/test/generate.test.mjs
git commit -m "feat(react-gen): extractAnimatedJsx helper with attribute translation"
```

### Task 9: Generator helper — animation params extraction from a sample SVG

**Files:**
- Modify: `packages/react/scripts/generate.mjs`
- Modify: `packages/react/scripts/test/generate.test.mjs`

- [ ] **Step 1: Add failing test**

Append to `packages/react/scripts/test/generate.test.mjs`:

```js
import { extractAnimationParams } from '../generate.mjs';

test('extractAnimationParams: parses duration and easing from hover-play style block', () => {
  const svg = `<svg viewBox="0 0 256 256">
  <style>
    .draw-line { stroke-dasharray: 1; stroke-dashoffset: 0; }
    svg:hover .draw-line {
      animation: phosphor-draw-in 1.5s ease-in-out forwards;
    }
    @keyframes phosphor-draw-in { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
  </style>
  <path class="draw-line" d="M0,0"/>
</svg>`;
  assert.deepEqual(extractAnimationParams(svg), { duration: '1.5s', easing: 'ease-in-out' });
});

test('extractAnimationParams: handles custom duration and easing', () => {
  const svg = `<svg><style>svg:hover .draw-line { animation: phosphor-draw-in 3s linear forwards; }</style></svg>`;
  assert.deepEqual(extractAnimationParams(svg), { duration: '3s', easing: 'linear' });
});

test('extractAnimationParams: throws when not found', () => {
  const svg = `<svg></svg>`;
  assert.throws(() => extractAnimationParams(svg), /animation params not found/i);
});
```

- [ ] **Step 2: Run tests — expect failure**

Run: `pnpm --filter @agilek/phosphor-animated test`

- [ ] **Step 3: Implement `extractAnimationParams`**

Append to `packages/react/scripts/generate.mjs`:

```js
export function extractAnimationParams(svgSource) {
  const m = svgSource.match(/animation:\s*phosphor-draw-in\s+(\S+)\s+(\S+)\s+forwards/);
  if (!m) throw new Error('Animation params not found in SVG source');
  return { duration: m[1], easing: m[2] };
}
```

- [ ] **Step 4: Run tests — expect pass**

Run: `pnpm --filter @agilek/phosphor-animated test`

- [ ] **Step 5: Commit**

```bash
git add packages/react/scripts/generate.mjs packages/react/scripts/test/generate.test.mjs
git commit -m "feat(react-gen): extractAnimationParams helper"
```

### Task 10: Generator — per-icon `.tsx` emission

**Files:**
- Modify: `packages/react/scripts/generate.mjs`

- [ ] **Step 1: Add icon-module template helper**

Append to `packages/react/scripts/generate.mjs`:

```js
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
```

- [ ] **Step 2: Add unit test for the template**

Append to `packages/react/scripts/test/generate.test.mjs`:

```js
import { buildIconModule } from '../generate.mjs';

test('buildIconModule: wraps weights in a component export', () => {
  const out = buildIconModule('Acorn', {
    thin: '<path d="M0,0"/>',
    light: '<path d="M1,1"/>',
    regular: '<path d="M2,2"/>',
    bold: '<path d="M3,3"/>',
    fill: '<path d="M4,4"/>',
    duotone: '<path d="M5,5"/>',
  });
  assert.match(out, /export const AcornIcon = /);
  assert.match(out, /import '\.\.\/styles\.css';/);
  assert.match(out, /regular: <><path d="M2,2"\/><\/>/);
});
```

- [ ] **Step 3: Run tests — expect pass**

Run: `pnpm --filter @agilek/phosphor-animated test`
Expected: all 9 tests pass.

- [ ] **Step 4: Commit**

```bash
git add packages/react/scripts/generate.mjs packages/react/scripts/test/generate.test.mjs
git commit -m "feat(react-gen): buildIconModule template"
```

### Task 11: Generator — `index.ts` and `styles.css` emission helpers

**Files:**
- Modify: `packages/react/scripts/generate.mjs`

- [ ] **Step 1: Add helpers + tests**

Append to `packages/react/scripts/test/generate.test.mjs`:

```js
import { buildIndex, buildStylesCss } from '../generate.mjs';

test('buildIndex: exports all icons and the public API', () => {
  const out = buildIndex(['Acorn', 'AddressBook']);
  assert.match(out, /export \{ IconContext \} from '\.\/IconContext';/);
  assert.match(out, /export type \{ IconProps, IconWeight, IconContextValue \} from '\.\/types';/);
  assert.match(out, /export \{ AcornIcon \} from '\.\/icons\/AcornIcon';/);
  assert.match(out, /export \{ AddressBookIcon \} from '\.\/icons\/AddressBookIcon';/);
});

test('buildStylesCss: substitutes duration and easing', () => {
  const out = buildStylesCss({ duration: '2s', easing: 'linear' });
  assert.match(out, /\.phosphor-animated-icon:hover \.draw-line/);
  assert.match(out, /animation: phosphor-draw-in 2s linear forwards;/);
  assert.match(out, /@keyframes phosphor-draw-in/);
});
```

- [ ] **Step 2: Run tests — expect failure**

Run: `pnpm --filter @agilek/phosphor-animated test`

- [ ] **Step 3: Implement the helpers**

Append to `packages/react/scripts/generate.mjs`:

```js
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
```

- [ ] **Step 4: Run tests — expect pass**

Run: `pnpm --filter @agilek/phosphor-animated test`

- [ ] **Step 5: Commit**

```bash
git add packages/react/scripts/generate.mjs packages/react/scripts/test/generate.test.mjs
git commit -m "feat(react-gen): buildIndex + buildStylesCss helpers"
```

### Task 12: Generator — orchestrator (main)

**Files:**
- Modify: `packages/react/scripts/generate.mjs`

- [ ] **Step 1: Append orchestrator**

Append to `packages/react/scripts/generate.mjs`:

```js
import { readFile, writeFile, mkdir, readdir, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const WEIGHTS = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'];

function weightFileName(name, weight) {
  return weight === 'regular' ? `${name}.svg` : `${name}-${weight}.svg`;
}

async function loadManifest(manifestPath) {
  // icons.ts is a TypeScript file; parse the entries with a regex (no ts-node needed).
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

  // Read animation params from a sample SVG (the regular/acorn.svg is guaranteed to exist).
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
    if (missing) {
      skipped++;
      continue;
    }
    const module = buildIconModule(pascalName, weightsJsx);
    await writeFile(join(outIconsDir, `${pascalName}Icon.tsx`), module);
    processed++;
  }

  const generated = manifest.filter((_, i) => i < processed).map((m) => m.pascalName);
  // ^ This is wrong — processed may have skips. Use the file system as source of truth.
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
```

Note on the `generated` line: it's intentionally overwritten by the `readdir` approach — the real exported names come from the filesystem. Delete that stray `const generated = ...` line; the function should end with the `readdir` → `buildIndex` → `buildStylesCss` flow. The final generator body (after cleanup):

```js
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
```

- [ ] **Step 2: Run the generator**

Run: `pnpm --filter @agilek/phosphor-animated generate`
Expected: console shows `✓ generated <N> icon components, skipped <M>` where N is roughly 1500 and M is 0 (or small). Any warnings about missing weights should be reviewed but are acceptable — those icons are excluded from the library.

- [ ] **Step 3: Spot-check one generated component**

Run: `head -20 packages/react/src/icons/AcornIcon.tsx`
Expected: imports styles.css, imports Icon, defines `WEIGHTS` with 6 weights, exports `AcornIcon`.

- [ ] **Step 4: Spot-check `index.ts` and `styles.css`**

Run: `head -5 packages/react/src/index.ts && echo --- && cat packages/react/src/styles.css`
Expected: `index.ts` has `export { IconContext }`, type exports, and `export { AcornIcon } from './icons/AcornIcon';` and sibling lines. `styles.css` contains `.phosphor-animated-icon:hover .draw-line { animation: phosphor-draw-in 1.5s ease-in-out forwards; }` and `@keyframes`.

- [ ] **Step 5: Commit**

```bash
git add packages/react/scripts/generate.mjs packages/react/src/
git commit -m "feat(react): generate icon components, index, and styles from raw-animated"
```

---

## Phase 5: React library build

### Task 13: Build the library with tsup

**Files:**
- Modify: `packages/react/dist/` (produced by build)

- [ ] **Step 1: Run build**

Run: `pnpm --filter @agilek/phosphor-animated build`
Expected: `packages/react/dist/` contains `index.mjs`, `index.cjs`, `index.d.ts`, `styles.css`. No type errors.

- [ ] **Step 2: Smoke-test the build output**

Create a tiny script `/tmp/smoke-react.mjs`:

```js
import { AcornIcon, IconContext } from '/Volumes/Blackbox/@git/phosphor-animated/packages/react/dist/index.mjs';
console.log(typeof AcornIcon, typeof IconContext);
```

Run: `node /tmp/smoke-react.mjs`
Expected: `function object`.

- [ ] **Step 3: Commit build config changes if any**

If this step only produced `dist/` (which is gitignored), there's nothing to commit. If `package.json` or `tsup.config.ts` were adjusted to make the build pass, commit those:

```bash
git add packages/react
git commit -m "chore(react): build passes" || echo "Nothing to commit"
```

---

## Phase 6: Demo app

### Task 14: Scaffold `apps/demo` with Vite + React

**Files:**
- Create: `apps/demo/package.json`
- Create: `apps/demo/vite.config.ts`
- Create: `apps/demo/tsconfig.json`
- Create: `apps/demo/index.html`
- Create: `apps/demo/src/main.tsx`
- Create: `apps/demo/src/App.tsx`

- [ ] **Step 1: Create `apps/demo/package.json`**

```json
{
  "name": "@agilek/phosphor-animated-demo",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@agilek/phosphor-animated": "workspace:*",
    "@tanstack/react-virtual": "^3.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.4.0",
    "vite": "^5.2.0"
  }
}
```

- [ ] **Step 2: Create `apps/demo/vite.config.ts`**

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/phosphor-animated/' : '/',
});
```

- [ ] **Step 3: Create `apps/demo/tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "lib": ["ES2020", "DOM"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src/**/*"]
}
```

- [ ] **Step 4: Create `apps/demo/index.html`**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Phosphor Animated — Demo</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Create `apps/demo/src/main.tsx`**

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

- [ ] **Step 6: Create `apps/demo/src/App.tsx` (minimal placeholder)**

```tsx
import { AcornIcon } from '@agilek/phosphor-animated';

export const App = () => (
  <div style={{ padding: 24 }}>
    <h1>Phosphor Animated</h1>
    <AcornIcon size={64} />
  </div>
);
```

- [ ] **Step 7: Install workspace deps**

Run: `pnpm install`

- [ ] **Step 8: Smoke-test**

Run: `pnpm demo:dev`
Expected: Vite starts on http://localhost:5173. Open the browser (or curl the page HTML) and confirm an acorn icon renders at 64px. Hovering the icon triggers the draw animation. Stop the dev server.

- [ ] **Step 9: Commit**

```bash
git add apps/demo pnpm-lock.yaml
git commit -m "feat(demo): scaffold Vite React app with minimal Acorn render"
```

### Task 15: Demo — manifest loader and icon registry

**Files:**
- Create: `apps/demo/src/manifest.ts`

- [ ] **Step 1: Implement manifest.ts**

Create `apps/demo/src/manifest.ts`:

```ts
import * as icons from '@agilek/phosphor-animated';
import type { ComponentType } from 'react';
import type { IconProps } from '@agilek/phosphor-animated';
import rawManifest from '../../../core-main/src/icons.ts';

export type IconEntry = {
  name: string;
  pascalName: string;
  tags: string[];
  categories: string[];
  component: ComponentType<IconProps>;
};

// Phosphor's icons.ts exports `icons` as a readonly array of objects.
const manifest: IconEntry[] = (rawManifest.icons as readonly any[]).flatMap((entry) => {
  const componentName = `${entry.pascal_name}Icon`;
  const component = (icons as Record<string, ComponentType<IconProps>>)[componentName];
  if (!component) return []; // skip icons whose component wasn't generated
  return [
    {
      name: entry.name,
      pascalName: entry.pascal_name,
      tags: entry.tags ?? [],
      categories: entry.categories ?? [],
      component,
    },
  ];
});

export const ICONS = manifest;
```

Note: `rawManifest` comes from the Phosphor `icons.ts` which uses `export const icons = ...`. Vite + `@vitejs/plugin-react` does NOT handle ts imports from outside the project root by default. To load the manifest, we instead parse it at build time via a small Vite virtual module. Alternative simpler approach: copy the manifest into the demo at install time.

Simpler approach (use this): add a `prebuild` / `predev` step that copies the manifest. Update `apps/demo/package.json` scripts:

```json
"dev": "node scripts/copy-manifest.mjs && vite",
"build": "node scripts/copy-manifest.mjs && tsc --noEmit && vite build",
```

And create `apps/demo/scripts/copy-manifest.mjs`:

```js
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, '..', '..', '..', 'core-main', 'src', 'icons.ts');
const dst = join(here, '..', 'src', 'icons-manifest.ts');

const body = await readFile(src, 'utf8');
// Strip the import of IconCategory/FigmaCategory enums (not needed in demo) and re-export.
// The demo only needs { name, pascal_name, tags } per icon. Use a regex-based extractor.
const itemRe = /\{\s*name:\s*"([^"]+)",\s*pascal_name:\s*"([^"]+)",[\s\S]*?tags:\s*\[([\s\S]*?)\][\s\S]*?\}/g;
const items = [];
let m;
while ((m = itemRe.exec(body)) !== null) {
  const tagArray = m[3]
    .split(',')
    .map((t) => t.trim().replace(/^"|"$/g, ''))
    .filter(Boolean);
  items.push(`  { name: "${m[1]}", pascal_name: "${m[2]}", tags: ${JSON.stringify(tagArray)} }`);
}

const out = `// AUTO-GENERATED from core-main/src/icons.ts by scripts/copy-manifest.mjs. Do not edit.
export const icons = [
${items.join(',\n')}
];
`;
await writeFile(dst, out);
console.log(`✓ wrote ${items.length} icons to ${dst}`);
```

Update `manifest.ts` to import from the generated local file:

```ts
import * as icons from '@agilek/phosphor-animated';
import type { ComponentType } from 'react';
import type { IconProps } from '@agilek/phosphor-animated';
import { icons as rawIcons } from './icons-manifest';

export type IconEntry = {
  name: string;
  pascalName: string;
  tags: string[];
  component: ComponentType<IconProps>;
};

const manifest: IconEntry[] = rawIcons.flatMap((entry) => {
  const componentName = `${entry.pascal_name}Icon`;
  const component = (icons as Record<string, ComponentType<IconProps>>)[componentName];
  if (!component) return [];
  return [{ name: entry.name, pascalName: entry.pascal_name, tags: entry.tags, component }];
});

export const ICONS = manifest;
```

- [ ] **Step 2: Run predev step + smoke-test**

Run: `pnpm --filter @agilek/phosphor-animated-demo dev &` (background)
Wait ~2 seconds, then curl: `curl -s http://localhost:5173 > /dev/null && echo ok`
Then kill the background dev server.

Expected: no errors, `ok` printed.

- [ ] **Step 3: Commit**

```bash
git add apps/demo/package.json apps/demo/scripts apps/demo/src/manifest.ts apps/demo/src/icons-manifest.ts
git commit -m "feat(demo): manifest loader with copy-manifest prebuild step"
```

### Task 16: Demo — Toolbar component (search, weight, color picker)

**Files:**
- Create: `apps/demo/src/Toolbar.tsx`

- [ ] **Step 1: Create Toolbar.tsx**

```tsx
import type { IconWeight } from '@agilek/phosphor-animated';

const WEIGHTS: IconWeight[] = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'];

interface ToolbarProps {
  query: string;
  onQueryChange: (q: string) => void;
  weight: IconWeight;
  onWeightChange: (w: IconWeight) => void;
  color: string;
  onColorChange: (c: string) => void;
}

export const Toolbar = ({ query, onQueryChange, weight, onWeightChange, color, onColorChange }: ToolbarProps) => (
  <div style={{
    position: 'sticky', top: 0, zIndex: 10, background: '#fff', padding: 16,
    borderBottom: '1px solid #eee', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap',
  }}>
    <input
      type="search"
      placeholder="Search icons…"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      style={{ padding: 8, fontSize: 14, minWidth: 240 }}
    />
    <div style={{ display: 'flex', gap: 4 }}>
      {WEIGHTS.map((w) => (
        <button
          key={w}
          onClick={() => onWeightChange(w)}
          style={{
            padding: '6px 12px',
            background: w === weight ? '#333' : '#f5f5f5',
            color: w === weight ? '#fff' : '#333',
            border: '1px solid #ddd', borderRadius: 4, cursor: 'pointer',
          }}
        >
          {w}
        </button>
      ))}
    </div>
    <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      Color
      <input type="color" value={color} onChange={(e) => onColorChange(e.target.value)} />
    </label>
  </div>
);
```

- [ ] **Step 2: Commit**

```bash
git add apps/demo/src/Toolbar.tsx
git commit -m "feat(demo): Toolbar with search, weight toggle, color picker"
```

### Task 17: Demo — IconGrid with virtualization

**Files:**
- Create: `apps/demo/src/IconGrid.tsx`

- [ ] **Step 1: Create IconGrid.tsx**

```tsx
import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import type { IconWeight } from '@agilek/phosphor-animated';
import type { IconEntry } from './manifest';

const COLS = 8;
const ROW_HEIGHT = 96;
const ICON_SIZE = 48;

interface IconGridProps {
  icons: IconEntry[];
  weight: IconWeight;
  color: string;
  onCopy: (pascalName: string) => void;
}

export const IconGrid = ({ icons, weight, color, onCopy }: IconGridProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const rowCount = Math.ceil(icons.length / COLS);
  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 4,
  });

  return (
    <div ref={parentRef} style={{ height: 'calc(100vh - 120px)', overflow: 'auto', color }}>
      <div style={{ height: rowVirtualizer.getTotalSize(), position: 'relative' }}>
        {rowVirtualizer.getVirtualItems().map((vRow) => {
          const rowStart = vRow.index * COLS;
          const rowIcons = icons.slice(rowStart, rowStart + COLS);
          return (
            <div
              key={vRow.key}
              style={{
                position: 'absolute', top: 0, left: 0, width: '100%',
                transform: `translateY(${vRow.start}px)`,
                display: 'grid', gridTemplateColumns: `repeat(${COLS}, 1fr)`, gap: 8,
                padding: '0 16px',
              }}
            >
              {rowIcons.map(({ name, pascalName, component: Icon }) => (
                <button
                  key={name}
                  onClick={() => onCopy(pascalName)}
                  title={name}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    gap: 4, padding: 8, background: 'transparent', border: '1px solid transparent',
                    cursor: 'pointer', color: 'inherit',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ddd'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; }}
                >
                  <Icon weight={weight} size={ICON_SIZE} />
                  <span style={{ fontSize: 11, color: '#666', textAlign: 'center', lineHeight: 1.2 }}>{name}</span>
                </button>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
```

- [ ] **Step 2: Commit**

```bash
git add apps/demo/src/IconGrid.tsx
git commit -m "feat(demo): virtualized IconGrid with click-to-copy"
```

### Task 18: Demo — wire App together

**Files:**
- Modify: `apps/demo/src/App.tsx`

- [ ] **Step 1: Replace App.tsx**

```tsx
import { useMemo, useState } from 'react';
import type { IconWeight } from '@agilek/phosphor-animated';
import { ICONS } from './manifest';
import { Toolbar } from './Toolbar';
import { IconGrid } from './IconGrid';

export const App = () => {
  const [query, setQuery] = useState('');
  const [weight, setWeight] = useState<IconWeight>('regular');
  const [color, setColor] = useState('#222222');
  const [toast, setToast] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ICONS;
    return ICONS.filter(
      (i) => i.name.includes(q) || i.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }, [query]);

  const handleCopy = async (pascalName: string) => {
    const snippet = `import { ${pascalName}Icon } from '@agilek/phosphor-animated';`;
    try {
      await navigator.clipboard.writeText(snippet);
      setToast(`Copied: ${pascalName}Icon`);
      setTimeout(() => setToast(null), 1500);
    } catch {
      setToast('Copy failed');
      setTimeout(() => setToast(null), 1500);
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <Toolbar
        query={query} onQueryChange={setQuery}
        weight={weight} onWeightChange={setWeight}
        color={color} onColorChange={setColor}
      />
      <div style={{ padding: '8px 16px', fontSize: 12, color: '#888' }}>
        {filtered.length} of {ICONS.length} icons
      </div>
      <IconGrid icons={filtered} weight={weight} color={color} onCopy={handleCopy} />
      {toast && (
        <div style={{
          position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          background: '#222', color: '#fff', padding: '10px 16px', borderRadius: 4,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)', fontSize: 14,
        }}>
          {toast}
        </div>
      )}
    </div>
  );
};
```

- [ ] **Step 2: Dev test**

Run: `pnpm demo:dev` (foreground), visit http://localhost:5173 in a browser. Verify:
1. All ~1500 icons render in a virtualized grid
2. Search filters (e.g., "heart" narrows to heart variants)
3. Weight buttons change the rendered weight across the grid
4. Color picker updates the stroke color of all icons live
5. Hovering an icon triggers the draw animation
6. Clicking an icon copies the import statement and shows a toast

Stop the dev server.

- [ ] **Step 3: Commit**

```bash
git add apps/demo/src/App.tsx
git commit -m "feat(demo): search + weight toggle + color picker wired up"
```

---

## Phase 7: Docs, licensing, CI

### Task 19: README, LICENSE, NOTICE

**Files:**
- Create: `README.md` (replaces / re-writes current)
- Create: `LICENSE`
- Create: `NOTICE`

- [ ] **Step 1: Create root `README.md`**

```markdown
# Phosphor Animated

Animated line-draw versions of [Phosphor Icons](https://phosphoricons.com). Ships as a React component library, a CLI for regenerating icons with custom animation settings, and a live demo.

**[Live demo →](https://agilek.github.io/phosphor-animated/)**

## Install

```bash
npm install @agilek/phosphor-animated
```

## Use (React)

```tsx
import { AcornIcon, HeartIcon, IconContext } from '@agilek/phosphor-animated';

<AcornIcon />                                              // defaults
<HeartIcon weight="bold" size={48} color="#e74c3c" />       // props
<IconContext.Provider value={{ weight: 'duotone', size: 32 }}>
  <AcornIcon />                                            // inherits context
</IconContext.Provider>
```

Icons draw themselves when you hover. Props match [`@phosphor-icons/react`](https://github.com/phosphor-icons/react):

| Prop       | Type                                                                | Default         |
|------------|---------------------------------------------------------------------|-----------------|
| `color`    | `string`                                                            | `'currentColor'`|
| `size`     | `number \| string`                                                  | `'1em'`         |
| `weight`   | `'thin' \| 'light' \| 'regular' \| 'bold' \| 'fill' \| 'duotone'`    | `'regular'`     |
| `mirrored` | `boolean`                                                           | `false`         |
| `alt`      | `string`                                                            | —               |

Any other `SVGAttributes<SVGSVGElement>` (className, style, onClick, etc.) are forwarded.

## Use the raw SVGs

Pre-generated animated SVGs live in [`core-main/raw-animated/`](./core-main/raw-animated). Copy any you need.

**Note:** Hover-triggered animations only work when the SVG is inlined in the page (HTML, framework template, SVG loader). `<img src="acorn.svg">` isolates the SVG and hover doesn't propagate inside.

## Customize animation settings

Clone the repo, regenerate SVGs + React components with your preferred values, rebuild:

```bash
git clone https://github.com/agilek/phosphor-animated.git
cd phosphor-animated
pnpm install
pnpm generate -- --duration 3s --stagger 0.5s --easing linear
pnpm build
```

Then point your project's `package.json` at the local build:

```json
{ "dependencies": { "@agilek/phosphor-animated": "file:../path/to/phosphor-animated/packages/react" } }
```

## CLI

The underlying animation-injection CLI is published separately:

```bash
npx @agilek/phosphor-animated-cli <inputDir> <outputDir> [--duration 1.5s] [--stagger 0.3s] [--easing ease-in-out]
```

See [`packages/cli/README.md`](./packages/cli/README.md).

## Credits

Built on top of [Phosphor Icons](https://github.com/phosphor-icons/core) by Phosphor Icons Team, MIT-licensed. The `core-main/` directory contains an unmodified snapshot of their icon source. See [`NOTICE`](./NOTICE).

## License

MIT © Michał Acler — see [`LICENSE`](./LICENSE).
```

- [ ] **Step 2: Create `LICENSE`**

Use the standard MIT license text with your name and the current year:

```
MIT License

Copyright (c) 2026 Michał Acler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

- [ ] **Step 3: Create `NOTICE`**

```
Phosphor Animated
Copyright (c) 2026 Michał Acler

This product includes artwork and icon metadata derived from the Phosphor
Icons project (https://github.com/phosphor-icons/core), Copyright (c) Phosphor
Icons Team, MIT-licensed.

The directory core-main/ contains an unmodified snapshot of Phosphor's source
(icons.ts, raw/). The generated assets in core-main/raw-animated/ and the
React components in packages/react/src/icons/ are derivative works under MIT.

Upstream project: https://github.com/phosphor-icons/core
Upstream license: https://github.com/phosphor-icons/core/blob/main/LICENSE
```

- [ ] **Step 4: Commit**

```bash
git add README.md LICENSE NOTICE
git commit -m "docs: README, LICENSE (MIT), NOTICE (Phosphor attribution)"
```

### Task 20: CI workflow

**Files:**
- Create: `.github/workflows/ci.yml`

- [ ] **Step 1: Create `.github/workflows/ci.yml`**

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm -r --if-present test
      - run: pnpm build
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/ci.yml
git commit -m "ci: test + build on PR and push to main"
```

### Task 21: GitHub Pages deploy workflow

**Files:**
- Create: `.github/workflows/deploy-demo.yml`

- [ ] **Step 1: Create `.github/workflows/deploy-demo.yml`**

```yaml
name: Deploy demo

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      GITHUB_PAGES: 'true'
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm --filter @agilek/phosphor-animated build
      - run: pnpm --filter @agilek/phosphor-animated-demo build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: apps/demo/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/deploy-demo.yml
git commit -m "ci: GitHub Pages deploy workflow for demo"
```

### Task 22: Final verification — full-stack smoke test

- [ ] **Step 1: Clean and reinstall**

```bash
rm -rf node_modules packages/*/node_modules apps/*/node_modules packages/*/dist
pnpm install --frozen-lockfile
```

- [ ] **Step 2: Run all tests**

Run: `pnpm -r --if-present test`
Expected: CLI tests (35) and React generator tests (11) all pass.

- [ ] **Step 3: Run full generator chain**

Run: `pnpm generate`
Expected: regenerates `core-main/raw-animated/` (9072 SVGs) + `packages/react/src/icons/` (~1500 .tsx) + index + styles.css. Final console line shows success counts.

- [ ] **Step 4: Build everything**

Run: `pnpm build`
Expected: `packages/react/dist/` populated, `apps/demo/dist/` populated. No errors.

- [ ] **Step 5: Preview the built demo**

Run: `pnpm --filter @agilek/phosphor-animated-demo preview` (foreground), open the served URL, verify:
- Grid renders
- Search works
- Weight toggle works
- Color picker works
- Hover animation plays
- Click-to-copy works

Stop the server.

- [ ] **Step 6: Final commit (only if anything changed)**

```bash
git status
# If any uncommitted changes, commit them:
git add -A
git commit -m "chore: final verification" || echo "Nothing to commit"
```

---

## Self-Review

**Spec coverage:**
- Monorepo with pnpm workspaces → Task 1 ✓
- CLI moved to packages/cli → Task 1 ✓
- CLI hover-play CSS → Task 2, 3 ✓
- Commit regenerated SVGs → Task 3 ✓
- React library `@agilek/phosphor-animated` → Tasks 4–12 ✓
- IconContext, IconProps matching phosphor-icons/react → Tasks 5, 6, 7 ✓
- Hover-replay via key remount → Task 7 ✓
- Side-effect CSS import in icon modules → Task 10 ✓
- Per-icon components generated from raw-animated + manifest → Tasks 8, 10, 12 ✓
- Shared styles.css emission → Task 11 ✓
- tsup build to ESM + CJS + types → Task 13 ✓
- Vite + React demo → Tasks 14–18 ✓
- Search by name + tags → Task 18 ✓
- Weight toggle → Task 18 ✓
- Color picker → Task 18 ✓
- Click-to-copy import statement → Task 18 ✓
- Virtualized grid → Task 17 ✓
- Root `pnpm generate` / `pnpm build` orchestration → Task 1 ✓
- README / LICENSE / NOTICE → Task 19 ✓
- CI workflow → Task 20 ✓
- GH Pages deploy → Task 21 ✓
- Full-stack smoke test → Task 22 ✓

**Placeholder scan:** No TBD/TODO/incomplete. Every code block is self-contained. One potential gap: the Task 12 plan shows a scratch `const generated = ...` line that the cleaned-up version explicitly removes — implementer should use the cleaned-up body.

**Type consistency:** `IconProps`, `IconWeight`, `IconContextValue` defined in Task 5 and used consistently in Tasks 6–12. Generator helpers (`extractAnimatedJsx`, `extractAnimationParams`, `buildIconModule`, `buildIndex`, `buildStylesCss`) are introduced in Tasks 8–11 and consumed in Task 12 with matching signatures. Component naming (`<PascalName>Icon`) is used consistently in Tasks 10, 11, 12, 15, 18.
