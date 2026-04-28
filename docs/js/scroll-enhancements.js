(function () {
  "use strict";

  // --- Progress bar ---
  var bar = document.querySelector(".scroll-progress");
  if (bar) {
    function updateBar() {
      var scrolled = window.scrollY;
      var total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = total > 0 ? (scrolled / total) * 100 + "%" : "0%";
    }
    window.addEventListener("scroll", updateBar, { passive: true });
    updateBar();
  }

  // --- Slide counter ---
  var counter = document.querySelector(".slide-counter");
  var slides = Array.prototype.slice.call(document.querySelectorAll("[data-slide]"));
  if (counter && slides.length > 0) {
    var total = slides.length;
    function updateCounter() {
      var current = 1;
      var midpoint = window.innerHeight * 0.52;
      slides.forEach(function (slide, i) {
        if (slide.getBoundingClientRect().top <= midpoint) {
          current = i + 1;
        }
      });
      counter.textContent =
        String(current).padStart(2, "0") +
        " \u2014 " +
        String(total).padStart(2, "0");
    }
    window.addEventListener("scroll", updateCounter, { passive: true });
    updateCounter();
  }

  // --- Minimal header on scroll ---
  var header = document.querySelector(".site-header");
  if (header) {
    function toggleHeader() {
      header.classList.toggle("site-header--minimal", window.scrollY > 100);
    }
    window.addEventListener("scroll", toggleHeader, { passive: true });
    toggleHeader();
  }

  // --- Parallax zoom release on immersive hero ---
  var immersive = document.querySelector(".chapter-hero--immersive");
  if (immersive) {
    // Trigger the CSS scale-down transition after a short delay so it animates on load
    setTimeout(function () {
      immersive.classList.add("chapter-hero--immersive-loaded");
    }, 80);
  }
})();
