
import { Toaster } from '@/components/ui/sonner'
import React from 'react'
import { Metadata } from 'next'

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
    'bio tool'
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

const layout = ({children}: {children: React.ReactNode}) => {


  return (
<>
{/* large screen */}
{children}


<Toaster richColors={true}   duration={5000}/>

</>
  )
}

export default layout