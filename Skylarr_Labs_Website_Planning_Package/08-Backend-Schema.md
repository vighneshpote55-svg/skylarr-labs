# Backend Schema — Lead Capture
Draft only; adapt to the chosen database/CRM and approved privacy policy.

## `leads`
| Field | Type | Notes |
|---|---|---|
| id | UUID | Primary key |
| reference_code | string | Unique public reference; not sequential ID |
| full_name | varchar(120) | Required, trimmed |
| phone_e164 | varchar(20) | Required, normalized |
| state | varchar(100) | Required |
| district | varchar(100) | Required |
| profession | varchar(100) | Optional/required by business decision |
| pharma_experience | varchar(50) | Optional controlled values |
| investment_range | varchar(50) | Optional, only after wording approved |
| consent_follow_up | boolean | Required if follow-up requires consent |
| consent_text_version | varchar(40) | Version of consent shown |
| utm_source/medium/campaign/content | varchar(150) | Optional attribution |
| landing_page | varchar(500) | Validated URL/path |
| status | enum | new, assigned, contacted, qualified, closed, spam |
| assigned_bdm_id | UUID nullable | If managed locally |
| crm_sync_status | enum | pending, synced, failed, not_configured |
| created_at/updated_at | timestamp | Server-generated UTC |

## Optional `bdm_territories`
`id UUID`, `bdm_id UUID`, `state`, nullable `district`, `active boolean`, `priority integer`, `created_at`.

## Recommended `lead_events`
`id UUID`, `lead_id UUID`, `event_type`, `event_data JSON` (no unnecessary personal data), `created_at`.

## API: `POST /api/leads`
Example request:
```json
{
  "full_name": "Example Person",
  "phone": "+919876543210",
  "state": "Maharashtra",
  "district": "Pune",
  "profession": "Distributor",
  "pharma_experience": "1-3 years",
  "consent_follow_up": true,
  "utm_source": "social",
  "utm_medium": "paid",
  "utm_campaign": "franchise-awareness"
}
```
Success `201`:
```json
{"success":true,"reference_code":"SL-XXXXXX","message":"Thank you. The team will contact you using the details provided."}
```
Validation error `400/422`:
```json
{"success":false,"error":"validation_error","fields":{"phone":"Enter a valid phone number."}}
```

## Rules
Server-side validation, phone normalization, rate limiting, bot protection, duplicate-submit protection, parameterized queries, secure secrets, limited logging, retention/deletion policy.

## Routing
Match active district, then state-wide mapping; otherwise general sales queue. Record assignment and CRM sync events.
