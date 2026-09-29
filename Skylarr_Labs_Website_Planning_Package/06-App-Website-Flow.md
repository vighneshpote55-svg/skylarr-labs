# App / Website Flow

## Visitor journey
```mermaid
flowchart TD
 A[Ad / Search / Direct] --> B[Hero]
 B --> C{Visitor action}
 C -->|Watch| D[Company intro or promo video]
 D --> E[Explore page]
 C -->|Explore| E
 E --> F[Benefits, process, products, support]
 F --> G[Testimonials and FAQ]
 G --> H[Lead form]
 H --> I{Valid?}
 I -->|No| J[Show field errors]
 J --> H
 I -->|Yes| K[Submit to API]
 K --> L{Accepted?}
 L -->|No| M[Retry or alternate contact]
 M --> H
 L -->|Yes| N[Thank-you confirmation]
 N --> O[Persist and route lead]
 O --> P[BDM follow-up]
```

## CTA behavior
Header/hero CTA scrolls to form; video CTA opens accessible player; WhatsApp CTA opens approved company contact. Verify all destinations before launch.

## Form behavior
Validate, disable duplicate submit, show loading. On success display reference and next steps. On failure preserve entered values and offer retry/alternate contact.

## Back-office
```mermaid
flowchart TD
 A[Lead API] --> B[Validate + spam check]
 B --> C[Persist]
 C --> D[Match territory]
 D --> E{BDM found?}
 E -->|Yes| F[Assign BDM]
 E -->|No| G[General sales queue]
 F --> H[CRM sync]
 G --> H
 H --> I[Approved confirmation]
 I --> J[Record status]
```

## Follow-up
Set an internal response SLA with sales. Do not publicly promise a callback time until operations approve it.

## Analytics events
`page_view`, `hero_cta_click`, `company_video_play`, `promo_video_play`, `lead_form_start`, `lead_form_validation_error`, `lead_submit`, `lead_submit_success`, `lead_submit_error`, `whatsapp_click`.
