# Welcome Authentication App

A learning project that demonstrates a complete web authentication journey:

1. A visitor opens a welcome page.
2. The visitor signs up with basic user information.
3. The registered user logs in.
4. The application displays a successful welcome message.
5. The user logs out and returns to the public application.

The project is currently in the **database and authentication foundation phase**. The Next.js application, responsive welcome page, Playwright foundation, GitHub Actions workflow, Supabase clients, session-refresh proxy, and profiles database are implemented. Signup, login, protected account access, logout, authentication browser tests, and deployment are not implemented yet.

## Documentation

- [Product Requirements](docs/PRODUCT_REQUIREMENTS.md)
- [Technology and Architecture](docs/TECHNOLOGY.md)
- [Development Plan](docs/DEVELOPMENT_PLAN.md)
- [Playwright Test Plan](docs/TEST_PLAN.md)
- [GitHub Workflow](docs/GITHUB_WORKFLOW.md)
- [Deployment Plan](docs/DEPLOYMENT.md)
- [Contributor Instructions](AGENTS.md)
- [Web Application Setup](apps/web/README.md)

## Application Location

The Next.js web application is located at `apps/web`.

## Run Locally

From the repository root:

```bash
cd apps/web
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

From `apps/web`, run:

```bash
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

All checks must pass before a pull request is merged.

## Selected Technology

- Next.js with TypeScript
- React and Tailwind CSS
- Supabase Auth with managed PostgreSQL
- Playwright browser testing and HTML reports
- GitHub Actions continuous integration
- Vercel deployment

## Current Status

| Area | Status |
| --- | --- |
| Requirements | Documented |
| Architecture | Documented |
| Next.js foundation | Implemented |
| Responsive welcome page | Implemented |
| Lint and type checking | Passing |
| Production build | Passing |
| Signup and login | Not started |
| Supabase development project | Configured |
| Supabase client foundation | Implemented |
| Profiles table and RLS policies | Implemented |
| Playwright foundation | Implemented |
| Welcome-page browser test | Passing in Chromium |
| GitHub Actions | Implemented |
| Deployment | Not started |

Development follows approved GitHub issues, feature branches, pull requests, and passing automated checks.
