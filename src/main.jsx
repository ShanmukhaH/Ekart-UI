import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Component/Util/Cart.jsx'
import Seller from './Component/Util/Seller.jsx'
import Login from './Component/Util/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter> 
      <App />
      <Routes>
      
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Seller' element={<Seller/>}/>
      <Route path='/Cart' element={<Cart/>}/>

      </Routes>
  </BrowserRouter>
   
  </React.StrictMode>,
)
