# Derrick Gunawan — Portfolio

Single-page portfolio for a Computer Science & Applied Mathematics undergraduate at BINUS University.

## Technologies
React 18, TypeScript, Vite 5, Tailwind CSS 3.

## Requirements
Only free, open-source tools are needed: [Node.js](https://nodejs.org) 18 or newer (includes npm) and any ZIP extractor (built into Windows, macOS and Linux). No accounts or paid software.

`node_modules/` is intentionally not bundled — it contains OS-specific binaries. `npm install` recreates it for your machine.

## Install
```bash
npm install
```
## Development
```bash
npm run dev
```
## Production build
```bash
npm run build     # outputs to dist/
npm run preview   # serve the build locally
```
## Deploy
The `dist/` folder produced by `npm run build` is plain static HTML/CSS/JS and can be hosted anywhere (Netlify, GitHub Pages, Cloudflare Pages, Vercel, or any web server).

### Example: Vercel
1. Push this folder to GitHub.
2. On vercel.com choose **Add New → Project** and import the repo.
3. Vercel auto-detects Vite (build `npm run build`, output `dist`). Click **Deploy**.

## Editing content
All content lives in `src/data/content.ts`:
- **Projects** — edit the `projects` array (each project has `title`, `category`, `description`, `technologies` and a `link` opened by the "Visit Project" button).
- **Experience** — edit `experience` (organizations with nested `roles`; set `logo` to e.g. `/logos/bnec.png`).
- **Skills** — edit `skillGroups`.
- **Contact / profile / resume** — edit `profile` (set `resume` to `/resume.pdf` after adding it to `public/`).
- **Certificate** — replace `public/images/certificate-bnec.png` (path is set on the role in `experience`).
- **Profile photo** — replace `public/images/profile.png`.
- **Education** — edit `education` (fill in expected graduation).
