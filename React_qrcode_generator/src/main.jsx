import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Qrcode } from './components/Qrcode'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    
    <Qrcode />
  </StrictMode>,
)
