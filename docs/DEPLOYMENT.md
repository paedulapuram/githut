# Deployment Plan

## Platforms

- GitHub stores and reviews source history.
- Vercel builds and hosts the Next.js application.
- Supabase hosts authentication and PostgreSQL.

## Preview Deployment

After implementation, connect the GitHub repository to Vercel. Each pull request should receive a unique preview URL. Preview deployments must use non-production configuration and test accounts.

Authentication redirect URLs must include the approved local, preview, and production domains. Wildcard preview redirects should be limited according to the authentication provider's recommended configuration.

## Production Deployment

1. Confirm all required checks pass on `main`.
2. Review database migrations and backup/rollback considerations.
3. Configure production environment values in Vercel.
4. Configure the production site and redirect URLs in Supabase.
5. Deploy to production.
6. Run a smoke test for welcome, signup, login, account access, and logout.
7. Record the release and any known limitations.

## Environment Safety

- Never copy production secrets into repository files.
- Never run Playwright data-creation tests against production.
- Use separate Supabase projects for test and production.
- Restrict privileged credentials to server-side administrative tasks.
- Rotate any credential immediately if it appears in logs, commits, screenshots, or artifacts.

## Release Checklist

- Production build succeeds.
- Database migrations are applied and verified.
- Row Level Security policies are enabled and tested.
- HTTPS works.
- Signup and confirmation behavior works.
- Login and logout work.
- Protected routes reject logged-out users.
- Mobile and keyboard navigation are usable.
- No secret appears in browser bundles or repository history.
- Monitoring and a rollback plan are documented.

## Rollback

Application rollback uses a previous known-good Vercel deployment. Database migrations require a separately reviewed recovery plan because reverting application code does not automatically reverse stored data or schema changes.
