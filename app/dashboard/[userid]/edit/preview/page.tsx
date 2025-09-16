import React from 'react'
import EditOptionsCMP from '@/components/dashboard/edit/Edit-options-component'
import PreviewProfile from '@/components/dashboard/preview/Preview-profile'

const preview = async ({params}:{params:Promise<{userid:string}>}) => {
    const param = await params
    console.log(param.userid)
  return (
    <div className='h-screen w-full '>
      <div className='relative w-[20vw]  overflow-hidden  h-[80vh] flex p-3  mx-auto  '>

<PreviewProfile userid={param.userid} />

      </div>
    <EditOptionsCMP param={param.userid} />
    </div>
  )
}

export default preview