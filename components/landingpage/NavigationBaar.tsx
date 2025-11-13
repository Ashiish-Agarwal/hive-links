// import Logo from "../logo"
import { ArrowRight, MenuIcon } from 'lucide-react'
import Image from "next/image"
import Link from 'next/link'

import { buttonVariants } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

import {  nameonly } from '@/lib/utils'


const NavigationBaar = () => {

  const Links=[{
    name:'How its work',
    href:'/landingpage/work'
  },
{
    name:'Sign in',
    href:'/signin'
},{
  name:'Sign up',
  href:'/signup'
},
{
  name:'About',
  href:'/landingpage/about'
},{
  name:'Contact',
  href:'/landingpage/contact'},
  {
    name:'pricing',
    href:'/landingpage/pricing'
  }

]
    
  return (
   <div className='grid  bg-white   grid-cols-3 gap-4 border-b-2 border-yellow-500 sticky top-0 z-50  h-10 md:h-15   backdrop-blur w-[90%] md:w-[60%]  mx-auto items-center rounded-md  justify-center  '>
    <div>
      <Sheet >
        <SheetTrigger>

<span className={buttonVariants({
  variant:"outline",
  size:"lg",
  className:' bg-transparent border-2 ml-5 text-black hover:text-zinc-900/80 hover:scale-105     '
})}>
  

<MenuIcon/>
</span>
        </SheetTrigger>
        <SheetContent className='w-full h-full flex flex-col bg-white  items-center  justify-start text-center      '>
          <Link href={'/'} target="_blank" className='' >
          
          <Image src="/logo.png" alt="logo" width={100} height={100}/>
          </Link>
          <h1 className='text-2xl font-bold text-black '>{nameonly} .</h1>
          

           {Links.map((link)=>{
             return(
               <Link key={link.name} href={{ pathname: link.href }  } className='w-full 0  rounded-b-none hover:zinc-500 font-sans uppercase text-black  tracking-tighter    rounded-md  p-2  duration-300 gap-4  hover:bg-yellow-500/70 hover:text-white' >{link.name}</Link>
              )
            })}
        <div className='flex gap-3 '>
     <Link href={'/signin'} target="_blank" className={buttonVariants({
       variant:"outline",
      size:"lg",
      className:'  border-2 ml-5  text-black hover:text-black  border-yellow-500   hover:scale-105   '
    })} >Sign In</Link>
     <Link href={'/signup'} target="_blank" className={buttonVariants({
      
      size:"lg",
      className:' bg-yellow-500 hover:bg-yellow-500/80 border-2 ml-5 text-black hover:text-black hover:scale-105   '
    })} >Sign Up</Link>
          </div>  
         
        </SheetContent>
      </Sheet>
    
    
    </div>
    <div className='flex gap-2 items-center justify-center '>
        <Image className='size-10 md:size-16 rounded-full' src="/logo.png" alt="logo" width={100} height={100}/>
<h1 className='text-black  hidden md:block  font-bold '>{nameonly} .</h1>
         </div>
         <div className='w-full  flex items-center justify-end '>

    <Link href={'/signin'} target="_blank" className=
        
       '  text-center  text-sm  mr-2  tracking-tighter bg-yellow-500  flex items-center hover:bg-yellow-500/80 hover:text-black duration-300 ease-in-out p-1.5  rounded-xl   w-fit    '
    >Sign In <ArrowRight className='ml-1 size-3.5'/></Link>
    </div>

   </div>


  )
}

export default NavigationBaar