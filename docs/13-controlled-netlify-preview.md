# Controlled Netlify Preview

## Phase 7 Release Checklist

**Status:** Complete
**Prepared:** 26 July 2026

---

## 1. Purpose

The controlled preview is the final hosted test of the website before trustee approval, domain connection and public launch. It checks behaviour that cannot be fully confirmed through the local preview, including Netlify redirects, response headers, the custom error page and the deployed file boundary.

The production deploy remains locked. The preview must not replace the currently published production version.

---

## 2. Credit-conscious approach

Use one Netlify **Deploy Preview** created from a GitHub pull request rather than unlocking production publishing.

On Netlify's credit-based plans:

- a successful production deploy uses 15 credits;
- Deploy Previews and branch deploys do not use the production-deploy charge;
- visits to a preview still count towards ordinary bandwidth and web-request usage; and
- the Free plan has a monthly hard limit, so testing should remain focused.

Official references:

- [Netlify: how credits work](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/)
- [Netlify: Deploy Previews](https://docs.netlify.com/deploy/deploy-types/deploy-previews/)
- [Netlify: manage and lock deploys](https://docs.netlify.com/deploy/manage-deploys/manage-deploys-overview/)

---

## 3. Pre-preview evidence

Completed locally before creating the preview:

- 15 public HTML files checked;
- local page links and asset references checked;
- one main landmark and one first-level heading confirmed on each substantive page;
- duplicate HTML identifiers checked;
- JSON configuration parsed successfully;
- representative pages checked for narrow-screen reflow;
- keyboard-only checks completed;
- VoiceOver spot checks completed;
- Gallery performance and screen-reader announcements improved; and
- the Git working tree confirmed clean before beginning the preview stage.

---

## 4. Create the preview

1. Keep Netlify production publishing locked.
2. Create a short-lived Git branch for the preview.
3. Push that branch to GitHub.
4. Open a pull request into `main`.
5. Wait for Netlify to add the Deploy Preview link to the pull request.
6. Record the preview URL and the commit identifier below.

**Preview URL:** <https://deploy-preview-1--darringtonvillagefield.netlify.app>

**Approved commit:** `bda20b3790ae54d6c12acdf369aaf99bbe9b5b76`

**Date created:** 26 July 2026

**Completed:** 27 July 2026

**Checked by:** Codex technical checks; Laurie Safari, DuckDuckGo and mobile review

Do not merge the pull request merely to create or approve the preview.

---

## 5. Hosted checks

### Pages and navigation

- Open every primary navigation destination.
- Confirm the Events menu opens the designed Events page rather than a directory listing.
- Confirm footer links reach Privacy, Accessibility, Governance and Contact.
- Confirm the custom 404 page appears for a deliberately incorrect address.
- Confirm the broken-link email button opens a message with the expected subject.

### Deployed-file boundary

Confirm each of these returns the custom 404 response rather than project material:

- `/docs/`
- `/archive/`
- `/design-system/`
- `/component-library/`
- `/README.md`

### Netlify headers

Inspect representative HTML, CSS, JavaScript and JSON responses and confirm:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- CSS receives the configured short public cache;
- JavaScript and JSON require revalidation.

### Dynamic features

- Confirm current event information loads from `assets/data/events.json`.
- Confirm the Bonfire countdown uses Saturday 7 November 2026 at 5pm.
- Confirm Cloudinary galleries load and filter correctly.
- Open several portrait and landscape photographs.
- Confirm the viewer displays a quick preview, sharpens correctly and operates with Previous, Next, Close and Escape.
- Confirm both Bonfire carousels advance and can be paused.

### Browsers and devices

Use a focused selection:

- Safari on the MacBook;
- DuckDuckGo browser on the MacBook;
- one current mobile browser, if available.

Check the homepage, Events page, one event page, Gallery, Contact, Privacy, Accessibility and the 404 page.

---

## 6. Result

Record each problem with:

- page address;
- browser or device;
- what happened;
- what was expected;
- whether it blocks launch; and
- the commit containing the correction.

**Outcome:** Controlled preview passed

**Launch-blocking findings:** None

**Non-blocking findings:** None identified

**Retest completed:** Yes. Final wording, card-layout and responsive callout refinements
were checked against the approved preview commit on 27 July 2026.

Technical checks completed on 26 July 2026 confirmed:

- all primary public pages returned the expected page title, heading and main content;
- the Gallery loaded 24 of 67 photographs;
- the Bonfire Night Gallery filter returned 8 of 8 matching photographs;
- the Gallery viewer opened with its quick preview, changed photographs, announced their position and returned focus when closed;
- event data loaded from `assets/data/events.json`;
- the Bonfire countdown targeted Saturday 7 November 2026 at 5pm;
- both Bonfire carousels loaded and their navigation and pause controls operated;
- an incorrect address and all five protected project paths returned the custom 404 page;
- the configured security headers were present on HTML, CSS, JavaScript and JSON responses;
- CSS used the configured one-hour cache;
- JavaScript and JSON required revalidation; and
- no browser console errors or warnings were recorded.

Manual review also confirmed:

- Safari desktop review passed;
- DuckDuckGo Browser desktop review passed;
- mobile review passed;
- navigation, responsive layouts, galleries and image viewing behaved as expected; and
- no visible horizontal overflow or launch-blocking presentation issues were found.

---

## 7. Completion gate

The controlled preview is complete only when:

- no launch-blocking defect remains;
- Netlify redirects and headers have been confirmed;
- internal project material is unavailable publicly;
- the preview has been checked in the agreed browsers;
- findings and retests have been recorded above; and
- the preview commit is clearly identified for trustee review.

All controlled-preview completion conditions have been met. Keep production publishing
locked after the preview. Public launch remains a separate trustee-authorised action.
