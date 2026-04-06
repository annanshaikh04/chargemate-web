# Visual sitemap — Cordline prototype

| Page | Route (implementation) | Purpose | Key components |
| :--- | :--- | :--- | :--- |
| Home | `/` | First impression; drive to shop and campaign | Hero, value props (3), dual CTA, minimal trust strip |
| Shop | `/shop` | Catalog browse | Product grid (cards), optional sort label (static) |
| Product | `/product/[slug]` or `/product` | Product detail | Image gallery placeholder, specs list, price, add to cart, link to `/fund` |
| Cart | `/cart` | Review selection | Line items, qty steppers (UI only), subtotal, disabled checkout CTA |
| Fund | `/fund` | Crowdfunding-style ask | Story, progress bar + stats, tier cards, short FAQ |
| About | `/about` | Credibility | Mission, team placeholders, timeline optional (omit for lean) |
| Legal | `/legal` | Placeholder compliance | Privacy / terms stub sections |

## Navigation model

- **Primary nav:** Home, Shop, Fund, About.
- **Secondary:** Cart (icon or link), Legal in footer.
- **Cross-links:** PDP → “Back this project” → Fund; Home hero → Shop + Fund.

## Out of scope for mockups

- User auth, account menu, search results, filters, checkout steps, blog.
