'use client'
import React, { Suspense, useEffect, useState } from 'react'
import InputLandingPage from './inputlandingpage'
import { PointerHighlight } from '../ui/pointer-highlight'
import Imageanimation from './image-animation'
import { useTheme } from 'next-themes'
import { Particles } from '../ui/particles'

const Animatedtext = () => {
   const { resolvedTheme } = useTheme()
  const [color, setColor] = useState("#301212")
  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#301212" : "#000000")
  }, [resolvedTheme])
  return (
    <>
    <div className='  h-[100vh]  w-full flex flex-col gap-3  justify-center items-center      '>
       <Particles
        className="absolute inset-0 z-0  "
        quantity={500}
        ease={200}
        color={color}
        refresh
      />
          <div className='   select-none   text-center  '>
            <div style={{
              color:'#400707'
            }} className=' text-4xl md:text-6xl text-wrap flex flex-col  font-bold   '>
              <h1 >One Link for All Your</h1> 
               

<div className='w-full  flex items-center justify-center'>

<PointerHighlight pointerClassName=' text-[#301212] ' >

                 Profiles
</PointerHighlight>
</div>


            
               




            </div>
 <p style={{
   color:'#6f4d4d'
  }} className='text-sm text-zinc-400  text-balance break-words  w-[70%] mx-auto mt-2 '>Build a custom web app, add all your links, share it everywhere . </p>
           <div className='w-full  mx-auto'>

           <InputLandingPage/>
           </div>

         
          </div>

        </div>
         <div className=' -mt-10 h-full   '>
        <Suspense fallback={<div></div>}>


        
<Imageanimation/>

        </Suspense>
        
       </div>
  </>
  )
}

export default Animatedtext