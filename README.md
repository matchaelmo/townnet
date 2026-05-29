# Homefor NYC

Homefor NYC is a React UI shell for a free, map-based web app that connects New Yorkers to city programs, nonprofits, and community services across all five boroughs.

## Current routes

- `/` — full-screen gradient hero with the reusable Homefor nyc wordmark, white content card, description, and primary actions.
- `/` — full-screen hero with the reusable Homefor nyc wordmark, tagline pill, description, and primary actions.
- `/get-started` — audience selection page for residents, caseworkers, organizations, and volunteers.
- `/map`, `/intake`, and `/list-org` — placeholder routes that keep navigation in React Router while future screens are designed.

## Run locally

This shell uses React and React Router from ESM CDNs, so no install step is required for the current prototype. The local server falls back to `index.html` so React Router paths can be opened directly.

```bash
python3 server.py
```

Open <http://localhost:4173>.

## GitHub Pages deployment

There is no build step right now. GitHub Pages can serve the React app directly from the repository root on the `main` branch:

- `index.html` loads the React entry at `./src/main.js` and the stylesheet at `./src/styles.css` with relative paths so the project works under `https://matchaelmo.github.io/homefor/`.
- `src/main.js` automatically uses `/homefor` as the React Router basename when hosted on GitHub Pages.
- `404.html` mirrors the app shell for direct links to client-side routes on GitHub Pages.
- `.nojekyll` keeps GitHub Pages from applying Jekyll processing to the static files.

In the repository settings, set Pages to deploy from **Deploy from a branch**, using the `main` branch and the `/ (root)` folder.
Homefor NYC is a prototype for a free, map-based web app that connects New Yorkers to city programs, nonprofits, and community services across all five boroughs.

The landing page demonstrates the core experience:

- residents enter a ZIP code and plain-language need;
- programs appear as ranked cards and map pins;
- eight service categories organize results: food, health, seniors, youth and families, jobs and workforce, housing, legal aid, and volunteer and civic;
- ServiceRadar explains AI-assisted matching across eligibility, proximity, urgency, and data quality;
- nonprofits can understand the self-listing and verification flow.

## Run locally

Because this prototype uses plain HTML, CSS, and JavaScript, no install step is required.

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.
