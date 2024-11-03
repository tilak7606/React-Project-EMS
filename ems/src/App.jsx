import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

export default function App() {

  // const [userData,setuserData] = useContext(AuthContext);
  const { user: [userData, setuserData], admin: [adminData, setAdminData] } = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const [loggedinUserData,setLoggedInUserData] = useState(null)
  
  const [userName,setUserName] = useState('user')
  const [adminName,setAdminName] = useState('admin')




  useEffect(()=>{
    
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
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
    if(email == "Tilak@123.com" && password == '123'){
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      setUser('admin');

      const admin = adminData.find((e) => email == e.email && password == e.password )

      console.log(admin)

      // setAdminName(admin.firstName)

      // console.log(adminName)         
    
      // const data = JSON.parse(loggedInUser);
      // console.log(data.data.firstName)
      
    }

    else if(userData){           
      const employee = userData.find((e) => email == e.email && password == e.password) 

   

      if(employee){
        setUserName(employee.firstName)
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


//   useEffect(() => {
//     console.log(adminName)
//  },[])




 

  return (
   <>

   { !user ?  <Login handelLogin={handelLogin} /> : ''}
   {user == 'admin' ? <AdminDashboard changeUser={setUser} userName={adminName} /> :(user == 'employee' ? <EmployeeDashboard changeUser={setUser} userName={userName} data={loggedinUserData} /> : null ) }
     
     {/* <EmployeeDashboard/> */}
     {/* <AdminDashboard/> */}
   </>
  )
}




