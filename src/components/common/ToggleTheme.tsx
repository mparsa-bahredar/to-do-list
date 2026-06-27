"use client";
import { useTheme } from "@/utils/helper/useTheme";
import { Moon } from "../../../public/icons/Moon";
import { Sun } from "../../../public/icons/Sun";


const ToggleTheme = () => {
  const { theme, setTheme, mounted } = useTheme();
  if (!mounted) return null;

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full  cursor-pointer  "
    >
      {theme == "light" ? (
        <div
          className="bg-orange-400 p-2 rounded-full transition-colors flex 
        items-center justify-center"
        >
          <Sun className="w-5 h-5   md:w-[24px] md:h-[24px]" />
        </div>
      ) : (
        <div
          className="text-[#2196F3] border border-[#2196F3] rounded-full transition-all duration-100 p-2 flex items-center 
        justify-center   
        hover:text-[#FFFFFF] hover:bg-[#2196F3]"
        >
          <Moon className="w-5 h-5   md:w-[24px] md:h-[24px]" />
        </div>
      )}
    </div>
  );
};

export default ToggleTheme;
