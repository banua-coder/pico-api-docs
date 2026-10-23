# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: developers who integrate the PICO SulTeng API into their own apps, dashboards or research code. They come to find an endpoint, read its parameters and example response, and copy a request. Secondary: researchers and data journalists who need to know what each field means, how the figures are calculated and where the data comes from.

## Product Purpose

Documentation and landing site for the PICO SulTeng API, a REST API for COVID-19 data in Central Sulawesi (Sulawesi Tengah), Indonesia. The site explains how to call the API, what every endpoint returns, and how the data is defined. Success: a developer makes a first working request quickly, and a researcher can trust and cite a figure.

## Positioning

Regional, province-level COVID-19 data for Sulawesi Tengah, down to regencies, hospitals, task forces and vaccination, with documented formulas and data sources. A national dashboard does not publish this level of local detail.

## Operating Context

Static Vue 3 single-page site served from an nginx Docker container. Routes:

- `/` is the home page.
- `/docs/:section` shows one section per page. `/docs` redirects to `/docs/overview`.
- `/docs/endpoints` is the endpoint index. `/api` redirects here.
- `/docs/glossary` holds the data and methods.

A search palette opens with `/` or Ctrl/Cmd+K.

Live API at `https://pico-api.banuacoder.com/api/v1`, with Swagger UI at `https://pico-api.banuacoder.com/swagger/index.html`. Source of the API: `https://github.com/banua-coder/pico-api-go`.

## Capabilities and Constraints

- Stack stays Vue 3 (Composition API), TypeScript, Tailwind CSS 3, Vite, vue-router, vue-i18n.
- Full English and Indonesian text (`src/locales/en.json`, `src/locales/id.json`). Every new string must exist in both.
- Light and dark themes with a toggle.
- The docs cover these topics:
  - overview, authentication, health check and the root endpoint
  - national latest and historical data
  - provinces, province cases and regencies
  - hospitals, task forces, vaccination and statistics
  - a glossary with math formulas, error handling and data sources
- Code samples use Prism, math uses KaTeX.
- Content, routes and endpoint facts do not change in a redesign.

## Brand Commitments

Keep the PICO SulTeng name and the `sulteng-*.webp` logos in `public/`. The logo is blue (about `#3C78C4`), so red fields clash with it. Use the logo blue, and do not use red as a field color. Keep the dark and light themes, English and Indonesian support, and the link to Swagger UI for live API testing.

## Evidence on Hand

Real endpoint documentation and example responses already in the site. No testimonials, usage numbers or customer logos exist, so nobody can invent them.

## Product Principles

1. Reference first: a reader finds an endpoint and copies a working request in seconds.
2. Data you can trust: definitions, formulas and sources sit next to the numbers.
3. Bilingual by default: Indonesian and English readers get the same quality.
4. Light and dark are equal citizens, and neither is a patch on the other.
5. Fast and static: no change can slow the site or need a server.

## Accessibility & Inclusion

Not specified by the user. Assume WCAG 2.2 AA as the floor for a public documentation site. Open decision: the user has not yet approved this standard.
