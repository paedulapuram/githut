# Product Requirements

## Goal

Create a simple application that teaches the complete lifecycle of a web feature: requirements, GitHub history, database-backed authentication, browser testing, continuous integration, and deployment.

## User Journey

1. A visitor opens the welcome page.
2. The visitor selects **Sign up**.
3. The visitor enters a name, email address, password, and password confirmation.
4. The application validates the input and creates the account.
5. The user logs in with the registered email and password.
6. The application displays a message such as `Welcome, Alex. You are logged in.`
7. The user selects **Log out**.
8. The session ends and protected content is no longer accessible.

## Pages

| Page | Route | Access | Content |
| --- | --- | --- | --- |
| Welcome | `/` | Public | Application introduction and signup/login links |
| Sign up | `/signup` | Public | Name, email, password, confirmation, submit link, and login link |
| Login | `/login` | Public | Email, password, submit control, errors, and signup link |
| Account | `/account` | Authenticated | Personalized login-success message and logout control |

## Functional Requirements

### Welcome page

- Clearly explain the application.
- Provide visible signup and login actions.
- When already logged in, provide an account action instead.

### Signup

- Require name, valid email, password, and matching password confirmation.
- Reject invalid or incomplete input with specific, accessible messages.
- Prevent duplicate registration from appearing successful.
- Store the authentication identity securely.
- Store the display name in an application-owned profile record.
- Explain when email confirmation is required.

### Login

- Accept email and password.
- Show a general error for invalid credentials.
- Create a secure session after successful authentication.
- Redirect the user to `/account`.

### Account and logout

- Protect `/account` on the server.
- Display the authenticated user's name or email.
- End the session when logout is selected.
- Redirect to the welcome page after logout.
- Redirect logged-out visitors from `/account` to `/login`.

## Non-Functional Requirements

- Work on common desktop and mobile screen sizes.
- Be usable with keyboard navigation and screen readers.
- Use HTTPS in deployed environments.
- Never store or log plaintext passwords.
- Avoid revealing sensitive account details through error messages.
- Retain only information required for the learning application.
- Produce useful logs without recording passwords or authentication tokens.

## Out of Scope

- Salon functionality
- Social login
- Password reset
- Multi-factor authentication
- User roles and administration
- Payments, maps, messages, or notifications beyond authentication email
- Native mobile applications

These can become separate future milestones.

## Acceptance Criteria

- A unique visitor can register successfully.
- The user record persists in PostgreSQL through Supabase.
- The user can log in after registration.
- A valid session survives a normal page refresh.
- The account page shows a personalized success message.
- An unauthenticated visitor cannot access the account page.
- Logout invalidates the session.
- Playwright covers the principal success and failure journeys.
- GitHub Actions passes before deployment.
