"use client";
import { Moon } from "../../../public/icons/Moon";
import { Sun } from "../../../public/icons/Sun";
import { useTheme } from "../../utils/hooks/useTheme/useTheme";


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
          className="text-[#0D3B66] border border-[#0D3B66] rounded-full transition-all duration-100 p-2 flex items-center 
        justify-center   
        hover:text-[#FFFFFF] hover:bg-[#0D3B66]"
        >
          <Moon className="w-5 h-5   md:w-[24px] md:h-[24px]" />
        </div>
      ) : (
        <div
          className="bg-orange-400 p-2 rounded-full transition-colors flex 
        items-center justify-center"
        >
          <Sun className="w-5 h-5   md:w-[24px] md:h-[24px]" />
        </div>
      )}
    </div>
  );
};

export default ToggleTheme;
