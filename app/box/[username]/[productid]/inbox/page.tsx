import React from 'react'
import defaultImage from '@/assets/default-image.png'
const page = async ({params}:{params:Promise<{username:string,productid:string}>}) => {

    const {username,productid} = await params
  const usernamee = decodeURIComponent(username)
  const productide = decodeURIComponent(productid)
  return (
    <div>
        <h1>inbox</h1>
       
        <h3>{usernamee}</h3>
        <h3>{productide}</h3>
    </div>
  )
}

export default page