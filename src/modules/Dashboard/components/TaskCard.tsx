'use client'
import { useState } from 'react'
import { saveTasks } from '../../../database/database'   
import Delete from '../../../../public/icons/Delete'
import Edit from '../../../../public/icons/Edit'
import EditTaskModal from './EditTaskModal'
import { priorityLabels, Task } from '@/types/types'
import { useLocale } from 'next-intl'
import { FormatDate } from '@/utils/helper/formatDate'
import DeleteModal from '@/components/common/DeleteModal'


interface IProps{
  item: Task;
  setTasks: (tasks: Task[] | ((prev: Task[]) => Task[])) => void;
}


const priorityClasses = {
  High: "text-[#EB5757] bg-[#EB5757]/16",
  Medium: "text-[#FFB700] bg-[#FFB700]/16",
  Low: "text-[#2CC535] bg-[#2CC535]/16",
};


const TaskCard = ({item, setTasks}: IProps) => {
  
  const locale = useLocale();
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
    <div className='flex items-center w-full p-2 bg-[#FFFFFF] rounded-lg   dark:bg-[#0D3C61]'>
      <div className='flex items-center gap-2 pr-3'>
        <input onChange={toggleComplete} type="checkbox" checked={item.completed} className='w-3 h-3 cursor-pointer'/>
        <div className='w-[116px] text-sm font-medium text-[#404040]   dark:text-[#F5F5F5]'>
          <h4>{item.title}</h4>
        </div>
      </div>
      <div  className='w-[260px] text-sm font-regular text-[#404040]   dark:text-[#F5F5F5]'>
        <p>{item.description}</p>
      </div>
      <div className='flex justify-center w-24'>
        <div className={`py-1 px-4 text-xs font-regular ${priorityClasses[item.priority]} rounded-[48px]`}>
          <span>{priorityLabels[locale as keyof typeof priorityLabels]?.[item.priority] || item.priority}</span>
        </div>
      </div>
      <div className='flex justify-center w-30 text-sm font-regular text-[#404040]   dark:text-[#F5F5F5]'>
        <span>{item.category}</span>
      </div>
      <div className='flex justify-center w-22 text-sm font-regular text-[#404040]   dark:text-[#F5F5F5]'>
        <span>{FormatDate(item.startTime, locale as "fa" | "en")}</span>
      </div> 
      <div className='flex justify-center w-22 text-sm font-regular text-[#404040]   dark:text-[#F5F5F5]'>
        <span>{FormatDate(item.startTime, locale as "fa" | "en")}</span>
      </div>
      <div className='flex gap-2 pl-10'>
        <button onClick={() => {setIsOpenEditModal((prev) => !prev)}} className='cursor-pointer'>
          <Edit className='w-5 h-5 text-[#404040]   dark:text-[#F5F5F5]'/>
        </button>
        <button onClick={() => {setIsOpenDeleteModal((prev) => !prev)}} className='cursor-pointer'>
          <Delete className='w-5 h-5 text-[#EB5757]'/>
        </button>
      </div>
      {
        isOpenEditModal && (
          <EditTaskModal item={item} setTasks={setTasks} setIsOpenEditModal={setIsOpenEditModal}/>
        )
      }
      {
        isOpenDeleteModal && (
          <DeleteModal item={item} onDelete={onDelete} setIsOpenDeleteModal={setIsOpenDeleteModal}/>
        )
      }
    </div>
  )
}

export default TaskCard