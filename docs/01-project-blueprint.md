# Darrington Village Field Trust Website

## Project Blueprint v1.0

**Status:** Approved foundation for implementation  
**Document owner:** Darrington Village Field Trust  
**Repository:** <https://github.com/DarringtonVillageField/darrington-village-field-website>  
**Planned public domain:** `darringtonvillagefield.org.uk`  
**Technology:** HTML5, CSS3 and vanilla JavaScript  
**Hosting:** Netlify  
**Source control:** GitHub  
**Media management and delivery:** Cloudinary  
**Domain registration and DNS:** Cloudflare  
**UK context:** United Kingdom  
**Version date:** 16 July 2026

---

## Document purpose

This blueprint is the long-term reference manual for the Darrington Village Field Trust website.

It defines:

- what the website is intended to achieve;
- how it will be structured, designed, built and deployed;
- how content and photographs will be maintained;
- the standards every page and component must follow;
- the responsibilities of trustees, volunteers and future developers; and
- the roadmap for delivering and improving the website.

The blueprint is the project's source of truth. If implementation choices conflict with this document, the conflict should be resolved deliberately and the blueprint updated.

This is a living document. It should be reviewed after each major project milestone and at least annually after launch.

---

# 1. Executive summary

The website will be the digital front door to Darrington Village Field.

It will serve residents, families, event visitors, volunteers, supporters, sponsors and people seeking information about the Village Field Trust. It will combine strong photography, concise content and carefully controlled animation to create a welcoming and engaging experience.

The project will remain technically simple:

- static semantic HTML pages;
- reusable modular CSS;
- progressive enhancement with vanilla JavaScript;
- content held in small JSON files where frequent updates are needed;
- photographs managed in Cloudinary;
- code and documentation held in GitHub;
- automated preview and production deployment through Netlify; and
- the domain and DNS managed through Cloudflare.

The governing maintenance principle is:

> A volunteer should not need to edit HTML to keep routine website content current.

Some infrequent structural or long-form changes may still require a developer or technically confident maintainer. Routine changes—events, notices, news, committee details, sponsors and galleries—should be possible through documented JSON edits or Cloudinary uploads and tagging.

---

# 2. Vision

## 2.1 Vision statement

> **The Darrington Village Field website should inspire people to visit the field, participate in events and feel part of our community. It should celebrate everything the Village Field Trust does, be welcoming, modern and vibrant, and remain simple enough for volunteers to keep it relevant, engaging and up to date.**

## 2.2 Product position

The website is not merely:

- an online noticeboard;
- an event listing;
- a charity compliance site; or
- a photographic brochure.

It is a community service that should:

- inspire visits to the field;
- help people plan visits and attend events;
- explain the purpose and work of the Village Field Trust;
- encourage volunteering, support and sponsorship;
- provide trustworthy practical information;
- preserve and share the history of the field and its events; and
- demonstrate responsible charity governance without allowing administrative material to dominate the visitor experience.

## 2.3 Desired visitor response

The primary emotional response should be:

> “I would like to go there and be part of this.”

The supporting rational response should be:

> “I can quickly find everything I need, and I trust the information.”

## 2.4 Design characteristics

The site should feel:

- welcoming;
- community-centred;
- lively;
- local;
- family-friendly;
- outdoors-focused;
- inclusive;
- contemporary;
- trustworthy; and
- professionally cared for.

It should not feel:

- corporate;
- institutional;
- cluttered;
- over-animated;
- difficult to navigate;
- dependent on technical gimmicks; or
- like several unrelated event websites joined together.

---

# 3. Project goals and success measures

## 3.1 Primary goals

1. Make current events immediately visible and appealing.
2. Explain what visitors can do at the field throughout the year.
3. Make directions, facilities, accessibility and event arrangements easy to find.
4. Celebrate the people, history and voluntary work behind the field.
5. Increase participation in events, volunteering and community support.
6. Make routine updates manageable by volunteers.
7. Establish a coherent, reusable system rather than a collection of individually coded pages.
8. Deliver a fast, accessible and resilient experience on mobile devices.

## 3.2 Suggested success measures

The Trust should establish a simple baseline after launch and review the following every six months:

- number of visits to event and field pages;
- use of directions, ticket, contact and volunteer links;
- proportion of visitors using mobile devices;
- most frequently visited pages;
- completion of key tasks during informal user testing;
- number of volunteers able to complete a routine update unaided;
- time required to publish an event or gallery update;
- accessibility issues found during testing;
- broken links and missing images;
- website availability and failed deploys; and
- qualitative feedback from residents and event visitors.

Analytics must be introduced only after a privacy assessment. A privacy-respecting, low-cookie or cookieless option is preferred. Any analytics implementation must be documented in the privacy notice.

## 3.3 Initial performance targets

The following are project targets rather than contractual guarantees:

- no unnecessary JavaScript framework or runtime;
- useful content visible even if JavaScript fails;
- no avoidable layout movement as images load;
- responsive images rather than delivering the largest original everywhere;
- lazy loading for below-the-fold images;
- no autoplaying audio;
- animations that do not obstruct reading or interaction;
- a strong Lighthouse and WebPageTest result on representative mobile connections; and
- Core Web Vitals reviewed before launch and after major visual changes.

---

# 4. Audiences and their needs

| Audience | Primary needs | Typical priority |
|---|---|---|
| Local families | Events, playground, Santa Special, safety and practical details | Very high |
| Residents | Current notices, events, field information and community news | Very high |
| Event visitors | Date, time, tickets, directions, parking, accessibility and FAQs | Very high |
| General visitors | Facilities, map, opening or access information and expected behaviour | High |
| Volunteers | Opportunities, contacts, instructions and event participation | High |
| Supporters and donors | Community impact, ways to help and trustworthiness | Medium |
| Sponsors | Audience, recognition, sponsorship opportunities and contacts | Medium |
| Trustees and committee members | Governance, policies, documents and accurate organisational details | Medium |
| Researchers and former residents | History, archive photographs and previous events | Medium |
| Search engines and sharing platforms | Clear page structure, metadata, structured data and share images | Supporting |

## 4.1 Priority visitor tasks

A visitor should be able to:

- discover the next major event;
- find the event date, time and location;
- understand whether booking or tickets are required;
- get directions and parking information;
- learn what facilities are available;
- understand accessibility arrangements;
- contact the Trust;
- learn how to volunteer or support the Trust;
- see recent and historic photographs; and
- find governance and policy information.

## 4.2 Content priority rule

Pages should present information in this order:

1. what the visitor most likely came to do;
2. what they need to know before acting;
3. content that creates connection and interest;
4. supporting detail; and
5. governance or archival information.

---

# 5. Guiding principles

## 5.1 Content before decoration

Animation and visual effects must support comprehension, atmosphere or orientation. They must not conceal essential information or delay access to it.

## 5.2 Progressive enhancement

Core content, navigation and links must work without JavaScript. JavaScript may enhance:

- galleries;
- carousels;
- countdowns;
- filters;
- accordions;
- mobile navigation;
- scroll reveals; and
- seasonal visual effects.

If an enhancement fails, visitors must retain a usable page.

## 5.3 Build once, reuse consistently

Repeated patterns should be implemented as reusable CSS and JavaScript components. Before creating a second implementation of the same behaviour, the existing component should be extended or the design reconsidered.

## 5.4 Mobile first

Layouts and interactions will be designed for narrow screens and touch input first, then enhanced for larger screens.

## 5.5 Accessibility is a requirement

Accessibility is part of design and implementation, not a final compliance exercise.

## 5.6 Stable simplicity

The project will avoid dependencies and tooling that create unnecessary maintenance. The approved core remains:

- HTML5;
- CSS3;
- browser-native JavaScript modules where appropriate;
- JSON;
- Netlify;
- GitHub;
- Cloudinary; and
- Cloudflare.

The project will not use React, Vue, Angular, WordPress, Tailwind, Bootstrap, Node.js or npm unless the Trust formally changes this blueprint.

## 5.7 Privacy and safeguarding by design

The site represents a community field and family events. Photographs, personal details, contact methods, analytics and third-party embeds must be chosen with privacy and safeguarding in mind.

---

# 6. Information architecture

## 6.1 Proposed public navigation

Primary navigation:

1. Home
2. The Field
3. Events
4. Gallery
5. About the Trust
6. News
7. Get Involved
8. Contact

The Events item may open a submenu:

- Feast & Fayre
- Five Mile Run
- Bonfire Night
- Santa Special
- All events

The Field item may lead to one comprehensive page with anchored sections rather than multiple shallow pages.

## 6.2 Footer navigation

The footer should contain:

- address and contact method;
- charity identity and registration details when confirmed;
- quick links;
- accessibility statement;
- privacy and cookie information;
- safeguarding or photography policy where appropriate;
- governance and downloadable documents;
- social media links;
- website status or last reviewed date where useful; and
- copyright statement.

## 6.3 Recommended URL structure

Use short, descriptive, lowercase paths:

