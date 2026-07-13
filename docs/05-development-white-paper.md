# Development White Paper

## Project
Urondo website

## Stack
Astro

## Goal
Build a static, content-first website from customer documents while preserving the original wording in phase one.

## Build Principle
Do not rewrite customer content in phase one.

Allowed:
- Convert content into readable web sections
- Add headings and layout structure
- Present fees and schedules in tables or blocks
- Improve readability on desktop and mobile

Not allowed:
- Change wording
- Change claims
- Change prices, dates, schedules, or instructions
- Remove content without approval

## Why Astro
- Simple for static sites
- Easy routing
- Reusable components without heavy complexity
- Strong SEO support
- Fast loading

## Site Structure
Main sections:
- Home
- About
- Treatments
- Classes
- Access
- Company
- Contact
- Downloads
- Special Items
- Privacy Policy

## Content Strategy
All page content should be derived directly from the customer documents.

Rules:
- Preserve source text
- Break long text into readable sections
- Use consistent layouts for pricing, schedules, and contact details
- Keep existing downloadable form workflows

## Component Strategy
Keep the component set small:
- Header
- Footer
- Hero
- Section block
- Card grid
- Pricing block
- Schedule table
- Location card
- Download block
- CTA section

## Styling Strategy
- One global stylesheet
- Clear typography hierarchy
- Mobile-friendly spacing
- Calm and trustworthy presentation
- Minimal JavaScript

## Color and Visual Direction
The customer documents and extracted images suggest a warm, ceremonial, traditional visual tone rather than a clinical or technology-oriented one.

Observed visual traits from the extracted assets:
- Gold curtains and amber lighting
- Bronze and dark wood tones
- Warm ivory paper/background surfaces
- Occasional muted oxblood or red seating accents

Recommended main visual direction:
- Traditional
- Warm
- Trustworthy
- Slightly ceremonial
- Content-heavy but elegant

Recommended palette:
- Main color: `#B7862E`
- Deep accent: `#5A3414`
- Background: `#F6F0E4`
- Surface/card: `#FFF9F0`
- Body text: `#2B2118`
- Secondary accent: `#7A2E1D`
- Border/muted line: `#D7C3A1`

Recommended usage:
- Header and page background should use warm ivory or soft cream
- Hero areas can use bronze-to-gold gradients with customer imagery
- Buttons and key highlights should use antique gold
- Section titles should use deep brown or bronze
- Footer should use a dark bronze or brown tone
- Cards should use cream surfaces with subtle gold borders

Avoid:
- Clinical blue as the dominant color
- Pure black and pure white high-contrast styling
- Bright red as a main brand color
- Purple-led gradients
- Neon or overly modern visual treatment

## Form and Download Strategy
Phase one should remain simple:
- Downloadable PDF and XLSX application files
- Visible phone, email, and address
- Optional basic contact form
- No complex booking system

## SEO Basics
Each page should include:
- Unique page title
- Meta description
- Clean URL
- One H1
- Internal links to related pages

## QA Rules
Before launch, check every page against the customer source documents.

Checklist:
- Wording matches source
- No missing sections
- No accidental duplicate paragraphs
- Schedules and fees are correct
- Downloads work
- Mobile layout is readable
- Contact information is consistent

## Build Order
1. Project setup
2. Main layout
3. Header and footer
4. Shared components
5. Homepage
6. Treatments pages
7. Classes pages
8. Access, company, and contact
9. Downloads, special items, and privacy policy
10. QA and responsive polish

## Definition of Done
Phase one is complete when:
- All sitemap pages exist
- Customer content is placed faithfully
- Downloads are available
- Navigation works
- Layout is responsive
- Metadata is added
- QA passes against source files
