const parts = [
  ['days', 86400000],
  ['hours', 3600000],
  ['minutes', 60000],
  ['seconds', 1000]
];

export function initialiseCountdowns() {
  document.querySelectorAll('[data-countdown]').forEach((countdown) => {
    const target = new Date(countdown.dataset.countdown);
    const completeMessage = countdown.dataset.countdownComplete || 'This event has started.';
    if (Number.isNaN(target.getTime())) return;

    const output = countdown.querySelector('[data-countdown-output]');
    if (!output) return;

    let timer;
    const update = () => {
      let remaining = target.getTime() - Date.now();
      if (remaining <= 0) {
        output.replaceChildren();
        const message = document.createElement('p');
        message.className = 'countdown__complete';
        message.textContent = completeMessage;
        output.append(message);
        clearInterval(timer);
        return;
      }

      const fragment = document.createDocumentFragment();
      parts.forEach(([label, duration]) => {
        const value = Math.floor(remaining / duration);
        remaining %= duration;
        const item = document.createElement('span');
        item.className = 'countdown__item';
        const number = document.createElement('strong');
        const unit = document.createElement('span');
        number.textContent = String(value);
        unit.textContent = label;
        item.append(number, unit);
        fragment.append(item);
      });
      output.replaceChildren(fragment);
    };

    update();
    timer = window.setInterval(update, 1000);
  });
}
