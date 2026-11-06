# github-training
# GitHub Training Project

## Project Description
A full-stack project consisting of a Spring Boot backend and a React frontend.

## Technologies Used
- **Backend:** Java 17, Spring Boot 4.1.2, Maven
- **Frontend:** React, Vite
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