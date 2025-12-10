# daniel

Next.js 14 (App Router) + Tailwind CSS website.

## Develop

```powershell
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to GitHub Pages

This repo is configured to deploy to GitHub Pages on each push to `main`.

Details:
- Static export via `next export` outputs to `out/`.
- Workflow `.github/workflows/deploy.yml` uploads `out/` and deploys using GitHub Pages.
- `next.config.js` sets `output: 'export'` and, in production, `basePath` and `assetPrefix` to `/daniel` for repo-based Pages.

Manual run:
```powershell
npm run build
npm run export
```
The static site will be in `out/`.

Published URL: `https://lucasswed.github.io/daniel`

