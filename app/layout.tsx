import type { Metadata } from "next";
import { Geist, Poppins, Geist_Mono ,Eagle_Lake, Sansation ,Crimson_Pro ,Annie_Use_Your_Telescope , Reenie_Beanie , Sofia, Recursive ,Sour_Gummy} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import localFont from "next/font/local";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";



const japaneseFont = localFont({
  src: [
    {
      path:"../public/font/NinjaKageDemo-Rough.ttf",
      weight:"200",
      style:"normal",
    }
  ],
 
  variable:"--font-japanese-font",
})

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
 weight:["400"],
  variable: "--font-crimson-pro",
})
const sansation = Sansation({
  subsets: ["latin"],
 weight:["400"],
  variable: "--font-sansation",
})
const ReenieBeanie= Reenie_Beanie({
  subsets: ["latin"],
 weight:["400"],
  variable: "--font-reenie-beanie",
})
const AnnieUseYourTelescope= Annie_Use_Your_Telescope({
  subsets: ["latin"],
 weight:["400"],
  variable: "--font-annie-use-your-telescope",
})

const poppins = Poppins({
  subsets: ["latin"],
 weight:["400"],
  variable: "--font-poppins",
})

const sourGummy = Sour_Gummy({
  subsets: ["latin"],
 weight:["400"],
  variable: "--font-sour-gummy",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const eagleLake = Eagle_Lake({
subsets:["latin"],
weight:["400"],
variable:"--font-eagle-lake"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sofia = Sofia({
  subsets: ["latin"],
 weight:["400"],
  variable: "--font-sofia",
});

const recursive = Recursive({
  subsets: ["latin"],
 weight:["400"],
  variable: "--font-recursive",
});

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




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${crimsonPro.variable} ${sansation.variable} ${japaneseFont.variable} ${eagleLake.variable} ${AnnieUseYourTelescope.variable} ${ReenieBeanie.variable} ${sourGummy.variable} ${recursive.variable} ${sofia.variable} ${poppins.variable}  antialiased  `}
      >
          <NextSSRPlugin
          
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>

     <link rel="icon" href="/favicon.ico" sizes="192x192" />
    </html>
  );
}
