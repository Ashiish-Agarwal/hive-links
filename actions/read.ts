'use server'
import { db } from "@/db";
import { user } from "@/db/schema/auth-schema";
import { data, links, socialLinks, theme } from "@/db/schema/data-schema";
import { auth } from "@/lib/auth";
import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";
import {  redirect } from "next/navigation";

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





export async function GetProduct(productid:string){
    const user= await UuidAction()
      if(!user || !user[0].id || user.length === 0){
        return redirect('/signup')  
      }
      const logedinUser= user[0].id 
      const verifyuserProductid= await db.select().from(data).where(and(eq(data.userId,logedinUser),eq(data.id,productid)))
      if(!verifyuserProductid){
        return redirect(`/dashboard/${user[0].id}/inbox` as any)
      }
     
return verifyuserProductid
    

}

export async function DesignAction(productid:string){
  const user = await UuidAction()
 
  const logedinUser= user[0].id 
 
  try{

    const data = await db.select().from(theme).where(and(eq(theme.userId,logedinUser),eq(theme.productId,productid))).limit(1).execute()
    if(data.length===0){
      return null

    }

    const themeClient = data[0]
    if(  themeClient.theme===null){
      return null
    
      
    }
    

   
   
return themeClient
    
  }catch(error){
    console.log(error)
  }

}


export async function GetLink(productid:string){
  const user = await UuidAction()
 
  const logedinUser= user[0].id 

  const AllLinks =await db.select().from(links).where( and(eq(links.linkId,productid),eq(links.userId,logedinUser)))

  if(!AllLinks){
    return null
  }
return  AllLinks
}

export async function GetUserreal(productid:string){
  const user = await UuidAction()
 
  const logedinUser= user[0].id 

  const checkdata = await db.select().from(data).where(and(eq(data.userId,logedinUser),eq(data.id,productid))).limit(1).execute()

  if(checkdata.length===0){
    return undefined
  }

return checkdata
}


export async function Getunauthorizedata({productid}:{productid:string}){

 
  
  const querry = await db.select().from(data).where(and(eq(data.id,productid))).execute()
  
  if(!querry || querry.length===0){

   
    return null
  }

  
  return querry[0]

}

export async  function GetunauthorizeLink({productid}:{productid:string}){
 

  const AllLinks =await db.select().from(links).where( and(eq(links.linkId,productid)))

  if(!AllLinks){
    return null
  }

return  AllLinks
}

export async function GetunauthorizeDesigndata({productid}:{productid:string}){
  
  const data = await db.select().from(theme).where(and(eq(theme.productId,productid))).limit(1).execute()

  if(data.length===0){
    return null
  }

  return data[0]
}
export async function GetSocialLink({productid}:{productid:string}){
  
  try {
    
    
    const AllLinks =await db.select().from(socialLinks).where( and(eq(socialLinks.productid,productid)))
    
  

    if(!AllLinks){
      return null
    }
    
    return  AllLinks
  } catch (error) {
    console.log(error)
    return null
  }
}