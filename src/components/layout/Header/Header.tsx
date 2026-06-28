"use client"
import ToggleTheme from "@/components/common/ToggleTheme"
import LanguageSwitcher from "@/components/common/LanguageSwitcher"
import { useState } from "react"
import SideBar from "../Sidebar/Sidebar"
import Menu from "../../../../public/icons/Menu"
import { useLocale } from "next-intl"


const Header = () => {


  const locale = useLocale();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>();
  const handleOpenMenu = (value: boolean) => {
    setIsOpenMenu(value);
  }

  return (
    <>
      <div className="flex justify-between items-center px-10 pt-2 bg-[#F5F5F5] transition-colors   dark:bg-[#071E31]">
        <div 
        onClick={() => {handleOpenMenu(true)}} 
        className={`font-medium text-[#262626] cursor-pointer   dark:text-[#F5F5F5] ${locale === "en" ? "scale-x-[-1]" : ""}`}>
          <Menu className="w-6 h-6"/>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher/>
          <ToggleTheme/>
        </div>
      </div>
      {
        isOpenMenu && <SideBar handleOpenMenu={handleOpenMenu}/>
      }
    </>
  )
}

export default Header


