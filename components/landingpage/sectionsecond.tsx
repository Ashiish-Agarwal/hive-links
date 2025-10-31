import React from 'react'
import RotatingText from '../RotatingText'
import { BrushCleaning, ChartColumn, Globe2, GlobeIcon, LucideMousePointerClick, PaintRoller, Rocket, WandSparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Sectionsecond = () => {
  return (
      <>
      <div className=' grid grid-cols-1 md:grid-cols-2 h-full w-full  items-center justify-center gap-10 mt-40 '>


      
        <div> 
            
            <SocialEapmlePage/>
            
             </div>
    <div className='w-full h-full flex  items-center justify-center  text-center gap-10  
    '>
        <div className='flex flex-col w-[55%] h-fit gap-2   '>

        <h1 className='text-black text-3xl  md:text-7xl fontRecursive  '>

 Bio Link
    
        </h1>
        <p className='text-black text-sm  font-extralight tracking-tighter '>Shorten your link and create custom, shareable links that are easy to remember and share with your audience.</p>
        <Link href="/signin" className={buttonVariants({
            className:'bg-red-900/80 hover:bg-red-800/80 ' 
        })}>
        Join now
        </Link>
        </div>
        
        <div className='  w-[45%] h-full flex items-center justify-center'>


        <div className=' size-32  md:size-52   rounded-full bg-white flex items-center justify-center   '>

<RotatingText className='text-2xl  bg-red-800/80 p-2 font-serif rounded-sm '
  texts={['Fast!', 'Creative', 'Tracked', 'Cool!!']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>


  </div>
  </div>
  </div>
  

<div>

</div>
      
      </div>
    
  </>
  )
}

export default Sectionsecond


function SocialEapmlePage(){
    return(
        <>
        
{/* <Image className=' mix-blend-multiply' src={'/'} width={500} height={500} alt='ll '/> */}
<Image loading='lazy'  className=' mix-blend-multiply/50' src={'https://raw.githubusercontent.com/Ashiish-Agarwal/image-/main/githubimage.png'} width={500} height={500} alt='ll '/>

        </>
    )
}