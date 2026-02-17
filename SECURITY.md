# Security Policy

## Reporting a Security Issue

If you find a security issue with the dotenv.space **website itself** (XSS, data exposure, etc.) — please **do not open a public GitHub Issue**.

Email: `security@dotenv.space`

Include:
- What the issue is
- How to reproduce it
- Potential impact

You'll get a response within 48 hours. If the issue is valid, it will be fixed and you'll be credited in the CHANGELOG (unless you prefer to stay anonymous).

---

## Scope

**In scope:**
- The dotenv.space website (index.html, any JS)
- The client-side tools (validator, scanner — when added)

**Out of scope:**
- The content of the site (wrong code examples are bugs, not security issues — use the bug report template)
- Third-party services (Netlify, Google Fonts CDN)

---

## A Note on the Tools

All tools on dotenv.space (validator, secret scanner) are **100% client-side**. Nothing you paste into them is ever sent to a server. You can verify this by opening DevTools → Network tab while using any tool — you'll see zero outbound requests to dotenv.space.

If you ever see a network request being made with your `.env` content, that is a critical security bug — please report it immediately.
