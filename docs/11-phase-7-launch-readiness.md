# Phase 7 — Launch Readiness and Polish

## Audit Record

**Status:** Local quality assurance complete; controlled preview and trustee approval pending
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
- Keyboard-only operation checked in Safari, including the skip link, navigation, Bonfire carousel and Gallery viewer.
- Responsive reflow checked across representative pages at a 320-pixel viewport, approximating 400% zoom on a 1280-pixel display.
- A small Privacy-page overflow caused by its long email address was corrected and retested.
- VoiceOver spot checks completed on the homepage and Gallery.
- The Gallery now announces the selected photograph's position and descriptive alternative text when it opens and when Previous or Next is used.

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
- Improved Gallery loading so an orientation-preserving preview appears immediately and sharpens without changing shape.
- Added screen-reader announcements to the Gallery viewers.

---

## 4. Findings awaiting action or confirmation

### Content sign-off

- Dogs are confirmed as allowed on the Field, including during events. Owners are reminded by signs to clean up after their dogs.
- The main entrance is confirmed as Philips Lane, Darrington, WF8 3BH.
- Bonfire Night is confirmed for Saturday 7 November 2026, with gates opening at 5pm.
- Replace provisional Bonfire Night entry, ticket, detailed timing and safety information when confirmed.
- Add the confirmed Santa Special date and arrangements when available.
- Trustees still need to approve the Privacy Notice and Accessibility Statement before launch.

### Accessibility completion

- Review Cloudinary alternative text and captions as more photographs are uploaded.
- Ask the trustees to review the Accessibility Statement and the recorded test results.
- Update the statement with its approval date and any remaining known limitations before public launch.

### Search and sharing

- Organisation and website structured information has been added to the homepage.
- Breadcrumb structured information is generated from the visible breadcrumb trail on internal pages.
- Every public page now includes the four core Open Graph properties: title, type, image and canonical URL.
- Consistent site name, UK locale, image description and large-image social-card metadata have been added.
- Informational pages use the approved Field panorama as their sharing image.
- Event rich-result information is intentionally deferred. Google requires a unique page for each event, a confirmed start date and a detailed venue address. The current annual pages cover more than one year and Santa Special has no confirmed date. The confirmed Field entrance can be used when future year-specific event pages are introduced.
- Validate the organisation and breadcrumb markup after the public domain is connected.
- Validate the sitemap after the public domain is connected.

### Security and hosting

- Test a Content Security Policy in report-only form before enforcing it.
- Inspect a locked Netlify preview to confirm redirects, headers, the custom 404 page and deployed-file boundaries.
- Keep automatic publishing locked until final trustee approval.

---

## 5. Recommended Phase 7 sequence

1. Complete reliability, accessibility and metadata fixes.
2. Add structured search data and final sharing metadata.
3. Conduct the manual responsive, zoom, keyboard and VoiceOver review. **Complete.**
4. Create one controlled Netlify preview and run hosted checks.
5. Obtain trustee approval for public content and policies.
6. Register and configure `darringtonvillagefield.org.uk`.
7. Publish the approved version and complete post-launch checks.

---

## 6. Current launch assessment

The website is visually and structurally mature, and no major broken public page or internal link was found. Local accessibility testing is complete. It is not yet ready for unrestricted public launch because the controlled hosted preview, trustee policy approval and some event details remain outstanding.

Those are controlled launch tasks rather than reasons to redesign the website.
