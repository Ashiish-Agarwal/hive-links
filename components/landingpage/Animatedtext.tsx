'use client'
import Rating from '@mui/material/Rating';
import {  Video } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { PointerHighlight } from '../ui/pointer-highlight';

const Animatedtext = () => {
  return (
    <div className=' gap-4  mt-20  flex flex-col   items-center justify-start fontSourGummy   '>
<div className='flex flex-col items-center justify-center w-full h-full  '>

<h1 className='text-4xl md:text-6xl  '>ONE LINK FOR ALL YOUR</h1>
<div className='bg-amber-400 rotate-2  '>

<PointerHighlight pointerClassName='   text-black '  >
<h1 className='p-2 text-4xl md:text-6xl  font-bold  '>PROFILES</h1>

               
 </PointerHighlight>
</div>
</div>
<div>
<p className='text-sm text-zinc-400  text-balance break-words   flex-wrap  mx-auto mt-2 font-sans '>Build a custom web app, add all your links, share it everywhere . </p>
</div>
<div className='flex  gap-4'>
  <Link href={'/Signin'} target="_blank" className=''>
    <Button className='bg-yellow-500 text-white hover:bg-yellow-600 rounded-2xl duration-300 hover:scale-110 '>Open-Account  </Button>
  </Link>
  <Link href={'/'} target="_blank" className=''>
    <Button className=' border-2 border-black/40  rounded-2xl bg-gray-50 hover:bg-gray-200 text-black  duration-300 hover:scale-110 '>Guide <Video/></Button>
  </Link>
</div>

<div className='h-30 w-full flex flex-col items-center justify-center mt-10  '>

<h1>100+ trusted users </h1>
  <span className='flex gap-4 '>
    
<Rating name="half-rating-read " defaultValue={4.0} precision={0.5} readOnly />
  </span>
  <p>4.0 rating</p>
</div>

    </div>
  )
}

export default Animatedtext