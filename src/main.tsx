import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './src/index.css'
import App from './src/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Coming Soon!</h1>
    <App />
  </StrictMode>,
)
