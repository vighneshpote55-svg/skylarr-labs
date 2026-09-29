# Technical Requirement Document (TRD)
## Runtime
Support current stable Chrome, Edge, Firefox, Safari, and current Android/iOS browsers. Use progressive enhancement and test common mobile and desktop widths.

## Frontend
- TypeScript if consistent with repository.
- Semantic HTML, accessible components, responsive images.
- Lazy-load below-fold images and video embeds; reserve media dimensions to avoid layout shift.
- Form loading, validation, success, and network error states.
- Preserve UTM campaign data through submission.
- SEO metadata and analytics events.

## API
`POST /api/leads`: accept JSON, validate fields, normalize phone, apply rate limits/spam checks, persist before success, return reference code and clear errors.
Optional health endpoint; any admin endpoint requires separate authentication/authorization.

## Suggested fields
Name, phone, state, district, profession, pharma experience, optional investment range, follow-up consent, consent text version, UTM source/medium/campaign/content, landing page, timestamp. Collect only necessary information.

## Integrations
CRM via server-side adapter with retry/status; BDM routing by approved territory map with fallback queue; WhatsApp/email only through approved provider and consent; analytics with privacy controls; official video embeds.

## Video
Default click-to-play with controls. Autoplay only muted and compliant with browser policy. Decide between full-video loop and custom five-second preview loop; test on target browsers. Do not duplicate Shorts unintentionally.

## Security
HTTPS, secure headers, server validation, output encoding, rate limits, bot protection, secret manager, restricted CORS, no stack traces, retention/access policy.

## Testing
Unit tests for validation/routing; API integration tests; frontend form tests; end-to-end CTA-to-submit; responsive/browser and accessibility checks; analytics verification.

## Performance
Optimize Core Web Vitals; compress and lazy-load images; minimize JavaScript and font requests; defer non-critical scripts; measure on real mobile devices.
