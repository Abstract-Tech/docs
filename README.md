# Abstract Technology Docs

Public documentation for Abstract Technology services, published at <https://docs.abstract-technology.de>.

## Development

```bash
pnpm install
pnpm start   # local dev server
pnpm build   # production build into ./build
```

Pages live in `docs/`. Each folder is a section in the sidebar. Merging to `main` publishes the site via GitHub Actions.

## Adding a service

1. Create `docs/<service>/` with an `overview.md` (the sidebar builds itself from folders).
2. Add it to the **Services** dropdown in `docusaurus.config.js` (`navbar.items`).
3. Add a card on the home page (`src/pages/index.js`) and a link in the footer (`src/theme/Footer/index.js`).

Restart `pnpm start` after changing the config, and run `pnpm clear` first if you added a plugin.
