# SMARTIE v9 — Go-Live in 6 Steps

1. Copy your photos into /images/ (see IMAGES-GUIDE.md for exact filenames)
   and your 14 PDF catalogues into /catalogs/.
2. Go to https://app.netlify.com → your site → Deploys → drag this whole folder
   (or the ZIP contents) onto the page. New deploy goes live in ~30 seconds.
3. Domain (only if not already done): Netlify → Domain settings → add smartie.in.
   In GoDaddy DNS: A record @ → 75.2.60.5, CNAME www → your-site.netlify.app.
   DO NOT touch the MX / TXT records — that keeps Titan email (info@smartie.in) working.
4. Netlify auto-issues the free HTTPS certificate once DNS propagates (up to a few hours).
5. Google Search Console → add property smartie.in → submit https://www.smartie.in/sitemap.xml.
6. Test: contact form (Netlify Forms tab shows submissions), WhatsApp button,
   admin panel at /sie-admin-x8080.html (passcode SIE@8080), and one PDF download.

Theme change any time: admin panel → pick colour dot → Generate → paste into settings.json → redeploy.
