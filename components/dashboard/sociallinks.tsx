'use client';

import React, { useState } from 'react';
import { Plus, Github, Instagram, Youtube, Linkedin, Twitter, Facebook, Globe, } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreatSocialLink } from '@/actions/create';

// Types
interface SocialLink {
  id: string;
  platform: PlatformKey;
  url: string;
}

interface SocialPlatform {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export type PlatformKey = 'github' | 'instagram' | 'youtube' | 'linkedin' | 'twitter' | 'facebook' | 'website';

// Social platform configuration
const SOCIAL_PLATFORMS: Record<PlatformKey, SocialPlatform> = {
  github: { name: 'GitHub', icon: Github, color: 'hover:bg-gray-700 dark:hover:bg-gray-600' },
  instagram: { name: 'Instagram', icon: Instagram, color: 'hover:bg-pink-600 dark:hover:bg-pink-500' },
  youtube: { name: 'YouTube', icon: Youtube, color: 'hover:bg-red-600 dark:hover:bg-red-500' },
  linkedin: { name: 'LinkedIn', icon: Linkedin, color: 'hover:bg-blue-600 dark:hover:bg-blue-500' },
  twitter: { name: 'Twitter', icon: Twitter, color: 'hover:bg-sky-500 dark:hover:bg-sky-400' },
  facebook: { name: 'Facebook', icon: Facebook, color: 'hover:bg-blue-700 dark:hover:bg-blue-600' },
  website: { name: 'Website', icon: Globe, color: 'hover:bg-slate-700 dark:hover:bg-slate-600' }
};

export default function SocialLinksManager({productid}: {productid: string}) {
  const [links, setLinks] = useState<SocialLink[]>([]);
  const [showPlatformSelect, setShowPlatformSelect] = useState<boolean>(false);
  const [showLinkDialog, setShowLinkDialog] = useState<boolean>(false);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformKey | ''>('');
  const [linkUrl, setLinkUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePlatformSelect = (platform: PlatformKey): void => {
    setSelectedPlatform(platform);
    setShowPlatformSelect(false);
    setShowLinkDialog(true);
  };

  const handleSaveLink = async (): Promise<void> => {
    if (linkUrl && selectedPlatform) {
      setIsLoading(true);
      
      try {
        await CreatSocialLink({ platform: selectedPlatform, url: linkUrl,productid:productid });
        setLinks([...links, { 
          id: productid, 
          platform: selectedPlatform as PlatformKey, 
          url: linkUrl 
        }]);
        
        setLinkUrl('');
        setSelectedPlatform('');
        setShowLinkDialog(false);
      } catch (error) {
        console.error('Error saving link:', error);
        // Handle error (you can add toast notification here)
      } finally {
        setIsLoading(false);
      }
    }
  };

  // const handleDeleteLink = async (id: number): Promise<void> => {
  //   try {
  //     // TODO: Call your server action here
  //     // Example:
  //     // await deleteSocialLink(id);
      
  //     // For now, just update local state
    
  //   } catch (error) {
  //     console.error('Error deleting link:', error);
  //     // Handle error
  //   }
  // };

  const handleLinkClick = (url: string): void => {
    window.open(url.startsWith('http') ? url : `https://${url}`, '_blank');
  };

  return (
    <div className="w-10 h-10  ">
      <div className="">
        
        {/* Display saved links */}
        <div className="flex flex-wrap gap-3 mb-6">
          {links.map((link) => {
            const platform = SOCIAL_PLATFORMS[link.platform];
            const IconComponent = platform.icon;
            return (
              <div key={link.id} className="relative group">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleLinkClick(link.url)}
                  className={`transition-all ${platform.color}`}
                  title={`${platform.name}: ${link.url}`}
                >
                  <IconComponent className="h-5 w-5" />
                </Button>
                {/* <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDeleteLink(link.id)}
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-3 w-3" />
                </Button> */}
              </div>
            );
          })}
          
          {/* Add button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowPlatformSelect(true)}
            className="border-2 border-dashed"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        {/* Platform selection dialog */}
        <Dialog open={showPlatformSelect} onOpenChange={setShowPlatformSelect}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Select Platform</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-3">
              {(Object.entries(SOCIAL_PLATFORMS) as [PlatformKey, SocialPlatform][]).map(([key, platform]) => {
                const IconComponent = platform.icon;
                return (
                  <Button
                    key={key}
                    variant="outline"
                    onClick={() => handlePlatformSelect(key)}
                    className="flex items-center gap-3 h-auto py-4 justify-start"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="font-medium">{platform.name}</span>
                  </Button>
                );
              })}
            </div>
          </DialogContent>
        </Dialog>

        {/* Link URL input dialog */}
        <Dialog open={showLinkDialog} onOpenChange={setShowLinkDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Add {selectedPlatform && SOCIAL_PLATFORMS[selectedPlatform as PlatformKey]?.name} Link
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="url">URL</Label>
                <Input
                  id="url"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://github.com/username"
                  disabled={isLoading}
                />
              </div>
              <div className="flex gap-2 justify-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowLinkDialog(false);
                    setLinkUrl('');
                  }}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button onClick={handleSaveLink} disabled={isLoading}>
                  {isLoading ? 'Saving...' : 'Save Link'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}