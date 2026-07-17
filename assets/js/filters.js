export function initialiseFilters() {
  document.querySelectorAll('[data-filter-group]').forEach((group) => {
    const targetId = group.dataset.filterGroup;
    const target = document.getElementById(targetId);
    const buttons = [...group.querySelectorAll('[data-filter]')];
    const items = target ? [...target.querySelectorAll('[data-filter-item]')] : [];
    const status = target?.parentElement.querySelector('[data-filter-status]');
    if (!target || !buttons.length || !items.length) return;

    const apply = (filter) => {
      let visible = 0;
      items.forEach((item) => {
        const categories = (item.dataset.filterItem || '').split(' ');
        const show = filter === 'all' || categories.includes(filter);
        item.hidden = !show;
        if (show) visible += 1;
      });
      buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
      if (status) status.textContent = `${visible} ${visible === 1 ? 'item' : 'items'} shown`;
    };

    buttons.forEach((button) => button.addEventListener('click', () => apply(button.dataset.filter)));
    apply(buttons.find((button) => button.getAttribute('aria-pressed') === 'true')?.dataset.filter || 'all');
  });
}
