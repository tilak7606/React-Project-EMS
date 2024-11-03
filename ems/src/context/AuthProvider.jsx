import React, { createContext, useEffect } from 'react'
import { useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';


// ye hi hai context api 

export const AuthContext = createContext();




const AuthProvider = ({children}) => {
  
    
    const[userData,setuserData]  = useState(null);
    const[adminData,setAdminData] = useState(null);

        useEffect(()=> {
        setLocalStorage()
        const {employees} = getLocalStorage();
        const {admin} = getLocalStorage();
        setuserData(employees);
        setAdminData(admin)
        
    }, [])

   

  
  return (
    <div>
       <AuthContext.Provider value={{ user: [userData, setuserData], admin: [adminData, setAdminData] }}>

          {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
