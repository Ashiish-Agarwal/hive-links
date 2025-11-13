import Sidebaarmdfix from '@/components/dashboard/sidebaarmdfix'
import Logo from '@/components/logo'
import { SideBaar } from '@/components/SideBaar'

import React from 'react'

const Analytics = () => {
  return (
    <>
     <Sidebaarmdfix>
         <div className='w-full h-screen text-center'>
      <h1 className='text-3xl md:text-5xl font-bold'>Work in Progress</h1>
    </div>
     </Sidebaarmdfix>
    <div className='w-full h-screen text-center block md:hidden'>
      <h1 className='text-3xl md:text-5xl font-bold'>Work in Progress</h1>
    </div>
    </>
  )
}

export default Analytics