'use strict';

const fadeins = document.querySelectorAll('.fadein');
const elementStates = new WeakMap(); // lagrar state per element

const fadeinObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    const isActive = elementStates.get(el) || false;

    if (entry.intersectionRatio > 0.35 && !isActive) {
      el.classList.add('active');
      elementStates.set(el, true);
    } else if (entry.intersectionRatio < 0.05 && isActive) {
      el.classList.remove('active');
      elementStates.set(el, false);
    }
  });
}, {
  threshold: [0, 0.05, 0.35, 1] // triggar bara vid dessa nivåer
});

fadeins.forEach(el => {
  elementStates.set(el, false); // default state
  fadeinObserver.observe(el);
});