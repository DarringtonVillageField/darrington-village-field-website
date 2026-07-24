import { initialiseLightboxes } from './lightbox.js';

function assetUrl(cloudName, asset, transformation) {
  const publicId = asset.public_id.split('/').map(encodeURIComponent).join('/');
  const version = asset.version ? `v${asset.version}/` : '';
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformation}/${version}${publicId}.${asset.format}`;
}

function metadataFor(asset, gallery) {
  const custom = asset.context?.custom || {};
  return {
    alt: custom.alt || gallery.fallbackAlt || '',
    caption: custom.caption || gallery.fallbackCaption || custom.alt || gallery.title
  };
}

function renderAssets(component, cloudName, assets, limit) {
  const grid = component.querySelector('[data-gallery-grid]');
  if (!grid) return;

  grid.replaceChildren();
  delete grid.dataset.lightboxReady;

  assets.slice(0, limit).forEach((asset) => {
    const gallery = asset.gallery;
    const metadata = metadataFor(asset, gallery);
    const figure = document.createElement('figure');
    figure.className = 'gallery-item';

    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.lightboxTrigger = '';
    button.dataset.lightboxSrc = assetUrl(cloudName, asset, 'c_limit,w_1800,q_auto,f_auto');
    button.dataset.lightboxCaption = metadata.caption;

    const image = document.createElement('img');
    image.src = assetUrl(cloudName, asset, 'c_fill,w_700,h_525,g_auto,q_auto,f_auto');
    image.alt = metadata.alt;
    image.width = 700;
    image.height = 525;
    image.loading = 'lazy';

    const caption = document.createElement('figcaption');
    caption.textContent = metadata.caption;

    button.append(image);
    figure.append(button, caption);
    grid.append(figure);
  });

  const dialog = component.querySelector('[data-lightbox]');
  if (dialog) dialog.replaceWith(dialog.cloneNode(true));
  initialiseLightboxes();
  return Math.min(assets.length, limit);
}

async function loadTag(cloudName, tag) {
  const response = await fetch(`https://res.cloudinary.com/${cloudName}/image/list/${encodeURIComponent(tag)}.json`);
  if (!response.ok) throw new Error(`Gallery list returned ${response.status}`);
  const data = await response.json();
  return Array.isArray(data.resources) ? data.resources : [];
}

function sortAssets(assets, direction) {
  return [...assets].sort((a, b) => {
    const first = Date.parse(a.created_at || '') || 0;
    const second = Date.parse(b.created_at || '') || 0;
    return direction === 'oldest-first' ? first - second : second - first;
  });
}

