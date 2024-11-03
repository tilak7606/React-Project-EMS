import React from 'react'

const TaskNumbers = ({data}) => {
  return (
    <div className='flex justify-between mt-10 gap-5 screen'>
      <div className='rounded-xl bg-red-600 px-9 py-6 w-[45%]'>
        <h2 className='text-3xl font-semibold '>{data.taskNumbers.newTask}</h2>
        <h3 className='text-2xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl bg-yellow-600 px-9 py-6 w-[45%]'>
        <h2 className='text-3xl font-semibold '>{data.taskNumbers.completed}</h2>
        <h3 className='text-2xl font-medium'>Completed Task</h3>
      </div>
      <div className='rounded-xl bg-blue-600 px-9 py-6 w-[45%]'>
        <h2 className='text-3xl font-semibold '>{data.taskNumbers.active}</h2>
        <h3 className='text-2xl font-medium'>Active Task</h3>
      </div>
      <div className='rounded-xl bg-purple-600 px-9 py-6 w-[45%]'>
        <h2 className='text-3xl font-semibold '>{data.taskNumbers.failed}</h2>
        <h3 className='text-2xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskNumbers
