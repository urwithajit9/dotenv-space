
==================================================
FILE: ./blog/index.html
==================================================

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Blog — dotenv.space</title>
<meta name="description" content="Tutorials, best practices, and release notes on .env files, secret management, and the dotenv-space CLI.">
<link rel="canonical" href="https://dotenv.space/blog/">
<link rel="alternate" type="application/rss+xml" title="dotenv.space blog" href="/blog/feed.xml">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔐</text></svg>">
<link rel="stylesheet" href="/assets/css/base.css">
<style>
.post-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 36px 0;
}
@media (max-width: 640px) { .post-grid { grid-template-columns: 1fr; } }

.post-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 24px 24px;
  text-decoration: none;
  display: block;
  transition: border-color .2s, transform .2s;
  position: relative;
  overflow: hidden;
}
.post-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), transparent);
  opacity: 0;
  transition: opacity .2s;
}
.post-card:hover { border-color: rgba(0,229,255,.3); transform: translateY(-2px); text-decoration: none; }
.post-card:hover::before { opacity: 1; }

.post-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}
.post-date {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  color: var(--dim);
}
.post-tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 100px;
  background: rgba(0,229,255,.08);
  border: 1px solid rgba(0,229,255,.2);
  color: var(--accent);
}
.post-tag.cli { background: rgba(16,185,129,.08); border-color: rgba(16,185,129,.2); color: var(--accent3); }
.post-tag.security { background: rgba(244,63,94,.08); border-color: rgba(244,63,94,.2); color: #f87171; }

.post-card h2 {
  font-family: 'Syne', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -.02em;
  color: var(--text);
  margin-bottom: 10px;
  line-height: 1.3;
}
.post-card p {
  font-size: 13.5px;
  color: var(--muted);
  margin: 0;
  line-height: 1.6;
}

.post-card-featured {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: start;
}
@media (max-width: 640px) { .post-card-featured { grid-template-columns: 1fr; } }
.post-card-featured h2 { font-size: 1.4rem; }

.featured-badge {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  background: rgba(245,158,11,.1);
  border: 1px solid rgba(245,158,11,.25);
  color: var(--warn);
  padding: 3px 10px;
  border-radius: 100px;
  white-space: nowrap;
}

.rss-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--dim);
  text-decoration: none;
  border: 1px solid var(--border);
  padding: 5px 12px;
  border-radius: 6px;
  transition: all .2s;
}
.rss-link:hover { color: var(--warn); border-color: rgba(245,158,11,.3); text-decoration: none; }
</style>
<script async src="https://plausible.io/js/pa-MTFkM-GKbC_JAqVNzkJ49.js"></script>
<script>window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()</script>
</head>
<body>

<nav>
  <a class="nav-logo" href="/"><span>$</span> dotenv<span>.space</span></a>
  <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links" id="navLinks">
    <li><a href="/">Docs</a></li>
    <li><a href="/cli/">CLI</a></li>
    <li><a href="/blog/" class="active">Blog</a></li>
    <li><a href="https://github.com/urwithajit9/dotenv-space-cli" target="_blank" rel="noopener">GitHub ↗</a></li>
    <li><a href="/cli/installation.html" class="nav-cta">Install CLI →</a></li>
  </ul>
</nav>

<div class="page-hero">
  <div class="section-label">// Blog</div>
  <h1>Tutorials, best practices<br>&amp; release notes</h1>
  <p>Deep dives on .env files, secret management, the dotenv-space CLI, and keeping your dev workflow secure.</p>
  <a href="/blog/feed.xml" class="rss-link">📡 RSS Feed</a>
</div>

<main>

<section class="section" style="padding-top: 0; border-top: none;">
  <div class="post-grid">

    <!-- Featured post -->
    <a class="post-card post-card-featured" href="/blog/posts/2026-01-dotenv-space-launch.html">
      <div>
        <div class="post-meta">
          <span class="post-date">Jan 2026</span>
          <span class="post-tag cli">CLI</span>
          <span class="featured-badge">✦ Latest</span>
        </div>
        <h2>Introducing dotenv-space CLI — manage .env files from your terminal</h2>
        <p>We built a Rust CLI to do the tedious, error-prone parts of .env management automatically: scan for leaked secrets, validate completeness, and generate .env.example files in one command.</p>
      </div>
    </a>

    <!-- Post 2 -->
    <a class="post-card" href="/blog/posts/2026-02-secret-scanning-guide.html">
      <div class="post-meta">
        <span class="post-date">Feb 2026</span>
        <span class="post-tag security">Security</span>
      </div>
      <h2>How bots steal your API keys within minutes of a GitHub push</h2>
      <p>A technical breakdown of how automated secret scanners work, what patterns they look for, and exactly how fast they move — with real data.</p>
    </a>

    <!-- Placeholder posts (to be written) -->
    <a class="post-card" href="#" style="opacity:.5; pointer-events:none; cursor:default;">
      <div class="post-meta">
        <span class="post-date">Coming soon</span>
        <span class="post-tag">Guide</span>
      </div>
      <h2>The definitive guide to pre-commit hooks for secret prevention</h2>
      <p>Set up git-secrets, dotenv-space, and truffleHog in 10 minutes. Never commit a secret again.</p>
    </a>

    <a class="post-card" href="#" style="opacity:.5; pointer-events:none; cursor:default;">
      <div class="post-meta">
        <span class="post-date">Coming soon</span>
        <span class="post-tag cli">CLI</span>
      </div>
      <h2>Using dotenv-space in GitHub Actions to protect your team</h2>
      <p>A step-by-step CI workflow that validates .env.example completeness and scans for leaked secrets on every PR.</p>
    </a>

  </div>

  <div class="callout info">
    <span class="ci-icon">📝</span>
    <p>Want to write for dotenv.space? We're looking for guest posts on secret management, developer security practices, and real incident stories. <a href="https://github.com/urwithajit9/dotenv-space-cli/discussions" target="_blank" rel="noopener">Start a discussion on GitHub →</a></p>
  </div>
</section>

</main>

<footer>
  <div class="footer-logo"><span>$ </span>dotenv<span>.space</span></div>
  <div class="footer-links">
    <a href="/">Docs</a>
    <a href="/cli/">CLI</a>
    <a href="/blog/">Blog</a>
    <a href="https://github.com/urwithajit9/dotenv-space-cli" target="_blank" rel="noopener">GitHub ↗</a>
  </div>
  <p>dotenv.space · The complete environment variable reference</p>
</footer>

<script src="/assets/js/main.js"></script>
</body>
</html>

==================================================
FILE: ./blog/posts/2026-01-dotenv-space-launch.html
==================================================

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Introducing dotenv-space CLI — dotenv.space Blog</title>
<meta name="description" content="We built a Rust CLI to scan for leaked secrets, validate .env completeness, and generate .env.example files automatically.">
<link rel="canonical" href="https://dotenv.space/blog/posts/2026-01-dotenv-space-launch.html">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔐</text></svg>">
<link rel="stylesheet" href="/assets/css/base.css">
<style>
.post-container {
  max-width: 720px;
  margin: 0 auto;
  padding: 120px 24px 80px;
}
.post-header { margin-bottom: 52px; }
.post-meta-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.post-date {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--dim);
}
.post-tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  padding: 3px 10px;
  border-radius: 100px;
  background: rgba(16,185,129,.08);
  border: 1px solid rgba(16,185,129,.2);
  color: var(--accent3);
}
.post-header h1 {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -.03em;
  line-height: 1.1;
  margin-bottom: 20px;
}
.post-header .lead {
  font-size: 1.1rem;
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
}

/* Post body typography */
.post-body h2 {
  font-family: 'Syne', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -.02em;
  margin: 52px 0 16px;
  padding-top: 8px;
  border-top: 1px solid var(--border);
  color: var(--text);
}
.post-body h3 {
  font-family: 'Syne', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 36px 0 12px;
  color: var(--text);
}
.post-body p { color: var(--muted); line-height: 1.85; margin-bottom: 18px; }
.post-body p strong { color: var(--text); }
.post-body ul, .post-body ol { padding-left: 20px; margin-bottom: 18px; }
.post-body li { color: var(--muted); line-height: 1.8; margin-bottom: 4px; }
.post-body li strong { color: var(--text); }

.post-footer-nav {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-top: 48px;
  margin-top: 48px;
  border-top: 1px solid var(--border);
  flex-wrap: wrap;
}
.post-footer-nav a {
  font-size: 13.5px;
  color: var(--muted);
  text-decoration: none;
  transition: color .2s;
}
.post-footer-nav a:hover { color: var(--accent); }
</style>
<script async src="https://plausible.io/js/pa-MTFkM-GKbC_JAqVNzkJ49.js"></script>
<script>window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()</script>
</head>
<body>

<nav>
  <a class="nav-logo" href="/"><span>$</span> dotenv<span>.space</span></a>
  <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links" id="navLinks">
    <li><a href="/">Docs</a></li>
    <li><a href="/cli/">CLI</a></li>
    <li><a href="/blog/" class="active">Blog</a></li>
    <li><a href="https://github.com/urwithajit9/dotenv-space-cli" target="_blank" rel="noopener">GitHub ↗</a></li>
    <li><a href="/cli/installation.html" class="nav-cta">Install CLI →</a></li>
  </ul>
</nav>

<div class="post-container">

  <div class="breadcrumb">
    <a href="/">dotenv.space</a>
    <span>/</span>
    <a href="/blog/">blog</a>
    <span>/</span>
    2026-01
  </div>

  <header class="post-header">
    <div class="post-meta-row">
      <span class="post-date">January 2026</span>
      <span class="post-tag">CLI</span>
      <span class="post-tag" style="background:rgba(249,115,22,.08);border-color:rgba(249,115,22,.2);color:#fb923c;">Rust</span>
    </div>
    <h1>Introducing dotenv-space CLI</h1>
    <p class="lead">We built a Rust CLI to do the tedious, error-prone parts of .env management automatically. Here's why, and how it works.</p>
  </header>

  <div class="post-body">

    <p>dotenv.space started as a reference site — a place to look up exactly how environment variables work in Python, Next.js, Rust, Docker, and everything else. We wrote it because we kept making the same mistakes and couldn't find good, consolidated docs anywhere.</p>

    <p>But documentation only helps after you've already read it. What we really wanted was a tool that catches problems before they become incidents. So we built one.</p>

    <h2>The problem with .env management today</h2>

    <p>Most development workflows have exactly zero tooling around .env files. You create a <code class="ic">.env</code>, hope it's in your <code class="ic">.gitignore</code>, and trust your teammates to know which variables are required. This works until it doesn't.</p>

    <p>The failure modes are well-known and happen constantly:</p>

    <ul>
      <li>A secret gets committed to a public repo. Bots find it within minutes.</li>
      <li>A new env var is added to <code class="ic">.env.example</code> but teammates don't update their local <code class="ic">.env</code>. The app fails silently in an opaque way.</li>
      <li><code class="ic">.env.example</code> doesn't exist at all — new developers have no idea what variables to set up.</li>
      <li><code class="ic">.env.example</code> exists but is weeks out of date.</li>
    </ul>

    <p>All of these are automatable. That's what dotenv-space CLI does.</p>

    <h2>What it does</h2>

    <p>The CLI ships with four commands to start:</p>

    <h3>dotenv-space scan</h3>
    <p>Scans your <code class="ic">.env</code> values against patterns matching known secret formats — AWS access keys, OpenAI API keys, Stripe secret keys, GitHub personal access tokens, private key blocks, and more. If a value looks like a real secret (not a placeholder), it warns you before you commit anything.</p>

    <div class="code-wrap">
      <div class="code-bar"><span>Terminal</span><span class="lang-tag lang-sh">SHELL</span></div>
      <pre>$ dotenv-space scan
<span class="cw">  ✗ AWS_SECRET_ACCESS_KEY — matches AWS secret key pattern</span>
  <span class="cc">    Value starts with: wJalrXU...</span>
  Exit code: 1</pre>
    </div>

    <h3>dotenv-space check</h3>
    <p>Compares <code class="ic">.env</code> against <code class="ic">.env.example</code> and reports any keys that are in the example but missing from your local file. Exits non-zero, so it's safe to run in CI on every push.</p>

    <h3>dotenv-space example</h3>
    <p>Generates a <code class="ic">.env.example</code> from your <code class="ic">.env</code> automatically. Values are replaced with safe, descriptive placeholders. No more manually maintaining an example file — just run this after adding a new variable.</p>

    <h3>dotenv-space list</h3>
    <p>Lists all keys in your <code class="ic">.env</code> without printing any values. Safe for logs, safe to share.</p>

    <h2>Why Rust?</h2>

    <p>We chose Rust for three reasons that matter for a security tool:</p>

    <p><strong>Speed.</strong> The CLI starts in milliseconds. When you're using it as a pre-commit hook, startup time is everything. A slow hook is a hook people disable.</p>

    <p><strong>Single binary, no dependencies.</strong> Copy it to a CI runner and it runs. No pip install, no npm install, no version conflicts with the project's own dependencies. This matters enormously for CI environments.</p>

    <p><strong>Memory safety.</strong> Rust's ownership model eliminates buffer overflows and use-after-free by construction. For a tool that reads and processes potentially sensitive files, that's the right foundation.</p>

    <h2>Getting started</h2>

    <div class="code-wrap">
      <div class="code-bar"><span>Install</span><span class="lang-tag lang-sh">SHELL</span></div>
      <pre>curl -fsSL dotenv.space/install | sh</pre>
    </div>

    <div class="code-wrap">
      <div class="code-bar"><span>First run</span><span class="lang-tag lang-sh">SHELL</span></div>
      <pre><span class="cc"># In any project with a .env file:</span>
dotenv-space scan   <span class="cc"># check for secrets</span>
dotenv-space check  <span class="cc"># validate completeness</span></pre>
    </div>

    <p>Full installation guide for macOS, Linux, Windows, and Cargo: <a href="/cli/installation.html">dotenv.space/cli/installation</a></p>

    <h2>What's next</h2>

    <p>This is v0.1 — the foundation. The roadmap includes:</p>

    <ul>
      <li><strong>Sync support</strong> — push/pull variables between your local .env and a remote source (initially supporting standard environment variable conventions).</li>
      <li><strong>More secret patterns</strong> — expanding coverage of known API key formats.</li>
      <li><strong>Watch mode</strong> — <code class="ic">dotenv-space watch</code> for continuous validation during development.</li>
      <li><strong>Output formats</strong> — better JSON output and GitHub Actions annotations.</li>
    </ul>

    <p>The project is open source. If you have a use case we haven't covered, or spot a false positive in the scanner — <a href="https://github.com/urwithajit9/dotenv-space-cli/issues" target="_blank" rel="noopener">open an issue</a>. We'll look at it.</p>

    <div class="callout tip">
      <span class="ci-icon">✅</span>
      <p><strong>Try it now:</strong> <code class="ic">curl -fsSL dotenv.space/install | sh</code> — then run <code class="ic">dotenv-space scan</code> in your most active project. You might be surprised what it finds.</p>
    </div>

    <div class="post-footer-nav">
      <a href="/blog/">← All posts</a>
      <a href="/blog/posts/2026-02-secret-scanning-guide.html">Next: How bots steal API keys →</a>
    </div>

  </div>

</div>

<footer>
  <div class="footer-logo"><span>$ </span>dotenv<span>.space</span></div>
  <div class="footer-links">
    <a href="/">Docs</a>
    <a href="/cli/">CLI</a>
    <a href="/blog/">Blog</a>
    <a href="https://github.com/urwithajit9/dotenv-space-cli" target="_blank" rel="noopener">GitHub ↗</a>
  </div>
</footer>

<script src="/assets/js/main.js"></script>
</body>
</html>

==================================================
FILE: ./blog/posts/2026-01-launch.html
==================================================



==================================================
FILE: ./blog/posts/2026-02-secret-scanning-guide.html
==================================================

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>How bots steal your API keys within minutes — dotenv.space Blog</title>
<meta name="description" content="A technical breakdown of how automated secret scanners work, what patterns they look for, and exactly how fast they move after a GitHub push.">
<link rel="canonical" href="https://dotenv.space/blog/posts/2026-02-secret-scanning-guide.html">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔐</text></svg>">
<link rel="stylesheet" href="/assets/css/base.css">
<style>
.post-container { max-width: 720px; margin: 0 auto; padding: 120px 24px 80px; }
.post-header { margin-bottom: 52px; }
.post-meta-row { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
.post-date { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--dim); }
.post-tag { font-family: 'IBM Plex Mono', monospace; font-size: 10px; padding: 3px 10px; border-radius: 100px; background: rgba(244,63,94,.08); border: 1px solid rgba(244,63,94,.2); color: #f87171; }
.post-header h1 { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; letter-spacing: -.03em; line-height: 1.1; margin-bottom: 20px; }
.post-header .lead { font-size: 1.1rem; color: var(--muted); line-height: 1.7; margin: 0; }
.post-body h2 { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 700; letter-spacing: -.02em; margin: 52px 0 16px; padding-top: 8px; border-top: 1px solid var(--border); color: var(--text); }
.post-body h3 { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; margin: 36px 0 12px; color: var(--text); }
.post-body p { color: var(--muted); line-height: 1.85; margin-bottom: 18px; }
.post-body p strong { color: var(--text); }
.post-body ul, .post-body ol { padding-left: 20px; margin-bottom: 18px; }
.post-body li { color: var(--muted); line-height: 1.8; margin-bottom: 4px; }
.post-body li strong { color: var(--text); }
.post-footer-nav { display: flex; justify-content: space-between; gap: 20px; padding-top: 48px; margin-top: 48px; border-top: 1px solid var(--border); flex-wrap: wrap; }
.post-footer-nav a { font-size: 13.5px; color: var(--muted); text-decoration: none; transition: color .2s; }
.post-footer-nav a:hover { color: var(--accent); }

.timeline {
  border-left: 2px solid var(--border);
  padding-left: 24px;
  margin: 28px 0;
}
.tl-item { position: relative; margin-bottom: 24px; }
.tl-item::before {
  content: '';
  position: absolute;
  left: -30px; top: 6px;
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--danger);
  border: 2px solid var(--bg);
}
.tl-time { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--danger); margin-bottom: 4px; }
.tl-item h4 { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 4px; }
.tl-item p { font-size: 13.5px; margin: 0; }
</style>
<script async src="https://plausible.io/js/pa-MTFkM-GKbC_JAqVNzkJ49.js"></script>
<script>window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()</script>
</head>
<body>

<nav>
  <a class="nav-logo" href="/"><span>$</span> dotenv<span>.space</span></a>
  <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links" id="navLinks">
    <li><a href="/">Docs</a></li>
    <li><a href="/cli/">CLI</a></li>
    <li><a href="/blog/" class="active">Blog</a></li>
    <li><a href="https://github.com/urwithajit9/dotenv-space-cli" target="_blank" rel="noopener">GitHub ↗</a></li>
    <li><a href="/cli/installation.html" class="nav-cta">Install CLI →</a></li>
  </ul>
</nav>

