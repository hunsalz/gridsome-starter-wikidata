# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run develop          # Dev server at http://localhost:8080
npm run build            # Production build to dist/
npm test                 # Run Jest tests
npm run test:watch       # Jest in watch mode
npm run test:coverage    # Jest with coverage report
npm run lint             # ESLint on src/
npm run lint:fix         # ESLint with auto-fix
npm run format           # Prettier on src/**/*.{js,vue,scss}
npm run format:check     # Check formatting without writing
npm run check:all        # format:check + lint + test + build
npm run explore          # Open GraphQL explorer at http://localhost:8080/___explore
npm run deploy           # Deploy to GitHub Pages (dist/ → gh-pages branch)
```

Changes to `gridsome.config.js` require restarting the dev server (Ctrl+C, then `yarn develop`).

## Architecture

This is a **Gridsome 0.7.23** (Vue.js 2.x) static site that fetches Leonardo da Vinci paintings from Wikidata at build time and generates a PWA gallery.

### Data Flow

```
Wikidata SPARQL endpoint
  → gridsome-source-wikidata plugin (gridsome.config.js)
      – 7-day cache, 150 MB max image size, downloads images to content/images/
  → Gridsome auto-generates GraphQL schema ("Painting" type)
  → pages/Index.vue  (allPainting query, masonry grid + tag filtering)
  → templates/Painting.vue  (individual painting at /:item route)
  → dist/  (static HTML + assets)
```

The SPARQL query lives directly in `gridsome.config.js` under the `gridsome-source-wikidata` plugin options. Modifying it changes which paintings are fetched.

### Component Communication

Inter-component state flows through an **event bus** (`src/components/js/Event.js`), not Vuex. Event constants:

- `ADD_TAG` / `REMOVE_TAG` — tag cloud filtering
- `TOGGLE_FAVORITE` — persist to localStorage
- `TOGGLE_VIEW` — switch between Dashboard and Favorites views

### Key Files

| File | Purpose |
|------|---------|
| `gridsome.config.js` | Site config, SPARQL query, plugin options |
| `src/main.js` | App entry point; registers global components and event bus |
| `src/pages/Index.vue` | Home page with masonry grid, tag filtering, view toggle |
| `src/templates/Painting.vue` | Per-painting detail page |
| `src/layouts/Default.vue` | Shared layout (header, footer) |
| `src/components/CardLayout.vue` | Painting card (image, meta, tags) |
| `src/components/TagCloud.vue` | Tag filter UI |
| `src/utils/security.js` | URL sanitization, XSS prevention helpers |
| `netlify.toml` | Netlify build config + CSP/cache headers |

### Environment Variables

Copy `.env.example` to `.env` and set:

```
SITE_URL=https://your-domain.com
PATH_PREFIX=/optional-subpath
```

Both are used in `gridsome.config.js` for sitemap generation and the PWA manifest `startUrl`.

### Styling

SCSS with CSS custom properties and BEM methodology. Global variables are in `src/assets/style/`. Dark/light theme is toggled via a CSS class on `<html>` and persisted in localStorage.

### Testing

Jest with `@vue/test-utils` v1 (Vue 2 compatible). Test files live in `src/components/__tests__/`. The setup file (`jest.setup.js`) mocks Gridsome's `<g-image>` and `<g-link>` globals.

### Performance Patterns

- **Masonry layout**: pure CSS Grid + ResizeObserver with debounced resize (150 ms)
- **Images**: Gridsome `<g-image>` handles responsive srcsets, lazy loading, and blur-up
- **LCP**: preload link injected in `metaInfo` of Index.vue
- **Web Vitals**: collected via `requestIdleCallback` in `src/utils/web-vitals.js`
- **content-visibility: auto** on cards to skip off-screen rendering
