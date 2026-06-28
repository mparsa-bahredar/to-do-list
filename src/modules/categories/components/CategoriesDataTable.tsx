"use client";
import { useState, useEffect } from "react";
import CategoriesTableTitle from "./CategoriesTableTitle";
import { getCategories } from "@/database/database";
import CategoryCard from "./CategoryCard";
import CategoriesSearch from "./CategoriesSearch";
import { Category } from "@/types/types";
import Pagination from "@/components/common/Pagination";
import ShowNumber from "@/components/common/ShowNumber";


const CategoriesDataTable = () => {

    
    const [isMounted, setIsMounted] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [search, setSearch] = useState("");
    
    useEffect(() => {
        setIsMounted(true);
        setCategories(getCategories());
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [search]);


    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredCategories = categories.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));

    const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

    const paginatedCategories = filteredCategories.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


    if (!isMounted) {
        return (
            <div className="flex flex-col gap-4 w-[960px] p-6 bg-[#FFFFFF] rounded-[12px]">
                <CategoriesSearch setSearch={setSearch} />
                <CategoriesTableTitle/>
                <div className="flex flex-col gap-2"></div>
            </div>
        );
    }


    return (
        <div className="flex flex-col gap-4 w-[960px] p-6 bg-[#FFFFFF] rounded-[12px]   dark:bg-[#0D3C61]">
            <CategoriesSearch setSearch={setSearch}/>
            <div className="flex flex-col gap-4 w-full p-4 bg-[#F5F5F5] rounded-[8px]   dark:bg-[#0A2D49]">
                <CategoriesTableTitle/>
                <div className="flex flex-col gap-2">
                    {paginatedCategories.map((item) => (
                        <CategoryCard
                            key={item.id}
                            item={item}
                            setCategories={setCategories}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
                <ShowNumber itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    );
};

export default CategoriesDataTable;