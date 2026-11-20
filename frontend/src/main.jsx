//The entry point that renders your React application.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <App />
    </AuthProvider>
  </StrictMode>,
)
/*StrictMode is a development-only tool, but it doesn't mean that the 
whole 
application is running in development mode.*/ 
//StrictMode → helps detect potential problems.

/*StrictMode → helps detect potential problems.
npm run dev → runs our Vite application in development mode.*/ 
/*Since AuthProvider wraps App, all components rendered inside
 App can access the shared authentication data. */