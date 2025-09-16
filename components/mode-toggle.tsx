"use client"

import * as React from "react"
import { Moon, Sun, SettingsIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DarkButton() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild >
        <Button className="w-full " variant="outline" size="icon">
          <Sun className="h-[2.2rem] w-[2.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 hover:bg-gray-800/10" />
          <Moon className="absolute h-[2.2rem] w-[2.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 hover:bg-gray-800/10" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="h-[2.2rem] w-[2.2rem] text-black  scale-100  dark:text-white " /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="h-[2.2rem] w-[2.2rem] text-black  scale-100 dark:text-white " /> Dark 
        </DropdownMenuItem>
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
