
==================================================
FILE: ./assets/css/base.css
==================================================

/* ═══════════════════════════════════════════════════════════
   BASE.CSS - Foundation styles for dotenv.space
   Variables, resets, typography, utilities
   ═══════════════════════════════════════════════════════════ */

/* ── CSS VARIABLES ────────────────────────────────────────── */
:root {
  /* Colors - Dark Theme */
  --bg: #060811;
  --bg2: #0b0f1a;
  --surface: #0f1422;
  --surface2: #151929;
  --surface3: #1a1f30;
  --border: #1e253a;
  --border-hover: #2a3350;

  /* Accent Colors */
  --accent: #00e5ff;          /* Primary - Cyan */
  --accent-dim: #00b8cc;
  --accent-glow: rgba(0,229,255,0.15);
  --accent2: #7c3aed;         /* Purple */
  --accent3: #10b981;         /* Green */

  /* Semantic Colors */
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #f43f5e;
  --info: #00e5ff;

  /* Text Colors */
  --text: #e8edf7;
  --text-bright: #ffffff;
  --muted: #8892a4;
  --dim: #5a647a;
  --faint: #3a4356;

  /* Syntax Highlighting */
  --syntax-key: #79c0ff;
  --syntax-value: #a5f3fc;
  --syntax-comment: #4a5568;
  --syntax-string: #86efac;
  --syntax-keyword: #f87171;
  --syntax-function: #c4b5fd;
  --syntax-number: #fde68a;

  /* Spacing Scale */
  --space-xs: 0.5rem;    /* 8px */
  --space-sm: 1rem;      /* 16px */
  --space-md: 1.5rem;    /* 24px */
  --space-lg: 2.5rem;    /* 40px */
  --space-xl: 4rem;      /* 64px */
  --space-2xl: 6rem;     /* 96px */

  /* Typography */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-display: 'Syne', var(--font-sans);
  --font-mono: 'IBM Plex Mono', 'Menlo', 'Monaco', 'Courier New', monospace;

  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  --text-6xl: 3.75rem;   /* 60px */

  /* Effects */
  --radius: 10px;
  --radius-sm: 6px;
  --radius-lg: 14px;
  --radius-full: 9999px;
  --shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.2), 0 4px 6px -2px rgba(0,0,0,0.1);
  --glow: 0 0 30px rgba(0,229,255,0.08);

  /* Transitions */
  --transition-fast: 150ms;
  --transition-base: 200ms;
  --transition-slow: 300ms;
  --ease-out: cubic-bezier(0, 0, 0.2, 1);

  /* Z-index Scale */
  --z-base: 1;
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-fixed: 30;
  --z-modal-backdrop: 40;
  --z-modal: 50;
  --z-popover: 60;
  --z-tooltip: 70;
}

/* ── RESET ─────────────────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-sans);
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
  font-size: var(--text-base);
  overflow-x: hidden;
  min-height: 100vh;
}

/* ── TYPOGRAPHY ───────────────────────────────────────────── */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--text-bright);
  margin-bottom: var(--space-sm);
}

