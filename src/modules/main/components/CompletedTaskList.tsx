import React from 'react'
import TaskTableTitle from './TaskTableTitle'
import TaskCard from './TaskCard'
import { Task } from '@/types/types'
import { useTranslations } from 'next-intl'


const CompletedTaskList = ({ setTasks, completedTasks }: 
{ setTasks:React.Dispatch<React.SetStateAction<Task[]>>, completedTasks: Task[] }) => {


  const t = useTranslations("mainPage");


  return (
    <div className='flex flex-col gap-3 items-start'>
      <h3 className='font-semibold text-base text-[#404040]   dark:text-[#F5F5F5]'>{t("completedTasks")}</h3>
      <div className='flex flex-col gap-3 w-full p-3 rounded-lg bg-[#F5F5F5]   dark:bg-[#002D3C]'>
        <TaskTableTitle/>
        <div className='flex flex-col gap-2 w-full max-h-[160px] overflow-y-auto scrollbar'>
          {completedTasks.length === 0 ? (
            <div className='flex justify-center w-full'>
              <p className='font-regular text-base text-[#404040]   dark:text-[#F5F5F5]'>{t("thereIsNoTasks")}</p>
            </div>
          ) : (
            completedTasks.map((item) => (
              <TaskCard item={item} key={item.id} setTasks={setTasks}/>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default CompletedTaskList