```text
/
/field/
/events/
/events/feast-fayre/
/events/five-mile-run/
/events/bonfire-night/
/events/santa-special/
/gallery/
/about/
/news/
/get-involved/
/contact/
/privacy/
/accessibility/
/governance/
/404.html
```

Pretty public URLs are preferred to `.html` URLs. Netlify supports static routing and “pretty URLs”; final routing rules should be controlled through `netlify.toml` or a `_redirects` file.

## 6.4 Page depth

Visitors should generally reach important information within two selections from the homepage. Avoid creating pages with only a paragraph or two when the information would be clearer as a section within a parent page.

## 6.5 Navigation rules

- The current page must be visually and programmatically identifiable.
- The logo should link to the homepage.
- Mobile navigation must be keyboard-operable and close predictably.
- Dropdowns must not depend on hover alone.
- A skip link must be the first focusable item.
- Essential links must not exist only in a carousel.
- Event pages must cross-link to other events and practical field information.

---

# 7. Technical architecture

## 7.1 System overview

```text
Volunteer or maintainer
        |
        +---- edits approved JSON/HTML/CSS/JS in GitHub
        |             |
        |             +---- pull request / review
        |                          |
        |                          +---- Netlify Deploy Preview
        |                                       |
        |                                       +---- merge to main
        |                                                    |
        |                                                    +---- production deploy
        |
        +---- uploads and tags photographs in Cloudinary
                              |
                              +---- Cloudinary CDN and public tagged lists
                                                   |
                                                   +---- website galleries

Visitor ---- Cloudflare-managed domain/DNS ---- Netlify static site
                                               |
                                               +---- Cloudinary image delivery
```

## 7.2 Responsibilities by service

### GitHub

- master copy of code and documentation;
- version history;
- issues, milestones and decisions;
- review workflow;
- recovery of earlier versions; and
- optional automated validation.

### Netlify

- hosting of the static website;
- continuous deployment from GitHub;
- Deploy Previews for proposed changes;
- branch deploys if enabled;
- redirects, custom headers and error routing;
- HTTPS for the deployed site; and
- optional limited server-side functions only if a later approved requirement needs them.

### Cloudinary

- original image storage;
- folder and year organisation;
- tags and metadata;
- responsive transformations;
- automatic format and quality delivery;
- CDN delivery; and
- browser-readable lists of public gallery assets by tag.

### Cloudflare

- registration of `darringtonvillagefield.org.uk`;
- authoritative DNS management;
- DNSSEC when available and enabled;
- account security; and
- possible future DNS or security services.

Cloudflare is not intended to duplicate Netlify's site hosting or Cloudinary's media delivery in version 1.

## 7.3 Static-site boundary

The public website must never contain:

- Cloudinary API secrets;
- GitHub access tokens;
- Netlify personal access tokens;
- private email credentials;
- private personal data;
- passwords; or
- administrative functions that rely on secrecy in client-side JavaScript.

Anything delivered to a browser is public and inspectable.

## 7.4 JavaScript module approach

Use small JavaScript modules or focused scripts. Each module should:

- have one clear purpose;
- initialise only when its matching markup exists;
- fail safely;
- avoid creating global variables;
- use browser-native APIs;
- respect reduced-motion preferences;
- preserve accessible names and states; and
- document any required `data-*` attributes.

## 7.5 Shared header and footer decision

For a static site with no build system, loading the header and footer with JavaScript may appear to remove duplication, but it creates disadvantages:

- navigation may be missing if JavaScript fails;
- content can flash into place;
- active navigation state becomes more complex;
- local viewing through `file://` can fail because of fetch restrictions; and
- search and accessibility testing become less straightforward.

**Version 1 decision:** keep semantic header and footer markup in each HTML page, using a documented canonical template and careful search-and-replace when global changes are required.

This deliberate duplication is preferable to making essential navigation JavaScript-dependent. A future approved build step could introduce safe HTML includes without changing the public technology stack.

---

# 8. Repository and folder structure

## 8.1 Recommended repository

```text
darrington-village-field-website/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── netlify.toml
├── README.md
├── LICENSE
│
├── field/
│   └── index.html
├── events/
│   ├── index.html
│   ├── feast-fayre/
│   │   └── index.html
│   ├── five-mile-run/
│   │   └── index.html
│   ├── bonfire-night/
│   │   └── index.html
│   └── santa-special/
│       └── index.html
├── gallery/
│   └── index.html
├── about/
│   └── index.html
├── news/
│   ├── index.html
│   └── articles/
├── get-involved/
│   └── index.html
├── contact/
│   └── index.html
├── governance/
│   └── index.html
├── privacy/
│   └── index.html
├── accessibility/
│   └── index.html
│
├── assets/
│   ├── css/
│   │   ├── tokens.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── utilities.css
│   │   ├── animations.css
│   │   └── print.css
│   ├── js/
│   │   ├── main.js
│   │   ├── navigation.js
│   │   ├── reveal.js
│   │   ├── carousel.js
│   │   ├── gallery.js
│   │   ├── lightbox.js
│   │   ├── countdown.js
│   │   ├── filters.js
│   │   └── data-loader.js
│   ├── data/
│   │   ├── site.json
│   │   ├── notices.json
│   │   ├── events.json
│   │   ├── news.json
│   │   ├── people.json
│   │   ├── sponsors.json
│   │   └── galleries.json
│   ├── images/
│   │   ├── fallback/
│   │   ├── icons/
│   │   └── social/
│   └── fonts/
│
├── downloads/
│   ├── policies/
│   ├── reports/
│   └── forms/
│
└── docs/
    ├── 00-vision.md
    ├── 01-project-blueprint.md
    ├── 02-architecture.md
    ├── 03-design-system.md
    ├── 04-component-library.md
    ├── 05-content-guide.md
    ├── 06-volunteer-guide.md
    ├── 07-developer-guide.md
    ├── 08-deployment-guide.md
    ├── 09-release-notes.md
    ├── 10-decision-log.md
    └── checklists/
        ├── page-review.md
        ├── event-update.md
        ├── image-upload.md
        └── release.md
```

## 8.2 Folder rules

- Use lowercase names.
- Separate words with hyphens.
- Use `index.html` inside folders to produce clean URLs.
- Keep public downloads separate from internal working documents.
- Store only essential local images in the repository; event photography belongs in Cloudinary.
- Do not commit image originals merely as backups for Cloudinary.
- Do not commit secrets or personal data.
- Keep all long-term project documentation in `/docs`.

## 8.3 Source content folder

The local folder `/Users/laurie/villagefield/website` is the project's working content collection.

It is a private editorial filing cabinet, not automatically part of the public website. It may contain source material such as:

- current Wix text;
- historical notes;
- event information;
- draft copy;
- trustee and committee information;
- policies;
- sponsor details;
- contact information;
- photographs awaiting review; and
- questions requiring confirmation.

Before any item is published:

1. confirm accuracy and ownership;
2. remove unnecessary personal information;
3. rewrite it for the web;
4. obtain any required approval;
5. place it in the appropriate website file or public download folder; and
6. record a review date where the information can become stale.

The source content folder should have its own secure backup. It should not be made public merely for convenience.

---

# 9. Design system

## 9.1 Purpose

The design system will make the site visually coherent and reduce one-off CSS. It defines reusable decisions rather than prescribing identical layouts for every page.

## 9.2 Design tokens

All shared values should be declared as CSS custom properties in `tokens.css`.

Token groups:

- brand colours;
- neutral colours;
- event accent colours;
- typefaces;
- type scale;
- line heights;
- spacing scale;
- widths;
- borders;
- radii;
- shadows;
- animation durations;
- easing curves; and
- stacking layers.

Example structure:

```css
:root {
  --colour-brand-deep: #12382f;
  --colour-brand-leaf: #4f7d46;
  --colour-brand-warm: #d59b45;
  --colour-surface: #fffdf8;
  --colour-text: #1d2925;
  --colour-muted: #65736d;

  --font-heading: "Approved Heading Font", Georgia, serif;
  --font-body: "Approved Body Font", Arial, sans-serif;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  --radius-small: 0.35rem;
  --radius-medium: 0.75rem;
  --radius-large: 1.5rem;

  --duration-fast: 160ms;
  --duration-normal: 320ms;
  --duration-slow: 600ms;
}
```

The example values are placeholders until the existing `index_6.html` and `bonfire.html` are reviewed and their approved palette and typography are extracted.

## 9.3 Colour rules

- Brand colours must be derived from the approved existing visual direction.
- Text and interactive controls must meet required contrast.
- Colour must never be the only way to communicate meaning.
- Each event may have a restrained accent palette while retaining common navigation, typography and component behaviour.
- Santa Special seasonal styling should remain recognisably part of the main site.
- Bonfire particle and ember effects must not reduce text legibility.

## 9.4 Typography

Use no more than:

- one display or heading family;
- one body and interface family; and
- a system fallback stack for each.

Typography roles:

- display;
- heading level 1;
- heading level 2;
- heading level 3;
- body;
- lead paragraph;
- small text;
- caption;
- label; and
- button.

Rules:

