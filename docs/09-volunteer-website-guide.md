# Darrington Village Field Trust Website

## Volunteer Website Guide

**Version:** 1.0 approved  
**Last reviewed:** 24 July 2026  
**Approved by:** Laurie, for Darrington Village Field Trust  
**Applies to:** `darringtonvillagefield.org.uk` website repository and Cloudinary cloud `gst8uxqp`

---

## 1. Purpose of this guide

This guide explains the routine tasks that keep the Darrington Village Field website current. It is written for trustees and occasional website helpers; programming knowledge is not assumed.

The main principle is:

> Routine updates should not require a volunteer to edit HTML.

At present, this applies fully to:

- uploading and publishing approved Gallery photographs;
- changing the information shown on homepage event cards; and
- publishing or withdrawing the site-wide notice bar.

Some changes still need a website maintainer:

- changing detailed wording within a page;
- adding a new page;
- adding a new event or Gallery category;
- adding a new year or filter button to the Gallery;
- changing navigation, design or behaviour; and
- publishing a reviewed release through Netlify.

Do not guess when information, image permission or publication authority is uncertain. Ask a trustee before publishing.

---

## 2. How the website is organised

| Service | What it does | Routine use |
|---|---|---|
| Cloudinary | Stores and delivers public website photographs | Upload, describe, tag and withdraw Gallery images |
| GitHub | Holds the approved website files and their change history | Review and preserve approved website changes |
| Netlify | Builds and hosts the website | Publish an approved GitHub version |
| Cloudflare | Manages the domain and DNS | Normally used only during launch or a domain change |

The Cloudinary cloud name is `gst8uxqp`.

The GitHub repository is:

`https://github.com/DarringtonVillageField/darrington-village-field-website`

The approved website files in GitHub are the source of truth. A local copy is for preparation and previewing; Cloudinary is the source of truth for published Gallery photographs.

---

## 3. Accounts and safe access

Each person should use their own authorised account where the service supports this. Do not share passwords by email, messaging apps or documents.

Use multi-factor authentication on GitHub, Cloudinary, Netlify and Cloudflare. Give people only the access needed for their role and remove access when it is no longer required.

For Cloudinary:

- people who only need to upload require appropriate contribution access;
- people adding tags to existing assets require edit access or above; and
- deletion should be restricted to an authorised administrator.

Cloudinary's current permissions guide is:

<https://cloudinary.com/documentation/dam_admin_users_groups>

Never place passwords, API secrets, personal enquiry records or private documents in the public GitHub repository.

---

# Part A — Publishing Gallery photographs

## 4. Before uploading anything

Confirm all of the following:

- The photograph is suitable for a public charity website.
- The Trust has decided that it may be published.
- Any required photographer permission or credit has been dealt with.
- Identifiable children and vulnerable people have received the additional consideration required by the Trust's safeguarding and privacy process.
- The photograph does not expose private, embarrassing or security-sensitive information.
- The original is backed up somewhere other than Cloudinary.
- The image is sharp enough to display and is not an unnecessary near-duplicate.

An identifiable person in a photograph will usually make the image personal data. Children require particular protection. Use the Trust's approved process and seek trustee guidance when uncertain.

Relevant UK guidance:

- ICO, Children and the UK GDPR: <https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/children-and-the-uk-gdpr/>
- ICO, photography advice that may also help small groups and clubs: <https://ico.org.uk/for-organisations/advice-for-small-organisations/news-blogs-and-events/blogs/taking-photographs-data-protection-advice-for-schools/>

This guide is an operating procedure, not legal advice.

---

## 5. Choosing the Cloudinary folder

In Cloudinary, open the **Folders** view and navigate to the intended folder before uploading. Uploading from the general Assets view may place files in the root instead.

Use the established folder structure:

```text
homepage/
bonfire-night/
  2024/
  2025/
feast-fayre/
  2024/
  2025/
  2026/
five-mile-run/
  2024/
  2025/
  2026/
santa-special/
field/
  facilities/
  open-space/
  playground/
history/
logos/
sponsors/
committee/
volunteers/
```

If a required year folder is missing, ask the Cloudinary administrator before creating a different naming pattern.

Cloudinary's upload guidance:

<https://cloudinary.com/documentation/dam_upload_store_assets>

