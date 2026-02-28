import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LoadingDevPortfolio } from './LoadingDevPortfolio'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoadingDevPortfolio/>
  </StrictMode>,
)
