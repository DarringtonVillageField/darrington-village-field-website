# Phase 7 — Launch Readiness and Polish

## Audit Record

**Status:** In progress  
**Started:** 24 July 2026  
**Project:** Darrington Village Field Trust website

---

## 1. Purpose

Phase 7 prepares the completed website for trustee approval, domain connection and public launch. It covers final quality assurance, accessibility, search visibility, security, performance, content sign-off and the controlled Netlify release.

Netlify automatic publishing remains locked during this work.

---

## 2. Checks completed

### Structure and content

- All 15 public HTML pages reviewed.
- One page heading and one main landmark confirmed on each substantive page.
- Skip links, page titles, descriptions and canonical addresses checked.
- Internal page links and same-page links checked against existing destinations.
- Duplicate HTML identifiers checked.
- Image alternative text and explicit image dimensions checked.
- Email addresses and external links inventoried.
- All JSON files parsed successfully.
- All JavaScript files passed syntax checks.

### Browser behaviour

- Homepage desktop presentation checked.
- Public pages checked for unintended horizontal overflow at the standard audit viewport.
- Bonfire Night slideshows confirmed to advance automatically while retaining pause and previous/next controls.
- Cloudinary Gallery confirmed to load 24 of 67 available photographs.
- Gallery collection filtering confirmed with the Bonfire Night collection.
- Gallery image viewer confirmed to open, close and return focus to its opening control.
- Browser console review exposed an old-module caching problem, now addressed through release versioning and revalidation headers.

### Accessibility

- Semantic landmarks and heading structures checked.
- Visible focus styling and reduced-motion CSS confirmed.
- Carousel pause controls and Gallery dialog focus handling reviewed.
- Core colour combinations checked against the WCAG 2.2 Level AA contrast target.
- Santa Special's pale-gold text on a light panel was below the target and has been replaced with a darker gold.

---

## 3. Improvements completed

- Added a release version to the shared website script and its component imports.
- Changed JavaScript and JSON cache rules so browsers revalidate these files instead of retaining incompatible versions.
- Corrected two encoded ampersands in the Contact page metadata.
- Corrected the Santa Special event-panel text contrast.
- Added `robots.txt`.
- Added `sitemap.xml` for the intended public pages.
- Added Netlify rules preventing internal documentation, archived prototypes, the design-system demonstration and the component-library demonstration from being served as public pages.
- Marked the approved Phase 6 completion record as complete.

---

## 4. Findings awaiting action or confirmation

### Content sign-off

- Confirm the final public policy for dogs on the Field.
- Replace provisional Bonfire Night entry, ticket, detailed timing and safety information when confirmed.
- Add the confirmed Santa Special date and arrangements when available.
- Trustees should approve the Privacy Notice, Accessibility Statement and governance wording before launch.

### Accessibility completion

- Complete manual checks at mobile width, 200% zoom and keyboard-only operation in Safari and another current browser.
- Spot-check the completed site with VoiceOver on macOS or iPhone.
- Review Cloudinary alternative text and captions as more photographs are uploaded.
- Update the Accessibility Statement after the final checks, removing development wording and recording any remaining known limitations.

### Search and sharing

- Add structured organisation and event information for search engines.
- Decide whether the informational pages require dedicated social-sharing images.
- Validate the sitemap after the public domain is connected.

### Security and hosting

- Test a Content Security Policy in report-only form before enforcing it.
- Inspect a locked Netlify preview to confirm redirects, headers, the custom 404 page and deployed-file boundaries.
- Keep automatic publishing locked until final trustee approval.

---

## 5. Recommended Phase 7 sequence

1. Complete reliability, accessibility and metadata fixes.
2. Add structured search data and final sharing metadata.
3. Conduct the manual responsive, zoom, keyboard and VoiceOver review.
4. Obtain trustee approval for public content and policies.
5. Register and configure `darringtonvillagefield.org.uk`.
6. Create one controlled Netlify preview and run production-header checks.
7. Publish the approved version and complete post-launch checks.

---

## 6. Current launch assessment

The website is visually and structurally mature, and no major broken public page or internal link was found. It is not yet ready for unrestricted public launch because several event details, the dogs policy, final accessibility testing and trustee policy approval remain outstanding.

Those are controlled launch tasks rather than reasons to redesign the website.