h1 {
  font-size: clamp(2.5rem, 8vw, 6.5rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
  font-weight: 800;
}

h2 {
  font-size: clamp(1.875rem, 5vw, 2.8rem);
  letter-spacing: -0.03em;
}

h3 {
  font-size: var(--text-2xl);
  font-weight: 700;
}

h4 {
  font-size: var(--text-xl);
  font-weight: 600;
}

h5, h6 {
  font-size: var(--text-lg);
  font-weight: 600;
}

p {
  margin-bottom: var(--space-sm);
  color: var(--muted);
  line-height: 1.8;
}

strong, b {
  font-weight: 600;
  color: var(--text);
}

em, i {
  font-style: italic;
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: color var(--transition-fast) var(--ease-out);
}

a:hover {
  color: var(--accent-dim);
  text-decoration: underline;
}

/* ── CODE & PRE ────────────────────────────────────────────── */
code {
  font-family: var(--font-mono);
  font-size: 0.9em;
}

/* Inline code */
code:not(pre code) {
  background: var(--surface2);
  border: 1px solid var(--border);
  padding: 0.15em 0.4em;
  border-radius: 4px;
  color: var(--accent3);
  font-size: 0.88em;
}

pre {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: 1.75;
  overflow-x: auto;
  border-radius: 0 0 var(--radius) var(--radius);
}

pre code {
  display: block;
  padding: 0;
  background: transparent;
  border: none;
  color: inherit;
}

/* ── LISTS ────────────────────────────────────────────────── */
ul, ol {
  padding-left: 1.5em;
  margin-bottom: var(--space-sm);
}

li {
  margin-bottom: 0.5em;
  color: var(--muted);
}

ul {
  list-style-type: disc;
}

ol {
  list-style-type: decimal;
}

/* ── UTILITIES ─────────────────────────────────────────────── */
.container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.container-wide {
  max-width: 1200px;
}

.container-narrow {
  max-width: 720px;
}

/* Text utilities */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.text-muted { color: var(--muted); }
.text-dim { color: var(--dim); }
.text-bright { color: var(--text-bright); }

.text-accent { color: var(--accent); }
.text-success { color: var(--success); }
.text-warning { color: var(--warning); }
.text-danger { color: var(--danger); }

.font-mono { font-family: var(--font-mono); }
.font-display { font-family: var(--font-display); }

/* Spacing utilities */
.mt-0 { margin-top: 0; }
.mt-sm { margin-top: var(--space-sm); }
.mt-md { margin-top: var(--space-md); }
.mt-lg { margin-top: var(--space-lg); }
.mt-xl { margin-top: var(--space-xl); }

.mb-0 { margin-bottom: 0; }
.mb-sm { margin-bottom: var(--space-sm); }
.mb-md { margin-bottom: var(--space-md); }
.mb-lg { margin-bottom: var(--space-lg); }
.mb-xl { margin-bottom: var(--space-xl); }

.p-sm { padding: var(--space-sm); }
.p-md { padding: var(--space-md); }
.p-lg { padding: var(--space-lg); }

/* Display utilities */
.hidden { display: none; }
.block { display: block; }
.inline-block { display: inline-block; }
.flex { display: flex; }
.inline-flex { display: inline-flex; }
.grid { display: grid; }

/* Flexbox utilities */
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.items-center { align-items: center; }
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-end { justify-content: flex-end; }
.gap-sm { gap: var(--space-sm); }
.gap-md { gap: var(--space-md); }
.gap-lg { gap: var(--space-lg); }

/* Width utilities */
.w-full { width: 100%; }
.max-w-full { max-width: 100%; }

/* Visual utilities */
.rounded { border-radius: var(--radius); }
.rounded-sm { border-radius: var(--radius-sm); }
.rounded-lg { border-radius: var(--radius-lg); }
.rounded-full { border-radius: var(--radius-full); }

.border { border: 1px solid var(--border); }
.border-t { border-top: 1px solid var(--border); }
.border-b { border-bottom: 1px solid var(--border); }

.shadow { box-shadow: var(--shadow); }
.shadow-lg { box-shadow: var(--shadow-lg); }

/* Hover utilities */
.hover-accent:hover { color: var(--accent); }
.hover-scale:hover { transform: scale(1.02); }
.hover-lift:hover { transform: translateY(-2px); }

/* Transition utilities */
.transition { transition: all var(--transition-base) var(--ease-out); }
.transition-colors { transition: color var(--transition-base) var(--ease-out),
                                 background-color var(--transition-base) var(--ease-out); }

/* Responsive utilities */
@media (max-width: 768px) {
  .md-hidden { display: none; }
  .container { padding: 0 var(--space-sm); }
}

@media (min-width: 769px) {
  .md-show { display: block; }
  .sm-hidden { display: none; }
}

/* ── ACCESSIBILITY ──────────────────────────────────────────── */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Focus styles */
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ── PRINT STYLES ───────────────────────────────────────────── */
@media print {
  body {
    background: white;
    color: black;
  }

  nav, footer, .no-print {
    display: none;
  }

  a {
    text-decoration: underline;
  }

  pre {
    border: 1px solid #ddd;
    page-break-inside: avoid;
  }
}

==================================================
FILE: ./assets/css/components.css
==================================================

/* ═══════════════════════════════════════════════════════════
   COMPONENTS.CSS - Reusable UI components
   Buttons, cards, code blocks, callouts, navigation, etc.
   ═══════════════════════════════════════════════════════════ */

/* ── BUTTONS ───────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: var(--text-sm);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition: all var(--transition-base) var(--ease-out);
  text-decoration: none;
  font-family: var(--font-display);
  letter-spacing: -0.01em;
}

.btn-primary {
  background: var(--accent);
  color: #000;
  font-weight: 700;
}

.btn-primary:hover {
  background: var(--accent-dim);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,229,255,0.3);
}

.btn-secondary {
  background: var(--surface2);
  color: var(--text);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: var(--accent);
  background: var(--surface3);
}

.btn-ghost {
  background: transparent;
  color: var(--muted);
  border: 1px solid transparent;
}

.btn-ghost:hover {
  color: var(--accent);
  border-color: var(--border);
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: var(--text-xs);
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: var(--text-base);
}

/* ── CARDS ─────────────────────────────────────────────────── */
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-md);
  transition: border-color var(--transition-base);
}

