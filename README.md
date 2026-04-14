# Gridsome Starter Wikidata

[![Actions Status](https://github.com/hunsalz/gridsome-starter-wikidata/workflows/Gridsome%20CI-CD/badge.svg)](https://github.com/hunsalz/gridsome-starter-wikidata/actions)
[![License](https://img.shields.io/badge/license-MIT%20License-blue.svg)](http://doge.mit-license.org)
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
[![GitHub forks](https://img.shields.io/github/forks/hunsalz/gridsome-starter-wikidata.svg)](https://github.com/hunsalz/gridsome-starter-wikidata/network)
[![GitHub stars](https://img.shields.io/github/stars/hunsalz/gridsome-starter-wikidata.svg)](https://github.com/hunsalz/gridsome-starter-wikidata/stargazers)

A modern, feature-rich Gridsome starter showcasing how to build beautiful, performant static sites by integrating external data sources like [Wikidata](https://www.wikidata.org). Perfect for creating content galleries, museums, archives, and data-driven websites.

## Table of Contents

- [Quick Links](#-quick-links)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [Development](#-development)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [Troubleshooting](#-troubleshooting)

## 🔗 Quick Links

- **Live Demo**: [https://hunsalz.github.io/gridsome-starter-wikidata](https://hunsalz.github.io/gridsome-starter-wikidata)
- **Wikidata**: https://www.wikidata.org
- **Gridsome Docs**: https://gridsome.org
- **Vue.js Docs**: https://vuejs.org

## ✨ Features

- 🎨 **Wikidata Integration** - Connect any Wikidata dataset via SPARQL queries
- 📥 **Media Downloads** - Download external media data automatically
- 🏗️ **Masonry Grid Layout** - Beautiful, responsive waterfall/masonry grid
- 🏷️ **Tagging System** - Advanced filtering and tag-based navigation
- ⭐ **Favorites** - Client-side favorites with localStorage persistence
- 🌓 **Dark/Light Mode** - Theme switching with system preference detection
- 📱 **PWA Support** - Progressive Web App capabilities with service worker
- 🚀 **CI/CD Pipeline** - GitHub Actions for automated builds and GitHub Pages deployment
- 🧪 **Testing** - Jest + Vue Test Utils with component tests
- ♿ **Accessibility** - ARIA labels, semantic HTML, and accessibility best practices
- 📊 **Web Vitals** - Core Web Vitals tracking and monitoring
- 🔒 **Security** - CSP headers, URL validation, and sanitization

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.18.0 or higher
- **npm** (Node Package Manager)

### Installation

1. **Install Gridsome CLI** (optional):
   ```bash
   npm install --global @gridsome/cli
   ```

2. **Clone this repository**:
   ```bash
   git clone https://github.com/hunsalz/gridsome-starter-wikidata.git my-site
   cd my-site
   ```

   Or use Gridsome to create from this starter:
   ```bash
   gridsome create my-site https://github.com/hunsalz/gridsome-starter-wikidata.git
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run develop
   ```
   Visit `http://localhost:8080` to see your site.

5. **Explore the GraphQL schema** (optional):
   ```bash
   npm run explore
   ```
   Opens a GraphQL playground at `http://localhost:8080/___explore`

## 📁 Project Structure

```
gridsome-starter-wikidata/
├── src/
│   ├── assets/
│   │   ├── images/                 # Image assets
│   │   └── style/
│   │       ├── _variables.scss     # CSS variables and theme
│   │       ├── _base.scss          # Base styles
│   │       └── index.scss          # Main stylesheet
│   ├── components/
│   │   ├── ActionBar.vue           # Favorite, link, download buttons
│   │   ├── CardLayout.vue          # Painting card component
│   │   ├── TagCloud.vue            # Tag filtering UI
│   │   ├── ToggleTheme.vue         # Dark/light theme toggle
│   │   ├── ToggleView.vue          # View mode toggle
│   │   ├── ErrorBoundary.vue       # Error handling
│   │   ├── __tests__/              # Component tests
│   │   └── js/
│   │       ├── Event.js            # Event bus constants
│   │       └── View.js             # View type constants
│   ├── layouts/
│   │   └── Default.vue             # Main layout (header, footer, slots)
│   ├── pages/
│   │   └── Index.vue               # Home page with masonry grid
│   ├── templates/
│   │   └── Painting.vue            # Individual item detail page
│   ├── utils/
│   │   ├── security.js             # URL validation, sanitization
│   │   └── web-vitals.js           # Core Web Vitals tracking
│   ├── index.html                  # HTML template
│   └── main.js                     # Vue app entry point
├── static/                         # Static files (robots.txt, etc.)
├── scripts/
│   └── test-checklist.js           # Automated testing checklist
├── gridsome.config.js              # Gridsome config, SPARQL query, plugins
├── gridsome.server.js              # Server-side hooks (if needed)
├── CLAUDE.md                       # Architecture guide (Claude Code)
└── package.json                    # Dependencies and scripts
```

## 🏗️ Architecture

### Technology Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Gridsome 0.7.23 (Vue.js 2.x) |
| **Styling** | SCSS + CSS Custom Properties |
| **Data Source** | Wikidata (SPARQL queries) |
| **Build Tool** | Webpack (via Gridsome) |
| **Testing** | Jest + Vue Test Utils |
| **Linting** | ESLint 9 (flat config) |
| **Formatting** | Prettier 3 |

### Data Flow

```
Wikidata SPARQL endpoint
    ↓
gridsome-source-wikidata plugin (7-day cache)
    ↓
GraphQL schema auto-generated (allPainting, painting)
    ↓
pages/Index.vue (masonry grid) & templates/Painting.vue (detail)
    ↓
Static HTML + assets in dist/
```

**Key Points:**
- Data is fetched at **build time**, not runtime
- SPARQL query defined in `gridsome.config.js`
- Images automatically downloaded and optimized
- GraphQL layer enables flexible queries

### Component Communication

Uses Vue's **event bus pattern** (not Vuex) for inter-component state:

| Event | Purpose |
|-------|---------|
| `ADD_TAG` / `REMOVE_TAG` | Filtering by tags |
| `TOGGLE_FAVORITE` | Mark/unmark favorites |
| `TOGGLE_VIEW` | Switch between Dashboard/Favorites views |

Favorites are persisted to `localStorage` with error handling for corrupted data.

### Layout Architecture

```
Default.vue (Layout)
├── Header (fixed)
│   ├── BackLink (detail page only)
│   ├── ToggleView (home page only)
│   └── ToggleTheme
├── <slot> (Page/Template content)
└── Footer
```

### Styling System

- **CSS Variables**: Theme colors, spacing, sizes defined in `_variables.scss`
- **BEM Methodology**: All classes follow Block-Element-Modifier convention
- **Responsive**: Mobile-first design with media queries
- **Dark Mode**: Toggled via CSS class on `<html>`

### Performance Optimizations

| Technique | Implementation |
|-----------|----------------|
| **Image Optimization** | Gridsome `<g-image>` with lazy loading and responsive srcsets |
| **Code Splitting** | Automatic route-based splitting by Gridsome |
| **Debouncing** | Resize handlers debounced (150ms) to prevent thrashing |
| **Caching** | 7-day Wikidata cache + service worker for PWA |
| **LCP Optimization** | First card uses `loading="eager"` and `fetchpriority="high"` |
| **Content Visibility** | Cards use `content-visibility: auto` to skip off-screen rendering |

## 🛠️ Development

### Available Commands

```bash
# Development
npm run develop       # Start dev server (http://localhost:8080)
npm run build         # Build for production
npm run explore       # Open GraphQL explorer

# Testing & Quality
npm test              # Run unit tests (Jest)
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Generate coverage report
npm run lint          # Check for linting errors
npm run lint:fix      # Auto-fix linting errors
npm run format        # Format code with Prettier
npm run format:check  # Check formatting (no changes)
npm run check:all     # Run all checks (format, lint, test, build)

# Deployment
npm run deploy        # Deploy to GitHub Pages
npm run verify        # Run automated test checklist
```

### Environment Variables

Create a `.env` file in the root directory (see `.env.example`):

```env
SITE_URL=http://localhost:8080      # Base URL for sitemap and PWA
PATH_PREFIX=                         # Optional path prefix (e.g., /my-subpath)
```

### Local Build Verification

Test your build locally with Docker:

```bash
npm run build

# For root path:
docker run --rm -p 8080:80 \
  -v ${PWD}/dist:/usr/share/nginx/html:ro \
  nginx:latest

# For path prefix (e.g., /gridsome-starter-wikidata):
docker run --rm -p 8080:80 \
  -v ${PWD}/dist:/usr/share/nginx/html/gridsome-starter-wikidata:ro \
  nginx:latest
```

Visit `http://localhost:8080` and verify all links and assets work correctly.

## 🚀 Deployment

### Build Process

1. **Data Collection** - Fetch from Wikidata via SPARQL query
2. **GraphQL Schema** - Gridsome auto-generates from data
3. **Page Generation** - Create static HTML pages
4. **Asset Processing** - Optimize images, compile SCSS
5. **PWA Assets** - Generate manifest and service worker

### GitHub Pages

The project includes GitHub Actions for automatic deployment:

- **Automatic Builds**: On every push
- **Skip CI**: Add `skip ci` to commit message to skip a build
- **Deployment**: Automatic to GitHub Pages (requires `GH_TOKEN` secret)

**Setup Instructions:**

1. Create a Personal Access Token on GitHub:
   - Visit https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select `repo` scope
   - Copy the token

2. Add as repository secret:
   - Go to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - **Name**: `GH_TOKEN`
   - **Value**: Paste your token

3. Update `.github/workflows/nodejs.yml` with your GitHub Pages URL:
   - Change `SITE_URL: https://hunsalz.github.io` to your domain

### Static Hosting Alternatives

The `dist/` folder contains production-ready static files. Deploy to:
- **Netlify** - Drag & drop or connect to Git
- **Vercel** - Git-based deployment
- **AWS S3** - Static hosting
- **Any CDN** - Supports static files

### Security Headers

Production deployments include security headers (configured in `netlify.toml`):

```
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## ⚙️ Customization

### Change the Data Source

The project currently displays Leonardo da Vinci paintings. To adapt it for other data:

1. **Edit SPARQL Query** in `gridsome.config.js`:
   ```javascript
   // Find the gridsome-source-wikidata plugin config
   // Update the SPARQL query to fetch your data
   ```

2. **Update Data Field Mappings**:
   - Modify field names in `gridsome.config.js`
   - Update GraphQL queries in `Index.vue` and `Painting.vue`

3. **Adjust Component Data Bindings**:
   - Update `CardLayout.vue` to display your fields
   - Update `Painting.vue` detail page template

4. **Rebuild**:
   ```bash
   rm -rf cache/     # Clear Wikidata cache
   npm run develop
   ```

### Customize Styling

1. **Colors & Spacing**: Edit `src/assets/style/_variables.scss`
2. **Base Styles**: Edit `src/assets/style/_base.scss`
3. **Dark Mode**: Add theme variants in `_variables.scss`

### Add New Components

1. Create component in `src/components/MyComponent.vue`
2. Register globally in `src/main.js` or use locally
3. Add tests in `src/components/__tests__/MyComponent.spec.js`
4. Verify with `npm run check:all`

### Modify the Schema

Edit the SPARQL query in `gridsome.config.js` to add/remove fields. Gridsome will automatically regenerate the GraphQL schema on rebuild.

## 🧪 Testing

### Running Tests

```bash
npm test               # Run all tests once
npm run test:watch     # Run in watch mode during development
npm run test:coverage  # Generate coverage report
```

### Test Files

Located in `src/components/__tests__/`:
- `ActionBar.spec.js` - Action button functionality
- `CardLayout.spec.js` - Card rendering and props
- `ErrorBoundary.spec.js` - Error handling

### Automated Checklist

Run comprehensive checks:

```bash
npm run verify
```

Verifies:
- ✅ Build completes
- ✅ Tests pass
- ✅ Linting passes
- ✅ Code formatting is correct
- ✅ Security headers configured
- ✅ Package.json metadata correct
- ✅ Accessibility attributes present

## 🐛 Troubleshooting

### Images Not Loading

**Issue**: "Image unavailable" placeholder appears

**Solutions**:
1. **CORS errors**: Verify the image source allows cross-origin requests
2. **Broken URLs**: Check Wikimedia Commons URLs are still valid
3. **Cache stale**: Clear and rebuild:
   ```bash
   rm -rf cache/
   npm run build
   ```

### Build Fails with Rate Limiting

**Issue**: Wikidata SPARQL endpoint returns 429 errors

**Solution**: The GitHub Actions workflow includes auto-retry with exponential backoff. For local development:
- Run during off-peak hours
- Split SPARQL query into smaller batches

### Styling Not Applied

**Issue**: CSS variables not working

**Solutions**:
1. Verify SCSS imports: `@use "variables" as *;`
2. Check CSS variables syntax: `var(--my-var, fallback)`
3. For dark mode: Ensure class is on `<html>` element

### Performance Issues

**Issue**: Slow builds or page load

**Solutions**:
1. **Reduce image count** in SPARQL query
2. **Increase Wikidata cache TTL** in `gridsome.config.js`
3. **Profile with DevTools** to identify bottlenecks
4. **Check network throttling** isn't enabled in browser

## 📚 Additional Resources

- **CLAUDE.md** - Architecture guide and Claude Code instructions
- **SECURITY.md** - Vulnerability assessment and security guidelines
- [Gridsome Documentation](https://gridsome.org)
- [Wikidata Query Service](https://query.wikidata.org)
- [Vue.js 2 Guide](https://vuejs.org/v2/guide/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests. Areas for contribution:
- New features or components
- Documentation improvements
- Bug fixes
- Performance optimizations
- Additional test coverage

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Gridsome](https://gridsome.org/) - The static site generator for Vue.js
- [Wikidata](https://www.wikidata.org/) - Free knowledge base that can be read and edited by anyone
- [Vue.js](https://vuejs.org/) - The progressive JavaScript framework
- [IONOS](https://www.ionos.com/) - Deployment infrastructure

---

**Made with ❤️ using Gridsome**

Questions? Open an issue on [GitHub](https://github.com/hunsalz/gridsome-starter-wikidata/issues)
