import React from 'react'
import Header from '../other/Header'
import TaskNumbers from '../other/TaskNumbers'
import TaskList from '../TaskList/TaskList'
import AcceptTask from '../TaskList/AcceptTask'

const EmployeeDashboard = (props) => {
  // console.log(data)
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen '>
      {/* <h1>{data.id} </h1> */}
    

      <Header changeUser={props.changeUser} data={props.data} userName={props.userName} />
      <TaskNumbers data={props.data}/>
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