<div class="post-container">

  <div class="breadcrumb">
    <a href="/">dotenv.space</a>
    <span>/</span>
    <a href="/blog/">blog</a>
    <span>/</span>
    2026-02
  </div>

  <header class="post-header">
    <div class="post-meta-row">
      <span class="post-date">February 2026</span>
      <span class="post-tag">Security</span>
    </div>
    <h1>How bots steal your API keys within minutes of a GitHub push</h1>
    <p class="lead">The incident in our founding story happened fast — shockingly fast. Here's a technical breakdown of exactly how these automated scanners work and why speed is everything.</p>
  </header>

  <div class="post-body">

    <p>When we say "bots find your key within minutes," people sometimes assume we're being dramatic for effect. We're not. The tooling that scans public GitHub repositories for secrets is sophisticated, fast, and constantly running. This post explains exactly how it works.</p>

    <h2>The attack timeline</h2>

    <p>Here's what actually happens after a secret is pushed to a public GitHub repository:</p>

    <div class="timeline">
      <div class="tl-item">
        <div class="tl-time">T+0:00</div>
        <h4>Push to GitHub</h4>
        <p>The commit lands. GitHub's own secret scanning triggers — but so do external bots monitoring the public event stream.</p>
      </div>
      <div class="tl-item">
        <div class="tl-time">T+0:30 – T+2:00</div>
        <h4>GitHub Events API picks it up</h4>
        <p>GitHub exposes a real-time event stream at <code class="ic">api.github.com/events</code>. Bots poll this continuously. New commits appear within seconds. The scanner downloads the diff and pattern-matches against hundreds of known secret formats.</p>
      </div>
      <div class="tl-item">
        <div class="tl-time">T+2:00 – T+5:00</div>
        <h4>Key is validated</h4>
        <p>The bot doesn't just collect the key — it validates it. For AWS, that means calling <code class="ic">sts.amazonaws.com/GetCallerIdentity</code>. For OpenAI, a <code class="ic">/models</code> endpoint. Live validation separates real keys from test values and false positives.</p>
      </div>
      <div class="tl-item">
        <div class="tl-time">T+5:00 – T+15:00</div>
        <h4>Exploitation begins</h4>
        <p>Valid keys are either sold, used immediately (spin up EC2 instances for crypto mining, make API calls at scale), or queued for later use. Deleting the file from the repo at this point does nothing — the key is already exfiltrated.</p>
      </div>
    </div>

    <p>This is not a theoretical scenario. Security researchers have published honeypot experiments where they push test keys to public repos and measure response time. The median time to first unauthorized use is under 4 minutes.</p>

    <h2>What patterns do the scanners look for?</h2>

    <p>The patterns are public and well-documented. Most secrets have consistent structure that makes them machine-detectable:</p>

    <div class="table-scroll">
      <table>
        <thead>
          <tr><th>Service</th><th>Pattern</th><th>Example prefix</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>AWS Access Key ID</strong></td><td><code class="ic">AKIA[0-9A-Z]{16}</code></td><td><code class="ic">AKIAIOSFODNN7EXAMPLE</code></td></tr>
          <tr><td><strong>AWS Secret Access Key</strong></td><td>40 char alphanumeric + symbols</td><td><code class="ic">wJalrXUtnFEMI/K7MDENG/</code></td></tr>
          <tr><td><strong>OpenAI API Key</strong></td><td><code class="ic">sk-proj-[A-Za-z0-9]{48}</code></td><td><code class="ic">sk-proj-xxxxxxxxxxx</code></td></tr>
          <tr><td><strong>Stripe Secret Key</strong></td><td><code class="ic">sk_live_[A-Za-z0-9]{24}</code></td><td><code class="ic">sk_live_xxxxxxxx</code></td></tr>
          <tr><td><strong>GitHub PAT (classic)</strong></td><td><code class="ic">ghp_[A-Za-z0-9]{36}</code></td><td><code class="ic">ghp_xxxxxxxxxxxx</code></td></tr>
          <tr><td><strong>Private Key Block</strong></td><td><code class="ic">-----BEGIN RSA PRIVATE KEY-----</code></td><td>Entire block</td></tr>
          <tr><td><strong>Slack Token</strong></td><td><code class="ic">xoxb-[0-9]{11}-[0-9A-Za-z]{24}</code></td><td><code class="ic">xoxb-xxxxx-xxxxx</code></td></tr>
        </tbody>
      </table>
    </div>

    <p>The scanners run these patterns against every line of every diff in the public event stream. It's simple pattern matching at scale — no AI required.</p>

    <h2>Why deleting the file doesn't help</h2>

    <p>The most common response to accidentally committing a secret is to delete the file and push again. This is dangerously insufficient for two reasons:</p>

    <p><strong>Git history.</strong> Even if the file is deleted in the next commit, the secret is still visible in <code class="ic">git log -p</code>. Anyone who clones the repo after your deletion commit can still see the secret in the diff history. You need to use <code class="ic">git filter-repo</code> to actually purge the history.</p>

    <p><strong>It's already too late.</strong> If the secret was valid and in a public repo for more than a few minutes, assume it was seen and recorded. Deleting it from the repo and rewriting history doesn't revoke a key from the systems that already have it. The only correct response is to rotate the key immediately — treat it as fully compromised.</p>

    <h2>The right prevention stack</h2>

    <p>Prevention is layered. No single tool catches everything, but the combination is very strong:</p>

    <ol>
      <li><strong>Pre-commit hook</strong> — runs before you can commit. Catches secrets before they ever leave your machine. Use <code class="ic">dotenv-space scan</code> or <code class="ic">git-secrets</code>.</li>
      <li><strong>GitHub Push Protection</strong> — server-side, blocks pushes containing known secret patterns. Free. Enable it: Settings → Code security → Push protection.</li>
      <li><strong>CI scan</strong> — runs <code class="ic">dotenv-space scan --ci</code> on every PR. Catches anything that slipped through locally.</li>
      <li><strong>Repository-wide secret scanning</strong> — GitHub scans all commits continuously and alerts you. Enable in repository Security settings.</li>
    </ol>

    <div class="code-wrap">
      <div class="code-bar"><span>Pre-commit hook setup</span><span class="lang-tag lang-sh">SHELL</span></div>
      <pre><span class="cc"># Install dotenv-space</span>
curl -fsSL dotenv.space/install | sh

<span class="cc"># Add to .pre-commit-config.yaml</span>
cat >> .pre-commit-config.yaml << 'EOF'
repos:
  - repo: local
    hooks:
      - id: dotenv-space-scan
        name: Scan .env for secrets
        language: system
        entry: dotenv-space scan
        files: \.env$
        pass_filenames: false
EOF

<span class="cc"># Install the hook</span>
pre-commit install</pre>
    </div>

    <p>If you do nothing else after reading this post, enable GitHub Push Protection on your repositories. It's free, it takes 30 seconds, and it would have prevented most of the incidents we know about.</p>

    <div class="callout danger">
      <span class="ci-icon">🚨</span>
      <p><strong>Already pushed a secret?</strong> (1) Rotate the key immediately — assume it's compromised. (2) Check your cloud provider's logs for unauthorized access. (3) Run <code class="ic">git filter-repo --path &lt;file&gt; --invert-paths</code> to purge history. (4) Force-push. The order matters: rotate first.</p>
    </div>

    <div class="post-footer-nav">
      <a href="/blog/posts/2026-01-dotenv-space-launch.html">← Introducing dotenv-space CLI</a>
      <a href="/blog/">All posts →</a>
    </div>

  </div>

</div>

<footer>
  <div class="footer-logo"><span>$ </span>dotenv<span>.space</span></div>
  <div class="footer-links">
    <a href="/">Docs</a>
    <a href="/cli/">CLI</a>
    <a href="/blog/">Blog</a>
    <a href="https://github.com/urwithajit9/dotenv-space-cli" target="_blank" rel="noopener">GitHub ↗</a>
  </div>
</footer>

<script src="/assets/js/main.js"></script>
</body>
</html>

==================================================
FILE: ./blog/template.html
==================================================



==================================================
FILE: ./cli/ci-cd.html
==================================================



==================================================
FILE: ./cli/commands.html
==================================================

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>dotenv-space CLI — Command Reference</title>
<meta name="description" content="Full command reference for the dotenv-space CLI — scan, check, example, list, and all flags.">
<link rel="canonical" href="https://dotenv.space/cli/commands.html">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔐</text></svg>">
<link rel="stylesheet" href="/assets/css/base.css">
<style>
.cmd-nav {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}
.cmd-nav a {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  background: var(--surface2);
  border: 1px solid var(--border);
  color: var(--muted);
  padding: 6px 14px;
  border-radius: 6px;
  text-decoration: none;
  transition: all .15s;
}
.cmd-nav a:hover { border-color: var(--accent3); color: var(--accent3); }

.cmd-block {
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent3);
  border-radius: var(--radius);
  padding: 28px 28px 24px;
  margin: 36px 0;
  scroll-margin-top: 80px;
}
.cmd-block h3 {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--accent3);
  margin: 0 0 6px;
}
.cmd-block .cmd-desc { color: var(--text); font-size: 15px; margin-bottom: 20px; font-weight: 500; }
.cmd-block p { font-size: 14px; }

.flag-table { width: 100%; border-collapse: collapse; margin: 16px 0 0; font-size: 13.5px; }
.flag-table th {
  background: rgba(255,255,255,.03);
  color: var(--dim);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 8px 14px;
  text-align: left;
  border: 1px solid var(--border);
  font-family: 'IBM Plex Mono', monospace;
}
.flag-table td { padding: 10px 14px; border: 1px solid var(--border); color: var(--muted); vertical-align: top; }
.flag-table td:first-child { font-family: 'IBM Plex Mono', monospace; color: var(--accent); font-size: 12.5px; white-space: nowrap; }
.flag-table td:last-child { color: var(--dim); font-size: 12px; }
</style>
<script async src="https://plausible.io/js/pa-MTFkM-GKbC_JAqVNzkJ49.js"></script>
<script>window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()</script>
</head>
<body>

<nav>
  <a class="nav-logo" href="/"><span>$</span> dotenv<span>.space</span></a>
  <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links" id="navLinks">
    <li><a href="/">Docs</a></li>
    <li><a href="/cli/" class="active">CLI</a></li>
    <li><a href="/cli/installation.html">Install</a></li>
    <li><a href="/cli/commands.html">Commands</a></li>
    <li><a href="/blog/">Blog</a></li>
    <li><a href="https://github.com/urwithajit9/dotenv-space-cli" target="_blank" rel="noopener">GitHub ↗</a></li>
  </ul>
</nav>

<div class="page-hero">
  <div class="breadcrumb">
    <a href="/">dotenv.space</a>
    <span>/</span>
    <a href="/cli/">cli</a>
    <span>/</span>
    commands
  </div>
  <div class="section-label">// Command Reference</div>
  <h1>All Commands &amp; Flags</h1>
  <p>Complete reference for every dotenv-space command. Use <code class="ic">dotenv-space --help</code> or <code class="ic">dotenv-space &lt;command&gt; --help</code> for inline help.</p>
</div>

<main>

<section class="section" style="padding-top: 0; border-top: none;">

  <!-- Quick nav -->
  <div class="cmd-nav">
    <a href="#global">Global flags</a>
    <a href="#scan">scan</a>
    <a href="#check">check</a>
    <a href="#example">example</a>
    <a href="#list">list</a>
  </div>

  <!-- Global -->
  <div class="cmd-block" id="global">
    <h3>dotenv-space [global flags]</h3>
    <p class="cmd-desc">Global flags that work with every command.</p>

    <table class="flag-table">
      <thead><tr><th>Flag</th><th>Description</th><th>Default</th></tr></thead>
      <tbody>
        <tr>
          <td>--file &lt;path&gt;<br>-f &lt;path&gt;</td>
          <td>Path to .env file. Defaults to <code class="ic">.env</code> in the current directory.</td>
          <td>.env</td>
        </tr>
        <tr>
          <td>--version<br>-V</td>
          <td>Print version and exit.</td>
          <td>—</td>
        </tr>
        <tr>
          <td>--help<br>-h</td>
          <td>Print help for the command.</td>
          <td>—</td>
        </tr>
        <tr>
          <td>--quiet<br>-q</td>
          <td>Suppress all output except errors. Useful in scripts.</td>
          <td>false</td>
        </tr>
        <tr>
          <td>--json</td>
          <td>Output results as JSON (machine-readable). Useful for CI pipelines and integrations.</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- scan -->
  <div class="cmd-block" id="scan">
    <h3>dotenv-space scan</h3>
    <p class="cmd-desc">Scan a .env file for values that look like real secrets.</p>

    <p>Checks each value against a set of patterns matching known secret formats — AWS keys, OpenAI API keys, Stripe keys, GitHub tokens, private keys, and more. Exits non-zero if any matches are found.</p>

    <div class="code-wrap">
      <div class="code-bar"><span>Examples</span><span class="lang-tag lang-sh">SHELL</span></div>
      <pre><span class="cc"># Scan .env in current directory</span>
dotenv-space scan

<span class="cc"># Scan a specific file</span>
dotenv-space scan --file ./backend/.env

<span class="cc"># CI mode — non-zero exit if any secrets found</span>
dotenv-space scan --ci

<span class="cc"># Allow specific patterns (e.g. intentional test key)</span>
dotenv-space scan --allow STRIPE_SECRET_KEY

<span class="cc"># Output as JSON for parsing</span>
dotenv-space scan --json</pre>
    </div>

    <table class="flag-table">
      <thead><tr><th>Flag</th><th>Description</th><th>Default</th></tr></thead>
      <tbody>
        <tr>
          <td>--ci</td>
          <td>Exit code 1 if any secrets detected. Suitable for CI pipelines.</td>
          <td>false</td>
        </tr>
        <tr>
          <td>--strict</td>
          <td>Treat warnings as errors. More aggressive scanning.</td>
          <td>false</td>
        </tr>
        <tr>
          <td>--allow &lt;KEY&gt;</td>
          <td>Allow a specific key to match without failing. Repeatable: <code class="ic">--allow KEY1 --allow KEY2</code>.</td>
          <td>—</td>
        </tr>
        <tr>
          <td>--json</td>
          <td>Output results as JSON array with key, severity, and pattern matched.</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <div class="callout info" style="margin-top: 20px;">
      <span class="ci-icon">💡</span>
      <p><strong>Exit codes:</strong> <code class="ic">0</code> = clean, <code class="ic">1</code> = secrets found (in --ci mode), <code class="ic">2</code> = file not found or parse error.</p>
    </div>
  </div>

  <!-- check -->
  <div class="cmd-block" id="check">
    <h3>dotenv-space check</h3>
    <p class="cmd-desc">Verify your .env is complete relative to .env.example.</p>

    <p>Reads both <code class="ic">.env</code> and <code class="ic">.env.example</code>, then reports any keys that are in the example but missing from your local .env. Also optionally flags extra keys that aren't in the example. This is the command to run in CI to catch configuration drift.</p>

    <div class="code-wrap">
      <div class="code-bar"><span>Examples</span><span class="lang-tag lang-sh">SHELL</span></div>
      <pre><span class="cc"># Basic check</span>
dotenv-space check

<span class="cc"># Specify custom example file</span>
dotenv-space check --example .env.example.prod

<span class="cc"># Also flag keys in .env that aren't in .env.example</span>
dotenv-space check --strict

<span class="cc"># Check only .env.example structure (no .env needed)</span>
dotenv-space check --example-only</pre>
    </div>

    <table class="flag-table">
      <thead><tr><th>Flag</th><th>Description</th><th>Default</th></tr></thead>
      <tbody>
        <tr>
          <td>--example &lt;path&gt;</td>
          <td>Path to the example file. Defaults to <code class="ic">.env.example</code>.</td>
          <td>.env.example</td>
        </tr>
        <tr>
          <td>--strict</td>
          <td>Also report keys present in .env but absent from .env.example (undocumented vars).</td>
          <td>false</td>
        </tr>
        <tr>
          <td>--example-only</td>
          <td>Validate .env.example structure only — useful in CI where .env isn't committed.</td>
          <td>false</td>
        </tr>
        <tr>
          <td>--json</td>
          <td>Output missing/extra keys as JSON.</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- example -->
  <div class="cmd-block" id="example">
    <h3>dotenv-space example</h3>
    <p class="cmd-desc">Generate a .env.example from your .env file.</p>

    <p>Reads your <code class="ic">.env</code> and produces a <code class="ic">.env.example</code> with the same keys but values replaced by safe, descriptive placeholders. Preserves comments. Won't overwrite an existing .env.example unless you pass <code class="ic">--force</code>.</p>

    <div class="code-wrap">
      <div class="code-bar"><span>Examples</span><span class="lang-tag lang-sh">SHELL</span></div>
      <pre><span class="cc"># Generate .env.example in current directory</span>
dotenv-space example

<span class="cc"># Output to specific file</span>
dotenv-space example --output .env.example

<span class="cc"># Overwrite existing .env.example</span>
dotenv-space example --force

<span class="cc"># Preview without writing</span>
dotenv-space example --dry-run</pre>
    </div>

    <p>Input <code class="ic">.env</code>:</p>
    <div class="code-wrap">
      <div class="code-bar"><span>.env (before)</span><span class="lang-tag lang-env">ENV</span></div>
      <pre><span class="ck">SECRET_KEY</span>=<span class="cv">super-real-secret-key-abc123</span>
<span class="ck">DATABASE_URL</span>=<span class="cv">postgresql://user:pass@localhost:5432/mydb</span>
<span class="ck">OPENAI_API_KEY</span>=<span class="cv">sk-proj-xxxxxxxxxxx</span></pre>
    </div>

    <p>Generated <code class="ic">.env.example</code>:</p>
    <div class="code-wrap">
      <div class="code-bar"><span>.env.example (generated)</span><span class="lang-tag lang-env">ENV</span></div>
      <pre><span class="ck">SECRET_KEY</span>=<span class="cv">your-secret-key-here</span>
<span class="ck">DATABASE_URL</span>=<span class="cv">postgresql://user:password@localhost:5432/dbname</span>
<span class="ck">OPENAI_API_KEY</span>=<span class="cv">sk-proj-your-openai-api-key</span></pre>
    </div>

    <table class="flag-table">
      <thead><tr><th>Flag</th><th>Description</th><th>Default</th></tr></thead>
      <tbody>
        <tr>
          <td>--output &lt;path&gt;<br>-o &lt;path&gt;</td>
          <td>Path to write the generated file.</td>
          <td>.env.example</td>
        </tr>
        <tr>
          <td>--force</td>
          <td>Overwrite existing .env.example without prompting.</td>
          <td>false</td>
        </tr>
        <tr>
          <td>--dry-run</td>
          <td>Print the generated output to stdout without writing any file.</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- list -->
  <div class="cmd-block" id="list">
    <h3>dotenv-space list</h3>
    <p class="cmd-desc">List all keys in a .env file without exposing values.</p>

    <p>Useful for auditing what variables are defined, or for scripting. Safe to share the output — no values are printed.</p>

    <div class="code-wrap">
      <div class="code-bar"><span>Examples</span><span class="lang-tag lang-sh">SHELL</span></div>
      <pre><span class="cc"># List all keys</span>
dotenv-space list

<span class="cc"># → DATABASE_URL</span>
<span class="cc"># → SECRET_KEY</span>
<span class="cc"># → OPENAI_API_KEY</span>

<span class="cc"># Output as newline-separated list (for shell scripting)</span>
dotenv-space list --plain

<span class="cc"># Output as JSON array</span>
dotenv-space list --json</pre>
    </div>

    <table class="flag-table">
      <thead><tr><th>Flag</th><th>Description</th><th>Default</th></tr></thead>
      <tbody>
        <tr>
          <td>--plain</td>
          <td>Output one key per line with no formatting. Pipe-friendly.</td>
          <td>false</td>
        </tr>
        <tr>
          <td>--json</td>
          <td>Output as a JSON array of key names.</td>
          <td>false</td>
        </tr>
        <tr>
          <td>--count</td>
          <td>Print only the number of keys.</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>

</section>

