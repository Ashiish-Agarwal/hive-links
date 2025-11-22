import { GetInfo } from '@/actions/read'
import SocialLinksDisplay from '@/components/dashboard/social-links'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import UserNotFound from '@/components/user-not-found'
import { metadatadescription, nameonly } from '@/lib/utils'
import { Metadata } from 'next'


import Link from 'next/link'
import React from 'react'

type Props = {
    params: {
        username: string;
    };
}

const username = async ({params}:Props) => {
  
 
 const name = await  params 
    
 const decodedUsername = decodeURIComponent(name.username)
 const fetchInfo= await GetInfo({username:decodedUsername})
    
 console.log(decodedUsername)
  const GetunAuthorizeData= await fetchInfo?.usernamedata
  const linksdata = await fetchInfo?.linksdata
  const designdata = await fetchInfo?.designdata

 
  
 
 
  if(!GetunAuthorizeData){
   return <div className='w-full h-screen text-center'> 
   
   <UserNotFound/>
   </div>
 
  }
 

   return (
    <>


     <div
     style={{
       background:designdata?.backgroundColor || ''
     }}
      
      className={`w-full h-screen  overflow-scroll  ` }>
 
 
       <div  style={{
         background:(designdata?.textcolor ? designdata?.textcolor : 'var(--bg)'),
         color:'var(--text)'
       }} className={`w-full h-screen flex flex-col items-center justify-center ${designdata?.textcolor}  ${designdata?.fontStyle || 'sansation-light'} ${designdata?.backgroundColor}   p-2 theme-${designdata?.theme}`}>
       
        
         <div className='w-full h-screen rounded-md flex flex-col items-center justify-center    '>
           {/* //image */}
           <div className={`  w-full flex items-center justify-center ${ GetunAuthorizeData?.profile?'block':'hidden' }`} >
             <Avatar className=' size-52  select-none overflow-hidden'>
               <AvatarImage className='   w-full h-full  overflow-hidden  object-cover   ' src={`${GetunAuthorizeData?.profile || '/defaultimg.jpg' } `}/>
            
               
 
              
               <AvatarFallback>Hive</AvatarFallback>
             </Avatar>
             
 
           </div>
           {/* name bio */}
           
 
           <div className={`${designdata?.textcolor?.length!==0 ?'':'text-black dark:text-white' }flex flex-col items-center  gap-1  text-center `}>
             <h1  className='text-2xl uppercase  '>{GetunAuthorizeData?.name}</h1>
             <p style={{
               color:'var(--accent)'
             }} className='text-sm md:text-lg  text-zinc-500 hover:text-zinc-700 duration-300 ease-in-out  text-balance break-words  w-[90%] mx-auto  '> {GetunAuthorizeData?.bio }   </p>
 
           </div>
           {/* links */}
           <div className='flex flex-col gap-2 w-full mx-auto text-center mt-6  '>
             {linksdata?.map(e=>(
               <>
               <span key={e.id } className='flex gap-2 w-full '>
               <a style={{
                 background:designdata?.Linkcolor || 'var(--card-bg)' 
                 
               }} href={`${e?.link}`}  target="_blank" className={` flex items-center justify-center rounded-md w-full md:w-[50%] p-2 h-10 mx-auto scale-105 duration-300 ease-in-out hover:scale-110   sm:text-sm md:text-base lg:text-lg xl:text-xl  `}>{e.title}</a>
               </span>
 
               </>
             ))}
           </div>
           {/* icons */}
           <div  className='flex gap-3 text-center mt-6 w-full justify-center  items-center flex-wrap '>
            <SocialLinksDisplay  productid={fetchInfo?.productuuid || 'h'} />
        
           </div>
 
           
           
 
         
           {/* logo */}
           <div className='flex items-center gap-2 w-full     justify-center mt-10 h-fit   duration-300 ease-in-out   '>
             <Link href={'/landingpage'} target="_blank" className=' text-3xl'>
            {nameonly}
             </Link>
           </div>
           </div>
         
       </div>
       
       
     </div>
    
     
    
</>
        
   )
 }
 

export default username
export async function generateMetadata({params}:Props): Promise<Metadata> {
  const paramsawaited = await params
  
   const decodedUsername = decodeURIComponent(paramsawaited.username)
    if(!decodedUsername){
   
    }
    const fetchInfo= await GetInfo({username:decodedUsername})
  

   return {
    title: {
    default: paramsawaited.username,
    template: `%s | ${fetchInfo?.usernamedata?.name} `
  },
  description: `${fetchInfo?.usernamedata?.bio}`,
  
  // Keywords for SEO
  keywords: [
    'bio link',
    'link in bio',
    'linktree alternative',
    'bio link editor',
    'social media links',
    'link page creator',
    'beetree',
    'free link in bio',
    'custom bio page',
    'social link manager',
    ''
  ],
  authors: [{ name: "beetree", }],
  openGraph: {
    title: `${fetchInfo?.usernamedata?.name}`,
    description: `${metadatadescription}`,
    type: "website",
    locale: "en_US",
    siteName: "beetree",
    url: `https://laxybio.netlify.app/${paramsawaited.username}`,
    images: [
      {
        url: `${fetchInfo?.usernamedata?.profile}`,
        width: 1200,
        height: 630,
        alt: "beetree",
      },
    ],
  },
   twitter: {
    card: 'summary_large_image',
    title: `${fetchInfo?.usernamedata?.name}`,
    description: `${fetchInfo?.usernamedata?.bio}`,
    images: [`${fetchInfo?.usernamedata?.profile}`],
    creator: '@beetree', 
  },
    robots: {
    index: true,
    
    follow: true,
    googleBot: {
      
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
      
    },
  },
}}