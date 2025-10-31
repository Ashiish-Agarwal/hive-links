'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'

import Link from 'next/link'
import { buttonVariants } from '../ui/button'

const Lastsection = () => {
    const website = process?.env?.PUBLIC_DOMAIN?.toString() || 'hive-link.app/'
          const [name,setName] = useState(website + '@')
  return (
    <div className='mt-20 flex items-center justify-center flex-col gap-2  '>

<h1 className='text-2xl md:text-4xl fontSourGummy font-bold'>Ready to get started?</h1>
<Link href={'/signin'} target="_blank" className=' bg-red-900 text-white p-4 rounded-lg text-xl fontRecursive  font-bold hover:text-underline duration-300 ease-in-out'>Click here</Link>


    </div>
  )
}

export default Lastsection