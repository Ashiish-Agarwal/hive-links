'use server'

import { userDataSchema } from '@/lib/zod/Userdata';
import { z } from 'zod';
import { UuidAction } from './read';
import { db } from '@/db';
import { data, links } from '@/db/schema/data-schema';
import { and, eq } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';
import { cache_Tag } from '@/lib/chache';



export const updateData = async (formData: z.infer<typeof userDataSchema>,productid:string) => {

    const user = await UuidAction();
    const userId = user[0]?.id
    const dataIdrow  = await db.select().from(data).where(eq(data.userId,userId))
    const datarowid = dataIdrow[0].id
    

    if (!userId) {
        return {
            success: false,
            message: 'Failed to create userss data',
            error: 'User not found'
        };
    }
    await db.update(data).set({
        name:formData.name,
       
        bio:formData.bio,
        profile:formData.profile,
        updatedAt:new Date(),
    }).where(and(eq(data.userId,userId),eq(data.id,datarowid))).execute()


    await db.delete(links).where(and(eq(links.userId,userId),eq(links.linkId,productid))).execute()
    
if(formData.links.length >= 0){


const linkInsert= formData.links.filter((links)=>links.titleName !== "" || links.linkUrl !== "").map((links)=>({
    title:links.titleName,
    data_id_link:productid,
    user_id:userId,
    link:links.linkUrl,
    createdAt:new Date(),
    updatedAt:new Date(),
}))



// geting some warning in link insert right down 

if (linkInsert.length > 0) {
    if (linkInsert.length > 0) {
        await db.insert(links).values(linkInsert.map((e) => ({
            id: crypto.randomUUID(),
            linkId: productid,  // This should reference data.id (lowercase 'l')
            userId: userId,     // This should reference user.id
            title: e.title,
            link: e.link,
            createdAt: new Date(),
            updatedAt: new Date(),
        }))).execute()
    }
}
  
}

    revalidateTag(`${cache_Tag.Products}`)

    return {
        success:true,
        message:'data updated successfully',
    }
}