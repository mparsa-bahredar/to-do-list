import React from 'react'

const SearchFilter = () => {
    
  return (
    <div className='flex gap-2'>
      <input className='text-left indent-[8px] bg-[#F5F5F5]' name='search' type='text' placeholder='Enter the task name'/>
      <button className='py-2 px-4 font-medium text-[#404040] border border-[2px] border-[#E4E4E4] rounded-lg'>Filter</button>
    </div>
  )
}

export default SearchFilter