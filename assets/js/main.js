import { initialiseNavigation } from './navigation.js';
import { initialiseNotice } from './notice.js';
import { initialiseReveals } from './reveal.js';
import { initialiseCarousels } from './carousel.js';
import { initialiseCountdowns } from './countdown.js';
import { initialiseFilters } from './filters.js';
import { initialiseLightboxes } from './lightbox.js';
import { initialiseEventContent } from './events.js?v=20260724-phase6b';
import { initialiseCloudinaryGalleries } from './cloudinary-gallery.js?v=20260724-phase6b';

document.documentElement.classList.add('js');

function initialise() {
  initialiseNavigation();
  initialiseReveals();
  initialiseNotice();
  initialiseCarousels();
  initialiseFilters();
  initialiseLightboxes();
  initialiseEventContent().finally(initialiseCountdowns);
  initialiseCloudinaryGalleries();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialise, { once: true });
} else {
  initialise();
}
