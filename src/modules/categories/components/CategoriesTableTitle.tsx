import { useTranslations } from "next-intl";


const CategoriesTableTitle = () => {

  const t = useTranslations("categories");


  return (
    <div className='flex justify-between py-2 px-4 font-medium text-sm text-[#2196F3] bg-[#D3EAFD] rounded-[8px]   
    dark:text-[#F5F5F5] dark:bg-[#145A92]'>
      <span>{t("title")}</span>
      <span>{t("actions")}</span>
    </div>
  )
}

export default CategoriesTableTitle