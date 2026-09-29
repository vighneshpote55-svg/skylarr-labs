# Design System
## Brand direction
Professional, reassuring pharma-business aesthetic. Use real company photography, clean spacing, restrained motion, and clear typography.

## Color tokens
| Token | Hex | Use |
|---|---|---|
| Emerald Ink | `#064E3B` | Brand, headings, primary buttons, footer |
| Champagne | `#F8E7C9` | Warm highlights and selected panels |
| White | `#FFFFFF` | Main surfaces |
| Soft Sage | `#EAF3EE` | Alternate section backgrounds |
| Ink | `#17231F` | Body text |
| Muted | `#64716B` | Secondary text |
| Border | `#DCE5DF` | Dividers/cards |
| Success | `#19734D` | Success |
| Error | `#B42318` | Errors |

Check contrast; avoid small Champagne text on white.

## Type and layout
Use a readable sans-serif (Inter, Manrope, or existing brand font). Strong 600–700 headings, body 16–18px desktop, consistent scale. Content max-width about 1120–1200px, 4/8px spacing rhythm, readable line lengths, responsive grid.

## Components
- Header: logo, anchor navigation, primary CTA; mobile menu.
- Primary button: Emerald Ink with white text; secondary outlined.
- Cards: white, subtle border/shadow; Champagne used sparingly.
- Stats: animate only verified figures; respect reduced motion.
- Video card: poster, title, play control, accessible playback controls.
- Form: persistent labels, required markers, focus, errors, success.
- FAQ: keyboard-accessible accordion.

## Imagery
Prioritize actual founder/team, office, warehouse, dispatch, product packaging, training, partner, and event photos. Stock images must not imply they depict Skylarr Labs. Use compressed WebP/AVIF, responsive variants, descriptive alt text, and consent for identifiable people.

## Motion and accessibility
Subtle reveals only; no distracting parallax. Honor `prefers-reduced-motion`. Aim for WCAG 2.2 AA: semantic landmarks, heading order, keyboard/focus, contrast, accessible errors, captions where available, no autoplay audio.

## Responsive guidance
Mobile-first; test small phones, tablets, and desktop. No horizontal overflow; touch targets about 44×44 CSS px. Test intermediate widths, not just breakpoint boundaries.
