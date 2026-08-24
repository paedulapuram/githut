# Welcome Authentication Web App

The web application for the Welcome Authentication App learning project.

This application currently contains the Next.js foundation, a responsive welcome page, and Playwright browser testing. Signup, login, database integration, protected account access, logout, CI, and deployment will be added in later milestones.

## Technology

- Next.js
- React
- TypeScript
- Tailwind CSS
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
- Playwright Chromium configuration
- Automated welcome-page browser test
- Playwright HTML reports and failure artifacts

Not implemented yet:

- Signup
- Login
- Supabase authentication
- PostgreSQL profile data
- Protected account page
- Logout
- GitHub Actions
- Vercel deployment

## Environment Variables

The current welcome page requires no environment variables.

Future authentication configuration will be documented in `.env.example`. Never commit `.env`, `.env.local`, passwords, tokens, or private keys.

## Repository Workflow

Application changes must be developed on a feature branch and reviewed through a pull request. See the repository-level `README.md`, `AGENTS.md`, and `docs/` directory for complete requirements and workflow guidance.
