document.addEventListener("DOMContentLoaded", () => {
  // 1. Live Countdown Timer Setup
  const timerElement = document.getElementById("countdown-timer");
  
  // Set target webinar date (3 days, 14 hours from now)
  const targetDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000) + (22 * 60 * 1000);

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      if (timerElement) timerElement.textContent = "Webinar Starting Now!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');

    if (timerElement) {
      timerElement.textContent = `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
    }
  }

  updateTimer();
  setInterval(updateTimer, 1000);

  // 2. Copy Code Snippet Functionality
  const copyBtn = document.getElementById("copy-code-btn");
  const copyLabel = document.getElementById("copy-btn-label");
  const codeBlock = document.getElementById("java-code-block");

  if (copyBtn && codeBlock && copyLabel) {
    copyBtn.addEventListener("click", async () => {
      try {
        const textToCopy = codeBlock.innerText;
        await navigator.clipboard.writeText(textToCopy);
        
        const originalLabel = copyLabel.textContent;
        copyLabel.textContent = "Copied!";
        copyBtn.style.color = "#50fa7b";
        copyBtn.style.borderColor = "#50fa7b";

        setTimeout(() => {
          copyLabel.textContent = originalLabel;
          copyBtn.style.color = "";
          copyBtn.style.borderColor = "";
        }, 2000);
      } catch (err) {
        console.error("Failed to copy snippet: ", err);
      }
    });
  }

  // 3. Smooth Navigation Links Scroll
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || !targetId) return;

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // 4. FAQ Accordion Behavior (close others when one opens)
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false;
          }
        });
      }
    });
  });
});