.card:hover {
  border-color: var(--border-hover);
}

.card-header {
  margin-bottom: var(--space-sm);
}

.card-title {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.card-description {
  font-size: var(--text-sm);
  color: var(--muted);
}

.card-footer {
  margin-top: var(--space-md);
  padding-top: var(--space-sm);
  border-top: 1px solid var(--border);
}

/* ── CODE BLOCKS ───────────────────────────────────────────── */
.code-wrap {
  margin: var(--space-md) 0;
}

.code-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--surface2);
  border: 1px solid var(--border);
  border-bottom: none;
  border-radius: var(--radius) var(--radius) 0 0;
  padding: 0.6rem 1.2rem;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--dim);
}

.code-bar-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lang-tag {
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.lang-bash { background: rgba(245,158,11,0.12); color: #fbbf24; border: 1px solid rgba(245,158,11,0.25); }
.lang-python { background: rgba(59,130,246,0.12); color: #60a5fa; border: 1px solid rgba(59,130,246,0.25); }
.lang-javascript { background: rgba(234,179,8,0.12); color: #fbbf24; border: 1px solid rgba(234,179,8,0.25); }
.lang-typescript { background: rgba(56,189,248,0.12); color: #7dd3fc; border: 1px solid rgba(56,189,248,0.25); }
.lang-rust { background: rgba(249,115,22,0.12); color: #fb923c; border: 1px solid rgba(249,115,22,0.25); }
.lang-yaml { background: rgba(168,85,247,0.12); color: #c084fc; border: 1px solid rgba(168,85,247,0.25); }
.lang-dockerfile { background: rgba(14,165,233,0.12); color: #38bdf8; border: 1px solid rgba(14,165,233,0.25); }
.lang-env { background: rgba(16,185,129,0.12); color: #34d399; border: 1px solid rgba(16,185,129,0.25); }

.code-content {
  background: #070b12;
  border: 1px solid var(--border);
  border-radius: 0 0 var(--radius) var(--radius);
  padding: 1.5rem;
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: 13.5px;
  line-height: 1.75;
}

.copy-btn {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 5px;
  color: var(--dim);
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  transition: all 0.18s;
  flex-shrink: 0;
}

.copy-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(0,229,255,0.06);
}

.copy-btn.copied {
  border-color: var(--success);
  color: var(--success);
  background: rgba(16,185,129,0.08);
}

/* ── CALLOUTS ──────────────────────────────────────────────── */
.callout {
  border-radius: var(--radius);
  padding: 1.2rem 1.4rem;
  margin: var(--space-md) 0;
  display: flex;
  gap: 1rem;
  font-size: var(--text-sm);
}

.callout-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
  line-height: 1;
}

.callout-content p {
  margin: 0;
  color: inherit;
}

.callout-danger {
  background: rgba(244,63,94,0.07);
  border: 1px solid rgba(244,63,94,0.2);
  color: #fca5a5;
}

.callout-warning {
  background: rgba(245,158,11,0.07);
  border: 1px solid rgba(245,158,11,0.2);
  color: #fcd34d;
}

.callout-info {
  background: rgba(0,229,255,0.06);
  border: 1px solid rgba(0,229,255,0.15);
  color: #a5f3fc;
}

.callout-success {
  background: rgba(16,185,129,0.06);
  border: 1px solid rgba(16,185,129,0.15);
  color: #6ee7b7;
}

/* ── BADGES ────────────────────────────────────────────────── */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.8rem;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 500;
  border: 1px solid;
}

.badge-accent {
  background: rgba(0,229,255,0.08);
  border-color: rgba(0,229,255,0.2);
  color: var(--accent);
}

.badge-success {
  background: rgba(16,185,129,0.08);
  border-color: rgba(16,185,129,0.2);
  color: var(--success);
}

.badge-warning {
  background: rgba(245,158,11,0.08);
  border-color: rgba(245,158,11,0.2);
  color: var(--warning);
}

/* ── INSTALL WIDGET ────────────────────────────────────────── */
.install-widget {
  background: linear-gradient(135deg, var(--surface2) 0%, var(--surface3) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  margin: var(--space-xl) 0;
  position: relative;
  overflow: hidden;
}

.install-widget::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%);
  pointer-events: none;
}

.install-command {
  background: #070b12;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.2rem 1.5rem;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: var(--space-sm) 0;
}

.install-command code {
  flex: 1;
  background: none;
  border: none;
  padding: 0;
  color: var(--accent);
}

/* ── NAVIGATION ────────────────────────────────────────────── */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  background: rgba(6,8,17,0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  padding: 0 var(--space-lg);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: var(--text-base);
  color: var(--accent);
  text-decoration: none;
  letter-spacing: -0.02em;
}

.nav-logo-muted {
  color: var(--muted);
}

.nav-links {
  display: flex;
  gap: 1.75rem;
  list-style: none;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: var(--text-sm);
  font-weight: 500;
  transition: color var(--transition-base);
  letter-spacing: 0.01em;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--accent);
}

/* ── FOOTER ────────────────────────────────────────────────── */
.footer {
  border-top: 1px solid var(--border);
  padding: var(--space-2xl) var(--space-md);
  text-align: center;
}

.footer-logo {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  color: var(--accent);
  margin-bottom: var(--space-sm);
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin: var(--space-md) 0;
  flex-wrap: wrap;
}

.footer-links a {
  color: var(--dim);
  font-size: var(--text-sm);
  transition: color var(--transition-base);
}

.footer-links a:hover {
  color: var(--accent);
  text-decoration: none;
}

.footer-text {
  color: var(--dim);
  font-size: var(--text-sm);
  margin: 0.5rem 0;
}

/* ── FEATURE GRID ──────────────────────────────────────────── */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-md);
  margin: var(--space-xl) 0;
}

.feature-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-lg);
  transition: all var(--transition-base);
}

