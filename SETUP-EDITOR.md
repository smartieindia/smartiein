# One-Time Setup: Your Website Editor (20 minutes)

After this, you edit and publish everything at smartie.in/admin — like a website builder.
No more ZIP files.

## Part A — Put the site on GitHub (free)
1. Go to https://github.com → Sign up (or log in) → click "+" (top right) → New repository
2. Name: smartie-website → Private → Create repository
3. On the repo page click "uploading an existing file" → drag ALL files/folders
   from this ZIP (not the zip itself) → Commit changes
   (If the drag misses folders, use GitHub Desktop app instead — it uploads folders perfectly.)

## Part B — Connect Netlify to GitHub
4. https://app.netlify.com → Add new site → Import an existing project → GitHub
5. Pick smartie-website → Build command: (leave empty) → Publish directory: .  → Deploy
6. Your domain settings from the old site carry over if you use the same Netlify site;
   otherwise re-add smartie.in in Domain settings.
   ➜ From now on, ANY change committed to GitHub publishes automatically in ~40 seconds.

## Part C — Turn on the editor login
7. Netlify → your site → Integrations (or Site configuration) → Identity → Enable Identity
8. Identity → Registration → set to "Invite only"
9. Identity → Services → Enable Git Gateway
10. Identity → Invite users → enter info@smartie.in → open the email → set your password

## Done — daily use
- Open https://www.smartie.in/admin → log in
- 🛒 Shop Products: add/edit/delete products, upload product photos from your computer, set prices & Razorpay links → Publish
- 🎨 Site Settings: theme colour, announcement bar, hero images (upload from computer), YouTube videos, client logos (logo + name) → Publish
- Every Publish = live site updates itself.

## Changing page text / links / design beyond the editor
Open your GitHub repo → tap any file (e.g. index.html) → pencil icon → edit → Commit.
Site republishes automatically. Or simply ask me — send me the current ZIP or text and
I return updated files; you drag them into GitHub.

Passcode page /sie-admin-x8080.html still works as a backup generator, but /admin is your main editor now.
