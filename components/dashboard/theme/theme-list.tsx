'use client'
import { ThemeData } from '@/lib/Theme'
import React, { useState } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { defaultImage } from '@/lib/utils'
import {  Facebook, Github, Instagram, Loader2, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CreateTheme } from '@/actions/create'
import { toast } from 'sonner'

const ThemeList = ({params}:{params?:string}) => {

  const iconMap =[
    {key:'github',value:<Github />},
    {key:'facebook',value:<Facebook />},
    {key:'twitter',value:<Twitter />},
    {key:'instagram',value:<Instagram />},
  ]

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9 
  const [Submittheme, setSumbittheme] = useState('')
  const selecttheme = Submittheme
  const [laoding,setloading]= useState(false )

  // Calculate pagination
  const totalItems = ThemeData.length  //20
  const totalPages = Math.ceil(totalItems / itemsPerPage) //2.5
  const startIndex = (currentPage - 1) * itemsPerPage //0
  const endIndex = startIndex + itemsPerPage //8
  const currentItems = ThemeData.slice(startIndex, endIndex)

  // Handle page change
  const handlePageChange = (page: any) => {
    setCurrentPage(page)
    
  }
  async function submitTheme() {
    setloading(true)
    console.log(Submittheme)

    const themeSubmit = await CreateTheme(params!,Submittheme)
    if(themeSubmit.success){
      toast.success(themeSubmit.message)
    }
    else{
      toast.error(themeSubmit.message)
    }
    setloading(false)
  }
 

  // Generate page numbers for pagination
  const generatePageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Show pages with ellipsis logic
      if (currentPage <= 3) {
        // Show first few pages
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
        pages.push('ellipsis')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        // Show last few pages
        pages.push(1)
        pages.push('ellipsis')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        // Show middle pages
        pages.push(1)
        pages.push('ellipsis')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push('ellipsis')
        pages.push(totalPages)
      }
    }

    return pages
  }

  return (
    <div className="space-y-6 mt-10 ">

      <div className='h-20 '>
       
        <h1 className='text-2xl font-bold capitalize text-center '>select your theme </h1>
      </div>
      {/* Theme Grid */}
      <div

        className="rounded-md flex flex-wrap h-full  gap-3 items-center justify-center p-4">
        {currentItems.map((elem, inx) => (

          <div
            key={startIndex + inx} className={`theme-${elem}  gap-3 p-2 rounded-md  `}
            onClick={() => setSumbittheme(elem)}
            style={{
              background: "var(--bg)",
              
            }}
          >
            <Popover >
              <PopoverTrigger>

                <div className="p-3 flex flex-col items-center justify-center h-[20rem] w-[12rem] cursor-pointer hover:scale-105 delay-100 transition-all duration-300 hover:shadow-lg ">
                 
                  <h1 style={{ color: 'var(--text)' }} className="text-sm capitalize">
                    {elem}
                  </h1>
                  <p style={{ color: 'var(--accent)' }}>Accent</p>
                </div>
              </PopoverTrigger>
              <PopoverContent asChild>
                <div  style={{
                  background: 'var(--bg)'
                }} className={` h-[30rem] w-[18rem] text-center  select-none  flex items-center justify-start flex-col hover:scale-105 delay-100 transition-all duration-300 hover:shadow-lg   theme-${elem} ${selecttheme === elem ? 'border-2 border-primary cardeffect' : ''} rounded-md  `}
                >

                  <Avatar className='p-2  size-32'>
                    <AvatarImage className='size-full' src={`${defaultImage}`} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h1 style={{
                    color: 'var(--text) '
                  }}>avii @dorny</h1>
                  <div>
                    <h1 className='text-sm ' style={{
                      color: 'var(--accent) '
                    }}> A small devloper working with @donry build a saas applicaiton a self enterpensure
                    </h1>
                  </div>
                  <div  className='flex flex-wrap gap-2 mt-2 '>
                  {
                    iconMap.map((elem) => (
                      <span  style={{
                        background: 'var(--card-bg) ',
                        color:'var(--text)'
                      }} className='p-2 rounded-md hover:scale-105 delay-100 transition-all duration-300' key={elem.key}>{elem.value}</span>
                    ))
                  }
                  
                   
                    
                  </div>
                 
                  <div className='flex flex-col gap-2 mt-3 items-start ml-5  capitalize   w-full     '  >
                    <div className='flex flex-col gap-2 items-center justify-center w-full mt-5 ' >

                      {
                        ['1', '2', '3'].map(i => (



                          <Link key={i} style={{
                            color: 'var(--text)',
                            background:'var(--card-bg)'

                          }} className={`text-primary p-1 flex items-center justify-center  rounded-md w-full  `} href={'/'}> 

                              your link    </Link>



                        ))


                      }
                    </div>
                  </div>
                  <div className='mt-3 w-44  '>

                  <Button   style={{
                    color: 'var(--text)',
                    
                  }}  onClick={submitTheme}  className='mt-6 w-full bg-primary border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300  ' >
                   {
                    laoding ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin  " />
                    ) : (
                      'Submit'
                    )
                   }
                    </Button>

                  </div>
                </div>

              </PopoverContent>
            </Popover>





          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="justify-center">
          <PaginationContent>
            {/* Previous Button */}
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage > 1) {
                    handlePageChange(currentPage - 1)
                  }
                }}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>

            {/* Page Numbers */}
            {generatePageNumbers().map((page, index) => (
              <PaginationItem key={index}>
                {page === 'ellipsis' ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      handlePageChange(page)
                    }}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}

            {/* Next Button */}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage < totalPages) {
                    handlePageChange(currentPage + 1)
                  }
                }}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      {/* Optional: Show current page info */}
      <div className="text-center text-sm text-gray-600">
        Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems} themes
      </div>
     
    </div>
  )
}

export default ThemeList


