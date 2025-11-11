import Footer from "@/components/Footer";
import NavigationBaar from "@/components/landingpage/NavigationBaar";

import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Metadata } from "next";


export const metadata: Metadata = {
   title: {
    default: 'BeeTree - Free Bio Link Editor | Create Your Link in Bio',
    template: '%s | BeeTree'
  },
  description: 'Create a beautiful bio link page in minutes. BeeTree is a free and paid bio link editor. Share all your links, social profiles, and content in one customizable landing page.',
  
  // Keywords for SEO
  keywords: [
    'bio link',
    'link in bio',
    'linktree alternative',
    'bio link editor',
    'social media links',
    'link page creator',
    'beetree',
    'free link in bio',
    'custom bio page',
    'social link manager',
    ''
  ],
  authors: [{ name: "beetree", }],
  openGraph: {
    title: "BeeTree - Free Bio Link Editor | Create Your Link in Bio",
    description: "Create a custom app for your links store",
    type: "website",
    locale: "en",
    siteName: "beetree",
    url: "https://beetree.netlify.app",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "beetree",
      },
    ],
  },
   twitter: {
    card: 'summary_large_image',
    title: 'BeeTree - Free Bio Link Editor',
    description: 'Create a beautiful bio link page in minutes. Share all your links in one place.',
    images: ['https://beetree.netlify.app/twitter-image.png'],
    creator: '@https://x.com/dornygrp35016', 
  },
    robots: {
    index: true,
    
    follow: true,
    googleBot: {
      
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
      
    },
  },
};


export default function LandingPageLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div className=" relative bg-white ">
      <div className="sticky top-0 z-50">

     </div>
     


      {/* <nav className='absolute top-10   w-full  h-20 rounded-lg  flex items-center justify-center '>
      
        <div 
        className="      w-[80%]  gap-2    flex items-center justify-center  h-full bg-black/10 border-2 border-white/10 rounded-lg p-3 z-50 " 
      >

<div className="flex items-center justify-between text-center  h-full  w-full ">

       <div className="   ">
        <Logo/>
       </div>
       <div className="  ">
        
        <Link style={{
              background:'#301212'
            }} className={buttonVariants({
          variant:'default',
          size:'lg',
          className:'text-black hover:text-white duration-300 ease-in-out border-white hover:border-2 hover:bg-primary hover:scale-105  '
        })} href={'/signin'} target="_blank" > create Product</Link>
        
        
       </div>
        </div>
        </div>

      </nav> */}
      <nav>
        <NavigationBaar/>
      </nav>
      <div >

     
        {children}
        <Footer/>
      </div>
        <div className='hidden md:block z-0'>

        
        <SmoothCursor />
        </div>
        
        </div>
  }