## Rephrase "merit" and shrink oversized heading

### Problem
- The closing statement in the Call Sequence section reads: "The other three didn't lose on merit." The word *merit* doesn't land well — these companies are spending heavily on lead gen and simply aren't answering. Also, the display text is oversized at `clamp(36px, 5.4vw, 64px)` for the section's density.

### Changes
1. **Reword** the line to:
   > "The other three didn't lose on quality."
   
   This contrasts *skill/capability* with *availability* — matching the user's chosen direction.

2. **Shrink the font** of the statement block from `clamp(36px, 5.4vw, 64px)` down to roughly `clamp(28px, 3.6vw, 44px)` (a 4/10 reduction on the scale you indicated). Keeps visual weight but fits the section better.

### File
- `src/routes/index.tsx` — lines 536-557 (Call Sequence closing block)

No other sections touched.