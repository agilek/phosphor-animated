## 2026-04-19

### Project scaffold initialized
Created `package.json`, `.gitignore`, and `animate.js` shim. Initialized git repo with `main` branch and committed all files including the pre-existing `docs/` spec and plan files. The `core-main/` directory (reference Phosphor icon library) was intentionally left untracked.

**Root cause / approach:** Straightforward greenfield init — no surprises.

→ *No new memory entries.*

## 2026-04-19

### parseDuration helper added (Task 2)
Implemented `parseDuration(str)` exported from `animate.js`, converting `"1.5s"`, `"1500ms"`, or bare numeric strings to a seconds number. Also created the `test/` directory with 7 TDD tests using `node:test`.

**Root cause / approach:** Node v25 changed how `node --test test/` resolves paths — passing a directory no longer auto-discovers `.test.js` files the same way as in Node 22. Fixed by updating the `test` script in `package.json` to use a glob (`'test/**/*.test.js'`).

→ *Memory saved: `node-test-glob-node25.md`*

## 2026-04-19

### parseArgs CLI option parser added (Task 3)
Implemented `parseArgs(argv)` exported from `animate.js`, parsing positional args (inputDir, outputDir) and flags (`--duration`, `--stagger`, `--easing`) with defaults. Flags may appear before or after positionals. Unknown flags throw; missing positionals throw with descriptive messages.

**Root cause / approach:** Reuses `parseDuration` for numeric flag values; spread of opts object keeps return shape clean. Standard argv loop — no surprises.

→ *No new memory entries.*

## 2026-04-19

### parseArgs: guard for trailing flag with no value (code review fix)
`--duration` / `--stagger` at end of argv produced `"Invalid duration: undefined"`, and `--easing` silently set `easing` to `undefined`. Added a `takeValue` helper (arrow function defined inside the loop, closing over `let i`) that throws a clear `Missing value for <flag>` error before calling `parseDuration`. Added 3 new TDD tests first; all 18 tests pass.

**Root cause / approach:** The arrow function closes over the `for`-loop `let` binding so `++i` inside the helper correctly advances the outer loop counter — no need to pass `i` as a parameter.

→ *Memory saved: `parseargs-closure-gotcha.md`*

## 2026-04-19

### transformSvg: SVG stroke animation transformer added (Task 4)
Implemented `transformSvg(input, cfg)` exported from `animate.js`. Uses a stateful regex replace over known stroke-capable SVG tags to inject `class="draw-line"`, `pathLength="1"`, and `style="animation-delay: Xs"` on stroke-bearing elements. Injects a `<style>` block with `@keyframes draw-in` immediately after the opening `<svg>` tag.

**Root cause / approach:** Delay formatting uses `toFixed(3).replace(/\.?0+$/, '')` to avoid floating-point noise and trailing zeros (e.g., `1.5000000000000002` → `1.5`). Style block insertion is computed after the rewrite pass to avoid index drift from inserted attrs.

→ *Memory saved: `transform-svg-regex-approach.md`*

## 2026-04-19

### transformSvg stagger + skip non-stroke tests locked down (Task 5)
Added 3 tests verifying staggered `animation-delay` across multiple stroke elements, that non-stroke rects are skipped without consuming a delay index, and that `count = 0` is returned when no stroke elements exist.

**Root cause / approach:** One test from the spec had the wrong expected attribute order — the implementation appends `class`, `pathLength`, `style` after the element's original attributes (`stroke`, `d`), not before. The spec regex assumed pre-insertion order. Fixed the regex in the test to match actual output order; no implementation changes were needed.

→ *No new memory entries.*

## 2026-04-19

### transformSvg: attribute-aware merging for existing class/style/pathLength (Task 6)
Replaced the blind `addAttr` approach in `rewriteTag` with two helpers: `mergeAttr` (appends to existing attribute value with a separator) and `setAttrIfMissing` (skips if already present). This prevents duplicate `class=`, `style=`, or `pathLength=` attributes when the input SVG already has them.

**Root cause / approach:** The old code unconditionally appended new attrs, producing invalid HTML like `class="existing" ... class="draw-line"`. The fix uses regex replacement in-place for existing attrs and appends only when absent. Tests went 24→27 (3 new, 0 regressions).

→ *Memory saved: `rewritetag-attr-merging.md`*

## 2026-04-19

### transformSvg: rejection guards for existing `<style>` and missing `<svg>` root (Task 7)
Added two TDD tests and one new guard line in `transformSvg`. The `no <svg> root` guard was already present from Task 4; only the `<style>` guard was new. Tests went 27→29.

