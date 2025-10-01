
import { Getunauthorizedata, GetunauthorizeDesigndata, GetunauthorizeLink } from '@/actions/read'

import Link from 'next/link'
import { Avatar ,AvatarFallback,AvatarImage } from '@/components/ui/avatar'
import SocialLinksDisplay from '@/components/dashboard/social-links'



const Page   = async ({params}:{params:Promise<{username:string,productid:string}>}) => {

    const {username,productid} = await params
    const decodedProductid = decodeURIComponent(productid)
    const decodedUsername = decodeURIComponent(username)
   
console.log(decodedProductid,decodedUsername)
 const GetunAuthorizeData= await Getunauthorizedata({productid:decodedProductid})
 const linksdata = await GetunauthorizeLink({productid:decodedProductid})
 const designdata = await GetunauthorizeDesigndata({productid:decodedProductid})

 
 


 


 if(!GetunAuthorizeData){
  return <div className='w-full h-screen text-center'> someee error got in url hope so its site or your link problem</div>

 }



  return (

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
              <AvatarImage className='   w-full h-full  overflow-hidden    ' src={`${GetunAuthorizeData?.profile || '/defaultimg.jpg' } `}/>
           
              

             
              <AvatarFallback>Hive</AvatarFallback>
            </Avatar>
            

          </div>
          {/* name bio */}
          

          <div className={`${designdata?.textcolor?.length!==0 ?'':'text-black dark:text-white' }flex flex-col items-center  gap-1  text-center `}>
            <h1  className='text-2xl uppercase  '>{GetunAuthorizeData?.name}</h1>
            <p style={{
              color:'var(--accent)'
            }} className='text-lg text-zinc-500 hover:text-zinc-700 duration-300 ease-in-out  text-balance break-words  w-[90%] mx-auto  '> {GetunAuthorizeData?.bio }   </p>

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
           <SocialLinksDisplay  productid={productid} />
       
          </div>

          
          

        
          {/* logo */}
          <div className='flex items-center gap-2 w-full     justify-center mt-10 h-fit   duration-300 ease-in-out   '>
            <Link href={'/landingpage'} target="_blank" className=' text-3xl'>
            Hive Link 
            </Link>
          </div>
          </div>
        
      </div>
      
      
    </div>
   
    
   
       
  )
}

export default Page