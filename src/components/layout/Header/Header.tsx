'use client'
import ToggleTheme from '@/components/common/ToggleTheme'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'


const Header = () => {

  return (
    <div className='flex justify-start pl-2 pt-2 bg-[#F5F5F5] dark:bg-[#011428] transition-colors'>
      <ToggleTheme/>
      <div className='w-6 h-6'>
        <LanguageSwitcher/>
      </div>
    </div>
  )
}

export default Header