- use a fluid but bounded type scale with `clamp()`;
- preserve logical HTML heading order;
- do not choose heading levels for appearance;
- keep body text comfortably readable;
- avoid long centred paragraphs;
- avoid all-capital body copy;
- underline links in running text or make them otherwise unmistakable; and
- limit line length, normally to approximately 60–75 characters for prose.

## 9.5 Spacing and layout

- Use the defined spacing scale.
- Use a shared content width and wide-media width.
- Use CSS Grid for two-dimensional page layouts and Flexbox for simpler alignment.
- Do not use absolute positioning for primary document layout.
- Allow generous whitespace, but do not force excessive scrolling for small amounts of content.
- Use full-bleed photography selectively.
- Alternate visual rhythm without changing the reading order.

## 9.6 Imagery

Photography should show:

- real people and genuine events;
- the field across seasons;
- activity and atmosphere;
- facilities and practical landmarks;
- volunteers and community effort; and
- a mixture of wide establishing images and close human moments.

Avoid:

- generic stock photography;
- repeated use of the same hero photograph;
- unreviewed images of children;
- images with unclear publication permission;
- text baked into images;
- very dark overlays used to compensate for an unsuitable image; and
- image-heavy pages without meaningful alternative text or captions.

## 9.7 Buttons and links

Button styles:

- primary;
- secondary;
- quiet/ghost; and
- destructive only within a future authenticated administration tool.

Rules:

- links navigate;
- buttons perform actions;
- labels describe the result, such as “View Bonfire Night details”;
- avoid vague labels such as “Click here”;
- provide clear hover, focus and active states;
- maintain a comfortable touch target; and
- do not place several competing primary buttons in one section.

## 9.8 Animation philosophy

Approved animation families:

- fade;
- slide;
- gentle scale or image zoom;
- parallax used sparingly;
- counters;
- carousel transitions;
- accordions; and
- restrained seasonal effects.

Animation rules:

- use motion to reveal hierarchy or add atmosphere;
- keep essential content present in the document;
- do not require animation to understand the page;
- avoid scroll hijacking;
- avoid long entrance sequences;
- pause autoplay where appropriate;
- provide manual carousel controls;
- stop non-essential motion when the page is not visible;
- respect `prefers-reduced-motion`; and
- disable or simplify seasonal effects for reduced-motion users.

Sections sliding over one another may be used when:

- content remains in a logical reading order;
- sticky positioning does not trap keyboard or zoomed users;
- the effect works at narrow widths;
- there is no essential overlap at 200% or 400% zoom; and
- a non-sticky fallback remains coherent.

---

# 10. Component library

Every component must have:

- a documented purpose;
- canonical HTML;
- supported variants;
- CSS class names;
- JavaScript requirements, if any;
- accessibility behaviour;
- responsive behaviour;
- content limits; and
- an example.

## 10.1 Global components

### Skip link

Moves keyboard users directly to the main content.

### Site header

Contains:

- logo and Trust name;
- primary navigation;
- mobile menu control;
- optional highlighted next-event action; and
- active-page state.

### Notice bar

For brief, current and important information. It is data-driven and optional.

It must not become a constantly moving ticker that makes reading difficult. If messages rotate, provide pause controls or use a non-autoplay alternative.

### Breadcrumbs

Used on deeper pages such as event and news articles.

### Footer

Common identity, key links, contact routes and legal information.

## 10.2 Content components

### Hero

Variants:

- homepage;
- event;
- standard internal page;
- compact.

Possible content:

- eyebrow;
- heading;
- short description;
- primary and secondary action;
- image;
- event date or status; and
- optional restrained visual effect.

### Section introduction

Provides a consistent heading, lead paragraph and optional action.

### Event card

Contains:

- event name;
- date or seasonal status;
- concise description;
- image;
- action link; and
- accessibility label when context is not clear.

### News card

Contains:

- published date;
- category;
- title;
- summary;
- optional image; and
- article link.

### Feature card

Used for field facilities, community benefits or volunteer opportunities.

### Quick facts

A compact list for event date, time, location, cost, booking, accessibility and contact.

### Call to action

One clear action and a short reason to take it.

### Quote or volunteer story

Uses an authentic attributed quotation only with permission.

### Statistics

May animate once when visible, but the final number must be present and comprehensible without animation.

### Timeline

Displays field and Trust history. Must remain a normal chronological list for screen readers and narrow screens.

### FAQ accordion

Uses native `<details>` and `<summary>` unless a more complex requirement is proven.

### Sponsor strip or grid

Includes meaningful sponsor names and links. Logos require useful alternative text.

## 10.3 Media components

### Responsive image

Uses:

- meaningful `alt`;
- width and height;
- Cloudinary transformations;
- responsive `srcset` or width descriptors;
- `sizes`;
- automatic format and quality where approved;
- eager loading only for critical imagery; and
- lazy loading below the fold.

### Carousel/slideshow

Requirements:

- previous and next controls;
- visible current position;
- pause control if autoplay is used;
- no essential content available only on one slide;
- keyboard support;
- touch support without blocking page scroll;
- stable dimensions;
- reduced-motion behaviour; and
- fallback list or first image if JavaScript fails.

### Gallery grid

Requirements:

- progressive image loading;
- meaningful captions where helpful;
- filters that do not remove the underlying accessible content;
- empty and error states; and
- no duplication of image files.

### Lightbox

Requirements:

- real dialog semantics;
- focus moved into and returned from the dialog;
- Escape closes it;
- previous/next controls are labelled;
- background is inert while open;
- caption and image alternative are exposed; and
- page scroll is restored correctly.

## 10.4 Behaviour components

### Countdown

- reads a valid ISO 8601 date/time from JSON or a `data-*` attribute;
- uses Europe/London event time explicitly;
- provides a plain-language fallback date;
- changes state when the event is near, today or passed;
- never displays a negative countdown; and
- is hidden or replaced with an appropriate message after the event.

### Scroll reveal

- adds enhancement only;
- content begins visible unless JavaScript has initialised successfully;
- reveals once by default;
- respects reduced motion; and
- avoids animating large volumes of text.

### Filter controls

- use buttons, not links, when filtering the current page;
- expose pressed or selected state;
- provide an “All” option;
- retain sensible results if JavaScript fails; and
- announce result-count changes when useful.

---

# 11. Cloudinary media strategy

## 11.1 Principle

Cloudinary is the media library and delivery service. The website gallery is a view of that library, not a second copy of it.

Photographs should not be duplicated into a separate `gallery` folder. Existing event and field folders remain the primary organisational structure.

## 11.2 Folder structure

The current structure should be normalised to lowercase names:

```text
home/
├── homepage/
├── bonfire-night/
│   ├── 2024/
│   ├── 2025/
│   └── 2026/
├── feast-fayre/
│   ├── 2024/
│   ├── 2025/
│   └── 2026/
├── five-mile-run/
│   ├── 2024/
│   ├── 2025/
│   └── 2026/
├── santa-special/
│   ├── 2025/
│   └── 2026/
├── field/
│   ├── open-space/
│   ├── playground/
│   └── facilities/
├── volunteers/
├── history/
├── logos/
├── sponsors/
└── committee/
```

If `Home` is the Cloudinary root asset folder required by the existing account, retain it. Website configuration should store the exact Cloudinary identifiers rather than assuming display labels match folders.

The previously mentioned `file-mile-run` typo must be corrected to `five-mile-run` if it still exists.

## 11.3 Folders versus tags

Folders answer:

> Where is the asset managed?

Tags answer:

> In which website collections should the asset appear?

This distinction is essential because a public static browser must not use Cloudinary's authenticated Admin API. Cloudinary's client-side asset list feature can safely return a public JSON list of assets with a particular tag.

Example tags:

```text
gallery-bonfire-night
gallery-bonfire-night-2025
gallery-feast-fayre
gallery-five-mile-run
gallery-santa-special
gallery-field
gallery-playground
homepage-hero
homepage-featured
event-card-bonfire-night
archive
do-not-publish
```

One image may have several tags without being duplicated.

## 11.4 Public gallery lists

The approved initial approach is Cloudinary client-side lists by tag:

```text
https://res.cloudinary.com/<cloud-name>/image/list/<tag>.json
```

Important:

- Cloudinary's `list` delivery type must be enabled in the Cloudinary security settings.
- It returns public asset metadata and should only be used for material suitable for publication.
- Cloudinary documents a limit of up to 1,000 resources for a client-side list.
- Responses are cached briefly, so a new tag may not appear instantly.
- No API secret may be used in browser JavaScript.
- If the library later exceeds this approach or requires private moderation, move to an approved server-side manifest-generation process.

## 11.5 Upload and publishing workflow

1. Select photographs suitable for public use.
2. Confirm permission and safeguarding requirements.
3. Remove images that disclose inappropriate personal information.
4. Upload to the correct event/field/year folder.
5. Use a meaningful public ID or filename where practical.
6. Add the appropriate gallery and display tags.
7. Add metadata:
   - alternative text;
   - caption;
   - event;
   - year;
   - photographer/credit if required;
   - publication status; and
   - focal point where available.
8. Check the website collection after the list cache has refreshed.
9. Confirm crops on mobile and desktop.
10. Remove the public display tag to withdraw an image from a gallery.

