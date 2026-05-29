# Homefor NYC

Homefor NYC is a React UI shell for a free, map-based web app that connects New Yorkers to city programs, nonprofits, and community services across all five boroughs.

## Current routes

- `/` — full-screen hero with the reusable Homefor nyc wordmark, tagline pill, description, and primary actions.
- `/get-started` — audience selection page for residents, caseworkers, organizations, and volunteers.
- `/map`, `/intake`, and `/list-org` — placeholder routes that keep navigation in React Router while future screens are designed.

## Run locally

This shell uses React and React Router from ESM CDNs, so no install step is required for the current prototype. The local server falls back to `index.html` so React Router paths can be opened directly.

```bash
python3 server.py
```

Open <http://localhost:4173>.