.feature-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: var(--space-sm);
}

.feature-title {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.feature-description {
  font-size: var(--text-sm);
  color: var(--muted);
  line-height: 1.6;
}

/* ── STAT COUNTER ──────────────────────────────────────────── */
.stats {
  display: flex;
  gap: var(--space-lg);
  justify-content: center;
  flex-wrap: wrap;
  margin: var(--space-xl) 0;
}

.stat {
  text-align: center;
}

.stat-value {
  font-size: var(--text-4xl);
  font-weight: 700;
  color: var(--accent);
  font-family: var(--font-display);
  display: block;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

/* ── SECTION LABELS ────────────────────────────────────────── */
.section-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: var(--space-sm);
  display: block;
}

/* ── RESPONSIVE ────────────────────────────────────────────── */
@media (max-width: 768px) {
  .nav {
    padding: 0 var(--space-sm);
  }

  .nav-links {
    display: none;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .stats {
    flex-direction: column;
    gap: var(--space-md);
  }

  .install-widget {
    padding: var(--space-md);
  }

  .install-command {
    flex-direction: column;
    align-items: flex-start;
  }
}

==================================================
FILE: ./assets/css/layout.css
==================================================

/* ═══════════════════════════════════════════════════════════
   LAYOUT.CSS - Layout systems, containers, grids, spacing
   ═══════════════════════════════════════════════════════════ */

/* ── SECTION WRAPPER ───────────────────────────────────────── */
.section {
  padding: var(--space-2xl) 0;
  position: relative;
}

.section:first-of-type {
  padding-top: 100px;
}

.section + .section {
  border-top: 1px solid var(--border);
}

.section-label {
  display: block;
  margin-bottom: var(--space-md);
}

/* ── CONTAINERS ────────────────────────────────────────────── */
.container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.container-wide {
  max-width: 1200px;
}

.container-narrow {
  max-width: 720px;
}

.container-full {
  max-width: 100%;
  padding: 0 var(--space-xl);
}

/* ── GRID SYSTEMS ──────────────────────────────────────────── */
.grid {
  display: grid;
  gap: var(--space-md);
}

.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

.grid-auto {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.grid-auto-sm {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.grid-auto-lg {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

/* ── FLEX LAYOUTS ──────────────────────────────────────────── */
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.flex-between {
  justify-content: space-between;
  align-items: center;
}

.flex-start {
  justify-content: flex-start;
  align-items: center;
}

.flex-end {
  justify-content: flex-end;
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

/* ── SPACING UTILITIES ─────────────────────────────────────── */
.mt-xs { margin-top: var(--space-xs); }
.mt-sm { margin-top: var(--space-sm); }
.mt-md { margin-top: var(--space-md); }
.mt-lg { margin-top: var(--space-lg); }
.mt-xl { margin-top: var(--space-xl); }
.mt-2xl { margin-top: var(--space-2xl); }

.mb-xs { margin-bottom: var(--space-xs); }
.mb-sm { margin-bottom: var(--space-sm); }
.mb-md { margin-bottom: var(--space-md); }
.mb-lg { margin-bottom: var(--space-lg); }
.mb-xl { margin-bottom: var(--space-xl); }
.mb-2xl { margin-bottom: var(--space-2xl); }

.pt-xs { padding-top: var(--space-xs); }
.pt-sm { padding-top: var(--space-sm); }
.pt-md { padding-top: var(--space-md); }
.pt-lg { padding-top: var(--space-lg); }
.pt-xl { padding-top: var(--space-xl); }

.pb-xs { padding-bottom: var(--space-xs); }
.pb-sm { padding-bottom: var(--space-sm); }
.pb-md { padding-bottom: var(--space-md); }
.pb-lg { padding-bottom: var(--space-lg); }
.pb-xl { padding-bottom: var(--space-xl); }

.gap-xs { gap: var(--space-xs); }
.gap-sm { gap: var(--space-sm); }
.gap-md { gap: var(--space-md); }
.gap-lg { gap: var(--space-lg); }
.gap-xl { gap: var(--space-xl); }

/* ── SIDEBAR LAYOUTS ───────────────────────────────────────── */
.sidebar-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: var(--space-xl);
  align-items: start;
}

.sidebar {
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}

.sidebar-content {
  flex: 1;
  min-width: 0;
}

/* ── RESPONSIVE GRIDS ──────────────────────────────────────── */
@media (max-width: 1024px) {
  .sidebar-layout {
    grid-template-columns: 200px 1fr;
    gap: var(--space-lg);
  }
}

@media (max-width: 768px) {
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }

  .sidebar-layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
    max-height: none;
  }

  .container,
  .container-wide,
  .container-narrow {
    padding: 0 var(--space-sm);
  }

  .section {
    padding: var(--space-xl) 0;
  }

  .section:first-of-type {
    padding-top: 80px;
  }
}

@media (max-width: 640px) {
  .grid-auto {
    grid-template-columns: 1fr;
  }
}

/* ── ASPECT RATIO BOXES ────────────────────────────────────── */
.aspect-video {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.aspect-square {
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.aspect-4-3 {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

/* ── CONTENT WIDTH LIMITERS ────────────────────────────────── */
.prose {
  max-width: 70ch;
}

.prose p,
.prose ul,
.prose ol {
  margin-bottom: var(--space-md);
}

.prose h2 {
  margin-top: var(--space-2xl);
  margin-bottom: var(--space-md);
}

.prose h3 {
  margin-top: var(--space-xl);
  margin-bottom: var(--space-sm);
}

/* ── SPLIT LAYOUTS ─────────────────────────────────────────── */
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
}

.split-reverse {
  grid-template-columns: 1fr 1fr;
}

.split-reverse > *:first-child {
  order: 2;
}

.split-reverse > *:last-child {
  order: 1;
}

@media (max-width: 768px) {
  .split,
  .split-reverse {
    grid-template-columns: 1fr;
  }

  .split-reverse > *:first-child,
  .split-reverse > *:last-child {
    order: 0;
  }
}

/* ── STICKY ELEMENTS ───────────────────────────────────────── */
.sticky {
  position: sticky;
  top: var(--space-xl);
}

.sticky-nav {
  position: sticky;
  top: 80px;
  z-index: var(--z-sticky);
}

/* ── OVERFLOW HANDLING ─────────────────────────────────────── */
.overflow-hidden {
  overflow: hidden;
}

.overflow-auto {
  overflow: auto;
}

.overflow-x-auto {
  overflow-x: auto;
  overflow-y: hidden;
}

.overflow-y-auto {
  overflow-y: auto;
  overflow-x: hidden;
}

/* ── POSITION UTILITIES ────────────────────────────────────── */
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.fixed {
  position: fixed;
}

/* ── Z-INDEX UTILITIES ─────────────────────────────────────── */
.z-0 { z-index: 0; }
.z-10 { z-index: 10; }
.z-20 { z-index: 20; }
.z-30 { z-index: 30; }
.z-40 { z-index: 40; }
.z-50 { z-index: 50; }

/* ── VISIBILITY ────────────────────────────────────────────── */
.visible {
  visibility: visible;
}

.invisible {
  visibility: hidden;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* ── MOBILE NAVIGATION TOGGLE ──────────────────────────────── */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.nav-toggle span {
  width: 24px;
  height: 2px;
  background: var(--muted);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.nav-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translateY(8px);
}

.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translateY(-8px);
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: rgba(6,8,17,0.98);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
    flex-direction: column;
    padding: var(--space-lg) var(--space-md);
    gap: 0;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    opacity: 0;
    pointer-events: none;
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-links li {
    border-bottom: 1px solid var(--border);
  }

  .nav-links li:last-child {
    border-bottom: none;
  }

  .nav-links a {
    display: block;
    padding: var(--space-sm) 0;
    font-size: var(--text-base);
  }
}

/* ── PRINT STYLES ──────────────────────────────────────────── */
@media print {
  .nav,
  .footer,
  .no-print {
    display: none;
  }

  .section {
    page-break-inside: avoid;
  }

  body {
    background: white;
    color: black;
  }
}

==================================================
FILE: ./assets/css/pages/blog.css
==================================================



==================================================
FILE: ./assets/css/pages/cli.css
==================================================



==================================================
FILE: ./assets/css/pages/framework.css
==================================================



==================================================
FILE: ./assets/css/pages/home.css
==================================================

/* ═══════════════════════════════════════════════════════════
   HOME.CSS - Homepage-specific styles
   Hero, install widget, story box, framework grid
   ═══════════════════════════════════════════════════════════ */

/* ── HERO ──────────────────────────────────────────────────── */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px var(--space-md) 80px;
  position: relative;
  overflow: hidden;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent);
  pointer-events: none;
}

.hero-glow {
  position: absolute;
  width: 700px;
  height: 700px;
  background: radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  animation: glow-pulse 8s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.9; transform: translate(-50%, -50%) scale(1.05); }
}

.hero-title {
  position: relative;
  z-index: 1;
  margin-bottom: var(--space-md);
}

.hero-subtitle {
  display: block;
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: var(--accent);
  margin-bottom: var(--space-sm);
  font-weight: 500;
  letter-spacing: 0;
}

.hero-description {
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  color: var(--muted);
  max-width: 620px;
  margin: 0 auto var(--space-xl);
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

.hero-actions {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: var(--space-2xl);
  position: relative;
  z-index: 1;
}

.hero-stats {
  margin-top: var(--space-2xl);
}

/* ── INSTALL WIDGET (HERO) ──────────────────────────────────── */
.install-widget {
  width: 100%;
  max-width: 680px;
  margin: 0 auto var(--space-xl);
  position: relative;
  z-index: 1;
}

.install-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--dim);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-sm);
  text-align: center;
}