Uploading alone should not automatically publish an image. Applying an approved public tag is the intentional publication action. This protects against accidental display of unreviewed photographs.

## 11.6 Image metadata

Preferred metadata fields:

| Field | Purpose |
|---|---|
| `alt` | Concise alternative text describing relevant visual content |
| `caption` | Optional visible context |
| `event` | Normalised event name |
| `year` | Four-digit event year |
| `credit` | Photographer or source if attribution is required |
| `people_permission` | Internal review indicator, not necessarily public |
| `featured` | Whether suitable for prominent display |
| `focal_point` | Important region for responsive cropping |

Alternative text should not start with “Image of” or repeat nearby text unnecessarily. Decorative images should use empty alternative text.

## 11.7 Transformations

Define a small set of named transformation patterns:

- hero landscape;
- event card;
- gallery thumbnail;
- gallery full view;
- portrait;
- sponsor logo;
- open graph/social share image; and
- low-resolution placeholder if used.

Typical delivery concerns:

- crop appropriate to component;
- automatic quality;
- automatic modern format;
- maximum sensible dimensions;
- device-responsive widths; and
- focal-point-aware cropping.

## 11.8 Safeguarding and image rights

Before publishing photographs:

- follow the Trust's approved photography and safeguarding policy;
- pay particular attention to identifiable children;
- do not publish names of children with images unless expressly approved;
- do not infer consent merely because an image was supplied;
- provide a contact route for image removal requests;
- retain evidence of permissions where required;
- avoid images that reveal unnecessary personal or security information; and
- record attribution and licence terms for third-party images.

This blueprint is not legal advice. The Trust should ensure its policies align with current UK data protection and safeguarding requirements.

## 11.9 Backup

Cloudinary should not be treated as the only record of irreplaceable historical material. The Trust should maintain an independent, access-controlled archive of original photographs and permission records.

---

# 12. JSON content model

## 12.1 General principles

JSON is suitable for short, structured and frequently updated data. It is not a substitute for every HTML page.

Use JSON for:

- events;
- notices;
- news indexes;
- people;
- sponsors;
- gallery definitions;
- contact and site-wide settings; and
- dates used by countdowns.

Keep substantial page copy in semantic HTML unless a later editing system justifies moving it.

Rules:

- UTF-8;
- two-space indentation;
- lowercase camelCase property names;
- ISO 8601 dates;
- explicit `Europe/London` interpretation for local events;
- stable IDs using lowercase hyphenated names;
- no HTML inside data fields unless specifically documented;
- no comments, because standard JSON does not support them;
- required schema version where data may evolve;
- validation before publication; and
- safe fallback content in HTML for critical information.

## 12.2 `site.json`

```json
{
  "schemaVersion": 1,
  "siteName": "Darrington Village Field",
  "organisationName": "Darrington Village Field Trust",
  "canonicalBaseUrl": "https://darringtonvillagefield.org.uk",
  "timezone": "Europe/London",
  "contact": {
    "email": "",
    "phone": "",
    "address": {
      "line1": "",
      "locality": "Darrington",
      "county": "West Yorkshire",
      "postcode": "",
      "country": "GB"
    }
  },
  "charity": {
    "registrationNumber": ""
  },
  "social": []
}
```

## 12.3 `notices.json`

```json
{
  "schemaVersion": 1,
  "notices": [
    {
      "id": "example-notice",
      "status": "draft",
      "priority": "normal",
      "message": "Example notice",
      "linkText": "",
      "linkUrl": "",
      "startsAt": "2026-07-16T00:00:00+01:00",
      "endsAt": "2026-07-31T23:59:59+01:00"
    }
  ]
}
```

Status values:

- `draft`;
- `published`; and
- `archived`.

Priority values:

- `normal`;
- `important`; and
- `urgent`.

“Urgent” must not be used as decoration.

## 12.4 `events.json`

```json
{
  "schemaVersion": 1,
  "events": [
    {
      "id": "bonfire-night-2026",
      "slug": "bonfire-night",
      "name": "Bonfire Night",
      "status": "scheduled",
      "start": "2026-11-07T17:00:00+00:00",
      "end": "2026-11-07T21:00:00+00:00",
      "timezone": "Europe/London",
      "locationName": "Darrington Village Field",
      "summary": "",
      "booking": {
        "required": false,
        "status": "not-required",
        "url": ""
      },
      "price": {
        "display": ""
      },
      "pageUrl": "/events/bonfire-night/",
      "imagePublicId": "",
      "featured": true,
      "lastReviewed": "2026-07-16"
    }
  ]
}
```

Event status values:

- `draft`;
- `date-pending`;
- `scheduled`;
- `cancelled`;
- `postponed`;
- `completed`; and
- `archived`.

The interface must display cancelled or postponed events clearly and must not rely on colour alone.

## 12.5 `news.json`

```json
{
  "schemaVersion": 1,
  "articles": [
    {
      "id": "example-news-item",
      "status": "draft",
      "title": "Example news title",
      "summary": "A concise summary.",
      "publishedDate": "2026-07-16",
      "updatedDate": null,
      "category": "field",
      "url": "/news/articles/example-news-item/",
      "imagePublicId": "",
      "featured": false
    }
  ]
}
```

Each substantial article should remain an HTML page for robust indexing and sharing. The JSON file supplies listing-card data.

## 12.6 `people.json`

```json
{
  "schemaVersion": 1,
  "people": [
    {
      "id": "example-person",
      "status": "draft",
      "name": "",
      "role": "",
      "group": "trustee",
      "bio": "",
      "imagePublicId": "",
      "displayOrder": 10
    }
  ]
}
```

Only publish personal information that is necessary, approved and kept current.

## 12.7 `sponsors.json`

```json
{
  "schemaVersion": 1,
  "sponsors": [
    {
      "id": "example-sponsor",
      "status": "draft",
      "name": "",
      "websiteUrl": "",
      "logoPublicId": "",
      "level": "supporter",
      "displayOrder": 10,
      "startsOn": null,
      "endsOn": null
    }
  ]
}
```

## 12.8 `galleries.json`

```json
{
  "schemaVersion": 1,
  "cloudName": "",
  "galleries": [
    {
      "id": "bonfire-night",
      "title": "Bonfire Night",
      "tag": "gallery-bonfire-night",
      "years": [
        {
          "year": 2025,
          "tag": "gallery-bonfire-night-2025"
        }
      ],
      "sort": "newest-first",
      "pageSize": 24,
      "enabled": true
    }
  ]
}
```

## 12.9 Data-loading failure

When JSON cannot be loaded:

- critical event date and location must remain available in HTML;
- the page should show a calm, useful fallback rather than a technical error;
- galleries should retain a fallback image or message;
- errors may be logged to the console for maintainers;
- one failed component must not prevent others from initialising; and
- no infinite loading indicator is permitted.

---

# 13. Page specifications

## 13.1 Home

### Purpose

Inspire a visit, expose the next important activity and introduce the field and Trust.

### Required sections

1. Header and primary navigation.
2. Strong hero with a concise proposition.
3. Current notice when relevant.
4. Next or featured events.
5. “Discover the field” overview.
6. Seasonal or current photography.
7. Short introduction to the Village Field Trust.
8. Volunteer or support call to action.
9. Latest news.
10. Practical location prompt.
11. Footer.

### Design notes

- Do not overload the hero with several messages.
- Event cards should be current automatically from `events.json`.
- Use animation to create rhythm, not to delay content.
- The homepage must still make sense during quieter periods.

## 13.2 Events index

### Purpose

Provide a single overview of recurring and forthcoming events.

### Required sections

- next event;
- annual events;
- dates pending;
- previous event galleries;
- volunteering at events;
- event accessibility and general location link; and
- cancellation/update information.

## 13.3 Shared event-page template

Every major event page should use a recognisable structure:

1. Event hero.
2. Status and quick facts.
3. Primary action: tickets, booking or practical details.
4. What to expect.
5. Why the event matters.
6. Programme or highlights.
7. Practical information.
8. Accessibility.
9. FAQ.
10. Gallery.
11. Sponsors/supporters.
12. Volunteer or support invitation.
13. Related events.

Essential date, time, location, cost and booking information must be visible without waiting for a carousel or opening an accordion.

## 13.4 Feast & Fayre

Distinctive content may include:

- arena or activity programme;
- stalls and entertainment;
- food and drink;
- family activities;
- admission details;
- trader or stallholder information;
- sponsors;
- volunteer roles; and
- annual galleries.

## 13.5 Five Mile Run

Distinctive content may include:

- date and entry;
- route summary;
- eligibility and age requirements;
- registration and collection arrangements;
- start and finish information;
- parking;
- safety;
- results or archive links;
- volunteer marshals; and
- annual galleries.

All sporting claims and event rules must be confirmed by organisers before publication.

## 13.6 Bonfire Night

Distinctive content may include:

- opening time;
- bonfire lighting and fireworks times;
- admission/ticket details;
- entrances and parking;
- safety rules;
- food and drink;
- weather/cancellation process;
- pets guidance;
- accessibility;
- sponsors; and
- annual galleries.

