import Close from '../../icons/Close'
import React from 'react'
import { useState } from 'react'

const FilterModal = ({ filters, setFilters, setIsOpenFilterModal }: { 
  filters: { search: string, priority: '' | 'High' | 'Medium' | 'Low' }, 
  setFilters: React.Dispatch<React.SetStateAction<{ search: string, priority: '' | 'High' | 'Medium' | 'Low' }>>, 
  setIsOpenFilterModal: (value: boolean) => void 
}) => {

  const [tempFilters, setTempFilters] = useState(filters);

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTempFilters(prev => ({ ...prev, priority: e.target.value as 'High' | 'Medium' | 'Low' | '' }));
  };

  const onApplyFilters = () => {
    setFilters(tempFilters);
    setIsOpenFilterModal(false);
  };

  return (
    <div onClick={() => {setIsOpenFilterModal(false)}} className='absolute top-10 left-0 z-50'>
      <div className='flex flex-col gap-4 p-6 bg-[#FFFFFF] shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-xl
      dark:bg-gray-600'>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold text-xl text-[#404040]   dark:text-[#F5F5F5]'>Filters</h3>
          <div onClick={() => setIsOpenFilterModal(false)}>
            <Close className='w-5 h-5 text-[#404040] cursor-pointer   dark:text-[#F5F5F5]'/>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h4 className='w-full font-medium text-base text-left text-[#404040]   dark:text-[#F5F5F5]'>Priority :</h4>
          <select value={tempFilters.priority} onChange={handlePriorityChange} className='py-2 px-2 w-[400px] font-regular text-sm 
          text-[#404040] border border-[#E4E4E4] rounded-xl   dark:text-[#F5F5F5] dark:bg-gray-500'>
            <option value=''>All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <button onClick={onApplyFilters} className='w-full py-2 font-medium text-sm text-[#FFFFFF] bg-[#1E88E5] 
        rounded-xl cursor-pointer'>
          See Results
        </button>
      </div>
    </div>
  );
}

export default FilterModal;