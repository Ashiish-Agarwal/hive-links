
import React from 'react'
import FlyingPosters from '../FlyingPosters';
import { GithubImageLinks } from '@/lib/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const CardSwapsection = () => {
    const items = GithubImageLinks
  return (
    <>
<div  className=' '>

    <div className="  h-screen w-full   grid grid-cols-2 ">


     <div style={{ height: '600px'}}>
  <FlyingPosters items={items}/>
</div>
<div className='h-full flex flex-col  items-center justify-center gap-2 p-2  '>
    <h1  className=' text-[#FCF5ED] fontCrimsonPro text-4xl lg:text-6xl font-bold'>Create and customize your Hive Link in minutes </h1>
    <p className='text-[#FCF5ED] text-xl  fontCrimsonPro  tracking-wider'>Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Hive Link automatically enhance it to match your brand and drive more clicks. </p>
    <Link style={{
        background:"#FCF5ED"
    }}  href='/signin' className={
       
       'text-xl  fontCrimsonPro  w-64 h-10 text-center font-bold tracking-wider'
    }>GEt Started For free  </Link>
</div>
    </div>
</div>

    </>
  )
}

export default CardSwapsection