Atmospheric embers or glow may be used, but not in a way that resembles flashing, obstructs text or ignores reduced-motion settings.

## 13.7 Santa Special

Distinctive content may include:

- date and booking arrangements;
- what children and families can expect;
- Santa's sleigh;
- gifts or activities;
- refreshments;
- arrival process and waiting arrangements;
- accessibility;
- photography information;
- weather arrangements;
- volunteer support;
- countdown during the appropriate period; and
- galleries where suitable photographs and permissions exist.

Snow effects must be decorative, low-impact and disabled for reduced-motion users.

## 13.8 The Field

### Purpose

Present the field as a year-round community space.

### Required sections

- open space;
- playground;
- exercise or sports facilities;
- seating;
- toilets when available;
- entrances;
- parking;
- accessibility;
- defibrillator or safety information where confirmed;
- dogs and visitor expectations;
- care and maintenance;
- map;
- seasonal gallery; and
- reporting a problem.

Do not publish security-sensitive or unverified safety information.

## 13.9 Gallery

### Purpose

Provide a single searchable or filterable view of photographs already organised in Cloudinary.

### Filters

- all;
- event or subject;
- year;
- optional season.

### Rules

- no duplicate media folder;
- load by approved public tags;
- deep-linking to a filter is desirable but not required for the first release;
- preserve useful captions;
- provide empty states for years without approved images;
- do not present “no photos” as an error; and
- provide a route to request removal of an image.

## 13.10 About the Trust

Required content:

- purpose of the Village Field Trust;
- concise history;
- how the Trust works;
- trustees/committee where approved;
- community impact;
- charity details;
- governance link;
- contact route; and
- volunteer invitation.

## 13.11 History

History may form part of the About page initially. If the material becomes substantial, it may become its own page.

Use:

- chronological narrative;
- timeline;
- archival photographs;
- clearly attributed sources;
- distinctions between confirmed facts and recollections; and
- invitations for residents to contribute material through a moderated process.

## 13.12 News

The news index should:

- show current items first;
- use human-readable dates;
- distinguish updates from permanent information;
- archive rather than silently delete historically valuable items; and
- avoid publishing a news item when an existing permanent page should simply be corrected.

News articles should include:

- title;
- published and updated date;
- concise introduction;
- article body;
- relevant image;
- related link;
- share metadata; and
- back link to the news index.

## 13.13 Get involved

Include:

- volunteer opportunities;
- event-specific roles;
- practical expectations;
- how to express interest;
- sponsorship;
- donations if approved;
- other forms of support; and
- safeguarding or role requirements where relevant.

## 13.14 Contact

Include only approved contact details.

The first release may use a clear email link rather than a contact form. If a form is introduced:

- collect the minimum information;
- state how data will be used;
- protect against spam;
- provide success and error states;
- ensure submissions reach an actively monitored mailbox; and
- update the privacy notice.

## 13.15 Governance

Provide:

- charity identification;
- relevant governing information;
- annual reports or accounts where the Trust chooses to publish them;
- policies;
- contact route for formal enquiries; and
- document dates and file sizes.

PDFs should be accessible where practicable. Important current information should not exist only inside a PDF.

## 13.16 Privacy

Explain:

- who is responsible for the site;
- what personal data is collected;
- why it is collected;
- third-party services;
- analytics and cookies;
- contact submissions;
- image removal requests;
- retention; and
- how to exercise data rights.

The final notice should be reviewed against current UK requirements.

## 13.17 Accessibility statement

Include:

- commitment;
- known limitations;
- compatibility and testing approach;
- contact method for reporting difficulty;
- alternative-format requests;
- review date; and
- escalation information appropriate to the organisation.

## 13.18 404 page

The 404 page should:

- use the normal site identity;
- explain that the page could not be found;
- link to Home, Events, Field and Contact;
- avoid blaming the visitor; and
- return the correct 404 response.

---

# 14. Accessibility standard

## 14.1 Target

The project target is WCAG 2.2 Level AA, applied pragmatically across content, design and code.

Meeting the target requires testing; it cannot be guaranteed merely by following this blueprint.

## 14.2 Semantic structure

- one clear `<main>` region;
- proper `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` and `<footer>` use;
- a logical heading hierarchy;
- lists marked up as lists;
- tables used only for tabular data;
- controls built from native elements where possible;
- language declared as British English, normally `lang="en-GB"`; and
- unique, descriptive page titles.

## 14.3 Keyboard access

All functionality must work with a keyboard:

- visible focus;
- logical focus order;
- no keyboard traps;
- Escape closes modal interfaces;
- menus and accordions expose state;
- skip link works;
- carousel controls are reachable; and
- sticky elements do not obscure focused controls.

## 14.4 Images and media

- informative images need useful alternative text;
- decorative images use empty `alt`;
- complex maps require a text alternative;
- captions are used when they add context;
- autoplaying video requires controls and must be muted where appropriate;
- audio must never start automatically; and
- any meaningful video should have captions or a transcript as appropriate.

## 14.5 Forms

- every input has a visible label;
- required fields are identified in text;
- instructions precede the input;
- errors are specific and associated with fields;
- submitted data is not lost after a correctable error;
- success is clearly announced; and
- autocomplete attributes are used appropriately.

## 14.6 Colour and contrast

- normal and large text contrast must satisfy the target standard;
- non-text controls and focus indicators require sufficient contrast;
- information must not rely on colour alone;
- text over images must remain readable across responsive crops; and
- seasonal palettes require the same checks as the main palette.

## 14.7 Motion

- honour `prefers-reduced-motion`;
- avoid flashing;
- avoid large unexpected movement;
- provide a pause mechanism for relevant moving or auto-updating content;
- do not animate focus unexpectedly; and
- ensure animated counters and countdowns remain understandable to assistive technology.

## 14.8 Responsive and zoom testing

Test at:

- narrow mobile widths;
- landscape mobile;
- tablet;
- desktop;
- 200% browser zoom;
- 400% zoom/reflow where applicable;
- increased text spacing; and
- reduced motion.

## 14.9 Test process

Each major template should be checked with:

- keyboard only;
- current Chrome, Firefox, Safari and Edge where available;
- iPhone and Android-sized viewports;
- VoiceOver on macOS or iOS;
- at least one additional screen-reader/browser combination when practical;
- automated accessibility testing;
- manual heading, landmark, label and alternative-text review; and
- real-user feedback when possible.

Automated tools find only a proportion of accessibility problems and do not replace manual testing.

---

# 15. Search engine optimisation and sharing

## 15.1 SEO principles

- write for people first;
- use one descriptive page title and primary heading;
- give each page a unique meta description;
- use clean canonical URLs;
- maintain meaningful internal links;
- use visible text for essential information;
- avoid publishing duplicate or near-empty pages;
- keep event information accurate;
- use descriptive image alternative text;
- include a sitemap and robots file;
- monitor Search Console after launch; and
- preserve or redirect useful Wix URLs where practical.

## 15.2 Page metadata

Every page should define:

- `<title>`;
- meta description;
- canonical URL;
- Open Graph title;
- Open Graph description;
- Open Graph image;
- Open Graph URL;
- content type;
- social image dimensions where useful; and
- appropriate structured data.

## 15.3 Structured data

Use JSON-LD where it accurately reflects visible page content.

Likely types:

- `Organization` or appropriate charitable organisation type;
- `WebSite`;
- `BreadcrumbList`;
- `Event`;
- `NewsArticle` or `Article`; and
- `Place` where supported and accurate.

Event structured data must:

- use the actual event date and status;
- match visible content;
- include a specific event page;
- use correct location details;
- be updated for cancellation or postponement; and
- be tested using Google's Rich Results Test.

Structured data can make a page eligible for enhanced search presentation but does not guarantee it.

## 15.4 Sitemap

Maintain `sitemap.xml` at the site root with:

- canonical absolute URLs;
- only indexable public pages;
- accurate last-modified dates where maintained reliably; and
- no preview, draft or utility URLs.

Reference it in `robots.txt` and submit it in Google Search Console after the domain launches.

## 15.5 Redirect plan

Before replacing the Wix site:

1. list all useful existing Wix URLs;
2. map each to the closest new page;
3. create permanent redirects where technically possible;
4. update external profiles and social links;
5. monitor 404s after launch; and
6. retain redirects for the long term.

Because the existing Wix URL is on a `wixsite.com` host, control over redirects from that exact host may be limited. The old site should provide a prominent link to the new domain for an agreed transition period if direct redirects are unavailable.

## 15.6 Local SEO

- keep organisation name, address and contact details consistent;
- link to an accurate map destination;
- use the village and region naturally where relevant;
- keep social and directory profiles current;
- provide clear event dates and location; and
- avoid keyword stuffing.

---

# 16. Performance and resilience

## 16.1 Performance budget

At implementation, establish and document a measurable budget for:

- total initial page weight;
- JavaScript;
- CSS;
- hero image size;
- number of webfont files;
- third-party requests; and
- largest image dimensions.

The exact numbers should be tested against the final design rather than guessed in this blueprint.

