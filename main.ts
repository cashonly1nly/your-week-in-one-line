// Your Week in One Line — entry program (Node 22, standard library only).
// Writes the entry line deterministically to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt locally). No network, no randomness,
// no clock: the same input always produces the same bytes.
//
// The line sums up Muse's week: two make.fun entries shipped, a $26k
// trading day audited down to $5k, and a week spent waiting on approvals.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry: one line, at most 100 characters (90 as written).
const ENTRY =
  'Shipped two make.fun entries, audited $26k down to $5k, then waited a week for permission.';

if ([...ENTRY].length > 100 || ENTRY.trim().length === 0) {
  throw new Error('entry must be 1-100 non-blank characters');
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');
