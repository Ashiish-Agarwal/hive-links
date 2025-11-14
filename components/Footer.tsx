import { nameonly } from '@/lib/utils'
import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-black text-white  gap-2 h-[20vh]  w-full  flex items-center justify-center mt-10   ' >
       <h1>Copyright © 2025 {nameonly}. All rights reserved.
       
       </h1>

    </footer>
  )
}

export default Footer