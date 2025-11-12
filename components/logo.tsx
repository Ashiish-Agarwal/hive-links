import Link from 'next/link'
import Image from 'next/image'
import {  nameonly } from '@/lib/utils'

const Logo = () => {
  
  return (
    <>
    <div className='text-3xl w-full  text-center  h-fit flex flex-col md:flex-none  '>
     
<Link href="/" className='  duration-300 ease-in-out flex items-center justify-center flex-col    '>
<Image className=' ' src="/logo.png" alt="logo" width={50} height={50} />
<div>

<span className='text-shadow-primary-foreground fontSourGummy text-2xl  md:text-3xl xl:text-3xl  text-black dark:text-[#fbbf24]  '>{nameonly}</span>
<span className=" text-3xl font-bold  ml-2" style={{textShadow: '0 0 8px #fbbf24, 0 0 16px #fbbf24' ,color:'#fbbf24'}}>.</span>
</div>
{/* <span className='text-primary  text-shadow-2xs  p-2 text-shadow-primary  '>.</span> */}
</Link>
        

    </div>
    </>
  )
}

export default Logo