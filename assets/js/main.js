import { initialiseNavigation } from './navigation.js';
import { initialiseNotice } from './notice.js';
import { initialiseReveals } from './reveal.js';
import { initialiseCarousels } from './carousel.js';
import { initialiseCountdowns } from './countdown.js';
import { initialiseFilters } from './filters.js';
import { initialiseLightboxes } from './lightbox.js';

document.documentElement.classList.add('js');

function initialise() {
  initialiseNavigation();
  initialiseReveals();
  initialiseNotice();
  initialiseCarousels();
  initialiseCountdowns();
  initialiseFilters();
  initialiseLightboxes();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialise, { once: true });
} else {
  initialise();
}
