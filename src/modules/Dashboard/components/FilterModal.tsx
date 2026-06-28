'use client'
import { getCategories } from '@/database/database'
import Close from '../../../../public/icons/Close'
import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-multi-date-picker'
import TimePicker from 'react-multi-date-picker/plugins/time_picker'
import { Category } from '@/types/types'
import { useTranslations } from 'next-intl'


interface IProps{
  filters: {search: string, priority: '' | 'High' | 'Medium' | 'Low', category: string, startTime?: string, endTime?: string};
  setFilters: React.Dispatch<React.SetStateAction<{search: string, priority: '' | 'High' | 'Medium' | 'Low', category: string,
  startTime?: string, endTime?: string}>>;
  setIsOpenFilterModal: (value: boolean) => void;
}


const FilterModal = ({ filters, setFilters, setIsOpenFilterModal }: IProps) => {


  const t = useTranslations("main")
  
  const [tempFilters, setTempFilters] = useState(filters);
  const [categories, setCategories] = useState<Category[]>(getCategories())

  
  
  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTempFilters(prev => ({ ...prev, priority: e.target.value as 'High' | 'Medium' | 'Low' | '' }));
  };


  const onApplyFilters = () => {
    setFilters(tempFilters);
    setIsOpenFilterModal(false);
  };


  return (
    <>
      <div onClick={() => setIsOpenFilterModal(false)} className='bg-black/20 fixed inset-0 z-40'/>
      <div className='flex flex-col gap-4 p-6 bg-[#FFFFFF] shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-xl -translate-x-1/2 
      -translate-y-1/2 fixed top-1/2 left-1/2 z-64   
      dark:bg-[#0D3C61]'>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold text-xl text-[#404040]   dark:text-[#F5F5F5]'>{t("filters")}</h3>
          <div onClick={() => setIsOpenFilterModal(false)}>
            <Close className='w-6 h-6 text-[#404040] cursor-pointer   dark:text-[#F5F5F5]'/>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h4 className='w-full font-medium text-base text-[#404040]   dark:text-[#F5F5F5]'>{t("priority")}</h4>
          <select value={tempFilters.priority} onChange={handlePriorityChange} className='py-2 px-2 w-[400px] font-regular text-sm 
          text-[#404040] border border-[#E4E4E4] rounded-xl   dark:text-[#F5F5F5] dark:bg-[#0A2D49] dark:border-[#145A92]'>
            <option value=''>All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <h4 className='w-full font-medium text-base text-[#404040]   dark:text-[#F5F5F5]'>{t("category")}</h4>
          <select
            value={tempFilters.category}
            onChange={(e) => setTempFilters(prev => ({ ...prev, category: e.target.value }))}
            className='w-[400px] h-9 px-2 font-regular text-sm text-[#404040] border border-[#E4E4E4] rounded-xl 
            dark:text-[#F5F5F5] dark:bg-[#0A2D49] dark:border-[#145A92]'>
            <option value="">-- All categories --</option>
            {categories.map((item) => (
              <option value={item.title} key={item.id}>{item.title}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-medium text-base text-[#404040] dark:text-[#F5F5F5]">{t("startTime")}</h4>
          <DatePicker
          value={tempFilters.startTime ? new Date(tempFilters.startTime) : null}
          onChange={(date) => setTempFilters(prev => ({...prev, startTime: date?.toString()}))}
          plugins={[<TimePicker position="bottom" />]}
          format="YYYY/MM/DD HH:mm" 
          inputClass='w-full h-9 text-[#404040] indent-2 bg-[#F5F5F5] rounded-xl   dark:text-[#F5F5F5] dark:bg-[#0A2D49]'
          containerClassName="custom-calendar"/>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-medium text-base text-[#404040] dark:text-[#F5F5F5]">{t("endTime")}</h4>
          <DatePicker value={tempFilters.endTime ? new Date(tempFilters.endTime) : null}
          onChange={(date) => setTempFilters(prev => ({...prev, endTime: date?.toString()}))}
          plugins={[<TimePicker position="bottom"/>]}
          format="YYYY/MM/DD HH:mm" 
          inputClass='w-full h-9 text-[#404040] indent-2 bg-[#F5F5F5] rounded-xl   dark:text-[#F5F5F5] dark:bg-[#0A2D49]'
          containerClassName="custom-calendar"/>
        </div>
        <button onClick={onApplyFilters} className='w-full py-2 font-medium text-sm text-[#FFFFFF] bg-[#2196F3] 
        rounded-xl cursor-pointer'>
          {t("applyFilters")}
        </button>
      </div>
    </>
  );
}

export default FilterModal;