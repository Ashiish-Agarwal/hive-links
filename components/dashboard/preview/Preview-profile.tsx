import React from 'react'
import { DesignAction, GetLink, GetProduct } from '@/actions/read'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import {  LucideCrown } from 'lucide-react'
import SocialLinksDisplay from '../social-links'
import Image from 'next/image'
import { defaultImage } from '@/lib/utils'



export type PreviewProfileProps = {
  data?: {
    id?: string;
    productId?: string | null;
    userId?: string | null;
    theme?: string | null;
    fontStyle?: string | null;
    textcolor?: string | null;
    Linkcolor?: string | null;
    backgroundColor?: string | null;
  };
  productid: string;
};


const PreviewProfile = async ({productid}:{productid:string}) => {

const designdata = await DesignAction(productid)
// const themeData =  designdata 


  return (
    <div>
     <PreviewProfileComponent data={{...designdata}} productid={productid} />
      


    </div>
  )
}

export default PreviewProfile


export async function  PreviewProfileComponent (
  
 {data, productid}:PreviewProfileProps
)


{
  
  const datainformation = await GetProduct(productid) 
  const linksdata = await GetLink(productid) 
  

 

  return(
    <div style={{
      background:data?.backgroundColor || ''
    }} >

      <div 
      style={{
        background:'var(--bg)',
        color:'var(--text)'
        
      }} 
      className={`w-full h-screen  text-center ${data?.fontStyle }   ${data?.textcolor } ${data?.theme || ''} p-2 theme-${data?.theme}`}>
        <div
         style={{
          background:'var(--bg)',
          
        }}
         className='w-full h-screen rounded-md  '>
          {/* //image */}
          <div className={` w-full flex items-center justify-center ${ datainformation[0]?.profile?'block':'hidden' }`} >
                                  <Image className='rounded-full ' src={datainformation[0]?.profile || defaultImage} alt='profile' width={70} height={70}/>
            
            

          </div>
          {/* name bio */}
          

          <div 
          
           className={`${data?.textcolor?.length!==0 ?'':'text-black dark:text-white' }flex flex-col items-center  gap-1 w-full text-center `}>
            <h1  className='text-2xl uppercase  '>{datainformation[0]?.name}</h1>
            <p className='text-sm text-zinc-400  text-balance break-words  '> {datainformation[0]?.bio }   </p>

          </div>
          {/* links */}
          <div className='flex flex-col gap-2 w-full text-center mt-6  '>
            {linksdata?.map(e=>(
              <>
              <span className='flex gap-2'>
              <a 
             
              href={`${e?.link}`}  target="_blank" className={` rounded-md w-full p-2 h-10  scale-105 duration-300 ease-in-out hover:scale-110  text-sm `}>{e.title}</a>
              </span>

              </>
            ))}
          </div>
          {/* icons */}
          <div className='flex gap-3 text-center mt-6  items-center flex-wrap '>
          <SocialLinksDisplay productid={productid} />
       
          </div>

          
          

        
          {/* logo */}
          <div className='flex items-center justify-center  gap-2 w-full   text-center mt-10   '>
            <Link href={'/landingpage'} style={{
              background:'var(--card-bg)'
            }} target="_blank" className=' text-black dark:text-white hover:text-purple-500  duration-300 ease-in-out text-3xl flex items-center gap-2'>
            Hive Link <LucideCrown/>
            </Link>
          </div>
          </div>
        
      </div>
      
      
    </div>
  )
}