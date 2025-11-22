
import { Toaster } from '@/components/ui/sonner'
import React from 'react'
import { Metadata } from 'next'
import { metadatadescription, name, url } from '@/lib/utils';

export const metadata: Metadata = {
   metadataBase: new URL(url), 
   title: {
    default: `${name} - Free Bio Link Editor | Create Your Link in Bio`,
    template: '%s | ${name}'
  },
  description: `${metadatadescription}`,
  
  // Keywords for SEO
  keywords: [
    'bio link',
    'link in bio',
    'linktree alternative',
    'bio link editor',
    'social media links',
    'link page creator',
    `${name}`,
    'free link in bio',
    'custom bio page',
    'social link manager',
    'bio tool'
  ],
  authors: [{ name: `${name}`, }],
  openGraph: {
    title: `${name} - Free Bio Link Editor | Create Your Link in Bio`,
    description: `${metadatadescription}`,
    type: "website",
    locale: "en",
    siteName: `${name}`,
    url: `${url}`,
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: `${name}`,
      },
    ],
  },
   twitter: {
    card: 'summary_large_image',
    title: `${name} - Free Bio Link Editor`,
    description: `${metadatadescription}`,
    images: [`${url}/twitter-image.png`],
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