"use client"
import ToggleTheme from "@/components/common/ToggleTheme"
import LanguageSwitcher from "@/components/common/LanguageSwitcher"


const Header = () => {

  return (
    <div className="flex items-center w-full px-10 py-2 bg-[#FFFFFF] transition-colors 
    shadow-[0_0_8px_rgba(0,0,0,0.04)] fixed top-0 left-0 z-3
    dark:bg-[#0D3C61]">
      <div className="hidden w-64   sm:block"></div>
      <div className="flex items-center gap-4">
        <LanguageSwitcher/>
        <ToggleTheme/>
      </div>
    </div>
  )
}

export default Header


