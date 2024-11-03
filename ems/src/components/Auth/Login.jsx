import React, { useState } from 'react'

const Login = ({handelLogin}) => {

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        
        handelLogin(email,password);

        setEmail("") 
        setPassword("")
        

    }
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 p-20 border-emerald-600 rounded-xl'>
            <form className='flex flex-col items-center justify-center ' onSubmit={submitHandler}>  
                <input value={email}  
                onChange={(e) => {
                    
                    setEmail(e.target.value)
                }}
                required className= 'bg-transparent outline-none text-white border-2 text-center border-emerald-400 text-xl py-3 px-5 rounded-full' type="email" placeholder='Enter your email' /> 
                <input value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                required className= 'bg-transparent outline-none text-white border-2  border-emerald-400 text-xl py-3 px-5 rounded-full text-center mt-3' type="password"  placeholder='Enter your password'/>  

                <button className= ' outline-none text-white border-2  border-none bg-emerald-400 text-xl py-3 px-5 rounded-full  mt-5' >Log in</button> 
            </form> 

        </div>
      
    </div>
  )
}

export default Login
