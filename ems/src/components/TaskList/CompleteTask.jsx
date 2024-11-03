import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 w-[400px] bg-red-500  p-5 rounded-xl  '>
            <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 rounded bg-red-600 text-sm'>{data.category}</h3>
                <h3 className='text-sm'>{data.taskDate}</h3>
            </div>

            <h2 className='mt-5 font-semibold text-xl'>{data.taskTitle} </h2>
            <p className='text-sm mt-4'>

                {data.taskDescription}
                   </p>
            <div className='mt-2'>
                <button className='w-full bg-green-500 mt-10'>Complete</button>
            </div>
        </div>
  )
}

export default CompleteTask
