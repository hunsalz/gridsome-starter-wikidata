# Security Policy

## Known Vulnerabilities

This project uses Gridsome 0.7.23, which is built on older dependencies. As a result, there are known security vulnerabilities in transitive dependencies that cannot be easily resolved without breaking compatibility with Gridsome.

### Vulnerability Status

As of the latest audit, there are **51 vulnerabilities** detected:
- **3 Critical** - High severity issues requiring immediate attention
- **21 High** - Significant security concerns
- **25 Moderate** - Moderate risk issues
- **2 Low** - Minor security concerns

**Primary Sources:**
- Gridsome's core dependencies (webpack, sharp, sanitize-html, etc.)
- Transitive dependencies deep in the dependency tree
- Development dependencies used during build time

### Why These Can't Be Fixed

1. **Gridsome is no longer actively maintained** - The framework hasn't received updates since 2021
2. **Breaking changes** - Updating vulnerable packages to patched versions would break Gridsome's functionality
3. **Transitive dependencies** - Most vulnerabilities are in dependencies of dependencies, not directly in our code

### Risk Assessment

**Production Risk: LOW**
- Most vulnerabilities are in **build-time dependencies** (webpack, loaders, etc.)
- The built static site does not include these vulnerable packages
- Static HTML/CSS/JS files are served - no server-side code execution
- No runtime Node.js dependencies in production
- No database connections or API endpoints exposed
- The site is a static site generator - vulnerabilities don't affect deployed site

**Development Risk: MODERATE to HIGH**
- Vulnerabilities in build tools could potentially be exploited during development
- The `postinstall` script modifies `node_modules` (see below)
- Developers should be cautious when running `yarn develop` on untrusted networks
- Consider using a firewall or VPN when developing
- Don't expose the development server to public networks
- Review any code changes to the patch script before running `yarn install`

### Postinstall Script Security

This project includes a `postinstall` script (`scripts/patch-wikidata-plugin.js`) that modifies files in `node_modules/gridsome-source-wikidata/` to add retry logic for rate limiting.

**Security Considerations:**
- The script modifies third-party package code in `node_modules`
- Changes are lost when `node_modules` is reinstalled
- The script is idempotent (safe to run multiple times)
- Review the script before running `yarn install` on untrusted systems
- The patch only affects build-time behavior, not production runtime

**Why This Is Acceptable:**
- The patch is necessary for build stability (handles Wikidata rate limiting)
- It only modifies build-time code, not production assets
- The changes are minimal and well-documented
- Alternative would require forking the entire plugin

### Secrets and Environment Variables

**GitHub Actions Secrets:**
- `GH_TOKEN`: Personal Access Token for GitHub Pages deployment
  - Stored as repository secret (encrypted)
  - Only accessible during GitHub Actions runs
  - Required scope: `repo` (for pushing to `gh-pages` branch)
  - Never commit tokens to the repository

**Environment Variables:**
- `SITE_URL`: Site URL (defaults to `https://hunsalz.github.io`)
- `PATH_PREFIX`: URL path prefix (defaults to `/gridsome-starter-wikidata`)
- These are build-time only and don't contain sensitive data

### Recommendations

1. **For Production**: 
   - The built static site is safe to deploy - vulnerabilities are in build tools, not runtime code
   - No server-side code execution means no runtime attack surface
   - Static files can be served from any CDN or static host

2. **For Development**: 
   - Use trusted networks only
   - Review the patch script before running `yarn install`
   - Keep dependencies updated where possible (within Gridsome constraints)
   - Monitor for security advisories
   - Consider using a separate development environment
   - Don't expose the development server (default: `localhost:8080`)

3. **For CI/CD**:
   - GitHub Actions runs in isolated containers
   - Secrets are encrypted and only available during workflow execution
   - Build artifacts don't contain vulnerable dependencies
   - Review workflow files before merging changes

4. **Long-term**: 
   - Consider migrating to a modern framework (Vite, Next.js, Nuxt) when feasible
   - Modern frameworks have better security postures and active maintenance
   - Evaluate alternatives that don't require patching third-party packages

### Monitoring

**Regular Checks:**
- Run `yarn audit` regularly to check for new vulnerabilities
- Run `yarn audit --summary` for a quick overview
- Monitor GitHub Security Advisories
- Review Dependabot alerts (if enabled)
- Check for updates to Gridsome (though unlikely)

**What to Monitor:**
- New critical or high severity vulnerabilities
- Changes in vulnerability count
- Security advisories for key dependencies (webpack, sharp, etc.)
- Updates to the patch script if dependencies change

**When to Act:**
- If a critical vulnerability affects production assets (unlikely)
- If a vulnerability is found in a direct dependency we control
- If the patch script needs security improvements
- If GitHub Security alerts require attention

---

**Last Updated**: 2024-12-13  
**Audit Status**: 51 vulnerabilities detected (3 Critical, 21 High, 25 Moderate, 2 Low)  
**Risk Level**: LOW (Production) | MODERATE-HIGH (Development)  
**Next Audit**: Run `yarn audit` after dependency updates

