# SMARTIE v9 — Perfect Photos Guide

The design no longer depends on photo quality: every image renders inside a uniform
"engineering plate" frame (fixed crop, gradient, corner ticks, caption). If any image
is missing, the page automatically shows branded shutter artwork — nothing ever looks broken.

But for a truly premium look, load these exact filenames into /images/:

## Required filenames

| File | Used on | Ideal shot |
|---|---|---|
| logo.jpg | Header, footer | Your official SIE logo (white background) |
| og-cover.jpg | WhatsApp/Google share preview | 1200×630 — best installation photo + logo |
| hero-1.jpg … hero-6.jpg | Home cinematic slideshow + About/Contact/Catalogs heroes | Wide, dramatic installation shots (min 1920px wide) |
| rolling-shutters-1/2/3.jpg | Rolling shutters page + home card | Shutter closed at dusk, transparent shutter with lit display, install team |
| high-speed-doors-1/2/3.jpg | High-speed doors | Rapid door mid-motion, cold-room doorway, control panel |
| garage-sectional-doors-1/2/3.jpg | Garage & sectional | Villa garage door, industrial sectional dock, opener unit |
| gates-1/2/3.jpg | Gates | Swing gate villa, sliding gate factory, motor close-up |
| automatic-doors-1/2/3.jpg | Automatic doors | Glass sliding door lobby, hospital hermetic door |
| folding-doors-1/2/3.jpg | Folding doors | Transparent PC folding door open/closed, café bi-fold |
| barriers-1/2/3.jpg | Barriers | Boom barrier at gate, UHF reader, road blocker |
| dock-levelers-1/2/3.jpg | Dock equipment | Truck at leveler, dock shelter, scissor lift |
| pergola-and-roofing-1/2/3.jpg | Pergolas | Louvered pergola evening, zip screen, retractable roof |
| cold-storage-doors-1/2/3.jpg | Cold storage | Sliding cold room door, freezer corridor |
| industrial-sliding-doors-1/2/3.jpg | Industrial sliding | Wide sliding door, hangar, track detail |
| fire-rated-doors-1/2/3.jpg | Fire-rated | SS-304 door, clean-room corridor, panic hardware |
| turnstiles-access-control-1/2/3.jpg | Turnstiles | Flap barrier lobby, tripod line, full-height |
| automation-motors-1/2/3.jpg | Motors & spares | Motor family shot, control board, remotes/accessories |

Tip: your v8 site's /images folder can be copied straight in — just rename files to match
the table above. JPG, ~1600px wide, under 300 KB each (use tinypng.com to compress).

## Where to get "perfect" photos legally

1. **Your own installations (best for SEO + trust).** One evening with a phone on a tripod at
   3–4 recent sites beats any stock. Shoot at golden hour, straight-on, clean the frame.
2. **Free commercial-license stock** — allowed for business websites, no credit required:
   - https://www.pexels.com/search/industrial%20door/
   - https://www.pexels.com/search/warehouse%20loading%20dock/
   - https://unsplash.com/s/photos/automatic-gate
   - https://unsplash.com/s/photos/garage-door
   - https://unsplash.com/s/photos/turnstile
   - https://www.pexels.com/search/pergola/
3. **Your supplier/OEM media kits** — most motor and door OEMs allow dealers to use official
   product renders; ask for their press/media folder.
4. **Do not** copy photos from Pinterest, Instagram, Google Images, or competitor sites
   (Gandhi, Toshi, Nice, Allmatic, Kumahira) — those are copyrighted.

## Changing hero images later — no coding

Open /sie-admin-x8080.html (passcode SIE@8080) → paste image paths/URLs into the 23 hero
slots → Generate → copy JSON → replace the contents of settings.json in your deploy.
The live site picks it up instantly on next load.

## Your Google Drive photos → exact mapping (verified SMARTIE-branded)

Download each from Drive, rename, and drop into /images/ (2 minutes):

| Drive file | Rename to |
|---|---|
| SMARTIE Retractable gate Header.jpg | hero-1.jpg (also great as gates-1.jpg) |
| RETRACTABLE GATE MOTOR- SMARTIE.jpg | automation-motors-1.jpg |
| Automation assembly for retractable gate smartie.in.jpg | automation-motors-2.jpg |
| WHEEL DRIVE FOR RETRACTABLE GATE SMARTIE.IN.jpg | gates-2.jpg |
| roller smartie.jpg | rolling-shutters-1.jpg |
| double GI smartie make.jpeg | rolling-shutters-2.jpg |
| Alumium Double wall Curve slats.jpeg | rolling-shutters-3.jpg |
| zip roller smarties.jpg | pergola-and-roofing-1.jpg |
| zip screen fabric.png | convert to JPG → pergola-and-roofing-2.jpg |
| roller screen.jpg | pergola-and-roofing-3.jpg |
| logo sie.jpeg | logo.jpg |

SKIP these Drive files — they are third-party stock/watermarked, not yours to publish:
roller-door-shutter-called-security-260nw-*.webp (Shutterstock preview),
motorized-rolling-shutter-1000x1000.webp and 40247744_*.jpg (marketplace images).
