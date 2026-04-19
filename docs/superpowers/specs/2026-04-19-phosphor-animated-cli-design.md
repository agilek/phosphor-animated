# Phosphor Animated CLI — Design

## Goal

Convert static Phosphor SVG icons into self-contained animated SVGs that draw their strokes in with a line-draw animation. Output is pure SVG with an embedded `<style>` block — no external CSS file, no JavaScript.

## Usage

```
node animate.js <inputDir> <outputDir> [--duration 1.5s] [--stagger 0.3s] [--easing ease-in-out]
```

- Reads every `*.svg` under `inputDir`, recursively through all subdirectories.
- Mirrors the input directory structure into `outputDir`: a file at `inputDir/foo/bar/icon.svg` is written to `outputDir/foo/bar/icon.svg`.
- Creates `outputDir` and any required nested subdirectories on demand.
- Errors with exit code 1 if `inputDir` does not exist.
- Per-file console line uses the path relative to `inputDir`: `✓ foo/bar/icon.svg (3 elements animated)` or `✗ foo/bar/icon.svg (reason)`.

### Flags

| Flag | Default | Format accepted |
|---|---|---|
| `--duration` | `1.5s` | `1.5s`, `1500ms`, or bare number (treated as seconds) |
| `--stagger` | `0.3s` | same |
| `--easing` | `ease-in-out` | any valid CSS timing function string, passed through verbatim |

## Transform

For each input SVG:

### 1. Inject `<style>` block

Insert as the first child of the root `<svg>` element:

```css
.draw-line {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: draw-in <duration> <easing> forwards;
}
@keyframes draw-in { to { stroke-dashoffset: 0; } }
```

If the input already contains a `<style>` element anywhere in the document, skip the file and report `✗ filename.svg (existing <style> block — refusing to clobber)`. This avoids silently overriding author styles.

### 2. Mark stroke-bearing elements

Scan the document in source order. For each opening tag of `path`, `polygon`, `polyline`, `line`, `circle`, `rect`, or `ellipse` that contains a `stroke=` attribute:

- Add `class="draw-line"` (if a `class=` attribute already exists, append `draw-line` to it space-separated)
- Add `pathLength="1"` (if already present, leave as-is)
- Add `style="animation-delay: {index * stagger}s"` where `index` is the 0-based ordinal of this element among matched elements (if a `style=` attribute already exists, append `; animation-delay: ...` to it)

Elements without a `stroke=` attribute (e.g., the standard `<rect width="256" height="256" fill="none"/>` background) are not modified.

### 3. Output

Preserve the input verbatim except for:
- The single `<style>` insertion just inside the root `<svg>` opening tag
- Attribute additions on matched element opening tags

No re-pretty-printing. Original whitespace, comment placement, and attribute order in untouched ranges are preserved.

## Parsing approach

Regex-based, no XML parser dependency. Two passes over the input string:

1. Find the end of the root `<svg ...>` opening tag (first `>` not inside a quoted attribute) and insert the `<style>` block immediately after it, indented to match.
2. Iterate matches of `<(path|polygon|polyline|line|circle|rect|ellipse)\b[^>]*?/?>` and, for each whose body contains `stroke=`, rewrite the matched substring with the added/merged attributes.

Assumption: SVG attribute values do not contain unescaped `>` characters. Phosphor icons satisfy this.

## Non-goals

- Path merging (e.g., joining the folder tab + body into one continuous stroke). The output sample provided by the user merges two `<path>` elements into one, but that requires geometric understanding and is out of scope. Each element animates independently.
- Watch mode.
- Handling SVGs that contain nested `<svg>` elements, `<defs>`, `<symbol>`, or `<use>` references in special ways. Treated as plain stroke elements if they match the tag list.
- Modifying or replacing existing `<style>` blocks.
- Pretty-printing or normalizing the input.

## Edge cases

| Case | Behavior |
|---|---|
| Element has both `stroke="none"` and another stroke-related attribute | Still matched (presence of `stroke=` is the signal); user can pre-clean if needed |
| Element already has `class="something"` | Appended: `class="something draw-line"` |
| Element already has `style="..."` | Appended: `style="...; animation-delay: 0.3s"` |
| Element already has `pathLength="..."` | Left as-is |
| Input file has no matching elements | Still emitted with `<style>` block; reports `✓ filename.svg (0 elements animated)` |
| Input is not valid SVG (missing root `<svg>`) | Skipped with `✗ filename.svg (no <svg> root)` |
| Non-`.svg` file in input dir | Ignored silently |

## File layout

```
phosphor-animated/
├── animate.js           # the CLI
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-04-19-phosphor-animated-cli-design.md
└── (input/output dirs are user-supplied, not part of the repo)
```
