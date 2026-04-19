# React Library, Demo Site, and Repo Restructure — Design

## Goal

Turn the existing single-file CLI into a publishable open-source project with three deliverables:

1. **`@agilek/phosphor-animated-cli`** — npm package wrapping the existing `animate.js`.
2. **`@agilek/phosphor-animated`** — React component library with one component per icon (~1500 components × 6 weights), API mirroring `@phosphor-icons/react` v3.
3. **Demo site** — Vite + React app deployed to GitHub Pages showing all icons with search, weight toggle, and color picker.

Users pick their consumption model:
- Install the React library and use components directly (most users).
- Download the pre-generated SVGs from `core-main/raw-animated/` and use as static assets.
- Clone the repo, re-run the generator with custom animation settings, rebuild the React library, install from local path.

---

## Repository layout

```
phosphor-animated/
├── package.json                  # workspace root + top-level scripts
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── LICENSE                       # MIT (Michał Acler)
├── NOTICE                        # attribution to Phosphor Icons (MIT)
├── README.md                     # primary user-facing docs
├── DEVLOG.md
├── .gitignore
├── .github/
│   └── workflows/
│       ├── ci.yml                # tests + build on PR
│       └── deploy-demo.yml       # GH Pages deploy on push to main
├── core-main/                    # Phosphor source assets (vendored, in git)
│   ├── raw/                      # input SVGs (stroked outlines)
│   ├── raw-animated/             # generated SVGs (committed, regenerable)
│   └── src/icons.ts              # Phosphor's icon manifest (reused as-is)
├── packages/
│   ├── cli/
│   │   ├── animate.js            # moved from repo root
│   │   ├── package.json          # name: @agilek/phosphor-animated-cli
│   │   ├── README.md             # short, links back to root
│   │   └── test/                 # moved from repo root
│   └── react/
│       ├── src/
│       │   ├── icons/            # GENERATED — one .tsx per icon name (~1500 files)
│       │   │   ├── AcornIcon.tsx
│       │   │   ├── AddressBookIcon.tsx
│       │   │   └── ...
│       │   ├── Icon.tsx          # shared internal wrapper
│       │   ├── IconContext.tsx   # React context for default props
│       │   ├── types.ts          # IconProps, IconWeight, etc.
│       │   ├── styles.css        # GENERATED — keyframes + .draw-line rule
│       │   └── index.ts          # GENERATED — named re-exports of all icons
│       ├── scripts/
│       │   └── generate.mjs      # reads core-main/raw-animated/ + manifest → writes src/
│       ├── package.json          # name: @agilek/phosphor-animated
│       ├── tsup.config.ts        # builds ESM + CJS + .d.ts
│       └── tsconfig.json
└── apps/
    └── demo/
        ├── src/
        │   ├── App.tsx
        │   ├── IconGrid.tsx
        │   ├── manifest.ts       # imports the Phosphor manifest
        │   └── main.tsx
        ├── index.html
        ├── package.json          # name: @agilek/phosphor-animated-demo (private)
        └── vite.config.ts
```

`core-main/` continues to live at the repo root (not moved into `packages/`) since it's vendored upstream content. `core-main/raw-animated/` is committed to git so users get all 9072 SVGs immediately on clone.

---

## CLI package: `@agilek/phosphor-animated-cli`

The existing `animate.js` is moved into `packages/cli/` along with its tests. No behavioural changes. Published to npm under the new name. `bin` entry exposes `phosphor-animated-cli`.

The shared `<style>` block emitted into each standalone SVG is updated to **play on hover** (see "Animation strategy" below). This is a one-line CSS change in `buildStyleBlock`. All existing tests update accordingly.

---

## Animation strategy

Both the standalone SVGs and the React components use the same CSS approach: **draw on hover, fully-drawn at rest**.

### Standalone SVG style block (emitted by CLI)

```css
.draw-line {
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
}
svg:hover .draw-line {
  animation: phosphor-draw-in {{duration}} {{easing}} forwards;
}
@keyframes phosphor-draw-in {
  from { stroke-dashoffset: 1; }
  to   { stroke-dashoffset: 0; }
}
```

