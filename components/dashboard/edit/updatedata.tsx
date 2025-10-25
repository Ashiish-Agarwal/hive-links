"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { useEffect, useState } from "react"
import { Loader2, Plus, Trash2 } from "lucide-react"
import { toast } from "sonner"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button, buttonVariants } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { userDataSchema } from "@/lib/zod/Userdata"
import { updateData } from "@/actions/update"
import { UploadButton } from "@/lib/utils/uploadthing"
import Image from "next/image"
import { checkUserAlreadyExisit } from "@/actions/read"

interface UserDataUpdateFormProps {
  initialData?: {
    name: string
    bio: string
    profile: string
    links: Array<{
      titleName: string
      linkUrl: string
    }>
  }
  productid: string
}

function UserDataUpdateForm({ initialData, productid }: UserDataUpdateFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
    const [available , setAvailable] = useState<boolean | null>(null)
  

  // Initialize form with existing data or defaults
  const form = useForm<z.infer<typeof userDataSchema>>({
    resolver: zodResolver(userDataSchema),
    defaultValues: {
      name: initialData?.name || "",
      bio: initialData?.bio || "",
      links: initialData?.links && initialData.links.length > 0 ? initialData.links : [{
        titleName: "",
        linkUrl: ""
      }],
      profile: initialData?.profile || "",
    },
  })


  // Set initial image preview


  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "links"
  })

  // Handle UploadThing upload complete
  const handleUploadComplete = async (res: Array<{ url: string }>) => {
    setIsUploading(false)
    
    if (res && res.length > 0) {
      const uploadedUrl = res[0].url
      
      // Set the image preview
      setImagePreview(uploadedUrl)
      
      // Set the form value to the uploaded URL
      form.setValue('profile', uploadedUrl)
      
      toast.success('Image updated successfully!')
    }
  }

  const handleUploadError = (error: Error) => {
    setIsUploading(false)
    toast.error(`Upload failed: ${error.message}`)
  }

  const addNewLink = () => {
    if (fields.length >= 10) {
      toast.error("You can only add 10 links")
      return
    }
    append({ titleName: "", linkUrl: "" })
  }

  const removeLink = (index: number) => {
    if (fields.length > 1) {
      remove(index)
    }
  }

  // Submit handler for updating
  async function onSubmit(values: z.infer<typeof userDataSchema>) {
    setIsSubmitting(true)

    try {
      const result = await updateData(values, productid)

      if (result.success) {
        toast.success(result.message)
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      console.error('Update error:', error)
      toast.error('Failed to update data')
    } finally {
      setIsSubmitting(false)
    }
  }

   async function checkuseregsist(){
  
  
      const username = form.getValues("name")
      if(!username){
        return ;
      }
      try {
       
        const userexsist = await checkUserAlreadyExisit({name:username})
       
          setAvailable(userexsist.success)
        
        
        
      } catch (error) {
        setAvailable(false)
        
      }
  
     
  
  
      
      
      
    }
   

      useEffect(() => {
    if (initialData?.profile) {
      setImagePreview(initialData.profile)
    };
    checkuseregsist();
  }, [initialData,form.watch('name')])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full h-full  p-5 flex flex-col gap-3 container mx-auto  ">
        <div className="flex flex-col items-center justify-center   ">
          {/* Avatar section */}
          <div className="  flex items-center gap-4 flex-col">
            <Image className="rounded-full " src={initialData?.profile || '/dummy.png'} width={80} height={80} alt='profile'/>  

            <FormField
              control={form.control}
              name='profile'
              render={() => (
                <FormItem>
                  <FormLabel>Profile Image</FormLabel>
                  <FormControl>
                    <div className="space-y-4">
                      {/* Show current image info */}
                      {imagePreview && (
                        <p className="text-sm text-gray-500">
                          Current image loaded. Upload a new one to replace it.
                        </p>
                      )}

                      {/* UploadThing Button */}
                      <div className="flex flex-col items-center gap-4">
                        <UploadButton  
                          endpoint="imageUploader"
                          onUploadBegin={() => {
                            setIsUploading(true)
                            toast.info('Uploading new image...')
                          }}
                          onClientUploadComplete={handleUploadComplete}
                          onUploadError={handleUploadError}
                          appearance={{
                            button: buttonVariants({
                              variant:"default"
                            }),
                            allowedContent: "al ",
                          }} 
                        />

                        {isUploading && (
                          <div className="flex items-center gap-2 text-teal-600">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span className="text-sm">Uploading...</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </FormControl>
                  <FormDescription>
                    Upload a new profile picture to update your current one. Maximum size: 4MB
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Name field */}
          <div className="w-full md:w-[80%]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input className="w-full" placeholder="Your name" {...field} />
                  </FormControl>
                 <FormDescription>
                     Note: this name create a unique url link ex: https://linkog.com/kuru
                  </FormDescription>
                  {
                  available===null ? null :available?
                   (
                    <FormMessage className="text-green-500">
                      this username is available
                    </FormMessage>
                  ) : (
                    <FormMessage className="text-red-500">
                      this username is already taken
                      
                    </FormMessage>
                  )
                }
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Bio field */}
          <div className="w-full md:w-[80%]">

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us about yourself..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Share a brief description about yourself.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Links section */}
          <Card className="w-full md:w-[80%] h-fit flex flex-col gap-8 p-8">
            <div className="w-full h-full overflow-y-scroll hide-scrollbar gap-4 flex flex-col">
              {fields.map((field, index) => (
                <div key={field.id} className="border rounded-lg p-4 space-y-4 relative">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Link #{index + 1}</h4>
                    {fields.length > 1 && (
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={() => removeLink(index)}
                        className="flex items-center gap-1 cursor-pointer bg-red-800"
                      >
                        <Trash2 className="h-4 w-4" />
                        Remove
                      </Button>
                    )}
                  </div>

                  {/* Title Field */}
                  <FormField
                    control={form.control}
                    name={`links.${index}.titleName`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Link Title</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., My Portfolio" {...field} />
                        </FormControl>
                        <FormDescription>
                          Enter a descriptive title for your link
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* URL Field */}
                  <FormField
                    control={form.control}
                    name={`links.${index}.linkUrl`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Link URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://example.com" {...field} />
                        </FormControl>
                        <FormDescription>
                          Enter the full URL including https://
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}

              <div className="w-full items-center flex justify-end">
                {/* Add New Link Button */}
                <Button
                  type="button"
                  variant="outline"
                  onClick={addNewLink}
                  className="flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add New Link
                </Button>
              </div>
            </div>
          </Card>

          {/* Submit button */}
          <Button
            type="submit"
            className={cn('w-full mt-5', {
              'opacity-50 cursor-not-allowed': isSubmitting || isUploading,
            })}
            disabled={isSubmitting || isUploading}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin cursor-not-allowed" />
                Updating...
              </>
            ) : (
              'Update'
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default UserDataUpdateForm