document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links (fixed, calm behavior)
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Active link highlight while scrolling
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll(".nav-links a");

  function setActiveLink() {
    let currentId = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        currentId = "#" + section.id;
      }
    });

    navLinks.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === currentId);
    });
  }

  window.addEventListener("scroll", setActiveLink);
  window.addEventListener("load", setActiveLink);
  setActiveLink();

  // Scroll reveal (Intersection Observer)
  const revealItems = document.querySelectorAll(".card, .timeline-item, .book-list li");
  revealItems.forEach((el) => el.classList.add("reveal"));

  // Fallback: if observer not supported, show everything
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((el) => el.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((el) => observer.observe(el));
});
