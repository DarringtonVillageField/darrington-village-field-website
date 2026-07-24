const statusLabels = {
  scheduled: 'Upcoming',
  'date-pending': 'Date pending',
  completed: 'Completed'
};

function formatDate(value, timezone, includeWeekday = false) {
  if (!value) return 'Date to be confirmed';
  const date = new Date(value.length === 10 ? `${value}T12:00:00Z` : value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('en-GB', {
    ...(includeWeekday ? { weekday: 'long' } : {}),
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: timezone || 'Europe/London'
  }).format(date);
}

function displayDate(event, includeWeekday = false) {
  return event.displayDate || formatDate(event.start, event.timezone, includeWeekday);
}

function updateCard(card, event) {
  const name = card.querySelector('[data-event-name]');
  const date = card.querySelector('[data-event-date]');
  const summary = card.querySelector('[data-event-summary]');
  const status = card.querySelector('[data-event-status]');
  const link = card.querySelector('[data-event-link]');
  if (name && event.name) name.textContent = card.hasAttribute('data-event-short-name')
    ? (event.shortName || event.name)
    : event.name;
  if (date && displayDate(event)) {
    date.textContent = displayDate(event, date.dataset.eventDateFormat === 'long');
  }
  if (summary && event.summary) summary.textContent = event.summary;
  if (status && event.status) status.textContent = statusLabels[event.status] || event.status;
  if (link && event.pageUrl?.startsWith('/')) link.href = event.pageUrl;
}

function updateReference(element, event) {
  const field = element.dataset.eventField || 'date';
  if (field === 'status' && event.status) {
    element.textContent = statusLabels[event.status] || event.status;
    return;
  }

  const date = displayDate(event, field === 'long-date' || field === 'name-and-long-date');
  if (!date) return;
  if (field === 'name-and-date' || field === 'name-and-long-date') {
    const name = event.shortName || event.name;
    if (typeof name !== 'string' || !name) return;
    element.replaceChildren(document.createTextNode(name), document.createElement('br'), document.createTextNode(date));
    return;
  }
  element.textContent = date;
}

export async function initialiseEventContent() {
  const cards = [...document.querySelectorAll('[data-event-id]')];
  const references = [...document.querySelectorAll('[data-event-reference]')];
  const countdowns = [...document.querySelectorAll('[data-event-countdown]')];
  if (!cards.length && !references.length && !countdowns.length) return;

  try {
    const response = await fetch('/assets/data/events.json');
    if (!response.ok) throw new Error('Event data unavailable');
    const data = await response.json();
    if (!Array.isArray(data.events)) throw new Error('Event data is invalid');
    const events = data.events.filter((event) => event && typeof event.id === 'string' && typeof event.name === 'string');

    cards.forEach((card) => {
      const event = events.find((item) => item.id === card.dataset.eventId);
      if (!event) return;
      updateCard(card, event);
    });

    references.forEach((element) => {
      const event = events.find((item) => item.id === element.dataset.eventReference);
      if (event) updateReference(element, event);
    });

    countdowns.forEach((countdown) => {
      const event = events.find((item) => item.id === countdown.dataset.eventCountdown);
      if (event?.start && !Number.isNaN(new Date(event.start).getTime())) {
        countdown.dataset.countdown = event.start;
      }
    });
  } catch (error) {
    console.info('Event-content enhancement skipped:', error.message);
  }
}
