'use server'
import { db } from "@/db";
import { user } from "@/db/schema/auth-schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export  async function UuidAction(){

    const session = await auth.api.getSession({
        headers: await headers()
    })
    if(!session || !session.user.id){
        return redirect('/signup')
    }

const users = await db.select().from(user).where(eq(user.id,session.user.id))

return users

}