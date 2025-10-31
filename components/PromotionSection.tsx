
import React from 'react'
import Link from 'next/link'

const PromotionSection = () => {
  return (
    <div className=' sticky  w-full h-10 gap-2  text-center bg-black text-white flex items-center justify-center  '> 
    <h1 > Use our app and get  <span className='text-green-500 font-bold'>5 dollars </span> in your UPI,Bank or wallet  etc (After one month)</h1>
    <Link  href={'/signin'} target="_blank" className='text-green-500 font-bold hover:text-underline duration-300 ease-in-out'>Click here</Link> 
    </div>
  )
}

export default PromotionSection