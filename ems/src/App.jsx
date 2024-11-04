import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

export default function App() {

  // const [userData,setuserData] = useContext(AuthContext);
  const { user: [userData, setuserData], admin: [adminData, setAdminData] } = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const [loggedinUserData,setLoggedInUserData] = useState(null)




  useEffect(()=>{
    
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    // console.log(object)
    setLoggedInUserData(userData.data)
    
    }          
    } , [])


     
  // useEffect(() => {
  //   // Check if the user is already logged in
  //   const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  //   if (loggedInUser && loggedInUser.role === 'admin') {
        
  //     if (storedAdminName) {
  //       setAdminName(storedAdminName);
  //     }
  //   }
  // }, []);






  const handelLogin = (email,password) => {
 
      const admin = adminData.find((e) => email == e.email && password == e.password )
      if(admin){
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin' , data:admin}))
      setLoggedInUserData(admin)

      setUser('admin');
      }


    else if(userData){           
      const employee = userData.find((e) => email == e.email && password == e.password) 

   

      if(employee){
        
        setUser('employee');      
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
        setLoggedInUserData(employee)
  
      }
      else{
    alert('Invalid Credentials')

      }
    }
    else
    alert('Invalid Credentials')


    
  }


  useEffect(() => {
    if(loggedinUserData)
   console.log(loggedinUserData.firstName)
 },[loggedinUserData])




 

  return (
   <>

   { !user ?  <Login handelLogin={handelLogin} /> : ''}
   {user == 'admin' ? <AdminDashboard changeUser={setUser} userName={ !loggedinUserData ? 'admin' : loggedinUserData.firstName } /> :(user == 'employee' ? <EmployeeDashboard changeUser={setUser} userName={ !loggedinUserData ? 'admin' : loggedinUserData.firstName } data={loggedinUserData} /> : null ) }
     
     {/* <EmployeeDashboard/> */}
     {/* <AdminDashboard/> */}
   </>
  )
}