---

## 6. Uploading photographs

1. Sign in to Cloudinary.
2. Open **Media Library** or **Assets**, depending on the wording shown.
3. Choose **Folders**.
4. Open the correct event, subject and year folder.
5. Select **Upload**, or drag the photographs into that folder.
6. Wait for every upload to finish.
7. Check that the photographs appear in the intended folder.
8. Do not apply public Gallery tags until the images have been reviewed.

Use clear filenames where practical. Do not include children's full names, private contact details or other sensitive information in filenames.

---

## 7. Exact Gallery tags used by the website

The website reads the following exact tags. Spelling, hyphens and numbers matter.

### Bonfire Night

| Purpose | Tag |
|---|---|
| Include in Bonfire collection | `gallery-bonfire` |
| Show under 2025 | `gallery-bonfire-2025` |

### Feast & Fayre

| Purpose | Tag |
|---|---|
| Include in Feast & Fayre collection | `gallery-feastandfayre` |
| Show under 2024 | `gallery-feastandfayre-2024` |
| Show under 2025 | `gallery-feastandfayre-2025` |
| Show under 2026 | `gallery-feastandfayre-2026` |

### The Village Field

| Purpose | Tag |
|---|---|
| Include in The Field collection | `gallery-villagefield` |
| Show under Open space | `gallery-villagefield-openspace` |
| Show under Playground | `gallery-villagefield-playground` |

### Five Mile Run

| Purpose | Tag |
|---|---|
| Include in Five Mile Run collection | `gallery-5milerun` |
| Show under 2026 | `gallery-5milerun-2026` |

### Santa Special

| Purpose | Tag |
|---|---|
| Include in Santa Special collection | `gallery-santa-special` |
| Show under 2025 | `gallery-santa-special-2025` |

### The two-tag rule

An event photograph normally needs:

1. the main collection tag; and
2. its year or area tag.

For example, a Feast & Fayre 2026 photograph needs both:

```text
gallery-feastandfayre
gallery-feastandfayre-2026
```

Do not invent a tag for a new year. The website configuration must also be updated before a new year button can appear. Ask the website maintainer to add it.

---

## 8. Applying tags

### Several photographs at once

1. Select all the approved photographs in Cloudinary.
2. Choose the metadata or tag-editing action from the toolbar.
3. Enter the first required tag.
4. **Click the matching tag shown immediately below the entry field.** Typing the words alone does not necessarily select the tag.
5. Enter and select the second tag.
6. Choose **Update** or **Save**.
7. Open one photograph again and confirm that both tags are present.

### One photograph

1. Double-click the photograph.
2. Open its **Metadata** section.
3. Add each required tag and select the matching value offered by Cloudinary.
4. Save the change.
5. Reopen or refresh the asset if necessary and verify the saved tags.

Cloudinary supports editing tags across multiple selected assets:

<https://cloudinary.com/documentation/dam_manage_metadata#bulk_updating_tags_and_contextual_metadata>

---

## 9. Adding alternative text and captions

Every informative Gallery photograph should have useful alternative text. A caption is recommended where it adds event, date, place or historical context.

Cloudinary may show the contextual fields as:

- **Description (alt)**; and
- **Title (caption)**.

The website reads these values when they are available.

### Alternative text

Describe the useful visual information briefly:

```text
Children taking part in a sack race on the Village Field
```

Avoid:

```text
Image
Photo 23
DSC_1048
A lovely photograph of...
```

Do not identify a child by full name. Do not add details that cannot be seen or safely inferred.

### Caption

A caption can add context:

```text
Children's races at Feast & Fayre 2026
```

Keep captions concise and factual. Record a photographer credit only where the agreed terms require it.

Cloudinary accessibility guidance:

<https://cloudinary.com/documentation/accessible_media_images>

---

## 10. Checking the public Gallery

After saving the tags:

1. Open the Gallery page.
2. Refresh the page.
3. Select the relevant collection.
4. Select the relevant year or Field area.
5. Confirm that the new photographs appear.
6. Open several photographs in the enlarged viewer.
7. Check the image, caption, Previous and Next controls.
8. Check the page on a narrow screen or phone if possible.

Useful local preview addresses:

