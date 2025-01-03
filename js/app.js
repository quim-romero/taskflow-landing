// -------------------------------------
// TaskFlow - app.js
// -------------------------------------

const navToggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--open");
  navToggle.classList.toggle("nav__toggle--open");
  document.body.classList.toggle("no-scroll");
});

// ✅ GSAP Setup
window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Initialize GSAP animations
  const gsapAnimations = {
    initHeroAnimations() {},
    initScrollReveal() {},
  };

  gsapAnimations.initHeroAnimations();
  gsapAnimations.initScrollReveal();
});
