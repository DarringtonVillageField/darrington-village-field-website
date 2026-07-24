# Phase 6 — Galleries and Content Administration

## Completion Record

**Status:** Complete
**Prepared:** 24 July 2026  
**Project:** Darrington Village Field Trust website

---

## 1. Outcome

Phase 6 has turned the approved Gallery design into a working Cloudinary-backed public Gallery and has reduced the risk of conflicting routine event information.

The website remains a static HTML5, CSS3 and vanilla JavaScript project. It does not require a framework, content-management system or authenticated Cloudinary API credentials in the browser.

---

## 2. Delivered

### Public Gallery

- Working Gallery page at `/gallery/`.
- Cloudinary tag-list integration using cloud `gst8uxqp`.
- Collection filters for Bonfire Night, Feast & Fayre, The Field, Five Mile Run and Santa Special.
- Year filters for the currently configured event years.
- Area filters for the Field's open space and playground.
- Balanced random initial selection of 24 photographs.
- Further photographs exposed through a Load more control.
- Duplicate assets removed when collections are combined.
- Enlarged keyboard-accessible image viewer.
- Alternative-text and caption fallbacks.
- Loading, empty and partial-failure messages.
- Direct filtered Gallery links, including `/gallery/?collection=field`.
- Gallery added to the public navigation and footers.
- The tagged 2026 Feast & Fayre and Five Mile Run collections embedded in their event pages.

### Cloudinary administration

- Exact production Gallery tags recorded in `assets/data/galleries.json`.
- Upload, tagging, metadata, verification and withdrawal workflow documented.
- Current tag names distinguished from the earlier proposed vocabulary.
- Bulk-tagging interface pitfall documented.
- Privacy, safeguarding and image-approval checks included.

### Event administration

- Homepage event cards consume `assets/data/events.json`.
- Events-index cards consume the same event records.
- Shared event dates on event pages consume the same records.
- Cross-event “Next event” and “Following event” references consume the same records.
- The Bonfire countdown target consumes the confirmed event start value.
- Confirmed 2027 Feast & Fayre and Five Mile Run dates recorded centrally.
- Human-readable HTML fallback content remains available if JavaScript or JSON fails.
- Invalid event data is ignored without removing fallback content.

### Notices

- Notice-bar content remains controlled by `assets/data/notices.json`.
- Only published notices within valid optional start and end dates are displayed.
- Missing messages, invalid dates, reversed date ranges and unsafe link schemes are rejected.
- Static pages remain usable when the notice file cannot be loaded.

### Documentation

- Approved Volunteer Website Guide.
- README brought up to date with the current project stage and real document names.
- Phase 6 completion record added.

---

## 3. Demonstrated workflow

Laurie successfully:

- enabled Cloudinary public resource lists;
- applied collection and year or area tags;
- corrected initially uncommitted tag selections in the Cloudinary interface;
- published and verified Santa Special photographs;
- tagged Bonfire Night, Feast & Fayre, Village Field and Five Mile Run photographs;
- tested collection, year and area filters;
- tested Safari and DuckDuckGo browser behaviour;
- verified the balanced random selection; and
- verified the Load more behaviour.

This demonstrates that an authorised maintainer can publish an approved Gallery batch without editing HTML.

---

## 4. Controlled limitations

The following information is not yet wholly data-driven:

- detailed event-page prose;
- page titles and search descriptions;
- event FAQ answers;
- event-specific practical details other than shared dates;
- shared organisation details repeated in HTML; and
- long-form privacy, accessibility and governance content.

These change less frequently and should continue to receive a full-page review. The Volunteer Website Guide warns maintainers not to assume that one JSON edit changes every reference.

---

## 5. Intentionally deferred

### News

The homepage currently contains a small static Latest News section. A larger JSON-driven News index is deferred until the Trust confirms that it has enough continuing news content and an owner able to maintain it.

### People and sponsor data

Structured people and sponsor data is deferred until the Trust decides what information it wants to publish and provides approved content, photographs, logos and ownership arrangements.

These are content and governance decisions rather than technical blockers for the initial website launch.

---

## 6. Review checklist

- [ ] Homepage event cards display the expected dates, status and summaries.
- [ ] Events-index cards display the same current information.
- [ ] Bonfire quick facts show Saturday 7 November 2026.
- [ ] Bonfire countdown runs towards the 5:00pm opening time.
- [ ] Feast & Fayre and Five Mile Run show Saturday 20 June 2026 as their most recent event.
- [ ] Feast & Fayre and Five Mile Run show Saturday 19 June 2027 in their looking-ahead sections.
- [ ] Their embedded 2026 photograph galleries load and open correctly.
- [ ] Cross-event boxes show Bonfire & Fireworks followed by Santa Special.
- [ ] Santa Special continues to show its date-pending statement.
- [ ] Gallery filters, random first selection and Load more continue to work.
- [ ] The site remains readable if JavaScript is disabled or an enhancement fails.
- [ ] The Volunteer Website Guide matches the approved workflow.

---

## 7. Exit criteria assessment

| Phase 6 criterion | Assessment |
|---|---|
| An authorised maintainer can publish an approved Gallery batch | Demonstrated |
| Routine shared event data can be changed without editing HTML | Implemented for cards, shared date references and the Bonfire countdown |
| Failures do not make pages unusable | Implemented through static fallbacks and guarded enhancements |

Phase 6 can be marked complete after the review checklist is approved.

---

## 8. Next phase

Phase 7 covers:

- full content review;
- responsive and cross-browser testing;
- accessibility testing;
- performance optimisation;
- search metadata and structured data;
- sitemap, robots and redirects;
- privacy and governance review;
- domain, DNS and Netlify launch configuration;
- recovery and rollback testing; and
- final maintainer handover.
