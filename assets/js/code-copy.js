/**
 * code-copy.js
 * Copy to clipboard functionality for code blocks and commands
 */

export function initCopyButtons() {
  document.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", async function () {
      const text =
        this.dataset.copy ||
        this.closest(".code-wrap, .install-command, .install-widget")
          ?.querySelector("pre, code")
          ?.textContent.trim();

      if (!text) {
        console.warn("No text found to copy");
        return;
      }

      try {
        await navigator.clipboard.writeText(text);
        showSuccess(this);
      } catch (err) {
        fallbackCopy(text, this);
      }
    });
  });
}

function showSuccess(button) {
  const originalHTML = button.innerHTML;
  const originalClass = button.className;

  button.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    Copied!
  `;
  button.classList.add("copied");

  setTimeout(() => {
    button.innerHTML = originalHTML;
    button.className = originalClass;
  }, 2000);
}

function fallbackCopy(text, button) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  textarea.style.top = "0";
  textarea.style.left = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  try {
    const successful = document.execCommand("copy");
    if (successful) {
      showSuccess(button);
    } else {
      showError(button);
    }
  } catch (err) {
    console.error("Fallback copy failed:", err);
    showError(button);
  }

  document.body.removeChild(textarea);
}

function showError(button) {
  const originalHTML = button.innerHTML;
  button.innerHTML = "Failed";
  button.style.color = "var(--danger)";

  setTimeout(() => {
    button.innerHTML = originalHTML;
    button.style.color = "";
  }, 2000);
}
