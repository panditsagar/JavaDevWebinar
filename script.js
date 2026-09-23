document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      name: "Vijay",
      image: "testimonial/1.png",
      tag: "4x Switch to a Product Based Company",
      fromSalary: "18 LPA",
      toSalary: "30 LPA",
      hike: "70% HIKE",
      quote:
        "Their 1-1 guidance and mentoring is impressive. Despite being good at DSA, I was not able to clear interviews. Rigorous mocks and 1-1s helped me break through the barrier.",
    },
    {
      name: "Rahul Sharma",
      image: "testimonial/2.png",
      tag: "90-Day Notice Period Solved",
      fromSalary: "12 LPA",
      toSalary: "32 LPA",
      hike: "166% HIKE",
      quote:
        "I was stuck in a 90-day notice period trap with 4 years of experience. Cracckify's 6P SalaryLEAP system gave me the exact strategy to target product companies and crack Swiggy in 60 days.",
    },
    {
      name: "Priya Nair",
      image: "testimonial/3.png",
      tag: "System Architecture Mastered",
      fromSalary: "14 LPA",
      toSalary: "36 LPA",
      hike: "157% HIKE",
      quote:
        "I used to fail in System Design and LLD rounds. The structured framework taught in the masterclass helped me answer complex architecture questions with total confidence.",
    },
    {
      name: "Ankit Verma",
      image: "testimonial/4.png",
      tag: "3 Multiple Offer Letters",
      fromSalary: "18 LPA",
      toSalary: "45 LPA",
      hike: "150% HIKE",
      quote:
        "Negotiation leverage was the game changer for me. Holding 3 offer letters gave me the confidence to push for 45 LPA. Best investment for any Java developer.",
    },
    {
      name: "Sneha Kulkarni",
      image: "testimonial/5.png",
      tag: "Tier-3 College to Tier-1 Product",
      fromSalary: "8 LPA",
      toSalary: "24 LPA",
      hike: "200% HIKE",
      quote:
        "Coming from a Tier-3 college, I thought top product companies were out of reach. The step-by-step roadmap and mock interview feedback completely transformed my preparation.",
    },
    {
      name: "Rohan Mehta",
      image: "testimonial/6.png",
      tag: "Backend Lead Transition",
      fromSalary: "22 LPA",
      toSalary: "42 LPA",
      hike: "91% HIKE",
      quote:
        "Cracckify helped me bridge the gap between a Senior Developer and a Backend Lead. The deep dive into Spring Boot internals and Microservices was top-notch.",
    },
    {
      name: "Divya Reddy",
      image: "testimonial/7.png",
      tag: "Non-Tech Service to Fintech",
      fromSalary: "10 LPA",
      toSalary: "28 LPA",
      hike: "180% HIKE",
      quote:
        "Transitioning from legacy support to high-throughput Java microservices felt impossible until I joined. I cracked a top fintech firm with a 180% salary jump.",
    },
    {
      name: "Karan Kapoor",
      image: "testimonial/8.png",
      tag: "Career Break Comeback",
      fromSalary: "15 LPA",
      toSalary: "35 LPA",
      hike: "133% HIKE",
      quote:
        "After a 1-year career gap, recruiters were skeptical. Cracckify's interview framework helped me present my project experience effectively and secure 2 top offers.",
    },
    {
      name: "Meera Joshi",
      image: "testimonial/9.png",
      tag: "Legacy Java to Cloud-Native",
      fromSalary: "16 LPA",
      toSalary: "38 LPA",
      hike: "137% HIKE",
      quote:
        "I had 5+ years in monolithic Java apps. Learning reactive programming, Kafka, and Kubernetes here allowed me to land a Senior Cloud Engineer role.",
    },
    {
      name: "Aman Gupta",
      image: "testimonial/10.png",
      tag: "60-Day Fast Track Switch",
      fromSalary: "11 LPA",
      toSalary: "29 LPA",
      hike: "163% HIKE",
      quote:
        "The structured daily roadmap saved me months of random tutorial watching. I focused on high-yield interview topics and cleared 3 product rounds back-to-back.",
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
        createTestimonialCard(testimonial)
      ),
      ...rowTestimonials.map((testimonial) =>
        createTestimonialCard(testimonial, true)
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
