document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      name: "Vijay",
      image: "testimonial/1.png",
      tag: "4x Switch to a Product Based Company",
      fromSalary: "11.5 LPA",
      toSalary: "40 LPA",
      hike: "4X HIKE",
      quote:
        "Cracckify has been a game-changing experience in my career growth journey. I joined with the goal of breaking out of stagnation, and with the consistent support, guidance, mock interviews, and structured preparation, I was able to land an incredible opportunity with a 4x hike.",
    },
    {
      name: "Jeevan",
      image: "testimonial/2.png",
      tag: "2x Switch to Product Based Company",
      fromSalary: "14 LPA",
      toSalary: "30 LPA",
      hike: "2X HIKE",
      quote:
        "Excellent mentorship which builds a strong foundation not only for interviews but also as life lessons for our professional life. They always keep us motivated and help us to increase our confidence.",
    },
    {
      name: "Naveen",
      image: "testimonial/3.png",
      tag: "2x Switch to Product Based Company",
      fromSalary: "11 LPA",
      toSalary: "24 LPA",
      hike: "2X HIKE",
      quote:
        "Cracckify helped me to achieve 120% hike and boosted my confidence to land in a product based company. Mentors like Abhishek and Jeevan are needed for engineers who are struggling in low pay jobs.",
    },
    {
      name: "Vijay",
      image: "testimonial/4.png",
      tag: "Service to Product Based Company",
      fromSalary: "18 LPA",
      toSalary: "30 LPA",
      hike: "70% HIKE",
      quote:
        "Their 1-1 guidance and mentoring is impressive. Despite being good at DSA  wasn't able to clear interviews. Rigorous mocks & 1-1s helped me breakthrough the barrier.",
    },
    {
      name: "Elizabeth",
      image: "testimonial/5.png",
      tag: "TCS → Infosys",
      fromSalary: "8 LPA",
      toSalary: "24 LPA",
      hike: "200% HIKE",
      quote:
        "Cracckify really helped me build a solid foundation in software engineering with its organized sessions on Coding, Algorithms, and Design principles. The focus on thinking for myself was invaluable.",
    },
    {
      name: "Aleemsha",
      image: "testimonial/6.png",
      tag: "2x Switch to Service to Product Based",
      fromSalary: "6 LPA",
      toSalary: "13 LPA",
      hike: "2X HIKE",
      quote:
        "I learned Java coding from Cracckify and it helped me grow a lot in my career. The explanations were clear, practical, and very easy to understand.",
    },
    {
      name: "Atul",
      image: "testimonial/7.png",
      tag: "Non-Tech Service to Fintech",
      fromSalary: "10 LPA",
      toSalary: "28 LPA",
      hike: "180% HIKE",
      quote:
        "I'm very thankful to Cracckify for the excellent support during my interview preparation. The mock interviews they conducted and the guidance they provided helped me understand my gaps.",
    },
    {
      name: "Krima",
      image: "testimonial/8.png",
      tag: "Career Break Comeback",
      fromSalary: "15 LPA",
      toSalary: "35 LPA",
      hike: "133% HIKE",
      quote:
        "Just loved the experience of learning and earning better. Love the way Abhishek takes one on one counselling and helps us and how Jeevan puts more and more efforts on explaining things.",
    },
    {
      name: "Nuthan",
      image: "testimonial/9.png",
      tag: "Legacy Java to Cloud-Native",
      fromSalary: "16 LPA",
      toSalary: "38 LPA",
      hike: "137% HIKE",
      quote:
        "If we have any doubts and questions they will guide you properly. Even while you are planning to switch they will connect with you regularly to know if you are getting stuck anywhere.",
    },
    {
      name: "Pratik",
      image: "testimonial/10.png",
      tag: "Service to Product Based Company",
      fromSalary: "11 LPA",
      toSalary: "29 LPA",
      hike: "163% HIKE",
      quote:
        "The Best Guide in Cracking Interviews. I was a part of Cracckify community and joined it when looking for my first job change. It helped me in cracking big product company offers.",
    },
  ];

  const escapeHTML = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const testimonialArrowIcon = `
    <span class="arrow-blue">
      <svg viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.7071 8.07112C23.0976 7.6806 23.0976 7.04743 22.7071 6.65691L16.3431 0.292946C15.9526 -0.0975785 15.3195 -0.0975785 14.9289 0.292946C14.5384 0.68347 14.5384 1.31664 14.9289 1.70716L20.5858 7.36401L14.9289 13.0209C14.5384 13.4114 14.5384 14.0446 14.9289 14.4351C15.3195 14.8256 15.9526 14.8256 16.3431 14.4351L22.7071 8.07112ZM0 7.36401L0 8.36401H22V7.36401V6.36401H0L0 7.36401Z"
          fill="currentColor"
        ></path>
      </svg>
    </span>`;

  const createTestimonialCard = (testimonial, isDuplicate = false) => `
    <div class="testimonial-card"${isDuplicate ? ' aria-hidden="true"' : ""}>
      <div class="card-user-profile">
        <div class="avatar-ring-wrap">
          <img
            src="${escapeHTML(testimonial.image)}"
            alt="${isDuplicate ? "" : escapeHTML(testimonial.name)}"
            class="user-avatar-img"
          />
        </div>
        <div class="user-meta-stack">
          <h3 class="user-name-title">${escapeHTML(testimonial.name)}</h3>
          <span class="user-transition-tag">${escapeHTML(testimonial.tag)}</span>
        </div>
      </div>
      <div class="salary-leap-box">
        <div class="salary-metric">
          <span class="from-to-lpa">
            ${escapeHTML(testimonial.fromSalary)}
            ${testimonialArrowIcon}
            ${escapeHTML(testimonial.toSalary)}
          </span>
        </div>
        <span class="yellow-hike-badge">${escapeHTML(testimonial.hike)}</span>
      </div>
      <p class="card-quote-body">"${escapeHTML(testimonial.quote)}"</p>
    </div>`;

  const renderTestimonialTrack = (track, rowTestimonials) => {
    if (!track) return;

    track.innerHTML = [
      ...rowTestimonials.map((testimonial) =>
        createTestimonialCard(testimonial),
      ),
      ...rowTestimonials.map((testimonial) =>
        createTestimonialCard(testimonial, true),
      ),
    ].join("");
  };

  const renderTestimonials = () => {
    const leftTrack = document.querySelector(".marquee-track-left");
    const rightTrack = document.querySelector(".marquee-track-right");
    const middleIndex = Math.ceil(testimonials.length / 2);

    renderTestimonialTrack(leftTrack, testimonials.slice(0, middleIndex));
    renderTestimonialTrack(rightTrack, testimonials.slice(middleIndex));
  };

  renderTestimonials();

  const mobileFooterQuery = window.matchMedia("(max-width: 768px)");
  const updateMobileStickyFooter = () => {
    const shouldShow = mobileFooterQuery.matches && window.scrollY > 140;
    document.body.classList.toggle(
      "mobile-sticky-footer-visible",
      shouldShow,
    );
  };

  updateMobileStickyFooter();
  window.addEventListener("scroll", updateMobileStickyFooter, {
    passive: true,
  });
  mobileFooterQuery.addEventListener("change", updateMobileStickyFooter);

  // 1. Live Countdown Timer Setup
  const timerElement = document.getElementById("countdown-timer");

  // Set target webinar date (3 days, 14 hours from now)
  const targetDate =
    new Date().getTime() +
    3 * 24 * 60 * 60 * 1000 +
    14 * 60 * 60 * 1000 +
    22 * 60 * 1000;

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      if (timerElement) timerElement.textContent = "Webinar Starting Now!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, "0");

    if (timerElement) {
      timerElement.textContent = `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
    }
  }

  updateTimer();
  setInterval(updateTimer, 1000);

  // 3. Smooth Navigation Links Scroll
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || !targetId) return;

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // 4. FAQ Accordion Behavior (close others when one opens)
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        faqItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false;
          }
        });
      }
    });
  });
});
