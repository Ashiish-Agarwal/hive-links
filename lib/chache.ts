
import { unstable_cache } from "next/cache"


export const cache_Tag = {
    Products:'products',
    User:'user',
    Link:'link',
    Design:'design',
    Social:'social',
   
} as const 

export type typeChache = typeof cache_Tag[keyof typeof cache_Tag]

// ✅ generic wrapper
export function withCache<T extends (...args: unknown[]) => Promise<unknown>>(
    fn: T,
    key: string[],
    tags: typeChache[]
  ) {
    return unstable_cache(fn, key, { tags });
  }


