

import { Github, Instagram, Youtube, Linkedin, Twitter, Facebook, Globe } from 'lucide-react';

import { GetSocialLink } from '@/actions/read';

const ICONS = {
  github: Github,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
  website: Globe,
};

export default async function SocialLinksDisplay({ productid }: { productid: string }) {
  const result = await GetSocialLink({productid});
  


  return (
    <div  className="flex gap-2  h-fit items-center justify-center ">
      {result?.map((link) => {
        const Icon = ICONS[link.platform as keyof typeof ICONS];
     
        
        return (
          
          <a style={{background:'var(--card-bg)'  , color:'var(--text)' }} key={link.userId}
            href={link.url.startsWith('http') ? link.url : `https://${link.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border rounded-md hover:scale-105 duration-300 ease-in-out"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}