import { OurFileRouter } from "@/app/api/uploadthing/core";

declare module "uploadthing/next" {
  type OurFileRouter = OurFileRouter;
}
