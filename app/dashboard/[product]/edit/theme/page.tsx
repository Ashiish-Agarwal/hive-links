import EditOptionsCMP from '@/components/dashboard/edit/Edit-options-component'
import ThemeList from '@/components/dashboard/theme/theme-list'
import { MobileNavBar } from '@/components/SideBaar'

import React from 'react'


const Theme = async ({params}:{params:Promise<{product:string}>}) => {
    const param = (await params).product
    
console.log('theme data params'+param)

  return (
    <div className='p-2 w-full  mx-auto h-full'>
      <MobileNavBar/>
       <ThemeList params={param } />
      
        <EditOptionsCMP param={param} />
     

    </div>
  )
}

export default Theme