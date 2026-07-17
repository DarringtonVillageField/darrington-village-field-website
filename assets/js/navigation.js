export function initialiseNavigation() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const navigation = document.querySelector('[data-navigation]');

  if (!toggle || !navigation) return;

  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      close();
      toggle.focus();
    }
  });

  const wideViewport = window.matchMedia('(min-width: 56.01rem)');
  wideViewport.addEventListener('change', (event) => {
    if (event.matches) close();
  });
}
