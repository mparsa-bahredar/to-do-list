'use client'
import ToggleTheme from '@/components/common/ToggleTheme'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'


const Header = () => {

  return (
    <div className='flex justify-start pl-2 pt-2 bg-[#F5F5F5] transition-colors   dark:bg-[#071E31]'>
      <ToggleTheme/>
      <div className='w-6 h-6'>
        <LanguageSwitcher/>
      </div>
    </div>
  )
}

export default Header