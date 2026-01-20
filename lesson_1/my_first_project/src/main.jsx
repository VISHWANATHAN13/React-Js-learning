import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Hello,App as A1} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello />
  </StrictMode>,
)
