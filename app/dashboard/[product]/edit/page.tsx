import { GetLink,  UuidAction } from '@/actions/read'
import React from 'react'
import { redirect } from 'next/navigation'
import { db } from '@/db'
import { data } from '@/db/schema/data-schema'
import { and, eq } from 'drizzle-orm'
import UserDataUpdateForm from '@/components/dashboard/edit/updatedata'
import EditOptionsCMP from '@/components/dashboard/edit/Edit-options-component'



const page = async ({params}:{params:Promise<{product :string}>}) => {
  const param = await params
 
 
  const user= await UuidAction()
  if(!user || !user[0].id || user.length === 0){
    return redirect('/signup')  
  }
  const logedinUser= user[0].id 

 
  const ProductData = await db.select().from(data).where(and(eq(data.userId,logedinUser),eq(data.id,param.product)))
  const productLink= await GetLink(param.product)
 

 
    
  return (
    <>
    <div className=' w-full h-full  relative'>
     
     

    <UserDataUpdateForm
      productid={param.product}
      initialData={{
        name: ProductData[0]?.name || '',
        bio: ProductData[0]?.bio || '',
        profile: ProductData[0]?.profile || '',
        links:productLink?.map((link)=>({
          
          titleName:link.title  ,
          linkUrl:link.link  ,
        })) || []
      }}

    />
  
        </div>
       <div>         
       
<EditOptionsCMP param={param.product }   />

  
</div>


    </>
  )
}

export default page