<!-- ═══ ENV VARS ═══ -->
<section class="section" id="envvars">
  <div class="section-label">// Configuration</div>
  <h2>Environment variables</h2>

  <p>The CLI can also be configured via environment variables, useful for CI where you can't pass flags directly.</p>

  <div class="table-scroll">
    <table>
      <thead>
        <tr><th>Variable</th><th>Equivalent Flag</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>DOTENV_SPACE_FILE</strong></td><td><code class="ic">--file</code></td><td><code class="ic">backend/.env</code></td></tr>
        <tr><td><strong>DOTENV_SPACE_STRICT</strong></td><td><code class="ic">--strict</code></td><td><code class="ic">true</code></td></tr>
        <tr><td><strong>DOTENV_SPACE_JSON</strong></td><td><code class="ic">--json</code></td><td><code class="ic">true</code></td></tr>
        <tr><td><strong>DOTENV_SPACE_QUIET</strong></td><td><code class="ic">--quiet</code></td><td><code class="ic">true</code></td></tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section" id="nav-next">
  <div class="g2">
    <a href="/cli/installation.html" style="text-decoration:none;">
      <div class="card" style="cursor:pointer; transition: border-color .2s;" onmouseover="this.style.borderColor='rgba(16,185,129,.4)'" onmouseout="this.style.borderColor=''">
        <h4>⬅ Installation</h4>
        <p>Install the CLI on macOS, Linux, or Windows.</p>
      </div>
    </a>
    <a href="https://github.com/urwithajit9/dotenv-space-cli/issues" target="_blank" rel="noopener" style="text-decoration:none;">
      <div class="card" style="cursor:pointer; transition: border-color .2s;" onmouseover="this.style.borderColor='rgba(16,185,129,.4)'" onmouseout="this.style.borderColor=''">
        <h4>🐛 Missing a command?</h4>
        <p>Open an issue or PR on GitHub. This CLI is actively developed.</p>
      </div>
    </a>
  </div>
</section>

</main>

<footer>
  <div class="footer-logo"><span>$ </span>dotenv<span>.space</span></div>
  <div class="footer-links">
    <a href="/">Docs</a>
    <a href="/cli/">CLI</a>
    <a href="/cli/installation.html">Install</a>
    <a href="/cli/commands.html">Commands</a>
    <a href="/blog/">Blog</a>
    <a href="https://github.com/urwithajit9/dotenv-space-cli" target="_blank" rel="noopener">GitHub ↗</a>
  </div>
  <p>dotenv-space CLI · Open Source · Written in Rust</p>
</footer>

<script src="/assets/js/main.js"></script>
</body>
</html>

==================================================
FILE: ./cli/examples.html
==================================================



==================================================
FILE: ./cli/index.html
==================================================

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>dotenv-space CLI — Validate, Scan &amp; Migrate .env Files</title>
<meta name="description" content="The dotenv-space CLI: validate .env files, scan for secrets, convert formats, and migrate to AWS, GitHub Actions, Doppler. Built in Rust.">
<link rel="canonical" href="https://dotenv.space/cli/">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦀</text></svg>">
<style>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');
:root{--bg:#060811;--surface:#0f1422;--surface2:#151929;--border:#1e253a;--accent:#00e5ff;--accent3:#10b981;--text:#e8edf7;--muted:#8892a4;--dim:#5a647a;--radius:10px;--purple:#a78bfa;--purple-bg:rgba(124,58,237,.15);--purple-border:rgba(124,58,237,.35)}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);line-height:1.7;font-size:16px;overflow-x:hidden}
/* NAV */
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(6,8,17,.88);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);padding:0 40px;height:60px;display:flex;align-items:center;justify-content:space-between}
.nav-logo{font-family:'IBM Plex Mono',monospace;font-size:1rem;color:var(--accent);text-decoration:none;font-weight:500;letter-spacing:-.02em}
.nav-logo span{color:var(--muted)}
.nav-links{display:flex;gap:22px;list-style:none;align-items:center}
.nav-links a{color:var(--muted);text-decoration:none;font-size:13px;font-weight:500;transition:color .2s}
.nav-links a:hover,.nav-active{color:var(--accent)!important}
.nav-cta{background:var(--accent)!important;color:#000!important;padding:6px 15px;border-radius:6px;font-weight:700!important;font-size:12.5px!important}
.nav-toggle{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px}
.nav-toggle span{display:block;width:22px;height:2px;background:var(--muted);border-radius:2px}
@media(max-width:768px){nav{padding:0 20px}.nav-toggle{display:flex}.nav-links{display:none;position:absolute;top:60px;left:0;right:0;background:rgba(6,8,17,.97);border-bottom:1px solid var(--border);flex-direction:column;padding:16px 24px 20px;gap:4px}.nav-links.open{display:flex}.nav-links a{padding:10px 0;border-bottom:1px solid var(--border)}.nav-links li:last-child a{border-bottom:none}}
/* HERO */
.hero{min-height:92vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:100px 24px 56px;position:relative;overflow:hidden}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(124,58,237,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,.05) 1px,transparent 1px);background-size:60px 60px;mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)}
.hero-glow{position:absolute;width:700px;height:500px;background:radial-gradient(ellipse,rgba(124,58,237,.09) 0%,transparent 65%);top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:var(--purple-bg);border:1px solid var(--purple-border);color:var(--purple);font-family:'IBM Plex Mono',monospace;font-size:12px;padding:6px 14px;border-radius:100px;margin-bottom:32px}
.hero-badge::before{content:'';width:7px;height:7px;background:var(--purple);border-radius:50%;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
.hero h1{font-family:'Syne',sans-serif;font-size:clamp(2.8rem,7vw,5.5rem);font-weight:800;line-height:.95;letter-spacing:-.04em;margin-bottom:22px}
.hero h1 em{font-style:normal;color:var(--purple)}
.hero h1 .mono-sub{display:block;font-family:'IBM Plex Mono',monospace;font-size:.34em;color:var(--muted);font-weight:400;letter-spacing:.02em;margin-top:16px;line-height:1.6}
.hero-sub{font-size:clamp(1rem,2vw,1.15rem);color:var(--muted);max-width:560px;margin:0 auto 36px;font-weight:300;line-height:1.65}
/* install box */
.install-box{display:inline-flex;align-items:center;background:#060b14;border:1px solid var(--purple-border);border-radius:10px;overflow:hidden;font-family:'IBM Plex Mono',monospace;margin-bottom:28px;max-width:100%}
.i-prefix{padding:13px 16px;background:var(--purple-bg);color:var(--purple);border-right:1px solid var(--purple-border);font-size:11px;letter-spacing:.07em;white-space:nowrap}
.i-cmd{padding:13px 20px;color:var(--accent);font-size:13.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.i-copy{padding:13px 14px;background:transparent;border:none;border-left:1px solid rgba(124,58,237,.2);color:var(--dim);cursor:pointer;font-family:'IBM Plex Mono',monospace;font-size:11px;transition:color .2s,background .2s;white-space:nowrap}
.i-copy:hover{color:var(--accent);background:rgba(0,229,255,.06)}
.i-copy.copied{color:var(--accent3)}
/* action buttons */
.hero-actions{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-bottom:0}
.btn-p{background:var(--accent);color:#000;font-weight:700;font-size:14px;padding:12px 26px;border-radius:8px;text-decoration:none;font-family:'Syne',sans-serif;transition:opacity .2s,transform .2s}
.btn-p:hover{opacity:.87;transform:translateY(-1px)}
.btn-ghost{background:var(--surface2);color:var(--text);font-size:14px;padding:12px 26px;border-radius:8px;text-decoration:none;border:1px solid var(--border);font-weight:500;transition:border-color .2s,transform .2s}
.btn-ghost:hover{border-color:var(--accent);transform:translateY(-1px)}
.btn-purple{background:var(--purple-bg);color:var(--purple);font-weight:600;font-size:14px;padding:12px 26px;border-radius:8px;text-decoration:none;border:1px solid var(--purple-border);font-family:'IBM Plex Mono',monospace;transition:all .2s}
.btn-purple:hover{background:rgba(124,58,237,.28);transform:translateY(-1px)}
/* MAIN */
main{max-width:960px;margin:0 auto;padding:0 24px}
.section{padding:80px 0;border-top:1px solid var(--border)}
.section-label{font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--purple);text-transform:uppercase;letter-spacing:.15em;margin-bottom:12px}
h2{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,4vw,2.6rem);font-weight:700;letter-spacing:-.03em;line-height:1.1;margin-bottom:18px}
h3{font-family:'Syne',sans-serif;font-size:1.15rem;font-weight:700;margin:36px 0 12px;color:var(--text)}
p{color:var(--muted);margin-bottom:16px;line-height:1.8}
p strong{color:var(--text);font-weight:500}
a{color:var(--accent);text-decoration:none}
a:hover{text-decoration:underline}
/* cmd cards */
.cmd-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(278px,1fr));gap:14px;margin:30px 0}
.cmd-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:22px;text-decoration:none;display:block;position:relative;overflow:hidden;transition:border-color .2s,transform .2s}
.cmd-card:hover{border-color:rgba(124,58,237,.45);transform:translateY(-2px);text-decoration:none}
.cmd-tag{font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:500;color:var(--purple);margin-bottom:10px;display:flex;align-items:center;gap:7px}
.cmd-icon{font-size:15px}
.cmd-card h4{font-family:'Syne',sans-serif;font-size:1rem;font-weight:700;color:var(--text);margin-bottom:7px}
.cmd-card p{color:var(--muted);font-size:13.5px;margin:0;line-height:1.55}
.cmd-badge{position:absolute;top:13px;right:13px;font-family:'IBM Plex Mono',monospace;font-size:9.5px;padding:2px 8px;border-radius:100px;background:rgba(16,185,129,.1);color:#34d399;border:1px solid rgba(16,185,129,.2)}
.cmd-badge.feat{background:var(--purple-bg);color:var(--purple);border-color:var(--purple-border)}
/* quick steps */
.quick-steps{display:flex;flex-direction:column;gap:0;margin:28px 0}
.qstep{display:flex;gap:20px;padding:22px 0;border-bottom:1px solid var(--border)}
.qstep:last-child{border-bottom:none}
.qnum{width:34px;height:34px;border-radius:50%;background:var(--purple-bg);border:1px solid var(--purple-border);color:var(--purple);font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:500;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:3px}
.qbody h4{font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;margin-bottom:8px;color:var(--text)}
.qbody p{font-size:14px;margin-bottom:10px}
.qbody p:last-child{margin-bottom:0}
/* code */
.code-wrap{margin:18px 0}
.code-bar{display:flex;align-items:center;justify-content:space-between;background:var(--surface2);border:1px solid var(--border);border-bottom:none;border-radius:var(--radius) var(--radius) 0 0;padding:8px 17px;font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--dim)}
.lang-sh{padding:2px 8px;border-radius:4px;font-size:10px;font-weight:500;background:rgba(245,158,11,.12);color:#fbbf24;border:1px solid rgba(245,158,11,.25)}
.lang-yml{padding:2px 8px;border-radius:4px;font-size:10px;font-weight:500;background:rgba(168,85,247,.12);color:#c084fc;border:1px solid rgba(168,85,247,.25)}
.lang-toml{padding:2px 8px;border-radius:4px;font-size:10px;font-weight:500;background:rgba(249,115,22,.12);color:#fb923c;border:1px solid rgba(249,115,22,.25)}
pre{background:#060b14;border:1px solid var(--border);border-radius:0 0 var(--radius) var(--radius);padding:20px 22px;overflow-x:auto;font-family:'IBM Plex Mono',monospace;font-size:13.5px;line-height:1.75}
.ic{font-family:'IBM Plex Mono',monospace;font-size:.82em;background:var(--surface2);border:1px solid var(--border);padding:1px 6px;border-radius:4px;color:var(--accent3)}
.ck{color:#79c0ff}.cv{color:#a5f3fc}.cc{color:#4a5568}.cs{color:#86efac}.cw{color:#f87171}.cf{color:#c4b5fd}
/* callouts */
.callout{border-radius:var(--radius);padding:17px 20px;margin:22px 0;display:flex;gap:13px;font-size:14px}
.callout p{margin:0;font-size:14px}
.ci-icon{font-size:17px;flex-shrink:0}
.info{background:rgba(0,229,255,.06);border:1px solid rgba(0,229,255,.15)}
.tip{background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.15)}
/* flags */
.flags-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:22px 0}
@media(max-width:680px){.flags-row{grid-template-columns:1fr}}
.flag-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:18px}
.flag-name{font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--purple);margin-bottom:8px}
.flag-card p{font-size:13px;margin:0 0 10px;color:var(--muted)}
.flag-cmd{font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--accent3);background:var(--surface2);border:1px solid var(--border);padding:4px 8px;border-radius:4px;display:block;word-break:break-all;line-height:1.5}
/* copy btn */
.copy-btn{display:flex;align-items:center;gap:5px;background:transparent;border:1px solid var(--border);border-radius:5px;color:var(--dim);font-family:'IBM Plex Mono',monospace;font-size:11px;padding:3px 10px;cursor:pointer;transition:all .18s;flex-shrink:0}
.copy-btn:hover{border-color:var(--accent);color:var(--accent);background:rgba(0,229,255,.06)}
.copy-btn.copied{border-color:var(--accent3);color:var(--accent3)}
/* nav cards */
.nav-cards{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;padding:40px 0}
@media(max-width:680px){.nav-cards{grid-template-columns:1fr}}
.nav-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:22px;text-decoration:none;display:block;transition:border-color .2s}
.nav-card:hover{border-color:rgba(0,229,255,.35);text-decoration:none}
.nc-label{font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--accent);margin-bottom:8px;text-transform:uppercase;letter-spacing:.1em}
.nc-title{font-family:'Syne',sans-serif;font-weight:700;color:var(--text);margin-bottom:6px;font-size:1rem}
.nc-desc{color:var(--muted);font-size:13px}
/* footer */
footer{border-top:1px solid var(--border);padding:56px 24px;text-align:center}
.footer-logo{font-family:'IBM Plex Mono',monospace;font-size:1.1rem;color:var(--accent);margin-bottom:16px}
.footer-logo span{color:var(--dim)}
footer p{color:var(--dim);font-size:13.5px;margin:0}
.footer-links{display:flex;gap:24px;justify-content:center;margin:18px 0;flex-wrap:wrap}
.footer-links a{color:var(--dim);font-size:13px;transition:color .2s}
.footer-links a:hover{color:var(--accent);text-decoration:none}
.footer-sep{width:1px;height:15px;background:var(--border);align-self:center;display:inline-block}
.hr{border:none;border-top:1px solid var(--border);margin:40px 0}
</style>
<script async src="https://plausible.io/js/pa-MTFkM-GKbC_JAqVNzkJ49.js"></script>
<script>window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()</script>
</head>
<body>

<nav>
  <a class="nav-logo" href="/"><span>$</span> dotenv<span>.space</span></a>
  <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links" id="navLinks">
    <li><a href="/">Reference</a></li>
    <li><a href="/cli/" class="nav-active">CLI</a></li>
    <li><a href="/cli/installation.html">Install</a></li>
    <li><a href="/cli/commands.html">Commands</a></li>
    <li><a href="/blog/">Blog</a></li>
    <li><a href="https://github.com/urwithajit9/dotenv-space" target="_blank" rel="noopener">GitHub</a></li>
    <li><a href="/cli/installation.html" class="nav-cta">Get CLI →</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-grid"></div>
  <div class="hero-glow"></div>
  <div class="hero-badge">🦀 dotenv-space CLI · v0.2.2 · MIT License</div>
  <h1>
    Stop <em>Reading</em><br>About .env.<br>Automate It.
    <span class="mono-sub">init · validate · scan · convert · migrate · backup</span>
  </h1>
  <p class="hero-sub">
    A Rust-powered CLI that enforces the rules from the reference guide. Catch leaked secrets before bots do, validate configs before deploys break, and push to cloud managers in one command.
  </p>
  <div class="install-box">
    <span class="i-prefix">curl | bash</span>
    <span class="i-cmd" id="iCmd">curl -sSL https://dotenv.space/install.sh | bash</span>
    <button class="i-copy" id="iCopy">copy</button>
  </div>
  <div class="hero-actions">
    <a href="/cli/installation.html" class="btn-p">Installation Guide →</a>
    <a href="/cli/commands.html" class="btn-purple">Command Reference</a>
    <a href="https://github.com/urwithajit9/dotenv-space" class="btn-ghost" target="_blank" rel="noopener">GitHub ↗</a>
  </div>
</section>

<main>

<!-- COMMANDS -->
<section class="section" id="commands">
  <div class="section-label">// What It Does</div>
  <h2>10 Commands. Every .env Problem Solved.</h2>
  <p>Core commands work out of the box. Extended commands require <code class="ic">--features migrate</code> or <code class="ic">--features full</code> when building from source. The install script includes everything.</p>

  <div class="cmd-grid">
    <a href="/cli/commands.html#init" class="cmd-card">
      <div class="cmd-tag"><span class="cmd-icon">🚀</span> init</div>
      <h4>Initialize Project</h4>
      <p>Interactive setup generating <code class="ic">.env.example</code> for Python, Node.js, Rust, Go, or PHP with sensible variable defaults.</p>
      <span class="cmd-badge">core</span>
    </a>
    <a href="/cli/commands.html#validate" class="cmd-card">
      <div class="cmd-tag"><span class="cmd-icon">✅</span> validate</div>
      <h4>Validate Config</h4>
      <p>Catches placeholders, weak secrets, boolean string traps (<code class="ic">"False"</code> is truthy!), and localhost in production.</p>
      <span class="cmd-badge">core</span>
    </a>
    <a href="/cli/commands.html#scan" class="cmd-card">
      <div class="cmd-tag"><span class="cmd-icon">🔍</span> scan</div>
      <h4>Scan for Secrets</h4>
      <p>Detects 8+ secret types using pattern matching and entropy analysis. SARIF output for GitHub Security tab.</p>
      <span class="cmd-badge">core</span>
    </a>
    <a href="/cli/commands.html#diff" class="cmd-card">
      <div class="cmd-tag"><span class="cmd-icon">📋</span> diff</div>
      <h4>Diff Files</h4>
      <p>Compare <code class="ic">.env</code> vs <code class="ic">.env.example</code> instantly. Never let a teammate's new variable silently break other setups.</p>
      <span class="cmd-badge">core</span>
    </a>
    <a href="/cli/commands.html#convert" class="cmd-card">
      <div class="cmd-tag"><span class="cmd-icon">🔄</span> convert</div>
      <h4>Convert Formats</h4>
      <p>Transform to 14+ formats: JSON, YAML, Docker, Kubernetes, Terraform, GitHub Actions, AWS, GCP, Azure, Heroku, Vercel, Railway, Doppler.</p>
      <span class="cmd-badge">core</span>
    </a>
    <a href="/cli/commands.html#sync" class="cmd-card">
      <div class="cmd-tag"><span class="cmd-icon">🔃</span> sync</div>
      <h4>Sync Files</h4>
      <p>Bidirectional sync between <code class="ic">.env</code> and <code class="ic">.env.example</code>. Keep documentation aligned with what you actually use.</p>
      <span class="cmd-badge">core</span>
    </a>
    <a href="/cli/commands.html#migrate" class="cmd-card">
      <div class="cmd-tag"><span class="cmd-icon">☁️</span> migrate</div>
      <h4>Migrate to Cloud</h4>
      <p>Push secrets directly to GitHub Actions, AWS Secrets Manager, Doppler, or Infisical. Dry-run mode so nothing surprises you.</p>
      <span class="cmd-badge feat">--features migrate</span>
    </a>
    <a href="/cli/commands.html#doctor" class="cmd-card">
      <div class="cmd-tag"><span class="cmd-icon">🩺</span> doctor</div>
      <h4>Diagnose Issues</h4>
      <p>Health check for your project — file permissions, gitignore status, Git tracking, and project structure detection.</p>
      <span class="cmd-badge">core</span>
    </a>
    <a href="/cli/commands.html#template" class="cmd-card">
      <div class="cmd-tag"><span class="cmd-icon">📝</span> template</div>
      <h4>Generate from Template</h4>
      <p>Dynamic config file creation with variable substitution and filters: <code class="ic">|int</code>, <code class="ic">|bool</code>, <code class="ic">|upper</code>.</p>
      <span class="cmd-badge">core</span>
    </a>
    <a href="/cli/commands.html#backup" class="cmd-card">
      <div class="cmd-tag"><span class="cmd-icon">🔐</span> backup / restore</div>
      <h4>Encrypted Backup</h4>
      <p>AES-256-GCM encryption with Argon2 key derivation. Back up and restore <code class="ic">.env</code> files without storing secrets in plaintext.</p>
      <span class="cmd-badge feat">--features full</span>
    </a>
  </div>
