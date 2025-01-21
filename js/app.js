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

      tl.from(".hero__title", { y: 40, opacity: 0 })
        .from(".hero__subtitle", { y: 30, opacity: 0 }, "-=0.6")
        .from(".hero .btn", { scale: 0.95, opacity: 0 }, "-=0.4");
    },

    initScrollReveal() {
      const features = document.querySelectorAll(".feature");

      gsap.set(features, { opacity: 0, y: 40 });

      ScrollTrigger.batch(features, {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.9,
            ease: "power2.out",
            overwrite: true,
          });
        },
        once: true,
        start: "top 85%",
      });
    },

    initPreviewCarousel() {
      const section = document.querySelector(".preview");
      const track = document.querySelector(".preview__track");

      if (!section || !track) return;

      const scrollLength = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => `-${scrollLength}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollLength}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    },

    initCTAAnimations() {
      const cta = document.querySelector(".cta-final");

      if (!cta) return;

      const elements = [
        ".cta-final__title",
        ".cta-final__subtitle",
        ".cta-final .btn",
      ];

      gsap.from(elements, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cta,
          start: "top 85%",
          once: true,
        },
      });
    },

    initFooterReveal() {
      const footer = document.querySelector(".footer");

      if (!footer) return;

      gsap.from(footer, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
          once: true,
        },
      });
    },
  };

  // Ejecutar animaciones
  gsapAnimations.initHeroAnimations();
  gsapAnimations.initScrollReveal();
  gsapAnimations.initPreviewCarousel();
  gsapAnimations.initCTAAnimations();
  gsapAnimations.initFooterReveal();
});
