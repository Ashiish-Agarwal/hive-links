import { db } from '@/db'
import { data, links } from '@/db/schema/data-schema'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { eq } from 'drizzle-orm'



import React from 'react'


const PreviewProfile = async ({userid}:{userid:string}) => {


  const param = userid
  const userFetchData= await db.select().from(data).where(eq(data.id,param))
  const userData = userFetchData[0]
  const linksData = await db.select().from(links).where(eq(links.userId,param))
  const LinkLink = linksData.map((item)=>item.link)
  const Href = LinkLink

  // user themes and color
  const UserTheme= 'purple-600'
  const USerFontColor = 'font-semibold'

 

  return (
    <div className={cn(`h-[80vh] w-[20vw]  bg-${UserTheme}   rounded-md          `)}>
      <div className='flex flex-col  items-center justify-center gap-2 p-2 '>
       

<div className='flex flex-col gap-2  items-center w-fit h-fit '>


      <Avatar className="rounded-full  size-20  ">
        <AvatarImage className='rounded-full size-full  object-cover items-center  '
          src={userData.profile || ''}
          alt="profile.."
          />

        <AvatarFallback>
          loading
        </AvatarFallback>
      </Avatar>
          </div>


<div className={`flex flex-col gap-2 text-center ${USerFontColor}  `}>


        <h1 className={cn('text-2xl uppercase ',userData.name.length > 10 ? 'text-sm' : 'text-2xl', USerFontColor)}>{userData.name }</h1>
        <p className='text-sm lowercase '>{userData.bio }</p>
</div>
        <div>
{
  linksData.map((item)=>(
    <div key={item.id}>
      <a href={`${item.link}`}>
        {item.title}
      </a>
    </div>
  ))
}


        </div>

      </div>
      
   

        
    </div>
  )
}

export default PreviewProfile