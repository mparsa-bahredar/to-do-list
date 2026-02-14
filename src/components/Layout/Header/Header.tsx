import { useTheme } from '../../../utils/hooks/useTheme'
import { Moon } from '../../../icons/Moon'
import { Sun } from '../../../icons/Sun'

const Header = () => {
  
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className='flex justify-start pl-2 pt-2 bg-[#F5F5F5] dark:bg-gray-800 transition-colors'>
      <button
        onClick={toggleTheme}
        className='flex items-center w-16 h-8 px-1 rounded-[48px] bg-gray-300 dark:bg-gray-700 transition-colors cursor-pointer'
        aria-label="Toggle Theme"
      >
        <div
          className={`flex items-center justify-center w-6 h-6 rounded-[48px] transition-transform duration-300
            ${isDark ? 'translate-x-8 bg-gray-600' : 'translate-x-0 bg-yellow-400'}`}
        >
          {isDark ? (
            <Moon className='w-4 h-4 text-white' />
          ) : (
            <Sun className='w-4 h-4 text-yellow-600' />
          )}
        </div>
      </button> 
    </div>
  )
}

export default Header