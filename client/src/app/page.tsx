import Feed from "@/components/Feed"
import Image from "@/components/Image"
import Share from "@/components/Share"
import Link from "next/link"

const Homepage = () => {
  return (
    <div className=''>
      <div className=" px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
        <Link className="pb-3 flex items-center border-b-4 border-iconBlue" href="/">For You</Link>
        <Link className="pb-3 flex items-center " href="/">JavaScript</Link>
        <Link className="pb-3 flex items-center " href="/">React js</Link>
        <Link className="pb-3 flex items-center " href="/">Redux</Link>
        <Link className="pb-3 flex items-center " href="/">Css</Link>
      </div>
      <Share/>
      <Feed/>
    </div>
  )
}

export default Homepage