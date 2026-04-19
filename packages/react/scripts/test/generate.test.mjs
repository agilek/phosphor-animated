import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractAnimatedJsx } from '../generate.mjs';

test('extractAnimatedJsx: extracts a single draw-line path as JSX', () => {
  const svg = `<svg viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path class="draw-line" pathLength="1" style="animation-delay: 0s" d="M0,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
  const jsx = extractAnimatedJsx(svg);
  assert.match(jsx, /<path\s/);
  assert.match(jsx, /className="draw-line"/);
  assert.doesNotMatch(jsx, /pathLength/);
  assert.match(jsx, /style=\{\{animationDelay:"0s"\}\}/);
  assert.match(jsx, /d="M0,0"/);
  assert.doesNotMatch(jsx, /fill=/);
  assert.doesNotMatch(jsx, /stroke="/);
  assert.doesNotMatch(jsx, /stroke-linecap=/);
  assert.match(jsx, /strokeWidth="16"/);
});

test('extractAnimatedJsx: skips the 256x256 fill="none" background rect', () => {
  const svg = `<svg viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path class="draw-line" pathLength="1" style="animation-delay: 0s" d="M0,0"/></svg>`;
  const jsx = extractAnimatedJsx(svg);
  assert.doesNotMatch(jsx, /<rect/);
  assert.match(jsx, /<path/);
});

test('extractAnimatedJsx: fill-weight paths get fill="currentColor" for proper rendering', () => {
  const svg = `<svg viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M0,0"/></svg>`;
  const jsx = extractAnimatedJsx(svg);
  assert.match(jsx, /<path\s/);
  assert.match(jsx, /fill="currentColor"/);
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

import { buildIndex, buildStylesCss } from '../generate.mjs';

test('buildIndex: exports all icons and the public API', () => {
  const out = buildIndex(['Acorn', 'AddressBook']);
  assert.match(out, /export \{ IconContext \} from '\.\/IconContext';/);
  assert.match(out, /export type \{ IconProps, IconWeight, IconContextValue \} from '\.\/types';/);
  assert.match(out, /export \{ AcornIcon \} from '\.\/icons\/AcornIcon';/);
  assert.match(out, /export \{ AddressBookIcon \} from '\.\/icons\/AddressBookIcon';/);
});

test('buildStylesCss: substitutes duration and easing and loops infinitely on hover', () => {
  const out = buildStylesCss({ duration: '2s', easing: 'linear' });
  assert.match(out, /\.phosphor-animated-icon:hover \.draw-line/);
  assert.match(out, /animation: phosphor-draw-in 2s linear infinite alternate;/);
  assert.match(out, /@keyframes phosphor-draw-in/);
  assert.match(out, /var\(--draw-length, 2000\)/);
});
