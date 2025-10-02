"use client";

import { UploadButton, UploadDropzone } from "@/lib/utils/uploadthing";


export default function UploadThing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
      
        endpoint="imageUploader"
        onClientUploadComplete={(res: Array<{ url: string }>) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res: Array<{ url: string }>) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
