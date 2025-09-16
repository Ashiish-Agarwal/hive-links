
import Link from 'next/link'

import React from 'react'
import Logout from './logout'
import { DarkButton } from './mode-toggle'


 export const Link_Class = '  text-center p-2 hover:dark:bg-gray-800/30 rounded-md font-semibold text-xl   duration-300'


const links = [
    {
        id:1,
        name:"Dashboard",
        href:"/dashboard"
    },
    {
        id:2,
        name:"Links",
        href:"/links"
    },
    {
        id:3,
        name:"Analytics",
        href:"/analytics"
    },
    {
        id:4,
        name:"Settings",
        href:"/settings"
    }
]

const SideBaar = () => {
  return (
    <nav className='h-full w-full grid grid-rows-[200px_1fr]   '>
    
     <div className='  flex flex-col gap-0.5 items-center text-start p-2 '>

{
    links.map((elem)=>(
        <div className=' w-full h-full  text-center p-2 hover:dark:bg-gray-800/30  hover:bg-gray-800/10  rounded-md   duration-300 '>
            <Link className='text-xl font-semibold w-full  h-12  transition-all delay-200  ' href={elem.href}>{elem.name}</Link>
        </div>
    ))
}
        
     </div>
     <div className='flex flex-col gap-2 mt-5 mb-5   '>
     <span className='h-0.5 bg-zinc-500/10 '/>
       <DarkButton/>
        <Logout/>
        
        
        
        
     </div>

    
    </nav>
  )
}

export default SideBaar