Per-element `style="animation-delay: Ns"` attributes are still emitted (they take effect during the hover-triggered animation). The `:hover` scope is the `<svg>` element itself, so hover anywhere inside the icon triggers the redraw.

**Standalone SVG limitation:** `:hover` inside an SVG only works when the SVG is **inlined** in the page (HTML, framework template, SVG-loader). When loaded via `<img src="acorn.svg">`, browser security isolates the SVG and hover doesn't propagate. This is a documented limitation in the README — recommend inlining for hover behavior.

### React library shared CSS (`styles.css`)

Identical keyframes, scoped to the icon's class:

```css
.phosphor-animated-icon .draw-line {
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
}
.phosphor-animated-icon:hover .draw-line {
  animation: phosphor-draw-in {{duration}} {{easing}} forwards;
}
@keyframes phosphor-draw-in {
  from { stroke-dashoffset: 1; }
  to   { stroke-dashoffset: 0; }
}
```

Each generated icon module imports this CSS as a side-effect:

```ts
// AcornIcon.tsx (generated)
import '../styles.css';
import { Icon } from '../Icon';
import type { IconProps } from '../types';
// ... per-weight path data tables
export const AcornIcon = (props: IconProps) => <Icon name="acorn" weights={WEIGHTS} {...props} />;
```

Bundlers dedupe the side-effect CSS import. Users get a single `phosphor-animated.css` injected into their bundle once.

---

## React library API: `@agilek/phosphor-animated`

API matches `@phosphor-icons/react` v3 conventions exactly so users coming from Phosphor feel at home.

### Imports

```tsx
import { AcornIcon, HeartIcon, MagnifyingGlassIcon } from '@agilek/phosphor-animated';
```

### Props

```ts
type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  color?: string;          // default: 'currentColor'
  size?: number | string;  // default: '1em'
  weight?: IconWeight;     // default: 'regular'
  mirrored?: boolean;      // default: false — applies transform: scale(-1, 1)
  alt?: string;            // default: undefined — sets aria-label, role="img" if present
}
```

All other SVG attributes (`className`, `style`, `onClick`, `id`, etc.) are forwarded to the root `<svg>`.

### Context provider

```tsx
import { IconContext } from '@agilek/phosphor-animated';

<IconContext.Provider value={{ color: 'limegreen', size: 32, weight: 'bold', mirrored: false }}>
  <AcornIcon />
  <HeartIcon weight="fill" /> {/* per-component prop overrides context */}
</IconContext.Provider>
```

Resolution order: explicit prop → context value → built-in default.

### Internal `Icon` wrapper

Single shared component every generated icon delegates to:

```tsx
function Icon({ weights, name, ...props }: InternalIconProps) {
  const ctx = useContext(IconContext);
  const merged = { ...DEFAULTS, ...ctx, ...props };
  const [animKey, setAnimKey] = useState(0);
  const onMouseEnter = (e) => {
    setAnimKey(k => k + 1);
    merged.onMouseEnter?.(e);
  };
  return (
    <svg
      key={animKey}
      className={`phosphor-animated-icon ${merged.className ?? ''}`.trim()}
      width={merged.size} height={merged.size}
      fill="none"
      stroke={merged.color}
      strokeLinecap="round" strokeLinejoin="round" strokeWidth={16}
      style={{ ...(merged.mirrored ? { transform: 'scaleX(-1)' } : {}), ...merged.style }}
      role={merged.alt ? 'img' : undefined}
      aria-label={merged.alt}
      viewBox="0 0 256 256"
      onMouseEnter={onMouseEnter}
      {...passThroughSvgProps(merged)}
    >
      {weights[merged.weight]}
    </svg>
  );
}
```

The `key={animKey}` trick: incrementing the key on mouse-enter forces React to fully remount the `<svg>` subtree. CSS animations restart from frame 0 because the DOM nodes are fresh. Pure CSS `:hover` would cover initial replay but not retrigger on subsequent hovers without leaving — the `key` trick handles both.

