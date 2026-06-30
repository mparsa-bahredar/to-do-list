'use client'
import React, { useCallback, useState } from 'react'
import debounce from 'lodash.debounce'
import FilterModal from './FilterModal'
import AddTaskModal from './AddTaskModal'
import Add from '../../../../public/icons/Add'
import { saveTasks } from '../../../database/database'
import { useLocale, useTranslations } from 'next-intl'
import { Task } from '@/types/types'


interface IProps {
  setTasks: (tasks: Task[] | ((prev: Task[]) => Task[])) => void
  filters: {search: string, priority: '' | 'High' | 'Medium' | 'Low', category: string, startTime?: string, endTime?: string}
  setFilters: React.Dispatch<
    React.SetStateAction<{
      search: string
      priority: '' | 'High' | 'Medium' | 'Low'
      category: string
      startTime?: string
      endTime?: string
    }>
  >
}


const SearchFilter = ({ setTasks, filters, setFilters }: IProps) => {

  const t = useTranslations("main")
  const locale = useLocale();

  const [title, setTitle] = useState('')
  const [searchValue, setSearchValue] = useState(filters.search)
  const [isOpenFilterModal, setIsOpenFilterModal] = useState(false)
  const [isOpenAddModal, setIsOpenAddModal] = useState(false)

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setFilters(prev => ({
        ...prev,
        search: value
      }))
    }, 3000),
    [setFilters]
  )
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    debouncedSearch(value)
  }

  const addTask = () => {
    if (!title.trim()) return
    const newTask: Task = {
      id: Date.now(),
      title,
      description: '',
      completed: false,
      priority: 'Medium',
      category: '',
    }
    setTasks(prev => {
      const updated = [...prev, newTask]
      saveTasks(updated)
      return updated
    })
    setTitle('')
  }

  const handleTaskKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addTask()
  }


  return (
    <div className='flex w-full justify-between'>
      <div className='flex items-center gap-2'>
        <button
        onClick={() => setIsOpenFilterModal(prev => !prev)}
        className='px-3 h-10 font-medium text-sm text-[#404040] border border-[2px] border-[#E4E4E4] rounded-lg cursor-pointer 
        dark:text-[#E4E4E4] dark:border-[#E4E4E4]'>
          {t("filters")}
        </button>
        <input
        value={searchValue}
        onChange={handleSearchChange}
        type='text'
        placeholder={t("searchPlc")}
        className='w-64 h-10 font-regular text-sm text-[#262626] placeholder:text-[#A3A3A3] indent-3 bg-[#F5F5F5] rounded-lg 
        outline-none focus:ring-1 focus:ring-[#E4E4E4] 
        dark:text-[#F5F5F5] dark:bg-[#0A2D49]'/>
      </div>
      <div className='flex items-center gap-2'>
        <div className='flex relative'>
          <input
          value={title}
          type='text'
          placeholder={t("titlePlc")}
          onKeyDown={handleTaskKeyDown}
          onChange={e => setTitle(e.target.value)}
          className='w-64 h-10 font-regular text-sm text-[#262626] indent-3 placeholder:text-[#A3A3A3] bg-[#F5F5F5] rounded-[8px] 
          outline-none focus:ring-1 focus:ring-[#E4E4E4] 
          dark:text-[#F5F5F5] dark:bg-[#0A2D49]'/>
          <button
          onClick={() => setIsOpenAddModal(prev => !prev)}
          className={`flex items-center gap-1 px-2 h-7 font-medium text-xs text-[#262626] bg-[#FFFFFF] rounded-lg cursor-pointer 
          absolute top-1.5
          ${locale === "en" ? " right-1.5" : "left-1.5"}
          dark:text-[#FFFFFF] dark:bg-[#145A92]`}>
            <Add className='w-4 h-4'/>
            <span>{t("moreBtn")}</span>
          </button>
        </div>
        <button
        onClick={addTask}
        className='h-10 px-3 font-medium text-sm text-[#FFFFFF] bg-[#2196F3] rounded-lg cursor-pointer'>
          {t("addBtn")}
        </button>
      </div>
      {isOpenFilterModal && (
        <FilterModal filters={filters} setFilters={setFilters} setIsOpenFilterModal={setIsOpenFilterModal}/>
      )}
      {isOpenAddModal && (
        <AddTaskModal setTasks={setTasks} setIsOpenAddModal={setIsOpenAddModal}/>
      )}
    </div>
  )
}

export default SearchFilter