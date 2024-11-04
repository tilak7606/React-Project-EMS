import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    // const {user:[userData,setuserData]} = useContext(AuthContext)
    const { user: [userData, setuserData], admin: [adminData, setAdminData] } = useContext(AuthContext);


    
    // const [newTask,setNewTask] = useState({})

    const[taskTitle,setTaskTitle] = useState('')
    const[taskDate,setTaskDate] = useState('')
    const[AssignTo,setAssignTo] = useState('')
    const[taskCategoery,setTaskCategoery] = useState('')
    const[taskDescription,setTaskDescription] = useState('')


    const submitHandler = (e) => {
        e.preventDefault();

        // setNewTask({taskTitle,taskDescription,taskDate,taskCategoery,active:false,newTask:true,failed:false,completed:false})

        const task = { taskTitle, taskDescription, taskDate, taskCategoery, active: false, newTask: true, failed: false, completed: false };

        const data = userData;         //1
        
        // const data =    JSON.parse(localStorage.getItem('employees'))
        data.forEach(function(elem) {
            if(elem.firstName == AssignTo){
                elem.tasks.push(task)
                elem.taskNumbers.newTask =  elem.taskNumbers.newTask  + 1;         
                
            }
        })
    

        setuserData(data);

        console.log(userData[0].tasks, '  before')

        localStorage.setItem("employees" ,JSON.stringify(userData))
        // localStorage.setItem("employees" ,JSON.stringify(data))


        setAssignTo('')
        setTaskCategoery('')
        setTaskDate('')
        setTaskTitle('')
        setTaskDescription('')
    }


    // useEffect(()=>{
    //     localStorage.setItem("employees" ,JSON.stringify(userData))   // YE HAI     
    // },[userData])

    useEffect(()=>{

        console.log(userData[0].tasks, '  after')
    },[])


  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded '> 
    <form onSubmit={(e) => {
        submitHandler(e)
    }} className='flex flex-wrap w-full items-start justify-between  '> 
        <div className='w-1/2'>

        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input value={taskTitle}
                onChange={(e) => {
                    setTaskTitle(e.target.value)
                }}
            className='text-sm px-2 py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Add Task Title' />
        </div>
        <div>
            <h3  className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input 
             value={taskDate}
             onChange={(e) => {
                setTaskDate(e.target.value)
             }} 
             className='text-sm px-2 py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
        </div>
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
            <input  
             value={AssignTo}
             onChange={(e) => {
                 setAssignTo(e.target.value)
             }}
             className='text-sm px-2 py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Add Employee name' />
        </div>
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input 
             value={taskCategoery}
             onChange={(e) => {
                 setTaskCategoery(e.target.value)
             }}
            className='text-sm px-2 py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design , Work , etc..' />
        </div>

        </div>
        <div className='flex flex-col w-2/5 items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Discription</h3>
            <textarea 
             value={taskDescription}
             onChange={(e) => {
                setTaskDescription(e.target.value)
             }}
              className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent  border-[1px] border-gray-400 mb-4' name="" id="" cols="30"  rows="10" placeholder='Add some discription about the Task'></textarea>
            <button className='bg-emerald-500 text-sm py-3  hover:bg-emerald-600  px-5  rounded mt-4 w-full'>Create Task</button>
        </div>
       
    </form>
  </div>
  )
}

export default CreateTask
