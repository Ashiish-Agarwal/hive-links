'use client'

import React from 'react'
import { Spinner } from './ui/shadcn-io/spinner'

const loadingcomponent = () => {
  return (
   <div className='w-full h-[99vh] mx-auto '>

<Spinner className='w-full h-screen' variant='ellipsis' size={24} />
</div>
  )
}

export default loadingcomponent