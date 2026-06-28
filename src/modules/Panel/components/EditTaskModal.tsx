import React, { useState } from 'react'
import Close from '../../../../public/icons/Close'
import { getCategories, saveTasks } from '../../../database/database'
import DatePicker from 'react-multi-date-picker'
import TimePicker from 'react-multi-date-picker/plugins/time_picker'
import { Task } from '@/types/types'
import { useTranslations } from 'next-intl'


interface IProps{
  item: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setIsOpenEditModal: (value: boolean) => void;
}


const EditTaskModal = ({ item, setTasks, setIsOpenEditModal }: IProps) => {


  const t = useTranslations("main");

  const [title, setTitle] = useState<string>(item.title)
  const [description, setDescription] = useState<string>(item.description)
  const [priority, setPriority] = useState<Task['priority']>(item.priority)
  const [category, setCategory] = useState<string>(item.category)
  const categories = getCategories(); 
  const [startTime, setStartTime] = useState<string | undefined>(item.startTime)
  const [endTime, setEndTime] = useState<string | undefined>(item.endTime)


  const editTask = () => {
    if (!title.trim()) return
    setTasks((prev) => {
      const updated = prev.map(task => task.id === item.id ? {...task, title, description, priority, category, startTime, endTime}: task)
      saveTasks(updated)
      return updated
    })
    setIsOpenEditModal(false)
  }

  
  return (
    <>
      <div onClick={() => setIsOpenEditModal(false)} className='bg-black/20 fixed inset-0 z-40'/>
      <div className='flex flex-col gap-4 p-6 bg-[#FFFFFF] rounded-xl shadow-[0_0_8px_rgba(0,0,0,0.1)] -translate-x-1/2 
      -translate-y-1/2 fixed top-1/2 left-1/2 z-64   
      dark:bg-[#0D3C61]'>
        <div className='flex justify-between w-[400px]'>
          <h3 className='font-semibold text-xl text-[#404040]   dark:text-[#F5F5F5]'>{t("editTask")}</h3>
          <div onClick={() => setIsOpenEditModal(false)}>
            <Close className='w-6 h-6 text-[#404040] cursor-pointer   dark:text-[#F5F5F5]'/>
          </div>
        </div>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <h4 className='w-full font-medium text-base text-[#404040]   dark:text-[#F5F5F5]'>{t("title")}</h4>
              <input 
              onChange={(e) => setTitle(e.target.value)} 
              type="text" 
              value={title} 
              placeholder={t("titlePlc")}
              className='w-[400px] py-2 pl-2 font-regular text-sm text-[#525252] indent-3 bg-[#F5F5F5] outline-none focus:ring-2 
              focus:ring-[#E4E4E4] rounded-lg
              dark:text-[#F5F5F5] dark:bg-[#0A2D49]'/>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='w-full font-medium text-base text-[#404040]   dark:text-[#F5F5F5]'>{t("description")}</h4>
              <input 
              onChange={(e) => setDescription(e.target.value)} 
              type="text" 
              value={description} 
              placeholder={t("descriptionPlc")}
              className='w-[400px] py-2 pl-2 font-regular text-sm text-[#525252] indent-3 bg-[#F5F5F5] outline-none focus:ring-2 
              focus:ring-[#E4E4E4] rounded-lg
              dark:text-[#F5F5F5] dark:bg-[#0A2D49]'/>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='w-full font-medium text-base text-[#404040]   dark:text-[#F5F5F5]'>{t("priority")}</h4>
              <select value={priority} onChange={(e) => setPriority(e.target.value as 'High' | 'Medium' | 'Low')}
              className='py-2 px-2 w-[400px] font-regular text-sm text-[#404040] border border-[#E4E4E4] rounded-xl
              dark:text-[#F5F5F5] dark:bg-[#0A2D49] dark:border-[#145A92]'>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='w-full font-medium text-base text-[#404040] dark:text-[#F5F5F5]'>{t("category")}</h4>
              <select
                value={category} onChange={(e) => setCategory(e.target.value)}
                className='w-[400px] h-9 px-2 font-regular text-sm text-[#404040] border border-[#E4E4E4] rounded-xl 
                dark:text-[#F5F5F5] dark:bg-[#0A2D49] dark:border-[#145A92]'>
                <option value="">-- Select category (optional) --</option> 
                  {categories.map((item) => (
                    <option value={item.title} key={item.id}>{item.title}</option>
                  ))}
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h4 className="font-medium text-base text-[#404040] dark:text-[#F5F5F5]">{t("startTime")}</h4>
              <DatePicker
                value={startTime ? new Date(startTime) : null} onChange={(date) => setStartTime(date?.toString())}
                plugins={[<TimePicker position="bottom" />]} format="YYYY/MM/DD HH:mm" className="w-full h-10"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h4 className="font-medium text-base text-[#404040] dark:text-[#F5F5F5]">{t("endTime")}</h4>
              <DatePicker
                value={endTime ? new Date(endTime) : null} onChange={(date) => setStartTime(date?.toString())}
                plugins={[<TimePicker position="bottom" />]} format="YYYY/MM/DD HH:mm" className="w-full h-10"/>
            </div>
          </div>
          <button onClick={editTask} type='button' 
          className='w-full py-2 font-medium text-sm text-[#FFFFFF] bg-[#2196F3] rounded-lg cursor-pointer'>{t("saveBtn")}</button>
        </div>
      </div>
    </>
  )
}

export default EditTaskModal