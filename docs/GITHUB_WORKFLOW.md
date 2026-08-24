# GitHub Workflow

## Repository Flow

1. Create an issue with a user story and acceptance criteria.
2. Create a focused branch from `main`.
3. Make one understandable change.
4. Run relevant local checks.
5. Commit with a clear message.
6. Push and open a pull request linked to the issue.
7. Review the diff and automated results.
8. Merge only after approval and passing checks.

## Branch Names

- `docs/...` for documentation
- `feat/...` for product functionality
- `test/...` for testing
- `fix/...` for defects
- `chore/...` for maintenance

## Commit Messages

Use Conventional Commits:

```text
docs: define authentication requirements
feat: add signup form
feat: protect account page
test: cover logout behavior
ci: run playwright on pull requests
```

Commit after each small, working checkpoint. Do not use vague messages such as `update` or `final changes`.

## Pull Request Requirements

- Clear summary and reason for the change
- Linked issue
- Testing performed
- Screenshots for interface changes
- Security and database implications
- Deployment or rollback notes when relevant

## GitHub Actions Checks

Pull requests should run:

1. Locked dependency installation
2. Linting
3. Type checking
4. Production build
5. Playwright Chromium tests
6. Artifact upload when Playwright fails

The `main` branch may additionally run Firefox and WebKit tests. GitHub secrets must hold sensitive CI configuration.

## Repository Settings

- Protect `main`.
- Require pull requests and passing checks.
- Block force pushes to `main`.
- Enable secret scanning and push protection when available.
- Enable Dependabot security updates.
- Use a small project board: `Backlog`, `Ready`, `In progress`, `Review`, and `Done`.
