# Contributing to dotenv.space

First — thank you. This site exists to be the most accurate, maintained `.env` reference for developers. Every fix, correction, and addition makes it more useful for thousands of developers.

This guide is intentionally short. Please read it before opening a PR.

---

## Table of Contents

- [What We Need Most](#what-we-need-most)
- [What We Don't Accept](#what-we-dont-accept)
- [How to Contribute](#how-to-contribute)
- [Branch & PR Conventions](#branch--pr-conventions)
- [Code Style for Examples](#code-style-for-examples)
- [Versioning Policy](#versioning-policy)
- [First-Time Contributors](#first-time-contributors)

---

## What We Need Most

In order of priority:

1. **Outdated code examples** — library APIs change. If an example broke for you, that's the most valuable fix.
2. **Missing edge cases** — something you hit in production that isn't covered.
3. **New framework sections** — Go, Laravel, SvelteKit, Bun, Expo/React Native.
4. **Troubleshooting cases** — real bugs you've debugged. The more specific the better.
5. **Typos and grammar** — small but appreciated.

---

## What We Don't Accept

To keep the site focused and trustworthy:

- ❌ **Promotional content** — no "use Tool X" without technical justification
- ❌ **Unverified examples** — all code must be tested against the version you cite
- ❌ **Framework wars** — we cover all stacks equally
- ❌ **Backend or database changes** — the site is and will stay static HTML
- ❌ **Design overhauls** — open a Discussion first before any visual changes
- ❌ **Adding dependencies** — no npm, no build tools, no frameworks in the site itself

---

## How to Contribute

### 🐛 Reporting a Bug or Outdated Content

Use the **Bug Report** issue template. Include:
- What's wrong (specific section / line)
- What the correct information is
- Which library version you tested against

[→ Open a bug report](../../issues/new?template=bug_report.md)

### 💡 Suggesting a New Section or Feature

**Open a Discussion before writing any code.** This saves everyone time — we can confirm the idea fits the site's scope before you invest hours on it.

[→ Start a discussion](../../discussions/new?category=ideas)

### 📝 Submitting a Fix Directly

For small, clear fixes (typo, broken code example, outdated version number) — no discussion needed. Just open a PR.

For anything larger than ~20 lines, open a Discussion or Issue first.

---

## Branch & PR Conventions

### Branch Names

```
fix/django-boolean-env-bug
add/sveltekit-section
update/nextjs-15-examples
docs/improve-rust-section
```

Pattern: `type/short-description`
Types: `fix` · `add` · `update` · `docs` · `chore`

### PR Title Format

```
fix: correct boolean env var example in Python section
add: SvelteKit PUBLIC_ prefix guide
update: Next.js examples for v15 App Router
docs: improve Rust dotenvy section
```

### PR Description

Every PR should answer three questions:

```markdown
## What does this change?
Brief description of what you changed and where.

## Why?
What was wrong or missing? Link to the issue if there is one.

## Tested against
- Library name + version (e.g. django-environ 0.11.2)
- Python/Node/Rust version
```

---

## Code Style for Examples

All code examples in the site follow these rules. Match them in your PR:

**Comments** explain the *why*, not the *what*:
```python
# ✅ Good — explains why
load_dotenv(dotenv_path=Path(__file__).resolve().parent / ".env")  # resolve path relative to this file, not CWD

# ❌ Bad — states the obvious
load_dotenv()  # loads the dotenv file
```

**Show both wrong and right** for common mistakes:
```python
# ❌ Wrong
DEBUG = os.getenv("DEBUG")  # "False" string is truthy!

# ✅ Correct
DEBUG = os.getenv("DEBUG", "False").lower() in ("true", "1", "yes")
```

**Version-stamp your examples** — add a comment with the version you tested:
```python
# Tested: pydantic-settings 2.4 · Python 3.12 · January 2026
```

---

## Versioning Policy

The site tracks which library versions each example was tested against. When you submit a PR:

- Add a comment to the relevant code block: `# Tested: library-name X.Y · Month Year`
- If you're updating an existing example, update this comment
- Don't add versions you haven't actually tested

---

## First-Time Contributors

Never contributed to open source before? This is a great first repo — it's a single HTML file, no build step, no complicated setup.

**Good first issues** are labeled [`good first issue`](../../issues?q=label%3A%22good+first+issue%22) — these are small, well-defined, and won't require deep knowledge of the codebase.

Steps:
1. Fork the repo
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/dotenv-space.git`
3. Create a branch: `git checkout -b fix/your-fix-name`
4. Make your change in `index.html`
5. Test it locally: `python -m http.server 8080`
6. Commit: `git commit -m "fix: description of what you fixed"`
7. Push: `git push origin fix/your-fix-name`
8. Open a PR on GitHub

That's it. The maintainer will review within a few days.

---

## Questions?

Open a [Discussion](../../discussions) — not an Issue. Issues are for bugs and tracked work. Discussions are for questions, ideas, and conversation.

---

*Thanks for making dotenv.space better for every developer who lands here at 2 AM trying to fix their secrets setup.* 🔐
