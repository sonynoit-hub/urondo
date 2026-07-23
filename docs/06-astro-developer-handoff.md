# Astro Developer Handoff

## Route List

```text
/
├── /about
├── /treatments
│   ├── /treatments/in-person
│   ├── /treatments/remote
│   ├── /treatments/private-instruction
│   └── /treatments/special-remote
├── /classes
│   ├── /classes/shin-nakano
│   ├── /classes/ginza
│   ├── /classes/kitasenju-advanced
│   ├── /classes/correspondence
│   └── /classes/special-lectures
├── /access
├── /company
├── /contact
├── /downloads/remote-treatment-application
├── /special-items
└── /privacy-policy
```

## Content Files

```text
site.ts
seo.ts
home.ts
about.ts
treatments.ts
treatments-in-person.ts
treatments-remote.ts
treatments-private-instruction.ts
treatments-special-remote.ts
classes.ts
classes-shin-nakano.ts
classes-ginza.ts
classes-kitasenju-advanced.ts
classes-correspondence.ts
classes-special-lectures.ts
access.ts
company.ts
contact.ts
downloads.ts
special-items.ts
privacy-policy.ts
```

## Shared Components
- `Header.astro`
- `Footer.astro`
- `Hero.astro`
- `SectionBlock.astro`
- `LocationCard.astro`
- `DownloadBlock.astro`
- `TreatmentNav.astro`
- `CompanyOverviewIcon.astro`

## Component-to-Page Mapping
- Home: `HomepageReviewPage`, custom sections, `LocationCard`
- About: custom sections and media layout
- Treatments landing: custom hero and overview cards
- Treatment detail pages: `TreatmentNav` plus page-specific custom sections
- Classes landing: custom location preview grid and custom teacher intro section
- Class detail pages: currently `Hero` and `SectionBlock`, moving toward page-specific custom layouts
- Access: `Hero`, `LocationCard`, `SectionBlock`
- Company: `CompanyOverviewIcon`, custom overview rows
- Contact: `Hero`, `SectionBlock`, `DownloadBlock`
- Downloads page: `Hero`, `DownloadBlock`, `SectionBlock`
- Special Items: custom intro and numbered type cards
- Privacy Policy: `Hero`, `SectionBlock`

## Homepage Section Order
1. Header
2. Hero
3. Philosophy / main message
4. Main service overview
5. Treatment options preview
6. Class locations preview
7. About Liang preview
8. Company overview
9. Footer

## Service Page Order
1. Hero
2. Overview
3. Detailed explanation
4. Process / how it works
5. Pricing
6. Schedule
7. Notes / precautions
8. Related treatment navigation

## Class Page Order
1. Hero
2. Class overview
3. What is taught
4. Instructor
5. Schedule
6. Fee
7. Venue
8. Application method

Ginza note: keep Thursday and Friday schedules together on `/classes/ginza` instead of splitting them into separate pages.

## Minimal Content Shape

```ts
export type Section = {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type PriceItem = {
  label: string;
  value: string;
  note?: string;
};

export type ScheduleItem = {
  label: string;
  value: string;
};

export type PageData = {
  title: string;
  heroTitle: string;
  heroIntro?: string;
  sections?: Section[];
  pricing?: PriceItem[];
  schedule?: ScheduleItem[];
};
```

## Developer Rules
- Keep customer wording unchanged in phase one.
- Only change formatting and structure for the web.
- Put downloads in `public/downloads/`.
- Do not hardcode long text inside page files.
- Use content files as the source of truth.
- Use `3-1講師紹介.docx` content inside the `/classes` landing page instead of a standalone instructor route.
- Keep detailed access directions on `/access`, not on the `/classes` landing page.
- Reuse templates and shared components instead of building each page from scratch.
- Remove deprecated components after migration so the handoff stays accurate.

## Build Order
1. Main layout
2. Header
3. Footer
4. Hero
5. SectionBlock
6. LocationCard
7. DownloadBlock
8. TreatmentNav
9. Homepage
10. Treatments landing
11. Treatment detail pages
12. Classes landing
13. Class detail pages
14. Access
15. Company
16. Contact
17. Downloads page
18. Special items
19. Privacy policy
20. SEO pass
21. Mobile QA pass
