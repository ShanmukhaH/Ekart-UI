import { createContext, useContext, useEffect, useState } from "react";
import DoLoginRefresh from '../Auth/DoLoginRefresh'

const authContext=createContext({})

const AuthProvider = ({child}) => {

  let isRefreshed=false;
    const {validateAndRefresh}=DoLoginRefresh();
    const[auth,setAuth]=useState({
        userId:"",
        userName:"",
        userRole:"CUSTOMER",
        isAuthenticated:false,
        accessExpiration:"",
        refereshExpiration:"",

    })

    const refresh=async()=>{
      const user=await validateAndRefresh();
      if(user){
        setAuth(...user);
      }
      
    }  


    useEffect(() =>{
      if(!isRefreshed)
      {
        refresh();
        isRefreshed=true;
      }
       
      },[]);
      

  return (
    <authContext.Provider value={{auth,setAuth}}>
        {child}
    </authContext.Provider>
  )
}

export default AuthProvider

export const useAuth=()=>useContext(authContext);
