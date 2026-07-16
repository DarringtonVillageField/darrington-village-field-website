# Phase 0 — Discovery and Preservation

## Darrington Village Field Trust Website

**Status:** In progress  
**Started:** 16 July 2026  
**Owner:** Darrington Village Field Trust  
**Related document:** [Project Blueprint v1.0](01-project-blueprint.md)

---

## 1. Purpose

Phase 0 preserves the existing work and establishes what information and assets are available before the new website architecture or design system is implemented.

Its goals are to:

- preserve the existing prototype pages;
- capture the useful content and URLs of the Wix website;
- inventory source content and public documents;
- inventory Cloudinary folders, assets, tags and metadata;
- distinguish verified facts from outdated or unconfirmed material;
- identify missing content, photographs and permissions; and
- provide a controlled handover into Phase 1.

No existing content should be treated as current merely because it appears on a website or in an old document.

---

## 2. Executive status

Phase 0 is in progress. The two prototype HTML files have been preserved and audited. The remaining work centres on capturing the Wix content, inventorying Cloudinary, and confirming current organisational and event information.

### Completed

- GitHub repository identified and connected.
- Project Blueprint v1.0 stored in GitHub.
- Local source-content folder inspected.
- Repository contents inventoried.
- Mac searched for the named prototype files.
- Initial public-source research completed.
- Initial preservation and content-gathering structure defined.
- Prototype files received, preserved and audited.
- Cloudinary cloud name confirmed as `gst8uxqp`.
- Independent backup of original Cloudinary photographs confirmed.
- Existing source-document backlog confirmed as empty.
- Wix site confirmed accessible in Laurie's browser.
- Planned production domain confirmed as `darringtonvillagefield.org.uk`.
- Bonfire Night date confirmed as Saturday 7 November 2026.

### Outstanding

- Inventory Cloudinary assets and metadata.
- Confirm official contact, trustee and charity information.
- Identify image permissions and safeguarding records.
- Create an old-to-new URL map.
- Complete content disposition decisions: keep, rewrite, merge, archive or discard.

---

## 3. Repository inventory

Repository:

<https://github.com/DarringtonVillageField/darrington-village-field-website>

Files present at the start of Phase 0:

```text
README.md
docs/
└── 01-project-blueprint.md
```

### Findings

- The repository contains the approved blueprint.
- It does not yet contain website HTML, CSS, JavaScript, photographs or source content.
- The current `README.md` contains only the repository title and a one-line description.
- No production website structure has yet been created.

### Preservation decision

Do not copy unreviewed prototype files directly into the future production structure. When received, preserve them first under:

```text
archive/
└── prototypes/
    ├── index_6.html
    ├── bonfire.html
    └── supporting-assets/
```

Working versions can then be derived from the archived originals. Git history will preserve subsequent changes.

---

## 4. Local source-content inventory

Editorial source folder supplied by Laurie:

```text
/Users/laurie/villagefield/website
```

Files present on 16 July 2026:

```text
Darrington-Village-Field-Trust-Website-Project-Blueprint-v1.0.md
```

The local blueprint and the GitHub blueprint were compared by SHA-256 checksum and are identical.

### Finding

The folder currently contains the blueprint and the two supplied prototypes. Laurie confirmed on 16 July 2026 that there are no other existing documents, policies, notes or event guides awaiting collection.

This is not a project blocker. Page copy and operational information will be reconstructed from:

- the current Wix website;
- verified public sources;
- the supplied prototypes;
- Cloudinary imagery and metadata; and
- information confirmed directly by the Trust during page development.

### Important distinction

This local folder is a private editorial filing cabinet. Its contents do not automatically become public or enter the GitHub repository.

Documents should be copied into GitHub only when:

- publication is intended;
- accuracy has been checked;
- personal data has been reviewed;
- copyright and image permissions are understood; and
- the content has been rewritten or prepared for the web.

---

## 5. Prototype files

The following named files were supplied on 16 July 2026:

```text
index_6.html
bonfire.html
```

Both are self-contained HTML prototypes with inline CSS and JavaScript and remote Google Fonts and Cloudinary media dependencies. No separate local supporting files were supplied.

They have been preserved unchanged in:

```text
/archive/prototypes/
```

Their design and implementation findings are documented in:

```text
/docs/03-prototype-audit.md
```

