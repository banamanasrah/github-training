# github-training

# GitHub Training Project

## Project Description

A full-stack project consisting of a Spring Boot backend and a React frontend.

## Authentication – Research and Design Decisions

### 1. Authentication Approach

For this project, I chose **JWT (JSON Web Token) authentication using Spring Security**.

The application consists of a React frontend and a Spring Boot REST API backend. JWT allows the backend to authenticate requests using a signed token without maintaining a server-side login session for each user.

#### How it works

1. The user submits their email and password through the frontend.
2. The backend verifies the credentials against the user information stored in PostgreSQL.
3. If the credentials are correct, the backend generates a signed JWT with an expiration time.
4. The backend returns the token to the frontend.
5. The frontend sends the token in the `Authorization` header with subsequent protected requests, using the `Bearer` authentication scheme.
6. A JWT authentication filter integrated with Spring Security validates the token's signature and expiration before granting access to protected endpoints.

#### Alternatives considered

- **Session-based authentication:** The backend creates and stores a session after successful login. The browser receives a session ID, usually through a cookie, and sends it with subsequent requests. Sessions are easy to invalidate and are a suitable option for web applications.
- **JWT authentication:** The backend issues a signed token that the client sends with subsequent requests. The backend validates the token without maintaining a stored login session for each user.

I chose JWT because it is commonly used with REST APIs and gives me practical experience with token-based authentication and Spring Security.

### 2. Frontend Authentication State and Storage

I will use **React Context API** to share authentication state across the application and **React Router** to protect pages that require authentication.

The JWT access token and current user information will initially be kept in React application memory. **Axios** will be used to communicate with the backend and send the token in the `Authorization` header when making authenticated API requests.

#### Trade-offs

- React Context makes authentication information available to different components without passing props through multiple levels.
- Keeping the token in memory avoids persistent browser storage such as `localStorage`, which can expose tokens to JavaScript if the application has an XSS vulnerability.
- The token is lost when the page is refreshed, so the user will need to log in again.
- A future improvement could introduce a secure refresh-token mechanism to provide a more persistent login experience.

On logout, the frontend will clear the token and authentication state. Since this initial approach uses stateless JWT authentication, clearing the token on the frontend does not invalidate an already issued token on the backend. A previously stolen token may remain usable until it expires.

### 3. Security Risks and Mitigation

The main security risks considered are:

- **Plaintext passwords:** Passwords must never be stored directly in the database. BCrypt will be used to hash passwords before storing them.
- **JWT modification:** The backend will verify the token's signature and expiration before trusting its claims.
- **Token theft:** Access tokens will have a limited lifetime and will be kept in memory rather than `localStorage`. HTTPS will be used in production.
- **Cross-Site Scripting (XSS):** The application will avoid unsafe rendering and handle user-generated content carefully. Keeping tokens in memory reduces the risk of persistent token theft but does not eliminate XSS risks.
- **Unauthorized access:** Spring Security will protect private endpoints and verify authentication before granting access.
- **Cross-Origin Resource Sharing (CORS):** The backend will be configured to allow requests from the trusted React frontend origin during development.
- **Invalid input:** Incoming data will be validated on the backend, and clear error responses will be returned with appropriate HTTP status codes.
- **Sensitive configuration:** JWT signing secrets and database credentials will be kept outside the source code and will not be committed to GitHub.

### 4. Future Improvements

With more development time, I would consider:

- Implementing refresh tokens to maintain login state across page refreshes.
- Adding a secure token revocation mechanism to support invalidating tokens before they expire.
- Adding password reset functionality through a secure, time-limited, single-use token.
- Adding email verification during registration.
- Introducing multi-factor authentication (MFA).
- Adding rate limiting to protect against repeated failed login attempts.
- Expanding automated security and integration tests.

### 5. Planned API Endpoints

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/auth/register` | Register a new user | Public |
| POST | `/api/auth/login` | Authenticate a user and return a JWT | Public |
| GET | `/api/users/me` | Retrieve the current user's profile | Authenticated |

These are the initially planned endpoints. Their final implementation details and any additional endpoints will be documented as the application develops.

## Technologies Used

- **Backend:** Java 17, Spring Boot 4.1.2, Maven
- **Frontend:** React, Vite, Axios
- **Database:** PostgreSQL
- **Version Control:** Git and GitHub

## Prerequisites

Make sure you have the following installed:

- Java JDK 17
- Node.js
- npm
- Git
- An IDE (IntelliJ IDEA or Visual Studio Code)

## Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Run the Spring Boot application:

   ```bash
   ./mvnw spring-boot:run
   ```

3. The backend will run at:

   `http://localhost:8080`

### Health Check API

- **Method:** GET
- **Endpoint:** `/api/health`
- **Response:**

  ```json
  {
    "status": "ok"
  }
  ```

## Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local development URL:

   `http://localhost:5173`

## Project Structure

```text
github-training/
├── backend/
│   ├── src/
│   └── pom.xml
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── README.md
└── doc.md
```