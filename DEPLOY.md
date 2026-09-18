# Publishing this site to GitHub Pages

Target address: `https://alejvcano.github.io`

The site is already configured for this:

- `vite.config.ts` builds with base path `/` (the repo is a user Pages site, served at the root).
  variable is set (and `/` otherwise, so the Lovable preview keeps working).
- `src/App.tsx` gives React Router the same base path automatically.
- `bun run deploy` builds for GitHub Pages, adds a `404.html` fallback, and publishes the
  result to the `gh-pages` branch with a `.nojekyll` marker.

The repository is named `alejvcano.github.io`, so Pages serves it at the root:
`<username>.github.io/<repo-name>`.

---

## 0. Prerequisites (on your own computer)

| Tool | Check | Notes |
| --- | --- | --- |
| Git | `git --version` | Windows: use Git Bash or WSL (the deploy script uses `cp` and inline env vars). |
| Bun (or Node 18+) | `bun --version` | `npm` works too — replace `bun` with `npm run`. |
| GitHub account | — | Keep the repository **public**; GitHub Pages from a private repo needs a paid plan. |

---

## 1. Get the code out of Lovable

Lovable's GitHub integration always **creates a new repository**; it cannot import the
`alejvcano/alejvcano.github.io` repo you already made. So either:

**Option A — download and push yourself (recommended, gives you the exact repo name)**

1. Open the project in Lovable.
2. Code editor → **Download codebase** at the bottom of the file-tree sidebar
   (also available under Project settings → Git).
3. Unzip it somewhere sensible.

**Option B — let Lovable sync, then rename**

1. Project settings → Git → GitHub → connect (Lovable creates a new private repo).
2. On GitHub, rename that repository to `alejvcano.github.io` (Settings → General → Repository name).
3. The Pages address becomes `alejvcano.github.io`, and `vite.config.ts` already
   points at `/`, so nothing else needs to change.

---

## 2. Push the code to `alejvcano/alejvcano.github.io`

```sh
unzip website.zip -d website
cd website

git init
git add .
git commit -m "Initial commit: personal research website"
git branch -M main

git remote add origin https://github.com/alejvcano/alejvcano.github.io.git
git push -u origin main
```

`.gitignore` already keeps `node_modules/`, `dist/` and the 66 MB `tailwind-plus/`
design-reference folder out of the repository.

**If `git push` asks for a password:** GitHub does not accept account passwords over HTTPS.
Either sign in through the browser prompt that Git Credential Manager shows, or create a
Personal Access Token at <https://github.com/settings/tokens> (classic token, `repo` scope)
and paste it as the password. Alternatively switch to SSH:

```sh
git remote set-url origin git@github.com:alejvcano/alejvcano.github.io.git
```

---

## 3. Publish the site

```sh
bun install
bun run deploy
```

This does three things in order:

1. `GITHUB_PAGES=1 vite build` — production build with root asset paths.
2. `cp dist/index.html dist/404.html` — makes deep links and page refreshes work
   (GitHub Pages has no SPA rewrite).
3. `gh-pages -d dist --nojekyll` — pushes `dist/` to an orphan `gh-pages` branch and marks
   the site as not-Jekyll.

Expected output ends with something like `Published`.

---

## 4. Turn Pages on

GitHub Pages does not serve the `gh-pages` branch until you tell it to:

1. Repo → **Settings** → **Pages** (left sidebar).
2. **Build and deployment → Source**: `Deploy from a branch`.
3. **Branch**: `gh-pages` / `gh-pages branch root directory` → **Save**.
4. Wait ~1 minute, then open <https://alejvcano.github.io>.

If `gh-pages` is not in the branch dropdown, step 3 has not run successfully yet.

---

## 5. After every change

Changes made in Lovable are committed to Lovable's own repository, not to GitHub. So the
loop is:

```sh
cd website
git pull                      # if you sync from GitHub
bun run deploy
```

The published site updates about a minute later. Only the `gh-pages` branch matters for
what visitors see.

---

## Troubleshooting

| Symptom | Cause / fix |
| --- | --- |
| Blank white page | Built without the Pages base path. Always use `bun run deploy`, never `bun run build` before publishing. |
| CSS and images 404, page looks unstyled | Same as above — assets must resolve under `/`. |
| 404 when refreshing `/portfolio` | The `404.html` fallback is missing from the `gh-pages` branch. Re-run `bun run deploy`. |
| `git checkout` / permission errors during deploy | `gh-pages` cannot run inside the Lovable sandbox. Run it from a local clone. |
| `gh-pages` branch missing | `bun run deploy` did not finish; check the terminal for an auth failure. |
| Pages says "site not found" | Pages source not set to `gh-pages` / root, or the repo is private on a free plan. |
| Wrong URL, e.g. `/blank-canvas-start-3586` | The repository name is wrong — rename it to `alejvcano.github.io` and update `homepage` in `package.json` plus the base path in `vite.config.ts`. |
| `cp: command not found` | Windows PowerShell. Use Git Bash / WSL, or split the script into `vite build` then copy manually. |

---

## Optional extras

- **Custom domain:** buy it, then repo → Settings → Pages → **Custom domain**, and add the
  DNS records GitHub shows. Also update `homepage` in `package.json` and the base path in
  `vite.config.ts` (a custom domain root needs base `/`).
- **Automatic deploys:** add `.github/workflows/deploy.yml` that runs the build on every
  push to `main` and deploys with `actions/deploy-pages`. Not needed while you publish
  manually.
