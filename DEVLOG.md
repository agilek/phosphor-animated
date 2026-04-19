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

### walkSvgs: recursive async generator added (Task 8)
Implemented `walkSvgs(root, current = root)` as an async generator exported from `animate.js`. Recursively yields `{ absPath, relPath }` for every `.svg` file under the root directory using `readdir` with `withFileTypes`. Added `readdir`/`join`/`relative` imports from Node built-ins at the top of `animate.js` (first imports in the file). Tests went 29→31.

**Root cause / approach:** The two-argument signature `(root, current)` keeps the public API clean (caller only passes `root`) while enabling recursive calls to track the current traversal directory. `relative(root, absPath)` produces clean, OS-appropriate relative paths without leading slashes.

→ *No new memory entries.*

## 2026-04-19

### Fix: data-* false positives in attr merging; reject self-closing `<svg>` root
`mergeAttr` and `setAttrIfMissing` used `\b` as a word-boundary anchor before the attribute name, but `\b` treats `-` as a non-word character, making `data-class=` match as a bare `class=` match. Replaced `\b` with `(?<![\w-])` (negative lookbehind excluding word chars and hyphens). Also, `/<svg\b[^>]*>/` matched self-closing `<svg ... />` because `[^>]*` consumed the `/`; tightened to `/<svg\b[^>]*(?<!\/)>/` so self-closing tags fall through to the `no <svg> root` error. Tests went 33→35.

**Root cause / approach:** `\b` only looks at word/non-word transitions; a hyphen is always non-word, so `data-class` has a `\b` right before `class`. The lookbehind `(?<![\w-])` correctly blocks matches preceded by any alphanumeric, underscore, or hyphen.

→ *Memory saved: `attr-merging-word-boundary-gotcha.md`*

## 2026-04-19

### main() orchestration + end-to-end integration tests wired (Task 9)
Implemented `main(argv)` in `animate.js` using all previously-built helpers — `parseArgs`, `walkSvgs`, `transformSvg` — to walk an input directory and write animated SVGs to a mirrored output tree. Added `readFile`, `writeFile`, `mkdir`, `stat`, and `dirname` imports. Added a direct-invocation guard (`import.meta.url === \`file://${process.argv[1]}\``) so the file can be both imported in tests and run as a CLI script. Tests went 31→33.

**Root cause / approach:** Files that throw in `transformSvg` (e.g. existing `<style>` block) are caught per-file and counted as `skipped`, not as a fatal error — matching the spec's `{ processed, skipped }` return shape. The direct-invocation guard avoids a `process.argv.slice(2)` call when the module is imported by the test runner.

→ *No new memory entries.*
