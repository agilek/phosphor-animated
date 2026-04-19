import { test } from 'node:test';
import assert from 'node:assert/strict';
import { transformSvg } from '../animate.js';

const CFG = { duration: 1.5, stagger: 0.3, easing: 'ease-in-out' };

test('transformSvg: single stroke path gets class="draw-line"', () => {
  const input = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M0,0" fill="none" stroke="currentColor" stroke-width="16"/></svg>`;
  const { output, count } = transformSvg(input, CFG);
  assert.equal(count, 1);
  assert.match(output, /<style>[\s\S]*\.draw-line[\s\S]*svg:hover \.draw-line[\s\S]*@keyframes phosphor-draw-in[\s\S]*<\/style>/);
  assert.match(output, /class="draw-line"/);
});

test('transformSvg: style block is inserted right after <svg> opening tag', () => {
  const input = `<svg viewBox="0 0 256 256"><path stroke="red" d="M0,0"/></svg>`;
  const { output } = transformSvg(input, CFG);
  assert.match(output, /<svg viewBox="0 0 256 256">\s*<style>/);
});

test('transformSvg: style block uses hover-scoped infinite animation with configured duration and easing', () => {
  const input = `<svg viewBox="0 0 256 256"><path stroke="red" d="M0,0"/></svg>`;
  const { output } = transformSvg(input, { duration: 2, stagger: 0.5, easing: 'linear' });
  assert.match(output, /svg:hover \.draw-line\s*\{[^}]*animation: phosphor-draw-in 4s linear infinite alternate/);
  assert.match(output, /@keyframes phosphor-draw-in/);
  assert.match(output, /0%\s*\{ stroke-dashoffset: 2000; \}/);
  assert.match(output, /50%\s*\{ stroke-dashoffset: 0; \}/);
  assert.match(output, /100%\s*\{ stroke-dashoffset: 0; \}/);
});

test('transformSvg: multiple stroke elements all get class="draw-line" (no stagger)', () => {
  const input = `<svg viewBox="0 0 256 256">
<path stroke="red" d="M0,0"/>
<path stroke="red" d="M1,1"/>
<polygon stroke="red" points="0,0 1,1 2,2"/>
</svg>`;
  const { output, count } = transformSvg(input, CFG);
  assert.equal(count, 3);
  const classMatches = output.match(/class="draw-line"/g);
  assert.equal(classMatches.length, 3);
  assert.doesNotMatch(output, /animation-delay/);
});

test('transformSvg: background rect without stroke is left alone and does not consume an index', () => {
  const input = `<svg viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path stroke="red" d="M0,0"/></svg>`;
  const { output, count } = transformSvg(input, CFG);
  assert.equal(count, 1);
  assert.match(output, /<rect width="256" height="256" fill="none"\/>/);
  assert.match(output, /<path stroke="red" d="M0,0" class="draw-line"\/>/);
});

test('transformSvg: returns count = 0 when no stroke elements present', () => {
  const input = `<svg viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/></svg>`;
  const { output, count } = transformSvg(input, CFG);
  assert.equal(count, 0);
  assert.match(output, /<style>/);
});

test('transformSvg: existing class attribute gets draw-line appended', () => {
  const input = `<svg viewBox="0 0 256 256"><path class="existing" stroke="red" d="M0,0"/></svg>`;
  const { output } = transformSvg(input, CFG);
  assert.match(output, /class="existing draw-line"/);
  assert.doesNotMatch(output, /class="draw-line"/);
});

test('transformSvg: existing style attribute is preserved unchanged', () => {
  const input = `<svg viewBox="0 0 256 256"><path style="opacity:0.5" stroke="red" d="M0,0"/></svg>`;
  const { output } = transformSvg(input, CFG);
  assert.match(output, /style="opacity:0\.5"/);
});

test('transformSvg: does not add pathLength attribute', () => {
  const input = `<svg viewBox="0 0 256 256"><path stroke="red" d="M0,0"/></svg>`;
  const { output } = transformSvg(input, CFG);
  assert.doesNotMatch(output, /pathLength/);
});

test('transformSvg: throws when input already has a <style> block', () => {
  const input = `<svg viewBox="0 0 256 256"><style>.x{}</style><path stroke="red" d="M0,0"/></svg>`;
  assert.throws(() => transformSvg(input, CFG), /existing <style>/i);
});

test('transformSvg: throws when input has no <svg> root', () => {
  const input = `<div>not an svg</div>`;
  assert.throws(() => transformSvg(input, CFG), /no <svg> root/i);
});

test('transformSvg: data-* attributes do not collide with class merging', () => {
  const input = `<svg viewBox="0 0 256 256"><path data-class="foo" data-style="bg:red" stroke="red" d="M0,0"/></svg>`;
  const { output } = transformSvg(input, CFG);
  assert.match(output, /data-class="foo"/);
  assert.match(output, /data-style="bg:red"/);
  assert.match(output, /(^|\s)class="draw-line"/);
});

test('transformSvg: throws when <svg> root is self-closing (malformed input)', () => {
  const input = `<svg viewBox="0 0 256 256"/>`;
  assert.throws(() => transformSvg(input, CFG), /no <svg> root/i);
});
