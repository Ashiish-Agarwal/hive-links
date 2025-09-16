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

import {  useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Loader2, Plus, Trash2,  } from "lucide-react"
import { Textarea } from "../ui/textarea"
import { toast } from "sonner"
import { Card } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { usePathname } from "next/navigation"





function UserDataFormSubsmition() {

  


  const [isSubmitting, setIsSubmitting] = useState(false)

  const router = useRouter()


  




  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isConverting, setIsConverting] = useState(false)

  // new based image converter
  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, rejects) => {
      const Reader = new FileReader()
      Reader.onloadend = () => resolve(Reader.result as string)
      Reader.onerror = rejects
      Reader.readAsDataURL(file)


    })



  }



  // 🔥 NEW: Handle file selection and conversion
  const handleFileChange = async (file: File | null) => {
    if (!file) {
      setImagePreview(null)
      form.setValue('profile', '')
      return
    }

 
    if (!file.type.startsWith('image/')) {
      toast.error('Please select a valid image file')
      return
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024 // 5MB in bytes
    if (file.size > maxSize) {
      toast.error('Image size should be less than 5MB')
      return
    }

    try {
      setIsConverting(true)

      // Convert to base64
      const base64String = await convertToBase64(file)

      // Set preview and form value
      setImagePreview(base64String)
      form.setValue('profile', base64String)

      toast.success('Image uploaded successfully!')

    } catch (error) {
      console.error('Error converting file:', error)
      toast.error('Failed to process image')
    } finally {
      setIsConverting(false)
    }
  }

  // 🔥 NEW: Remove image
  const removeImage = () => {
    setImagePreview(null)
    form.setValue('profile', '')
    // Reset file input
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    if (fileInput) fileInput.value = ''
  }




  // 1. Define your form.
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

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof userDataSchema>) {

    setIsSubmitting(true)

    const data = await createProduct(values) 

    if (data.success) {
      toast.success(data.message)



      router.push(`/dashboard`)

    }

    else {

      toast.error(data.message)

    }
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full  h-full flex flex-col items-center justify-center  ">




        <div className="  flex flex-col ">

{/* avataar effects */}
          <div className=" mt-36 flex items-center gap-4  flex-col ">

<Avatar>
<AvatarImage className="rounded-full size-24 object-cover " src={imagePreview || "https://github.com/shadcn.png"} />
<AvatarFallback className="rounded-full size-24">CN</AvatarFallback>
</Avatar>

            <FormField
              control={form.control}
              name='profile'
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>Profile Image</FormLabel>
                  <FormControl>
                    <div className="space-y-4">
                      {/* File Input */}
                      <div className="flex items-center gap-4">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0] || null
                            handleFileChange(file)
                          }}
                          disabled={isConverting || isSubmitting}
                          className="flex-1"
                          {...fieldProps}
                        />

                        {isConverting && (
                          <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                        )}
                      </div>



                    </div>
                  </FormControl>
                  <FormDescription>
                    Upload your profile picture. It will be converted to base64 for database storage.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>


          <div className="  w-[30rem]  " >




            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input className="w-full " placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="  w-[30rem]  " >

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />


          </div>

          <Card className="w-[30rem] h-fit   flex flex-col gap-8 p-8">
<div className="w-full h-[20rem] overflow-y-scroll hide-scrollbar  gap-4 flex flex-col ">


            {/* adding multiple links down here */}

            {fields.map((field, index) => (
              <div key={field.id} className="border  rounded-lg p-4 space-y-4 relative">
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
<div className="w-full  items-center flex justify-end">

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
          <Button
            type="submit"
            className={cn('w-full', {
              'opacity-50 cursor-not-allowed': isSubmitting,
            })}
            disabled={isSubmitting}
          >

            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin  cursor-not-allowed " /> : 'Submit'}
          </Button>

        </div>
      </form>
    </Form>
  )
}
export default UserDataFormSubsmition;

