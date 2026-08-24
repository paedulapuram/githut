# AGENTS.md

## Project Purpose

Build a small, secure, accessible authentication application with a welcome page, signup, login, authenticated welcome message, and logout.

## Current Phase

The repository is documentation-only. Do not create application code, configuration, dependencies, workflows, or deployment resources until the project owner explicitly approves the development milestone.

## Working Rules

- Read `README.md` and the relevant file in `docs/` before changing the project.
- Keep each change small and focused.
- Never commit passwords, API keys, tokens, real user data, or `.env` files.
- Use `.env.example` later to document required variable names without values.
- Use maintained libraries and official integration patterns.
- Enforce authentication on the server; hiding interface elements is insufficient.
- Add automated tests with each feature.
- Treat accessibility, responsive layout, privacy, and security as requirements.
- Update documentation when implementation behavior changes.

## Git Conventions

- Branch examples: `docs/auth-requirements`, `feat/signup`, `test/login-flow`.
- Use Conventional Commits such as `docs: define login requirements`.
- Link pull requests to an approved GitHub issue.
- Do not merge until required checks pass.

## Definition of Done

- Acceptance criteria pass.
- Lint, types, build, and relevant tests pass.
- Playwright HTML results are available for failed CI runs.
- No secrets or generated test artifacts are committed.
- Documentation is current.
- The pull request clearly explains the change and verification.
