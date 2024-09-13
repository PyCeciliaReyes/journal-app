import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {JournalApp} from './JournalApp.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JournalApp />
  </StrictMode>,
)
