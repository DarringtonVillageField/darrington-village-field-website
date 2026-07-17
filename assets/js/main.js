import { initialiseNavigation } from './navigation.js';
import { initialiseNotice } from './notice.js';
import { initialiseReveals } from './reveal.js';

document.documentElement.classList.add('js');

function initialise() {
  initialiseNavigation();
  initialiseReveals();
  initialiseNotice();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialise, { once: true });
} else {
  initialise();
}
