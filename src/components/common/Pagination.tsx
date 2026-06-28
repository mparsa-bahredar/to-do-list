"use client";
import { useLocale } from "next-intl";
import Arrow from "../../../public/icons/Arrow";


interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}


const Pagination = ({currentPage, totalPages, onPageChange}: Props) => {

  const locale = useLocale();


  return (
    <div className={`flex items-center justify-center gap-2 ${locale === "en" ? "ltr" : "rtl"}`}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="h-[28px] px-3 text-[14px] text-[#262626] border border-[#A3A3A3] rounded-[8px] cursor-pointer   
        disabled:opacity-50
        dark:text-[#E4E4E4]">
        <Arrow className={`w-5 h-5 ${locale === "en" ? "" : "scale-x-[-1]"}`}/>
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`flex justify-center items-center w-[28px] h-[28px] text-[14px] rounded-[8px] cursor-pointer ${
            currentPage === i + 1
            ? "text-[#FFFFFF] bg-[#2196F3]"
            : "text-[#262626] border border-[#A3A3A3]   dark:text-[#E4E4E4]"
          }`}>
          {i + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="h-[28px] px-3 text-[14px] text-[#262626] border border-[#A3A3A3] rounded-[8px] cursor-pointer   
        disabled:opacity-50
        dark:text-[#E4E4E4]">
        <Arrow className={`w-5 h-5 ${locale === "en" ? "scale-x-[-1]" : ""}`}/>
      </button>
    </div>
  );
};

export default Pagination;