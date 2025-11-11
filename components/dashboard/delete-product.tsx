'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Trash2 } from 'lucide-react'
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu'
import { DeleteProduct } from '@/actions/delete'
import { toast } from 'sonner'
import { Button } from '../ui/button'

const DeleteProductComponent = ({item}:{item:{id:string,userId:string}}) => {

    const handleDelete = async () => {
        try {
            const datadelte=  await DeleteProduct({data:{
                id:item.id,
                userId:item.userId
            }})
            if(datadelte.success){
               toast.success(datadelte.message,{
                description:`${datadelte.data}`
               })
            }else{
                toast.error('error in delte ',{
                  description:`${datadelte.message}`
                })
            }
        } catch (error) {
            console.error('Delete failed:', error)
            toast.error('got some error while deleting',{
              description:`${error}`
            })
        }
    }
  return (
   
    <DropdownMenuLabel className='flex w-full  items-center gap-2 hover:text-zinc-500 dark:hover:text-white/80 rounded-md cursor-pointer transition-all duration-300 ' >
    
    <AlertDialog>
      <AlertDialogTrigger asChild className='flex gap-2 items-center'>
        <Button variant={'destructive'} className=" w-full">Delete <Trash2 size={20} /></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Product</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this product? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction 
            className='bg-red-600 hover:bg-red-700 text-white'
            onClick={handleDelete}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </DropdownMenuLabel>
  )
}

export default DeleteProductComponent