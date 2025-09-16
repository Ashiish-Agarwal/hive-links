'use client'
import { Button } from '@/components/ui/button'
import { fontData } from '@/lib/Theme/index'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'

import { Edit2 } from 'lucide-react'
import React, { useState } from 'react'
import { ColorPicker } from 'react-color-palette'
import { useColor } from "react-color-palette";
import "react-color-palette/css";
 
const Fontstyles = ({name}:{name:string}) => {

  const handleFontSubmit = (font:string) => {
    console.log(font)
    
  }


  const [font,setFont] = useState<string>('')
  const [pickerColor, setpickerColor] = useColor('');

const fontdata= fontData
 

  return (
    <div  style={
      { color: pickerColor.hex}
     } className=' flex flex-col gap-4'>
      <h1 style={
     { color: pickerColor.hex}
    }  className='text-xl fontsofia uppercase select-none '>design your Fonts</h1>

    <div className=' flex w-[40vw] gap-5 p-3 overflow-x-scroll mx-auto hide-scrollbar rounded-md   bg-accent/4  '>


      {
        fontData.map((item,index)=>(
          <Button style={
            { color: pickerColor.hex}
           }  onClick={()=>setFont(item)} key={index} className={`sansation-light w-20 h-10  text-sm ${item}  `}>
{/* {item} */}
       {name}
        </Button>
        ))
      }
      <Popover>
    <PopoverTrigger asChild>
      <Button>
        <Edit2/>
        get your color
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <ColorPicker  color={pickerColor} onChange={setpickerColor} />;
    </PopoverContent>
  </Popover>

     

        </div>
    </div>
  )
}

export default Fontstyles