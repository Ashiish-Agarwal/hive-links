import React from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

const NewProductButton = () => {
  return (
    <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold '>Products</h1>

    <Link   href='/dashboard/new' className={cn(buttonVariants({
        variant:"outline" , className:" w-36 "
    }))}>
        Add <Plus />
      </Link>
          </div>
  )
}

export default NewProductButton