```text
http://localhost:8000/gallery/
http://localhost:8000/gallery/?collection=field
```

The Gallery initially shows a balanced random selection of 24 photographs. A photograph may therefore be in the Gallery without appearing in the first 24. Select its collection and year, or use **Load more photographs**, before assuming it is missing.

Each fresh page load can produce a different initial selection.

---

## 11. Withdrawing a photograph

If a published photograph needs to be removed:

1. Treat an urgent privacy or safeguarding concern as a priority and tell a trustee.
2. Open the asset in Cloudinary.
3. Remove its main public Gallery tag and its year or area Gallery tag.
4. Save the change.
5. Refresh and check the relevant Gallery filters.
6. Record why it was withdrawn if the Trust's internal process requires this.

Removing the public Gallery tags is normally safer than immediately deleting the original. Delete an asset only when authorised and when the consequences for other website pages have been checked; the same Cloudinary image may be used as a hero, card or social image elsewhere.

For an urgent concern, use the contact route in the website Privacy Notice:

`darringtonvillagefield@outlook.com`

---

## 12. Gallery troubleshooting

### The tag appears not to save

- After typing the tag, click the matching result immediately below the field.
- Select **Update** or **Save**.
- Reopen the photograph and check its Metadata section.
- Confirm that you have edit permission for the asset.

### A photograph does not appear

- Confirm the main collection tag is present.
- Confirm the correct year or area tag is also present.
- Check the spelling against the table in this guide.
- Confirm that the asset is a publicly deliverable image.
- Refresh the Gallery and select the correct filters.
- Use **Load more photographs** if viewing All collections.
- Allow a short period for Cloudinary's public list to refresh.

### The page remains on “Loading photographs…”

- Refresh the page once.
- In Safari, try **Option + Command + R** to reload without the old cached files.
- Try a private window or a second browser.
- Confirm that ordinary Cloudinary images load.
- If the problem affects several browsers, report it to the website maintainer rather than repeatedly changing tags.

### The wrong crop is shown

The Gallery thumbnails use an automatic landscape crop, while the enlarged viewer uses a contained image. Check the full viewer before replacing an image. Portrait photographs with important detail near an edge may need a revised source image or a carefully chosen crop.

### A year or area button is missing

Uploading and tagging photographs does not create a new filter button. The website maintainer must add the new year or area to:

```text
assets/data/galleries.json
```

No HTML change is normally required for this.

---

# Part B — Routine website information

## 13. What can currently be changed without HTML

### Homepage event cards

The file:

```text
assets/data/events.json
```

controls the enhanced name, status, date, summary and link shown in homepage and Events-page cards. It also supplies shared event-date references and the Bonfire countdown target.

Changing this file does **not** automatically rewrite detailed event-page paragraphs, page titles, search descriptions or FAQ answers. Those must be reviewed separately so the website cannot show conflicting information.

### Site-wide notice bar

The file:

```text
assets/data/notices.json
```

controls the optional notice bar.

A notice is visible only when:

- its status is `published`; and
- the current time is within any supplied start and end dates.

Use `draft` while preparing or withdrawing a notice.

### Gallery collections

The file:

```text
assets/data/galleries.json
```

maps the public Cloudinary tags to Gallery collections, years and areas.

This file should normally be changed by a website maintainer because a typing error can prevent a collection from loading.

### Organisation settings

The file:

```text
assets/data/site.json
```

records shared settings such as the organisation name, charity number, main email address, social links and Cloudinary cloud name. Not every HTML page currently reads these values automatically, so a maintainer must search the whole website when changing shared details.

---

## 14. Safe process for a website-file change

1. Confirm the new information with the responsible trustee or event organiser.
2. Record the source and date confirmed.
3. Change only the necessary file.
4. Preview the website locally.
5. Check the affected page and any repeated version of the information.
6. Check on both wide and narrow screens.
7. Review spelling, dates, links and email addresses.
8. Commit the approved change to GitHub with a clear description.
9. Publish through Netlify only when an approved deployment is intended.
10. Recheck the live website after publishing.

Netlify automatic publishing is currently locked to conserve build credits during development. Do not unlock it merely to preview a routine change locally.

---

## 15. Information that must be checked in more than one place

Ask the website maintainer to search the complete repository when changing:

