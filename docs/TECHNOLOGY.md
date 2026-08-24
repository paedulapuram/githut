# Technology and Architecture

## Recommended Stack

| Concern | Selection | Reason |
| --- | --- | --- |
| Language | TypeScript | Adds type checking across client and server code. |
| Framework | Next.js App Router | Provides pages, server behavior, routing, and deployment in one application. |
| Interface | React and Tailwind CSS | Supports a responsive interface with a small initial setup. |
| Authentication | Supabase Auth | Handles password storage, sessions, and email authentication. |
| Database | Supabase-managed PostgreSQL | Persists authentication identities and user profile information. |
| Browser tests | Playwright | Tests the application in real browser engines. |
| CI | GitHub Actions | Runs checks for commits and pull requests. |
| Hosting | Vercel | Integrates with Next.js and GitHub preview deployments. |

## Why Supabase

Supabase combines managed PostgreSQL and authentication. This avoids designing password hashing, token creation, and session infrastructure ourselves. The application remains responsible for secure route protection, input validation, authorization, and database access policies.

## Data Model

### Managed authentication identity

Supabase Auth maintains the authentication user, including its identifier and email. Application code must use the Auth API instead of directly modifying the protected authentication schema.

### `profiles` table

| Field | Purpose |
| --- | --- |
| `id` | Matches the authenticated user identifier |
| `display_name` | Name shown in the welcome message |
| `created_at` | Profile creation timestamp |
| `updated_at` | Most recent profile update timestamp |

Row Level Security must ensure users can access only their own profile. Schema changes must be represented by repeatable database migrations.

## Authentication Flow

1. Signup input is validated.
2. Supabase creates the authentication identity.
3. The application creates the corresponding profile safely.
4. Email confirmation is completed when enabled.
5. Login creates a cookie-based session.
6. Server-side checks protect the account page.
7. Logout invalidates the session and clears authentication cookies.

## Environment Variables

The implementation will eventually document variable names in `.env.example`. Real values belong in local untracked files, GitHub secrets, Supabase settings, and Vercel environment settings.

Expected public configuration:

- Supabase project URL
- Supabase publishable key

Privileged service-role credentials are not required in the browser and must never be exposed through public environment variables.

## Environments

- **Local development:** local application connected to a development-only Supabase project.
- **Continuous integration:** isolated test configuration and fake test users.
- **Preview:** Vercel deployment for each pull request with non-production data.
- **Production:** protected configuration and production Supabase project.

Production and test data must never share the same authentication users.

## Required Software and Services

### Install locally

- Git
- Node.js 22 LTS, including npm
- Visual Studio Code or another editor
- A modern browser
- Playwright browser binaries during the implementation milestone

Helpful optional tools include GitHub CLI, the Playwright VS Code extension, and Supabase CLI. Docker is not required for the first hosted-development setup.
### Create accounts when needed

- GitHub for source control and Actions
- Supabase for authentication and PostgreSQL
- Vercel when deployment begins
