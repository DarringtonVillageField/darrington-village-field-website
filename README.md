# Darrington Village Field Trust website

The source repository for the Trust's new static website. The project uses semantic HTML5, modular CSS and vanilla JavaScript, with Netlify hosting and Cloudinary-managed photography.

## Current status

The design system is approved. Blueprint Phase 3 now establishes the reusable core component library. Open [`component-library/index.html`](component-library/index.html) through a local web server to review content, media and behaviour components.

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

Then visit <http://localhost:8000/design-system/>. Python is not part of the published website.

The current component milestone is available at <http://localhost:8000/component-library/>.

## Key documents

- [Project Blueprint](docs/01-project-blueprint.md)
- [Design System](docs/07-design-system.md)
- [Core Component Library](docs/08-component-library.md)
- [Decisions and Assumptions](docs/02-decisions-and-assumptions.md)
- [Content Inventory](docs/03-content-inventory.md)
- [Cloudinary Inventory](docs/04-cloudinary-inventory.md)

The website's governing maintenance principle is: **a volunteer should not need to edit HTML to keep routine website content current.**
