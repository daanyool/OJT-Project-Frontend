"use client";

import { ChevronRight, Ellipsis, type LucideIcon } from "lucide-react";
import React from "react";
import { useSidebar } from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import clsx from "clsx";
type NavSubItem = {
  title: string;
  url: string;
};
type NavItem =
  | {
      title: string;
      url: string;
      icon: LucideIcon;
      isActive?: boolean;
      items?: never;
    }
  | {
      title: string;
      url?: never;
      icon: LucideIcon;
      isActive?: boolean;
      items: NavSubItem[];
    };
type NavSection = {
  title: string;
  items: NavItem[];
};
export default function NavMain({ content }: { content: NavSection[] }) {
  const { open } = useSidebar();
  return (
    <SidebarGroup className={clsx('', open === false ? 'flex-col items-start justify-center': '')}>
      {content.map((section) => (
        <React.Fragment key={section.title} >
                    {/* Need fixing */}
                    {open===true ?<SidebarGroupLabel className='text-[12px] pl-3'>{section.title}</SidebarGroupLabel>: <Ellipsis className="mr-auto ml-3.5" color={'gray'}/>}
          
          <SidebarMenu className="pl-2.5">
            {section?.items?.map((item) => (
              <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
                <SidebarMenuItem>
                  {item.url ? (
                    <SidebarMenuButton asChild tooltip={{children:item.title,  hidden: false,}}
                      className="group flex w-full items-center justify-start data-[collapsed=true]:hidden h-[40px] py-[8px]">
                      <Link
                        href={item.url}
                        className="flex items-center w-full"
                      >
                        <item.icon className='shrink-0 size-6'/>
                        <span className="pl-[18px] text-[14px] font-medium data-collapsed=true:hidden flex-1 group-data-[collapsed=true]:hidden">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  ) : item.items?.length ? (
                    <>
                      <CollapsibleTrigger asChild>
                        {/* 1️⃣  add group + flex classes here */}
                        <SidebarMenuButton
                          tooltip={item.title}
                          className="group flex w-full  items-center justify-start h-[40px] py-[8px]"
                        >
                          {/*  your icon for the item */}
                          <item.icon size={24} className="shrink-0" />

                          <span className="pl-[18px] text-sm font-medium flex-1 group-data-[collapsed=true]:hidden">
                            {item.title}
                          </span>

                          {/* 2️⃣  Chevron reacts to the group's data‑state  */}
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent className="pl-7 overflow-hidden transition-all duration-200 ease-in-out data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
                      >
                        <SidebarMenuSub className="!border-l-0 !pl-0">
                          {item.items.map((sub) => (
                            <SidebarMenuSubItem key={sub.title}>
                              <SidebarMenuSubButton asChild className='py-[10px] px-[12px] h-[40px]'>
                                <Link href={sub.url}>
                                  <span className="font-medium">
                                    {sub.title}
                                  </span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </React.Fragment>
      ))}
    </SidebarGroup>
  );
}
