import { MetadataRoute } from 'next'
import {  url } from '@/lib/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  
  return [
    {
      url: url,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${url}/landingpage`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${url}/signin`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${url}/signup`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${url}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
  ]
}