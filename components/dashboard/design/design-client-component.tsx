'use client'
import React, {  useState } from 'react'

import { Button } from '@/components/ui/button'
import { ThemeColor } from '@/lib/Theme'
import { Edit2, Loader2, RotateCcw } from 'lucide-react'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { fontData } from '@/lib/Theme/index'
import { createDesign } from '@/actions/create'
import { toast } from 'sonner'


const DesignClientCmp = ({userId}:{userId:string} ) => {

  

  const [loading,setLoading] = useState<boolean>(false)
 

  const [font, setFont] = useState<string>('fontSansation')



  const [color, SetColor] = useState<string>('black')
  const [pickerColorText, setpickerColorText] = useColor('#fbfbfb');
  // use for change the background


  const [pickerColor_Background, setpickerColor_Background] = useColor('#000000');


  // use for change the link color
  const [pickerColor2_Link, setpickerColor2_Link] = useColor('#3c9f8b');

  const bgColor = Array.isArray(ThemeColor) ? ThemeColor[0] : ThemeColor;
  const bgColormap= ThemeColor 



  const isCustomColor =  pickerColor_Background.hex !== '#000000'

 
  const backgroundColor = isCustomColor 
  ? { backgroundColor: pickerColor_Background.hex }
  : { backgroundColor: Array.isArray(bgColor) ? bgColor[0] : bgColor };


  async function OnSubmit(){


    setLoading(true) 
   const backgroundColor= pickerColor_Background.hex==='#000000' ? '' : pickerColor_Background.hex
  const data = await createDesign({
    fontStyle:font,
    color:color,   
    pickerColorText:pickerColorText.hex,
    pickerColor_Background:backgroundColor,
    pickerColor2_Link:pickerColor2_Link.hex,
    productid:userId  
  })
  if(data?.success){
    toast.success(data.message)
    
  }else{
    toast.error(data?.message)
    
  }
  setLoading(false)
}
 
function setpickerColor_Backgroundfn(){
  SetColor('')
  console.log('comes to setpickerColor_Backgroundfn')
  console.log(SetColor +'set pickcolor')

}

 function bgcolorset(elem:string){
  SetColor(elem)
 
  setpickerColor_Background({ ...pickerColor_Background, hex: '#000000' })


}

  return (
    <>
      <div className='w-[80%] container mx-auto h-16 rounded-md sticky flex items-center justify-between p-3   bg-accent/60  top-0 left-0 right-0 z-[1] '>

        <div>
<h1 className='text-xl   uppercase font-serif '>

 customize UI
</h1>
        </div>

        <div>



          <Button onClick={() => {


            setFont('fontSansation')
            SetColor('black')
            setpickerColorText({ ...pickerColorText, hex: '#fbfbfb' })
            setpickerColor_Background({ ...pickerColor_Background, hex: '#000000' })
            setpickerColor2_Link({ ...pickerColor2_Link, hex: '#3c9f8b' })
          }} variant={'outline'}><RotateCcw size={30} /></Button>
        </div>
      </div>
      <div style={

       { ...backgroundColor, color: pickerColorText.hex}
        

      } className={`relative w-[90%] mx-auto h-screen  gap-4   ${font} flex items-center flex-col ${!isCustomColor ? color : ''}  `}>
        

        {/* font design  */}
        <div className='w-full ' >


          <div style={
            {
              color: pickerColorText.hex,

            }

          } className=' flex flex-col gap-4 w-full     '>
            <h1  className={`text-xl font-sans   uppercase select-none text-black dark:text-white ${font}  `}>Font Style</h1>

            <div className=' flex w-[90%] gap-3 p-5 overflow-x-scroll mx-auto hide-scrollbar rounded-md    bg-accent/80   '>


              {
                fontData.map((item, index) => (

                  <Button  style={
                    { color: pickerColorText.hex }
                  } onClick={() => setFont(item)} key={index} className={`sansation-light w-20 h-10   text-sm ${item}  `}>
                    {/* {item} */}
                    font
                  </Button>
                ))
              }



            </div>
              <div className='flex items-center gap-2'>
                {/* //todo */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant={'outline'} className='rounded-full  text-center text-black dark:text-white  w-20 h-10  ' size={'icon'}>
                      <Edit2 size={16} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <ColorPicker color={pickerColorText} onChange={setpickerColorText} />
                  </PopoverContent>
                </Popover>
                
              </div>
          </div>



          <h1 className='uppercase text-black dark:text-white'>Background Color</h1>
        </div>
        {/** color design */}
        <div className='w-full  flex flex-col  '>
          <div className={'flex gap-3 items-center w-[90%] mx-auto  overflow-x-scroll hide-scrollbar rounded-md   bg-accent/60 p-5  justify-center ' }>


            {
              bgColormap.map((elem) => (
                <Button key={elem} onClick={() => {bgcolorset(elem) ; console.log(elem)}} className={`${elem}  hover:text-black rounded-full p-2 gap-4 `}>

                  <span className={`${elem} size-5 rounded-full  `}/>         
                  
                  

                 

                </Button>
              ))
            }
            {/* customize the color  */}
            

          </div>
<div className='  text-center rounded-full w-20 h-10   p-2  '>
              <div className='group relative'>

            <div className='  '>
                <Popover>
                  {/* todo */}
                  <PopoverTrigger asChild>
                    <Button onClick={()=>setpickerColor_Backgroundfn()} variant={'outline'} className='rounded-full w-20 h-10 text-center text-black dark:text-white p-5 ' size={'icon'}>
                      <Edit2 size={16}  />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <ColorPicker  color={pickerColor_Background } onChange={setpickerColor_Background} />
                  </PopoverContent>
                </Popover>
              </div>
              <div className='group-hover:block hidden text-black dark:text-white  left-0 top-8   absolute'>
                <h1 className='text-sm'>Customize color </h1>
              </div>
              </div>
            </div>
        </div>
        <div className='flex justify-center flex-col w-full gap-3 p-4  items-center h-full'>
          <div className='flex justify-start  w-full gap-3 flex-col '>
        <h1 className='uppercase text-black dark:text-white'>Design your links</h1>
<div className='group relative'>

                <div className=' w-fit '>
                  {/* todo */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant={'outline'} className='rounded-full w-20 text-center  h-10 p-4  ' size={'icon'}>
                        <Edit2 className=' text-black dark:text-white ' size={16} />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <ColorPicker color={pickerColor2_Link} onChange={setpickerColor2_Link} />
                    </PopoverContent>
                  </Popover>



                </div>
                <div className='group-hover:block hidden text-black dark:text-white  left-16 -translate-x-1/2 top-8   absolute'>
                <h1 className='text-sm'>Link Color </h1>
              </div>

                </div>

          </div>
     
          {
            
            ['Reddit'].map(( index) => (
            <div key={index} className='flex flex-col w-full  md:w-[50%]  '>
            <div style={
              {
                backgroundColor: pickerColor2_Link.hex,
                
                
                
              }
            } key={index} className='flex justify-center  items-center w-full h-16  rounded-md  delay-100 transition-all duration-300 hover:shadow-lg  gap-5    ' >
              <div className='w-full h-full flex justify-between items-center gap-3 p-2 '>
                <div>

                  <h1 className={`text-xl font-semibold  `}>
                    Example links
                  </h1>
                  <p className='text-sm text-white/60'>https://www.reddit.com</p>
                </div>
                
              </div>
               
            </div>
            
                <div/>
            </div>
            )
          )
          }

        <Button className={`w-[75%] mt-20  cursor-pointer `} onClick={OnSubmit}>{
          loading ? <Loader2 className='animate-spin ' size={20}/> : 'Submit'
        }</Button>
        </div>
      </div>




    </>

  )
}

export default DesignClientCmp