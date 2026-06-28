

interface IProps {
    itemsPerPage: number;
    setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const ShowNumber = ({itemsPerPage, setItemsPerPage, setCurrentPage}: IProps) => {

    return (
        <div>
            <select
                value={itemsPerPage}
                onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                }}
                className="py-1 px-3 text-[#262626] border-2 border-[#E4E4E4] rounded-lg outline-none cursor-pointer
                dark:text-[#E4E4E4] dark:bg-[#0D3C61]">
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
        </div>
    )

}

export default ShowNumber