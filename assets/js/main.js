import { initialiseNavigation } from './navigation.js?v=20260724-phase7a';
import { initialiseNotice } from './notice.js?v=20260724-phase7a';
import { initialiseReveals } from './reveal.js?v=20260724-phase7a';
import { initialiseCarousels } from './carousel.js?v=20260724-phase7a';
import { initialiseCountdowns } from './countdown.js?v=20260724-phase7a';
import { initialiseFilters } from './filters.js?v=20260724-phase7a';
import { initialiseLightboxes } from './lightbox.js?v=20260725-phase7c';
import { initialiseEventContent } from './events.js?v=20260724-phase7a';
import { initialiseCloudinaryGalleries } from './cloudinary-gallery.js?v=20260725-phase7c';
import { initialiseStructuredData } from './structured-data.js?v=20260724-phase7b';

document.documentElement.classList.add('js');

function initialise() {
  initialiseStructuredData();
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
