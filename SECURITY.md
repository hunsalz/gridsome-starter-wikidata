# Security Policy

## Known Vulnerabilities

This project uses Gridsome 0.7.23, which is built on older dependencies. As a result, there are known security vulnerabilities in transitive dependencies that cannot be easily resolved without breaking compatibility with Gridsome.

### Vulnerability Status

As of the latest audit, there are **26-31 vulnerabilities** detected, primarily in:
- Gridsome's core dependencies (webpack, sharp, sanitize-html, etc.)
- Transitive dependencies deep in the dependency tree
- Development dependencies used during build time

### Why These Can't Be Fixed

1. **Gridsome is no longer actively maintained** - The framework hasn't received updates since 2021
2. **Breaking changes** - Updating vulnerable packages to patched versions would break Gridsome's functionality
3. **Transitive dependencies** - Most vulnerabilities are in dependencies of dependencies, not directly in our code

### Risk Assessment

**Production Risk: LOW to MODERATE**
- Most vulnerabilities are in **build-time dependencies** (webpack, loaders, etc.)
- The built static site does not include these vulnerable packages
- Runtime dependencies are minimal and mostly safe
- The site is a static site generator - no server-side code execution

**Development Risk: MODERATE**
- Developers should be cautious when running `yarn develop` on untrusted networks
- Consider using a firewall or VPN when developing
- Don't expose the development server to public networks

### Recommendations

1. **For Production**: The built static site is safe to deploy - vulnerabilities are in build tools, not runtime code
2. **For Development**: 
   - Use trusted networks only
   - Keep dependencies updated where possible
   - Monitor for security advisories
3. **Long-term**: Consider migrating to a modern framework (Vite, Next.js, Nuxt) when feasible

### Monitoring

- Run `yarn audit` regularly to check for new vulnerabilities
- Monitor GitHub Security Advisories
- Review Dependabot alerts (if enabled)

### Reporting Security Issues

If you discover a security vulnerability in this project's code (not in dependencies), please report it responsibly:
1. Do not open a public issue
2. Contact the maintainer directly
3. Provide details about the vulnerability

---

**Last Updated**: 2024-12-13  
**Audit Status**: 26-31 vulnerabilities detected (mostly in build-time dependencies)

