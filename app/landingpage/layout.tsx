import Logo from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { SmoothCursor } from "@/components/ui/smooth-cursor"


export default function LandingPageLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div className=" relative">


      <nav className='absolute top-5   w-full  h-20 rounded-lg  flex items-center justify-center'>
      
        <div className={buttonVariants({
        variant:'outline',
        className:"      w-[80%]  gap-2    flex items-center justify-center  h-full "
      })} >

<div className="flex items-center justify-between text-center  h-full  w-full ">

       <div className="   ">
        <Logo/>
       </div>
       <div className="  ">
        <Link className={buttonVariants({
          variant:'default',
          size:'lg',
          className:'text-black hover:text-white duration-300 ease-in-out border-white hover:border-2 hover:bg-primary hover:scale-105  '
        })} href={'/signin'} target="_blank" > create Product</Link>
        
        
       </div>
        </div>
        </div>

      </nav>
     
        {children}
        
        <SmoothCursor />
        </div>
  }