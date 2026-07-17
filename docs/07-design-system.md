# Design System

## Phase 1 reference — version 1.0

**Status:** Implementation baseline  
**Date:** 17 July 2026  
**Live reference:** [`design-system/index.html`](../design-system/index.html)

---

## Purpose

This document translates the Project Blueprint into reusable visual and interaction rules. The live reference page is the authoritative demonstration; this guide explains how and why to use it.

The system deliberately uses a small set of patterns. New pages should assemble these patterns before introducing one-off styling. A new pattern should solve a repeated need, work at all supported screen sizes and meet the accessibility rules below.

## Design direction

The primary visual character is warm, green and photographic. Green represents the field and anchors the Trust identity; cream creates a softer background than pure white; gold provides selective emphasis. Event pages may introduce a controlled seasonal theme while retaining the same navigation, typography, spacing and interaction patterns.

Motion supports the reading order. It must never delay access to content or become the main attraction.

## Foundations

### Colour roles

| Token | Value | Intended use |
|---|---:|---|
| `--colour-green-500` | `#4a9e3f` | Brand accents and active states |
| `--colour-green-700` | `#357a2d` | Primary buttons and strong brand surfaces |
| `--colour-green-900` | `#1e5c17` | Deep green sections and high-emphasis text |
| `--colour-gold-500` | `#f5c200` | Small highlights and focus accents |
| `--colour-red-600` | `#d42b2b` | Bonfire/event emphasis, not general decoration |
| `--colour-cream-100` | `#faf6ed` | Warm page background |
| `--colour-charcoal-900` | `#252b28` | Primary text |

Use semantic tokens such as `--colour-text`, `--colour-surface` and `--colour-primary` in components. Raw colour values should remain in `tokens.css`.

Colour must not be the only way information is conveyed. Status labels therefore include text, and links retain a visible underline where context does not otherwise identify them.

### Typography

- **Display and headings:** Playfair Display, with a Georgia fallback.
- **Body and interface text:** Inter, with system sans-serif fallbacks.
- Body text uses a comfortable line height and a constrained reading width.
- Heading levels describe document structure; their visual size must not be used to choose the HTML level.
- Avoid fully justified text, long all-capital passages and text embedded in photographs.

### Spacing and shape

Spacing uses the named scale in `tokens.css`; components should not invent arbitrary gaps. Corners are gently rounded, with larger radii reserved for cards and photographs. Shadows are restrained and must not be needed to understand boundaries.

### Images

- Give every content image meaningful alternative text, or an empty `alt` when decorative.
- Set width and height or an aspect ratio to reduce layout movement.
- Use Cloudinary transformations to deliver an appropriately sized modern format.
- Do not place important wording only inside an image.
- Keep a safe focal area when text overlays a photograph and maintain strong contrast with a gradient or solid panel.

## Components

### Site header and navigation

The header provides a consistent Trust identity and primary navigation. On smaller screens the menu button exposes the same links. Its expanded state is programmatically available through `aria-expanded`; Escape closes the menu and focus remains visible.

### Notice bar

The notice component is reserved for timely, site-wide information. It reads the highest-priority published notice from `assets/data/notices.json`. Do not use it for routine marketing. Expired or draft notices must not display.

### Hero

A hero combines a strong image, concise page purpose and one or two actions. Event pages may include a date or status eyebrow. The text must remain useful if the image is unavailable. Avoid carousels in the primary hero.

### Buttons

- **Primary:** the single preferred action in a section.
- **Secondary:** a useful alternative with less emphasis.
- **Ghost/light:** an action on a dark or photographic surface.

Use links for navigation and buttons for actions. Labels should describe the result, such as “View Bonfire details”, rather than “Click here”.

### Cards

Standard cards group related content. Event cards add a visible status, date and concise practical summary. The entire card must not become an ambiguous link; use a clearly labelled action. Keep card heights natural unless alignment materially improves scanning.

### Quick facts

Quick facts surface high-priority practical details such as date, opening time, location and accessibility. They supplement, rather than replace, full page content.

### Disclosure and FAQ

Use native `details` and `summary` elements for optional supporting information. Do not hide essential event arrangements inside a closed disclosure.

### Footer

The footer carries charity identity, contact routes and governance links. It appears consistently across public pages.

## Event themes

Themes modify atmosphere without changing the underlying component system.

- **Bonfire Night:** deep charcoal, ember red and warm gold; subtle ember-like decoration only.
- **Santa Special:** deep winter green, warm red and cream; optional subtle snow only when reduced motion is not requested.
- **Feast & Fayre:** the core field greens with lively photography and restrained gold accents.
- **Five Mile Run:** the core system with energetic composition and clear route/practical information.

No seasonal animation may reduce legibility, capture pointer input or run when the visitor requests reduced motion.

## Motion and progressive enhancement

Reveal effects begin only after JavaScript adds the `js` class. Content remains present and readable when scripts fail. The `prefers-reduced-motion` media query removes non-essential transitions and smooth scrolling. Autoplaying audio and rapidly flashing effects are prohibited.

## Accessibility baseline

Every component and page must:

- use semantic landmarks and a logical heading hierarchy;
- provide a skip link;
- work with a keyboard alone;
- retain a highly visible focus indicator;
- meet WCAG 2.2 AA colour-contrast expectations;
- remain usable at 200% browser zoom and narrow viewport widths;
- label form controls and report errors in text;
- provide useful alternatives for images and media;
- respect reduced-motion preferences; and
- preserve meaningful content without JavaScript.

Accessibility is tested throughout development, not deferred until launch.

## File responsibilities

| File | Responsibility |
|---|---|
| `assets/css/tokens.css` | Design values: colour, type, spacing, radii, shadows and timing |
| `assets/css/base.css` | Reset, document defaults, typography, links and focus |
| `assets/css/layout.css` | Containers, grids, sections, header and footer structure |
| `assets/css/components.css` | Reusable component appearance and event themes |
| `assets/css/animations.css` | Progressive reveal and reduced-motion behaviour |
| `assets/css/print.css` | Clean printable event and information pages |
| `assets/js/navigation.js` | Accessible small-screen navigation |
| `assets/js/reveal.js` | Optional viewport reveal enhancement |
| `assets/js/notice.js` | Published notice selection and display |
| `assets/js/main.js` | Module initialisation only |

## Change control

Before adding a component or token:

1. Confirm an existing pattern cannot express the requirement.
2. Demonstrate the addition on the design-system page.
3. Test keyboard access, zoom, reduced motion and responsive behaviour.
4. Document its intended use here.
5. Record a material architectural change in the decisions log.

Phase 2 page development should use this system as its starting point. Findings from real pages may refine it, but changes must remain reusable and intentional.