</section>

<!-- QUICK START -->
<section class="section" id="quickstart">
  <div class="section-label">// Get Going Fast</div>
  <h2>Quick Start in 5 Minutes</h2>

  <div class="quick-steps">
    <div class="qstep">
      <div class="qnum">1</div>
      <div class="qbody">
        <h4>Install</h4>
        <p>One-liner for macOS and Linux. See the <a href="/cli/installation.html">installation guide</a> for Windows and from-source builds.</p>
        <div class="code-wrap">
          <div class="code-bar"><span>Terminal</span><span class="lang-sh">SHELL</span></div>
          <pre>curl -sSL https://dotenv.space/install.sh | bash
dotenv-space --version</pre>
        </div>
      </div>
    </div>
    <div class="qstep">
      <div class="qnum">2</div>
      <div class="qbody">
        <h4>Initialize your project</h4>
        <p>Generates a <code class="ic">.env.example</code> with variables for your stack and selected services.</p>
        <div class="code-wrap">
          <div class="code-bar"><span>Terminal</span><span class="lang-sh">SHELL</span></div>
          <pre>dotenv-space init --stack python --services postgres,redis,stripe</pre>
        </div>
      </div>
    </div>
    <div class="qstep">
      <div class="qnum">3</div>
      <div class="qbody">
        <h4>Validate your config</h4>
        <p>Catches common issues before they reach production — placeholders, weak secrets, missing variables.</p>
        <div class="code-wrap">
          <div class="code-bar"><span>Terminal</span><span class="lang-sh">SHELL</span></div>
          <pre>dotenv-space validate --strict</pre>
        </div>
      </div>
    </div>
    <div class="qstep">
      <div class="qnum">4</div>
      <div class="qbody">
        <h4>Scan for leaked secrets</h4>
        <p>Run against your entire codebase. Bots find exposed keys on GitHub within minutes — scan before you push.</p>
        <div class="code-wrap">
          <div class="code-bar"><span>Terminal</span><span class="lang-sh">SHELL</span></div>
          <pre>dotenv-space scan --path src/</pre>
        </div>
      </div>
    </div>
    <div class="qstep">
      <div class="qnum">5</div>
      <div class="qbody">
        <h4>Wire it into CI/CD</h4>
        <p>Validate on every push, upload SARIF results to GitHub Security automatically. Set-and-forget protection.</p>
        <div class="code-wrap">
          <div class="code-bar"><span>.github/workflows/env-check.yml</span><span class="lang-yml">YAML</span></div>
          <pre><span class="ck">name</span>: <span class="cv">Env Validation</span>
<span class="ck">on</span>: [push, pull_request]
<span class="ck">jobs</span>:
  <span class="ck">validate</span>:
    <span class="ck">runs-on</span>: <span class="cv">ubuntu-latest</span>
    <span class="ck">steps</span>:
      - <span class="ck">uses</span>: <span class="cv">actions/checkout@v4</span>
      - <span class="ck">name</span>: <span class="cv">Install dotenv-space</span>
        <span class="ck">run</span>: <span class="cv">curl -sSL https://dotenv.space/install.sh | bash</span>
      - <span class="ck">name</span>: <span class="cv">Validate</span>
        <span class="ck">run</span>: <span class="cv">dotenv-space validate --strict --format github-actions</span>
      - <span class="ck">name</span>: <span class="cv">Scan</span>
        <span class="ck">run</span>: <span class="cv">dotenv-space scan --format sarif > scan.sarif</span>
      - <span class="ck">uses</span>: <span class="cv">github/codeql-action/upload-sarif@v2</span>
        <span class="ck">if</span>: <span class="cv">always()</span>
        <span class="ck">with</span>: {<span class="ck">sarif_file</span>: <span class="cv">scan.sarif</span>}</pre>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FEATURE FLAGS -->
<section class="section" id="features">
  <div class="section-label">// Build Options</div>
  <h2>Feature Flags</h2>
  <p>Cargo feature flags keep the core binary lean. The install script gives you everything. Feature flags only matter when building from source.</p>
  <div class="flags-row">
    <div class="flag-card">
      <div class="flag-name">core (default)</div>
      <p>init, validate, scan, diff, convert, sync, doctor, template</p>
      <span class="flag-cmd">cargo install dotenv-space</span>
    </div>
    <div class="flag-card">
      <div class="flag-name">--features migrate</div>
      <p>Adds cloud migration: GitHub Actions, AWS, Doppler, Infisical</p>
      <span class="flag-cmd">cargo install dotenv-space --features migrate</span>
    </div>
    <div class="flag-card">
      <div class="flag-name">--all-features</div>
      <p>Everything: migrate + AES-256-GCM encrypted backup &amp; restore</p>
      <span class="flag-cmd">cargo install dotenv-space --all-features</span>
    </div>
  </div>
  <div class="callout info">
    <span class="ci-icon">💡</span>
    <p>The <code class="ic">curl | bash</code> install downloads a pre-built binary with all features. Feature flags only matter if you <code class="ic">cargo install</code> from source.</p>
  </div>
</section>

<!-- CONFIG -->
<section class="section" id="config">
  <div class="section-label">// Configuration</div>
  <h2>Project Config File</h2>
  <p>Store project defaults in <code class="ic">.dotenv-space.toml</code> at the root. All CLI flags can be set here to avoid repetition across your team.</p>
  <div class="code-wrap">
    <div class="code-bar"><span>.dotenv-space.toml</span><span class="lang-toml">TOML</span></div>
    <pre>[defaults]
env_file     = <span class="cs">".env"</span>
example_file = <span class="cs">".env.example"</span>
verbose      = <span class="cw">false</span>

[validate]
strict  = <span class="cw">true</span>
format  = <span class="cs">"pretty"</span>   <span class="cc"># pretty | json | github-actions</span>

[scan]
exclude_patterns = [<span class="cs">"*.example"</span>, <span class="cs">"*.sample"</span>]
format           = <span class="cs">"pretty"</span>   <span class="cc"># pretty | sarif</span>

[convert]
default_format = <span class="cs">"json"</span>

[aliases]
gh  = <span class="cs">"github-actions"</span>
k8s = <span class="cs">"kubernetes"</span>
tf  = <span class="cs">"terraform"</span></pre>
  </div>
</section>

<hr class="hr">

<div class="nav-cards">
  <a href="/cli/installation.html" class="nav-card">
    <div class="nc-label">Installation →</div>
    <div class="nc-title">Install Guide</div>
    <div class="nc-desc">Platform-specific steps, verification, updates, and uninstall</div>
  </a>
  <a href="/cli/commands.html" class="nav-card">
    <div class="nc-label">Reference →</div>
    <div class="nc-title">Command Reference</div>
    <div class="nc-desc">Every flag, option, and real-world example for all 10 commands</div>
  </a>
  <a href="/blog/" class="nav-card">
    <div class="nc-label">Blog →</div>
    <div class="nc-title">Tutorials &amp; Updates</div>
    <div class="nc-desc">Deep dives, use cases, CI/CD guides, and release notes</div>
  </a>
</div>

</main>

<footer>
  <div class="footer-logo"><span>$ </span>dotenv<span>.space</span></div>
  <div class="footer-links">
    <a href="/">Reference</a>
    <a href="/cli/">CLI</a>
    <a href="/cli/installation.html">Install</a>
    <a href="/cli/commands.html">Commands</a>
    <a href="/blog/">Blog</a>
    <span class="footer-sep"></span>
    <a href="https://github.com/urwithajit9/dotenv-space" target="_blank" rel="noopener">GitHub</a>
    <a href="mailto:support@dotenv.space">Support</a>
  </div>
  <p>dotenv.space — .env reference &amp; CLI · 2026 · Built in 🦀 Rust</p>
  <p style="margin-top:5px;font-size:12px">No ads. No tracking. Just docs.</p>
</footer>

