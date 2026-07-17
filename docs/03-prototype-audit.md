# Phase 0 — Prototype Audit

## `index_6.html` and `bonfire.html`

**Status:** Initial audit complete  
**Reviewed:** 16 July 2026  
**Preserved originals:** `/archive/prototypes/`

---

## 1. Summary

The prototypes establish a convincing visual direction and should be treated as design references, not production templates.

They successfully create:

- a clear Darrington identity;
- strong photographic impact;
- a welcoming community tone;
- recognisable event-specific atmosphere;
- useful visual hierarchy;
- responsive layouts;
- simple vanilla JavaScript enhancements; and
- a much stronger experience than a text-heavy template site.

The production website should retain the character of these pages while rebuilding their shared parts as a coherent system.

---

## 2. Files preserved

| File | Lines | Purpose |
|---|---:|---|
| `index_6.html` | 917 | Homepage design prototype |
| `bonfire.html` | 1,013 | Event-page design prototype |

The archived copies are byte-for-byte identical to the files supplied in:

```text
/Users/laurie/villagefield/website/02-prototypes/
```

No changes have been made to the originals.

---

## 3. Design language to retain

### Colour

Shared palette:

```text
Leaf green       #4A9E3F
Dark green       #357A2D
Deep green       #1E5C17
Event red        #D42B2B
Gold             #F5C200
Cream            #FAF6ED
Charcoal         #2C2C2C
Earth brown      #7B5E3A
White            #FFFFFF
```

Bonfire adds:

```text
Night            #0D0D0D
Night mid        #1A1A1A
Night soft       #242424
```

### Typography

- Display: Playfair Display, weights 600 and 700.
- Body/interface: Inter, weights 400, 500 and 600.
- Fallbacks are sensible.
- Heading/body contrast is distinctive without feeling corporate.

### Shape and spacing

- Small 6px control radius.
- Larger card and image radii.
- Generous section spacing.
- Wide content container.
- Cards and photographic grids provide visual rhythm.

### Motion

- Slow hero-image zoom.
- Staggered hero-copy entrance.
- Scroll-triggered reveal.
- Hover lift on cards and buttons.
- Automatic gallery transitions.
- Moving news ticker.

The first four are good foundations. The gallery and ticker need accessibility and control improvements.

### Imagery

- Cloudinary images are already used.
- Large hero photography is central.
- Image choices create atmosphere rather than merely illustrating text.
- Bonfire has a successful dark event palette while retaining the shared green navigation.

---

## 4. Structural strengths

### Homepage

The homepage has a clear sequence:

1. identity and proposition;
2. annual events;
3. field story;
4. facilities;
5. supporting imagery; and
6. footer.

This is a sound narrative foundation.

### Bonfire page

The event page has a stronger visitor journey:

1. event proposition;
2. quick facts;
3. event story;
4. gallery;
5. attractions;
6. practical information; and
7. footer.

This should inform the shared event-page specification.

### Responsive work

Both prototypes include a mobile breakpoint and restructure grids and navigation for narrower screens.

### Progressive technical choices

- Plain semantic HTML is used in many places.
- CSS custom properties establish initial tokens.
- JavaScript is small and understandable.
- Intersection Observer is used instead of continuous scroll calculations for reveals.
- Reduced-motion CSS is included.
- External links use `rel="noopener"`.

---

## 5. Production issues to resolve

## 5.1 Architecture and maintainability

### Inline CSS and JavaScript

Each page contains its full stylesheet and script:

- approximately 600 lines of CSS per page;
- repeated design tokens;
- repeated navigation;
- repeated ticker;
- repeated footer;
- repeated reveal logic; and
- repeated mobile rules.

Any shared change currently requires editing every page.

### Hard-coded content

The following are embedded directly in HTML or JavaScript:

- event dates;
- ticker messages;
- gallery photographs;
- gallery captions;
- footer year;
- event links;
- facilities;
- social links; and
- practical information.

These should move to the agreed reusable templates and JSON/Cloudinary model where appropriate.

### Inline implementation details

There are:

- inline `onclick` handlers;
- inline `style` attributes;
- image URLs in style attributes; and
- globally named JavaScript functions.

Production code should separate structure, presentation and behaviour.

---

## 5.2 Accessibility

### Missing document landmarks

