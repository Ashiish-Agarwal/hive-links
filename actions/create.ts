'use server'; // action.ts


import { userDataSchema } from '@/lib/zod/Userdata';
import { db } from '@/db';
import { data, links } from '@/db/schema/data-schema';
import { UuidAction } from './read';
import { z } from 'zod';

import { revalidateTag } from 'next/cache';
import { cache_Tag } from '@/lib/chache';
import { eq } from 'drizzle-orm';


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
          userId: dataId,
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

