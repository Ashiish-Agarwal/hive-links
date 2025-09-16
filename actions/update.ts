'use server'

import { userDataSchema } from '@/lib/zod/Userdata';
import { z } from 'zod';
import { UuidAction } from './read';
import { db } from '@/db';
import { data, links } from '@/db/schema/data-schema';
import { eq } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';
import { cache_Tag } from '@/lib/chache';
import { randomUUID } from 'crypto';

export const updateData = async (formData: z.infer<typeof userDataSchema>) => {

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
    }).where(eq(data.userId,userId)).execute()

      // Delete existing links
//   await db.delete(links).where(eq(links.userId, userId)).execute()
    
if(formData.links.length >= 0){


const linkInsert= formData.links.filter((links)=>links.titleName !== "" || links.linkUrl !== "").map((links)=>({
    title:links.titleName,
    link:links.linkUrl,
    createdAt:new Date(),
    updatedAt:new Date(),
}))



// geting some warning in link insert right down 

   await db.insert(links).values(linkInsert.map((e)=>({
    id:crypto.randomUUID(),
    link:e.link,
    title:e.title,
    userId:datarowid,
    createdAt:new Date(),
    updatedAt:new Date(),
   }))).execute()
    
}

    revalidateTag(`${cache_Tag.Products}`)

    return {
        success:true,
        message:'data updated successfully',
    }
}