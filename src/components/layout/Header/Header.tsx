"use client"
import ToggleTheme from "@/components/common/ToggleTheme"
import LanguageSwitcher from "@/components/common/LanguageSwitcher"


const Header = () => {

  return (
    <div className="flex justify-between items-center px-10 py-2 bg-[#FFFFFF] transition-colors   dark:bg-[#071E31]">
      <div className="flex items-center gap-4">
        <LanguageSwitcher/>
        <ToggleTheme/>
      </div>
    </div>
  )
}

export default Header


