
import React from 'react'
import { Card } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Button, buttonVariants } from '../ui/button';
import { CardContent, } from '../ui/card';
import { Copy, Edit, EllipsisVertical, Trash2 } from 'lucide-react';
import { CopyToClipboard } from './CopyUrl';

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
import Link from 'next/link';
import { ClipboardWithIcon } from 'flowbite-react';

import DeleteProductComponent from './delete-product';
import { UuidAction } from '@/actions/read';
import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { data as userdata } from '@/db/schema/data-schema';
import { defaultImage } from '@/lib/utils';



const AllProducts = async ({ data }: {
  data: {
    name: string,
    bio: string | null,
    profile: string | null;
    id: string,
    userId: string,
    createdAt: Date,
    updatedAt: Date
  }[]
}) => {

  const CopyDomain = process.env.PUBLIC_DOMAIN

  const uuid = await  UuidAction()
  const user = uuid[0].id
  const fetchImage = await db.select().from(userdata).where(eq(userdata.userId,user))

 const profileImage = fetchImage[0]?.profile

 




  return (
    <>
      <div className=' flex flex-col  gap-3     mt-5 '>
        {
          data.map((item) => {
            return (
              <Card key={item.id} className=' w-full  h-full      gap-2   p-2      '>
                <div className='flex  justify-between items-center w-full h-full   '>

                  <div className='p-2 flex    w-1/2    gap-4  text-lg  '>
                    <Avatar>
                      <AvatarImage className='rounded-full size-20    ' src={profileImage || defaultImage} />
                      <AvatarFallback>{item.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className=' flex flex-col gap-2 '>

                      <h1 className='text-lg font-semibold  text-black hover:text-zinc-900  dark:text-white dark:hover:text-white/70  '> @ {item.name}</h1>
                      <div className='  w-full'>

                        <p className='text-ellipsis truncate text-xs text-zinc-800  dark:text-zinc-200  '> {item.bio}</p>
                      </div>
                    </div>
                  </div>
                  <div className=' w-10 h-full   ' >
                    <DropdownMenu  >
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="" >

                          <EllipsisVertical />

                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <Card className='w-fit  h-[10rem] flex flex-col text-center gap-4      '>

                          <CardContent>
                            {/* crud comppoent */}
                            <DropdownMenuLabel className='flex w-full     h-fit    items-center gap-2 hover:text-zinc-700 dark:hover:text-white/80 p-2  rounded-md cursor-pointer transition-all duration-300 '>




                              <AlertDialog >
                                <AlertDialogTrigger className='flex gap-2 cursor-pointer hover:text-zinc-700 dark:hover:text-white/80 p-.5  rounded-md transition-all duration-300   '>Copy <Copy size={20} /></AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle >Copy    </AlertDialogTitle>
                                    <AlertDialogDescription className='flex   '>
                                      <CopyToClipboard name={item.userId} id={item.name} />
                                    </AlertDialogDescription>
                                  </AlertDialogHeader >
                                  <AlertDialogFooter>

                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                 
                                    <AlertDialogAction>Got !t </AlertDialogAction>






                                    {/* </AlertDialogAction> */}
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>



                            </DropdownMenuLabel>
                            <DropdownMenuLabel className='flex  items-center gap-2 hover:text-zinc-500 dark:hover:text-white/80 p-2 rounded-md cursor-pointer transition-all duration-300 '>

                              <Link className='flex gap-2 cursor-pointer hover:text-zinc-700 dark:hover:text-white/80 p-2  rounded-md transition-all duration-300  ' href={`/dashboard/${item.id}/edit`}>
                                Edit <Edit size={20} />
                              </Link>
                            </DropdownMenuLabel>
                            <DropdownMenuLabel className='flex   gap-2 hover:text-zinc-500 dark:hover:text-white/80 p-2 rounded-md cursor-pointer transition-all duration-300 ' >







                              <DeleteProductComponent item={item} />







                            </DropdownMenuLabel>
                          </CardContent>
                        </Card>
                      </DropdownMenuContent>
                    </DropdownMenu>



                  </div>

                </div>

              </Card>

            )
          })
        }



      </div>


    </>
  )
}

export default AllProducts




