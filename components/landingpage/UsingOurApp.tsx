import React from 'react'
import { AnimatedTooltip } from '../ui/animated-tooltip'

const UsingOurApp = () => {
  return (
    <div className='flex flex-col   items-center justify-center select-none w-full  h-screen   '>

        <h1 className='text-4xl md:text-6xl text-center text-wrap font-bold text-black dark:text-white  hover:scale-105 hover:text-slate-500 duration-300 ease-in-out   '>Our currecnt users Promoters </h1>
<div className='flex  mt-10  '>

<AnimatedTooltip  items={[
    {
        id:1,
        name:'Aviinash Agarwal',
      designation:'Founder',
      image:'/defaultimg.jpg',
      link:'https://www.instagram.com/aviinashagarwal?utm_source=ig_web_button_share_sheet&igsh=dHdxNjd1a3FpdGJ6'
    },
    {
        id:2,
        name:'sidharth chauhan  ',
        designation:'User ',
        // image:'/lady.png',
      image:'/defaultimg.jpg',

        link:''
    },
    {
        id:6,
        name:' DornyGrp  ',
        designation:'small Company',
        image:'/panda.png',
        link:'https://www.instagram.com/dornygrp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
        id:3,
        name:'kushal raj ',
        designation:'User ',
        image:'/userimg.jpg',
        link:'https://www.instagram.com/kushal_raj_2006?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
        id:4,
        name:'bharat.singh ',
        designation:'Promoters :)',
        image:'/bharat.singh.jpg',
        link:'https://www.instagram.com/bharat.singh04?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
   
]

} />
</div>
    </div>
  )
}

export default UsingOurApp