
import { unstable_cache } from "next/cache"
import {cache } from 'react'

export const cache_Tag = {
    Products:'products',
    User:'user',
    Link:'link'
   
} as const 

export type typeChache = typeof cache_Tag[keyof typeof cache_Tag]

// ✅ generic wrapper
export function withCache<T extends (...args: any[]) => Promise<any>>(
    fn: T,
    key: string[],
    tags: typeChache[]
  ) {
    return unstable_cache(fn, key, { tags });
  }


