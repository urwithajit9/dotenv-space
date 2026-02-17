# 🔐 dotenv.space

> The complete `.env` reference for every stack — in one place.

**Live at → [dotenv.space](https://dotenv.space)**

[![Site Status](https://img.shields.io/website?url=https%3A%2F%2Fdotenv.space&label=dotenv.space&style=flat-square)](https://dotenv.space)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen?style=flat-square)](#contributing)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![Last Updated](https://img.shields.io/badge/updated-January%202026-orange?style=flat-square)](CHANGELOG.md)

---

## What Is This?

Most `.env` documentation is scattered across framework-specific docs, Stack Overflow answers, and outdated blog posts. **dotenv.space** is a single, maintained reference that covers:

- 🐍 **Python** — python-dotenv, django-environ, pydantic-settings
- ⚡ **Django & FastAPI** — settings.py patterns, type-safe config
- ⚛️ **React, Next.js, Vite** — prefix rules, build-time vs runtime, server vs client
- 🦀 **Rust** — dotenvy, config crate, secrecy
- 🐳 **Docker & Compose** — env_file, secrets, never baking into images
- 🔁 **GitHub Actions** — secrets, environments, staged deploys
- 🛠️ **Alternatives** — Doppler, Infisical, AWS Secrets Manager, Vault
- 🚨 **10 real troubleshooting cases** you'll actually hit
- ✅ **Pre-deploy checklist**

---

## Why Maintain This as a Human (Not Just Ask an LLM)?

Great question. LLMs generate — they don't verify, maintain, or date their answers. Every code example on dotenv.space is:

- **Version-stamped** — tested against specific library versions
- **Community-validated** — real developers catch mistakes via PRs and Issues
- **Opinionated** — we tell you which approach to use, not list five equally
- **Current** — updated when frameworks release breaking changes

---

## Stack

Pure HTML + CSS + Vanilla JS. No framework, no build step, no dependencies.

```
index.html   ← the entire site
og-image.png ← social share image
sitemap.xml  ← search engine sitemap
```

That's intentional. Zero build step = zero maintenance overhead = always deployable.

---

## Contributing

Found a mistake? Know a better pattern? Want to add a framework section?

**→ Read [CONTRIBUTING.md](CONTRIBUTING.md) first** — it's short, I promise.

Quick summary:
- 🐛 **Bug / outdated info** → [Open an issue](../../issues/new?template=bug_report.md)
- ➕ **New section / framework** → [Open a discussion first](../../discussions/new?category=ideas)
- 📝 **Small fix (typo, broken code)** → PR directly, no discussion needed

---

## Local Development

No build step needed:

```bash
git clone https://github.com/urwithajit9/dotenv-space.git
cd dotenv-space

# Option 1 — Python (built-in)
python -m http.server 8080

# Option 2 — Node
npx serve .

# Option 3 — VS Code
# Install "Live Server" extension, right-click index.html → Open with Live Server
```

Open `http://localhost:8080` in your browser.

---

## Roadmap

| Status | Item |
|--------|------|
| ✅ Done | Core reference — Python, Django, FastAPI, React, Next.js, Vite, Rust |
| ✅ Done | Docker, GitHub Actions, CI/CD patterns |
| ✅ Done | 10 troubleshooting cases |
| 🔄 In Progress | `.env.example` generator tool |
| 🔄 In Progress | Client-side validator |
| 🔄 In Progress | Secret scanner |
| 📋 Planned | Rust CLI (`cargo install dotenv-space`) |
| 📋 Planned | Go / Laravel / SvelteKit sections |
| 📋 Planned | Kubernetes Secrets section |

See [CHANGELOG.md](CHANGELOG.md) for what changed and when.

---

## Kept Intentionally Out of Scope

- No server-side backend (static only, forever)
- No user accounts
- No storing or transmitting any `.env` content (all tools are client-side)
- No ads that aren't clearly labeled as sponsorships

---

## License

MIT — use it, fork it, share it. If you build something with it, a link back is appreciated but not required.

---

## Maintainer

Built and maintained by **[@urwithajit9](https://github.com/urwithajit9)**.  
Found a critical security issue? Email: `security@dotenv.space`

---

<p align="center">
  <a href="https://dotenv.space">dotenv.space</a> ·
  <a href="../../discussions">Discussions</a> ·
  <a href="../../issues">Issues</a> ·
  <a href="CONTRIBUTING.md">Contributing</a>
</p>
