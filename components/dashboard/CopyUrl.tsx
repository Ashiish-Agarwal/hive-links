import { ClipboardWithIcon } from "flowbite-react";


export function CopyToClipboard({id,name}:{id:string,name:string}) {
    const CopyDomain = process.env.PUBLIC_DOMAIN
  return (



<>







    <div className="  w-full   ">
      <div className=" flex gap-5  items-center w-full h-full justify-center  ">
        <div className=" w-full max-w-[30rem]">

        <label htmlFor="copyUrl" className="sr-only">
          Label
        </label>
        <input
          id="copyUrl"
          type="text"
          className="col-span-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          value={`${CopyDomain}/box/${encodeURIComponent(name)}/${id}/inbox`}
          disabled
          readOnly
          />
          </div>
          <div className="flex   w-full max-w-[3rem] h-full items-center justify-center   ">



          <ClipboardWithIcon title="Copy" className="" valueToCopy= {`${CopyDomain}/box/${encodeURIComponent(name)}/${id}/inbox`} />

          </div>
        




      </div>


    





    </div>
          </>
   
  );
}