.install-platforms {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  font-size: var(--text-sm);
  color: var(--dim);
  margin-top: var(--space-sm);
}

.install-platforms span {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

/* ── BADGE WITH PULSE ───────────────────────────────────────── */
.badge-pulse {
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}

/* ── FRAMEWORK GRID ─────────────────────────────────────────── */
.framework-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-md);
  margin: var(--space-xl) 0;
}

.framework-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-lg);
  text-align: center;
  transition: all var(--transition-base);
  text-decoration: none;
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.framework-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: var(--glow);
  text-decoration: none;
}

.framework-icon {
  font-size: 3rem;
  margin-bottom: var(--space-sm);
  line-height: 1;
}

.framework-card h3 {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-bright);
}

.framework-card p {
  font-size: var(--text-sm);
  color: var(--muted);
  margin: 0;
}

/* ── STORY BOX ──────────────────────────────────────────────── */
.story-box {
  position: relative;
  background: linear-gradient(135deg,
    rgba(244,63,94,0.04) 0%,
    rgba(124,58,237,0.04) 100%
  );
  border: 1px solid rgba(244,63,94,0.15);
  border-left: 3px solid var(--danger);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  margin: var(--space-xl) 0;
  overflow: hidden;
}

.story-quote {
  position: absolute;
  top: var(--space-md);
  right: var(--space-lg);
  font-size: 80px;
  font-family: var(--font-display);
  color: var(--danger);
  opacity: 0.08;
  line-height: 1;
  pointer-events: none;
}

