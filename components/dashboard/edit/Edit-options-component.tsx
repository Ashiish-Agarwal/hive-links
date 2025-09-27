'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { Edit3Icon,  EyeIcon, Palette, WandSparkles } from 'lucide-react'
import {  usePathname } from 'next/navigation'

const EditOptionsCMP = ({param}:{param:string}) => {

const search = usePathname().split('/').filter(Boolean).pop()






  return (

     <div className=' h-[15rem]  flex  items-center gap-5 justify-center '>
     <div className={cn("  w-[20rem] flex justify-center items-center h-fit z-50 fixed bottom-10 p-4 ",`${buttonVariants({
       variant:'outline',
       className:' h-fit  '
      })}`)}>

    <div className=' flex  items-center gap-5 justify-center text-white  '>

  {/* edit link */}

    <div className= {` relative group rounded-md duration-300 text-black dark:text-white    ${search ==='edit' ?' bg-primary hover:bg-primary/90  text-white   ':''}`}>

    <Link href={`/dashboard/${param}/edit`} className={buttonVariants({
      variant:'option',
      
     
    }) }><Edit3Icon className='size-full' size={20}/> </Link>
     <div className=' absolute  left-1/2 -translate-x-1/2     group-hover:block hidden   '>
      <span className=' px-2 py-1  text-sm    w-fit h-fit '>
      Edit
      </span>
    </div>
    </div>

    {/* design link */}
    <div className= {` relative group rounded-md duration-300 text-black dark:text-white  ${search ==='design' ?' bg-primary hover:bg-primary/90  text-white   ':''}`}>


    <Link href={`/dashboard/${param}/edit/design`} className={buttonVariants({         
      variant:'option',
      
      
    })}><WandSparkles className='size-full' size={20}/> </Link>
     <div className=' absolute  left-1/2 -translate-x-1/2     group-hover:block hidden   '>
      <span className=' px-2 py-1  text-sm    w-fit h-fit '>
      Design
      </span>
    </div>
    </div>

  
    {/* theme  */}
    <div className= {` relative group rounded-md duration-300 text-black dark:text-white  ${search ==='theme' ?' bg-primary hover:bg-primary/90  text-white   ':''}`}>

    <Link href={`/dashboard/${param}/edit/theme`} className={buttonVariants({
      variant:'option',
      
      
      
    })}><Palette className='size-full' size={20}/> </Link>
    <div className=' absolute  left-1/2 -translate-x-1/2  group-hover:block hidden   '>
      <span className=' px-2 py-1   text-sm    w-fit h-fit  delay-200 animate-fade-in '>
        Theme
      </span>
    </div>
    </div>
    

      {/* preview link */}
      <div className= {` relative group rounded-md duration-300 text-black dark:text-white  ${search ==='preview' ?' bg-primary hover:bg-primary/90  text-white   ':''}`}>

<Link href={`/dashboard/${param}/edit/preview`} className={buttonVariants({
  variant:'option',
  
  
  
})}><EyeIcon className='size-full' size={20}/> </Link>
<div className=' absolute  left-1/2 -translate-x-1/2  group-hover:block hidden   '>
  <span className=' px-2 py-1   text-sm    w-fit h-fit  delay-200 animate-fade-in '>
  Preview
  </span>
</div>
</div>

    </div>
    
            </div>
    </div>
  )
}

export default EditOptionsCMP