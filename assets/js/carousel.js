export function initialiseCarousels() {
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const slides = [...carousel.querySelectorAll('[data-carousel-slide]')];
    const previous = carousel.querySelector('[data-carousel-previous]');
    const next = carousel.querySelector('[data-carousel-next]');
    const status = carousel.querySelector('[data-carousel-status]');
    const pauseButton = carousel.querySelector('[data-carousel-pause]');
    if (slides.length < 2 || !previous || !next) return;

    let current = Math.max(0, slides.findIndex((slide) => !slide.hidden));
    let timer;
    const autoplay = carousel.dataset.carouselAutoplay === 'true';
    const interval = Math.max(3000, Number(carousel.dataset.carouselInterval) || 6000);
    let manuallyPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const show = (index, announce = true) => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        slide.hidden = slideIndex !== current;
        slide.setAttribute('aria-hidden', String(slideIndex !== current));
      });
      if (status) {
        status.textContent = `Image ${current + 1} of ${slides.length}`;
        status.setAttribute('aria-live', announce ? 'polite' : 'off');
      }
    };

    const stopAutoplay = () => {
      window.clearInterval(timer);
      timer = undefined;
    };

    const updatePauseButton = () => {
      if (!pauseButton) return;
      pauseButton.textContent = manuallyPaused ? 'Play' : 'Pause';
      pauseButton.setAttribute('aria-pressed', String(manuallyPaused));
      pauseButton.setAttribute('aria-label', `${manuallyPaused ? 'Play' : 'Pause'} slideshow`);
    };

    const startAutoplay = () => {
      stopAutoplay();
      if (!autoplay || manuallyPaused || document.hidden || carousel.matches(':hover') || carousel.contains(document.activeElement)) return;
      timer = window.setInterval(() => show(current + 1, false), interval);
    };

    previous.addEventListener('click', () => show(current - 1));
    next.addEventListener('click', () => show(current + 1));
    pauseButton?.addEventListener('click', () => {
      manuallyPaused = !manuallyPaused;
      updatePauseButton();
      if (manuallyPaused) stopAutoplay();
      else startAutoplay();
    });
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', stopAutoplay);
    carousel.addEventListener('focusout', (event) => {
      if (!carousel.contains(event.relatedTarget)) startAutoplay();
    });
    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        show(current - 1);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        show(current + 1);
      }
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopAutoplay();
      else startAutoplay();
    });
    show(current, false);
    updatePauseButton();
    startAutoplay();
  });
}
