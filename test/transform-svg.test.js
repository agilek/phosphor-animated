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
  assert.match(output, /<path stroke="red" d="M0,0" class="draw-line" pathLength="1" style="animation-delay: 0s"\/>/);
});

test('transformSvg: returns count = 0 when no stroke elements present', () => {
  const input = `<svg viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/></svg>`;
  const { output, count } = transformSvg(input, CFG);
  assert.equal(count, 0);
  // Style block still inserted
  assert.match(output, /<style>/);
});

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

test('transformSvg: throws when input already has a <style> block', () => {
  const input = `<svg viewBox="0 0 256 256"><style>.x{}</style><path stroke="red" d="M0,0"/></svg>`;
  assert.throws(() => transformSvg(input, CFG), /existing <style>/i);
});

test('transformSvg: throws when input has no <svg> root', () => {
  const input = `<div>not an svg</div>`;
  assert.throws(() => transformSvg(input, CFG), /no <svg> root/i);
});
