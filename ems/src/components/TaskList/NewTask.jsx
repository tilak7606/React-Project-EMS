import React from 'react'

const FailedTask = ({data}) => {
  console.log(data)
  return (
    <div className='h-full flex-shrink-0 w-[400px] bg-yellow-500  p-5 rounded-xl  '>
      
    <div className='flex justify-between items-center'>
        <h3 className='px-3 py-1 rounded bg-red-600 text-sm'>{data.taskCategory}</h3>
        <h3 className='text-sm'>{data.taskDate} </h3>
    </div>

    <h2 className='mt-5 font-semibold text-xl'>{data.taskTitle}</h2>
    <p className='text-sm mt-4'>
      {data.taskDescription}
          </p>
    <div className='mt-4 flex text-center'>
        <button className='bg-green-500 text-sm'>Accept Task</button>
    </div>
</div>

  )
}

export default FailedTask
