
import { Getunauthorizedata, GetunauthorizeDesigndata, GetunauthorizeLink } from '@/actions/read'
import { GetLink } from '@/actions/read'
import { Facebook, Github, Instagram, Linkedin, LucideCrown, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Avatar ,AvatarFallback,AvatarImage } from '@/components/ui/avatar'



const page = async ({params}:{params:Promise<{username:string,productid:string}>}) => {

    const {username,productid} = await params
    const decodedProductid = decodeURIComponent(username)
    const decodedUsername = decodeURIComponent(productid)
   

 const GetunAuthorizeData= await Getunauthorizedata({productid:decodedProductid})
 const linksdata = await GetunauthorizeLink({productid:decodedProductid})
 const designdata = await GetunauthorizeDesigndata({productid:decodedProductid})
 


 


 if(!GetunAuthorizeData){
  return <div className='w-full h-screen text-center'> someee error got in url hope so its site or your link problem</div>

 }



  return (

    <div className='w-full h-screen overflow-scroll'>

<div className=' w-[80%] h-screen mx-auto'> 
      <div style={{
        background:'var(--bg)',
        color:'var(--text)'
      }} className={`w-full h-screen flex flex-col items-center justify-center  text-center ${designdata?.fontStyle || 'sansation-light'} ${designdata?.backgroundColor || ' bg-white dark:bg-black '} ${designdata?.textcolor || 'text-black dark:text-white'} ${designdata?.theme || ''} p-2 theme-${designdata?.theme}`}>
        <div style={{
          background:'var(--bg)',
          
        }} className='w-full h-screen rounded-md flex flex-col items-center justify-center mb-20   '>
          {/* //image */}
          <div className={`  w-full flex items-center justify-center ${ GetunAuthorizeData?.profile?'block':'hidden' }`} >
            <Avatar className=' size-52  select-none overflow-hidden'>
              <AvatarImage className='   w-full h-full  overflow-hidden    ' src={`${GetunAuthorizeData?.profile || '/defaultimg.jpg' } `}/>
           
              

             
              <AvatarFallback>Hive</AvatarFallback>
            </Avatar>
            

          </div>
          {/* name bio */}
          

          <div style={{
              color:designdata?.textcolor || '',
            }} className={`${designdata?.textcolor?.length!==0 ?'':'text-black dark:text-white' }flex flex-col items-center  gap-1  text-center `}>
            <h1 style={{
              fontFamily:designdata?.fontStyle || 'default'
            }} className='text-2xl uppercase  '>{GetunAuthorizeData?.name}</h1>
            <p className='text-sm text-zinc-400  text-balance break-words  w-[70%] mx-auto  '> {GetunAuthorizeData?.bio }   </p>

          </div>
          {/* links */}
          <div className='flex flex-col gap-2 w-full mx-auto text-center mt-6  '>
            {linksdata?.map(e=>(
              <>
              <span key={e.id } className='flex gap-2 w-full '>
              <a style={{
                background:designdata?.Linkcolor || 'purple' 
                
              }} href={`${e?.link}`}  target="_blank" className={` flex items-center justify-center rounded-md w-full md:w-[50%] p-2 h-10 mx-auto scale-105 duration-300 ease-in-out hover:scale-110   sm:text-sm md:text-base lg:text-lg xl:text-xl  `}>{e.title}</a>
              </span>

              </>
            ))}
          </div>
          {/* icons */}
          {/* <div className='flex gap-3 text-center mt-6  items-center flex-wrap '>
           <Github/>
           <Facebook/>
           <Twitter/>
           <Instagram/>
           <Linkedin/>
       
          </div> */}

          
          

        
          {/* logo */}
          <div className='flex items-center gap-2 w-full     justify-center mt-10 h-fit  text-purple-300  hover:text-purple-800 duration-300 ease-in-out   '>
            <Link href={'/landingpage'} target="_blank" className=' text-3xl'>
            Hive Link 
            </Link>
          </div>
          </div>
        
      </div>
      
      
    </div>
   
    
   
       
    </div>
  )
}

export default page