//The entry point that renders your React application.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/*StrictMode is a development-only tool, but it doesn't mean that the 
whole 
application is running in development mode.*/ 
//StrictMode → helps detect potential problems.

/*StrictMode → helps detect potential problems.
npm run dev → runs our Vite application in development mode.*/ 