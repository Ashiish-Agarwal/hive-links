import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>

        <div>
            <h1 className='text-4xl font-bold'>Link OG</h1>
            <p className='text-lg'>Link OG is a link shortener service that allows you to shorten your links and track your links.</p>

            <h1 className='text-5xl font-semibold'>Alkaif ki maa ki choooooooooooo</h1>
            <Link className={cn(buttonVariants({variant:"outline"}))} href='/signup'>Sign Up</Link>
            <Link className={cn(buttonVariants({variant:"outline"}))} href='/signin'>Login</Link>
        </div>
    </div>
  )
}

export default page