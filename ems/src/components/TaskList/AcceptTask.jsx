import React from 'react'

const AcceptTask = ({data}) => {
  // console.log(data.taskTitle,data.taskDescription)
  return (
    <div className='h-full flex-shrink-0 w-[400px] bg-pink-500  p-5 rounded-xl  '>
    <div className='flex justify-between items-center'>
        <h3 className='px-3 py-1 rounded bg-red-600 text-sm'>{data.category}</h3>
        <h3 className='text-sm'>{data.taskDate}</h3>
    </div>

    <h2 className='mt-5 font-semibold text-xl'>{data.taskTitle}</h2>
    <p className='text-sm mt-4'>
      {data.taskDescription}
    </p>

    <div className='flex justify-between mt-4'>
        <button className=' bg-green-500 px-2 py-1 text-sm'>Mark as completed</button>
        <button className=' bg-red-500  px-2 py-1 text-sm'>Mark as failed</button>
    </div>

    </div>
  )
}

export default AcceptTask
