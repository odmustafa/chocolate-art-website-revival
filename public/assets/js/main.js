// Chocolate & Art Show — minimal JS for accessibility and enhancements
(function () {
  // Reduce motion: avoid any future animations if user prefers reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.documentElement.classList.add('reduced-motion');
  }

  // Initialize Flickity explicitly if present
  const flickityEl = document.querySelector('.main-carousel');
  if (flickityEl && typeof Flickity !== 'undefined') {
    if (!flickityEl.classList.contains('flickity-enabled')) {
      /* ensure 1 slide per view and autoplay */
      new Flickity(flickityEl, {
        wrapAround: true,
        autoPlay: 5000,
        pauseAutoPlayOnHover: true,
        pageDots: true,
        prevNextButtons: true,
        cellAlign: 'center',
        contain: false,
        draggable: true
      });
    }
  }

  // Lightweight carousel
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    // If a custom track exists, use lightweight slider; otherwise (Flickity), do nothing here
    const track = carousel.querySelector('.carousel-track');
    if (track) {
      const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
      const prev = carousel.querySelector('.prev');
      const next = carousel.querySelector('.next');
      let index = 0;

      function update() {
        track.style.transform = `translateX(${-index * 100}%)`;
        slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
      }

      function go(delta) {
        index = (index + delta + slides.length) % slides.length;
        update();
      }

      prev?.addEventListener('click', () => go(-1));
      next?.addEventListener('click', () => go(1));

      if (!prefersReduced) {
        let timer = setInterval(() => go(1), 5000);
        carousel.addEventListener('mouseenter', () => clearInterval(timer));
        carousel.addEventListener('mouseleave', () => timer = setInterval(() => go(1), 5000));
      }

      carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') go(-1);
        if (e.key === 'ArrowRight') go(1);
      });

      update();
    }
  }
})();

