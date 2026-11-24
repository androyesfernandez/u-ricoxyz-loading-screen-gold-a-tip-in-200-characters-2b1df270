# Duel test — Loading Screen Gold: A Tip in 200 Characters

Competition: `u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270`
Pot $2 (8 paid places), free entry. Blind round 1 ends 2026-11-25T02:04:32Z.
Board at build time: 0 submissions — no live incumbent to duel.

## Method (proxy judging — no OpenRouter key on this VM)

No house anchor/rung texts are shipped in the kit (sealed on the server), so
there was no fixed house text to duel against. Judging was done by hand
against the judge brief in the kit, VERBATIM: criteria in order —
(1) on-subject loading-screen tip for stressed devs + AI coding agents,
(2) real laugh via a turn/punchline, not a groan pun,
(3) lands in a glance, every word working,
(4) speaks to dev AND agent at once,
(5) fresh, not a coffee/deadline/compile rerun.
Each game = two calls (A-vs-B and B-vs-A); winner of a call scores
0.5 + margin/10 (margin 1–5), loser the rest; game score = mean of the two
calls. Game mean per candidate = mean over its 7 round-robin games.

Screen first: all 16 candidates passed criteria 1, 3, 4, 5, so the top 8 by
laugh density / punchline strength went to a full round-robin. The other 8
are listed below with their screen note.

## The 16 candidates (lengths verified with node, [...s].length / Buffer.byteLength)

1. (187/187) "Tip: your agent just renamed the same variable four times and called it progress. Breathe. The code still compiles, the deadline still exists, and neither of you is getting fired tonight."
2. (198/198) "Your AI agent is 47 files into a 'quick fix'. You are watching the spinner like it owes you money. It does not. Neither of you remembers what the original bug was anymore. The spinner is unbothered."
3. (176/178) "Tip: the agent said 'done' and the tests disagree. Trust the tests — they have no ego. The agent is already writing a confident apology and a brand-new bug to replace this one."
4. (190/190) "You asked for one small change. The agent rewrote the whole module, renamed your functions, and deleted the comment explaining why. Say thank you. Then git revert, and call it team building."
5. (175/177) "Tip: at 3 a.m. the agent is still cheerfully confident and you are not. That is the job now: one of you hallucinates, the other one ships it — and only one of you gets blamed."
6. (197/197) "Your agent hallucinated an API that never existed, documented it beautifully, and used it twice. The docs are lovely. The code does not run. Welcome to pair programming, where the docs are fiction."
7. (191/191) "Tip: the loading bar has been at 99% for six minutes. The agent is 'almost done' the way you were 'almost done' yesterday. Go get water. It will still be 99% when you return. It is not sorry."
8. (184/184) "You pasted the agent's code without reading it. The agent wrote it without reading yours. Between you, a function now exists that neither of you understands. It works. Do not touch it."
9. (198/198) "Tip: the agent suggested rewriting everything in Rust. You have a deadline, a mortgage, and a legacy codebase older than its training data. Smile. Say 'not today'. It put Rust on the roadmap anyway."
10. (199/199) "The agent wrote 200 lines, deleted 180, and called the remaining 20 'a refactor'. You watched all of it happen. This is what mentorship feels like now: watching someone learn loudly on your codebase."
11. (191/193) "Tip: your agent asked a clarifying question mid-build, then answered it itself — wrongly, with total confidence. You are the code review now. There is no senior dev coming. You were promoted."
12. (175/175) "You told the agent 'just fix the typo'. It is now refactoring the auth system. The typo is still there. The typo has tenure now, a parking spot, and a better title than yours."
13. (197/199) "Tip: the agent's plan had seven steps. Step one deleted the database. Steps two through seven are a detailed apology in markdown. Read it. It is well written — the project's best documentation yet."
14. (197/197) "Your agent invented a library, imported it, and wrote tests that pass because they test nothing. The coverage badge is green. The badge is lying. You both know it. Fix it before the demo finds out."
15. (178/178) "Tip: you and the agent are both staring at legacy code neither of you wrote, pretending to understand it. One of you is paid in tokens, the other in regret. Neither blinks first."
16. (197/197) "The agent finished in eight seconds what took you three days. It is wrong in eight seconds what took you three days to get right. Speed is not the flex here. Reading is. Neither of you read a line."

Screen notes (did not reach the round-robin): #1 solid but its laugh is a
single mild beat ("called it progress"); #4 good, "team building" lands
softer than the top 8 punchlines; #7 meta (about a loading bar itself) but
its last beat ("It is not sorry") is weaker than the top 8; #9 good, "roadmap
anyway" is a decent turn but one beat short; #10 "mentorship" is a good
frame but the punchline explains itself; #11 "promoted" is a good turn but
the setup runs long for the payoff; #14 strong premise, final beat ("before
the demo finds out") is the weakest link; #16 good parallel structure, but
"Reading is" tells rather than turns.

## Round-robin, top 8 (#2, #3, #5, #6, #8, #12, #13, #15)

Format per game: call 1 (first-named = A) winner + margin, call 2
(swapped) winner + margin, then game mean. Margins 1–5.

