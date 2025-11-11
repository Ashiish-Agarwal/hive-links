import { UuidAction } from '@/actions/read'
import NewProductButton from '@/components/add-new-product'
import AllProducts from '@/components/dashboard/AllProducts'
import Logo from '@/components/logo'
import NoProduct from '@/components/NoProduct'
import { MobileNavBar, SideBaar } from '@/components/SideBaar'
import { db } from '@/db'
import { data } from '@/db/schema/data-schema'
import { eq } from 'drizzle-orm'
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
    <div className='hidden md:block p-2 overflow-hidden h-screen w-full  dark:bg-black bg-white '>
<div className='w-screen   h-screen flex  '>
        <div className=' h-full w-[20%]  flex  border-r-2  overflow-hidden dark:border-gray-800/20 dark:bg-black  border-gray-200/70   '>
        <div className=' h-full w-full grid grid-rows-[200px_1fr]   '>
          <div className=' ml-5    text-3xl  font-semibold '>

            <Logo/>
          </div>
          <div >

            <SideBaar/>
          </div>

        
        </div>
        </div>
            

                <div className='w-[80%] p-5 hide-scrollbar  border-r-2 dark:border-gray-800/20 border-gray-200/70 h-full dark:bg-black relative overflow-y-scroll '>
               
<div className=''>

    <NewProductButton/>
    </div>
    <div className='  h-screen  '>
       <AllProducts data={dataa}/> 
    
    </div>

                </div>
                
                



      </div>

    </div>
    <div
    
    
    >

      {/**small or medium screen  */}
      <div className=' sm:block md:hidden p-3     '>
        <div>
      
        <MobileNavBar/>
      <div className=' w-full h-full overflow-auto   hide-scrollbar container mx-auto  p-3  '>
    <div className=''>

    <NewProductButton/>
    </div>
    <div className='  h-screen  '>
       <AllProducts data={dataa}/> 
    
    </div>
   </div>
     
        </div>
      </div>
    </div>
   
    </>
  )
}

export default page