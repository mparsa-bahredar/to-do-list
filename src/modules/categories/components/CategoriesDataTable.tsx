"use client"
import { useState } from "react"
import CategoriesTableTitle from "./CategoriesTableTitle"
import { getCategories } from "@/database/database"
import CategoryCard from "./CategoryCard"
import CategoriesSearchFilter from "./CategoriesSearchFilter"



const CategoriesDataTable = () => {

    const [categories, setCategories] = useState(getCategories())

    return (
        <div className="flex flex-col gap-4 w-[960px] p-6 bg-[#FFFFFF] rounded-[12px]">
            <CategoriesSearchFilter/>
            <CategoriesTableTitle/>
            <div className="flex flex-col gap-2">
                {
                    categories.map((item, index) => (
                        <CategoryCard item={item} key={item.id || index}/>
                    ))
                }
            </div>
        </div>
    )

}

export default CategoriesDataTable

