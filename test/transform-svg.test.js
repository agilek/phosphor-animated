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
