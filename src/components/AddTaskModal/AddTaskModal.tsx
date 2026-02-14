import Close from '../../icons/Close'
import React, {useState} from 'react'
import { getTasks, saveTasks, type Task } from '../../database/database'


const AddTaskModal = ({ setTasks, setIsOpenAddModal }: { setTasks:React.Dispatch<React.SetStateAction<Task[]>>,
    setIsOpenAddModal: (value: boolean) => void }) => {

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>('Medium')

    const addTask = () => {
        if (!title.trim()) return
        const newTask: Task = {
            id: Date.now(),
            title,
            description,
            completed: false,
            priority
        }
        setTasks(prev => {
            const updated = [...prev, newTask]
            saveTasks(updated)
            return updated
        })
        setIsOpenAddModal(false)
    }


  return(
    <div className='flex flex-col gap-4 p-6 bg-[#FFFFFF] shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-xl absolute top-12 right-0 z-64
    dark:bg-gray-600'>
        <div className='flex justify-between w-full'>
            <h3 className='font-semibold text-xl text-[#404040]   dark:text-[#F5F5F5]'>Add Task</h3>
            <div onClick={() => setIsOpenAddModal(false)}>
                <Close className='w-5 h-5 text-[#404040] cursor-pointer   dark:text-[#F5F5F5]'/>
            </div>
        </div>
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <h4 className='w-full font-medium text-base text-left text-[#404040]   dark:text-[#F5F5F5]'>Title :</h4>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} placeholder='Enter the task name'
                    className='w-[400px] py-2 pl-2 font-regular text-sm text-left text-[#525252] bg-[#F5F5F5] outline-none focus:ring-2 
                    focus:ring-[#E4E4E4] rounded-lg
                    dark:text-[#F5F5F5] dark:bg-gray-500'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <h4 className='w-full font-medium text-base text-left text-[#404040]   dark:text-[#F5F5F5]'>Description :</h4>
                    <input onChange={(e) => setDescription(e.target.value)} type="text" value={description} 
                    placeholder='Enter the task description'
                    className='w-[400px] py-2 pl-2 font-regular text-sm text-left text-[#525252] bg-[#F5F5F5] outline-none focus:ring-2 
                    focus:ring-[#E4E4E4] rounded-lg
                    dark:text-[#F5F5F5] dark:bg-gray-500'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <h4 className='w-full font-medium text-base text-left text-[#404040]   dark:text-[#F5F5F5]'>Priority :</h4>
                    <select value={priority} onChange={(e) => setPriority(e.target.value as 'High' | 'Medium' | 'Low')}
                    className='py-2 px-2 w-[400px] font-medium text-sm text-[#404040] border border-[#E4E4E4] rounded-xl
                    dark:bg-gray-500 dark:text-[#F5F5F5]'>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
            </div> 
            <button onClick={addTask} type='button' 
            className='w-full py-2 font-medium text-sm text-[#FFFFFF] bg-[#1E88E5] rounded-lg cursor-pointer'>Add</button>
        </div>
    </div>
  )
}

export default AddTaskModal