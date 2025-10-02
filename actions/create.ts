'use server'; // action.ts


import { userDataSchema } from '@/lib/zod/Userdata';
import { db } from '@/db';
import { data, links, socialLinks, theme } from '@/db/schema/data-schema';
import { UuidAction } from './read';
import { z } from 'zod';

import { revalidateTag } from 'next/cache';
import { cache_Tag } from '@/lib/chache';
import { and, eq } from 'drizzle-orm';




export async function createProduct(formData: z.infer<typeof userDataSchema>) {

  const user = await UuidAction();
  const userId = user[0]?.id
  const dataId = crypto.randomUUID();
  if (!userId) {
    return {
      success: false,
      message: 'Failed to create userss data',
      error: 'User not found'
    };
  }

  try {



    const validatedData = userDataSchema.parse(formData);


    const result = await db.insert(data).values({
      name: validatedData.name,
      bio: validatedData.bio,
      id: dataId,
      userId: userId,
      profile: validatedData.profile,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).execute()



    if (validatedData.links.length >= 0) {

      const LinksData = validatedData.links.map((elem) => (
        {
          id: crypto.randomUUID(),
          linkId: dataId,
          userId:userId,
          title: elem.titleName,
          link: elem.linkUrl,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ))

   

      await db.insert(links).values(LinksData).execute();
    }










    revalidateTag(`${cache_Tag.Products}`)




    return {
      success: true,
      message: 'data inserted  successfully',
      data: result,



    };

  } catch (error) {
    console.log('comes to catch validation ' + error)

    await db.delete(data).where(eq(data.id, dataId)).execute();







    return {
      success: false,
      message: 'Failed to create u data',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}






export async function createDesign(themeC:{
  color:string,
  pickerColorText:string,
  pickerColor_Background:string,
  pickerColor2_Link:string,
  fontStyle:string,
  productid:string
}) {
  const user = await UuidAction();
  const userId = await user[0]?.id
  if(!userId || user.length===0){
    return {
      success: false,
      message: 'Failed to create userss data',
      error: 'User not found'
    };
  }

  const productId = await db.select().from(theme).where(and(eq(theme.productId,themeC.productid),eq(theme.userId,userId))).limit(1).execute()
 
  



  try{

  if(productId.length ===0 ){

    
    
    await db.insert(theme).values({
    id:crypto.randomUUID(),
    userId:userId,
    theme:'',
    productId:themeC.productid,
    fontStyle:themeC.fontStyle,
    textcolor:themeC.color,
    backgroundColor:themeC.pickerColor_Background,
    Linkcolor:themeC.pickerColor2_Link,
    
  }).execute()

  
}


  await db.update(theme).set({
  
    userId:userId,
    theme:'',
   
    fontStyle:themeC.fontStyle,
    textcolor:themeC.color,
    backgroundColor:themeC.pickerColor_Background,
    Linkcolor:themeC.pickerColor2_Link,
  }).where(and(eq(theme.userId,userId),and(eq(theme.productId,themeC.productid),eq(theme.userId,userId)))).execute()

  revalidateTag(`${cache_Tag.Design}`)
  return {
    success: true,
    message: 'design updated  successfully',
  

  };

} catch (error) {
  console.log('comes to catch validation ' +  error)}
  return {
    success: false,
    message: 'Failed to create u data',
    error: 'failed'
  };


}




export async function CreateTheme(params:string,themeClient:string) {

  const userid = await UuidAction()

  if(! userid || themeClient.length===0){
    const user = await UuidAction()
  if(user.length === 0 || themeClient.length===0 || userid.length===0){
  return{
    success:false,
    message:'error in adding theme '
  }
  }
    return{
      success:false,
      message:'error in adding theme '
    }
  }
  try {

    await db.update(theme).set({
      theme:themeClient,
      fontStyle:'',
      textcolor:'',
      backgroundColor:'',
      Linkcolor:''
    }).where(and(eq(theme.productId,params),eq(theme.userId,userid[0]?.id))).execute()
   
    revalidateTag(`${cache_Tag.Design}`)
    return{
      success:true,
      message:'added theme successfully'
      
    }

  } catch (error) {
    console.log('comes to catch validation ' + error)
    return{
      success:false,
      message:'error in adding theme ',
      error:error instanceof Error ? error.message : 'Unknown error'
    }
  }

  
}

export async function CreatSocialLink({platform,url,productid}:{platform:string,url:string,productid:string}){
  const useridd = await UuidAction()

  if(!useridd || useridd.length===0){
    return{
      success:false,
      message:'error in adding theme '
    }
  }
  const userid = useridd[0].id
  try {
    
await db.insert(socialLinks).values({
  productid:productid,
  userId:userid,
  platform:platform,
  url:url,
  createdAt:new Date(),
  updatedAt:new Date(),
  
})
revalidateTag(cache_Tag.Social)

  } catch (error) {
    console.log('comes to catch validation ' + error)
    return{
      success:false,
      message:'error in adding theme ',
      error:error instanceof Error ? error.message : 'Unknown error'
    }
  }

}