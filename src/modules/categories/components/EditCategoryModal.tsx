import { Category } from "@/types/types"
import Close from "../../../../public/icons/Close";
import { useState } from "react";
import { saveCategories } from "@/database/database";



interface IProps{
    item: Category;
    setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
    setIsOpenEditModal: (value: boolean) => void;
}

const EditCategoryModal = ({item, setCategories, setIsOpenEditModal}: IProps) => {

    
    const [title, setTitle] = useState<string>(item.title)

    const editCategory = () => {
        if (!title.trim()) return
        setCategories((prev) => {
            const updated = prev.map(category => category.id === item.id ? { ...category, title } : category)
            saveCategories(updated)
            return updated
        })
        setIsOpenEditModal(false)
    }

    return (
        <>
            <div onClick={() => setIsOpenEditModal(false)} className='bg-black/20 fixed inset-0 z-40'/>
            <div className='flex flex-col gap-4 p-6 bg-[#FFFFFF] rounded-xl shadow-[0_0_8px_rgba(0,0,0,0.1)] -translate-x-1/2 
            -translate-y-1/2 fixed top-1/2 left-1/2 z-64   
            dark:bg-[#0D3C61]'>
                <div className='flex justify-between w-[400px]'>
                    <h3 className='font-semibold text-xl text-[#404040]   dark:text-[#F5F5F5]'>Edit Category</h3>
                    <div onClick={() => setIsOpenEditModal(false)}>
                        <Close className='w-6 h-6 text-[#404040] cursor-pointer   dark:text-[#F5F5F5]'/>
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                <div className='flex flex-col items-start gap-2'>
                    <h4 className='w-full font-medium text-base text-left text-[#404040]   dark:text-[#F5F5F5]'>Title :</h4>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} placeholder='Enter the category name'
                    className='w-[400px] py-2 pl-2 font-regular text-sm text-left text-[#525252] bg-[#F5F5F5] outline-none focus:ring-2 
                    focus:ring-[#E4E4E4] rounded-lg
                    dark:text-[#F5F5F5] dark:bg-[#0A2D49]'/>
                </div>
                <button onClick={editCategory} type='button' 
                className='w-full py-2 font-medium text-sm text-[#FFFFFF] bg-[#2196F3] rounded-lg cursor-pointer'>Save</button>
                </div>
            </div>
        </>    
    )

}

export default EditCategoryModal