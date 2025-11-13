import React, { ReactNode } from 'react'
import Logo from '../logo'
import { SideBaar } from '../SideBaar'

const Sidebaarmdfix = ({children}:{children:ReactNode}) => {
  return (
       <div className='hidden md:block p-2 overflow-hidden h-screen w-full  dark:bg-black bg-white '>
    <div className='w-screen   h-screen flex  '>
            <div className=' h-full w-[20%]  flex  border-r-2  overflow-hidden dark:border-gray-800/20 dark:bg-black  border-gray-200/70   '>
            <div className=' h-full w-full grid grid-rows-[200px_1fr]   '>
              <div className=' ml-5    text-3xl  font-semibold '>
    
                <Logo/>
              </div>
              <div >
    
                <SideBaar/>
              </div>
    
            
            </div>
            </div>
                
    
                    <div className='w-[80%] p-5 hide-scrollbar  border-r-2 dark:border-gray-800/20 border-gray-200/70 h-full dark:bg-black relative overflow-y-scroll '>
                   
  {children}
    
                    </div>
                    
                    
    
    
    
          </div>
    
        </div>
  )
}

export default Sidebaarmdfix