# TownNet N.Y.C.

TownNet N.Y.C. is a React UI shell for a free, map-based web app that connects New Yorkers to city programs, nonprofits, and community services across all five boroughs.

## Current routes

- `/` — full-screen gradient hero with the reusable sticker-style TownNet N.Y.C. wordmark, white content card, description, and primary actions.
- `/get-started` — audience selection page for residents, caseworkers, organizations, and volunteers with category-colored audience cards.
- `/map` — responsive map page shell with search, ZIP input, Tabler-icon category filters, a green-tile map placeholder, and sample program cards.
- `/program` — sample BronxWorks Food Pantry detail page with badges, service details, and a next-step action.
- `/list-org` — nonprofit self-listing form for verified nonprofits and community organizations.
- `/intake` — placeholder route that keeps navigation in React Router while future screens are designed.

## Run locally

This shell uses React and React Router from ESM CDNs, so no install step is required for the current prototype. The local server falls back to `index.html` so React Router paths can be opened directly.

```bash
python3 server.py
```

Open <http://localhost:4173>.

## GitHub Pages deployment

There is no build step right now. GitHub Pages can serve the React app directly from the repository root on the `main` branch:

- `index.html` loads the React entry at `./src/main.js` and the stylesheet at `./src/styles.css` with relative paths so the project works under the repository project path.
- `src/main.js` automatically detects the repository path as the React Router basename when hosted on GitHub Pages.
- `404.html` mirrors the app shell for direct links to client-side routes on GitHub Pages.
- `.nojekyll` keeps GitHub Pages from applying Jekyll processing to the static files.

In the repository settings, set Pages to deploy from **Deploy from a branch**, using the `main` branch and the `/ (root)` folder.
