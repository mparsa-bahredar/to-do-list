import { useTranslations } from "next-intl";


const TaskTableTitle = () => {

  const t = useTranslations("main");


  return (
    <div className='flex py-2 px-4 bg-[#D3EAFD] rounded-[8px]   dark:bg-[#145A92]'>
      <div className='flex w-[148px]'>
        <h4 className='font-medium text-sm text-[#2196F3]   dark:text-[#F5F5F5]'>{t("title")}</h4>
      </div>
      <div className='w-[260px]'>
        <h4 className='font-medium text-sm text-[#2196F3]   dark:text-[#F5F5F5]'>{t("description")}</h4>
      </div>
      <div className='flex justify-center w-24'>
        <h4 className='font-medium text-sm text-[#2196F3]   dark:text-[#F5F5F5]'>{t("priority")}</h4>
      </div>
      <div className='flex justify-center w-30'>
        <h4 className='font-medium text-sm text-[#2196F3]   dark:text-[#F5F5F5]'>{t("category")}</h4>
      </div>
      <div className='flex justify-center w-22'>
        <h4 className='font-medium text-sm text-[#2196F3]   dark:text-[#F5F5F5]'>{t("startTime")}</h4>
      </div>
      <div className='flex justify-center w-22'>
        <h4 className='font-medium text-sm text-[#2196F3]   dark:text-[#F5F5F5]'>{t("endTime")}</h4>
      </div>
      <div className='flex'>
        <h4 className='font-medium text-sm text-[#2196F3]   dark:text-[#F5F5F5]'>{t("actions")}</h4>
      </div>
    </div>
  )
}

export default TaskTableTitle