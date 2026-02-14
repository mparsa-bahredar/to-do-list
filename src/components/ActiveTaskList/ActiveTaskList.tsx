import React from 'react'
import { type Task } from '../../database/database'
import TaskDiv from '../TaskDiv/TaskDiv'


const ActiveTaskList = ({ setTasks, activeTasks }: { setTasks:React.Dispatch<React.SetStateAction<Task[]>>, activeTasks: Task[] }) => {
  return (
    <div className='flex flex-col gap-3 items-start'>
      <h3 className='font-semibold text-base text-[#404040]   dark:text-[#F5F5F5]'>Active Tasks :</h3>
      <div className='flex flex-col gap-2 w-full p-4 rounded-lg bg-[#F5F5F5]   dark:bg-gray-500'>
        {activeTasks.length === 0 ? (
          <div className='flex justify-center w-full'>
            <p className='font-regular text-base text-[#404040]   dark:text-[#F5F5F5]'>No Tasks</p>
          </div>
        ) : (
          activeTasks.map((item) => (
            <TaskDiv item={item} key={item.id} setTasks={setTasks}/>
          ))
        )}
      </div>
    </div>
  )
}

export default ActiveTaskList
