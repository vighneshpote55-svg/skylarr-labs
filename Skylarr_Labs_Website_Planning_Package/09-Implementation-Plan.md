# Implementation Plan

## Phase 0 — Discovery
Inspect existing repo/framework. Confirm brand/logo, investment, eligibility, stats, certifications, territory terms, product categories, FAQ answers, testimonials, contact destination, CRM, BDM rules, consent, and video repeat behavior.
**Exit:** approved facts, asset inventory, architecture choices.

## Phase 1 — Content/assets
Sort photos into founder/team, office, warehouse, products, support, partners, events. Select relevant images, remove duplicates, confirm permissions, compress/rescale, create video posters, draft approved copy.
**Exit:** content and asset library ready.

## Phase 2 — UX/design
Create mobile-first wireframe and desktop layout. Define Emerald/Champagne tokens, typography, buttons, cards, form states, image placements, video behavior. Stakeholder review.
**Exit:** approved responsive design.

## Phase 3 — Frontend
Build page shell/components, responsive sections, CTA anchors, accessible form states, video gallery, SEO metadata, analytics hooks.
**Exit:** functional frontend against mock API.

## Phase 4 — Backend/integrations
Implement schema and lead API, validation, spam controls, persistence, BDM routing/fallback, CRM/notification adapters, secrets and integration tests.
**Exit:** staging submissions persist and route.

## Phase 5 — QA
Test browsers/devices, valid/invalid/network-failure paths, duplicate submits, keyboard/focus/contrast/reduced motion, analytics, page speed, every claim/link/privacy notice.
**Exit:** QA and stakeholder sign-off.

## Phase 6 — Launch
Deploy with rollback plan; monitor submissions, routing, CRM sync, errors, and performance; review lead quality and improve based on evidence.

## Risks
| Risk | Mitigation |
|---|---|
| Conflicting investment/partner numbers | One approved source of truth |
| 1.4 GB photo archive | Select, resize, compress, lazy-load only used images |
| CRM not ready | Secure lead store + general queue fallback |
| Autoplay restrictions | Muted preview or click-to-play |
| Unsupported testimonial/earnings claim | Evidence and written approval or omit |
| Missing territory mapping | Default queue and alert |
