import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import navs from './Component/Routes/Navigations.jsx'


const user = {
  username:"",
  role:"CUSTOMER",
  isAuthenticated:false
}

const {role,isAuthenticated}=user;


const allRoutes=()=>{
  return(
    <Route path={"/"} element={<App isAuthenticated={isAuthenticated}/>}>
    {navs.map((nav,i) => {
      if (isAuthenticated) {
        if(nav.isVisibleAfterAuth){
          if(nav.role===role ||nav.role==="ALL"){
            console.log(nav);
            return <Route key={i} path={nav.path} element={nav.element}/>
          }
        }
      } else {
        if (!nav.requireAuth && nav.role==="ALL") {
          console.log(nav);
          return <Route key={i} path={nav.path} element={nav.element}/>
        }
      }
    })}
    </Route>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter> 
      <Routes>  
     {/**<Route path={"/"} element={<App />}>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Seller' element={<Seller/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Route>
      **/}
     {allRoutes()}
      </Routes>
  </BrowserRouter>
   
  </React.StrictMode>,
)