.story-box p {
  position: relative;
  z-index: 1;
  font-size: var(--text-lg);
  line-height: 1.8;
  color: var(--text);
}

.story-box p:last-child {
  margin-bottom: 0;
}

.story-box strong {
  color: var(--text-bright);
  font-weight: 600;
}

.story-box code {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 0.15em 0.5em;
  border-radius: 4px;
  font-size: 0.9em;
}

/* ── COMMAND GRID ───────────────────────────────────────────── */
.command-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-md);
  margin: var(--space-xl) 0;
}

.command-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-lg);
  transition: border-color var(--transition-base);
}

.command-card:hover {
  border-color: var(--accent);
}

.command-name {
  display: block;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--accent);
  margin-bottom: var(--space-sm);
  font-weight: 500;
}

.command-card p {
  font-size: var(--text-sm);
  color: var(--muted);
  margin: 0;
  line-height: 1.6;
}

/* ── CTA BOX ────────────────────────────────────────────────── */
.cta-box {
  background: linear-gradient(135deg, var(--surface2) 0%, var(--surface3) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-2xl) var(--space-xl);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-box::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%);
  pointer-events: none;
}

.cta-box h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: var(--space-sm);
  position: relative;
  z-index: 1;
}

.cta-box p {
  font-size: var(--text-lg);
  color: var(--muted);
  margin-bottom: var(--space-xl);
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
}

