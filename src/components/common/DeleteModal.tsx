import { Category, Task } from '@/types/types';
import { useTranslations } from 'next-intl';
import React from 'react'


interface IProps{
  item: Task | Category
  onDelete:  () => void
  setIsOpenDeleteModal: (value: boolean) => void
}


const DeleteModal = ({item, onDelete, setIsOpenDeleteModal}: IProps) => {

  const t = useTranslations("main");

  return (
    <>
      <div onClick={() => setIsOpenDeleteModal(false)} className='bg-black/20 fixed inset-0 z-40'/>
      <div className='flex flex-col items-center gap-8 p-8 bg-[#FFFFFF] rounded-xl shadow-[0_0_8px_rgba(0,0,0,0.1)] -translate-x-1/2 
      -translate-y-1/2 fixed top-1/2 left-1/2 z-64   
      dark:bg-[#0D3C61]'>
        <h4 className='font-medium text-base text-[#404040]   dark:text-[#F5F5F5]'>{t("sureAboutDelete")}</h4>
        <div className='flex justify-center gap-3 w-full'>
          <button onClick={() => setIsOpenDeleteModal(false)} 
          className='w-full py-2 font-medium text-sm text-[#262626] border border-[#A3A3A3] rounded-lg cursor-pointer   
          dark:text-[#E4E4E4] dark:border-[#E4E4E4]'>
            {t("cancel")}
          </button>
          <button onClick={() => {onDelete(); setIsOpenDeleteModal(false)}}
          className='w-full py-2 font-medium text-sm text-[#FFFFFF] bg-[#EB5757] rounded-lg cursor-pointer'>{t("deleteBtn")}</button>
        </div>
      </div>
    </>
  )
}

export default DeleteModal
