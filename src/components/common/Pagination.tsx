"use client";
interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="py-1 px-3 text-[#E4E4E4] border border-[#E4E4E4] rounded cursor-pointer   disabled:opacity-50"
      >
        قبلی
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`w-8 h-8 rounded cursor-pointer ${
            currentPage === i + 1
              ? "text-[#FFFFFF] bg-[#2196F3]"
              : "text-[#E4E4E4] border border-[#E4E4E4]"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="py-1 px-3 text-[#E4E4E4] border border-[#E4E4E4] rounded cursor-pointer   disabled:opacity-50"
      >
        بعدی
      </button>
    </div>
  );
};

export default Pagination;