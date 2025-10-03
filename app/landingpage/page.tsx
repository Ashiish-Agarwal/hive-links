
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import Link from 'next/link'
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import UsingOurApp from '@/components/landingpage/UsingOurApp'
import InputLandingPage from '@/components/landingpage/inputlandingpage'

import Image from 'next/image'

const page = async() => {


 


  return (

    <div className=' flex flex-col gap-1 h-full  w-full  overflow-hidden   '>

    <div className=' p-2 flex flex-col items-center justify-center text-center  '>
      <section className='grid grid-cols-1 md:grid-cols-2 w-full sm:h-[200vh] md:h-screen   gap-2  '>
        <div style={{
          background:'#1E1B4B'
        }} className='  h-[100vh]  w-full flex flex-col gap-3  justify-center items-center      '>
          <div className='   select-none   text-center  '>
            <h1 className=' text-4xl md:text-6xl text-wrap font-bold text-black dark:text-white  '>One link  endless connection </h1>
 <p className='text-sm text-zinc-400  text-balance break-words  w-[70%] mx-auto mt-2 '>hive link is a platform that allows you to create a single link for your multiple links design customize </p>
           
           <InputLandingPage/>

         
          </div>

        </div>
        <div style={{
          background:'#F5F3FF'
        }} className='h-full bg-red-500 p-2  w-full flex items-center justify-center    '>
          


          <div className='w-[18rem] h-[35rem] rounded-lg  border-2 border-primary bg-white  hover:scale-[1.03] duration-300 ease-in-out '>
          


          <div className=' w-full h-full mx-auto  overflow-hidden      '> 
      <div style={{
        background:'var(--bg)',
        color:'var(--text)'
      }} className={`w-full h-full flex flex-col items-center justify-center  text-centersansation-light p-2 `}>
        <div style={{
          background:'var(--bg)',
          
        }} className='w-full h-full rounded-md flex flex-col items-center justify-center mb-20 mt-16     '>
          {/* //image */}
          <div className={`  w-full flex items-center justify-center `} >

          <Image className='rounded-full ' src={"/defaultimg.jpg"} alt="" width={100} height={100}/>
           
              

             
             
            

          </div>
          {/* name bio */}
          

          <div  className='flex flex-col items-center  gap-1  text-center '>
            <h1 className='text-2xl uppercase text-black  tracking-tighter  '>@Aviinash agarwal</h1>
            <p className='text-sm text-zinc-400  text-balance break-words  w-[70%] mx-auto  '> yo i am avii who created the entire website   </p>

          </div>
          {/* links */}
          <div className='flex flex-col gap-2 w-full mx-auto text-center mt-6  '>
           
              <span  className='flex gap-2 w-full flex-col  '>
                {

                ['1','2'].map((e)=>(

                  <Link key={e} href={'/'} style={{
                    background: 'purple' 
                
              }}   target="_blank" className={` flex items-center justify-center rounded-md w-full md:w-[50%] p-2 h-8 mx-auto scale-105 duration-300 ease-in-out hover:scale-110   sm:text-sm md:text-base lg:text-lg xl:text-xl  `}>Link</Link>
                ))}
              </span>

             
            
          </div>
          {/* icons */}
          <div className='flex gap-3 text-center mt-6  items-center flex-wrap text-black/60  '>
         {  [
          {key:'github',value:<Github/>},
           {key:'facebook',value:<Facebook/>},
           {key:'twitter',value:<Twitter/>},
           {key:'instagram',value:<Instagram/>},
           {key:'linkedin',value:<Linkedin/>}].map((e,index)=>(
            <span  className='hover:text-black/80 duration-300 ease-in-out hover:scale-105 ' key={index}>
              {e.value}
            </span>
           ))}
       
          </div>

          
          

        
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
        </div>
      

      </section>


    </div>
<section className='h-screen w-screen  mx-auto flex items-center justify-center bg-accent/30   '>

  <UsingOurApp/>
</section>
          </div>
  )



}

export default page