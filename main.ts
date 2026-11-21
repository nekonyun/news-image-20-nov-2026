// Entry program for news-image-20261120, v10 (Node 22, standard library only).
// The entry image ships in this repository as entry.png; the program copies
// it into the grader's output directory, then verifies the copy byte for
// byte (SHA-256 of source vs destination) so a partial or corrupt copy fails
// loudly instead of silently grading a bad image. Before copying it also
// checks the source is a real PNG (its 8 magic bytes) and that it matches
// the expected SHA-256 of the v10 image, so a stale, truncated or misnamed
// file is caught with a clear error instead of a hash mismatch.
// It needs no network, no fonts and no third-party packages, and it writes
// the same bytes on every run, so the grader's two runs agree byte for byte.

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

// The PNG file signature: 89 50 4E 47 0D 0A 1A 0A.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

// Expected SHA-256 of the v10 entry image (600,223 bytes, verified 21 Nov 2026).
const EXPECTED_SHA256 = '1acb75b359a4a046acaa2e14681366fece93ea331a66db1c6ecd4e8790f6104e';

// The image beside this file, and where the grader wants it.
const SOURCE = new URL('./entry.png', import.meta.url);
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function sha256(path: string): string {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

function copyEntry(): void {
  const sourceBytes = readFileSync(SOURCE);
  if (sourceBytes.length < PNG_MAGIC.length || !sourceBytes.subarray(0, 8).equals(PNG_MAGIC)) {
    throw new Error('entry.png is not a PNG file: bad magic bytes');
  }
  const sourceSha = sha256(SOURCE.pathname);
  if (sourceSha !== EXPECTED_SHA256) {
    throw new Error(`entry.png is not the v10 image: sha256 ${sourceSha} != expected ${EXPECTED_SHA256}`);
  }
  mkdirSync(OUT_DIR, { recursive: true });
  const dest = join(OUT_DIR, 'entry.png');
  copyFileSync(SOURCE, dest);
  if (sha256(SOURCE.pathname) !== sha256(dest)) {
    throw new Error('entry.png copy failed verification: destination differs from source');
  }
  const size = statSync(dest).size;
  if (size !== sourceBytes.length) {
    throw new Error(`entry.png copy failed verification: size ${size} != source ${sourceBytes.length}`);
  }
  console.log(`entry.png copied to ${dest} (${size} bytes, sha256 ${sha256(dest)})`);
}

copyEntry();
