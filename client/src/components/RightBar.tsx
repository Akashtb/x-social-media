import React from 'react'
import Search from './Search'
import Recommendation from './Recommendation'
import PopularTags from './PopularTags'
import Link from 'next/link'

const RightBar = () => {
  return (
    <div className='pt-4 flex flex-col gap-2 sticky top-0 h-max'>
      <Search/>
      <PopularTags/>
      <Recommendation/>
      <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessibility</Link>
        <Link href="/">Ads Info</Link>
        <span>© 2025 X Corp.</span>
      </div>
    </div>
  )
}

export default RightBar