import React, { useState } from 'react'
import { type Task, getTasks, saveTasks } from '../../database/database'   
import Delete from '../../icons/Delete'
import Edit from '../../icons/Edit'
import EditTaskModal from '../EditTaskModal/EditTaskModal'
import DeleteTaskModal from '../DeleteTaskModal/DeleteTaskModal'


const TaskDiv = ({ item, setTasks }: { setTasks:React.Dispatch<React.SetStateAction<Task[]>>, item: Task }) => {

  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)

  const toggleComplete = () => {
    setTasks(prev => {
      const updated = prev.map(task =>
        task.id === item.id
          ? { ...task, completed: !task.completed }
          : task
      )
      saveTasks(updated)
      return updated
    })
  }

  const onDelete = () => {
    setTasks(prev => {
      const updated = prev.filter(task => task.id !== item.id)
      saveTasks(updated)
      return updated
    })
  }


  return(
    <div className='flex justify-between w-full p-2 bg-[#FFFFFF] rounded-lg   dark:bg-gray-600'>
      <div className='flex gap-3 items-center'>
        <input onChange={toggleComplete} type="checkbox" checked={item.completed} className='w-3 h-3'/>
        <div className='flex gap-2'>
          <h4 className='text-sm font-medium text-[#404040]   dark:text-[#F5F5F5]'>{item.title}</h4>
          <p className='text-sm font-regular text-[#404040]   dark:text-[#F5F5F5]'>{item.description}</p>
          <span className='text-sm font-regular text-[#404040]   dark:text-[#F5F5F5]'>{item.priority}</span>
        </div>
      </div>
      <div className='flex gap-2'>
        <button onClick={() => {setIsOpenEditModal((prev) => !prev)}} className='cursor-pointer'>
          <Edit className='w-4 h-4 text-[#404040]   dark:text-[#F5F5F5]'/>
        </button>
        <button onClick={() => {setIsOpenDeleteModal((prev) => !prev)}} className='cursor-pointer'>
          <Delete className='w-4 h-4 text-[#EB5757]'/>
        </button>
      </div>
      {
        isOpenEditModal && (
          <EditTaskModal item={item} setTasks={setTasks} setIsOpenEditModal={setIsOpenEditModal}/>
        )
      }
      {
        isOpenDeleteModal && (
          <DeleteTaskModal item={item} onDelete={onDelete} setIsOpenDeleteModal={setIsOpenDeleteModal}/>
        )
      }
    </div>
  )
}

export default TaskDiv