- There is no `<main>` element.
- There is no skip link.
- Footer sections are visually headed with `<h4>` without an enclosing semantic heading structure.

### Navigation

- The logo/title block is not a link to the homepage.
- The mobile toggle does not expose `aria-expanded`.
- The toggle does not identify its controlled menu with `aria-controls`.
- The mobile menu does not close on Escape or manage focus.
- Active navigation uses a CSS class but not `aria-current="page"`.
- The redundant `role="navigation"` on `<nav>` is unnecessary.

### Focus

Hover states are defined, but explicit, consistently visible keyboard focus styles are not apparent.

### Moving ticker

- The ticker moves continuously.
- It has no pause control.
- `role="marquee"` is obsolete/problematic.
- Messages are generated only by JavaScript.
- Duplication used for looping may produce repetitive assistive-technology output.

A static notice bar or controlled rotator is preferable.

### Motion fallback

Reduced-motion CSS shortens animation, which is useful, but production code should:

- remove smooth scrolling for reduced motion;
- stop the slideshow autoplay;
- stop the ticker;
- ensure hidden reveal content becomes visible; and
- avoid initial opacity that can leave content unavailable if JavaScript fails.

### Slideshow

- Autoplay has no pause button.
- Autoplay restarts after every interaction.
- It continues when the browser tab is hidden.
- Slides do not expose an accessible carousel structure or status.
- Dot buttons do not expose current state.
- The slideshow is unusable as a gallery if JavaScript fails because only the active slide is shown by CSS.

### Emoji icons

Decorative emoji may be announced inconsistently by screen readers. Decorative icons should be hidden from assistive technology; meaningful information should remain as text.

### Language

Use `lang="en-GB"` rather than `lang="en"`.

---

## 5.3 Content and factual verification

The prototypes contain claims that must be verified before publication:

- “Summer 2025 — Date TBC”.
- “November 2025 — Date TBC”.
- Bonfire Night date of Saturday 7 November 2026. **Confirmed by Laurie on 16 July 2026.**
- Gates open at 5:00pm. **Confirmed by Laurie on 17 July 2026.**
- The field is open every day.
- New play equipment was installed in 2024.
- Facilities are suitable “for all ages from toddlers upwards”.
- A full-size football area exists.
- A basketball court exists.
- Dogs on leads are welcome at Bonfire Night.
- Parking on surrounding roads is appropriate guidance.
- Card payments may be available.
- No personal fireworks or sparklers are permitted.
- The event attracts hundreds of residents.
- It is “one of the best” or “one of the most spectacular” in West Yorkshire.
- The field has more than 100 years of history.
- Thousands visit each year.

Potentially problematic or outdated statements:

- Homepage footer copyright is 2025.
- “Registered Charity” omits charity number 505756.
- The site identity says “Community Trust” rather than “Village Field Trust”.
- The homepage says there are three annual events, but Santa Special is now required.
- Generic Facebook and Instagram homepages are used instead of confirmed Trust profiles.
- Bonfire address says Park Avenue, while the Charity Commission public address says Philips Lane.

All practical event and facility statements require named-owner approval.

---

## 5.4 Content completeness

Missing from the prototypes:

- Santa Special;
- complete field information;
- accessibility details;
- accurate directions/map;
- about/governance detail;
- charity number;
- volunteer pathway;
- sponsorship pathway;
- news;
- privacy;
- accessibility statement;
- image-removal route;
- contact details;
- event FAQs;
- cancellation/postponement state;
- gallery year filters; and
- booking/ticket state.

---

## 5.5 Performance and media

### Strengths

- Cloudinary CDN is used.
- Images are external rather than committed as heavy originals.
- Hero images use `<img>` rather than CSS backgrounds.

### Improvements needed

- Cloudinary transformation parameters are not used in the URLs.
- Images lack responsive `srcset` and `sizes`.
- Most images lack intrinsic `width` and `height`.
- Below-the-fold images are not lazy-loaded.
- Event-card images are CSS backgrounds and therefore lack native alternative text and responsive-image behaviour.
- Google Fonts creates an additional third-party dependency.
- Hero loading priority is not defined.
- Slideshow images appear to load together.
- Repeated use of the same playground image reduces variety.

---

## 5.6 SEO and sharing

Missing or incomplete:

