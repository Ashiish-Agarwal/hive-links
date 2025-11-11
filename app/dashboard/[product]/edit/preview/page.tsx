import React from 'react'
import EditOptionsCMP from '@/components/dashboard/edit/Edit-options-component'
import PreviewProfile from '@/components/dashboard/preview/Preview-profile'
import { GetUserreal } from '@/actions/read'
import { MobileNavBar } from '@/components/SideBaar'

const preview = async ({params}:{params:Promise<{product:string}>}) => {
    const param = await params
    console.log(param.product)
    const checkdata = await GetUserreal(param.product)
    if(checkdata?.length===0){
      return <div className='h-screen w-full flex items-center justify-center'>Not found plz log in with your real account </div>
    }
  return (

    <div className='h-full w-screen '>
      {/* <MobileNavBar/> */}
      <div className=' w-full  overflow-hidden  h-full flex p-3  mx-auto  '>

<PreviewProfile productid={param.product} />

      </div>
    <EditOptionsCMP param={param.product} />
    </div>

  
  )
}

export default preview