
import EditOptionsCMP from '@/components/dashboard/edit/Edit-options-component'
import Fontstyles from '@/components/dashboard/design/Fontstyles'
import React from 'react'
import { UuidAction } from '@/actions/read'
import Colortheme from '@/components/dashboard/design/Color-design'
import { Button } from 'flowbite-react'
import DesignClientCmp from '@/components/dashboard/design/design-client-component'

const design = async ({params}:{params:Promise<{userid:string}>}) => {
  const param = await params
  const user= await UuidAction()
  const name = user[0].name

    // const [color, SetColor] = useState<String>('bg-zinc-500')
    //   const Color=['bg-white','bg-teal-500']
    //   console.log('dafa'+color)

  return (
    <div className={`flex flex-col gap-4`}>
      <DesignClientCmp />
    <EditOptionsCMP param={param.userid}/>
    </div>
  )
}

export default design