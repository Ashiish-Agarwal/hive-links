'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Colortheme = () => {
    const [color, SetColor] = useState<String>('bg-zinc-500')
    const Color=['bg-white','bg-teal-500']
    console.log('dafa'+color)

  return (
    <div className={''}>

       {
        Color.map((elem,index)=>(
            <Button onClick={()=>SetColor(elem)}  className={`${elem}  hover:text-black rounded-full p-2 gap-4 `}>
               
                {
                    elem
                }
               
            </Button>
        ))
       }
    </div>
  )
}

export default Colortheme