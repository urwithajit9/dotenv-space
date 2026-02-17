# Changelog

All notable changes to dotenv.space are documented here.

Format: `[Version] — Month Year` with what changed, what was fixed, and what was added. Versions follow [Keep a Changelog](https://keepachangelog.com) conventions.

---

## [1.0.0] — January 2026

### 🚀 Initial Launch

**Added**
- Core reference: Python (python-dotenv, django-environ, pydantic-settings)
- Django settings.py patterns with full type casting
- FastAPI + pydantic-settings with SecretStr
- React / Next.js — NEXT_PUBLIC_ prefix, build-time vs runtime explanation
- Vite — VITE_ prefix, import.meta.env, TypeScript types
- Rust — dotenvy + config crate + secrecy
- Framework prefix quick reference table (Next.js, Vite, CRA, Gatsby, Astro, SvelteKit)
- Alternatives comparison table (AWS Secrets Manager, Doppler, Infisical, Vault, GCP, Azure)
- Docker & Compose patterns — env_file, never baking secrets into images
- GitHub Actions — encrypted secrets, environment-scoped secrets, staged deploys
- 10 real troubleshooting cases
- Pre-deploy checklist (Security, Production, Team, Emergency)
- Copy button on all code blocks
- Mobile responsive navigation
- Full Open Graph + Twitter Card meta tags
- Google Search Console + sitemap.xml setup

---

## Upcoming

### [1.1.0] — February 2026 (Planned)
- [ ] `.env.example` generator tool (client-side, no backend)
- [ ] Client-side `.env` validator
- [ ] Secret scanner (pattern-based, nothing sent to server)
- [ ] SvelteKit PUBLIC_ prefix section

### [1.2.0] — March 2026 (Planned)
- [ ] Go (godotenv) section
- [ ] Expo / React Native section
- [ ] Kubernetes Secrets section
- [ ] Version badges per code section

### [2.0.0] — April 2026 (Planned)
- [ ] Rust CLI — `cargo install dotenv-space`
- [ ] Homebrew formula
- [ ] GitHub Discussions community launch

---

*Have a suggestion for the roadmap? [Open a Discussion](../../discussions/new?category=ideas).*