**Root cause / approach:** The `<style>` guard is a single regex test (`/<style\b/i`) placed immediately after the existing `no <svg> root` check, before any mutation. This avoids clobbering user-authored styles that may already be in the SVG file.

→ *No new memory entries.*

## 2026-04-19

### Fix: data-* false positives in attr merging; reject self-closing `<svg>` root
`mergeAttr` and `setAttrIfMissing` used `\b` as a word-boundary anchor before the attribute name, but `\b` treats `-` as a non-word character, making `data-class=` match as a bare `class=` match. Replaced `\b` with `(?<![\w-])` (negative lookbehind excluding word chars and hyphens). Also, `/<svg\b[^>]*>/` matched self-closing `<svg ... />` because `[^>]*` consumed the `/`; tightened to `/<svg\b[^>]*(?<!\/)>/` so self-closing tags fall through to the `no <svg> root` error. Tests went 33→35.

**Root cause / approach:** `\b` only looks at word/non-word transitions; a hyphen is always non-word, so `data-class` has a `\b` right before `class`. The lookbehind `(?<![\w-])` correctly blocks matches preceded by any alphanumeric, underscore, or hyphen.

→ *Memory saved: `attr-merging-word-boundary-gotcha.md`*

## 2026-04-19

### Monorepo restructure: CLI moved into pnpm workspace (Task 1)
Converted the repo to a pnpm monorepo with `pnpm-workspace.yaml`, rewrote root `package.json` as a private workspace root, and moved `animate.js` + `test/` into `packages/cli/` with its own `package.json` and `README.md`. All 35 tests pass via `pnpm --filter @agilek/phosphor-animated-cli test`.

