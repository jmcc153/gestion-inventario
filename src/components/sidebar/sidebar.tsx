import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  BookLock,
  ChartNoAxesCombined,
  ChevronDown,
  ClipboardList,
  Home,
  Package2,
  Search,
  Settings,
  Users,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";

// This is sample data.
const items = [
  {
    title: "Inicio",
    url: "/home",
    icon: Home,
    childrens: [],
  },
  {
    title: "Administrador",
    url: "#",
    icon: BookLock,
    childrens: [
      {
        icon: Users,
        title: "Usuarios",
        url: "/admin/users",
      },
      {
        icon: BookLock,
        title: "Roles",
        url: "/admin/roles",
      },
      {
        icon: BookLock,
        title: "Categorias",
        url: "/admin/categories",
      },
      {
        icon: Package2,
        title:"Inventario",
        url: "/admin/inventory",
      }
    ],
  },
  {
    title: "Ventas",
    url: "#",
    icon: ClipboardList,
    childrens: [
      {
        icon: ClipboardList,
        title: "Lista de Ventas",
        url: "/sales",
      },
      {
        icon: ChartNoAxesCombined,
        title: "Reportes",
        url: "/sales/reports",
      },
    ],
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    childrens: [],
  },
];
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Logo</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) =>
                item.childrens && item.childrens.length > 0 ? (
                  <Collapsible className="group/collapsible" key={item.title}>
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <div className="flex items-center justify-between">
                          <SidebarMenuButton>
                            <item.icon />
                            <span>{item.title}</span>
                          </SidebarMenuButton>
                          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.childrens.map((child) => (
                            <SidebarMenuSubItem className="w-full flex items-center" key={child.title}>
                              <child.icon className="size-4 mr-1" />
                              <a className="w-full" href={child.url}>{child.title}</a>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
