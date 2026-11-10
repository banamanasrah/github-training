# Task: Authentication (Backend and Frontend)

## Goal

Add authentication to the Spring Boot and React projects from the previous task. Users should be able to **register**, **log in**, and access a **protected area** of the application. If time remains, add a **reset password** feature.

The focus of this task is **research and decision-making**. Instead of following a step-by-step guide, look up how authentication is commonly implemented in Spring Boot and React, choose an approach, and be ready to explain why you chose it.

---

## Part 1: Backend (Spring Boot)

### Requirements
- Users can register with their details (for example name, email, and password) and log in with their credentials.
- Registered users are stored in a database of your choice.
- Some endpoints are public (register, login) and others require the user to be authenticated. At least one protected endpoint should return the current user's profile.
- Research how authentication and authorization are handled in Spring Boot, choose an approach, and note it in your README with a short explanation of your choice.
- User credentials and other sensitive data must be handled securely. Research current best practices and apply them.
- Validate incoming data and return clear, consistent error responses with appropriate HTTP status codes.
- Allow the frontend to communicate with the backend during development.
- Write tests for the key scenarios (for example successful and failed registration and login, and access to protected endpoints with and without authentication).

---

## Part 2: Frontend (React)

### Pages
- **Register page**
- **Login page**
- **A protected page** (for example a profile or home page) that shows the current user's information and lets them log out

### Requirements
- Users who are not logged in must not be able to access the protected page.
- The application should remember the user's logged-in state while they use it, and clear it on logout.
- Forms should validate input, show errors returned by the backend, and give feedback while a request is in progress.
- Organize your code in a clean, maintainable way (reusable components, separation between UI and API calls, and so on).
- Research how React applications typically handle routing, shared state, and authenticated API requests, then pick an approach and document it.

---

## Part 3 (Optional, if time remains): Reset password

Users who forgot their password should be able to regain access to their account.

- Research how password reset is typically designed in web applications, including the security considerations involved.
- Design and implement a solution on both the backend and the frontend.
- Describe your design in the README (what happens at each step, and what security risks you considered).
- No real email service is required. You may simulate sending (for example by logging) or use a local development tool.

---

## Questions to answer in your README

Short answers in your own words are enough.

1. What authentication approach did you choose, and what alternatives did you consider?
2. How and where does your frontend store the user's logged-in state, and what are the trade-offs?
3. What security risks did you think about, and how did you address them?
4. What would you improve if you had more time?

---

## Git workflow

1. Create a separate branch from `develop` for each part (for example backend, frontend, and reset password).
2. Commit in small, logical steps with meaningful messages.
3. Open a pull request into `develop` for each branch, with a clear description of what changed and how to test it.
4. Keep the README up to date with setup instructions and a list of your endpoints.

---

## Acceptance criteria

- [ ] A new user can register, log in, view the protected page, and log out
- [ ] Protected endpoints and pages are not accessible without authentication
- [ ] Validation and server errors are shown clearly in the UI
- [ ] No secrets or sensitive data are committed to the repository
- [ ] Backend tests pass
- [ ] Separate PRs target `develop` with meaningful descriptions
- [ ] README includes setup instructions and answers to the questions above
