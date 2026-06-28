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
      className="rounded-full cursor-pointer">
      {theme == "light" ? (
        <div
          className="flex items-center justify-center w-10 h-10 text-[#FF8800] border border-[#FF8800] rounded-full transition-colors
          hover:text-[#FFFFFF] hover:bg-[#FF8800]">
          <Sun className="w-5 h-5   md:w-6 md:h-6"/>
        </div>
        ) : (
        <div
          className="flex items-center justify-center w-10 h-10 text-[#2196F3] border border-[#2196F3] rounded-full transition-all 
          duration-100 
          hover:text-[#FFFFFF] hover:bg-[#2196F3]">
          <Moon className="w-5 h-5   md:w-6 md:h-6"/>
        </div>
      )}
    </div>
  );
};

export default ToggleTheme;
