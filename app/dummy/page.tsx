import { App } from '@/components/dashboard/dummy'
import EditOptionsCMP from '@/components/dashboard/edit/Edit-options-component'
import React from 'react'

const page = () => {
  return (
    <div>
      <App/>
<EditOptionsCMP param={'123'}/>

    </div>
  )
}

export default page