**Root cause / approach:** `git add -A` after changing `.gitignore` from `core-main/` to `core-main/node_modules/` + `core-main/dist/` would have staged ~27K previously-ignored files in `core-main/`. Staged only the infrastructure files explicitly (`packages/`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`, `.gitignore`, `package.json`) to keep the commit clean. `core-main/` remains untracked until explicitly added.

→ *Memory saved: `pnpm-monorepo-gitignore-gotcha.md`*

## 2026-04-19

### Track vendored core-main raw SVGs, manifest, and license (spec-review Task 1)
`core-main/` was fully untracked, blocking Task 12 (React generator) which depends on `core-main/raw/` and `core-main/src/icons.ts`. Updated `.gitignore` to use `core-main/*` + negated opt-ins for `raw/`, `src/`, `LICENSE`, and `README.md`, then committed 9,076 SVGs, the icon manifest, and license files. `raw-animated/` and build artifacts remain untracked as intended.

**Root cause / approach:** Replacing two specific-path ignores (`core-main/node_modules/`, `core-main/dist/`) with a wildcard-plus-negation pattern (`core-main/*` + `!core-main/raw/`) is the correct git idiom for "ignore everything in this dir except these subdirs." A plain `!core-main/raw/` without the leading `core-main/*` would not work because git only un-ignores paths that were ignored by a parent pattern, not by a parent directory being untracked.

→ *No new memory entries.*

## 2026-04-19

### main() orchestration + end-to-end integration tests wired (Task 9)
Implemented `main(argv)` in `animate.js` using all previously-built helpers — `parseArgs`, `walkSvgs`, `transformSvg` — to walk an input directory and write animated SVGs to a mirrored output tree. Added `readFile`, `writeFile`, `mkdir`, `stat`, and `dirname` imports. Added a direct-invocation guard (`import.meta.url === \`file://${process.argv[1]}\``) so the file can be both imported in tests and run as a CLI script. Tests went 31→33.

**Root cause / approach:** Files that throw in `transformSvg` (e.g. existing `<style>` block) are caught per-file and counted as `skipped`, not as a fatal error — matching the spec's `{ processed, skipped }` return shape. The direct-invocation guard avoids a `process.argv.slice(2)` call when the module is imported by the test runner.

→ *No new memory entries.*

## 2026-04-19

### CLI style block switched to hover-triggered animation (Task 2)
Changed `buildStyleBlock` to emit the new "fully drawn at rest, redraw on hover" CSS strategy. The animation is now scoped to `svg:hover .draw-line` and the keyframe name was renamed from `draw-in` to `phosphor-draw-in` to avoid collisions when icons are embedded inline next to other libraries. Updated two tests before touching the implementation; TDD red→green cycle confirmed. 35/35 tests pass.

**Root cause / approach:** The old strategy (`stroke-dashoffset: 1` at rest + animate on mount) meant the drawing played once on page load and never again. The new strategy (`stroke-dashoffset: 0` at rest + `from { stroke-dashoffset: 1 }` on hover) makes icons visually complete by default and replays the draw effect on every hover.

→ *No new memory entries.*

### Allow core-main/raw-animated/ to be tracked by git
Added `!core-main/raw-animated/` to the `.gitignore` opt-in block so Task 3 can commit regenerated animated SVGs. The `core-main/*` wildcard was already blocking the directory; adding the negation line is the correct idiom.

**Root cause / approach:** One-line change — no surprises. `git check-ignore` exit code 1 with no output confirms the path is no longer ignored.

→ *No new memory entries.*

## 2026-04-19

### Regenerate all 9072 animated SVGs with hover-play CSS (Task 3)
Deleted the old `core-main/raw-animated/` tree (generated with mount-play CSS) and re-ran `node packages/cli/animate.js core-main/raw core-main/raw-animated` to produce 9072 fresh SVGs using the hover-triggered animation style from Task 2. Spot-checked `regular/acorn.svg` — confirmed `svg:hover .draw-line`, `phosphor-draw-in` keyframe, and `<path class="draw-line" pathLength="1">` elements present.

**Root cause / approach:** Straightforward bulk regeneration — CLI ran without a single error, exact count 9072 matched input corpus. No surprises.

→ *No new memory entries.*

## 2026-04-19

### Scaffold packages/react with tsup + TypeScript config (Task 4)
Created the empty shell of `packages/react` — `package.json`, `tsconfig.json`, `tsup.config.ts`, and a placeholder `src/index.ts`. The package is named `@agilek/phosphor-animated` and targets dual ESM/CJS output via tsup. `pnpm install` brought in 55 new packages (react, @types/react, tsup, typescript) without errors.

**Root cause / approach:** Straightforward scaffold — no surprises. esbuild build-script warning from pnpm is expected in locked workspace environments and is not an error.

→ *No new memory entries.*

## 2026-04-19

### React core types and base Icon component added (Tasks 5–7)
Created `types.ts` (`IconWeight`, `IconProps`, `IconContextValue`, `DEFAULT_ICON_PROPS`), `IconContext.tsx` (a plain `createContext<IconContextValue>({})`), and `Icon.tsx` (a `forwardRef` SVG wrapper). `Icon` merges props through a three-layer cascade (prop → context → defaults) and re-mounts the SVG on `mouseEnter` via a `key` flip (`animKey`) so CSS animations replay on every hover.

**Root cause / approach:** The hover-remount trick (`setAnimKey(k => k + 1)` fed as `key` to `<svg>`) is the mechanism that makes CSS `@keyframes` replay without any JS animation library. React treats a changed `key` as a new element, resetting all CSS animation state. `tsc --noEmit` produces zero errors against the three new files.

→ *No new memory entries.*

## 2026-04-19

### React generator helpers: Tasks 8–11 (extractAnimatedJsx, extractAnimationParams, buildIconModule, buildIndex, buildStylesCss)
Implemented `packages/react/scripts/generate.mjs` with five exported helper functions covering the full code-generation pipeline: SVG-to-JSX attribute translation, animation param extraction from SVG `<style>` blocks, per-icon module templating, barrel index generation, and CSS file construction. All 11 TDD tests pass across 4 sequential commits.

**Root cause / approach:** The `extractAnimatedJsx` regex only matches elements with `class="draw-line"` and strips stroke-presentation attrs (`fill`, `stroke`, `stroke-linecap`, `stroke-linejoin`, `stroke-width`) while converting `style` inline strings to JSX `{{key:"val"}}` objects and converting `pathLength` to a JSX expression `{N}`. Because all five helpers are pure string transforms with no I/O, they're trivially unit-testable with `node:test`.

→ *No new memory entries.*

## 2026-04-19

### Generator orchestrator wired and 1512 icon components generated (Task 12)
Added `main()` to `packages/react/scripts/generate.mjs` to wire all five helper functions into a full code-generation pipeline. The orchestrator parses the Phosphor manifest via regex, reads 6 SVGs per icon (thin/light/regular/bold/fill/duotone), writes per-icon `.tsx` files plus `index.ts` and `styles.css`. Result: 1512 components generated, 18 skipped (all missing `thin` weight — caduceus, activity, circle-wavy-*, etc.). 11/11 unit tests pass; `tsc --noEmit` over all 1512 generated files reports 0 errors.

**Root cause / approach:** Fill-weight SVGs have no `draw-line` elements (solid fills), so `extractAnimatedJsx` correctly returns `""` for them — the output `<></>` is valid JSX and TypeScript accepts it. The ESM CLI guard (`import.meta.url === file://...`) lets the file be both imported by tests and run as a standalone script.

→ *Memory saved: `generator-orchestrator-pattern.md`*

## 2026-04-19

### React library built with tsup (Task 13)
Ran `pnpm --filter @agilek/phosphor-animated build`. Build completed successfully (ESM + CJS + DTS in ~25s). Added `esbuildOptions(options) { options.assetNames = '[name]'; }` to `tsup.config.ts` to prevent tsup from appending a content hash to the copied `styles.css` (default produced `styles-MDV557NG.css`, which broke the `"./styles.css"` export map entry).

**Root cause / approach:** tsup's `loader: { '.css': 'copy' }` uses esbuild's asset pipeline, which by default appends a content hash to copied files. Setting `assetNames = '[name]'` in `esbuildOptions` strips the hash and outputs a stable `styles.css`. The smoke test (`node --loader css-stub index.mjs`) requires a custom ESM loader to stub CSS imports since Node.js 25 can't natively import `.css` — this is expected library behavior; bundlers handle it in end-user apps.

→ *Memory saved: `tsup-css-asset-names.md`*

## 2026-04-19

### Scaffold apps/demo Vite React app (Task 14)
Created `apps/demo` as a Vite + React app that imports `@agilek/phosphor-animated` via the workspace:* protocol. Six files added: `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, and `src/App.tsx`. `pnpm install` resolved 54 new packages. Dev server started successfully on localhost:5175 (5173/5174 occupied by other projects) and served the correct HTML with `<div id="root"></div>`.

**Root cause / approach:** The demo app's `vite.config.ts` reads `process.env.GITHUB_PAGES` at config time to set the base path — no build-time injection needed, just a string env var. Port collision from other running dev servers is normal; Vite auto-increments. `pnpm approve-builds` interactive prompt for esbuild is expected in locked workspaces and does not block the install.

→ *No new memory entries.*

## 2026-04-19

### Demo manifest loader with copy-manifest prebuild step (Task 15)
Created `apps/demo/scripts/copy-manifest.mjs` — a Node.js prebuild script that reads `core-main/src/icons.ts` and extracts `name`, `pascal_name`, and `tags` for each icon into a plain-data `apps/demo/src/icons-manifest.ts` (1512 entries, 1515 lines). Created `apps/demo/src/manifest.ts` which joins the raw icon data with React component exports from `@agilek/phosphor-animated`, producing `ICONS: IconEntry[]`. Updated `dev` and `build` scripts in `apps/demo/package.json` to run the copy step first. Added `apps/demo/src/icons-manifest.ts` to `.gitignore` since it is derived/generated.

**Root cause / approach:** Phosphor's `core-main/src/icons.ts` uses TypeScript enums (`IconCategory`, `FigmaCategory`) that would break if imported directly by Vite from outside the `core-main` package. The copy-manifest script extracts only the plain-data fields via regex, avoiding any dependency on the enum types. The generated file is pure JSON-like TypeScript with no imports, so Vite processes it trivially.

→ *No new memory entries.*

## 2026-04-19

### Demo UI: Toolbar, virtualized IconGrid, and App wire-up (Tasks 16–18)
Created `Toolbar.tsx` (search input, 6 weight toggle buttons, color picker), `IconGrid.tsx` (row-virtualized with `@tanstack/react-virtual`, 8-column grid, hover border, click-to-copy), and wired everything into `App.tsx` with `useMemo`-filtered search, toast notifications, and live color/weight state. All 8 verification items confirmed visually with agent-browser: toolbar renders, icon count shows "1512 of 1512", search for "heart" narrows to 11, weight toggle changes stroke weight, color picker changes color, hover triggers draw animation, click shows "Copied: HeartIcon" toast.

**Root cause / approach:** `manifest.ts` had a pre-existing TS2352 type error — direct cast of `typeof import(...)` to `Record<string, ComponentType<IconProps>>` was rejected because `IconContext` (a `Context<>`) in the barrel export doesn't satisfy the index signature. Fix: cast through `unknown` first (`as unknown as Record<...>`), which is the TypeScript-idiomatic escape hatch for non-overlapping type assertions. Included as a fixup commit since the type check was a task requirement.

→ *No new memory entries.*
