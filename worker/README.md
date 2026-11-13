# Form Saathi AI (optional)

Adds AI answers to the "Ask Saathi" chat. Without it, the chat still works with instant search.

## How it works

```
Browser (Ask Saathi)                 Cloudflare Worker (this folder)          Google Gemini
--------------------                 -------------------------------          -------------
1. Instant search finds the
   1-3 most relevant guides
2. Removes personal numbers  ─────►  3. Checks the request comes from
   and emails, sends:                   our site, and the daily limit
   question + guide ids              4. Loads those guides itself from
                                        <site>/data/<id>.json
                                     5. Sends guides + question with      ─►  6. Answers in JSON:
                                        strict rules ("answer only            found, answer,
                                        from these guides")              ◄─     form_id, box
                                     7. Checks form_id and box exist
8. Shows the answer with     ◄─────     and returns them
   "Show box N" and Listen
```

Why this design:

- **The API key stays secret.** It lives only in the worker, never in the website (which anyone can read).
- **It cannot invent rules.** The model only sees our verified guide text and is told to say "not covered" otherwise. The site shows which guide and box the answer comes from.
- **It cannot be used as a free chatbot.** The browser sends only guide *ids*; the worker loads the text itself, refuses other websites, and limits each person to `DAILY_LIMIT` questions a day.
- **Privacy.** Long numbers (Aadhaar, account, phone), PAN-shaped codes and emails are removed in the browser and again in the worker. Note: on Gemini's free tier, Google may use prompts to improve its products, which is why personal data is stripped and users are told not to type it.
- **It fails safely.** If the worker is down, slow (15 s) or over its limit, the instant answer is still there.

## Setup (about 20 minutes, free, no card)

You need: a Google account and a Cloudflare account (free), and Node.js installed.

1. **Gemini API key:** open https://aistudio.google.com, sign in, click "Get API key", create a key. Note which "Flash" model is listed as available and put its name in `wrangler.toml` (`GEMINI_MODEL`).
2. **Cloudflare:** sign up at https://dash.cloudflare.com (free plan).
3. In a terminal, inside this `worker` folder:
   ```bash
   npx wrangler login
   ```
   ```bash
   npx wrangler kv namespace create LIMITS
   ```
   Copy the `id` it prints into `wrangler.toml` in place of `PASTE_ID_HERE`.
   ```bash
   npx wrangler secret put GEMINI_API_KEY
   ```
   Paste the key when asked (it is stored by Cloudflare, not in any file).
   ```bash
   npx wrangler deploy
   ```
   It prints an address like `https://form-saathi-ai.<your-name>.workers.dev`.
4. Put that address in `config.js` at the site root:
   `window.SAATHI_AI_URL = "https://form-saathi-ai.<your-name>.workers.dev";`
5. Commit and push. Open the site, click "Ask Saathi" and ask a question: a "Saathi AI (beta)" answer appears under the instant answer.

Never commit the API key. If it ever leaks, delete it in Google AI Studio and create a new one.

## After changing any guide

The worker reads `data/<id>.json`, so rebuild those files and push:

```bash
node tools/build-data.mjs
```

## Settings (wrangler.toml)

| Name | Meaning |
|---|---|
| `GEMINI_MODEL` | Gemini model name from Google AI Studio |
| `SITE_URL` | Where the site (and `data/`) is published |
| `ALLOWED_ORIGINS` | Sites allowed to call the worker |
| `DAILY_LIMIT` | Questions per person per day |