- event dates or opening times;
- event status;
- contact email addresses;
- charity or trustee information;
- social-media links;
- the Santa Special holding statement;
- sponsors;
- privacy wording;
- accessibility wording; and
- emergency, safety or facility information.

Until every page is fully data-driven, changing a JSON value alone may leave older wording elsewhere.

---

# Part C — Maintenance and governance

## 16. Monthly check

- Open the homepage, Events, Gallery, Field and Contact pages.
- Check that the navigation and footer links work.
- Check the current event status and dates.
- Check that the notice bar is correct or absent.
- Open each Gallery collection and one year or area filter.
- Check one enlarged photograph.
- Confirm that monitored email links open the intended address.
- Record and report anything requiring correction.

---

## 17. Before an event

- Confirm the date, time, location and status with the event organiser.
- Confirm the published contact address.
- Review booking, ticket, parking and accessibility information.
- Check the homepage card, Events page and detailed event page together.
- Set or verify the notice bar if required.
- Confirm the photography and safeguarding arrangements.
- Decide who will select and approve photographs after the event.

---

## 18. After an event

- Change the event status from upcoming to completed when appropriate.
- Replace forward-looking wording with a short, accurate retrospective.
- Remove or update expired booking and ticket links.
- Select a varied, manageable photograph set.
- Complete permission, safeguarding, alt-text and caption checks.
- Apply the main collection and year tags.
- Verify the public Gallery filters.
- Retain source photographs outside Cloudinary.
- Record any improvements needed for the following year.

---

## 19. Annual review

At least once each year, the trustees should review:

- trustee and charity information;
- contacts and account access;
- Privacy Notice;
- Accessibility Statement;
- Cloudinary user permissions;
- GitHub, Netlify and Cloudflare access;
- multi-factor authentication and recovery arrangements;
- current event information;
- old notices and links;
- Gallery quality and image-removal requests;
- backup and recovery arrangements; and
- whether this guide still matches the services' current interfaces.

Update the review date and change log whenever this guide changes materially.

---

## 20. When to stop and ask

Do not publish until a trustee or appropriate owner has decided what to do when:

- permission to use a photograph is unclear;
- an identifiable child or vulnerable person may be affected;
- somebody has requested removal or made a privacy complaint;
- event information conflicts between sources;
- legal, governance, safeguarding or safety wording is proposed;
- a new administrator account or access level is needed;
- an asset may be used elsewhere and deletion is proposed;
- a live deployment, DNS or domain change is required; or
- the website behaves unexpectedly after a change.

It is better to leave content unpublished briefly than to publish uncertain information.

---

## 21. Quick Gallery checklist

```text
[ ] Correct folder selected
[ ] Public use approved
[ ] Children/safeguarding considered
[ ] Original backed up
[ ] Main collection tag selected
[ ] Correct year or area tag selected
[ ] Alternative text added
[ ] Caption added where useful
[ ] Tags reopened and verified
[ ] Correct Gallery filter checked
[ ] Enlarged viewer checked
```

---

## 22. Reference sources

- Cloudinary Assets user guide: <https://cloudinary.com/documentation/dam_user_guide>
- Cloudinary uploading guidance: <https://cloudinary.com/documentation/dam_upload_store_assets>
- Cloudinary tags and contextual metadata: <https://cloudinary.com/documentation/dam_manage_metadata>
- Cloudinary image accessibility: <https://cloudinary.com/documentation/accessible_media_images>
- Cloudinary users and permissions: <https://cloudinary.com/documentation/dam_admin_users_groups>
- GitHub authentication security: <https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa>
- Netlify deploy controls: <https://docs.netlify.com/deploy/manage-deploys/stop-or-activate-builds/>
- ICO children and UK GDPR guidance: <https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/children-and-the-uk-gdpr/>
- Website Project Blueprint: `docs/01-project-blueprint.md`
- Cloudinary Inventory: `docs/05-cloudinary-inventory.md`
- Website Privacy Notice: `/privacy/`
- Website Accessibility Statement: `/accessibility/`

---

## 23. Change log

| Date | Version | Change |
|---|---|---|
| 24 July 2026 | 1.0 | Initial guide approved following review against the working Cloudinary Gallery, current data files and agreed maintenance approach |
