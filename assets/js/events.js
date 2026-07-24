const statusLabels = {
  scheduled: 'Upcoming',
  'date-pending': 'Date pending',
  completed: 'Completed'
};

function formatDate(value, timezone) {
  if (!value) return 'Date to be confirmed';
  const date = new Date(value.length === 10 ? `${value}T12:00:00Z` : value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: timezone || 'Europe/London'
  }).format(date);
}

export async function initialiseEventCards() {
  const cards = [...document.querySelectorAll('[data-event-id]')];
  if (!cards.length) return;

  try {
    const response = await fetch('/assets/data/events.json');
    if (!response.ok) throw new Error('Event data unavailable');
    const { events } = await response.json();

    cards.forEach((card) => {
      const event = events.find((item) => item.id === card.dataset.eventId);
      if (!event) return;
      const name = card.querySelector('[data-event-name]');
      const date = card.querySelector('[data-event-date]');
      const summary = card.querySelector('[data-event-summary]');
      const status = card.querySelector('[data-event-status]');
      const link = card.querySelector('[data-event-link]');
      if (name) name.textContent = event.name;
      if (date) date.textContent = event.displayDate || formatDate(event.start, event.timezone);
      if (summary) summary.textContent = event.summary;
      if (status) status.textContent = statusLabels[event.status] || event.status;
      if (link) link.href = event.pageUrl;
    });
  } catch (error) {
    console.info('Event-card enhancement skipped:', error.message);
  }
}
