# Phase 0 — Cloudinary Inventory

**Cloud name:** `gst8uxqp`  
**Inventory supplied:** 17 July 2026  
**Source:** Manual folder counts supplied by Laurie  
**Original-media backup:** Confirmed

---

## 1. Summary

The Cloudinary Media Library contains **69 distinct photographs** across the supplied folder structure.

The repeated `homepage` and `history` entries in the supplied list have been treated as duplicate folder listings, not additional assets.

Distribution:

| Collection | Photographs | Share |
|---|---:|---:|
| Feast & Fayre | 40 | 58.0% |
| Field | 11 | 15.9% |
| Bonfire Night | 10 | 14.5% |
| Homepage | 5 | 7.2% |
| Five Mile Run | 3 | 4.3% |
| Santa Special | 0 | 0% |
| Other organisational folders | 0 | 0% |
| **Total** | **69** | **100%** |

Percentages are rounded.

---

## 2. Folder inventory

| Folder | Count | Status/observation |
|---|---:|---|
| `bonfire-night/` | 10 | Assets stored at parent level rather than by year |
| `bonfire-night/2024/` | 0 | Empty |
| `bonfire-night/2025/` | 0 | Empty |
| `committee/` | 0 | Empty; only needed if approved portraits are supplied |
| `feast-fayre/` | 0 | Parent folder empty; assets correctly divided by year |
| `feast-fayre/2024/` | 4 | Small historic set |
| `feast-fayre/2025/` | 2 | Significant coverage gap |
| `feast-fayre/2026/` | 34 | Strong current set |
| `field/` | 0 | Parent folder empty; assets divided by subject |
| `field/facilities/` | 0 | Facilities gap |
| `field/open-space/` | 5 | Useful field/general imagery |
| `field/playground/` | 6 | Useful playground imagery |
| `five-mile-run/` | 0 | Parent folder empty |
| `five-mile-run/2024/` | 0 | No coverage |
| `five-mile-run/2025/` | 0 | No coverage |
| `five-mile-run/2026/` | 3 | Limited current coverage |
| `history/` | 0 | Archive/history gap |
| `homepage/` | 5 | Curated homepage assets |
| `logos/` | 0 | Logo currently referenced from elsewhere in Cloudinary |
| `santa-special/` | 0 | Priority photography gap |
| `sponsors/` | 0 | Populate only with approved current sponsor assets |
| `volunteers/` | 0 | Volunteer-story photography gap |

---

## 3. Key findings

### Strongest collection

Feast & Fayre has 40 images, including 34 from 2026. It can support:

- a strong event page;
- a 2026 gallery;
- homepage/event-card imagery;
- volunteer and community storytelling; and
- potentially food, entertainment and children's-activity features.

The 2026 set should be curated rather than loading all 34 photographs into one initial slideshow.

### Bonfire Night

The 10 photographs appear to correspond broadly with the Bonfire prototype's Cloudinary media. They are stored at the parent level while the year folders are empty.

Do not move them merely to make the folder tree look tidy. First determine their year, then apply year tags. Physical reorganisation can be deferred or avoided if it risks changing public IDs.

### Field

The 11 Field images provide reasonable initial coverage of open space and playground. There are no dedicated facilities images, so practical features may need new photographs.

### Five Mile Run

Three 2026 photographs are enough for a hero/card and a small gallery, but not a broad archive. Coverage should be planned at the next event.

### Santa Special

No photographs are available. The page can still launch with:

- a carefully designed seasonal treatment;
- an illustration or sleigh detail if the Trust owns one;
- event information and FAQs; and
- a photography plan for the next event.

Do not delay essential event information solely because photographs are unavailable.

### Organisational storytelling

There are no dedicated assets for:

- trustees/committee;
- volunteers;
- history;
- sponsors; or
- facilities.

These are content gaps, not reasons to fill folders with unsuitable images.

---

## 4. Preservation decisions

Until the tagging and metadata model is approved:

- do not move assets;
- do not rename public IDs;
- do not delete duplicates;
- do not overwrite originals;
- do not expose API credentials;
- do not bulk-publish unreviewed images; and
- retain the independent backup.

Folders remain the editorial organisation. Tags will control website inclusion.

---

## 5. Proposed tag vocabulary

### Publication state

Apply exactly one where relevant:

```text
status-approved
status-review
status-do-not-publish
```

Only `status-approved` assets may receive public gallery tags.

### Gallery membership

```text
gallery-bonfire-night
gallery-feast-fayre
gallery-five-mile-run
gallery-santa-special
gallery-field
gallery-playground
gallery-open-space
gallery-history
```

### Year

```text
year-2024
year-2025
year-2026
```

### Display purpose

```text
use-homepage-hero
use-homepage-featured
use-event-hero
use-event-card
use-gallery
use-social-share
```

### Subject

Use only where helpful:

```text
subject-volunteers
subject-children
subject-playground
subject-open-space
subject-food-drink
subject-entertainment
subject-fireworks
subject-bonfire
subject-running
subject-sponsors
```

Avoid creating dozens of highly specific tags that volunteers cannot remember.

---

## 6. Metadata requirements

Before an image is made public through a gallery tag, record:

| Field | Requirement |
|---|---|
| Alternative text | Required for informative images |
| Caption | Optional but recommended for historical/event context |
| Event/subject | Required through folder or tag |
| Year | Required for event galleries where known |
| Publication approval | Required |
| Photographer credit | Required where attribution applies |
| Image-removal concern | Record internally where relevant |
| Focal point | Recommended for hero/card crops |

Alternative text should describe what matters in the image, not its filename.

---

## 7. Initial curation targets

These are suggested maximum first-release selections, not quotas:

| Use | Suggested selection |
|---|---:|
| Homepage hero rotation/seasonal choices | 3–5 |
| Homepage event cards | 1 per event |
| Feast & Fayre initial gallery | 12–20 |
| Bonfire initial gallery | 8–10 |
| Five Mile Run initial gallery | 3 |
| Field gallery | 8–11 |
| Social share images | 1 per major page/event |

The gallery page can expose more images in batches, but quality and variety are more important than displaying every file.

---

## 8. Photography backlog

Priority order:

1. Santa Special.
2. Field facilities and entrances.
3. Five Mile Run route, runners, start and finish.
4. Volunteers at work.
5. History/archival material.
6. Current sponsors and approved logos.
7. Trustee/committee portraits only if the Trust wants them.
8. Additional Feast & Fayre 2025 images if recoverable.

Photography involving identifiable children requires the Trust's publication and safeguarding process.

---

## 9. Recommended next action

Run a small tagging trial on **three non-sensitive images**:

1. one homepage panorama;
2. one Bonfire photograph; and
3. one Field/open-space photograph.

For each trial image:

- add `status-approved`;
- add the appropriate gallery tag;
- add a year tag where known;
- add one display-purpose tag;
- add alternative text; and
- verify that the public Cloudinary resource-list feature can return the gallery tag.

Do not tag images of identifiable children in the initial technical trial.

---

## 10. Assumptions to confirm

- The repeated `homepage` and `history` lines were duplicate reporting, not separate folders with the same display name.
- The 10 Bonfire images can be assigned to a known year or years.
- The 34 Feast & Fayre 2026 images have been reviewed for public use.
- The three Five Mile Run 2026 images have been reviewed for public use.
- Cloudinary client-side resource lists can be enabled on the current plan.

---

## 11. Change log

| Date | Change |
|---|---|
| 17 July 2026 | Initial manual folder-count inventory recorded |