function uniqueAssets(assets) {
  const seen = new Set();
  return assets.filter((asset) => {
    const key = `${asset.resource_type || 'image'}:${asset.type || 'upload'}:${asset.public_id}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function shuffleAssets(assets) {
  const shuffled = [...assets];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function balancedAssets(assets, galleries, perCollection = 4, initialSize = 24) {
  const selected = [];
  const selectedIds = new Set();

  galleries.forEach((gallery) => {
    shuffleAssets(assets.filter((asset) => asset.gallery.id === gallery.id))
      .slice(0, perCollection)
      .forEach((asset) => {
        selected.push(asset);
        selectedIds.add(`${asset.resource_type || 'image'}:${asset.type || 'upload'}:${asset.public_id}`);
      });
  });

  const remaining = shuffleAssets(assets.filter((asset) => {
    const key = `${asset.resource_type || 'image'}:${asset.type || 'upload'}:${asset.public_id}`;
    return !selectedIds.has(key);
  }));
  const initial = shuffleAssets([...selected, ...remaining.splice(0, Math.max(0, initialSize - selected.length))]);
  return [...initial, ...remaining];
}

async function loadSelection(settings, galleries, filterValue) {
  const requests = galleries.flatMap((gallery) => {
    const options = gallery.filters || (gallery.years || []).map((item) => ({
      label: String(item.year),
      value: String(item.year),
      tag: item.tag
    }));
    const selected = filterValue ? options.find((item) => item.value === filterValue) : null;
    if (filterValue && !selected) return [];
    return [{ gallery, tag: selected?.tag || gallery.tag }];
  });

  const results = await Promise.allSettled(requests.map(async ({ gallery, tag }) => {
    const assets = await loadTag(settings.cloudName, tag);
    return assets.map((asset) => ({ ...asset, gallery }));
  }));

  const successful = results.filter((result) => result.status === 'fulfilled');
  if (!successful.length) throw new Error('No gallery lists could be loaded');

  return {
    assets: uniqueAssets(successful.flatMap((result) => result.value)),
    failed: results.length - successful.length
  };
}

async function initialiseGallery(component, settings, configuredGallery) {
  const status = component.querySelector('[data-gallery-status]');
  const collectionFilters = component.querySelector('[data-gallery-collections]');
  const yearFilters = component.querySelector('[data-gallery-years]');
  const enabled = settings.galleries.filter((item) => item.enabled);
  const available = configuredGallery ? [configuredGallery] : enabled;
  let selectedCollection = configuredGallery?.id || 'all';
  let selectedFilter = null;
  let collectionButtons = [];
  let yearButtons = [];
  let orderedAssets = [];
  let visibleCount = 24;
  const batchSize = 24;
  const loadMore = component.querySelector('[data-gallery-load-more]');

  if (!configuredGallery) {
    const parameters = new URLSearchParams(window.location.search);
    const requestedCollection = parameters.get('collection');
    if (requestedCollection && available.some((gallery) => gallery.id === requestedCollection)) {
      selectedCollection = requestedCollection;
    }
    selectedFilter = parameters.get('filter') || parameters.get('year');
  }

  const activeGalleries = () => selectedCollection === 'all'
    ? available
    : available.filter((gallery) => gallery.id === selectedCollection);

  const secondaryOptions = () => {
    if (selectedCollection === 'all') {
      return [...new Set(activeGalleries()
        .flatMap((gallery) => gallery.years || [])
        .map((item) => item.year))]
        .sort((a, b) => b - a)
        .map((year) => ({ label: String(year), value: String(year) }));
    }

    const gallery = activeGalleries()[0];
    return gallery.filters || (gallery.years || []).map((item) => ({
      label: String(item.year),
      value: String(item.year)
    }));
  };

  const updateGallery = () => {
    const rendered = renderAssets(component, settings.cloudName, orderedAssets, visibleCount);
    const suffix = component.dataset.failedCollections === 'true'
      ? ' Some collections are temporarily unavailable.'
      : '';
    status.textContent = rendered
      ? `${rendered} of ${orderedAssets.length} ${orderedAssets.length === 1 ? 'photograph' : 'photographs'} shown.${suffix}`
      : 'No photographs are currently available in this collection.';
    if (loadMore) {
      loadMore.hidden = rendered >= orderedAssets.length;
    }
  };

  const showSelection = async () => {
    status.textContent = 'Loading photographs…';
    component.setAttribute('aria-busy', 'true');
    component.querySelector('[data-gallery-grid]')?.replaceChildren();
    if (loadMore) loadMore.hidden = true;
    collectionButtons.forEach((item) => item.button.setAttribute('aria-pressed', String(item.id === selectedCollection)));
    yearButtons.forEach((item) => item.button.setAttribute('aria-pressed', String(item.value === selectedFilter)));

    try {
      const result = await loadSelection(settings, activeGalleries(), selectedFilter);
      const assets = sortAssets(result.assets, 'newest-first');
      orderedAssets = selectedCollection === 'all' && !selectedFilter
        ? balancedAssets(assets, activeGalleries())
        : assets;
      visibleCount = batchSize;
      component.dataset.failedCollections = String(Boolean(result.failed));
      updateGallery();
    } catch (error) {
      status.textContent = 'The photographs cannot be loaded at the moment. Please try again later.';
      console.info('Cloudinary gallery enhancement skipped:', error.message);
    } finally {
      component.removeAttribute('aria-busy');
    }
  };

  loadMore?.addEventListener('click', () => {
    visibleCount += batchSize;
    updateGallery();
  });

  const rebuildYearFilters = () => {
    yearFilters.replaceChildren();
    const options = secondaryOptions();
    if (selectedFilter && !options.some((item) => item.value === selectedFilter)) selectedFilter = null;
    const gallery = activeGalleries()[0];
    const label = selectedCollection === 'all' ? 'Year' : (gallery?.filterLabel || 'Year');
    const labelElement = component.querySelector('[data-gallery-secondary-label]');
    if (labelElement) labelElement.textContent = label;
    const choices = [{ label: label === 'Area' ? 'All areas' : 'All years', value: null }, ...options];
    yearButtons = choices.map((item) => {
      const button = document.createElement('button');
      button.className = 'filter-button';
      button.type = 'button';
      button.setAttribute('aria-pressed', String(item.value === selectedFilter));
      button.textContent = item.label;
      button.addEventListener('click', () => {
        selectedFilter = item.value;
        showSelection();
      });
      yearFilters.append(button);
      return { ...item, button };
    });
  };

  const collectionChoices = configuredGallery
    ? [{ id: configuredGallery.id, label: configuredGallery.title }]
    : [{ id: 'all', label: 'All collections' }, ...available.map((gallery) => ({ id: gallery.id, label: gallery.title }))];

  collectionButtons = collectionChoices.map((item) => {
    const button = document.createElement('button');
    button.className = 'filter-button';
    button.type = 'button';
    button.setAttribute('aria-pressed', String(item.id === selectedCollection));
    button.textContent = item.label;
    button.addEventListener('click', () => {
      selectedCollection = item.id;
      selectedFilter = null;
      rebuildYearFilters();
      showSelection();
    });
    collectionFilters.append(button);
    return { ...item, button };
  });

  rebuildYearFilters();
  await showSelection();
}

export async function initialiseCloudinaryGalleries() {
  const components = [...document.querySelectorAll('[data-cloudinary-gallery]')];
  if (!components.length) return;

  try {
    const response = await fetch('/assets/data/galleries.json');
    if (!response.ok) throw new Error('Gallery configuration unavailable');
    const settings = await response.json();

    components.forEach((component) => {
      const requested = component.dataset.cloudinaryGallery;
      const gallery = requested === 'all'
        ? null
        : settings.galleries.find((item) => item.id === requested && item.enabled);
      const status = component.querySelector('[data-gallery-status]');
      if (requested !== 'all' && !gallery) {
        if (status) status.textContent = 'This gallery is not currently available.';
        return;
      }
      initialiseGallery(component, settings, gallery);
    });
  } catch (error) {
    components.forEach((component) => {
      const status = component.querySelector('[data-gallery-status]');
      if (status) status.textContent = 'The galleries cannot be loaded at the moment. Please try again later.';
    });
    console.info('Gallery configuration skipped:', error.message);
  }
}
