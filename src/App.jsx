import React from 'react'
import Header from './Component/Util/Header'
import { Outlet } from 'react-router-dom'
import Register from './Component/Public/Register'
import Login from './Component/Public/Login'

const App = ({isAuthenticated}) => {
  return (
    <div>
    <Header isAuthenticated={isAuthenticated}/>
    <Outlet/>
    
    </div>
  )
}

export default App
