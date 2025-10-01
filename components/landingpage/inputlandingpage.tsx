'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'

const InputLandingPage = () => {
    const website = process?.env?.PUBLIC_DOMAIN?.toString() || 'hive-link.app/'
      const [name,setName] = useState(website)
  return (
    <div>
         <div className='flex  items-center justify-center mt-10   '>
            <div className='bg-white rounded-lg  rounded-r-none'>
              <Input  className='w-60   h-16  rounded-r-none text-zinc-500 placeholder:text-zinc-500 ' placeholder='enter the name' value={name} onChange={(e)=>setName(e.target.value)}/>
               </div>

            <Link className={buttonVariants({
              className:' text-center  h-16 rounded-l-none hover:bg-primary hover:text-white duration-300 ease-in-out border-0  border-white  hover:border-4   ', size:"lg"
            })} href={'/signup'} target="_blank" >Go</Link>
            </div>
    </div>
  )
}

export default InputLandingPage