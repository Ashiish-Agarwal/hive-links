import Link from 'next/link'
import React from 'react'


const Logo = () => {
  
  return (
    <>
    <div className='text-3xl w-full  text-center pt-5  h-fit fontJapanese'>
     
<Link href="/" className='  duration-300 ease-in-out  '>


<span className='text-shadow-primary-foreground text-2xl md:text-4xl xl:text-6xl   '>Hiv</span>
<span className='text-primary '>E</span>
</Link>
        

    </div>
    </>
  )
}

export default Logo