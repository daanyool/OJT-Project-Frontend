"use client";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
} from "@/components/ui/sidebar";
import { Command } from "lucide-react";
import Link from "next/link";
import { data as mockData } from "./mock";
import NavMain from "./nav-main";
import clsx from "clsx";
import { useState } from "react";
import { useSidebar } from "@/components/ui/sidebar";


export default function AppSidebar(data: SidebarData) {
  const [hovered, setHovered] = useState(false);
  const { open } = useSidebar();
  return (
    <>
      {/* Left: Icons only */}
      <Sidebar
        collapsible="icon"
        className={clsx(`
    border-r transition-all duration-300 
      ${hovered ? "data-[state=open]" : "data-[state=close]"}${open? '': ' flex-col items-center justify-center'}`)}
        onMouseEnter={() => setHovered(true)}
      >
        <SidebarHeader className="px-4.5 mt-5">
          <Link
            href="#"
            className={`
        flex items-center w-full transition-all  flex-col
        group-data-[state=open]:justify-center
        group-data-[state=closed]:justify-start
        space-x-4 
      `}
          >
            <div
              className="bg-sidebar-primary text-sidebar-primary-foreground 
                   flex w-9 h-10 shrink-0 items-center justify-center rounded-lg
                   transition-all"
            >
              <Command className="size-6 shrink-0" />
            </div>

            <div
              className="
               flex-1 whitespace-nowrap overflow-hidden
               text-left text-sm leading-tight 
               transition-all duration-300
               group-data-[state=true]:opacity-0
               group-data-[state=true]:scale-95
               group-data-[state=true]:w-0
               data-[state=true]:overflow-hidden
               data-[state=closed]:hidden
               "
            >
              <span className="truncate font-medium text-xl">Acme Inc</span>
            </div>
          </Link>
        </SidebarHeader>

        <SidebarContent>
          <NavMain content={mockData.sidebar} />
        </SidebarContent>
      </Sidebar>
    </>
  );
}
