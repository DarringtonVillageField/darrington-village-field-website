# Core Component Library

## Blueprint Phase 3 reference — version 1.0

**Status:** Ready for review
**Date:** 17 July 2026
**Working demonstration:** [`component-library/index.html`](../component-library/index.html)

---

## Purpose

This library provides the reusable patterns from which public pages will be assembled. It extends the approved design system without introducing a framework, build process or dependency. All behaviour is progressively enhanced with small vanilla JavaScript modules.

The demonstration page is the visual and interaction reference. This document records purpose, markup expectations, accessibility behaviour and content limits.

## Governing rules

- Use semantic HTML before adding JavaScript.
- Essential information must remain available when JavaScript or external media fails.
- Reuse an existing component before creating a page-specific variation.
- Do not autoplay carousels, audio or decorative motion.
- Respect `prefers-reduced-motion`.
- Use links for navigation and buttons for actions on the current page.
- Keep all visitor-facing wording concise and specific.

## Global components

### Header and navigation

**Purpose:** Consistent Trust identity and access to primary pages.
**Behaviour:** The small-screen menu exposes `aria-expanded`, closes after selection and closes with Escape. Without JavaScript, all links remain visible.
**Content limit:** Six primary destinations plus, if needed, one highlighted event action.

### Breadcrumbs

**Purpose:** Orientation on event, news and deeper information pages.
**Markup:** A labelled navigation landmark containing an ordered list. The current page uses `aria-current="page"`.
**Use:** Omit from the homepage and other top-level landing pages when it adds no value.

### Notice bar

**Purpose:** One timely, important site-wide message.
**Data:** `assets/data/notices.json`.
**Fallback:** Hidden if data is unavailable, expired or unpublished.
**Content limit:** One short sentence and one optional link.

### Footer

**Purpose:** Trust identity, key contact routes, legal and governance links.
**Behaviour:** Static and fully available without JavaScript.

## Content components

### Hero and section heading

Heroes establish page purpose with a strong image, one heading, concise introduction and no more than two actions. Section headings establish the next content topic. Important text must never exist only within a photograph.

### Cards, quick facts and FAQ

These retain the definitions in the design-system guide. Event cards must display a meaningful status and date. Quick facts supplement the full event information. Native `details` and `summary` provide optional FAQ content.

### Call to action

**Purpose:** One clear next step supported by a short reason.
**Content limit:** One heading, approximately 40 words and one primary action; a secondary action is acceptable only when genuinely useful.

### Quotation

**Purpose:** Add an authentic community voice.
**Requirement:** Name and quotation must be approved for publication. Demonstration wording must never reach the public site as if genuine.

### Statistics

The final value is written directly in HTML. Any future count-up animation is decorative and must not change the accessible meaning.

### Timeline

**Purpose:** Present Field and Trust history in chronological order.
**Markup:** An ordered list with dates, headings and concise descriptions.
**Responsive behaviour:** Remains a single readable sequence at every width.

### Sponsor grid

**Purpose:** Recognise approved event and Trust supporters.
**Images:** Logo alternative text must identify the sponsor.
**Links:** Open in the current tab unless there is a documented reason otherwise.

## Media components

### Carousel

**Module:** `assets/js/carousel.js`
**Markup hooks:** `data-carousel`, `data-carousel-slide`, previous/next controls and a status element.
**Behaviour:** Previous/next controls and Left/Right Arrow keys; wraps at either end; announces manually selected positions. Autoplay is optional, never required.
**Autoplay:** When enabled, use a minimum six-second interval and provide a visible Pause/Play control. Pause while the carousel is hovered, focused or in a background tab. Start paused when reduced motion is requested, while allowing the visitor to choose Play.
**Fallback:** The first image is visible and its caption remains readable.
**Content limit:** Prefer 3–7 carefully selected images. Longer collections belong in a gallery.

### Filter controls

**Module:** `assets/js/filters.js`
**Behaviour:** Buttons expose `aria-pressed`; an “All” option restores the full list; the result count is announced.
**Fallback:** Every item remains visible when JavaScript is unavailable.

### Gallery grid

**Purpose:** A responsive view of approved Cloudinary assets.
**Images:** Use Cloudinary thumbnail transformations, fixed dimensions, automatic format/quality and lazy loading below the fold.
**Data:** The production gallery will consume the approved public asset list described in the Blueprint. The Phase 3 demonstration uses known assets while Cloudinary tagging remains disabled.

### Lightbox

**Module:** `assets/js/lightbox.js`
**Markup:** Native `dialog`, labelled controls and a caption.
**Behaviour:** Opening moves focus into the dialog; Escape uses the native close behaviour; closing restores focus to the originating thumbnail; Arrow keys and labelled buttons move between images. Clicking the backdrop closes it.
**Fallback:** Gallery thumbnails remain visible and meaningful when `dialog` or JavaScript is unavailable.

## Behaviour components

### Countdown

**Module:** `assets/js/countdown.js`
**Input:** A complete ISO 8601 timestamp including its offset, plus a plain-language date in HTML.
**Behaviour:** Displays days, hours, minutes and seconds; never displays a negative value; replaces itself with an approved completion message at zero.
**Accessibility:** Live updates are not announced every second. The event date remains available in surrounding text.
**Content rule:** Do not show a countdown when an event date is unconfirmed.

### Scroll reveal

**Module:** `assets/js/reveal.js`
**Behaviour:** Reveals once when visible; all content starts readable until JavaScript successfully initialises; reduced-motion visitors receive no entrance effect.

## Empty and error states

Every data or media component must provide:

- an empty state that explains why no content is present;
- a short recovery-oriented error state;
- no exposed technical error wording; and
- no broken page layout when the component fails.

## JavaScript module contract

Each module exports one initialisation function, looks only for its own `data-*` hooks and returns safely when markup is absent. `main.js` coordinates initialisation but contains no component logic. One failed or absent component must not stop other components from working.

## Review checklist

Before a component is approved for public pages, confirm:

1. It has useful semantic HTML without JavaScript.
2. It works with keyboard controls and visible focus.
3. It remains coherent at narrow widths and browser zoom.
4. It respects reduced motion.
5. Images have appropriate alternatives and dimensions.
6. Loading, empty, error and completed states are sensible.
7. Its content is not duplicated unnecessarily.
8. Its intended use is documented here.

## Phase exit

Phase 3 is complete when the demonstration has been reviewed on desktop and narrow screens, keyboard behaviour has been checked, the component documentation is approved and any requested refinements have been incorporated.
