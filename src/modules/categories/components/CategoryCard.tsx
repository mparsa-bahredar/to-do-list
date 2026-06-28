import { Category } from "@/types/types"
import Edit from "../../../../public/icons/Edit";
import Delete from "../../../../public/icons/Delete";
import { useState } from "react";
import EditCategoryModal from "./EditCategoryModal";
import DeleteModal from "@/components/common/DeleteModal";
import { saveCategories } from "@/database/database";


interface IProps{
    item: Category;
    setCategories: React.Dispatch<React.SetStateAction<Category[]>>
}

const CategoryCard = ({item, setCategories}: IProps) => {

    const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false)
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)

    const onDeleteCategory = () => {
    setCategories(prev => {
        const updated = prev.filter(category => category.id !== item.id)
        saveCategories(updated)
        return updated
    })
    setIsOpenDeleteModal(false)
    }

    const handleOpenDeleteModal = (value: boolean) => {
        setIsOpenDeleteModal(value);    
    }
    const handleOpenEditModal = (value: boolean) => {
        setIsOpenEditModal(value);    
    }


    return (
        <>
            <div className="flex justify-between items-center w-full py-2 px-4 font-medium text-[16px] text-[#262626] bg-[#FFFFFF] 
            rounded-[8px]
            dark:bg-[#0D3C61]">
                <span className="text-[#262626]   dark:text-[#E4E4E4]">{item.title}</span>
                <div className="flex items-center gap-2">
                    <div onClick={() => {handleOpenEditModal(true)}} className="text-[#262626] cursor-pointer   dark:text-[#E4E4E4]">
                        <Edit className="w-5 h-5"/>
                    </div>
                    <div onClick={() => {handleOpenDeleteModal(true)}} className="text-[#EB5757] cursor-pointer">   
                        <Delete className="w-5 h-5"/>
                    </div>
                </div>
            </div>
            {
                isOpenEditModal && (
                <EditCategoryModal item={item} setCategories={setCategories} setIsOpenEditModal={setIsOpenEditModal}/>
                )
            }
            {
                isOpenDeleteModal && (
                    <DeleteModal item={item} onDelete={onDeleteCategory} setIsOpenDeleteModal={setIsOpenDeleteModal}/>                
                )
            }
        </>
    )

}

export default CategoryCard

