# Development Plan

No steps in this document authorize coding. Each milestone begins only after approval.

## Milestone 0 — Documentation

- Agree on requirements and exclusions.
- Approve the technology choices.
- Approve the test and deployment strategies.
- Initialize Git only after the documentation is accepted.

**Exit:** project owner explicitly approves application development.

## Milestone 1 — Application Foundation

- Create the Next.js TypeScript application under `apps/web`.
- Add formatting, linting, type checking, and build commands.
- Add ignore rules and safe environment-variable examples.
- Create a simple responsive welcome page.

**Exit:** the welcome page runs locally and all foundation checks pass.

## Milestone 2 — Database and Authentication

- Create separate development and test Supabase projects.
- Add the profile migration and Row Level Security policies.
- Implement signup and email-confirmation behavior.
- Implement login and cookie-based sessions.
- Protect the account page on the server.
- Implement logout.

**Exit:** every product acceptance criterion works manually.

## Milestone 3 — Playwright and CI

- Install and configure Playwright.
- Create isolated authentication test data.
- Automate the success and failure journeys.
- Enable HTML reports, screenshots, traces, and videos on failure.
- Add GitHub Actions checks.

**Exit:** all checks pass locally and on a pull request.

## Milestone 4 — Deployment

- Connect the GitHub repository to Vercel.
- Configure preview and production environment values.
- Verify authentication redirect URLs.
- Deploy a preview and run smoke tests.
- Deploy production only after approval.

**Exit:** the production URL passes the release checklist.

## Suggested GitHub Issues

1. Document and approve the authentication MVP.
2. Initialize the Next.js application.
3. Build the accessible welcome page.
4. Configure Supabase environments and migrations.
5. Implement signup.
6. Implement login and protected account page.
7. Implement logout.
8. Add Playwright authentication tests and HTML reporting.
9. Add GitHub Actions checks.
10. Configure preview deployment.
11. Complete the production release checklist.
