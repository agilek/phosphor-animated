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
