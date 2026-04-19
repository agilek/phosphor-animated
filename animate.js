#!/usr/bin/env node

export function parseDuration(str) {
  const m = String(str).trim().match(/^(\d+(?:\.\d+)?)(ms|s)?$/);
  if (!m) throw new Error(`Invalid duration: ${JSON.stringify(str)}`);
  const n = parseFloat(m[1]);
  return m[2] === 'ms' ? n / 1000 : n;
}

export function parseArgs(argv) {
  const positional = [];
  const opts = { duration: 1.5, stagger: 0.3, easing: 'ease-in-out' };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--duration') {
      opts.duration = parseDuration(argv[++i]);
    } else if (a === '--stagger') {
      opts.stagger = parseDuration(argv[++i]);
    } else if (a === '--easing') {
      opts.easing = argv[++i];
    } else if (a.startsWith('--')) {
      throw new Error(`Unknown flag: ${a}`);
    } else {
      positional.push(a);
    }
  }
  if (positional.length < 1) throw new Error('Missing inputDir');
  if (positional.length < 2) throw new Error('Missing outputDir');
  return {
    inputDir: positional[0],
    outputDir: positional[1],
    ...opts,
  };
}
