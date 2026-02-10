alert("JS loaded");




// Smooth scroll for nav links (with fixed, calm behavior)
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Active link highlight while scrolling
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.nav-links a');

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
