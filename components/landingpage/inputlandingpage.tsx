'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'

const InputLandingPage = () => {
    const website = process?.env?.PUBLIC_DOMAIN?.toString() || 'hive-link.app/'
      const [name,setName] = useState(website + '@')

      
  return (
    <div className='p-2 w-full   '>
         <div className='  items-center justify-center mt-10 flex flex-col gap-2 md:flex-row md:gap-0  '>
            <div  className='bg-white rounded-lg  md:rounded-r-none '>
              <Input style={{
                 color:'#6f4d4d'
              }}  className=' sm:w-full    md:w-[30vw]     h-16 rounded-md   md:rounded-r-none text-zinc-500 placeholder:text-zinc-500 text-sm  ' placeholder='enter the name' value={name} onChange={(e)=>setName(e.target.value) }/>
               </div>

            <Link style={{
              background:'#301212'
            }} className={buttonVariants({
              className:' text-center   h-10  rounded-md w-30 md:w-fit  md:h-16 md:rounded-l-none hover:bg-primary hover:text-white duration-300 ease-in-out border-0  border-white  hover:border-4   ', size:"lg"
            })} href={'/signin'} target="_blank" >Click here </Link>
            </div>
          
    </div>
  )
}

export default InputLandingPage