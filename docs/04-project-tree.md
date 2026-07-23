# Project Directory Guide

## Recommended Astro Tree

```text
demo-website/
├── public/
│   ├── images/
│   │   ├── brand/
│   │   ├── locations/
│   │   └── shared/
│   ├── downloads/
│   │   ├── remote-treatment-application.pdf
│   │   └── remote-treatment-application.xlsx
│   └── favicon.svg
│
├── src/
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── SectionBlock.astro
│   │   ├── LocationCard.astro
│   │   ├── DownloadBlock.astro
│   │   ├── TreatmentNav.astro
│   │   ├── CompanyOverviewIcon.astro
│   │   ├── HomepageReviewPage.astro
│   │   └── AboutReviewPage.astro
│   ├── content/
│   │   ├── site.ts
│   │   ├── seo.ts
│   │   ├── home.ts
│   │   ├── about.ts
│   │   ├── treatments.ts
│   │   ├── treatments-in-person.ts
│   │   ├── treatments-remote.ts
│   │   ├── treatments-private-instruction.ts
│   │   ├── treatments-special-remote.ts
│   │   ├── classes.ts
│   │   ├── classes-shin-nakano.ts
│   │   ├── classes-ginza.ts
│   │   ├── classes-kitasenju-advanced.ts
│   │   ├── classes-correspondence.ts
│   │   ├── classes-special-lectures.ts
│   │   ├── access.ts
│   │   ├── company.ts
│   │   ├── contact.ts
│   │   ├── downloads.ts
│   │   ├── special-items.ts
│   │   └── privacy-policy.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── access.astro
│   │   ├── company.astro
│   │   ├── contact.astro
│   │   ├── special-items.astro
│   │   ├── privacy-policy.astro
│   │   ├── treatments/
│   │   │   ├── index.astro
│   │   │   ├── in-person.astro
│   │   │   ├── remote.astro
│   │   │   ├── private-instruction.astro
│   │   │   └── special-remote.astro
│   │   ├── classes/
│   │   │   ├── index.astro
│   │   │   ├── shin-nakano.astro
│   │   │   ├── ginza.astro
│   │   │   ├── kitasenju-advanced.astro
│   │   │   ├── correspondence.astro
│   │   │   └── special-lectures.astro
│   │   └── downloads/
│   │       └── remote-treatment-application.astro
│   └── styles/
│       └── global.css
│
├── src/
│   └── utils/
│       └── text.ts
│
├── docs/
│   ├── 01-project-overview.md
│   ├── 02-sitemap.md
│   ├── 03-wireframes.md
│   ├── 04-project-tree.md
│   ├── 05-development-white-paper.md
│   └── 06-astro-developer-handoff.md
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Notes
- Keep original customer files separate from website code.
- Store downloadable forms in `public/downloads/`.
- Store customer-derived page content in `src/content/`.
- Keep teacher introduction content inside `src/content/classes.ts` until a separate shared structure is needed.
- Keep Ginza Thursday and Friday information together on the single `/classes/ginza` page.
- Keep page files focused on layout and rendering only.
- Remove deprecated shared components after pages migrate away from them.