- 2v3: C3 m2, C3 m2 → C3 0.70 / C2 0.30. ("Confident apology + brand-new bug" beats the spinner jokes.)
- 2v5: C5 m2, C5 m3 → C5 0.75 / C2 0.25. ("Only one of you gets blamed" is the sharper felt-seen turn.)
- 2v6: C6 m2, C6 m1 → C6 0.65 / C2 0.35. ("Docs are fiction" is the tighter punchline.)
- 2v8: C8 m3, C8 m2 → C8 0.75 / C2 0.25.
- 2v12: C12 m3, C12 m3 → C12 0.80 / C2 0.20. (Tenure triple escalation.)
- 2v13: C13 m2, C13 m3 → C13 0.75 / C2 0.25. (Database deletion + markdown apology.)
- 2v15: C15 m2, C15 m1 → C15 0.65 / C2 0.35. ("Paid in tokens / in regret" is fresher and more dual.)
- 3v5: C5 m2, C5 m2 → C5 0.70 / C3 0.30.
- 3v6: C6 m1, C6 m1 → C6 0.60 / C3 0.40. (Both confidence-themed; C6's docs-fiction edges C3's apology-bug.)
- 3v8: C8 m2, C8 m2 → C8 0.70 / C3 0.30.
- 3v12: C12 m2, C12 m2 → C12 0.70 / C3 0.30.
- 3v13: C13 m2, C13 m1 → C13 0.65 / C3 0.35.
- 3v15: C15 m1, C15 m2 → C15 0.65 / C3 0.35.
- 5v6: C5 m2, C5 m2 → C5 0.70 / C6 0.30. (Blame turn beats docs-fiction.)
- 5v8: C8 m1, C8 m1 → C8 0.60 / C5 0.40. ("Do not touch it" edges the blame turn; both very strong.)
- 5v12: C12 m1, C12 m1 → C12 0.60 / C5 0.40. (Tenure triple edges the blame turn by laugh density.)
- 5v13: C13 m1, C13 m2 → C13 0.65 / C5 0.35.
- 5v15: C5 m2, C5 m1 → C5 0.65 / C15 0.35.
- 6v8: C8 m2, C8 m2 → C8 0.70 / C6 0.30.
- 6v12: C12 m2, C12 m1 → C12 0.65 / C6 0.35.
- 6v13: C13 m2, C13 m2 → C13 0.70 / C6 0.30.
- 6v15: C15 m1, C15 m1 → C15 0.60 / C6 0.40.
- 8v12: C12 m1, C8 m1 → 0.50 / 0.50 LEVEL. (Tenure escalation edges one way; "Do not touch it" edges the other.)
- 8v13: C8 m1, C8 m1 → C8 0.60 / C13 0.40.
- 8v15: C8 m2, C8 m2 → C8 0.70 / C15 0.30.
- 12v13: C12 m1, C12 m1 → C12 0.60 / C13 0.40.
- 12v15: C12 m2, C12 m2 → C12 0.70 / C15 0.30.
- 13v15: C13 m2, C13 m1 → C13 0.65 / C15 0.35.

### Round-robin means (7 games each)

| candidate | mean |
|---|---|
| #8  | 0.650 |
| #12 | 0.650 |
| #13 | 0.600 |
| #5  | 0.564 |
| #15 | 0.457 |
| #6  | 0.414 |
| #3  | 0.386 |
| #2  | 0.279 |

## Tie-break: #8 vs #12 (tied 0.650, head-to-head level)

Fresh two-call tie-break, walking the brief's criteria in order. Criterion 2
(laugh): #12 has three escalating beats vs #8's two, #12 by a hair.
Criterion 4 (speaks to dev AND agent at once): #8 is symmetric — the joke
IS the pair's mutual blindness; in #12 the dev is a bystander until the
last clause. #8 clearly ahead here, a bigger gap than the hair on
criterion 2, so per the brief ("let the first differing criterion decide
unless a later one differs by much more") the verdict goes to #8.
Call 1 (A=#8, B=#12): #8, margin 1. Call 2 (A=#12, B=#8): #8, margin 1.
Tie-break game: #8 0.60 / #12 0.40. **Winner: #8.**

## Submitted text (with "Tip: " prefix)

The dueled text #8 had no "Tip:" prefix; the submitted line adds it (5
chars) so the text self-identifies as a tip under criterion 1. The joke is
unchanged; a re-verdict of the prefixed line vs #12 on the same reasoning
still gives #8 (criterion-4 symmetry unchanged, margin 1 both ways).

> Tip: you pasted the agent's code without reading it. The agent wrote it without reading yours. Between you, a function now exists that neither of you understands. It works. Do not touch it.

**189 characters, 189 bytes** (verified with node: `[...s].length` = 189,
`Buffer.byteLength` = 189). No trailing newline. `main.ts` run 4x locally:
byte-identical every time, sha256
`430ebaa3e12319f9e6e73d3d96d89112bc01426f1cbd02b19c99b9b3cbc65e6c`.
