import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {

  const { user: [userData, setuserData], admin: [adminData, setAdminData] } = useContext(AuthContext);


  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-48'>

        <div className='bg-red-400  mb-2 py-2 px-4 flex justify-between rounded ' >
            <h2 className='text-xl font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-xl font-medium w-1/5'>New Task</h3>
            <h3 className='text-xl font-medium w-1/5'>Active Task</h3>
            <h3 className='text-xl font-medium w-1/5'>Completed</h3>
            <h3 className='text-xl font-medium w-1/5'>Failed</h3>
            
        </div>

        <div className='h-[100%]  overflow-auto ' >

        {userData.map((elem,idx) => {
            
            return  <div className='bg-yellow-100    mb-2 py-2 px-4 flex justify-between rounded ' key={idx} >
                        <h2 className='text-xl font-medium  w-1/5 text-black'>{elem.firstName}</h2>
                        <h3 className='text-xl font-medium  w-1/5 text-blue-600'>{elem.taskNumbers.newTask}</h3>
                        <h3 className='text-xl font-medium  w-1/5 text-yellow-600'>{elem.taskNumbers.active}</h3>
                        <h3 className='text-xl font-medium  w-1/5 text-green-600'>{elem.taskNumbers.completed}</h3>
                        <h3 className='text-xl font-medium  w-1/5 text-red-600'>{elem.taskNumbers.failed}</h3>
                        
                    </div>
        })}

        </div>

       
       
      
    </div>
  )
}

export default AllTasks
