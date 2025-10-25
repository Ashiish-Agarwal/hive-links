import React from 'react'
import InputLandingPage from './inputlandingpage'

const Animatedtext = () => {
  return (
    <div style={{
          background:'#1E1B4B'
        }} className='  h-[100vh]  w-full flex flex-col gap-3  justify-center items-center      '>
          <div className='   select-none   text-center  '>
            <h1 className=' text-4xl md:text-6xl text-wrap    font-bold text-white  '>
                One Link for All Your
               

                 Profiles

            
               




            </h1>
 <p className='text-sm text-zinc-400  text-balance break-words  w-[70%] mx-auto mt-2 '>Build a custom web app, add all your links, share it everywhere . </p>
           <div className='w-full  mx-auto'>

           <InputLandingPage/>
           </div>

         
          </div>

        </div>
  )
}

export default Animatedtext