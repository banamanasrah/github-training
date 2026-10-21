# Task: Local Environment Setup and Initial Projects

## Goal

Set up your local development environment and create two starter projects: a **Spring Boot** backend and a **React** frontend. Both must run locally, and your work must be submitted through the Git workflow you used in week 1.

---

## 1. Install and verify the tools

Install the following and confirm each one with its version command. Include the outputs in your README.

| Tool | Notes | Verify with |
|------|-------|-------------|
| JDK | 17 or 21 (LTS) | `java -version` |
| Maven or Gradle | Optional, since Spring Initializr provides a wrapper | `mvn -v` or `gradle -v` |
| Node.js and npm | Current LTS | `node -v`, `npm -v` |
| Git | Configured with your name and email | `git --version` |
| IDEs | e.g. IntelliJ IDEA (Java), VS Code (React) | n/a |

---

## 2. Create the backend (Spring Boot)

1. Generate a project at [start.spring.io](https://start.spring.io) with these dependencies:
   - Spring Web
   - Spring Boot DevTools
   - (Optional) Spring Data JPA and H2 Database
2. Add a simple endpoint, for example `GET /api/health`, that returns a JSON message such as `{"status": "ok"}`.
3. Run the application and confirm the endpoint responds at `http://localhost:8080/api/health`.

---

## 3. Create the frontend (React)

1. Scaffold the project with Vite:

   ```bash
   npm create vite@latest frontend -- --template react
   cd frontend
   npm install
   npm run dev
   ```

2. Confirm the default page loads at `http://localhost:5173`.
3. Remove the boilerplate and display a simple "Hello" component of your own.

---

## 4. Git and GitHub

1. Use your existing repository, or create a new one with two folders: `backend/` and `frontend/`.
2. Add a `.gitignore` that covers at least:
   - `target/`
   - `node_modules/`
   - IDE files (`.idea/`, `.vscode/`)
3. Create a branch from `develop`, for example `feature/initial-setup`.
4. Commit in small, logical steps with meaningful commit messages.
5. Push the branch and open a pull request through the GitHub UI, targeting `develop`.
6. Write a `README.md` explaining:
   - the tools and versions you installed
   - how to run the backend
   - how to run the frontend

---

## Acceptance criteria

- [ ] Both projects run locally using the commands documented in the README
- [ ] `GET /api/health` returns a JSON response
- [ ] The React app displays your own component
- [ ] `node_modules/` and `target/` are **not** committed
- [ ] The PR targets `develop` and includes a clear description
- [ ] Commit messages are meaningful

---

## Stretch goal (optional)

Call the backend endpoint from the React app and display the response. You will need to configure **CORS** on the Spring Boot side, so this is a good first look at how the two halves communicate.
