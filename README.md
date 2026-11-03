# GITM Gurgaon redesign

A static, responsive redesign of the GITM website. Run locally with:

```sh
python3 -m http.server 4173
```

The homepage, programme details, About, Academics, Admissions, Placements, Campus Life, Contact, student resources and portal previews are implemented locally using query-string routes. Navigation does not send visitors to the existing college website. WhatsApp, telephone and email links open the respective external apps.

Admissions enquiries open a prefilled email draft in the visitor's mail application; this is **not** an application submission and no enquiry is stored by the site. Student, staff and administrator login pages are non-functional previews with disabled inputs; no authentication, database, account management, or secure grievance submission is configured. Academic calendars and syllabi require institute-provided documents. Individual original blog and event articles have not been migrated. The site owner should review content, fees, phone numbers, and privacy language, and provide a secure backend and institutional approval before launch.

## Photography and content

The design uses photographs identified as GITM campus, student and event photography from the following third-party galleries, rather than AI-generated or stock campus photography. Locally hosted originals are retained in `assets/`; the site uses 2× upscaled, lightly sharpened WebP versions in `assets/enhanced/`. Upscaling does not recover missing detail from the originals: approved, native high-resolution photographs are preferred:

- `students-campus.jpg`, `workshop.png`, `student-event.png`, `students-on-campus.png`: [Collegedunia GITM gallery](https://collegedunia.com/college/17693-global-institute-of-technology-and-management-gitm-gurgaon/gallery)
- `campus-building.webp`, `learning.webp`: [CollegeBatch GITM campus tour](https://www.collegebatch.com/4241-global-institute-of-technology-and-management-campus-tour-gurgaon)

The locally hosted `assets/gitm-emblem.png` is an upscaled and lightly sharpened version of a GITM emblem sourced from [Jagran Josh](https://www.jagranjosh.com/colleges/global-institute-of-technology-and-management-gitm-gurgaon-1310). It is not a native-resolution original; the institute should provide and approve its original high-resolution logo. The site owner should confirm image ownership and permissions, provide original high-resolution assets, and review the published academic, admissions and placement information before launching. This is not connected to the existing WordPress CMS, student information system or a contact-form backend.

## Photo galleries and recruiters

Additional gallery images are embedded directly from the existing GITM site (not copied into this repository): the [campus](https://gitmgurgaon.com/lush-green-campus/), [about](https://gitmgurgaon.com/about-gitm/), [central library](https://gitmgurgaon.com/central-library/), [hostel](https://gitmgurgaon.com/hostel-facilities/) and [clubs](https://gitmgurgaon.com/clubs-and-societies/) pages. Exact image URLs are in `officialGallerySources` in `extra-pages.js`. Images depend on the source server remaining reachable; failed images are hidden. These are selected images, not an exhaustive collection. Confirm ownership and permission before official use, and prefer locally hosted, approved originals for reliability.

The recruiter wall is based on names in GITM's [leading recruiters](https://gitmgurgaon.com/our-leading-recruiters/) and [placement cell](https://gitmgurgaon.com/placement-cell/) material. Names are institute-reported and do not establish current participation, visit dates, or guaranteed placement. Confirm with the placement office before official publication.

Recruiter brand marks in `assets/recruiters/` are from [Simple Icons](https://simpleicons.org/) (CC0 1.0) and [Font Awesome Free](https://fontawesome.com/) (Amazon icon, CC BY 4.0; © Fonticons, Inc.) and a four-colour Microsoft mark. Brand names and logos remain trademarks of their respective owners. Confirm permitted use before an official launch; marks do not imply endorsement or a current placement partnership.

## Fonts

Manrope and DM Serif Display are self-hosted from [Fontsource](https://fontsource.org/) for reliable rendering without an external font request. Both are licensed under the SIL Open Font License 1.1; their licence texts are in `assets/fonts/`.
