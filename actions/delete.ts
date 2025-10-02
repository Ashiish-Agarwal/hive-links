'use server'
import { db } from "@/db"
import { UuidAction } from "./read"
import { and, eq } from "drizzle-orm"
import {data as userdata} from '@/db/schema/data-schema'
import { revalidatePath, revalidateTag, unstable_cache } from "next/cache"

import { cache_Tag, withCache } from "@/lib/chache"
import { redirect } from "next/navigation"
import { user as userSchema } from "@/db/schema/auth-schema"
// import { revalidatePath, revalidateTag } from "next/cache"


export async function DeleteProduct({data}:{data:{
    id?:string,
    userId?:string
}}){

const useruuid =await  UuidAction()


if(!data.id || !useruuid[0].id  ){
    return{ success: false, message: 'User not found' }
    
}

try{


const delted = await db.delete(userdata).where(and(eq(userdata.id, data.id),eq(userdata.userId,useruuid[0].id)),
)
 revalidateTag(`${cache_Tag.Products}`)
 revalidatePath('/dashboard')


return {success:true , message:'product deleted successfully',data:delted}

}
catch(error){
    return{success:false , message:'error in deleting product'}
    }}



export async function DeleteAccount(user:string) {
        const useruuid =await  UuidAction()
        if(!useruuid[0].id){
            return redirect('/landingpage')
            
        }
        try {
            const deleted = await db.delete(userSchema).where(and(eq(userSchema.id, user),eq(userSchema.id, useruuid[0].id)))
            cache_Tag.User
            
            return {success:true , message:'account deleted successfully',data:deleted}
        } catch (error) {
            return {success:false , message:'error in deleting account'}
        }

        
    }



