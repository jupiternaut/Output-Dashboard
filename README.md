# Output Dashboard

This repository contains a nested React and Vite application for a construction operations dashboard. The runnable app is not at the repository root; it is in `dashboard-project`.

## Current Status

- Status: nested frontend dashboard app.
- Branch: `main`.
- Runnable app path: `dashboard-project`.
- Root package: none. Do not run `npm install` from the repository root.
- Data source: generated demo data by default; optional CSV, XLS, or XLSX upload in the browser.

## Repository Layout

```text
Output-Dashboard/
├── README.md
└── dashboard-project/
    ├── package.json
    ├── vite.config.ts
    ├── src/
    └── README.md
```

The root README exists to route readers and tools to the nested app. If you only read this file, the next step is to enter `dashboard-project`.

## Dependencies

- Node.js 18 or later. Node.js 20 or later is recommended.
- npm.

The nested application uses:

- React 18
- React DOM 18
- Recharts
- Lucide React
- PapaParse
- XLSX
- Vite
- TypeScript

## Build and Run From a Fresh Clone

```bash
git clone https://github.com/jupiternaut/Output-Dashboard.git
cd Output-Dashboard/dashboard-project
npm install
npm run dev
```

Open the URL printed by Vite. The configured default is `http://localhost:3000` unless that port is already in use.

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Test

There is no automated test suite in the root repository or nested app. For a smoke test:

1. Run the app from `dashboard-project`.
2. Confirm the dashboard loads with demo data.
3. Change city, store, and month filters.
4. Import a CSV, XLS, or XLSX file and confirm the metrics and charts update.

## UI and Data Boundaries

- This is a browser dashboard, not a full operations platform.
- The app has no backend, authentication, database, or server-side file processing.
- Demo data is generated in the nested app source and is not a production dataset.
- Imported spreadsheet files are parsed locally in the browser.
- No Gemini key, AI Studio setup, or external AI service is required.

## Screenshots

No screenshot is currently checked in. Suggested placeholder path for future documentation:

```text
dashboard-project/docs/screenshots/output-dashboard-overview.png
```

## Issues and Contributions

Use GitHub Issues for setup problems, incorrect data-format documentation, or nested-app routing problems. Pull requests should keep root documentation aligned with the `dashboard-project` app.
