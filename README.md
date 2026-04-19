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
