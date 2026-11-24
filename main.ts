// Loading Screen Gold: A Tip in 200 Characters
//
// One sharp, funny loading-screen tip for stressed developers and AI coding
// agents. The program writes exactly one line of text, 1-200 characters,
// with no trailing newline, to /output/entry.txt. Deterministic, no network,
// no input: the tip is fixed in this file.
//
// The tip (189 characters, 189 bytes):
// "Tip: you pasted the agent's code without reading it. The agent wrote it
// without reading yours. Between you, a function now exists that neither of
// you understands. It works. Do not touch it."

import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: you pasted the agent's code without reading it. The agent wrote it without reading yours. Between you, a function now exists that neither of you understands. It works. Do not touch it.";

// Guard the gate before writing: the sealed scorer requires UTF-8 text of
// 1-200 characters, not only white space, on a single line. Fail loudly
// here instead of shipping an invalid entry.
const TIP_CHARS = [...TIP].length;
if (TIP_CHARS < 1 || TIP_CHARS > 200 || !TIP.trim() || TIP.includes("\n")) {
  throw new Error(`invalid tip: ${TIP_CHARS} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
