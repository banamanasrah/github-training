
// for me :The main application component. It will connect your pages,
//  routes and authentication provider.
// import Hello from './Hello';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {BrowserRouter,Routes,Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Hello /> */}
    
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;


//VERY important bana!!!!! //
/*You're almost completely correct! Just one small clarification: 
we don't manually call LoginPage and RegisterPage inside App as ordinary 
function calls. 
React Router renders them when their URL matches.

For example:
- When the URL is /login, React Router renders LoginPage.
- When the URL is /register, React Router renders RegisterPage.
*/ 
/*
- BrowserRouter: enables routing in our app.
- Routes: groups all our routes.
- Route: connects a URL path to a React page.
- Navigate: redirects the root URL / to /login.
Now, when you visit:
- localhost:5173/ → redirects to Login.
- localhost:5173/login → displays Login.
- localhost:5173/register → displays Register.

*/ 