# 🛡️ Security Policy

## Supported Versions

HardenHQ is actively maintained on the `main` branch.

| Version | Supported |
|---|---|
| `main` | ✅ Yes |
| Older commits/releases | ❌ No |

## Reporting a Security Vulnerability

If you discover a security vulnerability in HardenHQ, please report it responsibly and privately.

**Do not create a public GitHub issue for an undisclosed security vulnerability.** Public disclosure before a fix is available may put users and deployments at risk.

When reporting a vulnerability, please include:

- A clear description of the vulnerability
- The affected component, endpoint, or feature
- Steps to reproduce the issue
- The potential security impact
- Any relevant request/response examples, logs, or screenshots
- A suggested mitigation, if you have one

GitHub's private security reporting mechanisms should be used when available for this repository. If private reporting is unavailable, contact the repository maintainer through a private GitHub channel before making the vulnerability public.

## Responsible Disclosure

Please allow reasonable time for the maintainer to investigate, reproduce, and address a reported vulnerability before public disclosure.

Security researchers who report vulnerabilities responsibly will be credited when appropriate, unless they prefer to remain anonymous.

## Scope

Security reports related to HardenHQ's application and supporting infrastructure are welcome, including issues involving:

- SSRF protection and URL validation
- Redirect handling
- DNS and network request protections
- Authentication and admin authorization
- Session and cookie security
- CSRF and same-origin protections
- Security headers
- Rate limiting
- API security
- Sensitive information exposure
- Injection vulnerabilities
- Dependency-related vulnerabilities affecting HardenHQ

## Out of Scope

The following are generally outside the scope of this policy:

- Vulnerabilities in third-party services that are not caused by HardenHQ
- Denial-of-service or resource-exhaustion testing against production services
- Social engineering or phishing attacks against maintainers or users
- Spam, automated scanning that creates excessive traffic, or other disruptive testing
- Issues that require physical access to infrastructure
- Reports based only on outdated dependencies without demonstrating a security impact

## Safe Testing Requirements

Only test systems you own or have explicit authorization to test.

Do not:

- Access, modify, or delete other users' data
- Exfiltrate secrets or credentials
- Attempt to gain persistent access
- Perform destructive actions
- Intentionally disrupt production availability
- Use HardenHQ to attack third-party systems without authorization

If testing reveals sensitive information, stop testing and report the finding without retaining or publishing the exposed data.

## Security Architecture

HardenHQ includes security controls designed to reduce common web application risks, including:

- SSRF protection for private, loopback, metadata, reserved, and internal network targets
- Redirect-by-redirect destination validation
- Process-level DNS egress protection for server-side HTTP requests
- Distributed rate limiting
- Signed, HttpOnly admin session cookies
- Same-origin protection for authenticated state-changing requests
- Secure response headers
- Restricted FastAPI CORS configuration

Security controls may evolve as HardenHQ is developed. The implementation in the source code is the authoritative reference for the current security posture.

## Security Updates

Security fixes may be released through normal Git history, GitHub releases, or GitHub Security Advisories where appropriate.

For questions about this policy or responsible disclosure, open a non-sensitive discussion through the repository's normal GitHub communication channels. Do not include private vulnerability details in a public post.
