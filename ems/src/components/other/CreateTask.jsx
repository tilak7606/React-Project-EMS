import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const { user: [userData, setUserData] } = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [taskCategory, setTaskCategory] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const task = {
            taskTitle,
            taskDescription,
            taskDate,
            taskCategory,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        };

        // Update user data immutably
        const updatedData = userData.map((user) => {
            if (user.firstName === assignTo) {
                return {
                    ...user,
                    tasks: [...user.tasks, task],
                    taskNumbers: {
                        ...user.taskNumbers,
                        newTask: (user.taskNumbers.newTask || 0) + 1
                    }
                };
            }
            return user;
        });

        // Update state and localStorage
        setUserData(updatedData);
        localStorage.setItem("employees", JSON.stringify(updatedData));
        
        // Debugging to verify the updated structure
        console.log("Updated Data:", updatedData);

        setAssignTo('');
        setTaskCategory('');
        setTaskDate('');
        setTaskTitle('');
        setTaskDescription('');
    };

    // Ensure localStorage sync on `userData` change
    useEffect(() => {
        console.log("LocalStorage updated with userData:", userData);
        localStorage.setItem("employees", JSON.stringify(userData));
    }, [userData]);

    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-sm px-2 py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Add Task Title'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-sm px-2 py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="date"
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className='text-sm px-2 py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Add Employee name'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={taskCategory}
                            onChange={(e) => setTaskCategory(e.target.value)}
                            className='text-sm px-2 py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Design , Work , etc..'
                        />
                    </div>
                </div>
                <div className='flex flex-col w-2/5 items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        placeholder='Add some description about the Task'
                    />
                    <button className='bg-emerald-500 text-sm py-3 hover:bg-emerald-600 px-5 rounded mt-4 w-full'>
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
