# Gridsome Starter Wikidata

[![Actions Status](https://github.com/hunsalz/gridsome-starter-wikidata/workflows/Gridsome%20CI-CD/badge.svg)](https://github.com/hunsalz/gridsome-starter-wikidata/actions)
[![License](https://img.shields.io/badge/license-MIT%20License-blue.svg)](http://doge.mit-license.org)
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
[![GitHub forks](https://img.shields.io/github/forks/hunsalz/gridsome-starter-wikidata.svg)](https://github.com/hunsalz/gridsome-starter-wikidata/network)
[![GitHub stars](https://img.shields.io/github/stars/hunsalz/gridsome-starter-wikidata.svg)](https://github.com/hunsalz/gridsome-starter-wikidata/stargazers)

A modern, feature-rich Gridsome starter that showcases how Gridsome and external data sources (like Wikidata) can work together to create beautiful, performant static sites.

## 🎯 Demo

**Live Site**: [https://hunsalz.github.io/gridsome-starter-wikidata](https://hunsalz.github.io/gridsome-starter-wikidata)

## ✨ Features

- 🎨 **Wikidata Integration** - Uses [Wikidata](https://www.wikidata.org) as external data source via SPARQL queries
- 📥 **Media Downloads** - Enables downloads of external media data
- 🏗️ **Masonry Grid Layout** - Beautiful waterfall/masonry grid display
- 🏷️ **Tagging System** - Advanced tagging and filtering capabilities
- ⭐ **Favorites** - Save and filter favorite items
- 🌓 **Dark/Light Mode** - Theme switching with system preference detection
- 🎨 **Modern Styling** - CSS variables, SCSS, and BEM methodology
- 📱 **PWA Support** - Progressive Web App capabilities with service worker
- 🚀 **CI/CD Pipeline** - GitHub Actions for automated builds and deployment
- 🧪 **Testing** - Jest + Vue Test Utils for component testing
- ♿ **Accessibility** - ARIA labels and semantic HTML
- 📊 **Web Vitals** - Core Web Vitals tracking
- 🔒 **Security Headers** - Production-ready security headers

## 🚀 Quick Start

### Prerequisites

- Node.js 20.18.0 or higher
- Yarn package manager

### Installation

1. **Install Gridsome CLI** (if not already installed):
   ```bash
   npm install --global @gridsome/cli
   ```

2. **Create a new project**:
   ```bash
   gridsome create my-gridsome-site https://github.com/hunsalz/gridsome-starter-wikidata.git
   ```

3. **Navigate to project directory**:
   ```bash
   cd my-gridsome-site
   ```

4. **Install dependencies**:
   ```bash
   yarn install
   ```

5. **Start development server**:
   ```bash
   yarn develop
   ```

   Visit `http://localhost:8080` to see your site.

6. **Explore GraphQL schema**:
   ```bash
   yarn explore
   ```

   Opens GraphQL playground at `http://localhost:8080/___explore`

## 📁 Project Structure

```
gridsome-starter-wikidata/
├── src/
│   ├── assets/
│   │   ├── images/          # Image assets
│   │   └── style/           # SCSS stylesheets
│   │       ├── _variables.scss    # CSS variables
│   │       ├── _base.scss         # Base styles
│   │       └── index.scss         # Main stylesheet
│   ├── components/          # Reusable Vue components
│   │   ├── ActionBar.vue    # Favorite, link, download actions
│   │   ├── CardLayout.vue   # Painting card component
│   │   ├── TagCloud.vue     # Tag filtering component
│   │   ├── ToggleTheme.vue  # Dark/light theme toggle
│   │   ├── ToggleView.vue   # Dashboard/favorites view toggle
│   │   ├── ErrorBoundary.vue # Error handling component
│   │   └── __tests__/       # Component tests
│   │   └── js/              # JavaScript utilities
│   │       ├── Event.js     # Event bus constants
│   │       └── View.js      # View type constants
│   ├── layouts/
│   │   └── Default.vue      # Main layout wrapper
│   ├── pages/
│   │   └── Index.vue        # Home page with masonry grid
│   ├── templates/
│   │   └── Painting.vue    # Individual painting page template
│   ├── utils/
│   │   └── web-vitals.js    # Web Vitals tracking
│   ├── index.html           # HTML template
│   └── main.js              # Application entry point
├── static/                  # Static files served as-is
├── scripts/
│   └── test-checklist.js   # Automated testing checklist
├── gridsome.config.js       # Gridsome configuration
└── gridsome.server.js       # Server-side API hooks
```

## 🏗️ Architecture

### Technology Stack

- **Framework**: Gridsome 0.7.23
- **UI Library**: Vue.js 2.x
- **Styling**: SCSS with CSS Variables
- **Data Source**: Wikidata (SPARQL queries)
- **Build Tool**: Webpack (via Gridsome)
- **Testing**: Jest + Vue Test Utils
- **Linting**: ESLint 9 with flat config
- **Formatting**: Prettier 3

### Data Flow

1. **Data Source (Wikidata)**
   - Source: Wikidata SPARQL endpoint
   - Query: Defined in `gridsome.config.js`
   - Cache: 24-hour TTL
   - Type: Painting (Leonardo da Vinci paintings)

2. **GraphQL Layer**
   - Gridsome automatically creates a GraphQL schema from the data source
   - `allPainting` - Query all paintings
   - `painting(id: ID!)` - Query single painting

3. **Components**
   - Pages: Use `<page-query>` to fetch data
   - Templates: Use `<page-query>` with parameters
   - Components: Receive data via props

### Component Architecture

#### Layout System

```
Default.vue (Layout)
├── Header (fixed)
│   ├── BackLink (conditional)
│   ├── ToggleView (conditional)
│   └── ToggleTheme
├── Content (slot)
│   └── Page/Template content
└── Footer
```

#### State Management

Uses Vue's event bus pattern for component communication:
- `ADD_TAG` - Add tag to filter
- `REMOVE_TAG` - Remove tag from filter
- `TOGGLE_FAVORITE` - Toggle favorite status
- `TOGGLE_VIEW` - Switch between dashboard/favorites

### Styling Architecture

- **CSS Variables**: Defined in `_variables.scss` for theme colors, spacing, and layout dimensions
- **BEM Methodology**: All CSS classes follow BEM naming conventions
- **Responsive Design**: Mobile-first approach with breakpoints in media queries

### Performance Optimizations

1. **Image Optimization**
   - Gridsome's `g-image` component
   - Lazy loading with `loading="lazy"`
   - Responsive image sizes

2. **Code Splitting**
   - Automatic code splitting by Gridsome
   - Route-based splitting

3. **Debouncing**
   - Resize handlers debounced (250ms)
   - Prevents excessive recalculations

4. **Caching**
   - Wikidata data cached (24h TTL)
   - Service worker for PWA caching

## 📊 GraphQL Schema

The schema is automatically generated by Gridsome based on the data sources configured in `gridsome.config.js`.

### Metadata Query

```graphql
query {
  metadata {
    siteName
    siteDescription
  }
}
```

**Fields:**
- `siteName` (String): The site name
- `siteDescription` (String): The site description

### Paintings Query

#### Query All Paintings

```graphql
query {
  paintings: allPainting(sortBy: "date", order: ASC) {
    edges {
      node {
        id
        path
        item
        title: paintingLabel
        image
        cover_image: image (width: 770, height: 380, blur: 10)
        year: date (format: "YYYY")
        location: locationLabel
        materials
        depicts
      }
    }
  }
}
```

**Fields:**
- `id` (ID): Unique identifier
- `path` (String): URL path to the painting page
- `item` (String): Wikidata item ID
- `title` (String): Painting title (from `paintingLabel`)
- `image` (String): Full-size image URL
- `cover_image` (String): Optimized cover image URL
- `year` (String): Year created (formatted as YYYY)
- `location` (String): Collection/location name
- `materials` (String): Materials used (comma-separated)
- `depicts` (String): Subjects depicted (comma-separated)

**Sort Options:**
- `sortBy: "date"` - Sort by creation date
- `order: ASC | DESC` - Sort order

#### Query Single Painting

```graphql
query painting ($id: ID!) {
  painting: painting (id: $id) {
    id
    path
    title: paintingLabel
    image
    year: date (format: "YYYY")
    location: locationLabel
    materials
    depicts
  }
}
```

**Parameters:**
- `$id` (ID!): The painting ID (required)

### Image Transformations

Gridsome's `g-image` component supports image transformations:

```graphql
cover_image: image (width: 770, height: 380, blur: 10)
```

**Available Transformations:**
- `width`: Set image width
- `height`: Set image height
- `blur`: Apply blur effect (0-20)
- `quality`: Image quality (0-100)

### Date Formatting

Dates can be formatted using the `format` parameter:

```graphql
year: date (format: "YYYY")
```

**Format Options:**
- `"YYYY"` - Full year (e.g., "1503")
- `"YYYY-MM-DD"` - Full date
- Other moment.js format strings

### Exploring the Schema

Use Gridsome's GraphQL explorer:

```bash
yarn explore
```

This opens a GraphQL playground at `http://localhost:8080/___explore` where you can:
- Browse the schema
- Test queries
- See available fields and types

## 🛠️ Development

### Available Scripts

```bash
# Development
yarn develop          # Start development server
yarn build           # Build for production
yarn explore         # Open GraphQL explorer

# Testing
yarn test            # Run tests
yarn test:watch      # Run tests in watch mode
yarn test:coverage   # Run tests with coverage

# Code Quality
yarn lint            # Run ESLint
yarn lint:fix         # Fix ESLint errors
yarn format           # Format code with Prettier
yarn format:check     # Check code formatting
yarn verify           # Run automated test checklist
yarn check:all        # Run all checks (format, lint, test, build)

# Deployment
yarn deploy           # Deploy to GitHub Pages
```

### Local Build Verification

To verify your local build, you can mount your `dist` folder into an nginx container:

```bash
docker run --rm --name nginx-stage -p 8080:80 \
  -v ${PWD}/dist/:/usr/share/nginx/html/:ro \
  -d nginx:latest
```

Visit [http://127.0.0.1:8080](http://localhost:8080)

For projects with a path prefix:

```bash
docker run --rm --name nginx-stage -p 8080:80 \
  -v ${PWD}/dist/:/usr/share/nginx/html/gridsome-starter-wikidata:ro \
  -d nginx:latest
```

Visit [http://127.0.0.1:8080/gridsome-starter-wikidata](http://localhost:8080/gridsome-starter-wikidata)

### Environment Variables

Create a `.env` file in the root directory:

```env
SITE_URL=http://localhost:8080
PATH_PREFIX=
```

See `.env.example` for reference.

## 🧪 Testing

The project uses Jest and Vue Test Utils for component testing.

### Running Tests

```bash
yarn test              # Run all tests
yarn test:watch        # Run tests in watch mode
yarn test:coverage     # Generate coverage report
```

### Test Structure

Tests are located in `src/components/__tests__/`:
- `ActionBar.spec.js` - Tests for ActionBar component
- `CardLayout.spec.js` - Tests for CardLayout component
- `ErrorBoundary.spec.js` - Tests for ErrorBoundary component

### Automated Checklist

Run the automated test checklist:

```bash
yarn verify
```

This verifies:
- ✅ Build completes successfully
- ✅ Tests pass
- ✅ ESLint passes (no errors)
- ✅ Prettier formatting is correct
- ✅ Security headers configured
- ✅ Package.json metadata is correct
- ✅ Required documentation files exist
- ✅ Test files exist
- ✅ Accessibility attributes present
- ✅ Alt text is dynamic

## 🚀 Deployment

### Build Process

1. **Data Collection**: Fetch from Wikidata
2. **GraphQL Schema**: Generate from data
3. **Page Generation**: Create static pages
4. **Asset Processing**: Optimize images, compile SCSS
5. **PWA Assets**: Generate manifest and service worker

### GitHub Actions

The project includes GitHub Actions for CI/CD:

- **Automatic Builds**: Runs on every push
- **Skip CI**: Add `skip ci` to commit message to skip a CI run
- **GitHub Pages**: Deploy to GitHub Pages (requires `GH_TOKEN` secret)

#### Setting up GitHub Pages Deployment

1. Create a [Personal Access Token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token) with `repo` scope
2. Add it as a repository secret named `GH_TOKEN`:
   - Go to Settings → Secrets → Actions
   - Click "New repository secret"
   - Name: `GH_TOKEN`
   - Value: Your token

### Static Hosting

The `dist/` folder contains static files that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

### Security Headers

Production deployments include security headers configured in `netlify.toml`:
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: geolocation=(), microphone=(), camera=()`

## 📝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Gridsome](https://gridsome.org/) - The static site generator
- [Wikidata](https://www.wikidata.org/) - The free knowledge base
- [Vue.js](https://vuejs.org/) - The progressive JavaScript framework

---

Made with ❤️ using Gridsome
