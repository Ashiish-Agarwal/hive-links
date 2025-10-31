'use client'

import React, { useMemo } from 'react'
import Image from 'next/image'
import { GithubImageLinks } from '@/lib/image'
import { motion, useAnimation } from 'framer-motion'
const Imageanimation = () => {
 
// const bgcolor = ['22D3EE','F97316','A855F7','EC4899','06B6D4']
//    const duplicatedImages = useMemo(()=> [...bgcolor, ...bgcolor],[])
 
    const duplicatedImages = useMemo(()=> [...GithubImageLinks, ...GithubImageLinks],[])

   
  const controls = useAnimation()

  const handleHoverStart = () => {
    controls.stop()
  }

  const handleHoverEnd = () => {
    controls.start({
      y: [null, '-50%'],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop'
      }
    })
  }

  React.useEffect(() => {
    controls.start({
      y: [0, '-50%'],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop'
      }
    })
  }, [controls])

  
    
   
  return (
    <div  className='w-full h-screen overflow-hidden  -mt-6   p-2      '>
      <div className='hidden md:block  '>
        <motion.div 
         onHoverStart={handleHoverStart}
         onHoverEnd={handleHoverEnd}
        
        className='flex flex-col gap-20 items-end justify-center  h-full      '

        animate={{
          y: ['0%','-50%'],
                   
          transition:{
            duration:8,
            repeat:Infinity,
            repeatType:'loop',
            ease:'linear'

          }
          
          
        
        
        }}>
  {
    
    duplicatedImages.map((e,index)=>(
      <motion.div 
       whileHover={{
        scale:1.05,


        
        
       }}
      
      >
    
    <div className=' p-2 border-2 border-zinc-500/20  bg-zinc-500/5 rounded-md '>


      <   Image className=' object-cover rounded-md  border-2 border-white '  loading="lazy" unoptimized key={index} src={e.toString()} alt="loading" width={400} height={400} />
    </div>
    </motion.div>
 )) }
  </motion.div>
</div>

<div className='block md:hidden'>
  <h1 className='text-[#301212] text-3xl font-semibold mb-10'>perfect example</h1>
  <motion.div className='flex gap-20 w-full h-full ml-5 p-2'
    animate={{
      x: ['0%','-481%'],
      transition:{
        duration:8,
        repeat:Infinity,
        repeatType:'loop',
        ease:'linear'
      }
    }}>
    {
      duplicatedImages.map((e,index)=>(
        <div key={index} className='flex-shrink-0 border-2 border-zinc-500/20 bg-zinc-500/5 rounded-md p-2'>
          <Image 
            className='object-cover rounded-md border-2 border-white'  
            loading="lazy" 
            unoptimized 
            src={e.toString()} 
            alt="loading" 
            width={300} 
            height={300} 
          />
        </div>
      ))
    }
  </motion.div>
</div>
</div>
  )
}

export default Imageanimation