## 16.2 Image performance

- deliver appropriately sized Cloudinary transformations;
- include intrinsic width and height;
- use responsive sources;
- prefer modern formats through automatic negotiation;
- compress sensibly;
- preload only the true primary hero image where testing supports it;
- lazy-load below-the-fold images;
- avoid loading full gallery originals as thumbnails; and
- limit the first gallery batch.

## 16.3 CSS and JavaScript performance

- keep CSS modular but avoid excessive separate requests if they prove costly;
- defer non-critical JavaScript;
- use ES modules only where browser support and fallback are acceptable;
- initialise components on demand;
- avoid heavy scroll listeners;
- prefer Intersection Observer for visibility work;
- remove unused experimental code;
- avoid large third-party libraries; and
- do not add a dependency for behaviour that can be implemented clearly with native browser features.

## 16.4 Fonts

- use system fonts or self-host approved webfonts;
- use WOFF2 where possible;
- limit families, weights and character sets;
- define sensible fallbacks;
- use an appropriate `font-display` policy; and
- check layout shift and legibility during font loading.

## 16.5 Failure behaviour

The site should remain useful if:

- JavaScript is disabled;
- a JSON file fails to load;
- Cloudinary is temporarily unavailable;
- an image is missing;
- a visitor is on a slow connection; or
- an event has no approved photographs.

Fallbacks should be designed, not left to browser error icons.

---

# 17. Security, privacy and governance

## 17.1 Repository security

- enable multi-factor authentication for privileged accounts;
- use the GitHub organisation rather than personal ownership where practical;
- give the minimum necessary access;
- protect the production branch;
- require review before merging when the team permits;
- enable secret scanning and push protection where available;
- never store secrets in repository files;
- review former volunteers' access promptly; and
- keep a documented recovery owner.

## 17.2 Service accounts

For GitHub, Netlify, Cloudinary and Cloudflare:

- use Trust-controlled email addresses where possible;
- enable multi-factor authentication;
- maintain at least two authorised recovery contacts;
- store recovery codes securely;
- record account ownership without publishing credentials;
- review access at least annually; and
- remove access promptly when roles change.

## 17.3 Security headers

Use Netlify configuration to introduce and test appropriate headers, potentially including:

- `Content-Security-Policy`;
- `Referrer-Policy`;
- `X-Content-Type-Options`;
- `Permissions-Policy`; and
- frame-embedding protection through CSP.

Do not copy a restrictive policy blindly. Build it from the site's actual resources, test it in report-only mode where appropriate, and avoid breaking Cloudinary media, maps or other approved services.

## 17.4 Third-party embeds

Avoid embedding:

- social media timelines;
- advertising trackers;
- unnecessary widgets;
- auto-playing external video; or
- unreviewed map and analytics services.

Prefer a normal link or privacy-conscious preview where an embed adds little value.

## 17.5 Personal data

- collect the minimum;
- publish only approved role-related details;
- keep source documents private;
- define retention for contact messages;
- do not use public JSON for private data;
- review old committee information promptly; and
- document all third-party processors used by the website.

## 17.6 Domain security

- enable registrar lock where available;
- enable DNSSEC;
- protect Cloudflare accounts with multi-factor authentication;
- maintain accurate recovery contacts;
- document DNS records; and
- avoid making unreviewed DNS changes immediately before major events.

---

# 18. Coding standards

## 18.1 HTML

- use HTML5 semantic elements;
- declare `<!doctype html>` and `lang="en-GB"`;
- use lowercase element and attribute names;
- use double quotes for attributes;
- indent consistently with two spaces;
- use one unique `id` per document;
- maintain logical headings;
- use native elements before ARIA;
- include useful link text;
- use `<button>` for actions;
- define image width, height and alternative text;
- avoid inline styles and event handlers;
- avoid empty links;
- validate representative pages; and
- comment only where intent is not obvious.

## 18.2 CSS

- use custom properties for shared tokens;
- use mobile-first media queries;
- prefer class selectors;
- avoid IDs for styling;
- keep specificity low;
- avoid `!important` except documented utility or accessibility cases;
- use logical properties where practical;
- use modern layout rather than floats;
- use component and state naming consistently;
- keep animation definitions in the approved animation layer; and
- remove obsolete declarations during refactoring.

Suggested class conventions:

```text
.site-header
.event-card
.event-card__title
.event-card--featured
.is-open
.has-error
.u-visually-hidden
```

This is a pragmatic component convention, not a requirement to implement full formal BEM.

## 18.3 JavaScript

- use strict, readable modern JavaScript supported by the target browsers;
- prefer `const`, then `let`; never use `var`;
- use descriptive names;
- use functions with focused responsibilities;
- handle fetch failures;
- check elements exist before binding;
- avoid global state;
- avoid inline JavaScript;
- use event delegation where useful;
- update ARIA state when interface state changes;
- escape or safely assign untrusted text using `textContent`;
- do not insert untrusted JSON through `innerHTML`;
- avoid storing secrets;
- document public module interfaces; and
- do not create required content only in JavaScript.

## 18.4 JSON

- valid strict JSON;
- two-space indentation;
- consistent property order within a schema;
- ISO dates;
- schema version;
- stable IDs;
- no trailing commas;
- no comments;
- no secrets;
- no unpublished personal information; and
- validation before merge.

## 18.5 File naming

- lowercase;
- hyphen-separated;
- descriptive;
- avoid version suffixes such as `index_6.html` in production;
- use Git history rather than filename copies for versions; and
- use year folders only where year is part of the content organisation.

## 18.6 Browser support

Support the current and recent major versions of:

- Chrome;
- Edge;
- Firefox;
- Safari on macOS; and
- Safari and Chrome on common mobile devices.

The site should degrade gracefully on older browsers rather than shipping extensive compatibility code for obsolete versions.

## 18.7 Comments and documentation

Explain:

- why an unusual decision exists;
- component configuration;
- data schema requirements;
- third-party limitations;
- accessibility behaviour; and
- steps that a future maintainer could otherwise easily break.

Do not comment every obvious line.

---

# 19. GitHub workflow

## 19.1 Branches

- `main`: production source;
- short-lived branches: one coherent change each.

Suggested branch names:

```text
feature/santa-page
content/bonfire-2026
fix/mobile-navigation
docs/update-volunteer-guide
```

## 19.2 Change process

1. Create or select an issue.
2. Create a short-lived branch.
3. Make the change.
4. Check locally.
5. Commit with a clear message.
6. Open a pull request.
7. Review the Netlify Deploy Preview.
8. Complete the release checklist.
9. Obtain approval where required.
10. Merge into `main`.
11. Verify the production site.
12. Close the issue and update documentation.

## 19.3 Commit messages

Use concise imperative messages:

```text
Add Santa Special page structure
Update Bonfire Night event date
Fix gallery focus return
Document Cloudinary tagging workflow
```

## 19.4 Issues and milestones

Suggested labels:

- `accessibility`;
- `bug`;
- `content`;
- `design`;
- `documentation`;
- `enhancement`;
- `event`;
- `good-first-task`;
- `maintenance`;
- `performance`;
- `security`; and
- `seo`.

Suggested milestones:

1. Foundation and content audit
2. Design system
3. Core components
4. Core pages
5. Events
6. Galleries and administration
7. Accessibility and launch
8. Post-launch improvements

## 19.5 Definition of done

A change is done when:

- it meets the agreed requirement;
- mobile and desktop layouts have been checked;
- keyboard operation has been checked;
- relevant accessibility behaviour has been checked;
- reduced-motion behaviour has been checked where applicable;
- links, images and data load correctly;
- no secrets or private information are included;
- a Deploy Preview has been reviewed;
- documentation is updated;
- content approval has been obtained; and
- production has been verified after merge.

---

# 20. Netlify deployment

## 20.1 Deployment model

Connect the GitHub repository to Netlify using continuous deployment.

Recommended configuration:

- production branch: `main`;
- publish directory: repository root, unless the final repository layout changes;
- build command: none for the initial pure static site;
- automatic Deploy Previews for pull requests;
- branch deploys only if they add value;
- production deployment triggered by merge to `main`; and
- Git-based production deploys enforced when account features and roles allow.

## 20.2 `netlify.toml`

Use `netlify.toml` as the documented source for:

- publish settings;
- redirects;
- custom headers;
- cache policy where appropriate;
- deploy context differences; and
- future function settings if formally approved.

Example outline:

