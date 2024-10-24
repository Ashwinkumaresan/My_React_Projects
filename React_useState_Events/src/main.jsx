import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Cart } from './components/Cart.jsx'
import { Userdetails } from './components/Userdetails.jsx'
import { Test } from './components/Test.jsx'
import { RegFrm } from './components/RegFrm.jsx'
import { Advice } from './components/Advice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cart /> */}
    {/* <Userdetails />     */}
    {/* <Test /> */}
    {/* <RegFrm /> */}
    <Advice />
  </StrictMode>,
)
