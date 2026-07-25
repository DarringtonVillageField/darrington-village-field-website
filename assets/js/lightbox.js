export function initialiseLightboxes() {
  document.querySelectorAll('[data-lightbox-gallery]').forEach((gallery) => {
    if (gallery.dataset.lightboxReady === 'true') return;
    const dialog = gallery.parentElement.querySelector('[data-lightbox]');
    const triggers = [...gallery.querySelectorAll('[data-lightbox-trigger]')];
    if (!dialog || !triggers.length || typeof dialog.showModal !== 'function') return;
    gallery.dataset.lightboxReady = 'true';

    const image = dialog.querySelector('[data-lightbox-image]');
    const caption = dialog.querySelector('[data-lightbox-caption]');
    const close = dialog.querySelector('[data-lightbox-close]');
    const previous = dialog.querySelector('[data-lightbox-previous]');
    const next = dialog.querySelector('[data-lightbox-next]');
    let current = 0;
    let opener;
    let imageRequest = 0;

    const preloadImage = (index) => {
      const trigger = triggers[(index + triggers.length) % triggers.length];
      const source = trigger?.dataset.lightboxSrc;
      if (!source) return;
      const preload = new Image();
      preload.src = source;
    };

    const showImage = (index) => {
      current = (index + triggers.length) % triggers.length;
      const triggerImage = triggers[current].querySelector('img');
      if (!triggerImage || !image) return;

      const request = ++imageRequest;
      const previewSource = triggerImage.currentSrc || triggerImage.src;
      const fullSource = triggers[current].dataset.lightboxSrc || previewSource;

      image.src = previewSource;
      image.alt = triggerImage.alt;
      if (caption) caption.textContent = triggers[current].dataset.lightboxCaption || triggerImage.alt;
      dialog.setAttribute('aria-busy', 'true');

      if (fullSource === previewSource) {
        dialog.removeAttribute('aria-busy');
        return;
      }

      const fullImage = new Image();
      fullImage.onload = () => {
        if (request !== imageRequest) return;
        image.src = fullSource;
        dialog.removeAttribute('aria-busy');
        preloadImage(current - 1);
        preloadImage(current + 1);
      };
      fullImage.onerror = () => {
        if (request === imageRequest) dialog.removeAttribute('aria-busy');
      };
      fullImage.src = fullSource;
    };

    triggers.forEach((trigger, index) => trigger.addEventListener('click', () => {
      opener = trigger;
      showImage(index);
      dialog.showModal();
      close?.focus();
    }));
    close?.addEventListener('click', () => dialog.close());
    previous?.addEventListener('click', () => showImage(current - 1));
    next?.addEventListener('click', () => showImage(current + 1));
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showImage(current - 1);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        showImage(current + 1);
      }
    });
    dialog.addEventListener('close', () => {
      imageRequest += 1;
      dialog.removeAttribute('aria-busy');
      opener?.focus();
    });
  });
}
