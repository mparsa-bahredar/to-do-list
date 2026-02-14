import React, { useState, useMemo, useEffect } from 'react'
import FilterModal from '../FilterModal/FilterModal'
import AddTaskModal from '../AddTaskModal/AddTaskModal'
import Add from '../../icons/Add'
import { type Task } from '../../database/database'
import debounce from 'lodash.debounce'


const SearchFilter = ({ setTasks, filters, setFilters }: { 
  setTasks: React.Dispatch<React.SetStateAction<Task[]>> 
  filters: { search: string, priority: '' | 'High' | 'Medium' | 'Low'}
  setFilters: React.Dispatch<React.SetStateAction<{ search: string, priority: '' | 'High' | 'Medium' | 'Low' }>>
}) => {

  const [isOpenFilterModal, setIsOpenFilterModal] = useState(false)
  const [isOpenAddModal, setIsOpenAddModal] = useState(false)

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setFilters(prev => ({
          ...prev,
          search: value
        }))
      }, 2000),
    [setFilters]
  )

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value)
  }


  
  return(
    <div className='flex w-[600px] justify-between relative'>
      <div className='flex gap-2'>
        <button 
          onClick={() => setIsOpenFilterModal(prev => !prev)}
          className='py-2 px-3 font-medium text-sm text-[#404040] border border-[2px] border-[#E4E4E4] rounded-lg cursor-pointer
          dark:text-[#F5F5F5]'>
          Filter
        </button>

        <input 
          onChange={onSearchChange}
          className='w-[400px] pl-2 text-left text-[#525252] bg-[#F5F5F5] outline-none focus:ring-2 focus:ring-[#E4E4E4] rounded-lg
          dark:text-[#F5F5F5] dark:bg-gray-500' 
          defaultValue={filters.search}
          type='text' 
          placeholder='Search tasks...'
        />
      </div>

      <button 
        onClick={() => setIsOpenAddModal(prev => !prev)} 
        className='flex items-center gap-1 py-1 pr-2 pl-1 font-medium text-sm text-[#FFFFFF] bg-[#1E88E5] rounded-lg cursor-pointer'>
        <Add className='w-5 h-5 text-[#FFFFFF]'/>
        <span>Add</span>
      </button>

      {isOpenFilterModal && (
        <FilterModal
          filters={filters}
          setFilters={setFilters}
          setIsOpenFilterModal={setIsOpenFilterModal}
        />
      )}

      {isOpenAddModal && (
        <AddTaskModal
          setTasks={setTasks}
          setIsOpenAddModal={setIsOpenAddModal}
        />
      )}
    </div>
  )
}

export default SearchFilter