```toml
[build]
  publish = "."

[[redirects]]
  from = "/bonfire.html"
  to = "/events/bonfire-night/"
  status = 301

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

This is an outline, not final production configuration. Security and caching headers must be tested against the implemented site.

## 20.3 Environments

- local: maintainer's computer;
- preview: Netlify Deploy Preview;
- production: public domain.

Draft content must not be placed in production JSON with an assumption that CSS or JavaScript will always hide it. Remove it from public output or ensure the renderer explicitly excludes drafts.

## 20.4 Rollback

If a production problem is discovered:

1. assess severity;
2. use Netlify's previous deploy restoration where appropriate;
3. revert or fix the source in GitHub;
4. deploy and verify;
5. record the cause;
6. add a preventive check if useful; and
7. update release notes for significant incidents.

The repository and live site must not be allowed to remain out of sync.

---

# 21. Cloudflare domain and DNS

## 21.1 Domain

Register and maintain:

```text
darringtonvillagefield.org.uk
```

Decide whether the canonical public hostname is:

```text
https://darringtonvillagefield.org.uk
```

or:

```text
https://www.darringtonvillagefield.org.uk
```

Recommendation: use the shorter apex domain as canonical and permanently redirect `www` to it, unless an operational reason favours `www`.

## 21.2 DNS process

1. Register the domain in the Trust's name/account.
2. Protect the Cloudflare account.
3. Add the domain to the Netlify site.
4. create the DNS records instructed by Netlify;
5. wait for validation and TLS issuance;
6. test apex and `www`;
7. enable the canonical redirect;
8. enable DNSSEC;
9. document records and ownership; and
10. submit the production domain to search and external profiles.

Netlify's current domain instructions must be followed at the time of setup because target records can change.

## 21.3 Email warning

Website DNS work must not accidentally disrupt any email service on the domain. Before changing nameservers or DNS:

- record all required MX, SPF, DKIM and DMARC records;
- confirm whether email is already in use;
- copy and verify required records; and
- test mail after the change.

---

# 22. Testing and quality assurance

## 22.1 Page review

Check:

- page purpose is immediately clear;
- content is accurate and current;
- primary action is obvious;
- headings make sense out of context;
- links are descriptive;
- image permission and metadata are complete;
- empty and error states work;
- no placeholder text remains;
- mobile layout works;
- keyboard access works;
- focus is visible;
- reduced motion works;
- title and metadata are unique; and
- structured data matches visible content.

## 22.2 Technical checks

- HTML validation on templates;
- broken-link checking;
- console errors;
- missing files;
- JSON validity;
- 404 response;
- redirects;
- security headers;
- mixed content;
- responsive images;
- performance tests;
- accessibility scans;
- canonical URLs;
- sitemap and robots file; and
- social share previews.

## 22.3 Content checks

Event information requires a named organiser or trustee to confirm:

- date;
- opening/start time;
- end time if stated;
- location and entrance;
- ticket or booking status;
- price;
- parking;
- accessibility;
- contact;
- cancellation process; and
- final review date.

## 22.4 Launch acceptance

Before public launch:

- all priority pages complete;
- old-to-new URL plan complete;
- domain and HTTPS working;
- contact route monitored;
- privacy notice approved;
- accessibility statement published;
- event dates verified;
- image permissions reviewed;
- no test or draft content public;
- backup and rollback understood;
- at least two people know how to publish an urgent correction; and
- production smoke test passed.

---

# 23. Volunteer administration guide

## 23.1 Roles

### Content editor

May update approved wording, notices, event data and news through GitHub's web interface or a documented local workflow.

### Media editor

May upload, organise, tag and withdraw public images in Cloudinary.

### Reviewer

Checks accuracy, tone, privacy, safeguarding and presentation.

### Publisher

Approves or merges changes to `main`.

### Technical maintainer

Maintains templates, styles, scripts, integrations, redirects and security configuration.

One person may hold several roles, but high-impact changes should be reviewed by another person where practical.

## 23.2 Updating an event

1. Obtain confirmed information from the event organiser.
2. Update the event entry in `assets/data/events.json`.
3. Update permanent event-page copy if arrangements have changed.
4. Update FAQs and booking links.
5. Check the event timezone and date format.
6. Check Event structured data.
7. Preview the change.
8. Ask the event owner to approve it.
9. Merge and verify production.
10. Set a reminder to update the page after the event.

## 23.3 Adding news

1. Decide whether the information belongs on an existing permanent page.
2. Draft a short, descriptive title.
3. Write the article in plain English.
4. Confirm facts and permissions.
5. Create the HTML article.
6. Add its listing entry to `news.json`.
7. Add an approved image if useful.
8. Preview mobile and desktop.
9. Review and publish.
10. Archive or update it when it becomes stale.

## 23.4 Publishing photographs

1. Confirm publication is appropriate.
2. Upload to the correct Cloudinary folder and year.
3. Add alternative text and optional caption.
4. Apply the required public gallery tag.
5. Apply the year tag.
6. Apply any featured-use tag only after checking crops.
7. Wait briefly for the public list cache to refresh.
8. Check the gallery and lightbox.
9. Remove the public tag immediately if a photograph should be withdrawn.

## 23.5 Adding a sponsor

1. Confirm the agreement and display period.
2. Obtain an approved logo and website URL.
3. Upload the logo to `sponsors`.
4. Add alternative text using the sponsor's name.
5. Add the entry to `sponsors.json`.
6. Set start and end dates if relevant.
7. Check monochrome, transparent and small-size display.
8. Obtain approval and publish.
9. Remove or archive the sponsor when the agreement ends.

## 23.6 Urgent correction

For incorrect date, cancellation or safety information:

1. confirm the correction with an authorised person;
2. update the permanent event information;
3. add a prominent time-limited notice if needed;
4. publish through the shortest safe reviewed route;
5. verify production on mobile;
6. update social channels separately;
7. record who approved the change; and
8. remove the urgent notice when no longer needed.

## 23.7 What volunteers must never do

- paste credentials into repository files;
- expose a Cloudinary API secret in JavaScript;
- publish unreviewed images of children;
- copy text or images without permission;
- rename large groups of Cloudinary assets without testing;
- edit production directly without preserving a reviewed source change;
- use colour or animation as the only way to show an urgent message;
- upload enormous originals and assume every component will optimise them automatically;
- delete historical material without an archive decision; or
- publish personal contact details without approval.

---

# 24. Maintenance plan

## 24.1 Before each event

Review:

- date and status;
- booking and ticket links;
- prices;
- practical details;
- accessibility;
- parking and entrances;
- sponsors;
- volunteer information;
- FAQs;
- structured data;
- social share image; and
- contact ownership.

## 24.2 After each event

- remove or revise countdown;
- mark event completed;
- update booking language;
- publish a short outcome or thank-you if appropriate;
- upload and tag approved photographs;
- preserve useful practical content for next year;
- record lessons for the following event; and
- archive time-sensitive notices.

## 24.3 Monthly

- check homepage notices;
- check upcoming events;
- review contact details;
- check for broken links;
- review recent Cloudinary uploads and tags;
- inspect Netlify deploy failures;
- review search and visitor feedback; and
- remove expired sponsor or campaign content.

## 24.4 Quarterly

- run accessibility and performance checks;
- inspect the website on current phones and browsers;
- review 404s and redirects;
- review service access;
- check backup arrangements;
- update software-independent documentation; and
- test the volunteer instructions with someone other than their author.

## 24.5 Annually

- review the blueprint;
- confirm the vision and audience priorities;
- confirm charity and trustee information;
- review privacy and accessibility statements;
- review analytics and cookies;
- renew the domain;
- review Cloudinary and Netlify usage and plan limits;
- review Cloudflare DNS and recovery;
- audit repository access;
- test restoration and rollback;
- archive the previous event year; and
- update the roadmap.

## 24.6 Content ownership register

Maintain a small internal register:

| Content | Owner | Reviewer | Review frequency |
|---|---|---|---|
| Event dates | Event organiser | Trustee/publisher | Before each event |
| Field facilities | Field maintenance lead | Trustee | Quarterly |
| Trustees and committee | Secretary | Chair | On every change |
| Sponsors | Sponsorship lead | Treasurer/publisher | Per agreement |
| Privacy | Data protection lead | Trustees | At least annually |
| Accessibility | Website lead | Trustees | At least annually |
| Galleries | Media editor | Safeguarding reviewer | Every upload batch |

---

# 25. Roadmap

## Phase 0 — Discovery and preservation

Deliverables:

- obtain the existing `index_6.html` and `bonfire.html`;
- export or record all useful Wix content and URLs;
- inventory the local source content;
- inventory Cloudinary folders, tags and metadata;
- identify missing photographs and permissions;
- confirm charity, contact and location details; and
- preserve the approved visual direction.

Exit criteria:

- no important existing material is at risk of being lost;
- open content questions are recorded; and
- existing assets are available for review.

## Phase 1 — Foundation

Deliverables:

- approve this blueprint;
- establish final repository structure;
- create README and documentation index;
- create issue labels and milestones;
- establish branch/review process;
- define initial data schemas;
- define Cloudinary tagging conventions; and
- connect Netlify preview deployment.

Exit criteria:

- new work has a clear home and workflow;
- a preview can be reviewed safely; and
- routine data structures are agreed.

## Phase 2 — Design system

Deliverables:

- extract approved colours and typography from existing pages;
- create design tokens;
- define layout widths and spacing;
- define buttons, links and form controls;
- define event accent palettes;
- define motion rules;
- create responsive type and image rules; and
- document accessibility states.

Exit criteria:

- core design decisions are represented in CSS and documentation;
- representative contrast checks pass; and
- no page-specific design language is needed for basic layouts.

## Phase 3 — Core components

Deliverables:

- header and navigation;
- footer;
- hero;
- notice;
- cards;
- section layouts;
- quick facts;
- FAQ;
- carousel;
- gallery;
- lightbox;
- countdown;
- filters;
- timeline;
- sponsor grid;
- scroll reveal; and
- fallback/error states.

Exit criteria:

- components are demonstrated and documented;
- keyboard and reduced-motion behaviour is tested; and
- components work responsively.

## Phase 4 — Core pages

Recommended order:

1. Home
2. The Field
3. About the Trust
4. Contact
5. Get Involved
6. Governance
7. Privacy
8. Accessibility
9. 404

Exit criteria:

- the site provides a complete non-event visitor journey;
- shared components are stable; and
- real content has replaced placeholders.

## Phase 5 — Events

Recommended order:

1. Bonfire Night, using the existing page as a design/content reference
2. Santa Special
3. Feast & Fayre
4. Five Mile Run
5. Events index

Exit criteria:

- all event pages follow the shared model;
- event-specific identity is controlled;
- event data and countdowns are reliable; and
- practical information is verified.

## Phase 6 — Galleries and content administration

Deliverables:

- final Cloudinary tags;
- gallery listing integration;
- per-year filters;
- metadata workflow;
- volunteer image guide;
- news index;
- people and sponsor data;
- current notices; and
- validation/fallback handling.

Exit criteria:

- a trained volunteer can publish an approved gallery batch;
- routine event data can be changed without editing HTML; and
- failures do not make pages unusable.

## Phase 7 — Quality and launch

Deliverables:

- full content review;
- responsive testing;
- accessibility testing;
- performance optimisation;
- SEO metadata and structured data;
- sitemap and robots file;
- redirects;
- domain and DNS;
- privacy review;
- recovery and rollback test;
- final volunteer training; and
- launch communications.

Exit criteria:

- launch checklist is approved;
- critical issues are resolved;
- operational owners are named; and
- the Trust can make an urgent correction.

## Phase 8 — Post-launch

Within the first month:

- monitor 404s;
- review search indexing;
- gather visitor feedback;
- correct content misunderstandings;
- review performance;
- address accessibility feedback;
- improve volunteer instructions; and
- prioritise rather than immediately implement feature requests.

## Future candidates

Only consider after the core site is stable:

- accessible interactive field map;
- donations;
- field bookings;
- volunteer rota;
- richer historical archive;
- email newsletter integration;
- event results;
- privacy-conscious analytics;
- automated data validation;
- server-generated Cloudinary manifests;
- content editor interface; and
- weather information.

Every future feature must be assessed for:

- visitor benefit;
- maintenance burden;
- accessibility;
- privacy;
- cost;
- failure behaviour;
- volunteer ownership; and
- whether a simple link or static alternative would be better.

---

# 26. Decisions, assumptions and open items

## 26.1 Approved decisions

- Static HTML5, CSS3 and vanilla JavaScript.
- No React, Vue, Angular, WordPress, Tailwind, Bootstrap, Node.js or npm.
- GitHub is the source of truth.
- Netlify hosts and deploys the site.
- Cloudinary stores and delivers media.
- Cloudflare manages the planned domain and DNS.
- Cloudinary folders retain event/year organisation.
- There is no duplicate Gallery folder.
- Public galleries use tags as collection membership.
- Routine content uses JSON where appropriate.
- Essential content remains available without JavaScript.
- Motion must respect reduced-motion preferences.
- The project aims at WCAG 2.2 AA.
- Volunteers should not need HTML for routine updates.

## 26.2 Assumptions requiring confirmation

- The canonical domain will be the apex domain without `www`.
- The repository will be public; if private, service access and volunteer workflow should be adjusted.
- The existing design source files will be supplied before finalising tokens.
- The Cloudinary account permits the required public list delivery approach.
- The Trust has or will adopt a suitable photography/safeguarding process.
- Event organisers can provide verified practical information.
- Contact details, charity registration details and exact address will be confirmed before launch.

## 26.3 Open decisions

- final navigation labels;
- final brand palette and fonts;
- whether a contact form is needed;
- analytics choice;
- social media links;
- map provider or static map approach;
- donations;
- licence for repository code and content;
- exact sponsor display rules;
- gallery default sorting;
- whether historical material needs a separate page;
- how committee/trustee biographies will be approved;
- the extent of old Wix URL redirection possible; and
- who holds each operational role.

Record decisions in `/docs/10-decision-log.md`.

---

# 27. Documentation set

This blueprint should become `/docs/01-project-blueprint.md`.

The long-term documentation set should include:

| File | Purpose |
|---|---|
| `00-vision.md` | Product vision, audiences and principles |
| `01-project-blueprint.md` | Overall source of truth |
| `02-architecture.md` | Technical design and service boundaries |
| `03-design-system.md` | Tokens, typography, colour, spacing and motion |
| `04-component-library.md` | Component markup and behaviour |
| `05-content-guide.md` | Voice, style, page copy and editorial standards |
| `06-volunteer-guide.md` | Routine updates in plain language |
| `07-developer-guide.md` | Local work, code standards and extension |
| `08-deployment-guide.md` | Netlify, Cloudflare, release and rollback |
| `09-release-notes.md` | Significant changes by version/date |
| `10-decision-log.md` | Important decisions and rationale |

Avoid repeating whole sections across documents. Link back to the authoritative document.

---

# 28. Official references

The following sources inform the recommendations in this blueprint. Product behaviour and standards can change, so maintainers should check the current official documentation when implementing or materially revising an integration.

## Accessibility and browser standards

- W3C, Web Content Accessibility Guidelines (WCAG) 2.2: <https://www.w3.org/TR/WCAG22/>
- W3C, WCAG 2.2 Quick Reference: <https://www.w3.org/WAI/WCAG22/quickref/>
- MDN, using media queries for accessibility and reduced motion: <https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using_for_accessibility>
- MDN, semantic HTML: <https://developer.mozilla.org/en-US/docs/Glossary/Semantics>
- MDN, responsive images: <https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images>

## Netlify

- Netlify, Git workflows overview: <https://docs.netlify.com/build/git-workflows/overview/>
- Netlify, create deploys: <https://docs.netlify.com/deploy/create-deploys/>
- Netlify, deployment overview: <https://docs.netlify.com/deploy/deploy-overview/>
- Netlify, static routing, redirects and headers: <https://docs.netlify.com/manage/routing/overview/>
- Netlify, build configuration: <https://docs.netlify.com/build/configure-builds/overview/>

## Cloudinary

- Cloudinary, listing assets and client-side asset lists: <https://cloudinary.com/documentation/list_assets>
- Cloudinary, client-side uploading and security considerations: <https://cloudinary.com/documentation/client_side_uploading>
- Cloudinary, Upload API reference: <https://cloudinary.com/documentation/image_upload_api_reference>
- Cloudinary, upload parameters and public IDs: <https://cloudinary.com/documentation/upload_parameters>
- Cloudinary, service and delivery overview: <https://cloudinary.com/documentation/solution_overview>

## Cloudflare

- Cloudflare Registrar overview: <https://developers.cloudflare.com/registrar/>
- Cloudflare, DNSSEC for registered domains: <https://developers.cloudflare.com/registrar/get-started/enable-dnssec/>
- Cloudflare, account security: <https://developers.cloudflare.com/fundamentals/account/account-security/>

## GitHub

- GitHub, repository security quickstart: <https://docs.github.com/en/code-security/getting-started/quickstart-for-securing-your-repository>
- GitHub, about protected branches: <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches>
- GitHub, managing repository settings: <https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features>

## Search

- Google Search Central, Event structured data: <https://developers.google.com/search/docs/appearance/structured-data/event>
- Google Search Central, structured-data introduction: <https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data>
- Google Search Central, build and submit a sitemap: <https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap>
- Google Search Central, canonical URLs: <https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls>

## UK governance context

- Charity Commission for England and Wales: <https://www.gov.uk/government/organisations/charity-commission>
- UK Information Commissioner's Office: <https://ico.org.uk/>

The UK governance references are starting points. The Trust must identify which specific legal and regulatory requirements apply to its activities.

---

# 29. Version control

| Version | Date | Summary | Status |
|---|---|---|---|
| 1.0 | 16 July 2026 | Initial comprehensive project blueprint | Foundation for approval and implementation |

## Change procedure

For a material change:

1. create a GitHub issue;
2. describe the problem and proposed decision;
3. identify affected pages, components, data and volunteer processes;
4. obtain appropriate approval;
5. update the blueprint and decision log;
6. implement and test the change; and
7. record it in release notes.

---

# 30. Approval

This blueprint establishes the planned foundation of the Darrington Village Field Trust website.

Suggested approval record:

| Role | Name | Date | Decision |
|---|---|---|---|
| Project lead |  |  |  |
| Village Field Trust representative |  |  |  |
| Technical reviewer |  |  |  |
| Content/safeguarding reviewer |  |  |  |

Once approved, the next project action is **Phase 0: Discovery and preservation**, followed by creation of the repository foundation and design system.