`weights` is a record mapping each weight string to a JSX fragment of pre-extracted `<path>`/`<polygon>`/etc. elements (with their `class`, `pathLength`, `style="animation-delay:..."` attributes preserved from the generated SVG).

### Per-icon module shape (generated)

```tsx
// packages/react/src/icons/AcornIcon.tsx
import '../styles.css';
import { Icon } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS = {
  thin: <>
    <path className="draw-line" pathLength={1} style={{ animationDelay: '0s' }} d="..." />
  </>,
  light: <> ... </>,
  regular: <> ... </>,
  bold: <> ... </>,
  fill: <> ... </>,
  duotone: <> ... </>,
};

export const AcornIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
```

### `index.ts` (generated)

```ts
export { IconContext } from './IconContext';
export type { IconProps, IconWeight } from './types';
export { AcornIcon } from './icons/AcornIcon';
export { AddressBookIcon } from './icons/AddressBookIcon';
// ... all icons
```

### Build

`tsup` bundles to:
- `dist/index.mjs` (ESM)
- `dist/index.cjs` (CJS)
- `dist/index.d.ts` (types)
- `dist/styles.css` (extracted)

`package.json` declares `sideEffects: ["**/*.css"]` so unused icon imports tree-shake while CSS imports survive.

---

## Generator: `packages/react/scripts/generate.mjs`

Reads:
- `core-main/raw-animated/` — animated SVG files
- `core-main/src/icons.ts` — Phosphor manifest (name → pascal_name, categories, tags)

Writes:
- `packages/react/src/icons/<PascalName>Icon.tsx` per icon name (1 file per name, all 6 weights inlined)
- `packages/react/src/styles.css` (one file, derived animation params)
- `packages/react/src/index.ts` (named re-exports of all generated icons)

Logic:
1. Parse `icons.ts` to get list of `{ name, pascal_name }` (~1500 entries).
2. For each name, for each of 6 weights: read `core-main/raw-animated/<weight>/<name>-<weight>.svg` (regular has no suffix).
3. Extract the inner `<path>`, `<polygon>`, `<polyline>`, `<line>`, `<circle>`, `<rect>`, `<ellipse>` elements that have `class="draw-line"`. Convert SVG attribute names to React conventions (`pathLength` stays, `class` → `className`, inline `style` string → object). Strip per-element `fill`, `stroke`, `stroke-linecap`, `stroke-linejoin`, `stroke-width` — those are hoisted to the root `<svg>` by `Icon.tsx`, so per-element copies are redundant. This roughly halves the size of each generated `.tsx`.
4. Skip the leading `<rect width="256" height="256" fill="none"/>` background and the `<style>` block — those are not needed in the React component.
5. Read animation params (duration, easing) by parsing `<style>` from one sample SVG, write them into `styles.css`.
6. Emit the per-icon `.tsx` files using a string template.
7. Emit `index.ts` listing every component.

Run via `pnpm --filter @agilek/phosphor-animated generate` or the root-level `pnpm generate` (see below).

---

## Customize workflow (root scripts)

Root `package.json` exposes orchestrating scripts. The "regenerate everything with custom params" flow:

```bash
git clone https://github.com/agilek/phosphor-animated.git
cd phosphor-animated
pnpm install
pnpm generate                                           # use defaults
pnpm generate -- --duration 3s --stagger 0.5s --easing linear
pnpm build                                              # build the React library
# then in their own project:
pnpm add file:../path/to/phosphor-animated/packages/react
```

The root `pnpm generate` script runs:
1. `node packages/cli/animate.js core-main/raw core-main/raw-animated <args>`
2. `node packages/react/scripts/generate.mjs --duration <...> --stagger <...> --easing <...>` (same args forwarded)

Both steps consume the same `--duration / --stagger / --easing` so the standalone SVGs and React library stay in sync.

---

## Demo site: `apps/demo`

Vite + React. Single page:

