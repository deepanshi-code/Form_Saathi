# Form Saathi

Explains confusing official forms (bank, government, legal, college) field by field, in simple English and Hindi.

**Live:** https://deepanshi-code.github.io/Form_Saathi/

## Problem

Official forms use small print, jargon and unclear boxes. First-time applicants (for example, at 18) and older family members both get stuck. Mistakes mean rejected forms, repeat visits, paying agents, or embarrassment at the counter.

*Evidence so far:* one personal experience (bank account opening form).
TODO: add findings from interviews and the collected forms.

## Status

| Part | State |
|---|---|
| Website skeleton (list, field-by-field view, Hindi/English, search) | Done, live on GitHub Pages |
| Verified form guides | 17, all checked 2026-10-30: SBI, PNB\*, Bank of Baroda\*, HDFC, Post Office\* and Jan Dhan\* savings accounts, PAN (Form 93), Aadhaar (Form 1), Voter ID (Form 6 and Form 8), Learner's licence (Form 2), Fresh passport, National Scholarship Portal\*, PM-Vidyalaxmi education loan, UGC anti-ragging undertaking, Uttarakhand caste certificate\*, Uttarakhand permanent residence certificate\* |
| Not yet verified | Uttarakhand income certificate (no official form found yet) |

\* Shown with a caution note: the official source found is older or indirect (details on each page).
| AI explanations for any uploaded form | Not started (needs a small server, later) |

## User testing

Plan and results template: [docs/user-testing](docs/user-testing/plan.md). Round 1 (5 users) not yet done.

## Run it

Double-click `index.html`. No install, no server.

## Add a new form

1. Copy `forms/sbi-account-opening.js` to `forms/<new-id>.js` and change `id`.
2. Fill in every field from the **official** form and its instructions. If the official documents don't answer something, write "ask the branch/office". Never guess.
3. Give every field a `quick` answer: what to write in that box, in at most 12 words (English) and a short natural Hindi line. It must come only from that field's own verified text. This is what users see first.
4. If a rule changed recently (so older advice is wrong), add a `changed` note to that field.
5. Add `<script src="forms/<new-id>.js?v=YYYYMMDD"></script>` in `index.html`, after `registry.js` and before `catalog.js`, and add a short name and icon in `forms/catalog.js`. When you change any file, update the `?v=` date on all links so browsers fetch the new version.
6. Set `verified: true` only after you have checked every field against the official source. Fill in `source` and `lastChecked`.

## Rules

- No real personal data (Aadhaar, PAN, signatures) is ever stored or collected.
- Every guide shows whether it is verified. Unverified guides warn the user.
- The issuing bank or office has the final word. This tool only explains.
