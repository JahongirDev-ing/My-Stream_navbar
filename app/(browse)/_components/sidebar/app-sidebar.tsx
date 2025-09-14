import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Following from "./following"
import Navigation from "./navigation"
import Recommended from "./recommended"
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { ChevronUp, User2 } from "lucide-react"
import { DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
        <SidebarContent>
            <Navigation/>
            <SidebarSeparator/>
            <Following/>
            <SidebarSeparator/>
            <Recommended/>
        </SidebarContent>
      <SidebarHeader />
      <SidebarFooter />
      <SidebarMenu>
        <SidebarMenuItem>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="ml-1.5">
                    <User2/>Username
                    <ChevronUp className="ml-auto"/>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="top"
                className="w-[--radix-popper-ancher-width]">
                 <DropdownMenuItem>
                    <Link href={"/03"}>
                    <span>Acount</span>
                    </Link>
                 </DropdownMenuItem>
                 <DropdownMenuItem>
                    <Link href={"/dashboard"}>
                    <span>Dashboard</span>
                    </Link>
                 </DropdownMenuItem>
                 <DropdownMenuItem>
                    <span>Sign out</span>
                 </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </Sidebar>
  )
}