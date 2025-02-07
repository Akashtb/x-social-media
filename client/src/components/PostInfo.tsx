import React from 'react'
import Image from './Image'

const PostInfo = () => {
  return (
    <div className='cursor-pointer w-4 h-4 relative'>
        <Image alt='' path='icons/infoMore.svg' w={16} h={16}/>
    </div>
  )
}

export default PostInfo