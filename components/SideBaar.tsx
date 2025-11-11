'use client'
import Link from 'next/link'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from '@radix-ui/react-dropdown-menu'
import { MenuIcon, } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Logo from './logo'
import Logout from './logout'
import { AnimatedThemeToggler } from './ui/animated-theme-toggler'
import { Button } from './ui/button'

const links: Array<{
    id: number;
    name: string;
    href: string;
}> = [
    {
        id:1,
        name:"dashboard",
        href:"/dashboard"
    },
    {
        id:2,
        name:"theme",
        href:"/dashboard/theme"
    },
    {
        id:3,
        name:"analytics",
        href:"/dashboard/analytics"
    },
    {
        id:4,
        name:"setting",
        href:"/dashboard/setting"
    }
]


 export const Link_Class = '  text-center p-2 hover:dark:bg-gray-800/30 rounded-md font-semibold text-xl   duration-300'






export const SideBaar = () => {

  const usepath= usePathname()
    
const routes = usepath.split('/').filter(Boolean).pop()
console.log(routes)
  return (
    <nav className='h-full w-full grid grid-rows-[200px_1fr]   '>
        
        
    
     <div className='  flex flex-col gap-0.5 items-center text-start p-2 '>

{
    links.map((elem)=>(
        <div key={elem.id} className={` w-full h-full  text-center p-2 hover:dark:bg-gray-800/30  hover:bg-gray-800/10  rounded-md   duration-300 ${routes === elem.name ? 'bg-primary/60 hover:bg-primary/90  text-white   ':''}`}>
            <Link className={`text-xl font-semibold w-full  h-12  transition-all duration-300  delay-200  `} href={elem.href as '/dashboard' | '/dashboard/theme' | '/dashboard/analytics' | '/dashboard/setting'}>{elem.name}</Link>
        </div>
    ))
}
        
     </div>
     <div className='flex flex-col gap-2 mt-5 mb-5   '>
     <span className='h-0.5 bg-zinc-500/10 '/>
       <AnimatedThemeToggler />
        <Logout/>
        
        
        
        
     </div>

    
    </nav>
  )
}

export  function MobileNavBar() {

  const usepath= usePathname()
    
const routes = usepath.split('/').filter(Boolean).pop()
  
   
    return (
      <nav className={`sticky  p-2    flex justify-between items-center  top-0  w-full h-16  border-b transition-colors duration-300`}>
        <div>

        <Logo/>
        </div>
        

        <Sheet>
  <SheetTrigger asChild>
    <Button variant="outline" size="icon">
              <MenuIcon  className="h-10 w-10" />
            </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle><Logo/></SheetTitle>
     
    </SheetHeader>
    <Separator/>
    <div className='flex flex-col gap-2 p-5 '>
          {

            links.map((elem)=>(
              <div key={elem.id} className={` w-full h-full  text-center p-2 hover:dark:bg-gray-800/30  hover:bg-gray-800/10  rounded-md   duration-300 ${routes === elem.name ? 'bg-primary/80 hover:bg-primary/90  text-white   ':''}`}>

                <Link className={`text-xl font-semibold w-full  h-12   delay-200  hover:dark:bg-gray-800/30  hover:bg-gray-800/10  rounded-md   duration-300  `} href={elem.href as '/dashboard' | '/dashboard/theme' | '/dashboard/analytics' | '/dashboard/setting'}>{elem.name}</Link>
              </div>
              ))
            }
          
        </div>
        <Separator/>
       

              <AnimatedThemeToggler />
           
        
        <Separator/>

        
        <Logout/>
        
  </SheetContent>
</Sheet>
           
        
      </nav>
    )
  }