.cta-box .install-command {
  margin: var(--space-xl) auto;
  position: relative;
  z-index: 1;
}

.cta-actions {
  display: flex;
  gap: var(--space-sm);
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

/* ── FOOTER LAYOUT ──────────────────────────────────────────── */
.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--space-xl);
  max-width: 900px;
  margin: 0 auto var(--space-xl);
  text-align: left;
}

.footer-col h4 {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--text);
  margin-bottom: var(--space-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-col a {
  display: block;
  color: var(--dim);
  font-size: var(--text-sm);
  margin-bottom: 0.5rem;
  transition: color var(--transition-base);
}

.footer-col a:hover {
  color: var(--accent);
  text-decoration: none;
}

.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: var(--space-lg);
  margin-top: var(--space-lg);
}

/* ── RESPONSIVE ─────────────────────────────────────────────── */
@media (max-width: 768px) {
  .hero {
    padding: 100px var(--space-sm) 60px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .install-widget {
    max-width: 100%;
  }

  .install-platforms {
    flex-direction: column;
    gap: var(--space-sm);
    align-items: center;
  }

  .framework-grid {
    grid-template-columns: 1fr;
  }

  .command-grid {
    grid-template-columns: 1fr;
  }

  .footer-links {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
  }

  .story-box {
    padding: var(--space-lg);
  }

  .story-quote {
    font-size: 60px;
    top: var(--space-sm);
    right: var(--space-sm);
  }

  .cta-box {
    padding: var(--space-xl) var(--space-md);
  }
}

@media (max-width: 480px) {
  .footer-links {
    grid-template-columns: 1fr;
  }
}
