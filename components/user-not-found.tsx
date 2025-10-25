import React from 'react'
import Logo from './logo'

const UserNotFound = () => {
  return (
    <div className='w-screen h-full '>
        <div className='flex flex-col gap-5 h-[80%] w-full items-center justify-center'>
            <h1 className='text-5xl  '>404.</h1>
            <h1 className='text-xl fontJapanese '>Page not found may be check the link</h1>
        </div>
        <div className='h-[20%] w-full items-center justify-center'>
            <Logo/>
        </div>
      
    </div>
  )
}

export default UserNotFound