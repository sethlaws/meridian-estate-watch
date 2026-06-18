# Meridian Home Watch — Website

Next.js 15 + Tailwind CSS website for Meridian Home Watch.

> ⚠️ **Keep this project OUT of `~/Desktop` and `~/Documents`.** Those folders are
> synced by iCloud Drive, which intercepts the thousands of small file operations
> Next.js performs during compilation and causes the dev server / build to hang.
> This project lives in `~/Projects/meridian-home-watch` for that reason.

## Prerequisites

- Node.js 18.18+ or 20+ ([nodejs.org](https://nodejs.org))

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero with video, services overview, process, CTAs |
| `/services` | Full services detail page with checklists |
| `/about` | Company story, values, service area |
| `/contact` | Contact form + info |

## Deploy to DigitalOcean App Platform

1. Push this repo to GitHub
2. Go to [cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps)
3. Click **Create App** → connect your GitHub repo
4. DigitalOcean auto-detects Next.js and configures build/run commands
5. Choose the **Basic** plan ($5/mo) — plenty for this site
6. The `.do/app.yaml` file pre-configures the deployment spec

## Customization Checklist

- [ ] Replace `(000) 000-0000` with real phone number (Header, Footer, Contact)
- [ ] Confirm `info@meridianhomewatch.com` is a real mailbox
- [ ] Replace the placeholder hero video (`app/page.tsx`, the `<iframe>` `src`)
- [ ] Connect the contact form to a form service (Formspree, Resend, etc.)
- [ ] Add real photos
- [ ] Set up custom domain in DigitalOcean App Platform settings
