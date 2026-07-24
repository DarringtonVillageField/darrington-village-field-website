export function initialiseStructuredData() {
  const canonical = document.querySelector('link[rel="canonical"]')?.href;
  const breadcrumbItems = [...document.querySelectorAll('.breadcrumbs li')];
  if (!canonical || breadcrumbItems.length < 2) return;

  const itemListElement = breadcrumbItems.map((item, index) => {
    const link = item.querySelector('a');
    return {
      '@type': 'ListItem',
      position: index + 1,
      name: item.textContent.trim(),
      item: link ? new URL(link.href, canonical).href : canonical
    };
  });

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.dataset.structuredData = 'breadcrumbs';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  });
  document.head.append(script);
}
