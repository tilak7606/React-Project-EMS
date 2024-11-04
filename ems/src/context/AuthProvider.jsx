import React, { createContext, useEffect } from 'react'
import { useState } from 'react';

import { employees,admin} from '../utils/localStorage'


// ye hi hai context api 

export const AuthContext = createContext();

 const setLocalStorage = () => {
    localStorage.setItem("employees" ,JSON.stringify(employees))
    localStorage.setItem("admin" ,JSON.stringify(admin))
}

const getLocalStorage = () => {

    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}    
}



const AuthProvider = ({children}) => {
  
    
    const[userData,setuserData]  = useState(null);
    const[adminData,setAdminData] = useState(null);

    // setuserData(employees)
    // setAdminData(admin)

      // useEffect(()=>{
      //   console.log(userData,"    " , adminData ,"    ")
      // },[])

        useEffect(()=> {
        // setLocalStorage()
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
