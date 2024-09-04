import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as BrowserRotuer } from 'react-router-dom'
import CoinProvider from './context/CoinContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRotuer>
  <StrictMode>
    <CoinProvider>
    <App />
    </CoinProvider>
  </StrictMode>
  </BrowserRotuer>,
)