- **Header**: title, GitHub link, npm badge.
- **Toolbar** (sticky):
  - Search input (filters by `name` and `tags` from manifest, case-insensitive substring)
  - Weight selector (6 buttons: thin / light / regular / bold / fill / duotone — single-select, applies to all rendered icons)
  - Color picker (`<input type="color">`, sets CSS `color` on the grid container — icons inherit via `currentColor`)
  - Optional: category multi-select using `IconCategory` enum from manifest
- **Icon grid**: virtualized grid (`@tanstack/react-virtual`) of all matching icons. ~1500 entries → virtualization keeps initial paint fast.
- **Hover behavior**: each icon naturally redraws on hover via the library's built-in mechanism — no demo-specific code.
- **Click behavior**: copy `import { AcornIcon } from '@agilek/phosphor-animated'` to clipboard, show transient toast.

The demo dogfoods the React library: imports from `@agilek/phosphor-animated` via workspace protocol (`"@agilek/phosphor-animated": "workspace:*"`).

GitHub Pages deploy:
- Workflow `.github/workflows/deploy-demo.yml` runs on push to `main`.
- Steps: `pnpm install` → `pnpm build` (library first, then demo) → `peaceiris/actions-gh-pages` to publish `apps/demo/dist`.
- Vite `base` config set to `/phosphor-animated/` to match GitHub Pages subpath.

---

## README structure

Single root README covering all three deliverables. Sections:

1. **What this is** — one-paragraph elevator pitch + animated GIF/preview.
2. **Demo** — link to GH Pages.
3. **Quick start (React library)** — install, basic usage, props table, color/size examples.
4. **Using the standalone SVGs** — link to `core-main/raw-animated/`, note about hover requiring inline SVG.
5. **Customizing animation** — clone, run `pnpm generate -- --duration 3s ...`, rebuild.
6. **CLI** — short section, link to `packages/cli/README.md`.
7. **Credits** — Phosphor Icons attribution, MIT license note, link to upstream.
8. **License** — MIT.

---

## Licensing & attribution

- Repo `LICENSE`: MIT (Michał Acler).
- Repo `NOTICE`: explicit attribution to Phosphor Icons project, link to their MIT license, note that vendored content in `core-main/` is unmodified upstream code.
- README "Credits" section repeats the attribution prominently.
- React library `package.json` `keywords` include `phosphor` for discoverability; `description` makes the derivative relationship clear.

---

## CI

`.github/workflows/ci.yml`:
- On PR: install, run CLI tests (`pnpm --filter @agilek/phosphor-animated-cli test`), build React lib (`pnpm --filter @agilek/phosphor-animated build`), build demo.
- No publish step in CI; npm publishes happen manually via `pnpm publish` from `packages/cli` and `packages/react`.

---

## Non-goals

- SSR-specific build (`@phosphor-icons/react/ssr` subpath). Standard ESM build works in modern SSR setups (Next.js 14+, Remix, etc.); a separate SSR entry can be added later if users report issues.
- Per-component animation prop overrides (e.g., `<AcornIcon duration="3s">`). Customization happens at build time via the regen script.
- Reactive prop changes triggering animation restart beyond hover (e.g., changing `weight` doesn't replay).
- Lottie/JSON animation export.
- Codemod for migrating from `@phosphor-icons/react`.
- Storybook.
- Per-icon detail page in demo.

---

## File layout summary (what's new vs. existing)

| Path | Status |
|---|---|
| `animate.js`, `test/`, `package.json` (root) | **Move** to `packages/cli/` |
| `core-main/raw-animated/` | **Already exists**, commit to git |
| `packages/react/src/icons/*.tsx` | **Generated** by `scripts/generate.mjs` |
| `packages/react/src/{Icon,IconContext,types,index,styles.css}` | **Generated** or hand-written shared modules |
| `packages/react/scripts/generate.mjs` | **New** |
| `apps/demo/` | **New** |
| `pnpm-workspace.yaml` | **New** |
| Root `package.json` | **Rewritten** — workspace root, top-level scripts |
| `README.md` | **New / rewritten** |
| `LICENSE`, `NOTICE` | **New** |
| `.github/workflows/{ci,deploy-demo}.yml` | **New** |
