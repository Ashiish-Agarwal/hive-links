import { UuidAction } from '@/actions/read'
import NewProductButton from '@/components/add-new-product'
import AllProducts from '@/components/dashboard/AllProducts'
import UserDataFormSubsmition from '@/components/dashboard/UserData-Form-Subsmition'
import NoProduct from '@/components/NoProduct'
import { buttonVariants } from '@/components/ui/button'
import { db } from '@/db'
import { data } from '@/db/schema/data-schema'
import { cn } from '@/lib/utils'
import { eq } from 'drizzle-orm'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'


const page = async () => {
 

const uuid = await  UuidAction()
if(!uuid){
    return redirect('/signup')
}
const dataa = await  db.select().from(data).where(eq(data.userId,uuid[0].id))

if( !dataa[0]?.name){
  return <div className='flex items-center justify-center h-full w-full   p-4'>
     <NoProduct/> 
  </div>
}
   

  return (
    <>
   <div className=' w-full h-full overflow-auto   hide-scrollbar container mx-auto  p-3  '>
    <div className=''>

    <NewProductButton/>
    </div>
    <div className='  h-screen '>
      <AllProducts data={dataa}/>
    </div>
   </div>
    </>
  )
}

export default page