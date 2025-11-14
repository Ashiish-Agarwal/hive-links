
import { Card } from '../ui/card';

import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Copy, Edit, EllipsisVertical, Trash } from 'lucide-react';
import { Button } from '../ui/button';
import { CardContent, } from '../ui/card';
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
} from "@/components/ui/alert-dialog";
import Link from 'next/link';


import Image from 'next/image';
import DeleteProductComponent from './delete-product';
import SocialLinksDisplay from './social-links';
import SocialLinksManager from './sociallinks';
import { CopyButton } from '../ui/shadcn-io/copy-button';



const AllProducts = async ({ data }: {
  data: {
    name: string,
    bio: string | null,
    profile: string | null ;
    id: string,
    userId: string,
    createdAt: Date,
    updatedAt: Date
  }[]
}) => {

const domain= process.env.PUBLIC_DOMAIN


console.log(data[0].name)

  return (
    <>
      <div className=' gap-3  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-5 '>
        {
          data.map((item) => {
            return (
              <Card key={item.id} className=' w-[15rem] md:w-[20rem]   h-fit        gap-2   p-2      '>
                <Link href={`/dashboard/${item.id}/edit`} className=' cursor-pointer '>
                  

                
                <div className='flex  justify-between items-center w-full h-full   '>
                  

                  <div className={`p-3 flex   flex-col   w-full  items-center justify-center   gap-4  text-lg   `}>
                
                 <div className={`${item.profile?.length ===0  ? 'hidden w-full ' : ''}`}>

                      <Image className='rounded-full w-20 h-20 object-cover ' src={item.profile || ''} alt='profile' width={70} height={70}/>
                 </div>
                     
                    <div className=' flex flex-col gap-2 '>

                      <h1 className='text-lg font-semibold  text-black hover:text-zinc-900  dark:text-white dark:hover:text-white/70 flex   '> @ {item.name}</h1>
                      <div className='  w-full  '>

                        <p className='text-ellipsis truncate text-xs text-zinc-800  dark:text-zinc-200 flex    text-wrap w-full '> {item?.bio?.length || 0 > 15 ? item.bio?.slice(0, 15) + '...' : item.bio }</p>
                      </div>
                    </div>
                   
                  </div>
               
                 

                </div>
              <h1 className='text-zinc-500 text-sm lowercase '>last update:{new Date(item.updatedAt).toLocaleDateString()}</h1>
                </Link>

              <div className='flex gap-2 items-center h-10 w-full  '>

                <SocialLinksManager productid={item.id}/>
                <SocialLinksDisplay productid={item.id}/>
              </div>
              <div className='w-full h-10 flex gap-2 items-center justify-center  '>
                <Button variant={'outline'} asChild className='w-[50%]'>
                <CopyButton 
                 content={`${domain}/${item.name}`}
                 variant='outline'
                 />
                </Button>
                
                <Button asChild className='w-[50%] ' >
                
                <DeleteProductComponent item={item} />
                </Button>

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




