'use strict';

const fadeins = document.querySelectorAll('.fadein');

const fadeinObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');

      // ➕ Desktop: ta bort observer när aktiv (bara en gång)
      if (!window.matchMedia("(max-width: 768px)").matches) {
        fadeinObserver.unobserve(entry.target);
      }
    } else {
      // ➕ Mobil: tillåt att klassen tas bort igen
      if (window.matchMedia("(max-width: 768px)").matches) {
        entry.target.classList.remove('active');
      }
    }
  });
}, {
  threshold: 0.1
});

fadeins.forEach(el => fadeinObserver.observe(el));