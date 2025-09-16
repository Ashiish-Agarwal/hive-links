import { UuidAction } from '@/actions/read'
import React from 'react'
import { redirect } from 'next/navigation'
import { db } from '@/db'
import { data, links } from '@/db/schema/data-schema'
import { and, eq } from 'drizzle-orm'
import UserDataUpdateForm from '@/components/dashboard/edit/updatedata'
import EditOptionsCMP from '@/components/dashboard/edit/Edit-options-component'



const page = async ({params}:{params:Promise<{userid:string}>}) => {
  const user= await UuidAction()
  if(!user || !user[0].id || user.length === 0){
    return redirect('/signup')  
  }
  const logedinUser= user[0].id
// verifying the user who comes for edit is real user of the product 
  const verifyProduct = await db.select({id:data.id}).from(data).where(and(eq(data.id,(await params).userid),eq(data.userId,logedinUser)))
  if(verifyProduct.length===0){
    return redirect(`/dashboard/${user[0].id}/inbox`)
  }
  const ProductData = await db.select().from(data).where(eq(data.id,(await params).userid))
  const productLink= await db.select().from(links).where(eq(links.userId,(await params).userid))
 

    const param = await params
    
  return (
    <>
    <div className=' w-full h-full  relative'>

    <UserDataUpdateForm
      initialData={{
        name: ProductData[0]?.name || '',
        bio: ProductData[0]?.bio || '',
        profile: ProductData[0]?.profile || '',
        links:productLink.map((link)=>({
          
          titleName:link.title || '',
          linkUrl:link.link || '',
        }))
      }}

    />
  
        </div>
       <div>          {/* <div className=' h-[15rem]  flex  items-center gap-5 justify-center '> */}
       
<EditOptionsCMP param={param.userid}   />

  
</div>


    </>
  )
}

export default page