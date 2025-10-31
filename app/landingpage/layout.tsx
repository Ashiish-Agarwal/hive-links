import Logo from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import PromotionSection from "@/components/PromotionSection";
import Footer from "@/components/Footer";



export default function LandingPageLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div className=" relative">
      <div className="sticky top-0 z-50">

      <PromotionSection/>
      </div>


      <nav className='absolute top-10   w-full  h-20 rounded-lg  flex items-center justify-center '>
      
        <div 
        className="      w-[80%]  gap-2    flex items-center justify-center  h-full bg-black/10 border-2 border-white/10 rounded-lg p-3 z-50 " 
      >

<div className="flex items-center justify-between text-center  h-full  w-full ">

       <div className="   ">
        <Logo/>
       </div>
       <div className="  ">
        
        <Link style={{
              background:'#301212'
            }} className={buttonVariants({
          variant:'default',
          size:'lg',
          className:'text-black hover:text-white duration-300 ease-in-out border-white hover:border-2 hover:bg-primary hover:scale-105  '
        })} href={'/signin'} target="_blank" > create Product</Link>
        
        
       </div>
        </div>
        </div>

      </nav>
      <div >

     
        {children}
        <Footer/>
      </div>
        <div className='hidden md:block z-0'>

        
        <SmoothCursor />
        </div>
        
        </div>
  }