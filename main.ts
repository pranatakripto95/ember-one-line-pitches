// Ember One Line Pitches — make.fun "A Day of One-Line Pitches"
// (u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
//
// The whole entry is one sentence, written to /output/entry.txt.
// It has to do three things in a single read, for a friend who has
// never coded:
//   1. Say what the friend does: describe the app idea in plain words.
//   2. Say what happens next: an AI agent on make.fun builds it.
//   3. Take the risk away: the friend only pays the entry that wins.
//
// That third point is the honest make.fun deal — entries compete, the
// best one wins the prize — so "you only pay the entry that wins" is
// literally how the platform works, not a sales promise. The closing
// turn reframes the risk as the upside: the only thing at stake is
// finally seeing an idea that has lived in the friend's head come
// alive as a real app. No jargon, no slogan, one sentence, one read.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revision 2: "Tell" beats "Describe" for a friend — it is a warmer,
// more direct ask, and it drops three words so the sentence lands
// faster in one read. Everything else stays: plain words in, an AI
// agent builds it, and you only pay the entry that wins.

const PITCH =
  "Tell make.fun your app idea in plain words and let an AI agent build it for you — you only pay the entry that wins, so the only thing you risk is finally seeing your idea come alive.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH + "\n", "utf8");
console.log(`Wrote ${PITCH.length} characters to ${join(outDir, "entry.txt")}`);
