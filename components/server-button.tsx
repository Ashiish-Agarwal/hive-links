'use client';

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const ServerButton = ({ children }: { children: React.ReactNode }) => {
  // const { pending } = useFormStatus();
  const pending = useFormStatus().pending

  return (
    <Button
      type="submit"
      className={cn('w-full', {
        'opacity-50 cursor-not-allowed': pending,
      })}
       disabled={pending}
    >
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : children}
    </Button>
  );
};

export default ServerButton;
