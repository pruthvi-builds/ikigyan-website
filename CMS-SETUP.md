# Ikigyan Content Manager (CMS) — setup & handover

The site content lives as plain JSON files in **`/content`**. A web editor
([Sveltia CMS](https://github.com/sveltia/sveltia-cms) — open source, free
forever) lets non-technical people edit those files without touching code.

```
Editor writes  ─▶  commit to GitHub (main)  ─▶  Netlify rebuilds  ─▶  live site
```

No database. No paid service. No monthly cost. If the CMS project ever
disappeared, the site keeps working — you would just edit the JSON files
directly on GitHub.

---

## What editors can change

| Area | File(s) | In the editor |
|---|---|---|
| Phone / WhatsApp / email / footer | `content/site.json` | **Site & Contact** |
| Hero carousel slides | `content/hero.json` | **Homepage ▸ Hero carousel** |
| Homepage section headings & copy | `content/pages/home.json` | **Homepage ▸ Homepage section copy** |
| Books (add / edit / remove titles) | `content/books.json` | **Books** |
| Watch shelf videos | `content/videos.json` | **Watch shelf (videos)** |
| FAQ questions & answers | `content/faqs.json` | **FAQ** |
| The 5 pillars / categories | `content/pillars.json`, `content/categories.json` | **Explore page** |
| 26-week programme steps & inclusions | `content/programme.json` | **Schools page** |
| Parents section | `content/parents.json` | **Parents section** |
| Page intros (Explore / Schools / Watch / Books / FAQ) | `content/pages/*.json` | the matching page entry |
| Learning method + weekly cards | `content/method.json`, `content/weekly.json` | **Method & weekly cards** |
| Images | uploaded into `public/illustrations` | any image field |

---

## One-time setup (≈ 10 minutes, needs the repo owner's GitHub account)

### 1. Create a GitHub OAuth app

1. GitHub → **Settings ▸ Developer settings ▸ OAuth Apps ▸ New OAuth App**
   (or org settings if the repo is under an org).
2. Fill in:
   - **Application name:** `Ikigyan CMS`
   - **Homepage URL:** `https://ikigyan.com` (or your custom domain)
   - **Authorization callback URL:** `https://ikigyan.com/oauth/callback`
     *(must match the site domain exactly; update later if the domain changes)*
3. **Register application**, then **Generate a new client secret**.
4. Keep the **Client ID** and **Client secret** handy.

### 2. Add them to Netlify

Netlify → your site → **Site configuration ▸ Environment variables ▸ Add**:

| Key | Value |
|---|---|
| `OAUTH_GITHUB_CLIENT_ID` | the Client ID from step 1 |
| `OAUTH_GITHUB_CLIENT_SECRET` | the Client secret from step 1 |

Then **Deploys ▸ Trigger deploy ▸ Deploy site** so the functions pick up the vars.

### 3. Give editors access

Anyone who should edit the site needs **write access to this GitHub repo**
(`pruthvi-builds/ikigyan-website` → Settings ▸ Collaborators). That is the only
account they need — no separate CMS login.

### 4. Done

Editors go to **`https://ikigyan.com/admin/`**, click **Sign in with
GitHub**, and start editing. Saving publishes automatically.

> If you switch to a custom domain later, update three things to the new domain:
> `base_url` in `public/admin/config.yml`, the two URLs in the GitHub OAuth app,
> and (if set) `site_url` / `display_url` in the same config file.

---

## Editing locally (optional, for developers)

```bash
npm install
npm run dev                     # terminal 1  → http://localhost:3000
npx @sveltia/cms-proxy-server   # terminal 2  (enables local_backend)
# open http://localhost:3000/admin/  — no GitHub login needed, edits write to disk
```

---

## Notes / gotchas

- **Hero slide 1's "Order on WhatsApp" link** contains the WhatsApp number
  directly (`content/hero.json` → `secondaryHref`). If the number in
  **Site & Contact** changes, update that slide link too.
- **Heading highlight:** several headings have a plain-text field plus a
  "highlight" field. The highlight text must match a piece of the heading
  *exactly* (including punctuation) to be coloured; leave it blank for no colour.
- **Images** are committed into the repo under `public/illustrations`. Keep them
  reasonably sized (< ~500 KB) so the repo stays small.
- **Adding a book:** Books ▸ add an item to the list. Give it a unique lowercase
  `slug`. The homepage always features the **first** book in the list.
- Builds take ~1–2 minutes on Netlify after a save; the change is live once the
  deploy finishes.
