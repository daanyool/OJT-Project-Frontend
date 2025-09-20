import AppSidebar from "@/components/core-ui/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard layout for the application',

}
import { BellDot, UserRound } from 'lucide-react';
export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      // Custom CSS vars for sidebar width
      style={{} as React.CSSProperties}
      className="data-[collapsed=true]:w-6rem"
    >
      <AppSidebar></AppSidebar>
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
          <div>
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 h-4 data-[orientation=vertical]"
            />
          </div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                <BellDot />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
              <UserRound color="#000000" />
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="w-full h-full min-h-screen">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
