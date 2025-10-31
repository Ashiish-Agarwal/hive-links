

import { LadningpageAuth } from '@/actions/read'
import { redirect } from 'next/navigation'
import Animatedtext from '@/components/landingpage/Animatedtext'

import Sectionsecond from '@/components/landingpage/sectionsecond'


import CardSwapsection from '@/components/landingpage/CardSwapsection'
import StepperCmp from '@/components/StepperCmp'
import Testimonials from '@/components/landingpage/testimonials'
import Questions from '@/components/landingpage/Questions'
import Lastsection from '@/components/landingpage/Lastsection'


const page = async() => {

  const current= await LadningpageAuth()
  if(current){
    return redirect('/dashboard')
  }

 


  return (
    

    <div  style={{
     background:'#FFFAEC'
    }} className='   flex-col gap-1 h-full  w-full  overflow-hidden     '>

    <div  className='   flex flex-col items-center justify-center text-center mx-auto   '>
       
    

      <section  style={{
        background:'#FCF5ED'
      }} className='    grid grid-cols-1 md:grid-cols-2 w-full sm:h-[200vh] md:h-screen -mt-10   gap-10 p-0.5 md:p-14  '>

       
       <Animatedtext/>
      
     
      

      </section>
      


    </div>
    <section
 style={{
  background:'#301212'
}} className='w-full h-screen hidden md:block '
>
<CardSwapsection/>



</section>
<section style={{
  background:'#F5ECD5'
}} className='h-screen w-full  p-3   mx-auto flex items-center justify-center   backdrop-blur-sm    '>

<Sectionsecond/>
 
</section>


 <section style={{
  background:'#FFFAEC'
}} className='w-full h-screen'>
 

  <StepperCmp/>

</section>
<section   className='w-full h-screen '  >
  <div   className='w-full h-screen '>



  <Testimonials/>
  <h1 className='text-2xl  fontSourGummy font-bold text-center mt-20  p-4 bg-red-800 text-white '>The Lazy way to increase your Ashthetics</h1>
</div>
  
  </section> 
  <section className='flex flex-col items-center justify-center text-center'>
    <h1 className='text-xl md:text-3xl lg:text-4xl xl:text-4xl fontSourGummy font-bold  '>Questions ? <span className='text-red-900'>Answers</span></h1>
    
    <div className='w-[60%]  text-center p-5 '>
      <Questions/>
    </div>
  </section>
  <section className='h-1/2 w-full flex flex-col items-center justify-center'>
    <Lastsection/>
  </section>
          </div>
  )



}

export default page