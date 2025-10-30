# Deployment Guide

## Quick Deploy to Vercel

The fastest way to deploy this portfolio is using Vercel:

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hassaansiraj/portfolio)

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Environment Setup

Create a `.env.local` file (not committed to git) with:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_EMAIL=your.email@example.com
NEXT_PUBLIC_GITHUB=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN=https://linkedin.com/in/yourusername
```

## Custom Domain Configuration

### On Vercel

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS records:
   - **A Record**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com`

### SSL Certificate

Vercel automatically provisions SSL certificates for all domains.

## Performance Optimization Tips

1. **Enable Edge Functions** (Already configured in Next.js 14)
2. **Enable Image Optimization** (Built-in with Next.js)
3. **Configure Caching Headers** (Automatic with Vercel)

## Post-Deployment Checklist

- [ ] Test all sections on mobile and desktop
- [ ] Verify all links work correctly
- [ ] Check social media sharing (Open Graph tags)
- [ ] Submit sitemap to Google Search Console
- [ ] Test page load speed with Lighthouse
- [ ] Verify analytics tracking (if configured)
- [ ] Test contact form functionality
- [ ] Check cross-browser compatibility

## Monitoring

### Vercel Analytics

Enable Vercel Analytics in your project settings for:
- Page views
- Web Vitals
- Performance metrics

### Google Search Console

1. Verify ownership at [search.google.com/search-console](https://search.google.com/search-console)
2. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

## Updating Content

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Vercel auto-deploys from your main branch

## Rollback

If you need to rollback a deployment:

```bash
vercel rollback [deployment-url]
```

Or use the Vercel dashboard to promote a previous deployment.

## Support

For issues with deployment, contact:
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- GitHub Issues: [your-repo/issues](https://github.com/yourusername/portfolio/issues)

