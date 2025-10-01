import { Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {  buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function NoProducts() {
  

  return (
    <div className="flex items-center justify-center min-h-[400px] w-full p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="pb-4">
          {/* Icon Container */}
          <div className="mx-auto mb-4">
            <Link href='/dashboard/new'
              className="w-20 h-20 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors cursor-pointer group" 
            >
              <Plus className="w-10 h-10 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
          </div>
          
          <CardTitle className="text-2xl">No products yet</CardTitle>
          <CardDescription className="text-base">
            You haven &nbsp; added any products to your inventory. Create your first product to get started with your catalog.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-0">
          {/* Action Button */}
          <Link  href='/dashboard/new' className={cn( buttonVariants({variant:"outline"}),` hover:bg-blue-600 bg-blue-400  w-full mb-6 `)}>
            <Plus className="w-4 h-4 mr-2" />
            Create Product
          </Link>
          
          
        </CardContent>
      </Card>
    </div>
  );
}