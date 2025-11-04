'use client'

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { PointerHighlight } from '../ui/pointer-highlight'
import { Video } from 'lucide-react'
import Image from 'next/image'

const Animatedtext = () => {
  return (
    <div className=' gap-4  mt-20  flex flex-col   items-center justify-start   '>
<div className='flex flex-col items-center justify-center w-full h-full  '>

<h1 className='text-4xl md:text-6xl fontSourGummy '>ONE LINK FOR ALL YOUR</h1>
<div className='bg-amber-400 rotate-2  '>

<PointerHighlight pointerClassName='   text-black '  >
<h1 className='p-2 text-4xl md:text-6xl fontSourGummy font-bold  '>PROFILES</h1>

               
 </PointerHighlight>
</div>
</div>
<div>
<p className='text-sm text-zinc-400  text-balance break-words   flex-wrap  mx-auto mt-2 '>Build a custom web app, add all your links, share it everywhere . </p>
</div>
<div className='flex  gap-4'>
  <Link href={'/Signin'} target="_blank" className=''>
    <Button className='bg-yellow-500 text-white hover:bg-yellow-600 rounded-2xl duration-300 hover:scale-110 '>Open-Account  </Button>
  </Link>
  <Link href={'/'} target="_blank" className=''>
    <Button className=' border-2 border-black/40  rounded-2xl bg-gray-50 hover:bg-gray-200 text-black  duration-300 hover:scale-110 '>Guide <Video/></Button>
  </Link>
</div>
<div className="block md:hidden">

<div  className='w-full   grid grid-cols-2 md:grid-cols-4 gap-4  items-center justify-center overflow-hidden     '>

  <Image className='    size-56 object-cover  '  unoptimized src="/la/brar.png" alt="logo" width={100} height={100}/>


  <Image className='size-56  object-cover  '  unoptimized src="/la/bbhb.png" alt="logo" width={100} height={100}/>
</div>
</div>
<div className="hidden md:block">

<div  className='w-full  h-fit  flex  gap-4  items-center justify-center overflow-hidden  z-50    '>

  <Image className='    size-96 object-cover  '  unoptimized src="/la/brar.png" alt="logo" width={100} height={100}/>


  <Image className='size-96  object-cover  '  unoptimized src="/la/bbhb.png" alt="logo" width={100} height={100}/>
</div>
</div>

    </div>
  )
}

export default Animatedtext