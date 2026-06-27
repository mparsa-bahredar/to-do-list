import { useTranslations } from "next-intl";


const CategoriesTableTitle = () => {

  const t = useTranslations("categories");


  return (
    <div className='flex py-2 px-4 bg-[#D3EAFD] rounded-[8px]   dark:bg-[#145A92]'>
      <div className='flex w-[148px]'>
        <h4 className='font-medium text-sm text-[#2196F3]   dark:text-[#F5F5F5]'>{t("title")}</h4>
      </div>
    </div>
  )
}

export default CategoriesTableTitle