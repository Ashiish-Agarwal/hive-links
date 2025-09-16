import { Card } from '@/components/ui/card'
import { db } from '@/db'
import { data } from '@/db/schema/data-schema'
import { eq } from 'drizzle-orm'
import React from 'react'

const page = async ({params }:{params:Promise<{userid:string}>}) => {

    

    const param= await params

    const dataa =await  db.select().from(data).where(eq(data.id,param.userid))
    const image = dataa[0]?.profile?.toString()
    

  return (
    <Card>
        <h1>inbox</h1>
        <p>Data </p>
        { param.userid}
        <img className='image-size' src={`${image}`} alt="loading" />
    </Card>
  )
}

export default page