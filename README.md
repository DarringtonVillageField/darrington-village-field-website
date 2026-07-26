# Darrington Village Field Trust website

The source repository for the Trust's new static website. The project uses semantic HTML5, modular CSS and vanilla JavaScript, with Netlify hosting and Cloudinary-managed photography.

## Current status

Phases 0–5 are approved. Phase 6 has established the public Cloudinary Gallery, Gallery filters, content configuration and volunteer maintenance guidance. Shared event dates, homepage and Events-page cards, event cross-references and the Bonfire countdown are driven by `assets/data/events.json`, with readable HTML fallbacks.

## Repository map

- `assets/css/` — shared design tokens, foundations, components and animation rules;
- `assets/js/` — small, reusable behaviour modules;
- `assets/data/` — structured content and configuration;
- `design-system/` — the live component and style reference;
- `component-library/` — working demonstrations of reusable site components;
- `docs/` — project decisions and long-term guidance; and
- `02-prototypes/` — archived early design prototypes, retained for reference only.

## Local preview

From the repository folder, start any simple static web server. For example, macOS includes Python, so the following can be used for local preview only:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000/>. Python is used only for local preview and is not part of the published website.

## Key documents

- [Project Blueprint](docs/01-project-blueprint.md)
- [Design System](docs/07-design-system.md)
- [Core Component Library](docs/08-component-library.md)
- [Volunteer Website Guide](docs/09-volunteer-website-guide.md)
- [Phase 6 Completion Record](docs/10-phase-6-completion.md)
- [Phase 7 Launch Readiness](docs/11-phase-7-launch-readiness.md)
- [Trustee Launch Sign-off](docs/12-trustee-launch-sign-off.md)
- [Controlled Netlify Preview](docs/13-controlled-netlify-preview.md)
- [Phase 0 Discovery and Preservation](docs/02-phase-0-discovery-and-preservation.md)
- [Prototype Audit](docs/03-prototype-audit.md)
- [Wix Content Audit](docs/04-wix-content-audit.md)
- [Cloudinary Inventory](docs/05-cloudinary-inventory.md)

The website's governing maintenance principle is: **a volunteer should not need to edit HTML to keep routine website content current.**