<script>
document.querySelectorAll('.code-bar').forEach(bar => {
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> copy';
  btn.addEventListener('click', () => {
    const pre = bar.nextElementSibling; if (!pre) return;
    navigator.clipboard.writeText(pre.innerText || pre.textContent).then(() => {
      btn.textContent = '✓ copied'; btn.classList.add('copied');
      setTimeout(() => { btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> copy'; btn.classList.remove('copied'); }, 2000);
    });
  });
  bar.appendChild(btn);
});
document.getElementById('iCopy').addEventListener('click', function() {
  navigator.clipboard.writeText(document.getElementById('iCmd').textContent).then(() => {
    this.textContent = 'copied!'; this.classList.add('copied');
    setTimeout(() => { this.textContent = 'copy'; this.classList.remove('copied'); }, 2000);
  });
});
const t = document.getElementById('navToggle'), l = document.getElementById('navLinks');
if (t && l) { t.addEventListener('click', () => l.classList.toggle('open')); }
</script>
</body>
</html>

==================================================
FILE: ./cli/installation.html
==================================================

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Install dotenv-space CLI — macOS, Linux, Windows &amp; From Source</title>
<meta name="description" content="Install the dotenv-space CLI tool on macOS, Linux, Windows, or build from source with Cargo. Includes verification and update instructions.">
<link rel="canonical" href="https://dotenv.space/cli/installation.html">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦀</text></svg>">
<style>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');
:root{--bg:#060811;--surface:#0f1422;--surface2:#151929;--border:#1e253a;--accent:#00e5ff;--accent3:#10b981;--text:#e8edf7;--muted:#8892a4;--dim:#5a647a;--radius:10px;--purple:#a78bfa;--purple-bg:rgba(124,58,237,.15);--purple-border:rgba(124,58,237,.35)}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);line-height:1.7;font-size:16px;overflow-x:hidden}
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(6,8,17,.88);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);padding:0 40px;height:60px;display:flex;align-items:center;justify-content:space-between}
.nav-logo{font-family:'IBM Plex Mono',monospace;font-size:1rem;color:var(--accent);text-decoration:none;font-weight:500;letter-spacing:-.02em}
.nav-logo span{color:var(--muted)}
.nav-links{display:flex;gap:22px;list-style:none;align-items:center}
.nav-links a{color:var(--muted);text-decoration:none;font-size:13px;font-weight:500;transition:color .2s}
.nav-links a:hover{color:var(--accent)}
.nav-active{color:var(--accent)!important}
.nav-cta{background:var(--accent)!important;color:#000!important;padding:6px 15px;border-radius:6px;font-weight:700!important;font-size:12.5px!important}
.nav-toggle{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px}
.nav-toggle span{display:block;width:22px;height:2px;background:var(--muted);border-radius:2px}
@media(max-width:768px){nav{padding:0 20px}.nav-toggle{display:flex}.nav-links{display:none;position:absolute;top:60px;left:0;right:0;background:rgba(6,8,17,.97);border-bottom:1px solid var(--border);flex-direction:column;padding:16px 24px 20px;gap:4px}.nav-links.open{display:flex}.nav-links a{padding:10px 0;border-bottom:1px solid var(--border)}.nav-links li:last-child a{border-bottom:none}}
/* layout */
.page-wrap{max-width:900px;margin:0 auto;padding:100px 24px 80px}
.page-header{padding-bottom:48px;border-bottom:1px solid var(--border);margin-bottom:56px}
.page-header .section-label{font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--purple);text-transform:uppercase;letter-spacing:.15em;margin-bottom:12px}
.page-header h1{font-family:'Syne',sans-serif;font-size:clamp(2rem,5vw,3.4rem);font-weight:800;letter-spacing:-.04em;line-height:1.05;margin-bottom:16px}
.page-header p{color:var(--muted);font-size:1.05rem;max-width:580px;line-height:1.7;margin:0}
/* two-col layout for sidebar-ish ToC */
.doc-layout{display:grid;grid-template-columns:200px 1fr;gap:48px;align-items:start}
@media(max-width:760px){.doc-layout{grid-template-columns:1fr}}
.doc-toc{position:sticky;top:80px}
.doc-toc ul{list-style:none;padding:0}
.doc-toc li{margin-bottom:2px}
.doc-toc a{color:var(--dim);font-size:13px;text-decoration:none;padding:5px 10px;border-radius:6px;display:block;transition:color .2s,background .2s;font-family:'IBM Plex Mono',monospace}
.doc-toc a:hover{color:var(--accent);background:rgba(0,229,255,.06)}
.doc-toc .toc-head{color:var(--muted);font-size:11px;text-transform:uppercase;letter-spacing:.1em;padding:0 10px;margin:16px 0 6px}
.doc-toc .toc-head:first-child{margin-top:0}
@media(max-width:760px){.doc-toc{display:none}}
/* content */
.doc-content .section{padding:48px 0;border-top:1px solid var(--border)}
.doc-content .section:first-child{border-top:none;padding-top:0}
.section-label{font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--purple);text-transform:uppercase;letter-spacing:.15em;margin-bottom:10px}
h2{font-family:'Syne',sans-serif;font-size:1.9rem;font-weight:700;letter-spacing:-.03em;line-height:1.15;margin-bottom:16px}
h3{font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:700;margin:28px 0 10px;color:var(--text)}
p{color:var(--muted);margin-bottom:14px;line-height:1.8}
p strong{color:var(--text);font-weight:500}
a{color:var(--accent);text-decoration:none}
a:hover{text-decoration:underline}
ul.prose{color:var(--muted);padding-left:20px;margin-bottom:14px}
ul.prose li{margin-bottom:6px;line-height:1.7;font-size:14.5px}
/* platform tabs */
.platform-tabs{display:flex;gap:4px;margin-bottom:-1px;flex-wrap:wrap}
.ptab{background:transparent;border:1px solid var(--border);border-bottom:none;border-radius:var(--radius) var(--radius) 0 0;padding:8px 18px;font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--muted);cursor:pointer;transition:all .2s}
.ptab.active{background:var(--surface2);color:var(--accent);border-color:rgba(0,229,255,.3)}
.ptab:hover:not(.active){color:var(--text)}
.pane{display:none}
.pane.active{display:block}
/* code */
.code-wrap{margin:18px 0}
.code-bar{display:flex;align-items:center;justify-content:space-between;background:var(--surface2);border:1px solid var(--border);border-bottom:none;border-radius:var(--radius) var(--radius) 0 0;padding:8px 17px;font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--dim)}
.lang-sh{padding:2px 8px;border-radius:4px;font-size:10px;font-weight:500;background:rgba(245,158,11,.12);color:#fbbf24;border:1px solid rgba(245,158,11,.25)}
.lang-ps{padding:2px 8px;border-radius:4px;font-size:10px;font-weight:500;background:rgba(56,189,248,.12);color:#7dd3fc;border:1px solid rgba(56,189,248,.25)}
.lang-toml{padding:2px 8px;border-radius:4px;font-size:10px;font-weight:500;background:rgba(249,115,22,.12);color:#fb923c;border:1px solid rgba(249,115,22,.25)}
pre{background:#060b14;border:1px solid var(--border);border-radius:0 0 var(--radius) var(--radius);padding:20px 22px;overflow-x:auto;font-family:'IBM Plex Mono',monospace;font-size:13.5px;line-height:1.75}
.ic{font-family:'IBM Plex Mono',monospace;font-size:.82em;background:var(--surface2);border:1px solid var(--border);padding:1px 6px;border-radius:4px;color:var(--accent3)}
.ck{color:#79c0ff}.cv{color:#a5f3fc}.cc{color:#4a5568}.cs{color:#86efac}.cw{color:#f87171}.cf{color:#c4b5fd}
/* callouts */
.callout{border-radius:var(--radius);padding:16px 20px;margin:20px 0;display:flex;gap:12px;font-size:14px}
.callout p{margin:0;font-size:14px}
.ci-icon{font-size:16px;flex-shrink:0;margin-top:2px}
.info{background:rgba(0,229,255,.06);border:1px solid rgba(0,229,255,.15)}
.tip{background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.15)}
.warn{background:rgba(245,158,11,.07);border:1px solid rgba(245,158,11,.2)}
.danger{background:rgba(244,63,94,.07);border:1px solid rgba(244,63,94,.2)}
/* copy btn */
.copy-btn{display:flex;align-items:center;gap:5px;background:transparent;border:1px solid var(--border);border-radius:5px;color:var(--dim);font-family:'IBM Plex Mono',monospace;font-size:11px;padding:3px 10px;cursor:pointer;transition:all .18s;flex-shrink:0}
.copy-btn:hover{border-color:var(--accent);color:var(--accent);background:rgba(0,229,255,.06)}
.copy-btn.copied{border-color:var(--accent3);color:var(--accent3)}
/* verify box */
.verify-box{background:var(--surface);border:1px solid var(--border);border-left:3px solid var(--accent3);border-radius:var(--radius);padding:22px;margin:24px 0}
.verify-box h4{font-family:'Syne',sans-serif;font-weight:700;margin-bottom:12px;font-size:.95rem;color:var(--accent3)}
/* footer */
footer{border-top:1px solid var(--border);padding:52px 24px;text-align:center}
.footer-logo{font-family:'IBM Plex Mono',monospace;font-size:1.1rem;color:var(--accent);margin-bottom:14px}
.footer-logo span{color:var(--dim)}
footer p{color:var(--dim);font-size:13px;margin:0}
.footer-links{display:flex;gap:22px;justify-content:center;margin:16px 0;flex-wrap:wrap}
.footer-links a{color:var(--dim);font-size:13px;transition:color .2s}
.footer-links a:hover{color:var(--accent);text-decoration:none}
.footer-sep{width:1px;height:14px;background:var(--border);align-self:center;display:inline-block}
</style>
<script async src="https://plausible.io/js/pa-MTFkM-GKbC_JAqVNzkJ49.js"></script>
<script>window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()</script>
</head>
<body>

<nav>
  <a class="nav-logo" href="/"><span>$</span> dotenv<span>.space</span></a>
  <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links" id="navLinks">
    <li><a href="/">Reference</a></li>
    <li><a href="/cli/">CLI</a></li>
    <li><a href="/cli/installation.html" class="nav-active">Install</a></li>
    <li><a href="/cli/commands.html">Commands</a></li>
    <li><a href="/blog/">Blog</a></li>
    <li><a href="https://github.com/urwithajit9/dotenv-space" target="_blank" rel="noopener">GitHub</a></li>
    <li><a href="#install" class="nav-cta">Get CLI →</a></li>
  </ul>
</nav>

<div class="page-wrap">
  <div class="page-header">
    <div class="section-label">// CLI Documentation</div>
    <h1>Installation</h1>
    <p>Install dotenv-space on macOS, Linux, or Windows, or build from source with Cargo. All install methods include the full feature set.</p>
  </div>

  <div class="doc-layout">
    <!-- TOC -->
    <nav class="doc-toc" aria-label="On this page">
      <div class="toc-head">On this page</div>
      <ul>
        <li><a href="#install">Quick Install</a></li>
        <li><a href="#platforms">By Platform</a></li>
        <li><a href="#source">From Source</a></li>
        <li><a href="#verify">Verify</a></li>
        <li><a href="#update">Update</a></li>
        <li><a href="#uninstall">Uninstall</a></li>
        <li><a href="#requirements">Requirements</a></li>
      </ul>
    </nav>

    <!-- CONTENT -->
    <div class="doc-content">

      <div class="section" id="install">
        <div class="section-label">// Fastest</div>
        <h2>Quick Install</h2>
        <p>The install script auto-detects your OS and architecture, downloads the latest release binary, and places it in <code class="ic">~/.local/bin</code> (Linux/macOS) or <code class="ic">%LOCALAPPDATA%\dotenv-space\bin</code> (Windows).</p>

        <div class="code-wrap">
          <div class="code-bar"><span>macOS / Linux</span><span class="lang-sh">SHELL</span></div>
          <pre>curl -sSL https://dotenv.space/install.sh | bash</pre>
        </div>

        <div class="code-wrap">
          <div class="code-bar"><span>Windows (PowerShell)</span><span class="lang-ps">POWERSHELL</span></div>
          <pre>irm https://dotenv.space/install.ps1 | iex</pre>
        </div>

        <div class="callout warn">
          <span class="ci-icon">⚠️</span>
          <p>Always review install scripts before piping to your shell. You can inspect ours at <a href="https://github.com/urwithajit9/dotenv-space/blob/main/scripts/install.sh" target="_blank" rel="noopener">github.com/urwithajit9/dotenv-space</a>.</p>
        </div>
      </div>

      <div class="section" id="platforms">
        <div class="section-label">// Platform Options</div>
        <h2>By Platform</h2>

        <div class="platform-tabs">
          <button class="ptab active" onclick="showPlatform('mac', this)">macOS</button>
          <button class="ptab" onclick="showPlatform('linux', this)">Linux</button>
          <button class="ptab" onclick="showPlatform('windows', this)">Windows</button>
        </div>

        <div id="pane-mac" class="pane active">
          <div class="code-wrap">
            <div class="code-bar"><span>macOS — curl installer (recommended)</span><span class="lang-sh">SHELL</span></div>
            <pre>curl -sSL https://dotenv.space/install.sh | bash</pre>
          </div>
          <div class="code-wrap">
            <div class="code-bar"><span>macOS — Homebrew (coming soon)</span><span class="lang-sh">SHELL</span></div>
            <pre><span class="cc"># Not yet available — use curl installer above</span>
<span class="cc"># brew install urwithajit9/tap/dotenv-space</span></pre>
          </div>
          <p>Works on both Intel (x86_64) and Apple Silicon (arm64). The installer detects your architecture automatically.</p>
        </div>

        <div id="pane-linux" class="pane">
          <div class="code-wrap">
            <div class="code-bar"><span>Linux — curl installer</span><span class="lang-sh">SHELL</span></div>
            <pre>curl -sSL https://dotenv.space/install.sh | bash</pre>
          </div>
          <div class="code-wrap">
            <div class="code-bar"><span>Linux — manual download (x86_64)</span><span class="lang-sh">SHELL</span></div>
            <pre><span class="cc"># Replace VERSION with the latest release tag</span>
VERSION=v0.1.0
curl -LO https://github.com/urwithajit9/dotenv-space/releases/download/$VERSION/dotenv-space-x86_64-unknown-linux-gnu.tar.gz
tar -xzf dotenv-space-*.tar.gz
chmod +x dotenv-space
mv dotenv-space ~/.local/bin/</pre>
          </div>
          <p>Supports x86_64 and aarch64 (ARM64). If <code class="ic">~/.local/bin</code> isn't in your <code class="ic">PATH</code>, add <code class="ic">export PATH="$HOME/.local/bin:$PATH"</code> to your shell profile.</p>
        </div>

        <div id="pane-windows" class="pane">
          <div class="code-wrap">
            <div class="code-bar"><span>Windows — PowerShell</span><span class="lang-ps">POWERSHELL</span></div>
            <pre>irm https://dotenv.space/install.ps1 | iex</pre>
          </div>
          <div class="code-wrap">
            <div class="code-bar"><span>Windows — manual download</span><span class="lang-ps">POWERSHELL</span></div>
            <pre><span class="cc"># Download from GitHub Releases</span>
$url = "https://github.com/urwithajit9/dotenv-space/releases/latest/download/dotenv-space-x86_64-pc-windows-msvc.zip"
Invoke-WebRequest -Uri $url -OutFile dotenv-space.zip
Expand-Archive dotenv-space.zip -DestinationPath $env:LOCALAPPDATA\dotenv-space\bin</pre>
          </div>
          <div class="callout info">
            <span class="ci-icon">ℹ️</span>
            <p>Add the install directory to your system PATH: <strong>System Properties → Advanced → Environment Variables → PATH</strong>. You may need to restart your terminal.</p>
          </div>
        </div>
      </div>

      <div class="section" id="source">
        <div class="section-label">// Build From Source</div>
        <h2>From Source (Cargo)</h2>
        <p>Requires Rust 1.75+ and Cargo. Install Rust from <a href="https://rustup.rs" target="_blank" rel="noopener">rustup.rs</a>.</p>

        <div class="code-wrap">
          <div class="code-bar"><span>Core features only (smaller binary)</span><span class="lang-sh">SHELL</span></div>
          <pre>cargo install dotenv-space</pre>
        </div>

        <div class="code-wrap">
          <div class="code-bar"><span>With cloud migration support</span><span class="lang-sh">SHELL</span></div>
          <pre>cargo install dotenv-space --features migrate</pre>
        </div>

        <div class="code-wrap">
          <div class="code-bar"><span>Everything — migrate + encrypted backup</span><span class="lang-sh">SHELL</span></div>
          <pre>cargo install dotenv-space --all-features</pre>
        </div>

        <div class="code-wrap">
          <div class="code-bar"><span>Or clone and build locally</span><span class="lang-sh">SHELL</span></div>
          <pre>git clone https://github.com/urwithajit9/dotenv-space.git
cd dotenv-space
cargo build --release --all-features
<span class="cc"># Binary at: target/release/dotenv-space</span></pre>
        </div>
      </div>

      <div class="section" id="verify">
        <div class="section-label">// Confirm It Works</div>
        <h2>Verify Installation</h2>

        <div class="verify-box">
          <h4>✅ Expected output</h4>
          <div class="code-wrap" style="margin:0">
            <div class="code-bar"><span>Terminal</span><span class="lang-sh">SHELL</span></div>
            <pre>$ dotenv-space --version
dotenv-space 0.1.0

$ dotenv-space --help
A comprehensive CLI tool for managing .env files

Usage: dotenv-space [OPTIONS] [COMMAND]

Commands:
  init      Interactive project setup
  validate  Validate .env configuration
  scan      Scan for accidentally committed secrets
  diff      Compare .env and .env.example
  convert   Transform to different formats
  sync      Keep .env and .env.example in sync
  migrate   Migrate to cloud secret managers
  doctor    Diagnose common setup issues
  template  Generate config files from templates
  backup    Create encrypted backups
  restore   Restore from encrypted backups
  help      Print this message or the help of the given subcommand(s)</pre>
          </div>
        </div>

        <div class="callout info">
          <span class="ci-icon">ℹ️</span>
          <p>If <code class="ic">dotenv-space: command not found</code>, the install directory isn't in your PATH. Run <code class="ic">source ~/.bashrc</code> or <code class="ic">source ~/.zshrc</code>, or open a new terminal.</p>
        </div>
      </div>

      <div class="section" id="update">
        <div class="section-label">// Stay Current</div>
        <h2>Update</h2>
        <p>Re-run the install script to update to the latest release. It detects and replaces existing installations.</p>

        <div class="code-wrap">
          <div class="code-bar"><span>Update — curl installer</span><span class="lang-sh">SHELL</span></div>
          <pre>curl -sSL https://dotenv.space/install.sh | bash</pre>
        </div>

        <div class="code-wrap">
          <div class="code-bar"><span>Update — from source</span><span class="lang-sh">SHELL</span></div>
          <pre>cargo install dotenv-space --all-features --force</pre>
        </div>
      </div>

      <div class="section" id="uninstall">
        <div class="section-label">// Remove</div>
        <h2>Uninstall</h2>

        <div class="code-wrap">
          <div class="code-bar"><span>macOS / Linux</span><span class="lang-sh">SHELL</span></div>
          <pre>rm ~/.local/bin/dotenv-space</pre>
        </div>

        <div class="code-wrap">
          <div class="code-bar"><span>If installed via cargo</span><span class="lang-sh">SHELL</span></div>
          <pre>cargo uninstall dotenv-space</pre>
        </div>
      </div>

      <div class="section" id="requirements">
        <div class="section-label">// System Requirements</div>
        <h2>Requirements</h2>

        <ul class="prose">
          <li><strong>macOS:</strong> 10.15 Catalina or later (x86_64 or arm64)</li>
          <li><strong>Linux:</strong> glibc 2.17+ (most distributions from 2012+). x86_64 or aarch64.</li>
          <li><strong>Windows:</strong> Windows 10 version 1809 or later (x86_64)</li>
          <li><strong>Building from source:</strong> Rust 1.75.0+ (<code class="ic">rustup update</code>)</li>
        </ul>

        <div class="callout tip">
          <span class="ci-icon">✅</span>
          <p>No runtime dependencies. The binary is statically linked — it works without Node.js, Python, or any other runtime installed.</p>
        </div>
      </div>

    </div><!-- /doc-content -->
  </div><!-- /doc-layout -->
</div><!-- /page-wrap -->

<footer>
  <div class="footer-logo"><span>$ </span>dotenv<span>.space</span></div>
  <div class="footer-links">
    <a href="/">Reference</a>
    <a href="/cli/">CLI</a>
    <a href="/cli/installation.html">Install</a>
    <a href="/cli/commands.html">Commands</a>
    <a href="/blog/">Blog</a>
    <span class="footer-sep"></span>
    <a href="https://github.com/urwithajit9/dotenv-space" target="_blank" rel="noopener">GitHub</a>
    <a href="mailto:support@dotenv.space">Support</a>
  </div>
  <p>dotenv.space — 2026 · Built in 🦀 Rust · No ads. No tracking.</p>
</footer>

<script>
function showPlatform(name, btn) {
  document.querySelectorAll('.pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
  document.getElementById('pane-' + name).classList.add('active');
  btn.classList.add('active');
}
document.querySelectorAll('.code-bar').forEach(bar => {
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> copy';
  btn.addEventListener('click', () => {
    const pre = bar.nextElementSibling; if (!pre) return;
    navigator.clipboard.writeText(pre.innerText || pre.textContent).then(() => {
      btn.textContent = '✓ copied'; btn.classList.add('copied');
      setTimeout(() => { btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> copy'; btn.classList.remove('copied'); }, 2000);
    });
  });
  bar.appendChild(btn);
});
const t = document.getElementById('navToggle'), l = document.getElementById('navLinks');
if (t && l) { t.addEventListener('click', () => l.classList.toggle('open')); }
</script>
</body>
</html>

==================================================
FILE: ./cli/pre-commit.html
==================================================



==================================================
FILE: ./components/cli-install-widget.html
==================================================



==================================================
FILE: ./components/code-block.html
==================================================



==================================================
FILE: ./components/footer.html
==================================================



==================================================
FILE: ./components/nav.html
==================================================



==================================================
FILE: ./frameworks/docker.html
==================================================



==================================================
FILE: ./frameworks/github-actions.html
==================================================



==================================================
FILE: ./frameworks/javascript.html
==================================================



==================================================
FILE: ./frameworks/python.html
==================================================

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Python .env Guide — Django, FastAPI, Flask | dotenv.space</title>
<meta name="description" content="Complete guide to environment variables in Python. Django, FastAPI, Flask examples with python-dotenv, django-environ, and pydantic-settings.">

<link rel="canonical" href="https://dotenv.space/frameworks/python">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔐</text></svg>">

<!-- Modular CSS -->
<link rel="stylesheet" href="/assets/css/base.css">
<link rel="stylesheet" href="/assets/css/components.css">
<link rel="stylesheet" href="/assets/css/layout.css">
<link rel="stylesheet" href="/assets/css/pages/framework.css">

<script defer data-domain="dotenv.space" src="https://plausible.io/js/script.js"></script>
</head>
<body>

<!-- NAVIGATION (same on all pages) -->
<nav class="nav">
  <a class="nav-logo" href="/">
    <span class="nav-logo-muted">$</span> dotenv<span class="nav-logo-muted">.space</span>
  </a>

  <ul class="nav-links">
    <li><a href="/cli/">CLI Tool</a></li>
    <li><a href="/#frameworks" class="active">Frameworks</a></li>
    <li><a href="/#reference">Reference</a></li>
    <li><a href="/blog/">Blog</a></li>
    <li><a href="https://github.com/urwithajit9/dotenv-space-cli" target="_blank">GitHub ↗</a></li>
  </ul>
</nav>

<!-- MAIN CONTENT -->
<main class="container mt-xl">
  <!-- Breadcrumb -->
  <nav class="breadcrumb mb-lg">
    <a href="/">Home</a>
    <span>/</span>
    <a href="/#frameworks">Frameworks</a>
    <span>/</span>
    <span>Python</span>
  </nav>

  <!-- Header -->
  <header class="framework-header mb-xl">
    <div class="framework-hero-icon">🐍</div>
    <h1>Python Environment Variables</h1>
    <p class="text-muted text-lg">
      Complete guide for Django, FastAPI, Flask, and Python scripts.
      From basics to production-ready configuration management.
    </p>

    <div class="framework-tags">
      <span class="badge badge-accent">Django</span>
      <span class="badge badge-accent">FastAPI</span>
      <span class="badge badge-accent">Flask</span>
      <span class="badge badge-accent">python-dotenv</span>
    </div>
  </header>

  <!-- Table of Contents -->
  <div class="toc-box mb-xl">
    <h4>On This Page</h4>
    <ul>
      <li><a href="#basics">Python Basics</a></li>
      <li><a href="#django">Django Setup</a></li>
      <li><a href="#fastapi">FastAPI with Pydantic</a></li>
      <li><a href="#flask">Flask Configuration</a></li>
      <li><a href="#production">Production Checklist</a></li>
      <li><a href="#troubleshooting">Common Issues</a></li>
    </ul>
  </div>

  <!-- Section: Basics -->
  <section id="basics" class="content-section">
    <div class="section-label">Getting Started</div>
    <h2>Python Basics with python-dotenv</h2>

    <p>
      The simplest approach for Python scripts. Install <code>python-dotenv</code>
      and load variables before accessing them.
    </p>

    <div class="code-wrap">
      <div class="code-bar">
        <span class="code-bar-title">
          <span class="lang-tag lang-bash">BASH</span>
          Install python-dotenv
        </span>
      </div>
      <div class="code-content">
<pre>pip install python-dotenv</pre>
      </div>
    </div>

    <div class="code-wrap">
      <div class="code-bar">
        <span class="code-bar-title">
          <span class="lang-tag lang-python">PYTHON</span>
          config.py
        </span>
      </div>
      <div class="code-content">
<pre><span class="cw">import</span> os
<span class="cw">from</span> dotenv <span class="cw">import</span> load_dotenv
<span class="cw">from</span> pathlib <span class="cw">import</span> Path

<span class="cc"># Load .env file</span>
load_dotenv(dotenv_path=Path(__file__).resolve().parent / <span class="cs">".env"</span>)

<span class="cc"># Access variables</span>
<span class="ck">DATABASE_URL</span> = os.getenv(<span class="cs">"DATABASE_URL"</span>)
<span class="ck">SECRET_KEY</span> = os.environ[<span class="cs">"SECRET_KEY"</span>]  <span class="cc"># raises KeyError if missing</span>
<span class="ck">DEBUG</span> = os.getenv(<span class="cs">"DEBUG"</span>, <span class="cs">"False"</span>).lower() <span class="cw">in</span> (<span class="cs">"true"</span>, <span class="cs">"1"</span>)</pre>
      </div>
    </div>

    <div class="callout callout-info">
      <span class="callout-icon">💡</span>
      <div class="callout-content">
        <p>
          <strong>Always use absolute paths</strong> when loading .env files.
          <code>Path(__file__).resolve().parent</code> ensures the path is relative
          to your script, not the current working directory.
        </p>
      </div>
    </div>
  </section>

  <!-- Section: Django -->
  <section id="django" class="content-section">
    <div class="section-label">Framework Guide</div>
    <h2>Django with django-environ</h2>

    <p>
      Django best practice: use <code>django-environ</code> for type-safe
      configuration with automatic parsing of database URLs, cache URLs, etc.
    </p>

    <div class="code-wrap">
      <div class="code-bar">
        <span class="code-bar-title">
          <span class="lang-tag lang-python">PYTHON</span>
          settings.py
        </span>
      </div>
      <div class="code-content">
<pre><span class="cw">import</span> environ
<span class="cw">from</span> pathlib <span class="cw">import</span> Path

<span class="ck">BASE_DIR</span> = Path(__file__).resolve().parent.parent
<span class="ck">env</span> = environ.Env(
    DEBUG=(bool, False),
    ALLOWED_HOSTS=(list, [<span class="cs">"localhost"</span>])
)
environ.Env.read_env(BASE_DIR / <span class="cs">".env"</span>)

<span class="cc"># Basic settings</span>
<span class="ck">SECRET_KEY</span> = env(<span class="cs">"SECRET_KEY"</span>)
<span class="ck">DEBUG</span> = env(<span class="cs">"DEBUG"</span>)
<span class="ck">ALLOWED_HOSTS</span> = env(<span class="cs">"ALLOWED_HOSTS"</span>)

<span class="cc"># Database (automatic parsing)</span>
<span class="ck">DATABASES</span> = {
    <span class="cs">"default"</span>: env.db(<span class="cs">"DATABASE_URL"</span>)
}

<span class="cc"># Cache (automatic parsing)</span>
<span class="ck">CACHES</span> = {
    <span class="cs">"default"</span>: env.cache(<span class="cs">"REDIS_URL"</span>)
}

<span class="cc"># Third-party services</span>
<span class="ck">STRIPE_SECRET_KEY</span> = env(<span class="cs">"STRIPE_SECRET_KEY"</span>)
<span class="ck">OPENAI_API_KEY</span> = env(<span class="cs">"OPENAI_API_KEY"</span>, default=None)</pre>
      </div>
    </div>
  </section>

  <!-- Section: FastAPI -->
  <section id="fastapi" class="content-section">
    <div class="section-label">Framework Guide</div>
    <h2>FastAPI with Pydantic Settings</h2>

    <p>
      FastAPI's recommended approach: <code>pydantic-settings</code> provides
      type validation, IDE autocomplete, and automatic masking of sensitive values.
    </p>

    <div class="code-wrap">
      <div class="code-bar">
        <span class="code-bar-title">
          <span class="lang-tag lang-python">PYTHON</span>
          core/config.py
        </span>
      </div>
      <div class="code-content">
<pre><span class="cw">from</span> pydantic_settings <span class="cw">import</span> BaseSettings, SettingsConfigDict
<span class="cw">from</span> pydantic <span class="cw">import</span> AnyUrl, SecretStr
<span class="cw">from</span> functools <span class="cw">import</span> lru_cache

<span class="cw">class</span> Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=<span class="cs">".env"</span>,
        case_sensitive=False
    )

    app_name: str = <span class="cs">"My API"</span>
    debug: bool = False
    database_url: AnyUrl
    secret_key: SecretStr  <span class="cc"># Masked in logs</span>
    redis_url: str | None = None

<span class="cc"># Singleton pattern</span>
<span class="cw">@lru_cache</span>
<span class="cw">def</span> get_settings() -> Settings:
    <span class="cw">return</span> Settings()

<span class="cc"># Usage</span>
<span class="cw">from</span> core.config <span class="cw">import</span> get_settings

settings = get_settings()
<span class="cf">print</span>(settings.secret_key)  <span class="cc"># **********</span></pre>
      </div>
    </div>
  </section>

  <!-- More sections would follow... -->

  <!-- Quick Links -->
  <div class="related-links mt-2xl">
    <h3>Related Guides</h3>
    <div class="grid-2">
      <a href="/frameworks/docker" class="card hover-scale transition">
        <h4>Docker Setup</h4>
        <p>Use .env files with Docker Compose</p>
      </a>
      <a href="/frameworks/github-actions" class="card hover-scale transition">
        <h4>GitHub Actions</h4>
        <p>CI/CD with encrypted secrets</p>
      </a>
    </div>
  </div>

</main>

<!-- FOOTER (same on all pages) -->
<footer class="footer">
  <div class="footer-logo">
    <span class="nav-logo-muted">$ </span>dotenv<span class="nav-logo-muted">.space</span>
  </div>

  <div class="footer-links">
    <div class="footer-col">
      <h4>CLI Tool</h4>
      <a href="/cli/">Overview</a>
      <a href="/cli/installation">Installation</a>
      <a href="/cli/commands">Commands</a>
    </div>

    <div class="footer-col">
      <h4>Frameworks</h4>
      <a href="/frameworks/python">Python</a>
      <a href="/frameworks/javascript">JavaScript</a>
      <a href="/frameworks/rust">Rust</a>
      <a href="/frameworks/docker">Docker</a>
    </div>

    <div class="footer-col">
      <h4>Resources</h4>
      <a href="/blog/">Blog</a>
      <a href="/#reference">Reference</a>
      <a href="https://github.com/urwithajit9/dotenv-space-cli" target="_blank">GitHub</a>
    </div>
  </div>

  <div class="footer-bottom">
    <p class="footer-text">Open source (MIT) · Built with Rust · Updated January 2026</p>
  </div>
</footer>

<script src="/assets/js/main.js"></script>
</body>
</html>

==================================================
FILE: ./frameworks/rust.html
==================================================



==================================================
FILE: ./_includes/meta.html
==================================================



==================================================
FILE: ./index.html
==================================================

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>dotenv.space — The Complete .env Reference for Every Stack</title>
<meta name="description" content="The only resource you need for .env files — Python, Django, FastAPI, React, Next.js, Rust, Docker, GitHub Actions. Real examples, troubleshooting, and best practices.">

<!-- Open Graph / Facebook / LinkedIn -->
<meta property="og:type"        content="website">
<meta property="og:url"         content="https://dotenv.space/">
<meta property="og:title"       content="dotenv.space — The Complete .env Reference for Every Stack">
<meta property="og:description" content="The only resource you need for .env files — Python, Django, FastAPI, React, Next.js, Rust, Docker &amp; GitHub Actions. No more hunting through 12 different docs.">
<meta property="og:image"       content="https://dotenv.space/og-image.png">
<meta property="og:image:width"  content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name"   content="dotenv.space">

<!-- Twitter Card -->
<meta name="twitter:card"        content="summary_large_image">
<meta name="twitter:url"         content="https://dotenv.space/">
<meta name="twitter:title"       content="dotenv.space — The Complete .env Reference for Every Stack">
<meta name="twitter:description" content="Everything about .env files in one place — Python, Django, React, Next.js, Rust, Docker, GitHub Actions. Real examples &amp; troubleshooting.">
<meta name="twitter:image"       content="https://dotenv.space/og-image.png">

<!-- Canonical -->
<link rel="canonical" href="https://dotenv.space/">

<!-- Favicon inline SVG -->
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔐</text></svg>">
<style>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');

:root {
  --bg: #060811;
  --bg2: #0b0f1a;
  --surface: #0f1422;
  --surface2: #151929;
  --border: #1e253a;
  --accent: #00e5ff;
  --accent2: #7c3aed;
  --accent3: #10b981;
  --danger: #f43f5e;
  --warn: #f59e0b;
  --text: #e8edf7;
  --muted: #8892a4;
  --dim: #5a647a;
  --radius: 10px;
  --glow: 0 0 30px rgba(0,229,255,.08);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
  font-size: 16px;
  overflow-x: hidden;
}

/* ── NAV ── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(6,8,17,.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  padding: 0 40px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  font-size: 1rem;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: -.02em;
}

.nav-logo span { color: var(--muted); }

.nav-links {
  display: flex;
  gap: 28px;
  list-style: none;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 500;
  transition: color .2s;
  letter-spacing: .01em;
}

.nav-links a:hover { color: var(--accent); }

.nav-cta {
  background: var(--accent);
  color: #000 !important;
  padding: 7px 16px;
  border-radius: 6px;
  font-weight: 600 !important;
  font-size: 13px !important;
  transition: opacity .2s !important;
}

.nav-cta:hover { opacity: .85; color: #000 !important; }

@media (max-width: 768px) {
  .nav-links { display: none; }
  nav { padding: 0 20px; }
}

/* ── HERO ── */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 24px 60px;
  position: relative;
  overflow: hidden;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,229,255,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,229,255,.04) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent);
}

.hero-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(ellipse, rgba(0,229,255,.07) 0%, transparent 65%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0,229,255,.08);
  border: 1px solid rgba(0,229,255,.2);
  color: var(--accent);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 36px;
  position: relative;
}

.hero-badge::before {
  content: '';
  width: 7px; height: 7px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
}

.hero h1 {
  font-family: 'Syne', sans-serif;
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 800;
  line-height: .95;
  letter-spacing: -.04em;
  position: relative;
  margin-bottom: 28px;
}

.hero h1 .mono {
  font-family: 'IBM Plex Mono', monospace;
  color: var(--accent);
  display: block;
  font-size: .65em;
  font-weight: 500;
  letter-spacing: -.01em;
  margin-bottom: 8px;
}

.hero-sub {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--muted);
  max-width: 560px;
  margin: 0 auto 48px;
  font-weight: 300;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 72px;
  position: relative;
}

.btn-primary {
  background: var(--accent);
  color: #000;
  font-weight: 700;
  font-size: 14px;
  padding: 13px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: opacity .2s, transform .2s;
  font-family: 'Syne', sans-serif;
}

.btn-primary:hover { opacity: .88; transform: translateY(-1px); }

.btn-secondary {
  background: var(--surface2);
  color: var(--text);
  font-weight: 500;
  font-size: 14px;
  padding: 13px 28px;
  border-radius: 8px;
  text-decoration: none;
  border: 1px solid var(--border);
  transition: border-color .2s, transform .2s;
}

.btn-secondary:hover { border-color: var(--accent); transform: translateY(-1px); }

/* Stack badges */
.stack-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}

