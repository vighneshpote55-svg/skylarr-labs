# Architecture
## Overview
Marketing frontend → secure lead API → validation/persistence → BDM routing → optional CRM and notification adapters.

```text
Visitor/Campaign
  -> Responsive Landing Page (content, video, form, analytics)
  -> HTTPS Lead API
       -> validate + spam controls
       -> database persistence
       -> territory/BDM routing
       -> CRM adapter (optional)
       -> WhatsApp/email adapter (optional)
  -> Sales queue / CRM
```

## Technology approach
Inspect the existing repository first. Suggested choices only: React + TypeScript, existing CSS system/design tokens, current backend if present (or FastAPI/Express/serverless), PostgreSQL or approved managed DB, static/CDN media, official YouTube embeds, existing hosting. Avoid introducing a new stack without need.

## Frontend modules
Site shell/header, hero, company intro, trust stats, benefits, process, audience, products, support, video gallery, testimonials, FAQ, lead form, thank-you, footer, analytics adapter.

## Backend modules
Lead controller/service/repository, routing service, CRM adapter, notification adapter, rate limit/spam guard, audit logging.

## Flow
Visitor submits → frontend validation → API validation and spam check → persist lead → assign BDM or fallback queue → sync CRM/notify asynchronously → return reference → show confirmation.

## Security/privacy
HTTPS; server-side validation; parameterized queries; secrets in environment/secret manager; minimal personal data; consent notice; retention/deletion policy; rate limits; avoid logging phone numbers; restrict CRM credentials.

## Observability/deployment
Track API errors, successful submissions, unassigned leads, CRM sync and notification status. Use local, staging, production environments; test integrations in staging; document rollback.
