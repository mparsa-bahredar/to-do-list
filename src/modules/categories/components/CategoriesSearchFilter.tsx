import { getCategories, saveCategories } from "@/database/database";
import { Category } from "@/types/types";
import debounce from "lodash.debounce";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";



const CategoriesSearchFilter = () => {

    const t = useTranslations("categories")

    const [title, setTitle] = useState("")
    const [searchValue, setSearchValue] = useState<string>("")

    const debouncedSearch = useCallback(
        debounce((value: string) => {
        setSearchValue(value)
        }, 3000),
        [searchValue]
    )

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchValue(value)
        debouncedSearch(value)
    }


    const addCategory = () => {
        if (!title.trim()) return
        const newCategory: Category = {
            id: Date.now(),
            title: title.trim(),
        }
        const updated = [...getCategories(), newCategory]
        saveCategories(updated)
        setTitle('')
        window.location.reload()
    }
    const handleTaskKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addCategory()
    }


    return (
        <div className="flex w-full justify-between relative">
            <input
            value={searchValue}
            onChange={handleSearchChange}
            type="text"
            placeholder={t("searchPlc")}
            className="w-64 h-10 font-regular text-sm text-[#A3A3A3] placeholder:text-[#A3A3A3] indent-3 bg-[#F5F5F5] rounded-lg 
            outline-none focus:ring-1 focus:ring-[#E4E4E4] 
            dark:text-[#F5F5F5] dark:placeholder:text-[#A3A3A3] dark:bg-[#0A2D49]"/>
            <div className="flex items-center gap-2">
                <div className="flex relative">
                <input
                value={title}
                type="text"
                placeholder={t("titlePlc")}
                onKeyDown={handleTaskKeyDown}
                onChange={e => setTitle(e.target.value)}
                className="w-64 h-10 font-regular text-sm text-[#262626] indent-3 placeholder:text-[#A3A3A3] bg-[#F5F5F5] rounded-[8px] 
                outline-none focus:ring-1 focus:ring-[#E4E4E4] 
                dark:text-[#F5F5F5] dark:placeholder:text-[#A3A3A3] dark:bg-[#0A2D49]"/>
                </div>
                <button
                onClick={addCategory}
                className="h-9 px-3 font-medium text-sm text-[#FFFFFF] bg-[#2196F3] rounded-lg cursor-pointer">
                {t("addBtn")}
                </button>
            </div>
        </div>    
    )

}

export default CategoriesSearchFilter