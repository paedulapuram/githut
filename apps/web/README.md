# Welcome Authentication Web App

The web application for the Welcome Authentication App learning project.

This application currently contains the Next.js foundation, responsive welcome page, Playwright browser testing, GitHub Actions CI, and the Supabase database and authentication foundation. Signup, login, protected account access, logout, authentication browser tests, and deployment will be added in later milestones.

## Technology

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase Auth
- Supabase PostgreSQL
- ESLint
- npm

## Requirements

Install these tools before running the application:

- Node.js 22 LTS
- npm 10 or newer
- Git
- A modern browser

Check the installed versions:

```bash
node --version
npm --version
git --version
```

## Project Location

The web application is located at `apps/web`.

From the repository root, enter the application directory:

```bash
cd apps/web
```

## Install Dependencies

Install the exact dependencies recorded in `package-lock.json`:

```bash
npm ci
```

Use `npm ci` after cloning the repository or when reproducing the locked dependency environment.

## Run the Development Server

Start the local Next.js development server:

```bash
npm run dev
```

Open `http://localhost:3000`. Stop the server with `Control + C`.

## Quality Checks

Run these commands before opening a pull request:

```bash
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

Open the most recent Playwright HTML report:

```bash
npm run test:e2e:report
```

## Production Preview

After creating a production build, start it locally:

```bash
npm run start
```

The `start` command requires a successful `npm run build` first.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check TypeScript without generating files |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build locally |
| `npm run test:e2e` | Run Playwright tests in Chromium |
| `npm run test:e2e:report` | Open the Playwright HTML report |

## Current Scope

Implemented:

- Next.js App Router foundation
- TypeScript
- Tailwind CSS
- ESLint
- Responsive welcome page
- Project metadata
- Turbopack root configuration
- Supabase JavaScript and SSR dependencies
- Supabase browser and server clients
- Cookie session-refresh Proxy
- Safe environment-variable example
- Development Supabase project
- PostgreSQL profiles migration
- Row Level Security profile policies
- Playwright Chromium configuration
- Automated welcome-page browser test
- Playwright HTML reports and failure artifacts
- GitHub Actions quality workflow

Not implemented yet:

- Signup and email confirmation
- Login
- Protected account page
- Logout
- Playwright authentication journeys
- Vercel deployment

## Environment Variables

Copy the safe example file to create a private local configuration:

```bash
cp .env.example .env.local
```

Set these values in `.env.local`:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://your-project-reference.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_your_key
```

Get the Project URL and publishable key from the Supabase project Connect panel. The publishable key is intended for public application clients and remains restricted by Row Level Security policies.

Never add a Supabase secret key or legacy service-role key to the application. Never commit `.env.local`, passwords, tokens, private keys, or production credentials.

## Repository Workflow

Application changes must be developed on a feature branch and reviewed through a pull request. See the repository-level `README.md`, `AGENTS.md`, and `docs/` directory for complete requirements and workflow guidance.
