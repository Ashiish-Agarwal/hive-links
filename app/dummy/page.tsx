
import AllProducts from '@/components/dashboard/AllProducts'
import UploadThing from '@/components/dashboard/uploadthing'

import React from 'react'


const page = () => {
  return (
    <div>
 <AllProducts data={[
  {
    name:"avii",
    bio:"agarwal",
    profile:"/lady.png",
    id:"loreafabalbfadbfdalfa",
    userId:"xdctfvgbhnfghnj",
    createdAt:new Date(),
    updatedAt:new Date(),
    
  }
 ]}/>
 <UploadThing/>

    </div>
  )
}

export default page