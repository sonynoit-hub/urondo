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
│   ├── /classes/instructors
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
classes-instructors.ts
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
- `CardGrid.astro`
- `PricingBlock.astro`
- `ScheduleTable.astro`
- `LocationCard.astro`
- `DownloadBlock.astro`
- `CTASection.astro`

## Component-to-Page Mapping
- Home: `Hero`, `SectionBlock`, `CardGrid`, `LocationCard`, `CTASection`
- About: `Hero`, `SectionBlock`, `CTASection`
- Treatments landing: `Hero`, `CardGrid`, `CTASection`
- Treatment detail pages: `Hero`, `SectionBlock`, `PricingBlock`, `ScheduleTable`, `CTASection`
- Classes landing: `Hero`, `CardGrid`, `LocationCard`, `CTASection`
- Class detail pages: `Hero`, `SectionBlock`, `PricingBlock`, `ScheduleTable`, `CTASection`
- Access: `Hero`, `LocationCard`, `SectionBlock`
- Company: `Hero`, `SectionBlock`
- Contact: `Hero`, `SectionBlock`, `DownloadBlock`, `CTASection`
- Downloads page: `Hero`, `DownloadBlock`, `SectionBlock`
- Special Items: `Hero`, `SectionBlock`, `PricingBlock`, `CTASection`
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
9. Contact CTA
10. Footer

## Service Page Order
1. Hero
2. Overview
3. Detailed explanation
4. Process / how it works
5. Pricing
6. Schedule
7. Notes / precautions
8. CTA

## Class Page Order
1. Hero
2. Class overview
3. What is taught
4. Instructor
5. Schedule
6. Fee
7. Venue
8. Application method
9. CTA

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
- Reuse templates and shared components instead of building each page from scratch.

## Build Order
1. Main layout
2. Header
3. Footer
4. Hero
5. SectionBlock
6. CTASection
7. CardGrid
8. PricingBlock
9. ScheduleTable
10. LocationCard
11. Homepage
12. Treatments landing
13. Treatment detail pages
14. Classes landing
15. Class detail pages
16. Access
17. Company
18. Contact
19. Downloads page
20. Special items
21. Privacy policy
22. SEO pass
23. Mobile QA pass
