import CategoriesDataTable from "../components/CategoriesDataTable"
import CategoriesTop from "../components/CategoriesTop"


const CategoriesView = () => {

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-start gap-3 mt-10">
                <CategoriesTop/>
                <CategoriesDataTable/>
            </div>
        </div>
    )

}

export default CategoriesView