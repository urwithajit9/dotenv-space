
==================================================
FILE: ./assets/js/code-copy.js
==================================================



==================================================
FILE: ./assets/js/main.js
==================================================

/**
 * main.js - Core JavaScript for dotenv.space
 * Handles: copy buttons, navigation, smooth scroll, code highlighting
 */

// ══════════════════════════════════════════════════════════════
// COPY TO CLIPBOARD
// ══════════════════════════════════════════════════════════════

function initCopyButtons() {
  document.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", async function () {
      // Get text from data attribute or next pre element
      const textToCopy =
        this.dataset.copy ||
        this.closest(".code-wrap, .install-command")
          ?.querySelector("pre, code")
          ?.textContent.trim();

      if (!textToCopy) return;

      const originalHTML = this.innerHTML;
      const originalClass = this.className;

      try {
        await navigator.clipboard.writeText(textToCopy);

        // Success feedback
        this.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Copied!
        `;
        this.classList.add("copied");

        // Reset after 2 seconds
        setTimeout(() => {
          this.innerHTML = originalHTML;
          this.className = originalClass;
        }, 2000);
      } catch (err) {
        console.error("Copy failed:", err);

        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();

        try {
          document.execCommand("copy");
          this.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Copied!
          `;
          this.classList.add("copied");

          setTimeout(() => {
            this.innerHTML = originalHTML;
            this.className = originalClass;
          }, 2000);
        } catch (fallbackErr) {
          console.error("Fallback copy failed:", fallbackErr);
          this.textContent = "Failed";
          setTimeout(() => {
            this.innerHTML = originalHTML;
          }, 2000);
        }

        document.body.removeChild(textarea);
      }
    });
  });
}

// ══════════════════════════════════════════════════════════════
// MOBILE NAVIGATION
// ══════════════════════════════════════════════════════════════

function initMobileNav() {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  // Create mobile toggle button if it doesn't exist
  let toggle = nav.querySelector(".nav-toggle");
  if (!toggle) {
    toggle = document.createElement("button");
    toggle.className = "nav-toggle";
    toggle.setAttribute("aria-label", "Toggle menu");
    toggle.innerHTML = "<span></span><span></span><span></span>";

    const logo = nav.querySelector(".nav-logo");
    logo.parentNode.insertBefore(toggle, logo.nextSibling);
  }

  const links = nav.querySelector(".nav-links");
  if (!links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
    toggle.classList.toggle("active");
  });

  // Close on link click
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && links.classList.contains("open")) {
      links.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ══════════════════════════════════════════════════════════════
// SMOOTH SCROLL FOR ANCHOR LINKS
// ══════════════════════════════════════════════════════════════

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const navHeight = document.querySelector(".nav")?.offsetHeight || 60;
      const targetPosition = target.offsetTop - navHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Update URL without jumping
      history.pushState(null, null, href);
    });
  });
}

// ══════════════════════════════════════════════════════════════
// ACTIVE NAVIGATION HIGHLIGHT
// ══════════════════════════════════════════════════════════════

function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav-links a[href^="/#"]');

  if (sections.length === 0 || navLinks.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `/#${id}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "-80px 0px -40% 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));
}

// ══════════════════════════════════════════════════════════════
// EXTERNAL LINKS - OPEN IN NEW TAB
// ══════════════════════════════════════════════════════════════

function initExternalLinks() {
  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    if (!link.hostname.includes(window.location.hostname)) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
}

// ══════════════════════════════════════════════════════════════
// KEYBOARD SHORTCUTS
// ══════════════════════════════════════════════════════════════

function initKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Cmd/Ctrl + K to focus search (future)
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      const search = document.querySelector(".search-input");
      if (search) search.focus();
    }

    // Escape to close mobile nav
    if (e.key === "Escape") {
      const nav = document.querySelector(".nav-links");
      const toggle = document.querySelector(".nav-toggle");
      if (nav?.classList.contains("open")) {
        nav.classList.remove("open");
        toggle?.classList.remove("active");
      }
    }
  });
}

// ══════════════════════════════════════════════════════════════
// SCROLL TO TOP BUTTON (OPTIONAL)
// ══════════════════════════════════════════════════════════════

function initScrollToTop() {
  const button = document.querySelector(".scroll-to-top");
  if (!button) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ══════════════════════════════════════════════════════════════
// ANALYTICS HELPERS
// ══════════════════════════════════════════════════════════════

function trackEvent(eventName, properties = {}) {
  if (typeof plausible !== "undefined") {
    plausible(eventName, { props: properties });
  }
}

// Track copy button clicks
function trackCopyEvents() {
  document.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const type = this.closest(".install-command")
        ? "install-command"
        : "code-block";
      trackEvent("Copy", { type });
    });
  });
}

// Track external link clicks
function trackExternalLinkClicks() {
  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    if (!link.hostname.includes(window.location.hostname)) {
      link.addEventListener("click", function () {
        trackEvent("External Link", {
          url: this.href,
          text: this.textContent.trim(),
        });
      });
    }
  });
}

// ══════════════════════════════════════════════════════════════
// PERFORMANCE - LAZY LOAD IMAGES
// ══════════════════════════════════════════════════════════════

function initLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// ══════════════════════════════════════════════════════════════
// INITIALIZE ALL
// ══════════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
  initCopyButtons();
  initMobileNav();
  initSmoothScroll();
  initActiveNav();
  initExternalLinks();
  initKeyboardShortcuts();
  initScrollToTop();
  initLazyLoading();

  // Analytics
  trackCopyEvents();
  trackExternalLinkClicks();
});

// Handle page visibility for analytics
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    trackEvent("Page Hidden");
  }
});

// ══════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS - EXPORT FOR OTHER SCRIPTS
// ══════════════════════════════════════════════════════════════

window.dotenvSpace = {
  trackEvent,
  copyToClipboard: async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error("Copy failed:", err);
      return false;
    }
  },
};


==================================================
FILE: ./assets/js/nav.js
==================================================



==================================================
FILE: ./assets/js/search.js
==================================================


