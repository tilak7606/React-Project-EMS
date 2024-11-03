import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTasks from '../other/AllTasks'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-7'>
      <Header changeUser={props.changeUser} userName={props.userName} />
      <CreateTask/> 
      <AllTasks/>
    
    </div>
  )
}

export default AdminDashboard
