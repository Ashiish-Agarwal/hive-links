
import Logo from '@/components/logo'
import RightPanel from '@/components/Right-Panel'
import {SideBaar , MobileNavBar} from '@/components/SideBaar'
import { Toaster } from '@/components/ui/sonner'
import React from 'react'


const layout = ({children}: {children: React.ReactNode}) => {


  return (
<>
{/* large screen */}
<div className=' hidden md:block p-2 overflow-hidden h-screen w-full    '>

    <div className='w-screen   h-screen flex  '>
        <div className=' h-full w-[20%]  flex  border-r-2  overflow-hidden dark:border-gray-800/20 border-gray-200/70   '>
        <div className=' h-full w-full grid grid-rows-[200px_1fr]   '>
          <div className=' ml-5    text-3xl  font-semibold '>

            <Logo/>
          </div>
          <div >

            <SideBaar/>
          </div>

        
        </div>
        </div>
            

                <div className='w-[80%] p-5 hide-scrollbar  border-r-2 dark:border-gray-800/20 border-gray-200/70 h-full  relative overflow-y-scroll '>
                {children}
                </div>
                
                



      </div>
</div>
{/**small or medium screen  */}
<div className=' sm:block md:hidden p-3     '>
  <div>

  <MobileNavBar/>

{children}
  </div>
</div>


<Toaster richColors={true}   duration={5000}/>

</>
  )
}

export default layout