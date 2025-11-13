import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <nav className="sticky top-0 z-50 bg-red-900 flex items-center justify-center gap-2 ">
    
            <span className="font-medium">
              Use our product and after New Year get $50!
            </span>
            <Link href={'/signin'} target="_blank"
             
              className="   border-red-500 text-white px-4 py-1  font-semibold  underline transition-colors text-sm whitespace-nowrap"
            >
              Click here to submit
            </Link>
          
         </nav>
  )
}

export default Banner