.stack-badge {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px 16px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--muted);
  transition: border-color .2s, color .2s;
}

.stack-badge:hover { border-color: var(--accent); color: var(--accent); }

/* ── MAIN ── */
main { max-width: 900px; margin: 0 auto; padding: 0 24px; }

/* ── SECTIONS ── */
.section { padding: 88px 0; border-top: 1px solid var(--border); }

.section-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: .15em;
  margin-bottom: 12px;
}

h2 {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  letter-spacing: -.03em;
  line-height: 1.1;
  margin-bottom: 20px;
}

h3 {
  font-family: 'Syne', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 44px 0 14px;
  color: var(--text);
}

p {
  color: var(--muted);
  margin-bottom: 18px;
  line-height: 1.8;
}

p strong { color: var(--text); font-weight: 500; }

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

/* ── CODE ── */
.code-wrap { margin: 24px 0; }

.code-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--surface2);
  border: 1px solid var(--border);
  border-bottom: none;
  border-radius: var(--radius) var(--radius) 0 0;
  padding: 9px 18px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--dim);
}

.lang-tag {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
}

.lang-env  { background: rgba(16,185,129,.12); color: #34d399; border: 1px solid rgba(16,185,129,.25); }
.lang-py   { background: rgba(59,130,246,.12);  color: #60a5fa; border: 1px solid rgba(59,130,246,.25); }
.lang-ts   { background: rgba(56,189,248,.12);  color: #7dd3fc; border: 1px solid rgba(56,189,248,.25); }
.lang-rs   { background: rgba(249,115,22,.12);  color: #fb923c; border: 1px solid rgba(249,115,22,.25); }
.lang-yml  { background: rgba(168,85,247,.12);  color: #c084fc; border: 1px solid rgba(168,85,247,.25); }
.lang-sh   { background: rgba(245,158,11,.12);  color: #fbbf24; border: 1px solid rgba(245,158,11,.25); }
.lang-dk   { background: rgba(14,165,233,.12);  color: #38bdf8; border: 1px solid rgba(14,165,233,.25); }

pre {
  background: #070b12;
  border: 1px solid var(--border);
  border-radius: 0 0 var(--radius) var(--radius);
  padding: 22px 24px;
  overflow-x: auto;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13.5px;
  line-height: 1.75;
}

.ic { /* inline code */
  font-family: 'IBM Plex Mono', monospace;
  font-size: .82em;
  background: var(--surface2);
  border: 1px solid var(--border);
  padding: 1px 6px;
  border-radius: 4px;
  color: var(--accent3);
}

/* syntax */
.ck { color: #79c0ff; } /* key */
.cv { color: #a5f3fc; } /* value */
.cc { color: #4a5568; } /* comment */
.cs { color: #86efac; } /* string */
.cw { color: #f87171; } /* keyword */
.cf { color: #c4b5fd; } /* function */
.cn { color: #fde68a; } /* number */

/* ── CALLOUTS ── */
.callout {
  border-radius: var(--radius);
  padding: 18px 22px;
  margin: 24px 0;
  display: flex;
  gap: 14px;
  font-size: 14.5px;
}

.callout p { margin: 0; font-size: 14.5px; }
.ci-icon { font-size: 18px; flex-shrink: 0; }

.danger { background: rgba(244,63,94,.07); border: 1px solid rgba(244,63,94,.2); }
.warn   { background: rgba(245,158,11,.07); border: 1px solid rgba(245,158,11,.2); }
.info   { background: rgba(0,229,255,.06);  border: 1px solid rgba(0,229,255,.15); }
.tip    { background: rgba(16,185,129,.06); border: 1px solid rgba(16,185,129,.15); }

/* ── TABLE ── */
.table-scroll { overflow-x: auto; margin: 24px 0; }

table { width: 100%; border-collapse: collapse; font-size: 14px; }
th {
  background: var(--surface2);
  color: var(--dim);
  font-weight: 500;
  text-align: left;
  padding: 11px 16px;
  border: 1px solid var(--border);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: .07em;
  font-family: 'IBM Plex Mono', monospace;
}

td {
  padding: 12px 16px;
  border: 1px solid var(--border);
  color: var(--muted);
  vertical-align: top;
  line-height: 1.5;
}

tr:nth-child(even) td { background: rgba(255,255,255,.015); }
td strong { color: var(--text); }

/* ── GRID ── */
.g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }
@media (max-width: 640px) { .g2 { grid-template-columns: 1fr; } }

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px;
}

.card h4 { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 10px; }
.card p { font-size: 13.5px; margin: 0; }

/* ── TROUBLESHOOT ── */
details {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin: 12px 0;
}

summary {
  padding: 18px 22px;
  cursor: pointer;
  font-weight: 500;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text);
  font-size: 15px;
}

summary::before {
  content: '▶';
  font-size: 10px;
  color: var(--accent);
  transition: transform .2s;
  flex-shrink: 0;
}

details[open] summary::before { transform: rotate(90deg); }
details[open] { border-color: rgba(0,229,255,.25); }

.detail-body { padding: 0 22px 22px; }
.detail-body p { font-size: 14.5px; }

.t-tag {
  margin-left: auto;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 100px;
}

.tt-bug    { background: rgba(244,63,94,.12); color: #f87171; border: 1px solid rgba(244,63,94,.2); }
.tt-ci     { background: rgba(168,85,247,.12); color: #c084fc; border: 1px solid rgba(168,85,247,.2); }
.tt-docker { background: rgba(14,165,233,.12); color: #38bdf8; border: 1px solid rgba(14,165,233,.2); }
.tt-team   { background: rgba(245,158,11,.12); color: #fbbf24; border: 1px solid rgba(245,158,11,.2); }
.tt-rust   { background: rgba(249,115,22,.12); color: #fb923c; border: 1px solid rgba(249,115,22,.2); }

/* ── JOURNEY BLOCK (story) ── */
.story-box {
  position: relative;
  background: linear-gradient(135deg, rgba(244,63,94,.05) 0%, rgba(124,58,237,.05) 100%);
  border: 1px solid rgba(244,63,94,.2);
  border-left: 3px solid var(--danger);
  border-radius: var(--radius);
  padding: 32px;
  margin: 32px 0;
}

.story-box .quote-mark {
  position: absolute;
  top: 12px; right: 20px;
  font-size: 60px;
  color: var(--danger);
  opacity: .15;
  font-family: 'Syne', sans-serif;
  line-height: 1;
}

/* ── FLOW STEPS ── */
.flow {
  display: flex;
  align-items: stretch;
  gap: 0;
  margin: 28px 0;
  overflow-x: auto;
}

.fstep {
  flex: 1;
  min-width: 130px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px 14px;
  text-align: center;
  font-size: 12.5px;
  position: relative;
}

.fstep:not(:last-child)::after {
  content: '→';
  position: absolute;
  right: -14px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  color: var(--accent);
  font-size: 18px;
}

.fstep:not(:first-child) { margin-left: 14px; }
.fstep .fi { font-size: 22px; margin-bottom: 7px; }
.fstep span { display: block; color: var(--muted); font-size: 11px; margin-top: 3px; }

/* ── CHECKLIST ── */
.checklist {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 28px 0;
}
@media (max-width: 640px) { .checklist { grid-template-columns: 1fr; } }

.cl-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
}

.cl-card h4 {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: .95rem;
  margin-bottom: 12px;
}

.cl-card ul {
  list-style: none;
  padding: 0;
}

.cl-card li {
  color: var(--muted);
  font-size: 13.5px;
  padding: 4px 0;
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.cl-card li::before {
  content: '◻';
  color: var(--accent);
  font-size: 12px;
  flex-shrink: 0;
  margin-top: 2px;
}

/* ── FOOTER ── */
footer {
  border-top: 1px solid var(--border);
  padding: 60px 24px;
  text-align: center;
}

.footer-logo {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1.1rem;
  color: var(--accent);
  margin-bottom: 16px;
}

.footer-logo span { color: var(--dim); }

footer p {
  color: var(--dim);
  font-size: 13.5px;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 24px;
  justify-content: center;
  margin: 20px 0;
}

.footer-links a {
  color: var(--dim);
  font-size: 13px;
  transition: color .2s;
}

.footer-links a:hover { color: var(--accent); text-decoration: none; }

/* ── SECTION DIVIDER ── */
.chip {
  display: inline-block;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  background: var(--surface2);
  border: 1px solid var(--border);
  color: var(--dim);
  padding: 4px 12px;
  border-radius: 100px;
  margin-right: 8px;
  margin-bottom: 8px;
}

.hr-subtle { border: none; border-top: 1px solid var(--border); margin: 40px 0; }

.tag-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }

/* ── COPY BUTTON ── */
.copy-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 5px;
  color: var(--dim);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  padding: 3px 10px;
  cursor: pointer;
  transition: all .18s;
  flex-shrink: 0;
  line-height: 1;
}
.copy-btn:hover { border-color: var(--accent); color: var(--accent); background: rgba(0,229,255,.06); }
.copy-btn.copied { border-color: var(--accent3); color: var(--accent3); background: rgba(16,185,129,.08); }

/* ── MOBILE NAV ── */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.nav-toggle span { display: block; width: 22px; height: 2px; background: var(--muted); border-radius: 2px; transition: all .2s; }

@media (max-width: 768px) {
  .nav-toggle { display: flex; }
  .nav-links {
    display: none;
    position: absolute;
    top: 60px; left: 0; right: 0;
    background: rgba(6,8,17,.97);
    border-bottom: 1px solid var(--border);
    flex-direction: column;
    padding: 16px 24px 20px;
    gap: 4px;
  }
  .nav-links.open { display: flex; }
  .nav-links a { padding: 10px 0; font-size: 15px; border-bottom: 1px solid var(--border); }
  .nav-links li:last-child a { border-bottom: none; }
  .nav-cta { border-bottom: none !important; }
}
</style>

  <!-- Privacy-friendly analytics by Plausible -->
<script async src="https://plausible.io/js/pa-MTFkM-GKbC_JAqVNzkJ49.js"></script>
<script>
  window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()
</script>

</head>
<body>

<!-- ── NAV ── -->
<nav>
  <a class="nav-logo" href="#"><span>$</span> dotenv<span>.space</span></a>
  <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links" id="navLinks">
    <li><a href="#start">Start Here</a></li>
    <li><a href="#python">Python</a></li>
    <li><a href="#frontend">Frontend</a></li>
    <li><a href="#rust">Rust</a></li>
    <li><a href="#cicd">CI/CD</a></li>
    <li><a href="#troubleshoot">Troubleshoot</a></li>
    <li><a href="#checklist" class="nav-cta">Checklist →</a></li>
  </ul>
</nav>

<!-- ── HERO ── -->
<section class="hero">
  <div class="hero-grid"></div>
  <div class="hero-glow"></div>

  <div class="hero-badge">dotenv.space · Updated January 2026</div>

  <h1>
    <span class="mono"># .env</span>
    The Only<br>Reference<br>You Need
  </h1>

  <p class="hero-sub">
    Everything about environment variables — Python, Django, FastAPI, React, Next.js, Vite, Rust, Docker &amp; GitHub Actions — in one place. No more hunting through 12 different docs.
  </p>

  <div class="hero-actions">
    <a href="#start" class="btn-primary">Start Reading →</a>
    <a href="#troubleshoot" class="btn-secondary">Jump to Troubleshoot</a>
  </div>

  <div class="stack-row">
    <div class="stack-badge">Python</div>
    <div class="stack-badge">Django</div>
    <div class="stack-badge">FastAPI</div>
    <div class="stack-badge">React</div>
    <div class="stack-badge">Next.js</div>
    <div class="stack-badge">Vite</div>
    <div class="stack-badge">Rust</div>
    <div class="stack-badge">Docker</div>
    <div class="stack-badge">GitHub Actions</div>
    <div class="stack-badge">AWS Secrets</div>
    <div class="stack-badge">Doppler</div>
  </div>
</section>

<!-- ── MAIN ── -->
<main>

<!-- ═══ THE STORY ═══ -->
<section class="section" id="start">
  <div class="section-label">// Why This Exists</div>
  <h2>The 2 AM Wake-Up Call</h2>

<div class="story-box">
    <div class="quote-mark">"</div>
    <p>This kind of incident is more common in the DevOps community than anyone admits publicly. Tight deadlines, complex projects, one unguarded file — and suddenly you're in damage control. Here's mine.</p>
    <p>I was refactoring an Apache Airflow project — around <strong>20 DAGs</strong> and a Scrapy backend running <strong>300+ spiders</strong>. Not a toy project. Real production infrastructure, tight schedule, pressure to move fast.</p>
    <p>A test <code>.py</code> file slipped through and got pushed to the remote. Almost immediately, emails started flooding in — info alerts, warnings, key revocation notices. Since that key was shared across other services, <strong>those went down too.</strong> One unguarded file. A cascade failure.</p>
    <p>Then came the part that stung most: walking into my development head's office to explain why I needed a new AWS key created. That conversation was more painful than any billing alert.</p>
    <p style="margin-bottom:0;">In hindsight, some blame goes to the tight schedule — but also to my own carelessness. A pre-commit hook or basic secret scanning would have stopped it entirely. <strong>Bots scan GitHub continuously. They found the key within minutes of the push.</strong> That day I became obsessed with safeguards. This site is the reference I wish existed then.</p>
  </div>

  <p>Environment variables are strings. They solve one problem: keeping sensitive config <em>out of your code</em>. The <code class="ic">.env</code> file is just a local convenience for loading them during development. Here's the full picture.</p>

  <h3>The File Hierarchy</h3>

  <div class="table-scroll">
    <table>
      <thead>
        <tr><th>File</th><th>Commit?</th><th>Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>.env</strong></td><td>❌ Never</td><td>Local real values — your actual secrets</td></tr>
        <tr><td><strong>.env.example</strong></td><td>✅ Always</td><td>Template with placeholder values — the contract for your team</td></tr>
        <tr><td><strong>.env.local</strong></td><td>❌ Never</td><td>Machine-specific overrides (Next.js / Vite convention)</td></tr>
        <tr><td><strong>.env.development</strong></td><td>✅ OK*</td><td>Non-secret dev defaults shared by the team</td></tr>
        <tr><td><strong>.env.production</strong></td><td>❌ Never</td><td>Managed by infra/CI — never lives in the repo</td></tr>
        <tr><td><strong>.env.test</strong></td><td>✅ OK*</td><td>CI test values (mock keys only)</td></tr>
      </tbody>
    </table>
  </div>
  <p style="font-size:13px; color: var(--dim);">* Only commit these if they contain zero real credentials — test DB, mock API keys, etc.</p>

  <div class="code-wrap">
    <div class="code-bar"><span>📄 .gitignore — put this in every project before writing a line of code</span><span class="lang-tag lang-sh">SHELL</span></div>
    <pre><span class="cc"># Env files — never commit</span>
.env
.env.local
.env.production
.env.staging
.env.*.local

<span class="cc"># DO commit this:</span>
<span class="cc"># .env.example  ← don't add to .gitignore</span></pre>
  </div>

  <div class="callout danger">
    <span class="ci-icon">🚨</span>
    <p><strong>Already committed secrets?</strong> Simply deleting the file is not enough — Git history still contains them. Use <code class="ic">git filter-repo</code> or BFG Repo Cleaner to purge history AND immediately rotate every exposed key. Assume they're compromised the moment they touched a remote.</p>
  </div>
</section>

<!-- ═══ PYTHON ═══ -->
<section class="section" id="python">
  <div class="section-label">// Stack Guide</div>
  <h2>Python, Django &amp; FastAPI</h2>

  <h3>Bare Python Script — python-dotenv</h3>

  <div class="code-wrap">
    <div class="code-bar"><span>Terminal</span><span class="lang-tag lang-sh">SHELL</span></div>
    <pre>pip install python-dotenv</pre>
  </div>

  <div class="code-wrap">
    <div class="code-bar"><span>config.py — your single source of truth</span><span class="lang-tag lang-py">PYTHON</span></div>
    <pre><span class="cw">import</span> os
<span class="cw">from</span> dotenv <span class="cw">import</span> load_dotenv
<span class="cw">from</span> pathlib <span class="cw">import</span> Path

<span class="cc"># Always resolve relative to this file — not the CWD</span>
load_dotenv(dotenv_path=Path(<span class="cf">__file__</span>).resolve().parent / <span class="cs">".env"</span>)

<span class="ck">DATABASE_URL</span> = os.getenv(<span class="cs">"DATABASE_URL"</span>)
<span class="ck">SECRET_KEY</span>   = os.environ[<span class="cs">"SECRET_KEY"</span>]     <span class="cc"># raises KeyError if missing</span>
<span class="ck">DEBUG</span>        = os.getenv(<span class="cs">"DEBUG"</span>, <span class="cs">"False"</span>).lower() <span class="cw">in</span> (<span class="cs">"true"</span>, <span class="cs">"1"</span>)

<span class="cc"># Fail fast at startup — not silently at runtime</span>
<span class="cw">def</span> <span class="cf">validate_env</span>():
    required = [<span class="cs">"SECRET_KEY"</span>, <span class="cs">"DATABASE_URL"</span>]
    missing  = [k <span class="cw">for</span> k <span class="cw">in</span> required <span class="cw">if not</span> os.getenv(k)]
    <span class="cw">if</span> missing:
        <span class="cw">raise</span> <span class="cf">RuntimeError</span>(<span class="cs">f"Missing required env vars: {missing}"</span>)

validate_env()</pre>
  </div>

  <h3>Django — django-environ</h3>

  <div class="code-wrap">
    <div class="code-bar"><span>settings.py</span><span class="lang-tag lang-py">PYTHON</span></div>
    <pre><span class="cw">import</span> environ
<span class="cw">from</span> pathlib <span class="cw">import</span> Path

<span class="ck">BASE_DIR</span> = Path(<span class="cf">__file__</span>).resolve().parent.parent
<span class="ck">env</span> = environ.<span class="cf">Env</span>(DEBUG=(<span class="cf">bool</span>, <span class="cw">False</span>), ALLOWED_HOSTS=(<span class="cf">list</span>, [<span class="cs">"localhost"</span>]))
environ.Env.<span class="cf">read_env</span>(BASE_DIR / <span class="cs">".env"</span>)

<span class="ck">SECRET_KEY</span>     = env(<span class="cs">"SECRET_KEY"</span>)
<span class="ck">DEBUG</span>          = env(<span class="cs">"DEBUG"</span>)
<span class="ck">ALLOWED_HOSTS</span>  = env(<span class="cs">"ALLOWED_HOSTS"</span>)

<span class="ck">DATABASES</span>      = {<span class="cs">"default"</span>: env.<span class="cf">db</span>(<span class="cs">"DATABASE_URL"</span>)}
<span class="ck">CACHES</span>         = {<span class="cs">"default"</span>: env.<span class="cf">cache</span>(<span class="cs">"REDIS_URL"</span>)}

<span class="ck">AWS_ACCESS_KEY_ID</span>     = env(<span class="cs">"AWS_ACCESS_KEY_ID"</span>, default=<span class="cw">None</span>)
<span class="ck">AWS_SECRET_ACCESS_KEY</span> = env(<span class="cs">"AWS_SECRET_ACCESS_KEY"</span>, default=<span class="cw">None</span>)
<span class="ck">STRIPE_SECRET_KEY</span>     = env(<span class="cs">"STRIPE_SECRET_KEY"</span>)
<span class="ck">OPENAI_API_KEY</span>        = env(<span class="cs">"OPENAI_API_KEY"</span>, default=<span class="cw">None</span>)</pre>
  </div>

  <h3>FastAPI — pydantic-settings (Type-Safe)</h3>

  <div class="code-wrap">
    <div class="code-bar"><span>core/config.py</span><span class="lang-tag lang-py">PYTHON</span></div>
    <pre><span class="cw">from</span> pydantic_settings <span class="cw">import</span> BaseSettings, SettingsConfigDict
<span class="cw">from</span> pydantic <span class="cw">import</span> AnyUrl, SecretStr
<span class="cw">from</span> functools <span class="cw">import</span> lru_cache

<span class="cw">class</span> <span class="cf">Settings</span>(BaseSettings):
    model_config = SettingsConfigDict(env_file=<span class="cs">".env"</span>, case_sensitive=<span class="cw">False</span>)

    app_name:     <span class="cf">str</span> = <span class="cs">"My API"</span>
    debug:        <span class="cf">bool</span> = <span class="cw">False</span>
    database_url: AnyUrl
    secret_key:   <span class="cf">SecretStr</span>  <span class="cc"># masked in logs: **********</span>
    openai_key:   <span class="cf">SecretStr</span>
    redis_url:    <span class="cf">str</span> | <span class="cw">None</span> = <span class="cw">None</span>

<span class="cw">@lru_cache</span>
<span class="cw">def</span> <span class="cf">get_settings</span>() -> Settings:
    <span class="cw">return</span> <span class="cf">Settings</span>()

<span class="cc"># Usage anywhere: from core.config import get_settings</span>
<span class="cc">#                 settings = get_settings()</span></pre>
  </div>

  <div class="callout info">
    <span class="ci-icon">💡</span>
    <p><strong>SecretStr</strong> in Pydantic displays as <code class="ic">**********</code> in logs and tracebacks. Always use it for API keys, passwords, and tokens to prevent accidental exposure.</p>
  </div>

  <div class="code-wrap">
    <div class="code-bar"><span>📄 .env — Python/Django example</span><span class="lang-tag lang-env">ENV</span></div>
    <pre><span class="cc"># App</span>
<span class="ck">SECRET_KEY</span>=<span class="cv">django-insecure-dev-key-changeme</span>
<span class="ck">DEBUG</span>=<span class="cv">True</span>
<span class="ck">ALLOWED_HOSTS</span>=<span class="cv">localhost,127.0.0.1</span>

<span class="cc"># Database</span>
<span class="ck">DATABASE_URL</span>=<span class="cv">postgresql://user:pass@localhost:5432/mydb</span>
<span class="ck">REDIS_URL</span>=<span class="cv">redis://localhost:6379/0</span>

<span class="cc"># Third-party</span>
<span class="ck">STRIPE_SECRET_KEY</span>=<span class="cv">sk_test_xxxxxxxxxxxxxxxx</span>
<span class="ck">OPENAI_API_KEY</span>=<span class="cv">sk-proj-xxxxxxxxxxxxxxxx</span>
<span class="ck">AWS_ACCESS_KEY_ID</span>=<span class="cv">AKIAIOSFODNN7EXAMPLE</span>
<span class="ck">AWS_SECRET_ACCESS_KEY</span>=<span class="cv">wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY</span></pre>
  </div>
</section>

<!-- ═══ FRONTEND ═══ -->
<section class="section" id="frontend">
  <div class="section-label">// Stack Guide</div>
  <h2>React, Next.js &amp; Vite</h2>

  <div class="callout danger">
    <span class="ci-icon">🚨</span>
    <p><strong>Frontend vars are public.</strong> Anything bundled into your JS is visible in DevTools. Only put <em>public-facing keys</em> (Stripe publishable, Sentry DSN, analytics) in frontend env vars. Secret keys belong on the server only.</p>
  </div>

  <h3>Next.js — The Prefix Rule</h3>
  <p>Next.js uses a deliberate two-tier system. Variables prefixed with <code class="ic">NEXT_PUBLIC_</code> are inlined into the browser bundle at build time. All others are server-only.</p>

  <div class="code-wrap">
    <div class="code-bar"><span>📄 .env.local — Next.js project</span><span class="lang-tag lang-env">ENV</span></div>
    <pre><span class="cc"># Server-only — NEVER reaches the browser</span>
<span class="ck">DATABASE_URL</span>=<span class="cv">postgresql://user:pass@localhost/mydb</span>
<span class="ck">STRIPE_SECRET_KEY</span>=<span class="cv">sk_test_xxxxxxx</span>
<span class="ck">OPENAI_API_KEY</span>=<span class="cv">sk-proj-xxxxxxx</span>

<span class="cc"># NEXT_PUBLIC_ → inlined into browser bundle at build time</span>
<span class="ck">NEXT_PUBLIC_STRIPE_PK</span>=<span class="cv">pk_test_xxxxxxx</span>
<span class="ck">NEXT_PUBLIC_API_URL</span>=<span class="cv">http://localhost:8000</span>
<span class="ck">NEXT_PUBLIC_SENTRY_DSN</span>=<span class="cv">https://<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="ccadaeaf8cbfa9a2b8beb5e2a5a3">[email&#160;protected]</a>/123</span></pre>
  </div>

  <div class="code-wrap">
    <div class="code-bar"><span>app/actions/payment.ts — server action, secret key safe here</span><span class="lang-tag lang-ts">TYPESCRIPT</span></div>
    <pre><span class="cs">"use server"</span>
<span class="cw">import</span> Stripe <span class="cw">from</span> <span class="cs">"stripe"</span>

<span class="cc">// Runs on server — process.env.STRIPE_SECRET_KEY never reaches browser</span>
<span class="cw">const</span> stripe = <span class="cw">new</span> <span class="cf">Stripe</span>(process.env.<span class="ck">STRIPE_SECRET_KEY</span>!)

<span class="cw">export async function</span> <span class="cf">createCheckout</span>(priceId: string) {
  <span class="cw">const</span> session = <span class="cw">await</span> stripe.checkout.sessions.<span class="cf">create</span>({
    line_items: [{ price: priceId, quantity: <span class="cn">1</span> }],
    mode: <span class="cs">"payment"</span>,
    success_url: <span class="cs">`${process.env.NEXT_PUBLIC_API_URL}/success`</span>,
  })
  <span class="cw">return</span> session.url
}</pre>
  </div>

  <h3>Next.js — Load Priority Order</h3>
  <div class="flow">
    <div class="fstep"><div class="fi">📄</div><strong>.env</strong><span>Base defaults</span></div>
    <div class="fstep"><div class="fi">🌍</div><strong>.env.local</strong><span>Local overrides</span></div>
    <div class="fstep"><div class="fi">🔧</div><strong>.env.development</strong><span>Dev-specific</span></div>
    <div class="fstep"><div class="fi">🔑</div><strong>.env.development.local</strong><span>Highest priority</span></div>
  </div>

  <h3>Vite — VITE_ Prefix</h3>
  <div class="code-wrap">
    <div class="code-bar"><span>📄 .env — Vite project</span><span class="lang-tag lang-env">ENV</span></div>
    <pre><span class="cc"># VITE_ prefix = exposed to browser</span>
<span class="ck">VITE_API_URL</span>=<span class="cv">http://localhost:8000</span>
<span class="ck">VITE_STRIPE_PK</span>=<span class="cv">pk_test_xxxxxxx</span>

<span class="cc"># No prefix = build-scripts only (not bundled)</span>
<span class="ck">BUILD_TIMESTAMP</span>=<span class="cv">2026-01-01</span></pre>
  </div>

  <div class="code-wrap">
    <div class="code-bar"><span>src/vite-env.d.ts — add TypeScript types</span><span class="lang-tag lang-ts">TYPESCRIPT</span></div>
    <pre><span class="cc">// src/vite-env.d.ts</span>
<span class="cw">interface</span> ImportMetaEnv {
  <span class="cw">readonly</span> <span class="ck">VITE_API_URL</span>: string
  <span class="cw">readonly</span> <span class="ck">VITE_STRIPE_PK</span>: string
}
<span class="cw">interface</span> ImportMeta {
  <span class="cw">readonly</span> env: ImportMetaEnv
}

<span class="cc">// Usage: import.meta.env.VITE_API_URL</span></pre>
  </div>

  <h3>Prefix Quick Reference</h3>
  <div class="table-scroll">
    <table>
      <thead><tr><th>Framework</th><th>Browser Prefix</th><th>Access</th></tr></thead>
      <tbody>
        <tr><td><strong>Next.js</strong></td><td><code class="ic">NEXT_PUBLIC_</code></td><td><code class="ic">process.env.NEXT_PUBLIC_X</code></td></tr>
        <tr><td><strong>Vite</strong></td><td><code class="ic">VITE_</code></td><td><code class="ic">import.meta.env.VITE_X</code></td></tr>
        <tr><td><strong>Create React App</strong></td><td><code class="ic">REACT_APP_</code></td><td><code class="ic">process.env.REACT_APP_X</code></td></tr>
        <tr><td><strong>Gatsby</strong></td><td><code class="ic">GATSBY_</code></td><td><code class="ic">process.env.GATSBY_X</code></td></tr>
        <tr><td><strong>Astro</strong></td><td><code class="ic">PUBLIC_</code></td><td><code class="ic">import.meta.env.PUBLIC_X</code></td></tr>
        <tr><td><strong>SvelteKit</strong></td><td><code class="ic">PUBLIC_</code></td><td><code class="ic">$env/static/public</code></td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ═══ RUST ═══ -->
<section class="section" id="rust">
  <div class="section-label">// Stack Guide</div>
  <h2>Rust — dotenvy &amp; config</h2>

  <div class="code-wrap">
    <div class="code-bar"><span>Cargo.toml</span><span class="lang-tag lang-rs">TOML</span></div>
    <pre>[dependencies]
<span class="ck">dotenvy</span>  = <span class="cs">"0.15"</span>
<span class="ck">config</span>   = <span class="cs">"0.14"</span>
<span class="ck">serde</span>    = { version = <span class="cs">"1"</span>, features = [<span class="cs">"derive"</span>] }
<span class="ck">secrecy</span>  = { version = <span class="cs">"0.8"</span>, features = [<span class="cs">"serde"</span>] }
<span class="ck">anyhow</span>   = <span class="cs">"1"</span>
<span class="ck">tokio</span>    = { version = <span class="cs">"1"</span>, features = [<span class="cs">"full"</span>] }</pre>
  </div>

  <h3>Simple — dotenvy</h3>
  <div class="code-wrap">
    <div class="code-bar"><span>src/main.rs</span><span class="lang-tag lang-rs">RUST</span></div>
    <pre><span class="cw">fn</span> <span class="cf">main</span>() -> anyhow::Result<span class="cc">&lt;</span>()<span class="cc">&gt;</span> {
    dotenvy::<span class="cf">dotenv</span>().ok();  <span class="cc">// no-op if .env doesn't exist</span>

    <span class="cw">let</span> db_url: String = std::env::<span class="cf">var</span>(<span class="cs">"DATABASE_URL"</span>)
        .<span class="cf">expect</span>(<span class="cs">"DATABASE_URL must be set"</span>);

    <span class="cw">let</span> port: u16 = std::env::<span class="cf">var</span>(<span class="cs">"PORT"</span>)
        .<span class="cf">unwrap_or_else</span>(|_| <span class="cs">"8000"</span>.<span class="cf">to_string</span>())
        .<span class="cf">trim</span>().<span class="cf">parse</span>()
        .<span class="cf">expect</span>(<span class="cs">"PORT must be a valid u16"</span>);

    <span class="cf">Ok</span>(())
}</pre>
  </div>

  <h3>Production — config + secrecy</h3>
  <div class="code-wrap">
    <div class="code-bar"><span>src/config.rs</span><span class="lang-tag lang-rs">RUST</span></div>
    <pre><span class="cw">use</span> config::{Config, Environment};
<span class="cw">use</span> secrecy::SecretString;
<span class="cw">use</span> serde::Deserialize;

<span class="cc">#[derive(Debug, Deserialize, Clone)]</span>
<span class="cw">pub struct</span> <span class="cf">DatabaseConfig</span> {
    <span class="cw">pub</span> url:             SecretString,  <span class="cc">// zeroized on drop, hidden in Debug</span>
    <span class="cw">pub</span> max_connections: u32,
}

<span class="cc">#[derive(Debug, Deserialize, Clone)]</span>
<span class="cw">pub struct</span> <span class="cf">AppConfig</span> {
    <span class="cw">pub</span> environment: String,
    <span class="cw">pub</span> port:        u16,
    <span class="cw">pub</span> database:    DatabaseConfig,
    <span class="cw">pub</span> secret_key:  SecretString,
}

<span class="cw">pub fn</span> <span class="cf">load_config</span>() -> anyhow::Result<span class="cc">&lt;</span>AppConfig<span class="cc">&gt;</span> {
    dotenvy::<span class="cf">dotenv</span>().ok();

    <span class="cw">let</span> cfg = Config::builder()
        .<span class="cf">add_source</span>(Environment::<span class="cf">default</span>().<span class="cf">separator</span>(<span class="cs">"__"</span>))
        .<span class="cf">build</span>()?;
        <span class="cc">// DATABASE__URL=postgres://... → config.database.url</span>
        <span class="cc">// DATABASE__MAX_CONNECTIONS=10</span>

    <span class="cf">Ok</span>(cfg.<span class="cf">try_deserialize</span>()?)
}</pre>
  </div>
</section>

<!-- ═══ ALTERNATIVES ═══ -->
<section class="section" id="alternatives">
  <div class="section-label">// Beyond .env Files</div>
  <h2>All Alternatives at a Glance</h2>

  <p><code class="ic">.env</code> files are fine for local dev. For production, use a proper secrets manager. Here's the full landscape.</p>

  <div class="table-scroll">
    <table>
      <thead>
        <tr><th>Tool</th><th>Best For</th><th>Cost</th><th>Auto-Rotation</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>.env files</strong></td><td>Local development</td><td>Free</td><td>❌</td></tr>
        <tr><td><strong>AWS Secrets Manager</strong></td><td>AWS workloads, production</td><td>~$0.40/secret/mo</td><td>✅</td></tr>
        <tr><td><strong>AWS SSM Parameter Store</strong></td><td>AWS, budget-conscious</td><td>Free / $0.05 advanced</td><td>❌</td></tr>
        <tr><td><strong>HashiCorp Vault</strong></td><td>Multi-cloud, enterprise</td><td>Free (self-hosted)</td><td>✅</td></tr>
        <tr><td><strong>Doppler</strong></td><td>Multi-env teams, DX-first</td><td>Free tier / $6+/mo</td><td>✅</td></tr>
        <tr><td><strong>Infisical</strong></td><td>Open-source Doppler alternative</td><td>Free (self-hosted)</td><td>✅</td></tr>
        <tr><td><strong>GCP Secret Manager</strong></td><td>GCP workloads</td><td>$0.06/10k accesses</td><td>✅</td></tr>
        <tr><td><strong>Azure Key Vault</strong></td><td>Azure workloads</td><td>$0.03/10k ops</td><td>✅</td></tr>
        <tr><td><strong>Vercel / Railway / Render env UI</strong></td><td>PaaS deployments</td><td>Included</td><td>❌</td></tr>
      </tbody>
    </table>
  </div>

  <div class="code-wrap">
    <div class="code-bar"><span>Terminal — Doppler: zero .env files in production</span><span class="lang-tag lang-sh">SHELL</span></div>
    <pre><span class="cc"># Install Doppler CLI</span>
brew install dopplerhq/cli/doppler

<span class="cc"># Authenticate and link project</span>
doppler login && doppler setup

<span class="cc"># Doppler injects secrets — no .env file needed</span>
doppler run -- python manage.py runserver
doppler run -- npm run dev
doppler run -- cargo run</pre>
  </div>
</section>

<!-- ═══ CI/CD ═══ -->
<section class="section" id="cicd">
  <div class="section-label">// CI/CD &amp; Containers</div>
  <h2>GitHub Actions &amp; Docker</h2>

  <p>In CI/CD pipelines, there are no <code class="ic">.env</code> files. Variables are injected via encrypted secrets from your platform. Here's the right way.</p>

  <h3>GitHub Actions</h3>

  <div class="code-wrap">
    <div class="code-bar"><span>.github/workflows/deploy.yml</span><span class="lang-tag lang-yml">YAML</span></div>
    <pre>name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    env:
      <span class="cc"># Injected from Settings → Secrets and variables → Actions</span>
      <span class="ck">DATABASE_URL</span>:       <span class="cv">${{ secrets.TEST_DATABASE_URL }}</span>
      <span class="ck">SECRET_KEY</span>:         <span class="cv">${{ secrets.DJANGO_SECRET_KEY }}</span>
      <span class="ck">STRIPE_SECRET_KEY</span>:  <span class="cv">${{ secrets.STRIPE_SECRET_KEY }}</span>
    steps:
      - uses: actions/checkout@v4
      - name: Run tests
        run: python manage.py test

  deploy-prod:
    environment: production   <span class="cc"># requires manual approval</span>
    needs: test
    steps:
      - name: Deploy
        env:
          <span class="ck">API_KEY</span>: <span class="cv">${{ secrets.API_KEY }}</span>   <span class="cc"># production value</span>
        run: |
          docker compose up -d --build</pre>
  </div>

  <h3>Docker Compose</h3>

  <div class="code-wrap">
    <div class="code-bar"><span>docker-compose.yml — development</span><span class="lang-tag lang-dk">DOCKER</span></div>
    <pre>services:
  api:
    build: ./backend
    env_file:
      - ./backend/.env        <span class="cc"># path relative to compose file</span>
    depends_on:
      db:
        condition: service_healthy

  web:
    build: ./frontend
    env_file:
      - ./frontend/.env.local
    ports: ["3000:3000"]

  db:
    image: postgres:16
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: localpass
      POSTGRES_DB: mydb
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]</pre>
  </div>

  <div class="code-wrap">
    <div class="code-bar"><span>Dockerfile — correct approach</span><span class="lang-tag lang-dk">DOCKER</span></div>
    <pre>FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

<span class="cc"># ✅ Non-secret config as ENV is fine</span>
ENV PYTHONUNBUFFERED=1
ENV PORT=8000

<span class="cc"># 🚨 Never bake secrets into image layers</span>
<span class="cc"># ENV SECRET_KEY=mykey   ← visible in docker inspect</span>
<span class="cc"># ENV DATABASE_URL=...   ← visible in every derived image</span>

EXPOSE $PORT
CMD ["gunicorn", "myapp.wsgi:application"]</pre>
  </div>

  <div class="callout warn">
    <span class="ci-icon">⚠️</span>
    <p><strong>Build-time secret in Next.js?</strong> <code class="ic">NEXT_PUBLIC_</code> variables must exist at <code class="ic">next build</code> time — not just at runtime. Pass them to your CI build step explicitly, otherwise they'll be <code class="ic">undefined</code> in the bundle even if set on the server.</p>
  </div>
</section>

<!-- ═══ TROUBLESHOOT ═══ -->
<section class="section" id="troubleshoot">
  <div class="section-label">// The Hard Lessons</div>
  <h2>10 Bugs You'll Actually Hit</h2>

  <details>
    <summary>1. Variables are undefined / None everywhere<span class="t-tag tt-bug">Common</span></summary>
    <div class="detail-body">
      <p><strong>Cause 1:</strong> <code class="ic">load_dotenv()</code> was called after importing a module that already read the variable. Move it to the very top of your entry point, before all other imports.</p>
      <p><strong>Cause 2:</strong> Wrong path. If your working directory differs from the file location:</p>
      <div class="code-wrap"><div class="code-bar"><span></span></div>
      <pre>load_dotenv(dotenv_path=Path(<span class="cf">__file__</span>).resolve().parent / <span class="cs">".env"</span>)</pre></div>
      <p><strong>Cause 3:</strong> A real OS env var with the same name exists and <code class="ic">override=False</code> (the default) blocks the .env value. Add <code class="ic">override=True</code>.</p>
    </div>
  </details>

  <details>
    <summary>2. NEXT_PUBLIC_ variable is undefined in production<span class="t-tag tt-ci">CI/CD</span></summary>
    <div class="detail-body">
      <p>These are inlined at <strong>build time</strong>. If they're not set when you run <code class="ic">next build</code>, they'll be <code class="ic">undefined</code> even if the server has them. Pass them to your build step:</p>
      <div class="code-wrap"><div class="code-bar"><span>GitHub Actions</span><span class="lang-tag lang-yml">YAML</span></div>
      <pre>- name: Build Next.js
  env:
    <span class="ck">NEXT_PUBLIC_API_URL</span>: <span class="cv">${{ secrets.PRODUCTION_API_URL }}</span>
  run: npm run build</pre></div>
    </div>
  </details>

  <details>
    <summary>3. Docker Compose "env_file not found" error<span class="t-tag tt-docker">Docker</span></summary>
    <div class="detail-body">
      <p>Docker Compose resolves <code class="ic">env_file</code> paths relative to the <strong>Compose file location</strong>, not where you ran the command. Also ensure the file exists first — create an empty one if needed: <code class="ic">touch backend/.env</code>.</p>
    </div>
  </details>

  <details>
    <summary>4. Boolean env vars behave unexpectedly ("False" is truthy)<span class="t-tag tt-bug">Bug</span></summary>
    <div class="detail-body">
      <p>Every env var is a <strong>string</strong>. <code class="ic">os.getenv("DEBUG")</code> returns the string <code class="ic">"False"</code> — which is truthy in Python. Always parse booleans explicitly:</p>
      <div class="code-wrap"><div class="code-bar"><span></span></div>
      <pre><span class="cc"># ❌ Wrong — "False" string is truthy</span>
<span class="cw">if</span> os.getenv(<span class="cs">"DEBUG"</span>): ...

<span class="cc"># ✅ Correct</span>
<span class="ck">DEBUG</span> = os.getenv(<span class="cs">"DEBUG"</span>, <span class="cs">"False"</span>).lower() <span class="cw">in</span> (<span class="cs">"true"</span>, <span class="cs">"1"</span>, <span class="cs">"yes"</span>)</pre></div>
    </div>
  </details>

  <details>
    <summary>5. Secrets appear in Sentry / error logs<span class="t-tag tt-bug">Security</span></summary>
    <div class="detail-body">
      <p>Uncaught exceptions can capture local variable frames — including your settings dict. Use <code class="ic">SecretStr</code> (Pydantic) or <code class="ic">SecretString</code> (Rust secrecy), and configure Sentry to scrub sensitive keys:</p>
      <div class="code-wrap"><div class="code-bar"><span></span></div>
      <pre>sentry_sdk.<span class="cf">init</span>(dsn=..., send_default_pii=<span class="cw">False</span>)</pre></div>
    </div>
  </details>

  <details>
    <summary>6. Vite: import.meta.env.VITE_X is undefined<span class="t-tag tt-bug">Common</span></summary>
    <div class="detail-body">
      <p>Two causes: (1) variable name doesn't start with <code class="ic">VITE_</code> — Vite strips all others. (2) You modified <code class="ic">.env</code> while the dev server was running — Vite requires a full server restart (not HMR) to pick up new env vars.</p>
    </div>
  </details>

  <details>
    <summary>7. GitHub Actions: secret shows as *** but app still fails<span class="t-tag tt-ci">CI/CD</span></summary>
    <div class="detail-body">
      <p>*** just means GitHub masked it in logs — the value could still be wrong. Check: (1) Secret name mismatch — <code class="ic">secrets.MY_SECRET</code> vs actual GitHub secret name. (2) Secret stored under a specific Environment but the job doesn't set <code class="ic">environment:</code>. (3) Trailing whitespace in the stored value. Debug with:</p>
      <div class="code-wrap"><div class="code-bar"><span></span></div>
      <pre>- run: echo <span class="cs">"Length: ${#MY_SECRET}"</span>
  env:
    <span class="ck">MY_SECRET</span>: <span class="cv">${{ secrets.MY_SECRET }}</span></pre></div>
    </div>
  </details>

  <details>
    <summary>8. Works locally, fails in production (ALLOWED_HOSTS / DB host)<span class="t-tag tt-bug">Django</span></summary>
    <div class="detail-body">
      <p>Two classic Django mismatches: (1) <code class="ic">ALLOWED_HOSTS</code> doesn't include your production domain. (2) <code class="ic">DATABASE_URL</code> uses <code class="ic">localhost</code> as host — in Docker, use the service name (<code class="ic">db</code>) instead:</p>
      <div class="code-wrap"><div class="code-bar"><span></span></div>
      <pre><span class="cc"># Local</span>   DATABASE_URL=postgresql://user:pass@localhost:5432/mydb
<span class="cc"># Docker</span>  DATABASE_URL=postgresql://user:pass@db:5432/mydb
<span class="cc"># Prod</span>    DATABASE_URL=postgresql://user:<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="f989988a8ab994809d9bd78b9d8ad7989498839697988e8ad79a9694">[email&#160;protected]</a>:5432/mydb</pre></div>
    </div>
  </details>

  <details>
    <summary>9. Rust: parse panic on env var with whitespace or wrong type<span class="t-tag tt-rust">Rust</span></summary>
    <div class="detail-body">
      <p>A value like <code class="ic">PORT=8000 </code> (trailing space) causes <code class="ic">.parse::&lt;u16&gt;()</code> to fail. Always trim and handle the error:</p>
      <div class="code-wrap"><div class="code-bar"><span></span></div>
      <pre><span class="cw">let</span> port: u16 = std::env::<span class="cf">var</span>(<span class="cs">"PORT"</span>)
    .<span class="cf">unwrap_or_else</span>(|_| <span class="cs">"8000"</span>.<span class="cf">to_string</span>())
    .<span class="cf">trim</span>()
    .<span class="cf">parse</span>()
    .<span class="cf">expect</span>(<span class="cs">"PORT must be a valid u16"</span>);</pre></div>
    </div>
  </details>

  <details>
    <summary>10. Teammate added a new variable — app breaks silently for others<span class="t-tag tt-team">Team</span></summary>
    <div class="detail-body">
      <p>The new var is in <code class="ic">.env.example</code> but not in teammates' local <code class="ic">.env</code>. Add a validation script and run it in CI and as a pre-commit hook:</p>
      <div class="code-wrap"><div class="code-bar"><span>scripts/check_env.py</span><span class="lang-tag lang-py">PYTHON</span></div>
      <pre><span class="cw">import</span> sys

<span class="cw">def</span> <span class="cf">keys</span>(f):
    <span class="cw">return</span> {l.<span class="cf">split</span>(<span class="cs">"="</span>,<span class="cn">1</span>)[<span class="cn">0</span>].<span class="cf">strip</span>() <span class="cw">for</span> l <span class="cw">in</span> <span class="cf">open</span>(f)
            <span class="cw">if</span> l.<span class="cf">strip</span>() <span class="cw">and not</span> l.<span class="cf">startswith</span>(<span class="cs">"#"</span>) <span class="cw">and</span> <span class="cs">"="</span> <span class="cw">in</span> l}

missing = <span class="cf">keys</span>(<span class="cs">".env.example"</span>) - <span class="cf">keys</span>(<span class="cs">".env"</span>)
<span class="cw">if</span> missing:
    <span class="cf">print</span>(<span class="cs">f"❌ Missing in .env: {missing}"</span>); sys.<span class="cf">exit</span>(<span class="cn">1</span>)
<span class="cf">print</span>(<span class="cs">"✅ .env is complete"</span>)</pre></div>
    </div>
  </details>
</section>

<!-- ═══ CHECKLIST ═══ -->
<section class="section" id="checklist">
  <div class="section-label">// Before Every Deploy</div>
  <h2>The Complete Checklist</h2>

  <p>Run through this before every project and every deploy. It's the distilled lesson from a lot of painful incidents.</p>

  <div class="checklist">
    <div class="cl-card">
      <h4>🔒 Security</h4>
      <ul>
        <li><code class="ic">.env</code> is in <code class="ic">.gitignore</code></li>
        <li><code class="ic">.env.example</code> is committed and current</li>
        <li>No secrets in Dockerfile <code class="ic">ENV</code></li>
        <li>No secret keys in frontend bundle</li>
        <li><code class="ic">SecretStr</code> / <code class="ic">SecretString</code> in use</li>
        <li>GitHub Push Protection enabled</li>
      </ul>
    </div>
    <div class="cl-card">
      <h4>🚀 Production</h4>
      <ul>
        <li>All secrets injected via CI/CD secrets</li>
        <li>Different values for dev / staging / prod</li>
        <li>Startup validation — fail fast on missing vars</li>
        <li>Rotation plan documented for all keys</li>
        <li>Sentry/logging scrubs sensitive fields</li>
        <li>Docker secrets for Swarm containers</li>
      </ul>
    </div>
    <div class="cl-card">
      <h4>👥 Team</h4>
      <ul>
        <li>Setup script copies <code class="ic">.env.example → .env</code></li>
        <li>CI compares <code class="ic">.env.example</code> vs <code class="ic">.env</code></li>
        <li>README says where to get real values</li>
        <li>Shared secrets in a secrets manager</li>
        <li>Pre-commit hook checks for leaked keys</li>
      </ul>
    </div>
    <div class="cl-card">
      <h4>🚨 Emergency</h4>
      <ul>
        <li>Know how to revoke each key immediately</li>
        <li><code class="ic">git filter-repo</code> ready for history purge</li>
        <li>AWS GuardDuty / CloudTrail active</li>
        <li>Canary tokens set as honeypots</li>
        <li>Incident response runbook exists</li>
      </ul>
    </div>
  </div>

  <div class="callout tip">
    <span class="ci-icon">✅</span>
    <p><strong>Enable GitHub Push Protection right now.</strong> Settings → Code security → Push protection. It blocks pushes containing AWS keys, Stripe keys, GitHub tokens, and 100+ other secret patterns automatically. Free, 30 seconds to enable. Do it now before you forget.</p>
  </div>

  <div class="hr-subtle"></div>

  <p>The bots are scanning GitHub right now. Continuously. They find exposed keys within <strong>minutes</strong> of a push. The prevention is simple — the recovery is not.</p>

  <div class="tag-row">
    <span class="chip">python</span>
    <span class="chip">django</span>
    <span class="chip">fastapi</span>
    <span class="chip">nextjs</span>
    <span class="chip">react</span>
    <span class="chip">vite</span>
    <span class="chip">rust</span>
    <span class="chip">docker</span>
    <span class="chip">github-actions</span>
    <span class="chip">secrets-management</span>
    <span class="chip">devops</span>
    <span class="chip">security</span>
  </div>
</section>

</main>

<!-- ── FOOTER ── -->
<footer>
  <div class="footer-logo"><span>$ </span>dotenv<span>.space</span></div>
  <div class="footer-links">
    <a href="#start">Start Here</a>
    <a href="#python">Python</a>
    <a href="#frontend">Frontend</a>
    <a href="#rust">Rust</a>
    <a href="#cicd">CI/CD</a>
    <a href="#troubleshoot">Troubleshooting</a>
    <a href="#checklist">Checklist</a>
  </div>
  <p>The complete environment variable reference · Updated January 2026</p>
  <p style="margin-top:6px; font-size:12px;">No ads. No tracking. Just docs.</p>
</footer>

<script>
// ── COPY BUTTONS ──────────────────────────────────────────
document.querySelectorAll('.code-bar').forEach(bar => {
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.setAttribute('aria-label', 'Copy code');
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> copy';

  btn.addEventListener('click', () => {
    const pre = bar.nextElementSibling;
    if (!pre) return;
    const text = pre.innerText || pre.textContent;
    const doCopy = () => {
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><polyline points="20 6 9 17 4 12"></polyline></svg> copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> copy';
        btn.classList.remove('copied');
      }, 2000);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(doCopy).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); document.body.removeChild(ta);
        doCopy();
      });
    } else {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
      doCopy();
    }
  });
  bar.appendChild(btn);
});

// ── MOBILE NAV ────────────────────────────────────────────
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// ── ACTIVE NAV HIGHLIGHT ──────────────────────────────────
const sections = document.querySelectorAll('[id]');
const navAs    = document.querySelectorAll('.nav-links a[href^="#"]');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + e.target.id ? 'var(--accent)' : '';
      });
    }
  });
}, { threshold: 0.25, rootMargin: '-60px 0px -40% 0px' });
sections.forEach(s => obs.observe(s));
</script>
</body>
</html>

