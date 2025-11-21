
import { clsx, type ClassValue } from "clsx"

import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const defaultImage = "/dummy.png"
export const name ='laxybio.vercel.app'
export const nameonly ='laxybio'
export const url ='https://laxybio.vercel.app'
export const metadatadescription ='Create a beautiful bio link page in minutes. BeeTree is a free and paid bio link editor. Share all your links, social profiles, and content in one customizable landing page.'




