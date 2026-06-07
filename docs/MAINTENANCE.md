# Maintenance & Update Documentation

## Regular Maintenance Tasks

### Weekly
- Review and respond to contact form submissions
- Confirm pending appointments
- Check site uptime (Vercel dashboard)
- Publish scheduled blog content

### Monthly
- npm audit and dependency updates
- Review Google Search Console for errors
- Check Core Web Vitals scores
- Backup MongoDB database
- Review analytics and conversion rates

### Quarterly
- Security review of API endpoints
- Update team profiles and pricing if changed
- Refresh testimonials
- Review and update legal pages

## Updating Content

### Blog Posts
Edit `src/data/blog-posts.ts` or connect Contentful CMS:

```bash
# Add to .env.local
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_token
```

### Services & Pricing
Edit `src/data/services.ts`, `src/data/hearing-aids.ts`, `src/data/eyewear.ts`

### Team Members
Edit `src/data/team.ts`

### Site Configuration
Edit `src/lib/constants.ts` for phone, address, hours, social links

## Database Backup

```bash
# MongoDB backup
mongodump --uri="mongodb://localhost:27017/wootton" --out=./backups/$(date +%Y%m%d)

# Restore
mongorestore --uri="mongodb://localhost:27017/wootton" ./backups/20250607
```

For MongoDB Atlas, enable automated daily backups in the Atlas dashboard.

## Deployment

### Vercel (Recommended)
- Auto-deploys on push to main branch
- Preview deployments for pull requests
- Environment variables managed in Vercel dashboard

### Manual Deploy
```bash
npm run build
npm start
```

## CI/CD Pipeline

GitHub Actions workflow at `.github/workflows/ci.yml`:
- Lint on every push
- Build verification
- Type checking

## Third-Party Integrations Setup

| Service | Setup |
|---------|-------|
| Google Analytics 4 | Set NEXT_PUBLIC_GA_ID in .env |
| Google Search Console | Verify domain, submit sitemap.xml |
| Calendly | Set NEXT_PUBLIC_CALENDLY_URL |
| Mailchimp/Brevo | Connect to /api/newsletter |
| Stripe | Add keys for e-commerce (optional) |
| WhatsApp Business | Update SITE.social.whatsapp link |
| Hotjar | Add tracking script to layout.tsx |

## Emergency Contacts
- Hosting: Vercel support
- Domain: Your registrar
- Database: MongoDB Atlas support

## Recovery Procedure
1. Restore database from latest backup
2. Redeploy last known good commit from Vercel
3. Verify all environment variables
4. Test forms and booking flow
5. Check sitemap and robots.txt accessibility
