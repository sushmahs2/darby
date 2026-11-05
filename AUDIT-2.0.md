# Darby Trading 2.0 — repository audit

## Existing implementation

- Legacy site is plain HTML, CSS and JavaScript with Bootstrap loaded from a CDN.
- Main files include `index.html`, `index.css`, `index.js`, About Us and Contact page files.
- Existing product areas include Rice Planter, CNC and Laser, Wall Printer, Agricultural Drone, 3D Printer, Power Tools, AVT Bike, Sports and Play, and raw materials (MDF, acrylic and plywood).
- The repository includes approximately 53 media assets totalling about 102.8 MB; the homepage background video is about 8.4 MB.
- Existing custom domain is `www.darbytrading.com`.

## Issues observed

1. Homepage references Bootstrap CSS 5.3.0-alpha2 while its JavaScript bundle is 5.1.3.
2. Contact page CSS sets `body { overflow: hidden; }`, which can prevent normal page scrolling.
3. About page uses fixed 200px horizontal padding on a text block, which is unsuitable for narrow screens.
4. Image alt text is generic or does not describe the image.
5. About and Contact pages show different WhatsApp numbers; owner confirmation is required before selecting a canonical business number.
6. The About page's founding-year statement (2010) needs verification before reuse.
7. Existing contact experience does not provide a confirmed, tested enquiry submission endpoint.
8. Media weight is high for a fast mobile-first website; assets need curation, responsive sizing and modern formats.

## Decisions for 2.0

- Astro static generation, TypeScript and reusable components; no server framework for a product-brochure site.
- Deep navy, warm white and restrained muted-gold palette; Manrope headings and Inter body text.
- Preserve existing legacy files during the redesign. The new Astro source is in `src/` and static assets are in `public/`.
- Preserve the custom domain through `public/CNAME` in the generated output.
- Avoid publishing unverified founding claims, certifications, product specifications, pricing, business address, email or contact number.

## Outstanding before production launch

- Confirm legal business name, address, official enquiry email, canonical phone/WhatsApp number, and whether the business offers import/export, local distribution or both.
- Verify product availability, brands, specifications, warranties, certifications and imagery.
- Configure a real contact destination (confirmed email or approved form provider). Current form only opens the visitor's email application and does not transmit or store data.
- Optimize and map the existing product images/video to catalogue entries; retain originals in the repository.
- Run dependency installation, Astro validation, production build, responsive browser QA, accessibility checks and Lighthouse tests in CI/browser preview.
- Configure GitHub Pages to deploy the Astro `dist/` output after review and merge; do not replace the live site before sign-off.
