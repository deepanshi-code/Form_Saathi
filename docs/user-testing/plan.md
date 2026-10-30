# User Testing Plan: Form Saathi, Round 1

## Goal

Find out whether Form Saathi actually helps people fill official forms correctly, and what confuses them on the site.

### What we want to learn

1. Do people make **fewer mistakes** on a form when they use Form Saathi?
2. Do they feel **more confident** about filling it?
3. Is the Hindi easy to understand for someone who usually reads Hindi?
4. Where do people get stuck **on the site itself**?

### What we expect (hypotheses)

| # | Hypothesis | How we will check |
|---|---|---|
| H1 | Users make fewer errors with Form Saathi than without it | Count errors on the filled form, with and without the site |
| H2 | Users feel more confident with Form Saathi | Confidence rating (1–5) after each form |
| H3 | Hindi readers understand the Hindi guide without help | Hindi-reading participants explain 3 fields back in their own words |
| H4 | People notice the "Recently changed" and caution notes | Ask after the task: "Did anything warn you that a rule had changed?" |

If a hypothesis turns out false, that's a useful result. Write it down honestly.

## Participants (5 people)

| # | Who | Why |
|---|---|---|
| P1 | A student who turned 18 recently | The main target user |
| P2 | Another first- or second-year student | The main target user |
| P3 | A parent who usually reads Hindi | Tests the Hindi, and is the person who often fills family forms |
| P4 | A parent or relative, any language | Older user, maybe less used to websites |
| P5 | Someone who has never seen a voter ID or PAN form | Hardest case |

Don't test only friends from your own class. Their results will look better than reality.

## Materials

- A phone (most real users will open the site on a phone) with https://deepanshi-code.github.io/Form_Saathi/ open.
- **Printed blank official forms:** Voter ID Form 6 and PAN Form 93. Links are on each guide page in Form Saathi.
- **A fake-identity card for each participant** (see below). **Never let anyone write their real Aadhaar, PAN or address on a test form.**
- A pen, a timer (phone stopwatch) and the results sheet ([results-template.md](results-template.md)).

### Fake identity card (print one per participant)

> **Name:** Riya Sharma · **Date of birth:** 14 March 2008 · **Father:** Anil Sharma · **Mother:** Sunita Sharma
> **Home address (on your Aadhaar):** House 12, Village Example, Tehsil Example, District Almora, Uttarakhand · **Mobile:** 90000 00000
> **Situation:** You just turned 18. You study in Dehradun and live in the college hostel there, but your Aadhaar shows your home in Almora district. You have Aadhaar, but no PAN yet.

The situation is chosen on purpose, because it triggers real confusions: hostel vs home address, and having Aadhaar but no PAN.

## Session plan (about 25 minutes per person)

Use two forms, and switch which one gets help, so the comparison is fair:

| Participant | Form A **without** the site | Form B **with** the site |
|---|---|---|
| P1, P3, P5 | Voter ID Form 6 | PAN Form 93 |
| P2, P4 | PAN Form 93 | Voter ID Form 6 |

1. **Intro (2 min).** Say: *"I'm testing the website, not you. There are no wrong answers. Please think out loud: say what you're reading and what confuses you."* Ask for permission to take notes.
2. **Form A without help (8 min).** Give the fake identity card and the first blank form. Say: *"Fill this as if it were real. You can ask me nothing."* Time it.
3. **Form B with Form Saathi (10 min).** Give the second form and the phone. Say: *"Now fill this one. You can use this website."* Time it. Don't show them how to use the site.
4. **Questions (5 min):**
   - "On a scale of 1 to 5, how confident are you that each form is filled correctly?" (Ask for both forms.)
   - "What was the most confusing part, on the form or on the website?"
   - "Did anything warn you that a rule had changed?"
   - For Hindi readers: point to 3 fields in the Hindi guide and ask, "What does this mean, in your own words?"
   - "Would you use this again, or send it to someone? Why or why not?"

### Rules for you during the session

- **Don't help.** If they ask a question, reply: *"What would you do if I weren't here?"* Note the question; it is data.
- **Don't defend the site.** If they say something is confusing, write it down and say "thank you".
- Write down **exact words** people say, especially "I don't understand" moments.

## What to measure

| Measure | How |
|---|---|
| Errors per form | After the session, check each filled form against the guide's rules (wrong date format, wrong box, missing *, Form 60 instead of 97, etc.) |
| Time per form | Stopwatch |
| Questions asked | Count every time they ask you something |
| Confidence | 1–5 rating for each form |
| Site problems | Where they got stuck or lost on the site |

## After all 5 sessions

1. Fill in the summary table in the results sheet.
2. Compare **with vs without** the site: errors, time, confidence.
3. List every site problem. Mark each as **High** (stopped them), **Medium** (slowed them) or **Low** (annoying).
4. Fix the High problems first, then test again with 2–3 new people.

### Be honest about limits

5 people is a small test. It can show **where** problems are, but it can't **prove** the site works for everyone. Write it like this:

> "In a small test with 5 users, participants made X errors on average without Form Saathi and Y with it."

Don't write "Form Saathi reduces errors by Z%" as if it were a general fact.

## Privacy and consent

- Only fake identity details on the test forms. Shred or keep the forms; never photograph a form with real data.
- Ask before noting anyone's name; use P1–P5 in all notes and on GitHub.
- No audio or video recording unless the person clearly agrees.
