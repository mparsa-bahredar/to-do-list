'use client'

import { getCategories, saveCategories } from "@/database/database";
import debounce from "lodash.debounce";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";


interface IProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}


const CategoriesSearch = ({ setSearch }: IProps) => {


    const t = useTranslations("categories");
    const [title, setTitle] = useState("");


    const debouncedSearch = useCallback(
        debounce((value: string) => {
            setSearch(value);
        }, 3000),
        [setSearch]
    );
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debouncedSearch(e.target.value);
    };


    const addCategory = () => {
        if (!title.trim()) return;

        const all = getCategories();
        const newId = Math.max(...all.map((c) => c.id), 0) + 1;
        const updated = [...all, { id: newId, title: title.trim() }];

        saveCategories(updated);
        setTitle("");
        window.location.reload();
    };

    
    return (
        <div className="flex w-full justify-between">
            <input
                onChange={handleSearchChange}
                type="text"
                placeholder={t("searchPlc")}
                className="w-64 h-10 px-3 text-[#262626] bg-[#F5F5F5] rounded-lg outline-none   
                placeholder:text-[#A3A3A3]
                dark:text-[#E4E4E4] dark:bg-[#0A2D49]"
            />

            <div className="flex gap-2">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addCategory()}
                    type="text"
                    placeholder={t("titlePlc")}
                    className="w-64 h-10 px-3 text-[#262626] bg-[#F5F5F5] rounded-lg outline-none   
                    placeholder:text-[#A3A3A3]
                    dark:text-[#E4E4E4] dark:bg-[#0A2D49]"
                />

                <button
                    onClick={addCategory}
                    className="h-10 px-4 text-white bg-[#2196F3] rounded-lg cursor-pointer"
                >
                    {t("addBtn")}
                </button>
            </div>
        </div>
    );
};

export default CategoriesSearch;