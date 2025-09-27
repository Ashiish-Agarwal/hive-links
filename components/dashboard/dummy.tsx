import { buttonVariants } from '@/components/ui/button'
import { fontData } from '@/lib/Theme'
import { cn } from '@/lib/utils'
import { Crown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const InboxDummy = () => {
  const fontdata = 'font-bold'
  const image = ''
  const Backgroundlink= 'bg-red-500'
  const BackgroundColor = 'bg-green-400'
  return (
    <div className={`w-full  h-full overflow-hidden ${BackgroundColor} `}>
      
 <div className={` ${fontData}  flex flex-col items-center justify-center gap-4  `}>
  
  <div className={cn(`${image.length>1?'block':'hidden  '}`)}>
    {
<img className='size-56 rounded-full  bg-gray-500  text-center ' src={image} alt="loading" />

    }

  </div>
  <div className={`flex flex-col gap-1 ${image.length >1 ? "":"pt-36  "}`} >
    <h1 className={`text-xl uppercase  ${fontdata}  `}>
      UserName
    </h1>
    <p className='text-sm '>i am a web dev example</p>
     </div>

{/* icons for all todo */}
<div className='w-[20vw] h-full flex gap-5 text-center'>
{
      ['1','2','3'].map(elem=>(
        <a className={`w-fit   p-1 rounded-full hover:scale-150  duration-300  bg-yellow-950   `} href='#'>
          {elem}
        </a>
      ))
      
    }
</div>


{/* links todo  */}
  <div className='flex flex-col gap-2 w-[25vw]'>
    {
      ['1','2','3'].map(elem=>(
        <a className={`w-full  h-10  hover:scale-105 duration-300 delay-150 text-center  rounded-sm ${Backgroundlink}    `} href='#'>
          {elem}
        </a>
      ))
      
    }
    
     </div>


  <div className='mt-20 ' >
    <Crown/>

    <Link className={buttonVariants({
      variant:'link', className:' text-xl  hover:underline text-white dark:text-black font-serif duration-500 delay-initial  '
    })} href={'/landingpage'}>


    Hive links 
    </Link>
                      
     </div>

 </div>


    </div>
  )
}

export default InboxDummy