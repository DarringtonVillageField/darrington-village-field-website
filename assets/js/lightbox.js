export function initialiseLightboxes() {
  document.querySelectorAll('[data-lightbox-gallery]').forEach((gallery) => {
    const dialog = gallery.parentElement.querySelector('[data-lightbox]');
    const triggers = [...gallery.querySelectorAll('[data-lightbox-trigger]')];
    if (!dialog || !triggers.length || typeof dialog.showModal !== 'function') return;

    const image = dialog.querySelector('[data-lightbox-image]');
    const caption = dialog.querySelector('[data-lightbox-caption]');
    const close = dialog.querySelector('[data-lightbox-close]');
    const previous = dialog.querySelector('[data-lightbox-previous]');
    const next = dialog.querySelector('[data-lightbox-next]');
    let current = 0;
    let opener;

    const showImage = (index) => {
      current = (index + triggers.length) % triggers.length;
      const triggerImage = triggers[current].querySelector('img');
      if (!triggerImage || !image) return;
      image.src = triggers[current].dataset.lightboxSrc || triggerImage.src;
      image.alt = triggerImage.alt;
      if (caption) caption.textContent = triggers[current].dataset.lightboxCaption || triggerImage.alt;
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
    dialog.addEventListener('close', () => opener?.focus());
  });
}
