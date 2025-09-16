'use client'
import React, { useState } from 'react'
import Fontstyles from './Fontstyles'
import { Button } from '@/components/ui/button'
import { ThemeData } from '@/lib/Theme'
import { Edit2 } from 'lucide-react'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'


const DesignClientCmp = () => {

       const [color, SetColor] = useState<String>('')
       const Color = ThemeData 

       const [pickerColor, setpickerColor] = useColor('');
       console.log('color'+color)
       
       const isCustomColor= pickerColor&& pickerColor.hex !== '#000000' 

       console.log('custom color'+isCustomColor)
       const backgroundColor=isCustomColor ? {
        backgroundColor: pickerColor.hex
       }: {}
      

       
  
       
  return (
    <div style={
    
       backgroundColor
     
    } className={`relative w-full h-screen  gap-4   flex items-center flex-col ${!isCustomColor  ? color : ''} `}>
       <h1 >

        design 
       </h1>

       {/* font design  */}
        <div>
{/* <Fontstyles name={name}/> */}
<Fontstyles name={'lalu ji '}/>
</div>
<div>
<h1>Choose the color</h1>
<div className={'flex gap-3 '}>
    

{
 Color.map((elem)=>(
     <Button onClick={()=>SetColor(elem)}  className={`${elem}  hover:text-black rounded-full p-2 gap-4 `}>
        
        <span className={`${elem} size-5 rounded-full  `}>
          
                </span>
        
     </Button>
 ))
}
{/* customize the color  */}
<span className=' bg-zinc-700  text-center rounded-full  p-2  '>

{/* <Edit2 className='   ' size={20}/> */}
<div>
  <Popover>
    <PopoverTrigger asChild>
      <Button>
        <Edit2/>
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <ColorPicker  color={pickerColor} onChange={setpickerColor} />;
    </PopoverContent>
  </Popover>



</div>
</span>
</div>

</div>
        </div>



       
     
  )
}

export default DesignClientCmp