import React, { useState } from 'react'

const Header = (props) => {

  // const[username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin');
  // }
  // else{
  //   setUsername(data.firstName)
  // }

  const logoutUser = () => {
    localStorage.setItem('loggedInUser','');
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <>
    <div className='flex items-end justify-between'>
  
        <h1 className='text-2xl font-medium'>Hello <br />  <span className='text-3xl font-semibold'>{props.userName}  👋 </span></h1> 
        <button  onClick={logoutUser} className='bg-red-600 text-lg font-medium  text-white rounded-md px-5 py-2'>Log Out</button>
    </div>
      
    </>
  )
}

export default Header