---

## 6. Recommended source-content structure

Create the following folders inside:

```text
/Users/laurie/villagefield/website
```

Recommended structure:

```text
website/
├── 00-inbox/
├── 01-existing-website/
│   ├── wix-page-captures/
│   ├── wix-text/
│   └── old-urls/
├── 02-prototypes/
│   ├── index-6/
│   └── bonfire/
├── 03-field/
│   ├── facilities/
│   ├── accessibility/
│   ├── maps-and-directions/
│   └── maintenance/
├── 04-trust/
│   ├── history/
│   ├── trustees-and-committee/
│   ├── governance/
│   └── policies/
├── 05-events/
│   ├── feast-fayre/
│   ├── five-mile-run/
│   ├── bonfire-night/
│   └── santa-special/
├── 06-volunteers/
├── 07-sponsors/
├── 08-news/
├── 09-contact/
├── 10-image-permissions/
└── 99-superseded/
```

### Filing rule

When unsure where an item belongs, place it in `00-inbox`. Do not create several copies in different subject folders.

Filename examples:

```text
bonfire-night-practical-information-2025.docx
five-mile-run-race-guide-2025.pdf
trust-history-source-unknown.txt
playground-facilities-reviewed-2026-07-16.docx
```

Avoid filenames such as:

```text
latest.docx
new-final-v2.docx
information.txt
```

---

## 7. Wix website capture

Existing Wix URL:

<https://darringtonfield.wixsite.com/darrington-village>

### Current limitation

The Wix site was successfully inspected directly in the in-app browser on 16 July 2026. All five pages in its navigation were captured and classified. See `/docs/04-wix-content-audit.md`.

The Wix site currently uses its `wixsite.com` address and has no custom domain pointing to it. The planned `darringtonvillagefield.org.uk` domain will be registered and connected as part of the new-site launch process, not the Wix preservation process.

### Capture requirements

For each public Wix page, record:

- page title;
- full URL;
- navigation label;
- headings;
- all visible text;
- downloadable files;
- images and captions;
- contact details;
- event dates and prices;
- external links;
- social links;
- footer information;
- material that appears out of date;
- material worth preserving; and
- screenshots at desktop and mobile widths.

### Suggested inventory table

| Old page | Old URL | Main purpose | Proposed action | New destination |
|---|---|---|---|---|
| Home | To capture | General introduction | Rewrite | `/` |
| Field | To capture | Field information | Rewrite/expand | `/field/` |
| Feast & Fayre | To capture | Event | Rewrite | `/events/feast-fayre/` |
| Five Mile Run | To capture | Event | Rewrite | `/events/five-mile-run/` |
| Bonfire Night | To capture | Event | Rewrite | `/events/bonfire-night/` |
| Contact | To capture | Contact details | Verify/rewrite | `/contact/` |

Add every page discovered during capture.

### Content disposition labels

Every piece of Wix content should receive one:

- **Keep:** accurate and suitable with minor editing.
- **Rewrite:** useful subject matter, but presentation or facts need work.
- **Merge:** belongs within another proposed page.
- **Archive:** historically useful but not current visitor information.
- **Discard:** obsolete, duplicated, incorrect or valueless.
- **Verify:** may be useful but requires an authoritative confirmation.

---

## 8. Cloudinary discovery

Confirmed Cloudinary cloud name:

```text
gst8uxqp
```

This is the public Cloudinary environment identifier already visible in the prototype image-delivery URLs. It is not an API secret.

Known folder structure supplied by Laurie:

