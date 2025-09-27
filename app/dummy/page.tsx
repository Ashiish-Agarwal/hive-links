'use client'
import InboxDummy from "@/components/dashboard/dummy"
import { Popover ,PopoverAnchor,PopoverContent,PopoverTrigger } from "@/components/ui/popover"
import { Github, Instagram, Twitter, Youtube } from "lucide-react"
import { useState } from "react"


const page = () => {

const icon=[
  {
    name:'github',
    Icon:Github,
    key:'git'
  }
  // {
  //   name:'Youtube',
  //   Icon:<Youtube/>,
  //   key:'yt'
  // },
  // {
  //   name:'Instragram',
  //   Icon:<Instagram/>,
  //   key:'instra'
  // },
  // {
  //   name:'twitter',
  //   Icon:<Twitter/>,
  //   key:'tweet'
  // }

]

const [selecticon,setselecticon]= useState('')
console.log(selecticon)


  return(
    <>
    {/* <InboxDummy/> */}              
    <h1>dummy 

    </h1>

    <Popover>
      <PopoverTrigger>hii</PopoverTrigger>
      <PopoverContent>
        <div className="bg-red-600 ">


    {
      icon.map((elem ,index)=>(
        <div>
          {/* <a onClick={()=>setselecticon(elem.Icon.toString)}  href={'#data'}><{elem.Icon}/></a> */}
          hii
        </div>
      ))
    }
        </div>
      </PopoverContent>
    </Popover>
    </>
    

  )
}

export default page