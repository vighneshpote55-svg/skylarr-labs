# Product Requirement Document (PRD) — Skylarr Labs Landing Page
**Status:** Draft for review | **Product:** Responsive pharma franchise lead-generation website

## Purpose
Explain the Skylarr Labs franchise opportunity, establish trust, and capture qualified enquiries for BDM follow-up. Primary traffic is expected from social campaigns and direct links; prioritize mobile visitors.

## Goals and measures
- Increase qualified franchise enquiries and make the offer easy to understand.
- Track page visits, CTA clicks, form starts/submissions, qualified leads, BDM response time, and errors.
- Set numeric targets after baseline analytics exist.

## Audiences
Pharma sales professionals (MR/ASM/RM), distributors, existing pharma businesses, entrepreneurs, and potential new franchise partners. Eligibility requires company confirmation.

## Visitor needs
Understand the offer, requirements, products/support, onboarding process, credible company information, and what happens after submitting an enquiry.

## Scope
**In:** responsive landing page, company intro/promotional videos, opportunity and benefits, process, audience, product categories, support, testimonials, FAQs, lead form, thank-you state, analytics, SEO/accessibility/performance, optional CRM/BDM routing.
**Out initially:** partner portal, e-commerce/order management, payments, agreement signing, earnings calculator, CMS unless selected.

## Proposed sections
1. Header and CTA  2. Hero  3. Company overview/video  4. Verified trust indicators
5. Franchise benefits  6. How it works  7. Who can apply  8. Product categories
9. Partner support  10. Promotional videos  11. Approved testimonials  12. FAQ
13. Lead form  14. Footer/privacy/contact.

## Functional requirements
- Responsive layout and accessible navigation.
- CTAs scroll to form or open approved contact/video destination.
- Video controls; autoplay, if enabled, must be muted and browser-policy compliant.
- Validate required fields on client and server; prevent duplicate submissions.
- Persist lead and return a reference code.
- Capture campaign attribution where permitted.
- Route by approved state/district mapping; use general queue as fallback.
- Show success, validation, and retry states.

## Non-functional
Fast mobile load, optimized media, HTTPS, secure server-side validation, no secrets in browser, minimal personal data collection, accessible controls, observable integration failures.

## Claims/content policy
Confirm current investment, franchise-partner count, years of experience, product count, certifications, territory rights, testimonials, and earnings examples. Workbook figures differ; do not publish unverified or guaranteed-income claims.

## Acceptance
Approved claims/assets; responsive page; working form and routing; accessible errors; videos work with controls; analytics verified; no unintended duplicate video; QA sign-off.

## Open decisions
Brand/logo; current investment and eligibility; verified stats/certifications; CRM and BDM rules; follow-up channels/consent; CMS need; five-second preview loop versus full-video loop.
