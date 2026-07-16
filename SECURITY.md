# SMARTIE — Website Security Checklist

## Already built into this site (nothing to do)
- HTTPS forced with HSTS preload (browsers refuse insecure connections)
- Content-Security-Policy — blocks injected/foreign scripts, the #1 defacement route
- X-Frame-Options DENY — nobody can wrap smartie.in in an iframe for phishing
- nosniff, strict referrer policy, camera/mic/location permissions disabled
- Contact form honeypot (bot spam trap) via Netlify Forms
- No database, no server, no plugins = no WordPress-style hacks. A static site
  has almost nothing to attack — this is genuinely more secure than most
  competitor sites running old WordPress.
- Admin page hidden from Google (robots + noindex + X-Robots-Tag header)

## Do these once (15 minutes, highest value)
1. **Netlify account 2FA** — Netlify → User settings → Security → enable
   two-factor. Your Netlify login IS your website; this is the crown jewel.
2. **GoDaddy 2FA** — domain hijack = email + website gone. Enable 2FA there too.
3. **Google account 2FA** (Drive images, Business Profile, Search Console).
4. **Email protection (very important for a business):** in GoDaddy DNS add:
   - SPF: already set by Titan (verify TXT record exists: v=spf1 include:spf.titan.email ~all)
   - DMARC: new TXT record, host `_dmarc`, value `v=DMARC1; p=quarantine; rua=mailto:info@smartie.in`
   This stops fraudsters sending fake invoices "from info@smartie.in" — a real
   and common scam against traders.
5. **Keep a backup** — keep each smartie-vX.zip I give you in Drive. Restore =
   drag zip to Netlify. Recovery time: 60 seconds.

## Ongoing habits
- Never put passwords, API keys, or customer data inside settings.json or
  products.json — they are public files. (Nothing secret belongs in this site.)
- Rotate the admin passcode occasionally (ask me; current: SIE@8080).
- Payment safety rule for the Shop: only Razorpay links generated inside YOUR
  Razorpay dashboard. Never let staff paste other payment links into products.json.
- If you ever see unexpected content on the site: Netlify → Deploys → click the
  previous deploy → "Publish deploy" — instant rollback.

## When you add WhatsApp API (Interakt) chat widget later
The site's CSP will block foreign scripts by design. When you're ready, tell me
and I'll whitelist only Interakt's domain in netlify.toml — that keeps the
protection while allowing your widget. Don't paste third-party widget code
without updating CSP; it will (correctly) refuse to load.