```text
Home/
├── homepage/
├── bonfire-night/
│   ├── 2024/
│   └── 2025/
├── feast-fayre/
│   ├── 2024/
│   ├── 2025/
│   └── 2026/
├── five-mile-run/
│   ├── 2024/
│   ├── 2025/
│   └── 2026/
├── santa-special/
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

### Known photography gaps

- Santa Special photographs for the previous year may be missing.
- Feast & Fayre 2025 photographs may be missing or need locating.

### Required Cloudinary inventory

For each folder and year, record:

- number of assets;
- image/video split;
- filenames or public IDs;
- whether captions exist;
- whether alternative-text metadata exists;
- tags already applied;
- duplicate or near-duplicate photographs;
- obvious low-quality files;
- likely hero candidates;
- publication-permission status;
- photographer credit requirements; and
- images that should not be published.

### Phase 0 rule

Do not bulk rename, move, delete or tag photographs until:

- the inventory has been reviewed;
- the Cloudinary cloud name and account structure are confirmed;
- a backup or independent archive is confirmed;
- the tag vocabulary is approved; and
- publication-permission handling is agreed.

### Backup status

Laurie confirmed on 16 July 2026 that the original Cloudinary photographs have an independent backup. This substantially reduces the preservation risk, but bulk changes must still wait for the inventory and tagging plan.

### Inventory approach

The browser-facing website will ultimately use public Cloudinary tags rather than authenticated folder searches. During Phase 0, create an inventory without exposing API credentials by using one of these methods:

1. a Cloudinary Media Library export, if available in the account;
2. folder-by-folder counts and screenshots recorded manually; or
3. a future authenticated administrative script run locally, with credentials held outside GitHub and outside browser JavaScript.

Until tags are applied, the public website cannot safely infer every asset in a folder using only the cloud name.

---

## 9. Initial public-source findings

The following information was found in current public sources. It is recorded for verification and must not automatically replace Trust-approved content.

### Charity Commission record

Authoritative source:

<https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/505756/full-print>

Public record observed on 16 July 2026:

- Registered name: Darrington Village Field Trust.
- Charity number: 505756.
- Registration date: 13 January 1977.
- Stated activity: providing and maintaining a playing field and play equipment for use by the general public in Darrington.
- Operating area: City of Wakefield.
- Registered address: Philips Lane, Darrington, Pontefract, WF8 3BH.
- Public telephone: 07825 676174.
- Public email: `darringtonvillagefield@outlook.com`.
- Website listed by the Commission: `www.darringtonvillagefield.org`.
- Three trustees are listed.
- Reporting status is shown as up to date.

### Verification warnings

- The listed website differs from the planned `.org.uk` domain.
- `Philips Lane` should be checked because other informal sources may use a different spelling.
- Public telephone and email details require Trust approval before publication.
- Trustee names and roles should be confirmed internally even when they match the public register.
- Financial figures should be linked to the Charity Commission rather than manually repeated unless there is a clear visitor need.

### Historical Five Mile Run information

Older race guides and a 2025 terms document are publicly indexed:

- 2018 race guide: <https://www.readkong.com/page/the-2018-darrington-5-mile-run-race-guide-6168750>
- 2025 entry terms: <https://bookitzone.com/stephen_berry_1/NAjFFX_12779.pdf>

These sources demonstrate historically useful subjects such as:

- registration;
- parking;
- route;
- road safety;
- marshalling;
- hydration;
- results;
- transfers;
- bag drop;
- age requirements;
- photography; and
- event contact details.

They must not be used as current instructions without confirmation by the current race organiser.

---

## 10. Content collection checklist

### Field

- [ ] Exact public address and postcode.
- [ ] Entrances.
- [ ] Parking arrangements.
- [ ] Public transport.
- [ ] Opening/access arrangements.
- [ ] Playground facilities and age guidance.
- [ ] Open-space uses.
- [ ] Sports/exercise facilities.
- [ ] Toilets and when available.
- [ ] Seating.
- [ ] Accessibility.
- [ ] Dogs policy.
- [ ] Cycling policy.
- [ ] Defibrillator information.
- [ ] Emergency and problem-reporting information.
- [ ] Map or plan.
- [ ] Maintenance information.
- [ ] Any hire/use rules.

### Village Field Trust

- [ ] Approved short description.
- [ ] History.
- [ ] Governing purpose.
- [ ] Charity number.
- [ ] Trustee names and roles.
- [ ] Committee names and roles, if different.
- [ ] Governance documents.
- [ ] Policies.
- [ ] Annual reports/accounts links.
- [ ] Contact details.
- [ ] Social media accounts.
- [ ] Volunteer opportunities.
- [ ] Sponsorship information.

### Each event

- [ ] Event owner.
- [ ] Purpose/history.
- [ ] Typical month/date.
- [ ] Confirmed next date.
- [ ] Opening and start times.
- [ ] Admission or price.
- [ ] Booking/ticket link.
- [ ] Programme.
- [ ] Location/entrance.
- [ ] Parking.
- [ ] Accessibility.
- [ ] Toilets.
- [ ] Food/drink.
- [ ] Weather/cancellation arrangements.
- [ ] Safety rules.
- [ ] Dogs guidance.
- [ ] Photography information.
- [ ] Volunteer roles.
- [ ] Sponsors.
- [ ] Contact.
- [ ] FAQs.
- [ ] Approved photographs by year.

### Legal and operational

- [ ] Privacy notice source information.
- [ ] Cookie/analytics decision.
- [ ] Accessibility contact.
- [ ] Photography and image-removal policy.
- [ ] Safeguarding policy relevant to publication.
- [ ] Copyright and image licences.
- [ ] Contact-message retention.
- [ ] Named content owners and reviewers.

---

## 11. Content register

As material is collected, add it to this register or a later structured inventory.

| ID | Subject | Source | Date | Authority | Status | Proposed destination | Notes |
|---|---|---|---|---|---|---|---|
| C-001 | Vision statement | Project Blueprint | 2026-07-16 | Approved by Laurie | Keep | Site-wide guidance | Not necessarily public page copy |
| C-002 | Charity identity | Charity Commission | Current public record | Authoritative external | Verify internally | About/Governance/Footer | Charity no. 505756 |
| C-003 | Existing Wix content | Wix website | Unknown | Existing public copy | Awaiting capture | Multiple | Full audit required |
| C-004 | Homepage prototype | `index_6.html` | Unknown | Design prototype | Preserved/reviewed | Design reference | See prototype audit |
| C-005 | Bonfire prototype | `bonfire.html` | Unknown | Design prototype | Preserved/reviewed | Event design reference | See prototype audit |
| C-006 | Cloudinary photographs | Cloudinary | Multiple years | Trust media library | Awaiting inventory | Galleries/pages | Permission and metadata audit needed |

---

## 12. Risk register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Prototype files are lost | Medium | High | Locate and archive immediately |
| Wix content disappears before capture | Medium | High | Complete screenshots/text capture early |
| Old event information is republished as current | High | High | Require named organiser verification |
| Images are published without adequate permission review | Medium | High | Use deliberate publication tags and safeguarding review |
| Cloudinary bulk changes break existing references | Medium | High | Inventory and back up before renaming/moving |
| Contact/trustee information becomes stale | Medium | Medium | Assign owner and review frequency |
| Source folder is mistaken for public content | Low | Medium | Keep editorial and repository roles documented |
| Several copies become conflicting “master” versions | Medium | Medium | GitHub owns approved website content; local folder owns raw sources |
| Old Wix URLs lose visitors or search value | Medium | Medium | Build URL inventory and transition plan |

---

## 13. Immediate next actions

### Laurie

1. Answer the verification questions in `/docs/04-wix-content-audit.md`.
2. Confirm the Trust's current contact details, charity details and trustee display preference.
3. Record approximate Cloudinary asset counts by folder/year, or provide a safe Media Library export if available.
4. Confirm whether existing images have captions, alternative text or publication tags.

### Codex

1. Compare prototype content with captured Wix content.
2. Create the old-to-new content map.
3. Continue the Cloudinary and source-content inventory.
4. Resolve content verification questions.
5. Turn the prototype audit into the formal design-system specification.
6. Propose the Phase 1 repository foundation.

---

## 14. Phase 0 exit criteria

Phase 0 is complete when:

- the named prototype pages and dependencies are preserved;
- all useful Wix pages and URLs are captured;
- the source-content folder contains the available material;
- Cloudinary folders and publication metadata are inventoried;
- missing images and permissions are recorded;
- current organisational and contact facts are confirmed;
- every legacy content item has a proposed disposition;
- old URLs have proposed new destinations;
- risks and unresolved questions have owners; and
- the Trust approves moving into Phase 1.

---

## 15. Change log

| Date | Change |
|---|---|
| 16 July 2026 | Initial repository, local-folder, prototype and public-source discovery recorded |
| 16 July 2026 | Prototype files received, preserved and audited |
| 16 July 2026 | Cloudinary cloud name and independent backup confirmed; no source-document backlog; Wix access and planned production domain confirmed |
| 16 July 2026 | All Wix navigation pages captured and classified; content conflicts and verification questions documented |
| 16 July 2026 | Bonfire Night date confirmed as 7 November 2026; Wix classified as an outdated reference rather than the current public source |
