"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"

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
import { userDataSchema } from "@/lib/zod/Userdata"
import { createProduct } from "@/actions/create"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Loader2, Plus, Trash2 } from "lucide-react"
import { Textarea } from "../ui/textarea"
import { toast } from "sonner"
import { Card } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UploadButton } from "@/lib/utils/uploadthing"

function UserDataFormSubsmition() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const form = useForm<z.infer<typeof userDataSchema>>({
    resolver: zodResolver(userDataSchema),
    defaultValues: {
      name: "",
      bio: "",
      links: [{
        titleName: "",
        linkUrl: ""
      }],
      profile: "",
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "links"
  })

  const addNewLink = () => {
    if(fields.length >= 10){
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

  // Handle UploadThing upload complete
  const handleUploadComplete = async (res: Array<{ url: string }>) => {
    setIsUploading(false)
    
    if (res && res.length > 0) {
      const uploadedUrl = res[0].url
      
      // Set the image preview
      setImagePreview(uploadedUrl)
      
      // Set the form value to the uploaded URL
      form.setValue('profile', uploadedUrl)
      
      toast.success('Image uploaded successfully!')
    }
  }

  const handleUploadError = (error: Error) => {
    setIsUploading(false)
    toast.error(`Upload failed: ${error.message}`)
  }

  async function onSubmit(values: z.infer<typeof userDataSchema>) {
    setIsSubmitting(true)

    const data = await createProduct(values) 

    if (data.success) {
      toast.success(data.message)
      router.push(`/dashboard`)
    } else {
      toast.error(data.message)
    }
    
    setIsSubmitting(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col">
          {/* Avatar section */}
          <div className="mt-36 flex items-center gap-4 flex-col">
            <Avatar className="size-24">
              <AvatarImage 
                className="rounded-full size-24 object-cover" 
                src={isMounted && imagePreview ? imagePreview : "https://github.com/shadcn.png"} 
              />
              <AvatarFallback className="rounded-full size-24">CN</AvatarFallback>
            </Avatar>

            <FormField
              control={form.control}
              name='profile'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile Image</FormLabel>
                  <FormControl>
                    <div className="space-y-4">
                      {/* UploadThing Button */}
                      <div className="flex flex-col items-center gap-4">
                        <UploadButton
                          endpoint="imageUploader"
                          onUploadBegin={() => {
                            setIsUploading(true)
                            toast.info('Uploading image...')
                          }}
                          onClientUploadComplete={handleUploadComplete}
                          onUploadError={handleUploadError}
                          appearance={{
                            button: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors",
                            allowedContent: "text-sm text-gray-500",
                          }}
                        />

                        {isUploading && (
                          <div className="flex items-center gap-2 text-blue-600">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span className="text-sm">Uploading...</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Hidden input to store the URL - NO SPREADING field */}
                      <input
                        type="hidden"
                        value={field.value}
                        onChange={field.onChange}
                        name={field.name}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Upload your profile picture. Maximum size: 4MB
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-[30rem]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input className="w-full" placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-[30rem]">
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us about yourself" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public bio.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Card className="w-[30rem] h-fit flex flex-col gap-8 p-8">
            <div className="w-full h-[20rem] overflow-y-scroll hide-scrollbar gap-4 flex flex-col">
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

          <Button
            type="submit"
            className={cn('w-full', {
              'opacity-50 cursor-not-allowed': isSubmitting || isUploading,
            })}
            disabled={isSubmitting || isUploading}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default UserDataFormSubsmition