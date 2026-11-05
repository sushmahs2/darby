# Darby Trading 2.0

Astro static redesign staged separately from the legacy HTML website.

## Development

```bash
npm install
npm run dev
npm run check
npm run build
```

## Deployment safety

- The original root-level HTML/CSS/JS files are retained while the new site is reviewed.
- `main` and the live site are unchanged until the redesign branch is merged and deployment is configured.
- `public/CNAME` preserves `www.darbytrading.com` in Astro build output.
- Confirm the official enquiry email before configuring a mailto recipient or form provider.
- Confirm company legal details, product specifications, claims and WhatsApp contact numbers before publication.
- The contact form currently composes a message using the visitor's email application; it does not submit to a server.

## Audit observations

Legacy site: mismatched Bootstrap CSS/JS versions, mobile layout constraints, contact page scrolling disabled, inconsistent contact numbers, generic image alt text, and roughly 103 MB of original media. Optimizing and curating existing assets is a separate follow-up task.
