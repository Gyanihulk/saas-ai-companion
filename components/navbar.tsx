"use client";

import { cn } from "@/lib/utils";
import { Menu ,Sparkles} from "lucide-react";
import { Poppins } from "next/font/google";
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "@/components/ui/mobileSidebar";
import { useProModal } from "@/hooks/use-pro-modal";
import { boolean } from "zod";

const font= Poppins({
    weight:"600",
    subsets:["latin"]
})

interface NavbarProps {
    isPro:boolean
}
export const Navbar = ({isPro}:NavbarProps) => {
    const promodal=useProModal()
  return (
    <div className="fixed w-full items-center flex justify-between z-50  py-2 px-4 border-b border-primary/10 bg-secondary h-16">
        <div className="flex items-center">
            <MobileSidebar/>
<Link href={"/"}>
    <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary",font.className)}>
        Gyani Gurus
    </h1>
</Link>
        </div>
        <div className="flex items-center gap-x-3">
{!isPro &&(

    <Button variant="premium" size={"sm"} onClick={promodal.onOpen}>
    Upgrade 
    <Sparkles className="h-4 w-4 fill-white text-white ml-2"></Sparkles>

</Button>
    )}
           <ModeToggle/> 
           <UserButton afterSignOutUrl="/"/>
        </div>
    </div>
  );
};
