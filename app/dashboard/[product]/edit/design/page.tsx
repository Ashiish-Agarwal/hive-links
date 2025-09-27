
import EditOptionsCMP from '@/components/dashboard/edit/Edit-options-component'

import React from 'react'
import { UuidAction } from '@/actions/read'

import DesignClientCmp from '@/components/dashboard/design/design-client-component'

const design = async ({params}:{params:Promise<{product:string}>}) => {
  const param = (await params)
  const user= await UuidAction()
 






  return (
    <div className={`flex flex-col gap-4`}>
      <DesignClientCmp userId={param.product } />
    <EditOptionsCMP param={param.product}/>  
    </div>
  )
}

export default design