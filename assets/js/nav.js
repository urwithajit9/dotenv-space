/**
 * nav.js
 * Navigation handling - mobile menu, active links, smooth scroll
 */

export function initNavigation() {
  initMobileNav();
  initActiveNav();
  initSmoothScroll();
}

// Mobile Navigation Toggle
function initMobileNav() {
  let toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const links = document.querySelector(".nav-links");

  if (!nav || !links) return;

  // Create toggle button if it doesn't exist
  if (!toggle) {
    toggle = document.createElement("button");
    toggle.className = "nav-toggle";
    toggle.setAttribute("aria-label", "Toggle menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = "<span></span><span></span><span></span>";

    const logo = nav.querySelector(".nav-logo");
    if (logo) {
      logo.parentNode.insertBefore(toggle, logo.nextSibling);
    }
  }

  // Toggle menu
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = links.classList.toggle("open");
    toggle.classList.toggle("active");
    toggle.setAttribute("aria-expanded", isOpen);

    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Close menu when clicking a link
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && links.classList.contains("open")) {
      links.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && links.classList.contains("open")) {
      links.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });
}

// Active Navigation Highlighting
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav-links a[href^="/#"]');

  if (sections.length === 0 || navLinks.length === 0) return;

  const observerOptions = {
    threshold: 0.3,
    rootMargin: "-80px 0px -40% 0px",
  };

  const observer = new IntersectionObserver((entries) => {
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
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Ignore empty or just hash
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      // Calculate position with nav offset
      const navHeight = document.querySelector(".nav")?.offsetHeight || 60;
      const targetPosition =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        navHeight -
        20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Update URL without jumping
      if (history.pushState) {
        history.pushState(null, null, href);
      }
    });
  });
}

// Sidebar Navigation (for docs pages)
export function initSidebarNav() {
  const sidebarLinks = document.querySelectorAll(".sidebar-nav a");
  const sections = document.querySelectorAll(".doc-section[id]");

  if (sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");

          sidebarLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${id}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    },
    { threshold: 0.5, rootMargin: "-100px 0px -50% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
}
