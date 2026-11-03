# GITM Gurgaon redesign

A static, responsive redesign of the GITM website. Run locally with:

```sh
python3 -m http.server 4173
```

The homepage, programme details, About, Academics, Admissions, Placements, Campus Life, Contact, student resources and portal previews are implemented locally using query-string routes. Navigation does not send visitors to the existing college website. WhatsApp, telephone and email links open the respective external apps.

Admissions enquiries open a prefilled email draft in the visitor's mail application; this is **not** an application submission and no enquiry is stored by the site. Student, staff and administrator login pages are non-functional previews with disabled inputs; no authentication, database, account management, or secure grievance submission is configured. Academic calendars and syllabi require institute-provided documents. Individual original blog and event articles have not been migrated. The site owner should review content, fees, phone numbers, and privacy language, and provide a secure backend and institutional approval before launch.

## Photography and content

The design uses photographs identified as GITM campus, student and event photography from the following third-party galleries, rather than AI-generated or stock campus photography:

- `students-campus.jpg`, `workshop.png`, `student-event.png`, `students-on-campus.png`: [Collegedunia GITM gallery](https://collegedunia.com/college/17693-global-institute-of-technology-and-management-gitm-gurgaon/gallery)
- `campus-building.webp`, `learning.webp`: [CollegeBatch GITM campus tour](https://www.collegebatch.com/4241-global-institute-of-technology-and-management-campus-tour-gurgaon)

The institute logo is loaded from the existing GITM website. The site owner should confirm image ownership and permissions, provide original high-resolution assets, and review the published academic, admissions and placement information before launching. This is not connected to the existing WordPress CMS, student information system or a contact-form backend.
