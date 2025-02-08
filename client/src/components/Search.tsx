import React from 'react'
import Image from './Image'

const Search = () => {
  return (
    <div className='bg-inputGray py-2 px-2 flex items-center gap-2 rounded-full overflow-hidden'>
        <Image path='icons/explore.svg' alt='search' w={16} h={16}/>
        <input type="text" placeholder='search' className='bg-transparent outline-none placeholder:text-textGray' />
    </div>
  )
}

export default Search