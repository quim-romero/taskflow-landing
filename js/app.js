// -------------------------------------
// TaskFlow - app.js
// -------------------------------------

// Mobile Menu Toggle
const navToggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--open");
  navToggle.classList.toggle("nav__toggle--open");
  document.body.classList.toggle("no-scroll");
});

// GSAP Setup
window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const gsapAnimations = {
    initHeroAnimations() {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.out" },
      });

      tl.from(".hero__title", {
        y: 40,
        opacity: 0,
      })
        .from(
          ".hero__subtitle",
          {
            y: 30,
            opacity: 0,
          },
          "-=0.6"
        )
        .from(
          ".hero .btn",
          {
            scale: 0.95,
            opacity: 0,
          },
          "-=0.4"
        );
    },

    initScrollReveal() {},
  };

  gsapAnimations.initHeroAnimations();
  gsapAnimations.initScrollReveal();
});
