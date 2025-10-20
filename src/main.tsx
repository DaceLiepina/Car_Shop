import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Homework04 from './componenets/Homework04/Homework04.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  <Homework04/>
  </StrictMode>,
)
