# Wootton Hearing & Optics

Professional website for **Wootton Hearing Care Ltd** and **Wootton Optics** — a family-run hearing and optical services business in Ilford, Essex, UK.

## Tech Stack

- **Frontend:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 + Framer Motion
- **Backend:** Next.js API Routes (REST)
- **Database:** MongoDB (Mongoose)
- **CMS:** Contentful-ready (file-based blog included)
- **Hosting:** Vercel (recommended)

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

See `.env.example` for all configuration options including MongoDB, JWT auth, email, Google Analytics, Calendly, and Stripe.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, services, testimonials, FAQ |
| `/hearing` | Hearing aids, tests, comparison table |
| `/optics` | Eye care, eyewear, lens technology |
| `/about` | Company story, team, values |
| `/services` | All services with pricing |
| `/blog` | 22 SEO-optimized articles |
| `/appointments` | Booking form with virtual option |
| `/contact` | Contact form + Google Maps |
| `/dashboard` | User appointment history |
| `/admin` | CMS admin dashboard |

## API Endpoints

- `POST /api/contact` — Contact form submissions
- `POST /api/appointments` — Book appointments
- `GET /api/appointments` — User appointment history (auth required)
- `POST /api/newsletter` — Newsletter subscription
- `POST /api/auth/register` — User registration
- `POST /api/auth/login` — User login

## Deployment (Vercel)

```bash
npm run build
```

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables from `.env.example`
4. Deploy

## Documentation

- `docs/SEO-AUDIT-REPORT.md` — SEO implementation audit
- `docs/PERFORMANCE-OPTIMIZATION.md` — Performance guide
- `docs/CONTENT-STRATEGY.md` — Content & keyword strategy
- `docs/MAINTENANCE.md` — Maintenance & update guide

## License

Proprietary — Wootton Hearing Care Ltd