- meta descriptions;
- canonical URLs;
- Open Graph metadata;
- social sharing images;
- Event structured data;
- organisation structured data;
- favicons;
- descriptive internal URLs;
- breadcrumb structure;
- sitemap integration; and
- charity/location identity.

The homepage title should be more descriptive than only the organisation name.

---

## 5.7 JavaScript safety and resilience

### Ticker

Ticker messages are controlled in source code, but inserted with `innerHTML`. The current messages are trusted constants, yet the future JSON version should use DOM creation and `textContent`.

### Intersection Observer

Content starts hidden through `.reveal`. If JavaScript fails before adding `.visible`, content can remain invisible. Production should hide content only after enhancement initialises successfully.

### Navigation

The JavaScript assumes the navigation elements exist. Shared modules should initialise conditionally and fail independently.

### Slideshow

The code assumes:

- slides exist;
- the dot container exists; and
- the browser supports all used APIs.

The production component should check requirements before initialising and offer a stable fallback.

---

## 6. Component extraction map

| Prototype pattern | Production component |
|---|---|
| Fixed green navigation | Site header/navigation |
| Moving ticker | Notice bar |
| Photographic hero | Hero component |
| CTA links | Button/link variants |
| Event cards | Event-card component |
| Section eyebrow/title/divider | Section-heading component |
| Homepage statistics | Statistics component |
| Facility blocks | Feature-card component |
| Bonfire details strip | Event quick-facts component |
| Two-column image/text | Media-content component |
| Bonfire slideshow | Gallery/carousel component |
| Practical information cards | Information-card component |
| Photo strips | Gallery-grid component |
| Footer | Site footer |
| Reveal classes | Scroll-reveal enhancement |

---

## 7. Initial design-system decisions

### Retain

- Playfair Display/Inter pairing, subject to performance and licensing review.
- Green as the permanent Trust colour.
- Gold as the principal highlight.
- Cream and white as primary light surfaces.
- Charcoal for body text.
- Dark event palettes for Bonfire and seasonal palettes for Santa.
- Large photographic heroes.
- restrained hero zoom and reveal motion.
- clear, block-based page rhythm.
- compact corner radii rather than highly rounded “app” styling.

### Refine

- Standardise colour names and contrast-tested roles.
- Establish fluid type and spacing tokens.
- Separate brand colours from semantic states.
- Define event accent variables rather than duplicating stylesheets.
- Reduce repeated shadow and transition values.
- create focus styles.
- create reduced-motion alternatives.
- replace emoji with an approved icon strategy or text where necessary.

### Replace

- Inline stylesheets.
- Inline scripts and handlers.
- JavaScript-only ticker content.
- Hard-coded galleries.
- Generic social links.
- hard-coded copyright year.
- `.html` navigation URLs.
- `role="marquee"`.
- hidden-until-JavaScript reveal behaviour.

---

## 8. Recommended implementation direction

Build one shared system:

```text
assets/css/
├── tokens.css
├── base.css
├── layout.css
├── components.css
├── animations.css
└── print.css

assets/js/
├── main.js
├── navigation.js
├── notice.js
├── reveal.js
├── gallery.js
└── countdown.js
```

Event pages should use shared components plus page-level event variables:

```css
body[data-event="bonfire-night"] {
  --event-surface: #0d0d0d;
  --event-surface-alt: #1a1a1a;
  --event-accent: #d42b2b;
  --event-highlight: #f5c200;
}
```

This retains Bonfire's atmosphere without maintaining a second copy of the whole design system.

---

## 9. Priority fixes before prototype code is reused

1. Verify all dates, facts, addresses and policies.
2. Add Santa Special to the information architecture.
3. Introduce `<main>`, skip link and focus states.
4. rebuild the mobile navigation accessibly.
5. replace the moving ticker with an accessible notice.
6. rebuild the slideshow as a reusable gallery component.
7. extract CSS and JavaScript.
8. move changing information to JSON.
9. use Cloudinary tags and responsive transformations.
10. add metadata, structured data and clean URLs.

---

## 10. Audit conclusion

The prototypes have captured the desired “punch”. Their strongest contribution is not individual code but a recognisable visual language:

- bold photography;
- green/gold community identity;
- warm editorial typography;
- event-specific atmosphere;
- clean content blocks; and
- movement used to enliven the page.

The correct next step is not to discard or continue copying them. It is to translate this language into the reusable design system and component library defined by the blueprint.
