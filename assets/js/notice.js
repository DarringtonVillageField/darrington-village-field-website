export async function initialiseNotice() {
  const container = document.querySelector('[data-notice]');
  if (!container) return;

  try {
    const response = await fetch('/assets/data/notices.json');
    if (!response.ok) throw new Error('Notice data unavailable');
    const data = await response.json();
    const now = new Date();
    const notice = data.notices.find((item) => {
      if (item.status !== 'published') return false;
      const starts = item.startsAt ? new Date(item.startsAt) : null;
      const ends = item.endsAt ? new Date(item.endsAt) : null;
      return (!starts || starts <= now) && (!ends || ends >= now);
    });

    if (!notice) return;
    container.replaceChildren();
    const message = document.createElement('span');
    message.textContent = notice.message;
    container.append(message);

    if (notice.linkText && notice.linkUrl) {
      const link = document.createElement('a');
      link.href = notice.linkUrl;
      link.textContent = notice.linkText;
      container.append(link);
    }

    container.closest('.notice-bar')?.removeAttribute('hidden');
  } catch (error) {
    console.info('Notice enhancement skipped:', error.message);
  }
}
