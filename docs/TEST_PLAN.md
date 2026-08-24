# Playwright Test Plan

## Purpose

Playwright will test the application through the browser exactly as a visitor uses it. Tests should verify visible behavior and security boundaries, not internal implementation details.

## Browser Coverage

- Chromium is required on every pull request.
- Firefox and WebKit can run on the main branch or scheduled workflow to control execution time.
- Include representative desktop and mobile viewport projects.

## Required Scenarios

### Public navigation

- Welcome page loads.
- Signup and login links open the correct pages.

### Signup

- Required-field validation is accessible.
- Invalid email is rejected.
- Password mismatch is rejected.
- A unique fake user can register.
- Duplicate registration does not appear successful.

### Login and session

- Invalid credentials show a general error.
- A registered user can log in.
- Successful login opens the account page.
- The welcome message contains the user's display name or email.
- The session remains valid after refresh.

### Route protection and logout

- A logged-out visitor opening `/account` is redirected to `/login`.
- Logout returns the user to the public application.
- The logged-out user cannot return to protected content with browser navigation.

## Test Data

- Generate a unique fake email for each test run.
- Never use personal or production accounts.
- Use a dedicated test Supabase project or a local Supabase environment.
- Clean up test data using a controlled test mechanism when appropriate.
- Never place privileged database credentials in browser test code.

Email confirmation is enabled by default for hosted Supabase projects. Automated tests need a dedicated test approach: either confirmation disabled only in the isolated test project or a safe test-only method that completes confirmation.

## HTML Report

Playwright's HTML reporter should create a navigable test report containing suite, test, browser, duration, steps, errors, and attachments. The generated report directory must be ignored by Git.

CI behavior:

- Do not commit generated HTML reports.
- Upload the HTML report as a GitHub Actions artifact when tests fail.
- Upload screenshots, traces, and videos on failure.
- Give artifacts a limited retention period because they may contain test user information.

## Quality Gate

A pull request cannot merge when required Playwright tests fail. Flaky tests must be investigated; repeated retries must not be used to hide unstable behavior.
