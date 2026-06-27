import { Category } from "@/types/types"



interface IProps{
    item: Category;
}

const CategoryCard = ({item}: IProps) => {

    return (
        <div className="flex w-full font-medium text-[16px] text-[#262626]">
            <span>{item.title}</span>
        </div>
    )

}

export default CategoryCard