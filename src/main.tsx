// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './api/mockserve.ts'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
   
  // </StrictMode>,
  <App />
)
